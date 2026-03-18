import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConsultationButton } from "@/components/booking/consultation-button";
import { SiteShell } from "@/components/layout/site-shell";
import { teamMembers } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((item) => item.slug === slug);

  if (!member) {
    return {
      title: "Team Member | CareWell Health",
    };
  }

  return {
    title: `${member.name} | CareWell Health`,
    description: `Learn more about ${member.name}, ${member.role} at CareWell Health.`,
  };
}

function buildAbout(member: (typeof teamMembers)[number]) {
  return `${member.name} is a ${member.role.toLowerCase()} at CareWell Health with ${
    member.experience
  } of experience. They support patients with ${member.specialties
    .slice(0, 3)
    .join(", ")
    .toLowerCase()}, while creating a safe, collaborative path toward healing and emotional well-being.`;
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const member = teamMembers.find((item) => item.slug === slug);

  if (!member) {
    notFound();
  }

  const about = buildAbout(member);

  return (
    <SiteShell>
      <section className="pb-20 pt-14 md:pb-24 md:pt-20">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[1.8rem] bg-[linear-gradient(135deg,_#2b3048,_#121724)] shadow-[0_22px_60px_rgba(11,16,31,0.35)] ring-1 ring-white/6">
            <div className="grid lg:grid-cols-[0.95fr_1.2fr]">
              <div className="relative min-h-[28rem] bg-[radial-gradient(circle_at_top,_rgba(80,86,130,0.45),_transparent_45%),linear-gradient(180deg,_#353a57,_#151924)]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="p-8 text-white md:p-10 lg:p-12">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h1 className="text-[clamp(2.4rem,4vw,4.2rem)] font-extrabold tracking-[-0.06em] text-white">
                      {member.name}
                    </h1>
                    <p className="mt-2 text-[1.3rem] font-semibold text-[#33d0f0]">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm font-medium text-white/75">
                      {member.experience} of experience
                    </p>
                  </div>
                  <Link
                    href="/our-team"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white/85 transition hover:bg-white/16"
                    aria-label="Close profile"
                  >
                    ×
                  </Link>
                </div>

                <div className="mt-8">
                  <h2 className="text-[1.5rem] font-extrabold tracking-[-0.04em] text-white">
                    Credentials
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {member.education.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/85"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-[1.5rem] font-extrabold tracking-[-0.04em] text-white">
                    About
                  </h2>
                  <p className="mt-4 max-w-2xl text-[1.05rem] leading-8 text-white/80">{about}</p>
                </div>

                <div className="mt-8">
                  <h2 className="text-[1.5rem] font-extrabold tracking-[-0.04em] text-white">
                    Languages Spoken
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {member.languages.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-[#3c7e93] bg-[#1e5a70] px-4 py-2 text-sm font-medium text-[#bdf2ff]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-[1.5rem] font-extrabold tracking-[-0.04em] text-white">
                    Areas of Expertise
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {member.specialties.map((item, index) => (
                      <span
                        key={item}
                        className={`rounded-md border px-4 py-2 text-sm font-medium ${
                          index % 2 === 0
                            ? "border-[#4a4f97] bg-[#35387c] text-[#d4d6ff]"
                            : "border-[#2f6f4c] bg-[#205739] text-[#bff4d0]"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-8">
                  <ConsultationButton className="w-full justify-center rounded-[0.9rem] bg-[#21b7da] py-4 text-base font-bold text-[#0e1a24] shadow-none hover:bg-[#19a8ca]">
                    Schedule an Appointment with {member.name.split(" ")[0]}
                  </ConsultationButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
