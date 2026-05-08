'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const BUYMEACOFFEE_USERNAME = process.env.NEXT_PUBLIC_BUYMEACOFFEE_USERNAME || 'someui';

export default function CheckoutMonthlyPage() {
  const handleCheckout = () => {
    // Redirect directly to Buy Me a Coffee
    window.location.href = `https://buymeacoffee.com/${BUYMEACOFFEE_USERNAME}/membership`;
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

            <button
              onClick={handleCheckout}
              className="w-full bg-[#d4a574] hover:bg-[#c49564] text-white font-medium py-3 rounded-lg transition"
            >
              Subscribe
            </button>

            <p className="text-xs text-[#6b645a] text-center mt-4">
              Secure payment powered by Buy Me a Coffee
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
