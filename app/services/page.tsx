import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/layout/page-hero";
import { ServicesSection } from "@/components/sections/services-section";

export const metadata: Metadata = {
  title: "Services | CareWell Health",
  description:
    "Explore psychiatry consultations, therapy sessions, wellness programs, and ongoing support from CareWell Health.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Support options designed to meet you with the right level of care."
        description="CareWell Health combines psychiatry, therapy, structured wellness support, and ongoing follow-up so treatment can feel both clinically strong and personally supportive."
      />
      <ServicesSection />
    </SiteShell>
  );
}
