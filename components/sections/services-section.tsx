import {
  BrainIcon,
  LeafIcon,
  PillIcon,
  ShieldIcon,
  SparkIcon,
  StethoscopeIcon,
  SunIcon,
} from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/content";

const icons = {
  spark: SparkIcon,
  leaf: LeafIcon,
  shield: ShieldIcon,
  stethoscope: StethoscopeIcon,
  pill: PillIcon,
  brain: BrainIcon,
  sun: SunIcon,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Services"
          title="Our Services"
          description="Comprehensive mental health care integrating traditional wisdom and modern science."
          align="center"
        />
        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];

            return (
              <article
                key={service.title}
                className="rounded-[1.5rem] border border-[#eadfd2] bg-white px-6 py-8 shadow-[0_10px_25px_rgba(49,35,16,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(49,35,16,0.12)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-[#ef7328]">
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="mt-7 text-[2rem] font-extrabold tracking-[-0.04em] text-[#18263a]">
                  {service.title}
                </h3>
                <p className="mt-5 max-w-md text-[1.05rem] leading-8 text-slate-500">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
