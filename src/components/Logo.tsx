"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "full" | "mark" | "image" | "badge";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  theme?: "dark" | "light";
}

export default function Logo({
  variant = "full",
  size = "md",
  className = "",
  href = "/",
  theme = "dark",
}: LogoProps) {
  // Dimensions for the emblem container
  const iconSizes = {
    sm: { box: "w-10 h-10", img: 36 },
    md: { box: "w-12 h-12", img: 44 },
    lg: { box: "w-16 h-16", img: 60 },
  };

  const titleSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const badgeSizes = {
    sm: "text-[9px] px-1.5 py-0.2",
    md: "text-[10px] px-1.5 py-0.5",
    lg: "text-xs px-2 py-0.5",
  };

  const subtitleSizes = {
    sm: "text-[9px]",
    md: "text-[10px]",
    lg: "text-xs",
  };

  // If the user wants the direct complete logo image
  if (variant === "image") {
    const imgSource =
      theme === "light"
        ? "/assets/images/jstm-logo-clean.png"
        : "/assets/images/jstm-logo-white-transparent.png";

    const imgHeight = size === "sm" ? 40 : size === "md" ? 54 : 70;

    const ImageLogo = (
      <div className={`relative flex items-center group ${className}`}>
        <Image
          src={imgSource}
          alt="JSTM Construction"
          width={imgHeight * 1.1}
          height={imgHeight}
          className="h-auto w-auto max-h-[56px] object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
          priority
        />
      </div>
    );

    return href ? (
      <Link href={href} className="inline-flex items-center">
        {ImageLogo}
      </Link>
    ) : (
      ImageLogo
    );
  }

  // Official Emblem Mark (Crane + House + Swoosh Structure from jstm logo 2)
  const Emblem = (
    <div
      className={`relative ${iconSizes[size].box} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300 shadow-lg`}
      style={{
        background:
          theme === "light"
            ? "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)"
            : "linear-gradient(135deg, #182335 0%, #121927 50%, #0c121d 100%)",
        border:
          theme === "light"
            ? "1px solid rgba(16, 185, 129, 0.4)"
            : "1px solid rgba(16, 185, 129, 0.35)",
        boxShadow:
          theme === "light"
            ? "0 4px 12px rgba(0, 0, 0, 0.08), 0 0 16px rgba(16, 185, 129, 0.15)"
            : "0 4px 16px rgba(0, 0, 0, 0.5), 0 0 20px rgba(5, 150, 105, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
      }}
    >
      <Image
        src="/assets/images/jstm-emblem-white.png"
        alt="JSTM Construction Emblem"
        width={iconSizes[size].img}
        height={iconSizes[size].img}
        className="w-[84%] h-[84%] object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        priority
      />
    </div>
  );

  if (variant === "mark") {
    return href ? (
      <Link href={href} className={`inline-block group ${className}`}>
        {Emblem}
      </Link>
    ) : (
      <div className={`inline-block group ${className}`}>{Emblem}</div>
    );
  }

  const Content = (
    <div className={`flex items-center gap-3 group ${className}`}>
      {Emblem}
      <div>
        <div className="flex items-center gap-1.5">
          <span
            className={`${titleSizes[size]} font-black tracking-tight ${
              theme === "light" ? "text-slate-900" : "text-white"
            } font-heading group-hover:text-emerald-400 transition-colors flex items-center`}
          >
            JSTM
          </span>
          <span
            className={`${badgeSizes[size]} uppercase tracking-widest ${
              theme === "light"
                ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                : "bg-emerald-950/90 text-emerald-300 border-emerald-500/50 shadow-[0_0_8px_rgba(16,185,129,0.25)]"
            } rounded font-bold border flex items-center gap-1`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            LONDON
          </span>
        </div>
        <p
          className={`${subtitleSizes[size]} uppercase tracking-[0.14em] sm:tracking-[0.22em] ${
            theme === "light" ? "text-slate-600" : "text-slate-400"
          } font-bold group-hover:text-emerald-400 transition-colors whitespace-nowrap`}
        >
          Construction &amp; Refurbishment
        </p>
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className="inline-flex items-center">
      {Content}
    </Link>
  ) : (
    Content
  );
}
