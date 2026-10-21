import Link from "next/link";
import { ArrowRightIcon, CalculatorIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CtaSection() {
  return (
    <section id="start" className="scroll-mt-20 bg-muted/30 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-3xl">
          <CardHeader className="items-center gap-4 text-center">
            <CardTitle className="text-2xl tracking-tight sm:text-3xl">
              Ready to run your own numbers?
            </CardTitle>
            <CardDescription className="text-base">
              Start with the mortgage repayment calculator, then see what the
              same discipline does for your savings. Both are free, and neither
              asks you for an account.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="h-11 px-6">
              <Link href="#mortgage">
                <CalculatorIcon data-icon="inline-start" />
                Open the mortgage calculator
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 px-6">
              <Link href="#compound">
                Open the compound calculator
                <ArrowRightIcon data-icon="inline-end" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
