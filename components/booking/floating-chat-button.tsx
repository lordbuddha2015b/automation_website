"use client";

import { ChatIcon } from "@/components/ui/icons";
import { useBookingModal } from "./booking-modal-provider";

export function FloatingChatButton() {
  const { openModal } = useBookingModal();

  return (
    <button
      type="button"
      onClick={openModal}
      className="fixed bottom-6 right-6 z-[70] inline-flex items-center gap-3 rounded-full bg-[#ff7621] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(255,118,33,0.28)] transition hover:bg-[#eb6a1b]"
      aria-label="Chat with us"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/18">
        <ChatIcon className="h-5 w-5" />
      </span>
      <span>Chat with us</span>
    </button>
  );
}
