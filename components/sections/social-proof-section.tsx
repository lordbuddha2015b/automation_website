import { SectionHeading } from "@/components/ui/section-heading";
import { stats, trustBadges } from "@/lib/content";

export function SocialProofSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-shell">
        <div className="soft-card rounded-[2rem] p-8 md:p-10">
          <SectionHeading
            eyebrow="Why people trust us"
            title="Clinical expertise paired with care that feels warm, consistent, and reassuring."
            description="People move forward when they feel safe, seen, and supported by professionals who know how to guide real healing."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.6rem] bg-white/75 p-6">
                <p className="text-3xl font-extrabold tracking-tight text-slate-900">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="rounded-full border border-[#f0d5ce] bg-white/80 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
