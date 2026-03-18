import { ConsultationButton } from "@/components/booking/consultation-button";
import { Button } from "@/components/ui/button";
import { contactDetails } from "@/lib/content";
import { BookingForm } from "./booking-form";

export function FinalCtaSection() {
  return (
    <section id="contact" className="pb-20 pt-20 md:pb-24 md:pt-24">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="soft-card mesh-bg rounded-[2rem] p-8 md:p-10">
            <span className="section-eyebrow">Take the first step today</span>
            <h2 className="mt-5 max-w-xl text-[clamp(2.3rem,4vw,3.8rem)] font-extrabold leading-[1.02] tracking-[-0.05em] text-slate-900">
              Gentle support now can change how the next few months feel.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
              If you have been waiting for the right moment to reach out, this can be it.
              CareWell Health is here to help you feel safe, supported, and guided toward
              real relief.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ConsultationButton>Book a Consultation</ConsultationButton>
              <Button href={contactDetails.phoneHref} variant="secondary">
                Call Now
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-white/72 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                  Address
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">{contactDetails.address}</p>
              </div>
              <div className="rounded-[1.5rem] bg-white/72 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                  Contact
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {contactDetails.phone}
                  <br />
                  {contactDetails.email}
                </p>
                <div className="mt-3 text-sm leading-7 text-slate-700">
                  {contactDetails.hours.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
