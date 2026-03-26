"use client"

import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { type SiteContent } from "@/lib/site-content"

type MemoryProjectionContent = SiteContent["results"]["memoryProjection"]

const chartConfig = {
  beforeMemory: {
    label: "Before",
    color: "hsl(16 82% 58%)",
  },
  afterMemory: {
    label: "After",
    color: "hsl(168 68% 42%)",
  },
} satisfies ChartConfig

function formatGb(value: number) {
  return `${value % 1 === 0 ? value.toFixed(0) : value.toFixed(1)} GB`
}

export function MemoryProjectionChart({ content }: { content: MemoryProjectionContent }) {
  const chartData = content.rows.map((row) => ({
    ...row,
    label: `${row.model} · ${row.weight}`,
    cardDelta: row.cardsBefore - row.cardsAfter,
  }))

  return (
    <div className="space-y-6">
      <Card className="bg-card border-border">
        <CardHeader className="gap-3">
          <div>
            <CardTitle>{content.title}</CardTitle>
            <CardDescription className="mt-2">{content.description}</CardDescription>
          </div>
          <p className="text-xs text-muted-foreground">{content.note}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="overflow-x-auto">
            <div className="min-w-[900px]">
              <ChartContainer config={chartConfig} className="h-[680px] w-full aspect-auto">
                <BarChart
                  accessibilityLayer
                  data={chartData}
                  layout="vertical"
                  margin={{ top: 8, right: 32, left: 8, bottom: 8 }}
                  barCategoryGap={10}
                >
                  <CartesianGrid horizontal={false} />
                  <XAxis type="number" tickFormatter={(value) => `${value} GB`} />
                  <YAxis
                    dataKey="label"
                    type="category"
                    width={240}
                    tickLine={false}
                    axisLine={false}
                    interval={0}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        hideIndicator
                        formatter={(_, key, item) => {
                          const row = item.payload as (typeof chartData)[number]
                          const isBefore = key === "beforeMemory"
                          const cards = isBefore ? row.cardsBefore : row.cardsAfter
                          return (
                            <div className="flex w-full items-center justify-between gap-4">
                              <div className="grid gap-1">
                                <span className="text-muted-foreground">
                                  {isBefore ? content.labels.beforeMemory : content.labels.afterMemory}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {(isBefore ? content.labels.beforeCards : content.labels.afterCards) + `: ${cards}`}
                                </span>
                              </div>
                              <span className="text-foreground font-mono font-medium tabular-nums">
                                {formatGb(Number(item.value))}
                              </span>
                            </div>
                          )
                        }}
                        labelFormatter={(_, payload) => {
                          const row = payload[0]?.payload as (typeof chartData)[number] | undefined
                          if (!row) {
                            return ""
                          }
                          return `${row.model} · ${row.weight}`
                        }}
                      />
                    }
                  />
                  <Bar dataKey="totalBefore" fill="var(--color-beforeMemory)" radius={[0, 6, 6, 0]}>
                    {chartData.map((entry) => (
                      <Cell
                        key={`${entry.label}-before`}
                        fill={entry.cardDelta > 0 ? "var(--color-beforeMemory)" : "hsl(16 58% 62%)"}
                      />
                    ))}
                  </Bar>
                  <Bar dataKey="totalAfter" fill="var(--color-afterMemory)" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ChartContainer>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-sm">
              <thead className="bg-secondary/50">
                <tr>
                  {content.headers.map((header, index) => (
                    <th
                      key={header}
                      className={`p-4 font-semibold text-foreground ${index < 2 || index === content.headers.length - 1 ? "text-left" : "text-center"}`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {content.rows.map((row) => {
                  const cardsSaved = row.cardsBefore - row.cardsAfter
                  return (
                    <tr key={`${row.model}-${row.weight}`}>
                      <td className="p-4 text-foreground">{row.model}</td>
                      <td className="p-4 text-foreground">{row.weight}</td>
                      <td className="p-4 text-center text-muted-foreground">{formatGb(row.pureModel)}</td>
                      <td className="p-4 text-center text-foreground">{formatGb(row.totalBefore)}</td>
                      <td className="p-4 text-center font-semibold text-primary">{formatGb(row.totalAfter)}</td>
                      <td className="p-4 text-center text-muted-foreground">{row.cardsBefore}</td>
                      <td className="p-4 text-center text-foreground">
                        {row.cardsAfter}
                        {cardsSaved > 0 ? <span className="ml-1 text-xs text-primary">{`(-${cardsSaved})`}</span> : null}
                      </td>
                      <td className="p-4 text-muted-foreground">{row.change}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
