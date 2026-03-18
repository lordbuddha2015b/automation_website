import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BookingModalProvider } from "@/components/booking/booking-modal-provider";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://carewellhealth.example"),
  title: "CareWell Health | Compassionate Psychiatric Care That Helps You Feel Safe Again",
  description:
    "CareWell Health offers compassionate psychiatry, therapy, and wellness support designed to help you feel calmer, more in control, and genuinely cared for.",
  icons: {
    icon: "/CareWell Helth.jpeg",
    shortcut: "/CareWell Helth.jpeg",
    apple: "/CareWell Helth.jpeg",
  },
  openGraph: {
    title: "CareWell Health | Compassionate Psychiatric Care",
    description:
      "Trusted psychiatric care, personalized treatment plans, and a calm path forward for anxiety, stress, depression, and emotional overwhelm.",
    url: "https://carewellhealth.example",
    siteName: "CareWell Health",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "CareWell Health calming mental health support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CareWell Health | Compassionate Psychiatric Care",
    description:
      "Feel supported with personalized mental health care from trusted professionals.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} bg-cream text-slate-900 antialiased`}>
        <BookingModalProvider>{children}</BookingModalProvider>
      </body>
    </html>
  );
}
