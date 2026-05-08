import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e6e1d6] bg-[#f4f1ea]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <p className="text-lg font-semibold">AuditFlow</p>
            <p className="text-sm text-[#6b645a]">
              AI-powered UX audits that help teams fix conversion blockers before
              the next sprint.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-semibold">Product</p>
            <ul className="space-y-2 text-[#6b645a]">
              <li>
                <Link href="#features" className="hover:text-[#01696f]">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-[#01696f]">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-[#01696f]">
                  How it works
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-semibold">Company</p>
            <ul className="space-y-2 text-[#6b645a]">
              <li>
                <Link href="/about" className="hover:text-[#01696f]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#01696f]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#01696f]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-semibold">Legal</p>
            <ul className="space-y-2 text-[#6b645a]">
              <li>
                <Link href="/privacy" className="hover:text-[#01696f]">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#01696f]">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-[#01696f]">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-[#e6e1d6] pt-6 text-xs text-[#6b645a] md:flex-row md:items-center md:justify-between">
          <span>© 2026 AuditFlow. All rights reserved.</span>
          <span>Built for product, growth, and UX teams.</span>
        </div>
      </div>
    </footer>
  );
}
