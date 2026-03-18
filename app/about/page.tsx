import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/layout/page-hero";
import { AboutSection } from "@/components/sections/about-section";

export const metadata: Metadata = {
  title: "About | CareWell Health",
  description:
    "Learn about CareWell Health, our compassionate approach, mission, values, and commitment to supportive mental health care.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About CareWell Health"
        title="Compassionate mental health care in a welcoming, supportive environment."
        description="Learn what shapes the CareWell Health experience, from flexible access and same-week appointments to a mission built around empathy, safety, and collaboration."
      />
      <AboutSection />
    </SiteShell>
  );
}
