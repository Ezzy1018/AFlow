import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Pricing from "@/components/landing/Pricing";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="px-6 pb-8 pt-12">
          <div className="mx-auto w-full max-w-6xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a8174]">
              Plans
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-[#28251d]">
              Choose the plan that matches your audit cadence
            </h1>
            <p className="text-sm text-[#6b645a]">
              Upgrade at any time. Cancel anytime. Keep every report you run.
            </p>
            <Link href="/login" className="text-sm font-semibold text-[#01696f]">
              Already a member? Sign in →
            </Link>
          </div>
        </section>
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
