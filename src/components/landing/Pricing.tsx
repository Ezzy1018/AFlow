import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Ideal for a quick scan before you commit.",
    features: [
      "Single landing page snapshot",
      "Top 3 conversion blockers",
      "6-dimension score breakdown",
      "Email delivery",
    ],
    cta: "Start free",
  },
  {
    name: "One-Time",
    price: "$49",
    description: "Best for one-off launches and campaigns.",
    features: [
      "Full 6-category UX audit report",
      "Annotated screenshot analysis",
      "Prioritized fix queue (ranked by impact)",
      "AI-powered rewrite suggestions",
      "Shareable PDF export",
      "Valid for 30 days",
    ],
    cta: "Get the audit",
    featured: true,
  },
  {
    name: "Pro",
    price: "$29/month",
    description: "For growth teams shipping every week.",
    features: [
      "Unlimited URL audits",
      "Team workspace + audit history",
      "Weekly auto re-audit + email alerts",
      "Competitor benchmarking",
      "White-label PDF reports",
      "API access",
    ],
    cta: "Go Pro",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-16">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a8174]">
            Pricing
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#28251d]">
            Plans for every audit cadence
          </h2>
          <p className="text-sm text-[#6b645a]">
            Start free, then upgrade when you need deeper, faster insights.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex h-full flex-col justify-between rounded-3xl border p-6 shadow-sm transition-shadow duration-200 ${
                tier.featured
                  ? "border-transparent bg-[#01696f] text-white shadow-lg"
                  : "border-[#e6e1d6] bg-white text-[#28251d] hover:shadow-md"
              }`}
            >
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-80">
                    {tier.name}
                  </p>
                  <p className="mt-3 text-3xl font-semibold">{tier.price}</p>
                  <p
                    className={`mt-2 text-sm ${
                      tier.featured ? "text-white/80" : "text-[#6b645a]"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>
                <ul className="space-y-3 text-sm">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-6 w-full rounded-full px-4 py-2 text-sm font-semibold transition active:scale-[0.99] ${
                  tier.featured
                    ? "bg-white text-[#01696f] hover:bg-[#f4f1ea]"
                    : "bg-[#28251d] text-white hover:bg-[#1c1913]"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
