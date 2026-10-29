"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function TopLoadingBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Start the bar
    setVisible(true);
    setProgress(15);

    const t1 = setTimeout(() => setProgress(40), 120);
    const t2 = setTimeout(() => setProgress(70), 350);
    const t3 = setTimeout(() => setProgress(90), 600);
    const t4 = setTimeout(() => {
      setProgress(100);
    }, 900);
    const t5 = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 1300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <>
      {/* Main progress bar */}
      <div
        className="fixed top-0 left-0 z-[9999] h-[3px] transition-all ease-out"
        style={{
          width: `${progress}%`,
          transitionDuration: progress === 100 ? "200ms" : "400ms",
          background:
            "linear-gradient(to right, #34d399, #10b981, #059669)",
          boxShadow:
            "0 0 8px rgba(52, 211, 153, 0.8), 0 0 20px rgba(16, 185, 129, 0.4)",
        }}
      />
      {/* Glowing leading dot */}
      <div
        className="fixed top-0 z-[9999] h-[3px] w-[80px] transition-all ease-out"
        style={{
          left: `calc(${progress}% - 80px)`,
          transitionDuration: progress === 100 ? "200ms" : "400ms",
          background:
            "linear-gradient(to right, transparent, rgba(52,211,153,0.6), #6ee7b7)",
          boxShadow: "4px 0 12px 2px rgba(52,211,153,0.9)",
        }}
      />
    </>
  );
}
