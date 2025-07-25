"use client"

import { NavMain } from "./nav-main"
import { SquareTerminal } from "lucide-react"
import { useMemo } from "react"
import { forwardProjections } from "@/core/hocs/projections"

const NavProjections = forwardProjections(({ data }) => {
    const navItems = useMemo(() => {
        if (!data) {
            return [
                {
                    title: "Projections",
                    url: "#",
                    icon: SquareTerminal,
                    isActive: true,
                    items: [],
                    skeletons: 3
                },
            ];
        }

        return [
            {
                title: "Projections",
                url: "#",
                icon: SquareTerminal,
                isActive: true,
                items: data.map((p) => ({
                    title: p.name,
                    url: `/projection/${p.id}`,
                    key: p.id
                })),
            },
        ];
    }, [data]);

    return <NavMain items={navItems} />
})

export default NavProjections;