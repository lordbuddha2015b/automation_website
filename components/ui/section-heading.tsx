type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={alignment}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className={`section-title mt-5 ${alignment}`}>{title}</h2>
      <p className={`section-copy mt-5 ${alignment}`}>{description}</p>
    </div>
  );
}
