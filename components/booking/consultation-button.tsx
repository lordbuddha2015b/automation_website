"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "./booking-modal-provider";

type ConsultationButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ConsultationButton({
  children,
  variant = "primary",
  className,
}: ConsultationButtonProps) {
  const { openModal } = useBookingModal();

  return (
    <Button variant={variant} className={className} onClick={openModal}>
      {children}
    </Button>
  );
}
