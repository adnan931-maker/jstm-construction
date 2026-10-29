"use client";

import React, { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function ProgressBarInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Start progress on mount / route change
    setVisible(true);
    setProgress(20);

    const t1 = setTimeout(() => setProgress(55), 80);
    const t2 = setTimeout(() => setProgress(82), 200);
    const t3 = setTimeout(() => {
      setProgress(100);
      const tFade = setTimeout(() => {
        setVisible(false);
        const tReset = setTimeout(() => setProgress(0), 250);
        return () => clearTimeout(tReset);
      }, 300);
      return () => clearTimeout(tFade);
    }, 400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname, searchParams]);

  if (!visible && progress === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[999999] pointer-events-none"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 250ms ease-out",
      }}
    >
      {/* 3px Ultra-Sleek Neon Progress Track */}
      <div className="h-[3px] w-full bg-emerald-950/20 backdrop-blur-xs relative overflow-visible">
        <div
          className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-teal-300 relative shadow-[0_0_12px_rgba(52,211,153,0.9)]"
          style={{
            width: `${progress}%`,
            transition: "width 220ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Leading Head Particle Bloom */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-emerald-400/80 blur-[4px] -mr-3" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#ffffff] -mr-1" />

          {/* Sweeping Shimmer Highlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
}

export default function TopProgressBar() {
  return (
    <Suspense fallback={null}>
      <ProgressBarInner />
    </Suspense>
  );
}
