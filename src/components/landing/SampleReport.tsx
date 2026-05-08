import { Lock, Sparkles } from "lucide-react";

export default function SampleReport() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a8174]">
            Sample report
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#28251d]">
            See the exact insights your team gets
          </h2>
          <p className="text-sm text-[#6b645a]">
            We break down every screen with clear fixes, supporting screenshots,
            and prioritized outcomes.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-[#e6e1d6] bg-white p-8 shadow-lg">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f1ede4] px-3 py-1 text-xs font-semibold text-[#01696f]">
                <Sparkles className="h-4 w-4" />
                Audit score: 72
              </div>
              <h3 className="text-2xl font-semibold text-[#28251d]">
                Checkout flow loses momentum after shipping reveal
              </h3>
              <p className="text-sm text-[#6b645a]">
                The shipping cost appears after the customer commits. Move this
                earlier and reinforce value to reduce surprise.
              </p>
              <div className="rounded-2xl border border-[#ebe6dc] bg-[#f9f8f5] p-4 text-sm text-[#5d554a]">
                Recommendation: show shipping estimate in the cart summary, and
                preselect the fastest option to build trust.
              </div>
            </div>
            <div className="space-y-3">
              {[
                "CTA hierarchy in hero section",
                "Social proof missing near pricing",
                "Mobile checkout form is 12 fields long",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#ebe6dc] bg-white p-4 text-sm text-[#6b645a]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#f9f8f5] via-[#f9f8f5]/90 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#28251d]">
              <Lock className="h-4 w-4" />
              Unlock the full report to see 27 more insights
            </div>
            <span className="rounded-full bg-[#01696f] px-4 py-2 text-xs font-semibold text-white">
              Paywall preview
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
