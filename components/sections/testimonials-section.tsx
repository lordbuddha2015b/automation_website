import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialsCarousel } from "./testimonials-carousel";

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Stories of Hope"
          title="Stories of Hope"
          description="Real experiences from people who found their path to healing with us."
        />
        <div className="mt-12">
          <TestimonialsCarousel />
        </div>
      </div>
    </section>
  );
}
