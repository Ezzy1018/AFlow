"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Lock, Sparkles } from "lucide-react";
import type { AuditReport } from "@/types/audit";

export default function AuditPreviewPage() {
  const searchParams = useSearchParams();
  const url = useMemo(() => searchParams.get("url"), [searchParams]);
  const [report, setReport] = useState<AuditReport | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    async function loadReport() {
      if (!url) {
        setLoading(false);
        return;
      }

      try {
        setError(null);
        const response = await fetch("/api/audit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        });

        if (!response.ok) {
          let errText = "Failed to fetch audit";
          try {
            const errJson = await response.json();
            errText = errJson?.error || JSON.stringify(errJson?.details) || errText;
          } catch {}
          if (isActive) setError(errText);
          return;
        }

        const data = (await response.json()) as AuditReport;
        if (isActive) {
          setReport(data);
        }
      } catch (error) {
        console.error(error);
        if (isActive) setError((error as Error).message);
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    void loadReport();

    return () => {
      isActive = false;
    };
  }, [url]);

  return (
    <div className="min-h-screen bg-[#f9f8f5] px-6 py-12 text-[#28251d]">
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <Link href="/" className="text-sm font-semibold text-[#01696f]">
          ← Back to AuditFlow
        </Link>
        <div className="rounded-3xl border border-[#e6e1d6] bg-white p-8 shadow-lg">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#f1ede4] px-3 py-1 text-xs font-semibold text-[#01696f]">
              <Sparkles className="h-4 w-4" />
              Audit preview
            </div>
            <h1 className="text-3xl font-semibold">
              {url ? `UX audit for ${url}` : "Paste a URL to begin"}
            </h1>
            {loading && (
              <p className="text-sm text-[#6b645a]">Running your audit...</p>
            )}
            {!loading && error && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                <p className="font-semibold">Audit failed</p>
                <p className="mt-1">{error}</p>
                <p className="mt-2 text-xs text-red-600">Try again in a moment or check your API configuration.</p>
              </div>
            )}
            {!loading && report && (
              <p className="text-sm text-[#6b645a]">
                Report generated on {new Date(report.auditedAt).toLocaleString()}.
              </p>
            )}
          </div>
          {!loading && report && (
            <div className="mt-8 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
              <div className="space-y-4">
                <div className="rounded-2xl border border-[#ebe6dc] bg-[#f9f8f5] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a8174]">
                    Overall score
                  </p>
                  <p className="mt-4 text-4xl font-semibold">
                    {report.score.overall}
                  </p>
                  <div className="mt-4 space-y-2 text-sm text-[#6b645a]">
                    {report.score.categories.map((category) => (
                      <div
                        key={category.category}
                        className="flex items-center justify-between"
                      >
                        <span className="capitalize">{category.category}</span>
                        <span>{category.score}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-[#ebe6dc] bg-white p-5">
                  <p className="text-sm font-semibold">Highlights</p>
                  <ul className="mt-3 space-y-2 text-sm text-[#6b645a]">
                    {report.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-[#e6e1d6] bg-white p-6">
                <p className="text-sm font-semibold">Top issues</p>
                <div className="mt-4 space-y-4">
                  {report.issues.slice(0, 3).map((issue) => (
                    <div
                      key={issue.id}
                      className="rounded-2xl border border-[#ebe6dc] bg-[#f9f8f5] p-4"
                    >
                      <p className="text-sm font-semibold text-[#28251d]">
                        {issue.title}
                      </p>
                      <p className="mt-2 text-sm text-[#6b645a]">
                        {issue.description}
                      </p>
                      <p className="mt-2 text-xs font-semibold text-[#01696f]">
                        Fix: {issue.recommendation}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f9f8f5] via-[#f9f8f5]/90 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#28251d]">
                    <Lock className="h-4 w-4" />
                    Unlock the full audit
                  </div>
                  <Link
                    href="/checkout/single"
                    className="rounded-full bg-[#01696f] px-4 py-2 text-xs font-semibold text-white"
                  >
                    Continue →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
