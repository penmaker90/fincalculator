"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const growthData = [
  { year: 0, contributed: 10000, balance: 10000 },
  { year: 1, contributed: 16000, balance: 16919 },
  { year: 2, contributed: 22000, balance: 24339 },
  { year: 3, contributed: 28000, balance: 32294 },
  { year: 4, contributed: 34000, balance: 40825 },
  { year: 5, contributed: 40000, balance: 49973 },
  { year: 6, contributed: 46000, balance: 59782 },
  { year: 7, contributed: 52000, balance: 70299 },
  { year: 8, contributed: 58000, balance: 81578 },
  { year: 9, contributed: 64000, balance: 93671 },
  { year: 10, contributed: 70000, balance: 106639 },
  { year: 11, contributed: 76000, balance: 120544 },
  { year: 12, contributed: 82000, balance: 135455 },
  { year: 13, contributed: 88000, balance: 151443 },
  { year: 14, contributed: 94000, balance: 168587 },
  { year: 15, contributed: 100000, balance: 186971 },
  { year: 16, contributed: 106000, balance: 206683 },
  { year: 17, contributed: 112000, balance: 227820 },
  { year: 18, contributed: 118000, balance: 250486 },
  { year: 19, contributed: 124000, balance: 274790 },
  { year: 20, contributed: 130000, balance: 300851 },
];

const chartConfig = {
  balance: { label: "Balance", color: "var(--chart-2)" },
  contributed: { label: "Contributed", color: "var(--chart-4)" },
} satisfies ChartConfig;

const seriesLabels: Record<string, string> = {
  balance: "Balance",
  contributed: "Contributed",
};

export function GrowthChart() {
  return (
    <ChartContainer config={chartConfig} className="aspect-[16/10] w-full">
      <AreaChart data={growthData} margin={{ left: 4, right: 8, top: 8 }}>
        <defs>
          <linearGradient id="growth-balance-fill" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-balance)"
              stopOpacity={0.3}
            />
            <stop
              offset="95%"
              stopColor="var(--color-balance)"
              stopOpacity={0.02}
            />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="year"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => `Yr ${value}`}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          width={56}
          tickFormatter={(value) => `$${Math.round(Number(value) / 1000)}k`}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              formatter={(value, name) => (
                <div className="flex w-full items-center justify-between gap-6">
                  <span className="text-muted-foreground">
                    {seriesLabels[String(name)] ?? String(name)}
                  </span>
                  <span className="font-mono font-medium tabular-nums">
                    ${Number(value).toLocaleString()}
                  </span>
                </div>
              )}
            />
          }
        />
        <Area
          dataKey="balance"
          type="monotone"
          fill="url(#growth-balance-fill)"
          stroke="var(--color-balance)"
          strokeWidth={2}
        />
        <Line
          dataKey="contributed"
          type="monotone"
          stroke="var(--color-contributed)"
          strokeWidth={2}
          strokeDasharray="5 4"
          dot={false}
        />
      </AreaChart>
    </ChartContainer>
  );
}
