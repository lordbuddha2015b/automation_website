import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/layout/page-hero";
import { FaqSection } from "@/components/sections/faq-section";

export const metadata: Metadata = {
  title: "FAQ | CareWell Health",
  description:
    "Find answers about confidentiality, sessions, insurance guidance, pricing questions, and when patients may start seeing results.",
};

export default function FaqPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="FAQ"
        title="Answers that help reduce uncertainty before your first step."
        description="This page addresses the questions most people ask before booking care, with a focus on privacy, process, cost guidance, and what early progress can feel like."
      />
      <FaqSection />
    </SiteShell>
  );
}
