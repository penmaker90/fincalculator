import Link from "next/link";
import { ArrowRightIcon, CheckIcon, CoinsIcon } from "lucide-react";

import { GrowthChart } from "@/components/landing/growth-chart";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const highlights = [
  "Daily, monthly, quarterly or annual compounding",
  "Monthly contributions, with the option to start later",
  "Year-by-year balance, interest earned and total returned",
  "A side-by-side view of starting now against starting in five years",
];

const milestones = [
  { year: 1, contributed: "$16,000", balance: "$16,919", interest: "$919" },
  { year: 5, contributed: "$40,000", balance: "$49,973", interest: "$9,973" },
  { year: 10, contributed: "$70,000", balance: "$106,639", interest: "$36,639" },
  { year: 20, contributed: "$130,000", balance: "$300,851", interest: "$170,851" },
];

export function CompoundSection() {
  return (
    <section
      id="compound"
      className="scroll-mt-20 border-b bg-muted/30 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="flex flex-col items-start gap-6 lg:order-2">
          <Badge variant="secondary">
            <CoinsIcon data-icon="inline-start" />
            Calculator 02
          </Badge>

          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Compound interest, made visible
          </h2>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Start with a deposit, add a monthly contribution and pick a rate.
            FinCalc projects the balance year by year and shows exactly how much
            of the final number is growth rather than your own money — the part
            that quietly does all the work.
          </p>

          <ul className="flex flex-col gap-3">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3 text-base">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <Button asChild variant="outline" className="h-10 px-5">
            <Link href="#mortgage">
              Compare it with the mortgage calculator
              <ArrowRightIcon data-icon="inline-end" />
            </Link>
          </Button>
        </div>

        <Card className="lg:order-1">
          <CardHeader>
            <CardTitle>Growth projection</CardTitle>
            <CardDescription>
              $10,000 deposit · $500 a month · 7% for 20 years
            </CardDescription>
            <CardAction>
              <Badge variant="outline">Sample</Badge>
            </CardAction>
          </CardHeader>

          <CardContent className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">
                Future value
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-3xl font-semibold tracking-tight tabular-nums">
                  $300,851
                </span>
                <Badge variant="secondary">2.31× your money</Badge>
              </div>
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

            <GrowthChart />

            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium">Growth milestones</p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Year</TableHead>
                    <TableHead>Contributed</TableHead>
                    <TableHead>Balance</TableHead>
                    <TableHead className="text-right">Interest</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {milestones.map((row) => (
                    <TableRow key={row.year}>
                      <TableCell className="tabular-nums">{row.year}</TableCell>
                      <TableCell className="tabular-nums">{row.contributed}</TableCell>
                      <TableCell className="tabular-nums">{row.balance}</TableCell>
                      <TableCell className="text-right tabular-nums">
                        {row.interest}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>

          <CardFooter className="text-muted-foreground">
            Waiting five years to start would end at $186,971 — $113,880 less
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
