import { ConsultationButton } from "@/components/booking/consultation-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/lib/content";

export function CaseStudiesSection() {
  return (
    <section id="stories" className="py-20 md:py-24">
      <div className="container-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Results that matter"
            title="Small, steady changes can transform how life feels every day."
            description="These patient stories reflect a common pattern: less overwhelm, more confidence, and genuine relief from carrying everything alone."
          />
          <ConsultationButton variant="secondary">Start your care journey</ConsultationButton>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.name} className="soft-card rounded-[1.8rem] p-6">
              <span className="section-eyebrow">Story {study.name}</span>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                    Before
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{study.before}</p>
                </div>
                <div className="h-px bg-[#f2ddd6]" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                    After
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{study.after}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
