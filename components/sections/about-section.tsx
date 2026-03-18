import Link from "next/link";
import {
  CalendarIcon,
  ClockIcon,
  HeartIcon,
  MapPinIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/ui/icons";
import { aboutHighlights, missionValues } from "@/lib/content";

const highlightIcons = [ClockIcon, MapPinIcon, CalendarIcon];
const valueIcons = {
  heart: HeartIcon,
  shield: ShieldIcon,
  users: UsersIcon,
};

export function AboutSection() {
  return (
    <section className="pb-20 pt-6 md:pb-24">
      <div className="container-shell space-y-10">
        <div className="rounded-[2rem] bg-white p-8 shadow-[0_14px_30px_rgba(38,52,86,0.08)] md:p-10">
          <h2 className="text-[clamp(2.3rem,4vw,4rem)] font-extrabold tracking-[-0.05em] text-[#18263a]">
            About CareWell Health
          </h2>
          <p className="mt-6 max-w-4xl text-[1.15rem] leading-9 text-slate-500">
            At CareWell Health, we understand that seeking mental health support is a
            significant step. Our team of experienced psychiatrists provides compassionate
            care in a welcoming environment, helping you achieve better mental health and
            overall well-being.
          </p>
          <div className="mt-8 space-y-5">
            {aboutHighlights.map((item, index) => {
              const Icon = highlightIcons[index];

              return (
                <div key={item} className="flex items-center gap-4 text-[#233247]">
                  <span className="flex h-8 w-8 items-center justify-center text-[#ff7621]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="text-[1.1rem] leading-8">{item}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-[0_14px_30px_rgba(38,52,86,0.08)] md:p-10">
          <h2 className="text-center text-[clamp(2.2rem,4vw,3.6rem)] font-extrabold tracking-[-0.05em] text-[#18263a]">
            Our Mission &amp; Values
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {missionValues.map((value) => {
              const Icon = valueIcons[value.icon as keyof typeof valueIcons];

              return (
                <article key={value.title} className="px-4 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff3e8] text-[#ff7621]">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-[2rem] font-extrabold tracking-[-0.04em] text-[#18263a]">
                    {value.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-sm text-[1.1rem] leading-8 text-slate-500">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] bg-white px-8 py-12 text-center shadow-[0_14px_30px_rgba(38,52,86,0.08)] md:px-10">
          <h2 className="text-[clamp(2.2rem,4vw,3.6rem)] font-extrabold tracking-[-0.05em] text-[#18263a]">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[1.1rem] leading-8 text-slate-500">
            Our dedicated professionals bring together decades of experience and innovative
            approaches to mental health care.
          </p>
          <div className="mt-8">
            <Link
              href="/our-team"
              className="inline-flex items-center justify-center rounded-full bg-[#ff7621] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#eb6a1b]"
            >
              View Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
