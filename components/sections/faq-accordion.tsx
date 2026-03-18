"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = index === openIndex;

        return (
          <article key={faq.question} className="soft-card rounded-[1.5rem] p-2">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 rounded-[1.2rem] px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span className="text-lg font-bold tracking-tight text-slate-900">
                {faq.question}
              </span>
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full bg-[#fff5f3] text-xl text-[#a75d6d] transition ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 pt-1 text-sm leading-7 text-slate-600">
                {faq.answer}
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
