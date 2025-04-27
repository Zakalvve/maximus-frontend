'use-client'

import client from "@/core/api/client";
import { useMemo } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const TestChart = () => {

    const metric = 'PensionWithdrawn';

    const { data, isLoading } = client.projections.useGetProjectionSeries({
        projectionId: 'c0cfce38-d950-4b17-a6ac-c7a8d8afe967',
        series: [metric],
        iterations: [0],
    });

    const chartData = useMemo(() => {
        if (!data) return [];

        const closingBalanceSeries = data[metric];
        const formatter = new Intl.DateTimeFormat("en-GB", {
            month: "short",
            year: "numeric",
        });

        return closingBalanceSeries.points.map((p) => ({
            date: formatter.format(new Date(p.date)), // deterministic output
            closingBalance: p.value,
        }));
    }, [data]);


    const chartConfig = {
        closingBalance: {
            label: metric,
            color: "hsl(var(--chart-1))",
        },
    } satisfies ChartConfig

    if (isLoading) return <p>Loading chart...</p>;
    if (!data || !chartData.length) return <p>No data to display.</p>;

    return (
        <ChartContainer config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{ left: 12, right: 12 }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                    dataKey="closingBalance"
                    type="natural"
                    fill="var(--color-closingBalance)"
                    fillOpacity={0.4}
                    stroke="var(--color-closingBalance)"
                />
            </AreaChart>
        </ChartContainer>
    );
};


export default TestChart;