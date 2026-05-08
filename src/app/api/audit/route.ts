import { NextRequest, NextResponse } from "next/server";
import type {
  AuditCategory,
  AuditReport,
  AuditSeverity,
} from "@/types/audit";
import { Anthropic } from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

const categoryFallback: AuditCategory[] = [
  "copy",
  "trust",
  "cta",
  "visuals",
  "ux",
  "seo",
];

const severityFallback: AuditSeverity[] = ["critical", "major", "minor"];

async function captureScreenshot(url: string): Promise<string | null> {
  const apiKey = process.env.SCREENTSHOT_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(
      `https://api.screenshotapi.net/screenshot?token=${apiKey}&url=${encodeURIComponent(
        url
      )}&output=image&image_format=png&no_ads=true&no_cookie_banners=true&viewport_width=1440&viewport_height=900`,
      { method: "GET" }
    );
    if (!res.ok) return null;
    const blob = await res.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return buffer.toString("base64");
  } catch {
    return null;
  }
}

function buildAuditPrompt(url: string): string {
  return `You are a senior conversion rate optimization (CRO) expert and UX designer. Analyze this landing page screenshot and provide a brutally honest, actionable audit.

Target page URL: ${url}

Output your response as a valid JSON object matching this exact structure:
{
  "overall_score": number (0-100),
  "categories": [
    {"category": "copy", "score": number, "label": "string"},
    {"category": "trust", "score": number, "label": "string"},
    {"category": "cta", "score": number, "label": "string"},
    {"category": "visuals", "score": number, "label": "string"},
    {"category": "ux", "score": number, "label": "string"},
    {"category": "seo", "score": number, "label": "string"}
  ],
  "issues": [
    {
      "id": "unique-id",
      "category": "copy"|"trust"|"cta"|"visuals"|"ux"|"seo",
      "severity": "critical"|"major"|"minor",
      "title": "short title",
      "description": "detailed description",
      "recommendation": "specific fix",
      "rewriteBefore": "original text if applicable",
      "rewriteAfter": "rewritten improved version",
      "priorityRank": 1
    }
  ],
  "highlights": ["string", "string", "string"]
}

CRITICAL: Return ONLY raw JSON. No markdown. No explanation. No code fences.

Analysis guidelines:
1. COPY: Is the headline benefit-focused? Is messaging clear? Any jargon?
2. TRUST: Testimonials? Social proof? Security badges? About/team?
3. CTA: Is there a clear primary CTA? Is it above the fold? Contrast sufficient?
4. VISUALS: Hierarchy? Spacing? Color contrast? Professional imagery?
5. UX: Navigation clarity? Scroll flow? Mobile-friendliness? Loading speed cues?
6. SEO: Meta title quality? H1 tag? Alt text? Schema markup?

Rank issues by business impact: conversion blockers first (pr 1), then UX friction (pr 2), then polish (pr 3).`;
}

function coerceCategory(value: string): AuditCategory {
  return categoryFallback.includes(value as AuditCategory)
    ? (value as AuditCategory)
    : "ux";
}

function coerceSeverity(value: string): AuditSeverity {
  return severityFallback.includes(value as AuditSeverity)
    ? (value as AuditSeverity)
    : "major";
}

export async function POST(request: NextRequest) {
  try {
    const { url } = (await request.json()) as { url?: string };

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    const screenshotBase64 = await captureScreenshot(url);

    const userContent: Array<
      | { type: "text"; text: string }
      | {
          type: "image";
          source: { type: "base64"; media_type: string; data: string };
        }
    > = [{ type: "text", text: buildAuditPrompt(url) }];

    if (screenshotBase64) {
      userContent.push({
        type: "image",
        source: { type: "base64", media_type: "image/png", data: screenshotBase64 },
      });
    }

    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-0",
      max_tokens: 2048,
      messages: [{ role: "user", content: userContent }],
    });

    let rawText = message.content
      .filter((content): content is { type: "text"; text: string } =>
        content.type === "text"
      )
      .map((content) => content.text)
      .join("");

    const jsonMatch = rawText.match(/{[\s\S]*}/);
    if (jsonMatch) {
      rawText = jsonMatch[0];
    }

    const analysis = JSON.parse(rawText) as {
      overall_score: number;
      categories: Array<{ category: string; score: number; label: string }>;
      issues: Array<{
        id: string;
        category: string;
        severity: string;
        title: string;
        description: string;
        recommendation: string;
        rewriteBefore?: string;
        rewriteAfter?: string;
        priorityRank: number;
      }>;
      highlights: string[];
    };

    const report: AuditReport = {
      id: crypto.randomUUID(),
      url,
      auditedAt: new Date().toISOString(),
      status: "done",
      screenshotUrl: screenshotBase64
        ? `data:image/png;base64,${screenshotBase64}`
        : undefined,
      score: {
        overall: Math.max(0, Math.min(100, analysis.overall_score)),
        categories: analysis.categories?.length
          ? analysis.categories.map((category) => ({
              category: coerceCategory(category.category),
              score: Math.max(0, Math.min(100, category.score)),
              label: category.label,
            }))
          : categoryFallback.map((category) => ({
              category,
              score: 0,
              label: "Needs review",
            })),
      },
      issues: analysis.issues?.length
        ? analysis.issues.map((issue, index) => ({
            id: issue.id || `issue-${index + 1}`,
            category: coerceCategory(issue.category),
            severity: coerceSeverity(issue.severity),
            title: issue.title,
            description: issue.description,
            recommendation: issue.recommendation,
            rewriteBefore: issue.rewriteBefore,
            rewriteAfter: issue.rewriteAfter,
            priorityRank: issue.priorityRank ?? index + 1,
          }))
        : [],
      highlights: analysis.highlights ?? [],
    };

    return NextResponse.json(report);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Audit generation failed" },
      { status: 500 }
    );
  }
}
