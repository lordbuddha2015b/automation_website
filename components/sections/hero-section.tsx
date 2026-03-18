import Image from "next/image";
import { ConsultationButton } from "@/components/booking/consultation-button";
import { Button } from "@/components/ui/button";
import { contactDetails, stats, trustBadges } from "@/lib/content";

export function HeroSection() {
  return (
    <section id="top" className="relative pb-20 pt-14 md:pb-24 md:pt-18">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-rise">
          <span className="section-eyebrow">Trusted mental health support</span>
          <h1 className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.4rem)] font-extrabold leading-[0.95] tracking-[-0.06em] text-slate-900">
            Healing starts when you feel safe enough to ask for help.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            CareWell Health offers compassionate psychiatric care, therapy, and
            personalized support so you can feel calmer, clearer, and more in control
            of your life again.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ConsultationButton>Book a Consultation</ConsultationButton>
            <Button href="/services" variant="secondary">
              Learn More
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
            <span className="rounded-full border border-[#efdbcf] bg-white/70 px-4 py-2">
              Confidential care
            </span>
            <span className="rounded-full border border-[#efdbcf] bg-white/70 px-4 py-2">
              Licensed professionals
            </span>
            <span className="rounded-full border border-[#efdbcf] bg-white/70 px-4 py-2">
              Personalized treatment
            </span>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.slice(0, 3).map((stat) => (
              <div key={stat.label} className="soft-card rounded-[1.5rem] p-5">
                <p className="text-2xl font-extrabold tracking-tight text-slate-900">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative lg:pl-6">
          <div className="gradient-border mesh-bg soft-card relative overflow-hidden rounded-[2rem] p-5 md:p-7">
            <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[22rem] overflow-hidden rounded-[1.6rem] bg-white/65">
                <Image
                  src="/hero-portrait.svg"
                  alt="Illustration of a caring clinician supporting mental wellness"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="glass-panel rounded-[1.6rem] p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#91525f]">
                    Your first step can feel lighter
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    A calm intake process, careful listening, and treatment plans shaped
                    around your real needs.
                  </p>
                </div>
                <div className="soft-card rounded-[1.6rem] p-5">
                  <p className="text-lg font-extrabold tracking-tight text-slate-900">
                    What you can expect
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                    {trustBadges.slice(0, 3).map((badge) => (
                      <li key={badge} className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-rose" />
                        <span>{badge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[1.6rem] bg-[linear-gradient(135deg,_rgba(245,119,153,0.18),_rgba(251,155,143,0.22))] p-5 shadow-[0_18px_40px_rgba(209,120,120,0.14)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7a4450]">
                    Speak with CareWell today
                  </p>
                  <p className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
                    {contactDetails.phone}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Compassionate support for anxiety, depression, stress, and ongoing
                    emotional care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
