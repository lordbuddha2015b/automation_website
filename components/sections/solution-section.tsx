import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { solutionPoints } from "@/lib/content";

export function SolutionSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="soft-card mesh-bg relative overflow-hidden rounded-[2rem] p-4">
            <div className="relative min-h-[28rem] overflow-hidden rounded-[1.7rem]">
              <Image
                src="/calm-room.svg"
                alt="Abstract calming therapy room illustration"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="How CareWell helps"
            title="Support that feels deeply human and clinically grounded."
            description="We combine expert psychiatric care with compassionate guidance, so treatment feels clear, collaborative, and centered around your comfort."
          />
          <div className="mt-8 space-y-4">
            {solutionPoints.map((point, index) => (
              <div key={point} className="soft-card rounded-[1.5rem] p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,_#FB9B8F,_#F57799)] text-sm font-bold text-white">
                    0{index + 1}
                  </span>
                  <p className="text-base leading-7 text-slate-700">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
