"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// TODO: Implement custom history stack which we can use.
export function NavHistoryControls() {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCanGoBack(window.history.length > 1);
    }
  }, []);

  if (!canGoBack) {
    return null; // Don't render anything if no history
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => router.back()}
        className="rounded px-3 py-1 bg-muted hover:bg-muted/80 transition"
      >
        Back
      </button>
      <button
        onClick={() => router.forward()}
        className="rounded px-3 py-1 bg-muted hover:bg-muted/80 transition"
      >
        Forward
      </button>
    </div>
  );
}