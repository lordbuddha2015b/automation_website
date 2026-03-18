import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConsultationButton } from "@/components/booking/consultation-button";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/layout/page-hero";
import { services } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service | CareWell Health" };
  }

  return {
    title: `${service.title} | CareWell Health`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <SiteShell>
      <PageHero
        eyebrow="Service Detail"
        title={service.title}
        description={service.description}
      />
      <section className="pb-20 pt-6 md:pb-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="soft-card rounded-[2rem] p-8 md:p-10">
            <h2 className="text-[clamp(2rem,3vw,3rem)] font-extrabold tracking-[-0.05em] text-[#18263a]">
              {service.detailTitle}
            </h2>
            <p className="mt-5 text-[1.08rem] leading-8 text-slate-600">
              {service.detailDescription}
            </p>
            <div className="mt-8 space-y-4">
              {service.detailPoints.map((point) => (
                <div key={point} className="rounded-[1.3rem] bg-white/80 p-5 shadow-[0_10px_20px_rgba(49,35,16,0.06)]">
                  <p className="text-base leading-8 text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-card mesh-bg rounded-[2rem] p-8 md:p-10">
            <span className="section-eyebrow">Care Approach</span>
            <h2 className="mt-5 text-[clamp(2rem,3vw,3rem)] font-extrabold tracking-[-0.05em] text-[#18263a]">
              Support that feels clear, calm, and personalized.
            </h2>
            <p className="mt-5 text-[1.08rem] leading-8 text-slate-600">
              Every service at CareWell Health is delivered with empathy, thoughtful clinical
              guidance, and a pace that helps patients feel informed rather than overwhelmed.
            </p>
            <div className="mt-8">
              <ConsultationButton className="w-full justify-center">
                Book a Consultation
              </ConsultationButton>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
