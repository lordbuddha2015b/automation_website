"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { BookingForm } from "@/components/sections/booking-form";

type BookingModalContextValue = {
  openModal: () => void;
  closeModal: () => void;
};

const BookingModalContext = createContext<BookingModalContextValue | null>(null);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const value = useMemo(
    () => ({
      openModal: () => setIsOpen(true),
      closeModal: () => setIsOpen(false),
    }),
    [],
  );

  return (
    <BookingModalContext.Provider value={value}>
      {children}
      {isOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(31,41,55,0.35)] px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Book a consultation"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl text-slate-700 shadow-[0_12px_28px_rgba(0,0,0,0.12)] transition hover:bg-slate-50"
              aria-label="Close booking form"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <BookingForm onSuccess={() => setIsOpen(false)} />
          </div>
        </div>
      ) : null}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingModalContext);

  if (!context) {
    throw new Error("useBookingModal must be used within BookingModalProvider.");
  }

  return context;
}
