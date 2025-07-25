"use client"

import * as React from "react"
import {
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
} from "lucide-react"

import { NavMain } from "@/core/components/sidebar/nav-main"
import { NavSecondary } from "@/core/components/sidebar/nav-secondary"
import { NavUser } from "@/core/components/sidebar/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/core/components/ui/sidebar"
import NavProjections from "./nav-projections"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      isActive: true,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    }
  ],
  navTertiary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarContent>
        <NavProjections />
        <NavMain items={data.navSecondary} />
        <NavSecondary items={data.navTertiary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
