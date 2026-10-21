import Link from "next/link";
import {
  ArrowRightIcon,
  CalculatorIcon,
  ChartLineIcon,
  SparklesIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "360", label: "payments modelled in every schedule" },
  { value: "$437,969", label: "total interest on a $360,000 loan" },
  { value: "2.31×", label: "growth on a 20-year contribution plan" },
  { value: "$0", label: "to run — no account, no data collected" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b">
      <div className="bg-hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="bg-grid-faint pointer-events-none absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            <Badge variant="secondary">
              <SparklesIcon data-icon="inline-start" />
              Two calculators, one clear picture
            </Badge>

            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Know what you&apos;ll pay. Know what you&apos;ll earn.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              FinCalc pairs a mortgage repayment calculator with a compound
              interest calculator, so you can see the true cost of a home loan
              and the true trajectory of your savings — down to the final
              payment.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="h-11 px-6">
                <Link href="#mortgage">
                  Open the mortgage calculator
                  <ArrowRightIcon data-icon="inline-end" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-11 px-6">
                <Link href="#compound">
                  <ChartLineIcon data-icon="inline-start" />
                  See compound interest
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              No sign-up · Runs entirely in your browser · Recalculates the
              moment a number changes
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Mortgage repayment</CardTitle>
                <CardDescription>
                  $450,000 home · 20% deposit · 6.25% over 30 years
                </CardDescription>
                <CardAction>
                  <Badge variant="outline">Calculator 01</Badge>
                </CardAction>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold tracking-tight tabular-nums">
                    $2,216.58
                  </span>
                  <span className="text-sm text-muted-foreground">per month</span>
                </div>
                <Separator />
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground">
                      Total interest
                    </span>
                    <span className="font-medium tabular-nums">$437,969</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground">
                      Total repaid
                    </span>
                    <span className="font-medium tabular-nums">$797,969</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="gap-2 text-muted-foreground">
                <CalculatorIcon />
                Amortisation schedule for all 360 payments
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compound interest</CardTitle>
                <CardDescription>
                  $10,000 deposit · $500 a month · 7% for 20 years
                </CardDescription>
                <CardAction>
                  <Badge variant="outline">Calculator 02</Badge>
                </CardAction>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold tracking-tight tabular-nums">
                    $300,851
                  </span>
                  <span className="text-sm text-muted-foreground">
                    future value
                  </span>
                </div>
                <Separator />
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground">
                      You contribute
                    </span>
                    <span className="font-medium tabular-nums">$130,000</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground">
                      Interest earned
                    </span>
                    <span className="font-medium tabular-nums">$170,851</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="gap-2 text-muted-foreground">
                <ChartLineIcon />
                Your money grows 2.31× over 20 years
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-2xl font-semibold tracking-tight tabular-nums">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
