import {
  BadgeCheck,
  Columns,
  FileText,
  LayoutGrid,
  MousePointerClick,
  Smartphone,
} from "lucide-react";

const features = [
  {
    title: "Visual hierarchy",
    description: "Identify where scanning breaks and guide eyes to revenue.",
    icon: LayoutGrid,
  },
  {
    title: "CTA strength",
    description: "Fix weak or invisible calls-to-action before launch.",
    icon: MousePointerClick,
  },
  {
    title: "Trust signals",
    description: "Surface missing proof that blocks buyer confidence.",
    icon: BadgeCheck,
  },
  {
    title: "Mobile readiness",
    description: "Catch spacing, scroll, and speed issues on small screens.",
    icon: Smartphone,
  },
  {
    title: "Copy clarity",
    description: "Rewrite unclear headlines, value props, and microcopy.",
    icon: FileText,
  },
  {
    title: "Friction hotspots",
    description: "Highlight form, pricing, and navigation choke points.",
    icon: Columns,
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-16">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a8174]">
            Features
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#28251d]">
            Every UX signal you need to lift conversion
          </h2>
          <p className="text-sm text-[#6b645a]">
            AuditFlow delivers clarity across layout, content, and trust so your
            next sprint is laser-focused.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-[#e6e1d6] bg-white p-6 shadow-sm"
              >
                <Icon className="h-6 w-6 text-[#01696f]" />
                <h3 className="mt-4 text-lg font-semibold text-[#28251d]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-[#6b645a]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
