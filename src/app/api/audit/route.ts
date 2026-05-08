import { NextResponse } from "next/server";
import type { AuditReport } from "@/types/audit";

export async function POST(request: Request) {
  const { url } = (await request.json()) as { url?: string };

  const report: AuditReport = {
    url: url ?? "https://example.com",
    auditedAt: new Date().toISOString(),
    score: {
      overall: 72,
      clarity: 68,
      trust: 74,
      friction: 61,
    },
    highlights: [
      "Headline clarity improved by 22%",
      "Top CTA now visible above the fold",
      "Mobile checkout form reduced by 5 fields",
    ],
    issues: [
      {
        id: "cta-visibility",
        title: "Primary CTA blends into hero image",
        summary:
          "The main action button is visually competing with the hero image and secondary links.",
        severity: "high",
        recommendation:
          "Increase contrast and move CTA to the left column to align with eye flow.",
      },
      {
        id: "social-proof",
        title: "Trust badges sit below pricing fold",
        summary:
          "Prospects miss credibility indicators until after they scroll past pricing.",
        severity: "medium",
        recommendation:
          "Move customer logos and testimonials into the pricing block.",
      },
      {
        id: "checkout-friction",
        title: "Checkout form requests too much detail",
        summary:
          "Users are asked for company data before they see total cost.",
        severity: "medium",
        recommendation:
          "Defer optional fields and reveal pricing summary earlier.",
      },
      {
        id: "mobile-scroll",
        title: "Mobile navigation hides key anchors",
        summary:
          "Critical sections are two scrolls away on small screens.",
        severity: "low",
        recommendation:
          "Add jump links and shorten hero height on mobile.",
      },
    ],
  };

  return NextResponse.json(report);
}
