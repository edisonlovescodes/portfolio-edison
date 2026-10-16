import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const sans = localFont({
  src: "../public/fonts/DMSans.ttf",
  variable: "--font-sans",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://byedison.com"),
  title: {
    default: "Edison Essien — Biomedical Engineering & Software",
    template: "%s | Edison Essien",
  },
  description:
    "Edison Essien’s biomedical engineering, data and software portfolio. Drexel University, graduating June 2027.",
  alternates: { canonical: "/" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sans.variable}>{children}</body>
    </html>
  );
}
