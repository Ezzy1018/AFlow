'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function CheckoutMonthlyPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/checkout/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY,
          mode: 'subscription',
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create checkout session');
      }

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      const stripe = await import('@stripe/stripe-js').then(m => m.loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
      ));

      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });
      if (stripeError) {
        throw stripeError;
      }
    } catch (err) {
      console.error(err);
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-full bg-[#f9f8f5] text-[#28251d]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-2">Pro Subscription</h1>
            <p className="text-[#6b645a] mb-6">Unlimited audits every month</p>

            <div className="border border-[#e8e6e0] rounded-xl p-6 mb-6">
              <div className="text-sm text-[#6b645a] mb-2">Price</div>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-[#6b645a] ml-2">/month</span>
              </div>
              <div className="text-sm text-[#6b645a] mt-1">Cancel anytime</div>

              <div className="border-t border-[#e8e6e0] mt-6 pt-6">
                <div className="text-sm font-medium mb-4">Includes everything:</div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#d4a574] mr-2">✓</span>
                    <span>Unlimited audits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4a574] mr-2">✓</span>
                    <span>Full reports with recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4a574] mr-2">✓</span>
                    <span>PDF export</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4a574] mr-2">✓</span>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4a574] mr-2">✓</span>
                    <span>API access</span>
                  </li>
                </ul>
              </div>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-[#d4a574] hover:bg-[#c49564] text-white font-medium py-3 rounded-lg transition disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Start Free Trial'}
            </button>

            <p className="text-xs text-[#6b645a] text-center mt-4">
              Secure payment powered by Stripe
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
