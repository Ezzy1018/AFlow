'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CheckCircle } from 'lucide-react';

export default function CheckoutSuccessPage() {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setSessionId(searchParams.get('session_id'));
  }, []);

  return (
    <div className="flex flex-col min-h-full bg-[#f9f8f5] text-[#28251d]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-[#d4a574]" />
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
          <p className="text-[#6b645a] mb-6">
            Thank you for your purchase. Your access is now active.
          </p>

          {sessionId && (
            <p className="text-xs text-[#6b645a] mb-6 break-all">
              Session ID: {sessionId}
            </p>
          )}

          <div className="bg-white rounded-xl border border-[#e8e6e0] p-6 mb-6">
            <p className="text-sm font-medium mb-3">What's next?</p>
            <ul className="space-y-2 text-sm text-[#6b645a]">
              <li>✓ Check your email for confirmation</li>
              <li>✓ Your account is ready to use</li>
              <li>✓ Visit your dashboard to start</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/dashboard"
              className="bg-[#d4a574] hover:bg-[#c49564] text-white font-medium py-3 rounded-lg transition text-center"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/"
              className="border border-[#e8e6e0] hover:bg-white text-[#28251d] font-medium py-3 rounded-lg transition text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
