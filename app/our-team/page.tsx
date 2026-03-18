import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/layout/page-hero";
import { TeamSection } from "@/components/sections/team-section";

export const metadata: Metadata = {
  title: "Our Team | CareWell Health",
  description:
    "Meet the CareWell Health team of psychiatrists and clinical psychologists supporting patients with compassion and expertise.",
};

export default function OurTeamPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Meet the team"
        title="Experienced clinicians guiding care with warmth, skill, and trust."
        description="Our team page highlights the professionals behind CareWell Health so visitors can feel more confident about who they are meeting before booking."
      />
      <TeamSection />
    </SiteShell>
  );
}
