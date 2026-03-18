import { SectionHeading } from "@/components/ui/section-heading";
import { benefits } from "@/lib/content";

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Benefits"
            title="The goal is not just symptom relief. It is helping life feel more manageable again."
            description="With the right care, it becomes easier to respond calmly, think clearly, and show up more fully for the moments that matter."
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div key={benefit} className="soft-card rounded-[1.6rem] p-6">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#9f5b68]">
                0{index + 1}
              </p>
              <p className="mt-4 text-lg font-bold leading-8 tracking-tight text-slate-900">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
