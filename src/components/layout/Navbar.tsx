import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e6e1d6] bg-[#f9f8f5]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#01696f] text-white">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5 12.5L10 17.5L19 7.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          AuditFlow
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="#how-it-works"
            className="transition-colors hover:text-[#01696f]"
          >
            How it works
          </Link>
          <Link
            href="#features"
            className="transition-colors hover:text-[#01696f]"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="transition-colors hover:text-[#01696f]"
          >
            Pricing
          </Link>
          <Link href="#faq" className="transition-colors hover:text-[#01696f]">
            FAQ
          </Link>
        </nav>
        <Link
          href="#hero"
          className="inline-flex items-center gap-2 rounded-full bg-[#01696f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#035e63] hover:shadow-md active:scale-[0.98]"
        >
          Try free
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
