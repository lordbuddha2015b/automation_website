import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";

export function TeamSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Our team"
          title="Meet Our Team"
          description="Our mental health professionals are here to support your journey to wellness."
          align="center"
        />
        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-[1.2rem] border border-[#e7e9ee] bg-white shadow-[0_8px_22px_rgba(28,45,84,0.08)]"
            >
              <div className="flex h-[9rem] items-end justify-center bg-[#f6f7fb]">
                <div className="relative -mb-2 h-32 w-32 overflow-hidden rounded-2xl bg-white shadow-[0_10px_22px_rgba(15,23,42,0.10)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-[2rem] font-extrabold tracking-[-0.04em] text-[#18263a]">
                  {member.name}
                </h3>
                <p className="mt-2 text-[1.05rem] font-medium text-[#2450ff]">{member.role}</p>
                <p className="mt-4 text-base text-slate-700">
                  Experience: {member.experience}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.specialties.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-[#f2f4f8] px-2.5 py-1 text-sm text-slate-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/our-team/${member.slug}`}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-[#4b81e8] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#3d72d5]"
                >
                  View Profile
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
