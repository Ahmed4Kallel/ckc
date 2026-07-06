import type { Metadata } from "next";
import { bayon, cormorantGaramond, instrumentSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "CKC - Architecture & Design",
  description:
    "CKC is a modern architecture website for architects, interior designers, and studios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bayon.variable} ${cormorantGaramond.variable} ${instrumentSans.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
