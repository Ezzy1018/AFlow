'use client';

import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AlertCircle } from 'lucide-react';

export default function CheckoutCancelPage() {
  return (
    <div className="flex flex-col min-h-full bg-[#f9f8f5] text-[#28251d]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center">
          <div className="flex justify-center mb-6">
            <AlertCircle className="w-16 h-16 text-red-600" />
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Payment Cancelled</h1>
          <p className="text-[#6b645a] mb-6">
            Your payment was cancelled. You can try again or explore other options.
          </p>

          <div className="bg-white rounded-xl border border-[#e8e6e0] p-6 mb-6">
            <p className="text-sm font-medium mb-3">Having trouble?</p>
            <ul className="space-y-2 text-sm text-[#6b645a]">
              <li>Try a different payment method</li>
              <li>Contact support for assistance</li>
              <li>Explore free features</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/pricing"
              className="bg-[#d4a574] hover:bg-[#c49564] text-white font-medium py-3 rounded-lg transition text-center"
            >
              Back to Pricing
            </Link>
            <Link
              href="/"
              className="border border-[#e8e6e0] hover:bg-white text-[#28251d] font-medium py-3 rounded-lg transition text-center"
            >
              Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
