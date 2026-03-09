// src/components/FAQAccordion.jsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ categories }) {
  const [openIndex, setOpenIndex] = useState(null); // format: "categoryIndex-questionIndex"

  const toggle = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="space-y-8">
      {categories.map((category, catIdx) => (
        <div key={catIdx} className="bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#2563EB]/10 rounded-lg">
              <category.icon className="w-5 h-5 text-[#2563EB]" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-800">{category.category}</h2>
          </div>

          <div className="space-y-4">
            {category.questions.map((q, qIdx) => {
              const key = `${catIdx}-${qIdx}`;
              const isOpen = openIndex === key;
              return (
                <div
                  key={qIdx}
                  className="border border-zinc-200 rounded-xl overflow-hidden bg-white hover:border-[#2563EB]/30 transition"
                >
                  <button
                    onClick={() => toggle(catIdx, qIdx)}
                    className="w-full flex items-center justify-between p-5 text-left font-medium text-zinc-800 hover:bg-zinc-50 transition"
                  >
                    <span className="pr-8">{q.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#2563EB] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div
                      className="p-5 pt-0 text-zinc-600 border-t border-zinc-100 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: q.a }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
