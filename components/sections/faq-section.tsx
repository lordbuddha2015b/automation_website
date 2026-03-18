import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "./faq-accordion";

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Common concerns answered with clarity and care."
            description="If you have been unsure about reaching out, these answers can help you understand what to expect before your first conversation."
          />
        </div>
        <FaqAccordion />
      </div>
    </section>
  );
}
