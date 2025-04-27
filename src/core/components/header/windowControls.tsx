import { Minus, Square, X } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/core/lib/utils";
import client from "@/core/api/client";

export default function WindowControls() {
    return (
        <div className="flex h-[--header-height] items-center gap-2">
            <Button
                variant="ghost"
                size="icon"
                className={cn("h-7 w-7")}
                onClick={client.windows.minimize}
            >
                <Minus />
            </Button>
            <Button
                variant="ghost"
                size="icon"
                className={cn("h-7 w-7")}
                onClick={client.windows.toggleMaximized}
            >
                <Square />
            </Button>
            <Button
                variant="ghost"
                size="icon"
                className={cn("h-7 w-7")}
                onClick={client.windows.close}
            >
                <X />
            </Button>
        </div>
    )
}