import { ClipboardCheck, FileSearch, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Paste your URL",
    description:
      "Drop in the product or landing page you want to improve. We snapshot every key screen.",
    icon: FileSearch,
  },
  {
    title: "AI analyzes UX",
    description:
      "AuditFlow scores hierarchy, trust, and friction with senior UX heuristics.",
    icon: Sparkles,
  },
  {
    title: "Get a report",
    description:
      "Receive a prioritized list of fixes with copy suggestions and layout moves.",
    icon: ClipboardCheck,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-16">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a8174]">
            How it works
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#28251d]">
            From URL to action plan in under 5 minutes
          </h2>
          <p className="text-sm text-[#6b645a]">
            We blend UX heuristics with live page parsing to surface what matters
            most for conversion.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-2xl border border-[#e6e1d6] bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1ede4] text-sm font-semibold text-[#01696f]">
                    0{index + 1}
                  </span>
                  <Icon className="h-5 w-5 text-[#01696f]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#28251d]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[#6b645a]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
