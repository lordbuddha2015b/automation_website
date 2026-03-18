import { SectionHeading } from "@/components/ui/section-heading";
import { painPoints } from "@/lib/content";

export function PainPointsSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="You are not alone"
          title="If things have felt heavy lately, that does not mean you have to carry it alone."
          description="Many people wait longer than they should because they are trying to be strong, unsure if their struggles are serious enough, or worried they will not be understood. Care starts by meeting you with empathy."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {painPoints.map((point) => (
            <article key={point.title} className="soft-card rounded-[1.75rem] p-6">
              <div className="h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,_rgba(251,155,143,0.25),_rgba(245,119,153,0.18))]" />
              <h3 className="mt-6 text-xl font-extrabold tracking-tight text-slate-900">
                {point.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
