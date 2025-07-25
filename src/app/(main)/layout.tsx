"use client"

import { SidebarProvider } from "@/core/components/ui/sidebar";
import { SiteHeader } from "@/core/components/header/site-header";
import { SidebarInset } from "@/core/components/ui/sidebar";
import { AppSidebar } from "@/core/components/sidebar/app-sidebar";
import { PropsWithChildren } from "react";

type MainLayoutProps = PropsWithChildren & {

}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <SidebarProvider className="flex flex-col [--header-height:calc(theme(spacing.14))]">
      <SiteHeader />
      <div className="flex flex-1">
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-1 flex-col gap-4 p-4">
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}