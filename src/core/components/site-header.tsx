"use client"

import { Minus, SidebarIcon, Square, X } from "lucide-react"

import { Button } from "@/core/components/ui/button"
import { Separator } from "@/core/components/ui/separator"
import { useSidebar } from "@/core/components/ui/sidebar"
import { cn } from "../lib/utils"
import api from "../api/api"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  const handleMinimize = async () => {
    await api.patch('windows/Minimize')
  }
  
  const handleToggleFullScreen = async () => {
    await api.patch('windows/togglefullscreen')
  }

  const handleClose = async () => {
    await api.patch('windows/close')
  }

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
        <div className="flex h-[--header-height] w-full items-center gap-2 dragable">
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1 className="text-2xl">Maximus</h1>
        </div>
        {process.env.NODE_ENV !== "development" || true && (
          <div className="flex h-[--header-height] items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className={cn("h-7 w-7")}
              onClick={handleMinimize}
            >
              <Minus />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn("h-7 w-7")}
              onClick={handleToggleFullScreen}
            >
              <Square />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn("h-7 w-7")}
              onClick={handleClose}
            >
              <X />
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
