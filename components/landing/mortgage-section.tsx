import Link from "next/link";
import {
  ArrowRightIcon,
  CalendarIcon,
  CheckIcon,
  PercentIcon,
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
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
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
  "A full amortisation schedule for all 360 payments",
  "Interest and principal split for every single month",
  "Total cost of borrowing, not just the monthly number",
  "The month your payments finally start working for you",
];

const firstPayments = [
  { month: 1, interest: "$1,875", principal: "$342", balance: "$359,658" },
  { month: 2, interest: "$1,873", principal: "$343", balance: "$359,315" },
  { month: 3, interest: "$1,871", principal: "$345", balance: "$358,970" },
];

const loanTerms = [
  { id: "preview-price", label: "Property price", value: "$450,000", addon: "USD" },
  { id: "preview-deposit", label: "Deposit (20%)", value: "$90,000", addon: "USD" },
  { id: "preview-rate", label: "Interest rate", value: "6.25", addon: "%" },
  { id: "preview-term", label: "Term", value: "30", addon: "years" },
];

export function MortgageSection() {
  return (
    <section
      id="mortgage"
      className="scroll-mt-20 border-b py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <Badge variant="secondary">
            <CalendarIcon data-icon="inline-start" />
            Calculator 01
          </Badge>

          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Mortgage repayment, payment by payment
          </h2>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Give it a price, a deposit, a rate and a term. FinCalc returns the
            monthly payment, the complete amortisation schedule, and the exact
            date the debt clears — so you can see precisely how much of every
            payment goes to the bank and how much builds your equity.
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
            <Link href="#compound">
              Compare it with compound interest
              <ArrowRightIcon data-icon="inline-end" />
            </Link>
          </Button>
        </div>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Loan details</CardTitle>
            <CardDescription>
              $450,000 property, 20% deposit, 6.25% fixed over 30 years
            </CardDescription>
            <CardAction>
              <Badge variant="outline">
                <PercentIcon data-icon="inline-start" />
                Sample
              </Badge>
            </CardAction>
          </CardHeader>

          <CardContent className="flex flex-col gap-5">
            <FieldGroup className="grid gap-4 sm:grid-cols-2">
              {loanTerms.map((term) => (
                <Field key={term.id}>
                  <FieldLabel htmlFor={term.id}>{term.label}</FieldLabel>
                  <InputGroup>
                    <InputGroupInput id={term.id} value={term.value} readOnly />
                    <InputGroupAddon align="inline-end">{term.addon}</InputGroupAddon>
                  </InputGroup>
                </Field>
              ))}
            </FieldGroup>

            <Separator />

            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">
                Estimated monthly payment
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-3xl font-semibold tracking-tight tabular-nums">
                  $2,216.58
                </span>
                <Badge variant="secondary">principal &amp; interest</Badge>
              </div>
            </div>

            <Separator />

            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium">First three payments</p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead>Interest</TableHead>
                    <TableHead>Principal</TableHead>
                    <TableHead className="text-right">Balance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {firstPayments.map((payment) => (
                    <TableRow key={payment.month}>
                      <TableCell className="tabular-nums">{payment.month}</TableCell>
                      <TableCell className="tabular-nums">{payment.interest}</TableCell>
                      <TableCell className="tabular-nums">{payment.principal}</TableCell>
                      <TableCell className="text-right tabular-nums">
                        {payment.balance}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>

          <CardFooter className="flex-wrap gap-x-6 gap-y-1 text-muted-foreground">
            <span className="tabular-nums">
              Total interest <span className="font-medium text-foreground">$437,969</span>
            </span>
            <span className="tabular-nums">
              Total repaid <span className="font-medium text-foreground">$797,969</span>
            </span>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
