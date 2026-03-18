"use client";

import { useState } from "react";
import { services } from "@/lib/content";

const initialForm = {
  name: "",
  email: "",
  service: "Assessment & Diagnosis",
  date: "",
  time: "",
  message: "",
};

export function BookingForm({ onSuccess }: { onSuccess?: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="soft-card rounded-[2rem] p-7 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="section-eyebrow">Book a consultation</p>
          <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900">
            Start with a simple, supportive first step.
          </h3>
        </div>
      </div>
      <form
        className="mt-8 grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
          event.currentTarget.reset();
          window.setTimeout(() => onSuccess?.(), 900);
        }}
      >
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Full name
          <input
            name="name"
            type="text"
            placeholder="Your name"
            required
            defaultValue={initialForm.name}
            className="h-12 rounded-2xl border border-[#efd8d0] bg-white px-4 text-sm outline-none transition focus:border-[#f57799] focus:ring-4 focus:ring-[#fbe2ea]"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Email address
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            defaultValue={initialForm.email}
            className="h-12 rounded-2xl border border-[#efd8d0] bg-white px-4 text-sm outline-none transition focus:border-[#f57799] focus:ring-4 focus:ring-[#fbe2ea]"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Service
          <select
            name="service"
            defaultValue={initialForm.service}
            className="h-12 rounded-2xl border border-[#efd8d0] bg-white px-4 text-sm outline-none transition focus:border-[#f57799] focus:ring-4 focus:ring-[#fbe2ea]"
          >
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Preferred date
            <input
              name="date"
              type="date"
              required
              defaultValue={initialForm.date}
              className="h-12 rounded-2xl border border-[#efd8d0] bg-white px-4 text-sm outline-none transition focus:border-[#f57799] focus:ring-4 focus:ring-[#fbe2ea]"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Preferred time
            <input
              name="time"
              type="time"
              required
              defaultValue={initialForm.time}
              className="h-12 rounded-2xl border border-[#efd8d0] bg-white px-4 text-sm outline-none transition focus:border-[#f57799] focus:ring-4 focus:ring-[#fbe2ea]"
            />
          </label>
        </div>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Tell us how we can support you
          <textarea
            name="message"
            rows={4}
            placeholder="Share what you have been experiencing."
            defaultValue={initialForm.message}
            className="rounded-[1.4rem] border border-[#efd8d0] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#f57799] focus:ring-4 focus:ring-[#fbe2ea]"
          />
        </label>
        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-rose px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(245,119,153,0.34)] transition hover:-translate-y-0.5 hover:bg-[#e95c86]"
        >
          Request Appointment
        </button>
        <p className="text-xs leading-6 text-slate-500">
          By submitting, you agree to be contacted by CareWell Health about your inquiry.
        </p>
        {submitted ? (
          <p className="rounded-2xl bg-[#fff3ef] px-4 py-3 text-sm font-medium text-[#8f4f5f]">
            Thank you. A care coordinator will be in touch shortly.
          </p>
        ) : null}
      </form>
    </div>
  );
}
