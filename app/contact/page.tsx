import type { Metadata } from "next";
import { ConsultationButton } from "@/components/booking/consultation-button";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/layout/page-hero";
import { contactDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | CareWell Health",
  description:
    "Get in touch with CareWell Health, view location details, and open the floating consultation form to request an appointment.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Reach out in the way that feels easiest for you."
        description="Call, email, or use the floating consultation form. CareWell Health is designed to make first contact feel calm, supportive, and easy to start."
      />
      <section className="pb-20 pt-6 md:pb-24">
        <div className="container-shell grid gap-6 lg:grid-cols-4">
          <article className="soft-card rounded-[1.8rem] p-6">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-slate-500">
              Address
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">{contactDetails.address}</p>
          </article>
          <article className="soft-card rounded-[1.8rem] p-6">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-slate-500">
              Phone
            </p>
            <a
              href={contactDetails.phoneHref}
              className="mt-4 block text-base font-semibold leading-8 text-slate-900"
            >
              {contactDetails.phone}
            </a>
          </article>
          <article className="soft-card rounded-[1.8rem] p-6">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-slate-500">
              Email
            </p>
            <a
              href={`mailto:${contactDetails.email}`}
              className="mt-4 block text-base font-semibold leading-8 text-slate-900"
            >
              {contactDetails.email}
            </a>
          </article>
          <article className="soft-card rounded-[1.8rem] p-6">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-slate-500">
              Hours
            </p>
            <div className="mt-4 space-y-1 text-base leading-8 text-slate-700">
              {contactDetails.hours.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>
        </div>
        <div className="container-shell mt-8">
          <div className="soft-card mesh-bg rounded-[2rem] p-8 md:p-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Open the floating booking form anytime.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              The consultation form now appears as a centered overlay, so visitors can request
              care without leaving the page they are reading.
            </p>
            <div className="mt-8">
              <ConsultationButton>Book a Consultation</ConsultationButton>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
