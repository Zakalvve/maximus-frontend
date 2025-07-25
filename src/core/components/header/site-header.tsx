"use client"

import { Button } from "@/core/components/ui/button"
import { Separator } from "@/core/components/ui/separator"
import { useSidebar } from "@/core/components/ui/sidebar"
import { SidebarIcon } from "lucide-react"
import Link from "next/link"
import WindowControls from "./windowControls"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="flex sticky top-0 z-50 w-full items-center border-b bg-background">
      <div className="flex h-[--header-height] w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <div className="flex h-[--header-height] items-center gap-2">
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1 className="text-2xl"><Link href='/' className="cursor-pointer">Maximus</Link></h1>
        </div>
        <div className='flex h-[--header-height] w-full dragable'></div>
        <WindowControls />
      </div>
    </header>
  )
}
