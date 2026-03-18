import { ConsultationButton } from "@/components/booking/consultation-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { steps } from "@/lib/content";

export function HowItWorksSection() {
  return (
    <section id="process" className="py-20 md:py-24">
      <div className="container-shell">
        <div className="soft-card rounded-[2rem] p-8 md:p-10">
          <SectionHeading
            eyebrow="How it works"
            title="A simple, reassuring process designed to help you move forward with clarity."
            description="You do not need to have everything figured out before reaching out. We guide the next steps with care."
            align="center"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-[1.7rem] bg-white/75 p-6">
                <span className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#9f5b68]">
                  Step {index + 1}
                </span>
                <h3 className="mt-4 text-xl font-extrabold tracking-tight text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <ConsultationButton>Book your first appointment</ConsultationButton>
          </div>
        </div>
      </div>
    </section>
  );
}
