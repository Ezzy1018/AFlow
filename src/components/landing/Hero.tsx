import { ArrowRight, Globe, ShieldCheck, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="px-6 pb-16 pt-14">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e6e1d6] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b645a]">
            AI UX Audit SaaS
          </div>
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold leading-tight text-[#28251d] md:text-5xl">
              Find what&apos;s killing conversion before your next sprint
            </h1>
            <p className="max-w-2xl text-lg text-[#5d554a]">
              AuditFlow runs a senior-level UX teardown in minutes. Paste your
              URL and get a prioritized report on friction, trust gaps, and
              mobile drop-offs.
            </p>
          </div>
          <form
            action="/audit/preview"
            method="get"
            className="flex w-full flex-col gap-3 rounded-2xl border border-[#e6e1d6] bg-white p-4 shadow-sm md:flex-row md:items-center"
          >
            <div className="flex flex-1 items-center gap-3 rounded-xl border border-[#ebe6dc] bg-[#f9f8f5] px-4 py-3">
              <Globe className="h-5 w-5 text-[#01696f]" />
              <input
                type="url"
                name="url"
                placeholder="https://yourproduct.com"
                required
                className="w-full bg-transparent text-sm text-[#28251d] placeholder:text-[#8a8174] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#01696f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#035e63]"
            >
              Run free audit
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <div className="grid gap-4 text-sm text-[#5d554a] sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[#01696f]" />
              SOC2-ready handling
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-[#01696f]" />
              Avg. +18% lift
            </div>
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-[#01696f]" />
              120+ teams onboarded
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-[#e6e1d6] bg-white p-6 shadow-lg">
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#ebe6dc] bg-[#f9f8f5] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a8174]">
                Live audit preview
              </p>
              <p className="mt-3 text-lg font-semibold text-[#28251d]">
                D2C skincare funnel
              </p>
              <p className="mt-2 text-sm text-[#6b645a]">
                Checkout abandonment is 31% above benchmark.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border border-[#ebe6dc] p-4">
              <p className="text-sm font-semibold text-[#28251d]">
                Top priority fixes
              </p>
              <ul className="space-y-2 text-sm text-[#5d554a]">
                <li>Replace generic CTA with benefit-led copy.</li>
                <li>Move shipping cost disclosure above the fold.</li>
                <li>Reduce form fields on mobile checkout.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#ebe6dc] bg-[#fefcf9] p-4 text-sm text-[#5d554a]">
              <p className="font-semibold text-[#28251d]">Audit summary</p>
              <p className="mt-2">
                27 annotated issues, 6 quick wins, and a prioritized sprint plan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
