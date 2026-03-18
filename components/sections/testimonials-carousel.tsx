"use client";

import { useEffect, useState } from "react";
import { QuoteIcon } from "@/components/ui/icons";
import { testimonials } from "@/lib/content";

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.32fr]">
      <div className="soft-card relative overflow-hidden rounded-[2rem] p-8 md:p-10">
        <QuoteIcon className="h-12 w-12 text-[#f2b7c6]" />
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.author}
            className={`transition duration-500 ${
              index === activeIndex ? "block opacity-100" : "hidden opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <div className="mt-6 flex items-center gap-1 text-[#ff8a34]">
              {Array.from({ length: testimonial.stars ?? 5 }).map((_, starIndex) => (
                <span key={`${testimonial.author}-${starIndex}`} className="text-xl">
                  ★
                </span>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-2xl font-bold leading-[1.45] tracking-tight text-slate-900 md:text-[2rem]">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-8">
              <p className="text-base font-extrabold text-slate-900">{testimonial.author}</p>
              <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-4">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.author}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`rounded-[1.6rem] border p-5 text-left transition ${
              index === activeIndex
                ? "border-[#efb5bd] bg-white shadow-[0_16px_35px_rgba(245,119,153,0.14)]"
                : "border-transparent bg-white/55 hover:bg-white/75"
            }`}
          >
            <p className="text-sm font-extrabold tracking-[0.16em] text-slate-500">
              {testimonial.author}
            </p>
            <div className="mt-2 flex items-center gap-1 text-[#ff8a34]">
              {Array.from({ length: testimonial.stars ?? 5 }).map((_, starIndex) => (
                <span key={`${testimonial.author}-nav-${starIndex}`} className="text-sm">
                  ★
                </span>
              ))}
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-600">{testimonial.role}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
