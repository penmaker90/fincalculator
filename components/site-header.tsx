import Link from "next/link";
import { CalculatorIcon } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Mortgage", href: "#mortgage" },
  { label: "Compound interest", href: "#compound" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="flex shrink-0 items-center gap-2 font-heading text-base font-semibold tracking-tight"
        >
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <CalculatorIcon className="size-4" />
          </span>
          FinCalc
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Button key={item.href} asChild variant="ghost" size="sm">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-2">
          <Badge variant="secondary" className="hidden lg:inline-flex">
            Free to use
          </Badge>
          <ModeToggle />
          <Button asChild size="sm" className="h-9 px-3.5">
            <Link href="#mortgage">Open calculator</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
