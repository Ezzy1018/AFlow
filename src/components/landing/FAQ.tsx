"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does an audit take?",
    answer:
      "Most audits are delivered in under 10 minutes. Larger sites may take up to 30 minutes.",
  },
  {
    question: "Do you analyze mobile experiences?",
    answer:
      "Yes. Every report includes mobile-specific findings and responsive layout checks.",
  },
  {
    question: "Can I share the report with my team?",
    answer:
      "Absolutely. Reports can be exported to PDF or shared as a private link.",
  },
  {
    question: "What makes AuditFlow different from heatmaps?",
    answer:
      "We deliver expert-level UX analysis with clear fixes, not just activity data.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We only scan publicly available pages and never store customer data.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-16">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a8174]">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#28251d]">
            Everything you need before running your audit
          </h2>
          <p className="text-sm text-[#6b645a]">
            Quick answers for product, growth, and UX teams.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={faq.question}
                type="button"
                onClick={() =>
                  setOpenIndex((prev) => (prev === index ? null : index))
                }
                className="flex w-full flex-col gap-3 rounded-2xl border border-[#e6e1d6] bg-white p-5 text-left"
              >
                <div className="flex w-full items-center justify-between">
                  <span className="text-base font-semibold text-[#28251d]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#8a8174] transition ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {isOpen && (
                  <p className="text-sm text-[#6b645a]">{faq.answer}</p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
