import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/layout/page-hero";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";

export const metadata: Metadata = {
  title: "How It Works | CareWell Health",
  description:
    "Learn how the CareWell Health care journey works from first appointment to personalized treatment and ongoing support.",
};

export default function HowItWorksPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="How it works"
        title="A calm process that helps people move from uncertainty to support."
        description="Booking care should not feel confusing. We keep the path simple, compassionate, and clear from the first appointment through long-term follow-up."
      />
      <HowItWorksSection />
    </SiteShell>
  );
}
