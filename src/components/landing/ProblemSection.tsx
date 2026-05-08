import { AlertTriangle, Ban, Gauge } from "lucide-react";

const stats = [
  {
    icon: Gauge,
    value: "38%",
    label: "Visitors drop before pricing",
  },
  {
    icon: AlertTriangle,
    value: "22 min",
    label: "Wasted per session on UX reviews",
  },
  {
    icon: Ban,
    value: "3.1x",
    label: "Lower trust when proof is buried",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-[#28251d] px-6 py-16 text-white">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d9d2c6]">
            The problem
          </p>
          <h2 className="text-3xl font-semibold leading-tight">
            Teams ship fast, but conversion leaks hide in plain sight
          </h2>
          <p className="text-sm text-[#d9d2c6]">
            AuditFlow reveals the friction points your analytics can&apos;t explain.
            See exactly where trust erodes and revenue slips away.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <Icon className="h-6 w-6 text-[#f9f8f5]" />
                <p className="mt-4 text-3xl font-semibold">{stat.value}</p>
                <p className="mt-2 text-sm text-[#d9d2c6]">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
