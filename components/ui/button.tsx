import type { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose";
  const styles =
    variant === "primary"
      ? "bg-rose text-white shadow-[0_14px_32px_rgba(245,119,153,0.34)] hover:-translate-y-0.5 hover:bg-[#e95c86]"
      : "border border-[#ebb6ae] bg-white/75 text-slate-900 hover:-translate-y-0.5 hover:bg-white";

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
