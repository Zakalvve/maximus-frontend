"use client"
import { ChartAreaInteractive } from "@/core/components/chart-area-interactive";
import { DataTable } from "@/core/components/data-table";
import { SectionCards } from "@/core/components/section-cards";
import { useParams } from "next/navigation";
import data from "./data.json";

export default function ProjectionPage() {
    const params = useParams<{ projectionId: string }>();

    const id = params.projectionId;
    console.log(id)

    return (
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
    );
}