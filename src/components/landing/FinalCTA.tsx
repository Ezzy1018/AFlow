import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-3xl bg-[#01696f] px-8 py-12 text-white md:px-12">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Ready to ship smarter?
            </p>
            <h2 className="text-3xl font-semibold leading-tight">
              Stop guessing. Launch with a UX plan the whole team trusts.
            </h2>
            <p className="text-sm text-white/80">
              Start a free audit in minutes and walk into your next sprint with
              clarity.
            </p>
            <Link
              href="#hero"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#01696f] transition hover:bg-[#f4f1ea]"
            >
              Run free audit
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
