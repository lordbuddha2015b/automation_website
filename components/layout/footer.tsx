import Image from "next/image";
import Link from "next/link";
import { contactDetails, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[#f2ddd6] bg-white/80 py-14">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-12 w-12 overflow-hidden rounded-2xl bg-[#f4c33f] ring-1 ring-[#efd8b1]">
              <Image
                src="/CareWell Helth.jpeg"
                alt="CareWell Health logo"
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <p className="text-2xl font-extrabold tracking-tight text-slate-900">CareWell Health</p>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
            Warm, evidence-based mental health care designed to help people feel safer,
            steadier, and supported through real change.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-500">
            Explore
          </h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-700">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-slate-900">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-500">
            Contact
          </h3>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
            <p>{contactDetails.address}</p>
            <p>{contactDetails.phone}</p>
            <p>{contactDetails.email}</p>
            <div className="pt-1 text-slate-600">
              {contactDetails.hours.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className="flex gap-4 pt-2">
              <a href="#" className="transition hover:text-slate-900">
                Instagram
              </a>
              <a href="#" className="transition hover:text-slate-900">
                LinkedIn
              </a>
              <a href="#" className="transition hover:text-slate-900">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
