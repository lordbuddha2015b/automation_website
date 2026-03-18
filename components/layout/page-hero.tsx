import { ConsultationButton } from "@/components/booking/consultation-button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="pb-10 pt-14 md:pb-14 md:pt-18">
      <div className="container-shell">
        <div className="soft-card mesh-bg rounded-[2rem] p-8 md:p-12">
          <span className="section-eyebrow">{eyebrow}</span>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.6rem,5vw,4.4rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-slate-900">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ConsultationButton>Book a Consultation</ConsultationButton>
          </div>
        </div>
      </div>
    </section>
  );
}
