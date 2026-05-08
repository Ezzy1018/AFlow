"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight, Lock, Mail } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
    } else {
      window.location.href = "/dashboard";
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#f9f8f5] px-6 py-16 text-[#28251d]">
      <div className="mx-auto w-full max-w-4xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <Link href="/" className="text-sm font-semibold text-[#01696f]">
              ← Back to AuditFlow
            </Link>
            <h1 className="text-3xl font-semibold leading-tight">
              Sign in to AuditFlow
            </h1>
            <p className="text-sm text-[#6b645a]">
              Access your audit history, priority fixes, and team workspace.
            </p>
            <div className="rounded-2xl border border-[#e6e1d6] bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a8174]">
                Trusted by teams shipping weekly
              </p>
              <div className="mt-4 grid gap-3 text-sm text-[#6b645a]">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-[#01696f]" />
                  SOC2-ready handling
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#01696f]" />
                  Email alerts on fresh audits
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-[#e6e1d6] bg-white p-6 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#28251d]">
                  Work email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-[#e6e1d6] bg-[#f9f8f5] px-4 py-3 text-sm text-[#28251d] placeholder:text-[#8a8174] focus:outline-none focus:ring-2 focus:ring-[#01696f]/40"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#28251d]">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-[#e6e1d6] bg-[#f9f8f5] px-4 py-3 text-sm text-[#28251d] placeholder:text-[#8a8174] focus:outline-none focus:ring-2 focus:ring-[#01696f]/40"
                />
              </div>
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#01696f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#035e63] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign in"}
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-[#6b645a]">
                New to AuditFlow?{" "}
                <Link href="/pricing" className="font-semibold text-[#01696f]">
                  Choose a plan
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
