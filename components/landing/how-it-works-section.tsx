import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const steps = [
  {
    title: "Set the terms",
    description:
      "Price, deposit, rate and term for a loan. A deposit, a monthly contribution and a return for savings.",
  },
  {
    title: "Watch the maths land",
    description:
      "Instant schedules, totals and projections, drawn as charts you can read at a glance.",
  },
  {
    title: "Compare and decide",
    description:
      "Test an extra payment, a different term or a later start date, and see exactly what it changes.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-b bg-muted/30 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Three steps to a number you can trust
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            No spreadsheets, no sign-up and nothing to download. You bring the
            numbers, FinCalc does the arithmetic.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="h-full">
              <Card className="h-full">
                <CardHeader className="gap-3">
                  <Badge
                    variant="secondary"
                    className="size-8 rounded-full tabular-nums"
                  >
                    {index + 1}
                  </Badge>
                  <CardTitle>{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
