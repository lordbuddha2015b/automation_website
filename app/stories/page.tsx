import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/layout/page-hero";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export const metadata: Metadata = {
  title: "Stories | CareWell Health",
  description:
    "See real transformation stories and patient experiences that reflect the emotional outcomes of compassionate psychiatric care.",
};

export default function StoriesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Patient stories"
        title="Transformation often begins with feeling understood for the first time."
        description="These stories and testimonials are built to help visitors picture what change can actually look like: less fear, more steadiness, and a clear plan forward."
      />
      <CaseStudiesSection />
      <TestimonialsSection />
    </SiteShell>
  );
}
