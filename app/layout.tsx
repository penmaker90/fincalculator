import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinCalc — Mortgage repayment & compound interest calculators",
  description:
    "Plan a mortgage and your savings in one place. FinCalc's mortgage repayment calculator gives you the full amortisation schedule, and the compound interest calculator projects your balance year by year.",
  keywords: [
    "mortgage repayment calculator",
    "compound interest calculator",
    "amortisation schedule",
    "home loan calculator",
    "savings projection",
  ],
  applicationName: "FinCalc",
  openGraph: {
    title: "FinCalc — Mortgage repayment & compound interest calculators",
    description:
      "See exactly what you'll pay on a home loan, and exactly what your money can grow into.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
