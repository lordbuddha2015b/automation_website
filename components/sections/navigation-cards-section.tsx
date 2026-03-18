import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { navLinks } from "@/lib/content";

const descriptions: Record<string, string> = {
  Services:
    "Explore psychiatry, therapy, wellness programs, and ongoing support built around real patient needs.",
  Stories:
    "Read transformation stories that show what steady, compassionate care can make possible.",
  "Our Team":
    "Meet the clinicians guiding care with experience, empathy, and evidence-based support.",
  "How It Works":
    "See the simple care journey from first booking to personalized treatment and long-term support.",
  About:
    "Learn more about CareWell Health, our mission, values, and what makes the care experience supportive.",
  FAQ: "Get clear answers about confidentiality, pricing guidance, sessions, and expected outcomes.",
  Contact:
    "View location and contact details, then open the consultation form whenever you are ready.",
};

export function NavigationCardsSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Explore CareWell"
          title="Each next step now has its own focused page."
          description="We've separated the most important decision-making content into dedicated pages so visitors can browse with less overwhelm and more clarity."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="soft-card rounded-[1.7rem] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <p className="text-lg font-extrabold tracking-tight text-slate-900">{link.label}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {descriptions[link.label]}
              </p>
              <p className="mt-5 text-sm font-semibold text-[#9f5b68]">Open page</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
