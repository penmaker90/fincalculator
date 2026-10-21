import Link from "next/link";
import { CalculatorIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";

const linkGroups = [
  {
    title: "Calculators",
    links: [
      { label: "Mortgage repayment", href: "#mortgage" },
      { label: "Compound interest", href: "#compound" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex max-w-sm flex-col gap-3">
            <Link
              href="#top"
              className="flex w-fit items-center gap-2 font-heading text-base font-semibold tracking-tight"
            >
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <CalculatorIcon className="size-4" />
              </span>
              FinCalc
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              A mortgage repayment calculator and a compound interest
              calculator, built to show you the whole picture.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            {linkGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <p className="text-sm font-medium">{group.title}</p>
                <ul className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 FinCalc</p>
          <p>Estimates only — not financial advice.</p>
        </div>
      </div>
    </footer>
  );
}
