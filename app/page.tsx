import { ConsultationButton } from "@/components/booking/consultation-button";
import { SiteShell } from "@/components/layout/site-shell";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { EvaluationJourneySection } from "@/components/sections/evaluation-journey-section";
import { HeroSection } from "@/components/sections/hero-section";
import { NavigationCardsSection } from "@/components/sections/navigation-cards-section";
import { PainPointsSection } from "@/components/sections/pain-points-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <SocialProofSection />
      <EvaluationJourneySection />
      <NavigationCardsSection />
      <TestimonialsSection />
      <BenefitsSection />
      <section className="pb-20 pt-6 md:pb-24">
        <div className="container-shell">
          <div className="soft-card mesh-bg rounded-[2rem] p-8 md:p-10">
            <span className="section-eyebrow">Ready when you are</span>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.2rem,4vw,3.8rem)] font-extrabold leading-[1.02] tracking-[-0.05em] text-slate-900">
              Explore at your own pace, then open the consultation form whenever it feels right.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              The most important pages now live separately, and booking is available from any
              page through the floating consultation form.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ConsultationButton>Book a Consultation</ConsultationButton>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
