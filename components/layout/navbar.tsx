"use client";

import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { useState } from "react";
import { ConsultationButton } from "@/components/booking/consultation-button";
import { contactDetails, navLinks, services } from "@/lib/content";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/45 bg-white/70 backdrop-blur-xl">
      <div className="container-shell py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-transparent shadow-[0_12px_30px_rgba(245,119,153,0.12)] ring-1 ring-white/50">
              <Image
                src="/carewell-logo.png"
                alt="CareWell Health logo"
                width={44}
                height={44}
                sizes="48px"
                className="h-11 w-11 object-contain"
                unoptimized
                priority
              />
            </span>
            <div>
              <p className="text-base font-extrabold tracking-tight">CareWell Health</p>
              <p className={`${caveat.className} -mt-1 text-[1.35rem] leading-none text-sky-600`}>
                Healing Minds
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div
                  key={link.href}
                  className="group relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-slate-900"
                    aria-expanded={servicesOpen}
                  >
                    Services
                    <span className="text-xs">{servicesOpen ? "▲" : "▼"}</span>
                  </button>
                  {servicesOpen ? (
                    <div className="absolute left-0 top-full z-50 pt-2">
                      <div className="h-3 w-80" />
                      <div className="w-80 rounded-[1.2rem] border border-[#efe3d3] bg-white p-3 shadow-[0_18px_40px_rgba(49,35,16,0.14)]">
                        <Link
                          href="/services"
                          className="block rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 transition hover:bg-[#fff7ee]"
                        >
                          All Services
                        </Link>
                        <div className="mt-2 space-y-1">
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="block rounded-xl px-3 py-3 text-sm text-slate-700 transition hover:bg-[#fff7ee] hover:text-slate-900"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={contactDetails.phoneHref} className="text-sm font-semibold text-slate-700">
              {contactDetails.phone}
            </a>
            <ConsultationButton className="px-5 py-3">Book a Consultation</ConsultationButton>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#efdbcf] bg-white/80 text-slate-900 lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="text-xl">{isOpen ? "×" : "≡"}</span>
          </button>
        </div>

        {isOpen ? (
          <div className="soft-card mt-4 rounded-[1.5rem] p-4 lg:hidden">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) =>
                link.label === "Services" ? (
                  <div key={link.href} className="rounded-xl bg-white/50 px-3 py-2">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between text-sm font-medium text-slate-700"
                      onClick={() => setServicesOpen((value) => !value)}
                    >
                      <span>Services</span>
                      <span>{servicesOpen ? "−" : "+"}</span>
                    </button>
                    {servicesOpen ? (
                      <div className="mt-3 flex flex-col gap-2">
                        <Link
                          href="/services"
                          className="rounded-lg px-2 py-2 text-sm font-semibold text-slate-800"
                          onClick={() => setIsOpen(false)}
                        >
                          All Services
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="rounded-lg px-2 py-2 text-sm text-slate-700 transition hover:bg-white/70"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white/75 hover:text-slate-900"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
            <div className="mt-4 border-t border-[#f1dfd8] pt-4">
              <a href={contactDetails.phoneHref} className="text-sm font-semibold text-slate-700">
                {contactDetails.phone}
              </a>
              <ConsultationButton className="mt-4 w-full">Book a Consultation</ConsultationButton>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
