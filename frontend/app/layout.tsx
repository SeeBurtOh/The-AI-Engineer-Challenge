import type { Metadata, Viewport } from "next";
import { Lora, Quicksand } from "next/font/google";
import "./globals.css";

// Lora: a warm serif used for the story text — it feels like a printed storybook.
const lora = Lora({
  variable: "--font-story",
  subsets: ["latin"],
});

// Quicksand: a soft, rounded sans-serif for UI elements (input, buttons, labels).
const quicksand = Quicksand({
  variable: "--font-ui",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Once Upon a Prompt",
  description: "A cozy bedtime storyteller. Ask for a tale, and drift off.",
};

// Ensures the page scales properly on phone screens.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${quicksand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
