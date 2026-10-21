import {
  PiggyBankIcon,
  ReceiptIcon,
  ShieldCheckIcon,
  TargetIcon,
  TrendingUpIcon,
  ZapIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: ReceiptIcon,
    title: "Full amortisation schedule",
    description:
      "Every one of the 360 payments with its interest, principal and remaining balance, listed line by line.",
  },
  {
    icon: ZapIcon,
    title: "Instant recalculation",
    description:
      "Change any input and the schedule, totals and charts all update together, immediately.",
  },
  {
    icon: TrendingUpIcon,
    title: "Principal versus interest",
    description:
      "See month 228 — the point where your payments finally start building equity instead of feeding interest.",
  },
  {
    icon: PiggyBankIcon,
    title: "Contribution timelines",
    description:
      "Start now, start later, or change your monthly deposit along the way and watch the curve respond.",
  },
  {
    icon: TargetIcon,
    title: "Scenario comparison",
    description:
      "Model an extra $200 a month and watch six years and $101,994 of interest disappear from the schedule.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Stays in your browser",
    description:
      "No account, no data collection and nothing sent anywhere. Your figures stay on your device.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="scroll-mt-20 border-b py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Everything the two calculators work out
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Both calculators share the same standard: every figure is shown,
            every assumption is visible, and nothing important is hidden behind
            a single summary number.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader className="gap-3">
                <Badge
                  variant="secondary"
                  className="size-9 rounded-lg [&>svg]:size-4!"
                >
                  <feature.icon />
                </Badge>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
