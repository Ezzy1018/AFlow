'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const BUYMEACOFFEE_USERNAME = process.env.NEXT_PUBLIC_BUYMEACOFFEE_USERNAME || 'someui';

export default function CheckoutSinglePage() {
  const handleCheckout = () => {
    // Redirect directly to Buy Me a Coffee
    window.location.href = `https://buymeacoffee.com/${BUYMEACOFFEE_USERNAME}/e/49`;
  };

  return (
    <div className="flex flex-col min-h-full bg-[#f9f8f5] text-[#28251d]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-2">One-Time Purchase</h1>
            <p className="text-[#6b645a] mb-6">Get instant access to comprehensive website audits</p>

            <div className="border border-[#e8e6e0] rounded-xl p-6 mb-6">
              <div className="text-sm text-[#6b645a] mb-2">Price</div>
              <div className="text-4xl font-bold mb-1">$49</div>
              <div className="text-sm text-[#6b645a]">one-time payment</div>

              <div className="border-t border-[#e8e6e0] mt-6 pt-6">
                <div className="text-sm font-medium mb-4">Includes:</div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#d4a574] mr-2">✓</span>
                    <span>Full website audit report</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4a574] mr-2">✓</span>
                    <span>Performance & UX analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4a574] mr-2">✓</span>
                    <span>Actionable recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4a574] mr-2">✓</span>
                    <span>PDF export</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-[#d4a574] hover:bg-[#c49564] text-white font-medium py-3 rounded-lg transition"
            >
              Buy Now
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
