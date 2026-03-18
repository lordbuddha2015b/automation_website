import type { ReactNode } from "react";
import { FloatingChatButton } from "@/components/booking/floating-chat-button";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_left,_rgba(245,119,153,0.18),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(251,155,143,0.2),_transparent_32%),linear-gradient(180deg,_#FFF7CD_0%,_#FFFDF1_80%)]" />
      <Navbar />
      <main>{children}</main>
      <FloatingChatButton />
      <Footer />
    </div>
  );
}
