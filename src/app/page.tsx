'use client'

import client from "@/core/api/client";
import { AppSidebar } from "@/core/components/app-sidebar";
import { SiteHeader } from "@/core/components/site-header";
import TestChart from "@/core/components/testChart";
import { SidebarInset, SidebarProvider } from "@/core/components/ui/sidebar";

export default function Home() {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                <TestChart />
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
