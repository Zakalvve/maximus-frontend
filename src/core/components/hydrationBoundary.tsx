"use client"

import { PropsWithChildren } from "react";

export default function HydrationBoundary({children}: PropsWithChildren) {
    return children;
}