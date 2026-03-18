import { CalendarIcon, ChatIcon, SparkIcon } from "@/components/ui/icons";
import { evaluationJourney } from "@/lib/content";

const icons = {
  chat: ChatIcon,
  calendar: CalendarIcon,
  spark: SparkIcon,
};

export function EvaluationJourneySection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#ebe0cf] bg-[linear-gradient(180deg,_#fff9ef,_#fffef8)] p-8 shadow-[0_14px_34px_rgba(69,52,28,0.08)] md:p-12">
          <div className="pointer-events-none absolute inset-x-10 top-1/2 hidden -translate-y-1/2 lg:block">
            <svg
              viewBox="0 0 1000 220"
              className="h-[220px] w-full text-[#d9d2c4]"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M30 155C110 25 250 25 330 155C410 285 550 285 630 155C710 25 850 25 970 145"
                stroke="currentColor"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.65"
              />
            </svg>
          </div>

          <div className="relative">
            <div className="text-center">
              <span className="section-eyebrow">Evaluation Journey</span>
              <h2 className="mt-5 text-[clamp(2.4rem,4vw,4rem)] font-extrabold tracking-[-0.05em] text-[#18263a]">
                What to Expect at CareWell Health
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-[1.1rem] leading-8 text-slate-500">
                Your journey to wellness starts here, with a clear, supportive process designed
                to help you feel informed and cared for at every step.
              </p>
            </div>

            <div className="relative mt-14 grid gap-8 lg:grid-cols-3">
              {evaluationJourney.map((item, index) => {
                const Icon = icons[item.icon as keyof typeof icons];

                return (
                  <article
                    key={item.title}
                    className={`relative rounded-[1.8rem] bg-white/90 p-6 text-center shadow-[0_12px_28px_rgba(46,36,19,0.08)] ring-1 ring-[#f3e8d9] backdrop-blur ${
                      index === 1 ? "lg:translate-y-10" : ""
                    }`}
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#ff7621] shadow-[0_10px_24px_rgba(66,45,19,0.12)] ring-1 ring-[#f6ebde]">
                      <Icon className="h-8 w-8" />
                    </div>
                    <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.16em] text-[#2f746e]">
                      {item.step}
                    </p>
                    <h3 className="mt-3 text-[2rem] font-extrabold tracking-[-0.04em] text-[#18263a]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[1.08rem] leading-8 text-slate-500">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
