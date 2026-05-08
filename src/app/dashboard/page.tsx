import Link from "next/link";
import { ArrowRight, BarChart3, Globe, Sparkles } from "lucide-react";

const history = [
  {
    url: "https://luma.finance",
    score: 78,
    date: "May 6, 2026",
  },
  {
    url: "https://atelier.studio",
    score: 64,
    date: "May 2, 2026",
  },
  {
    url: "https://opal.app",
    score: 71,
    date: "Apr 28, 2026",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#f9f8f5] px-6 py-12 text-[#28251d]">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="flex flex-col gap-6 border-b border-[#e6e1d6] pb-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a8174]">
              Dashboard
            </p>
            <h1 className="text-3xl font-semibold">
              Keep every audit and decision in one place
            </h1>
            <p className="text-sm text-[#6b645a]">
              Run a new audit, track results over time, and align your team on
              the most impactful fixes.
            </p>
          </div>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-full border border-[#01696f] px-5 py-2 text-sm font-semibold text-[#01696f] transition hover:bg-[#01696f] hover:text-white"
          >
            Upgrade plan
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-[#e6e1d6] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Run a new audit</p>
              <Sparkles className="h-4 w-4 text-[#01696f]" />
            </div>
            <form
              action="/audit/preview"
              method="get"
              className="mt-4 flex flex-col gap-3 md:flex-row md:items-center"
            >
              <div className="flex flex-1 items-center gap-3 rounded-xl border border-[#e6e1d6] bg-[#f9f8f5] px-4 py-3">
                <Globe className="h-5 w-5 text-[#01696f]" />
                <input
                  type="url"
                  name="url"
                  placeholder="https://yourproduct.com"
                  className="w-full bg-transparent text-sm text-[#28251d] placeholder:text-[#8a8174] focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-[#01696f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#035e63]"
              >
                Run audit
              </button>
            </form>
          </div>

          <div className="rounded-3xl border border-[#e6e1d6] bg-[#f4f1ea] p-6 shadow-sm">
            <p className="text-sm font-semibold">Account snapshot</p>
            <div className="mt-4 space-y-3 text-sm text-[#6b645a]">
              <div className="flex items-center justify-between">
                <span>Plan</span>
                <span className="font-semibold text-[#28251d]">Pro trial</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Audits this month</span>
                <span className="font-semibold text-[#28251d]">6</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Avg. score</span>
                <span className="font-semibold text-[#28251d]">71</span>
              </div>
            </div>
            <button className="mt-6 w-full rounded-full bg-[#28251d] px-4 py-2 text-sm font-semibold text-white">
              Invite teammate
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-[#e6e1d6] bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Recent audits</p>
            <BarChart3 className="h-4 w-4 text-[#01696f]" />
          </div>
          <div className="mt-4 divide-y divide-[#ebe6dc]">
            {history.map((item) => (
              <div
                key={item.url}
                className="flex flex-col gap-2 py-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-sm font-semibold text-[#28251d]">
                    {item.url}
                  </p>
                  <p className="text-xs text-[#6b645a]">{item.date}</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="rounded-full bg-[#f1ede4] px-3 py-1 font-semibold text-[#01696f]">
                    Score {item.score}
                  </span>
                  <Link
                    href={`/audit/preview?url=${encodeURIComponent(item.url)}`}
                    className="text-sm font-semibold text-[#01696f]"
                  >
                    View report
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
