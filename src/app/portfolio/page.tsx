"use client";

import React, { useState, useEffect, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// ─── Gallery Data ──────────────────────────────────────────────────────────────
const slides = [
  {
    src: "/gallery/project-01.jpg",
    label: "Architectural Plans & Elevations",
    category: "Planning",
  },
  {
    src: "/gallery/project-02.jpg",
    label: "Groundwork & Foundations",
    category: "Groundwork",
  },
  {
    src: "/gallery/project-03.jpg",
    label: "Custom Kitchen & Dining Extension",
    category: "Kitchen",
  },
  {
    src: "/gallery/project-04.jpg",
    label: "Open-Plan Living & Dining Room",
    category: "Interior",
  },
  {
    src: "/gallery/project-05.jpg",
    label: "New Master Bedroom Refurbishment",
    category: "Bedroom",
  },
  {
    src: "/gallery/project-06.jpg",
    label: "Loft Conversion with En-Suite",
    category: "Loft",
  },
  {
    src: "/gallery/project-07.jpg",
    label: "Modern Open-Plan Living Space",
    category: "Interior",
  },
  {
    src: "/gallery/project-08.jpg",
    label: "Hallway & Custom Joinery",
    category: "Interior",
  },
  {
    src: "/gallery/project-09.jpg",
    label: "Marble En-Suite Bathroom",
    category: "Bathroom",
  },
  {
    src: "/gallery/project-10.jpg",
    label: "Finished Family Bathroom",
    category: "Bathroom",
  },
  {
    src: "/gallery/project-11.jpg",
    label: "Modern Bathroom Renovation",
    category: "Bathroom",
  },
  {
    src: "/gallery/project-12.jpg",
    label: "Completed Bedroom Finish",
    category: "Bedroom",
  },
  {
    src: "/gallery/project-13.jpg",
    label: "Garden Landscaping & Lawn",
    category: "Landscaping",
  },
  {
    src: "/gallery/project-14.jpg",
    label: "Patio Paving & Rear Garden",
    category: "Landscaping",
  },
  {
    src: "/gallery/project-15.jpg",
    label: "Garden Patio & Outdoor Space",
    category: "Landscaping",
  },
  {
    src: "/gallery/project-16.jpg",
    label: "Completed Garden Renovation",
    category: "Landscaping",
  },
];

const CATEGORIES = ["All", "Planning", "Groundwork", "Kitchen", "Interior", "Loft", "Bedroom", "Bathroom", "Landscaping"];

export default function PortfolioPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const filteredSlides = activeCategory === "All"
    ? slides
    : slides.filter((s) => s.category === activeCategory);

  const showSlide = useCallback(
    (index: number) => {
      let next = index;
      if (next < 0) next = filteredSlides.length - 1;
      if (next >= filteredSlides.length) next = 0;
      setActiveIndex(next);
    },
    [filteredSlides.length]
  );

  useEffect(() => { setActiveIndex(0); }, [activeCategory]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showSlide(activeIndex - 1);
      if (e.key === "ArrowRight") showSlide(activeIndex + 1);
      if (e.key === "Escape") setIsFullscreen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex, showSlide]);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f8fafc" }}>
      <Header currentPage="portfolio" />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative pt-10 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "#0b1324" }}>
          {/* Embedded CSS for guaranteed instant Zoom In animation execution */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes portfolioHeroZoomIn {
              0% { transform: scale(1); }
              100% { transform: scale(1.18); }
            }
            .portfolio-hero-zoom-bg {
              animation: portfolioHeroZoomIn 10s ease-in-out infinite alternate !important;
              will-change: transform;
              transform-origin: center center;
            }
          `}} />

          {/* Hero Background Image with Ken Burns Zoom In Animation */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gallery/project-03.jpg"
              alt="JSTM Portfolio Architectural Vaulted Interior"
              className="w-full h-full object-cover object-center portfolio-hero-zoom-bg select-none"
              style={{
                animation: "portfolioHeroZoomIn 10s ease-in-out infinite alternate",
                transformOrigin: "center center",
              }}
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b1324]/85 via-[#0b1324]/70 to-[#060d17]/90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(16,185,129,0.22),transparent_75%)]" />
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full border shadow-lg" style={{ backgroundColor: "rgba(5,150,105,0.15)", borderColor: "rgba(16,185,129,0.4)" }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest font-semibold text-emerald-400">OUR RECENT WORK</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
              Our Project Portfolio &amp; Completed Work
            </h1>
            <p className="max-w-2xl text-slate-300 text-xs sm:text-base leading-relaxed">
              Browse photos of our completed house extensions, loft conversions, and full home refurbishments across London.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 sm:pt-3 text-[11px] sm:text-xs text-slate-400">
              {[
                { icon: "verified", label: "FMB Master Builder Certified" },
                { icon: "photo_library", label: "16 Featured Project Photos" },
                { icon: "location_on", label: "All 32 London Boroughs" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-1.5 sm:gap-2">
                  <span className="material-symbols-outlined text-emerald-400 text-sm sm:text-base">{s.icon}</span>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FILTER TABS */}
        <section className="py-3 px-4 sm:px-6 lg:px-8 border-b border-slate-200 sticky top-20 z-30 bg-white shadow-sm overflow-x-auto">
          <div className="max-w-7xl mx-auto flex items-center gap-1.5 sm:gap-2 min-w-max">
            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1 sm:mr-2 shrink-0">Filter:</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold border transition-all duration-200"
                style={activeCategory === cat
                  ? { backgroundColor: "#059669", color: "#fff", borderColor: "#059669" }
                  : { backgroundColor: "#fff", color: "#475569", borderColor: "#e2e8f0" }}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-[11px] sm:text-xs text-slate-400 shrink-0 pl-2">{filteredSlides.length} project{filteredSlides.length !== 1 ? "s" : ""}</span>
          </div>
        </section>

        {/* CAROUSEL */}
        <section className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800" style={{ backgroundColor: "#060d17" }} id="project-gallery-carousel">
          <div className="max-w-7xl mx-auto">
            {filteredSlides.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-48 sm:h-64 text-slate-400 gap-3">
                <span className="material-symbols-outlined text-4xl sm:text-5xl text-slate-600">image_not_supported</span>
                <p className="text-xs sm:text-sm">No projects in this category yet.</p>
              </div>
            ) : (
              <>
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group/carousel">
                  <div className="relative w-full overflow-hidden h-[280px] sm:h-[420px] md:h-[560px]">
                    {filteredSlides.map((slide, i) => (
                      <div
                        key={slide.src}
                        className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out cursor-zoom-in group/slide"
                        style={{ opacity: i === activeIndex ? 1 : 0, pointerEvents: i === activeIndex ? "auto" : "none" }}
                        onClick={() => setIsFullscreen(true)}
                        title="Click to view full screen"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={slide.src}
                          alt={slide.label}
                          className="w-full h-full object-cover select-none transition-transform duration-700 group-hover/slide:scale-[1.02]"
                          draggable={false}
                        />

                        {/* Top-Right Fullscreen Action Pill */}
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsFullscreen(true);
                            }}
                            className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-[10px] sm:text-xs font-semibold text-white border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-105 shadow-xl hover:border-emerald-400 group/fs"
                            style={{ backgroundColor: "rgba(11,19,36,0.85)" }}
                            aria-label="Open Fullscreen"
                          >
                            <span className="material-symbols-outlined text-sm sm:text-base group-hover/fs:text-emerald-400 transition-colors">fullscreen</span>
                            <span>Fullscreen</span>
                          </button>
                        </div>

                        {/* Center Hover Indicator */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold text-white bg-black/75 backdrop-blur-md border border-white/20 shadow-2xl">
                            <span className="material-symbols-outlined text-sm sm:text-base text-emerald-400">zoom_in</span>
                            Click to expand full screen
                          </span>
                        </div>

                        {/* Bottom Overlay Label & Counter */}
                        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 sm:p-8 flex items-end justify-between pointer-events-none" style={{ background: "linear-gradient(to top, #020409 0%, rgba(2,4,9,0.7) 50%, transparent 100%)" }}>
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-white border border-emerald-400/40 backdrop-blur-md" style={{ backgroundColor: "rgba(5,150,105,0.85)" }}>
                              {slide.label}
                            </span>
                            <span className="hidden sm:inline-block text-[11px] font-mono text-emerald-300/80 px-2.5 py-1 rounded-full border border-emerald-500/30" style={{ backgroundColor: "rgba(6,95,70,0.4)" }}>
                              {slide.category}
                            </span>
                          </div>
                          <span className="text-[10px] sm:text-xs text-slate-300 font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-slate-700" style={{ backgroundColor: "rgba(15,23,42,0.8)" }}>
                            {String(i + 1).padStart(2, "0")} / {String(filteredSlides.length).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Prev / Next */}
                  <button id="gallery-prev-btn" aria-label="Previous Image" onClick={() => showSlide(activeIndex - 1)}
                    className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl text-white flex items-center justify-center border border-slate-700 backdrop-blur-md transition-all duration-200 z-10 shadow-lg hover:scale-105 group"
                    style={{ backgroundColor: "rgba(15,23,42,0.8)" }}>
                    <span className="material-symbols-outlined text-lg sm:text-2xl group-hover:text-emerald-400 transition-colors">chevron_left</span>
                  </button>
                  <button id="gallery-next-btn" aria-label="Next Image" onClick={() => showSlide(activeIndex + 1)}
                    className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl text-white flex items-center justify-center border border-slate-700 backdrop-blur-md transition-all duration-200 z-10 shadow-lg hover:scale-105 group"
                    style={{ backgroundColor: "rgba(15,23,42,0.8)" }}>
                    <span className="material-symbols-outlined text-lg sm:text-2xl group-hover:text-emerald-400 transition-colors">chevron_right</span>
                  </button>
                </div>

                {/* Thumbnail strip */}
                <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 hide-scrollbar">
                  {filteredSlides.map((slide, i) => (
                    <button key={slide.src} id={`thumb-${i}`} onClick={() => setActiveIndex(i)}
                      className="shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200"
                      style={{
                        width: "60px", height: "42px",
                        borderColor: i === activeIndex ? "#34d399" : "transparent",
                        opacity: i === activeIndex ? 1 : 0.5,
                        transform: i === activeIndex ? "scale(1.06)" : "scale(1)",
                      }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={slide.src} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" draggable={false} />
                    </button>
                  ))}
                </div>

                <p className="mt-2.5 text-center text-[11px] sm:text-xs text-slate-500">
                  <span className="material-symbols-outlined text-xs align-middle mr-1 text-emerald-400">touch_app</span>
                  Click image to expand full screen &bull; Use arrow keys or click thumbnails to navigate
                </p>

                {/* ─── FULLSCREEN LIGHTBOX MODAL ────────────────────────────────────── */}
                {isFullscreen && (
                  <div
                    id="portfolio-fullscreen-lightbox"
                    className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-xl animate-fadeIn select-none"
                    onClick={() => setIsFullscreen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Full screen image preview"
                  >
                    {/* Lightbox Top Bar */}
                    <div
                      className="w-full flex items-center justify-between px-3 sm:px-8 py-3 sm:py-4 border-b border-white/10 z-20"
                      style={{ backgroundColor: "rgba(6,13,23,0.85)" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-white bg-emerald-600 border border-emerald-400/40">
                          {filteredSlides[activeIndex]?.category}
                        </span>
                        <h3 className="text-xs sm:text-base font-bold text-white tracking-wide truncate max-w-[160px] sm:max-w-md">
                          {filteredSlides[activeIndex]?.label}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-5">
                        <span className="text-[10px] sm:text-xs font-mono text-slate-400 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-white/10 bg-white/5">
                          {String(activeIndex + 1).padStart(2, "0")} / {String(filteredSlides.length).padStart(2, "0")}
                        </span>
                        <button
                          type="button"
                          onClick={() => setIsFullscreen(false)}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all hover:scale-105"
                          title="Close (Esc)"
                          aria-label="Close fullscreen view"
                        >
                          <span className="material-symbols-outlined text-xl sm:text-2xl">close</span>
                        </button>
                      </div>
                    </div>

                    {/* Lightbox Center Image & Controls */}
                    <div
                      className="relative flex-1 w-full flex items-center justify-center p-2 sm:p-6 overflow-hidden"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        key={filteredSlides[activeIndex]?.src}
                        src={filteredSlides[activeIndex]?.src}
                        alt={filteredSlides[activeIndex]?.label}
                        className="max-h-[72vh] sm:max-h-[80vh] max-w-[95vw] object-contain rounded-xl shadow-2xl border border-white/10 transition-transform duration-300"
                        draggable={false}
                      />

                      {/* Previous Button */}
                      <button
                        type="button"
                        onClick={() => showSlide(activeIndex - 1)}
                        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 sm:w-14 h-10 sm:h-14 rounded-xl text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-200 shadow-2xl hover:scale-110 group/btn"
                        style={{ backgroundColor: "rgba(15,23,42,0.85)" }}
                        aria-label="Previous image"
                      >
                        <span className="material-symbols-outlined text-2xl sm:text-3xl group-hover/btn:text-emerald-400 transition-colors">chevron_left</span>
                      </button>

                      {/* Next Button */}
                      <button
                        type="button"
                        onClick={() => showSlide(activeIndex + 1)}
                        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 sm:w-14 h-10 sm:h-14 rounded-xl text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all duration-200 shadow-2xl hover:scale-110 group/btn"
                        style={{ backgroundColor: "rgba(15,23,42,0.85)" }}
                        aria-label="Next image"
                      >
                        <span className="material-symbols-outlined text-2xl sm:text-3xl group-hover/btn:text-emerald-400 transition-colors">chevron_right</span>
                      </button>
                    </div>

                    {/* Lightbox Bottom Thumbnail Strip */}
                    <div
                      className="w-full flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 border-t border-white/10 overflow-x-auto hide-scrollbar z-20"
                      style={{ backgroundColor: "rgba(6,13,23,0.9)" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {filteredSlides.map((slide, i) => (
                        <button
                          key={`fs-thumb-${slide.src}`}
                          type="button"
                          onClick={() => setActiveIndex(i)}
                          className="shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200"
                          style={{
                            width: "52px",
                            height: "36px",
                            borderColor: i === activeIndex ? "#10b981" : "rgba(255,255,255,0.15)",
                            opacity: i === activeIndex ? 1 : 0.45,
                            transform: i === activeIndex ? "scale(1.08)" : "scale(1)",
                          }}
                          aria-label={`Jump to photo ${i + 1}`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={slide.src} alt="" className="w-full h-full object-cover" draggable={false} />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* PROJECT STATS */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: "200+", label: "Projects Completed", icon: "domain" },
              { value: "10yr", label: "Workmanship Guarantee", icon: "verified_user" },
              { value: "32", label: "London Boroughs Served", icon: "location_city" },
              { value: "FMB", label: "Federation of Master Builders", icon: "workspace_premium" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-1.5 sm:gap-2 p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300">
                <span className="material-symbols-outlined text-2xl sm:text-3xl" style={{ color: "#059669" }}>{stat.icon}</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{stat.value}</span>
                <span className="text-[11px] sm:text-xs font-medium text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: "#042f24" }}>
          <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(rgba(52,211,153,0.5) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="relative max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full border text-emerald-400 text-[11px] sm:text-xs font-semibold uppercase tracking-widest" style={{ backgroundColor: "rgba(5,150,105,0.2)", borderColor: "rgba(5,150,105,0.4)" }}>
              <span className="material-symbols-outlined text-xs sm:text-sm">handshake</span>
              Ready to Start?
            </div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Ready to Start Your Building Project?
            </h2>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(209,250,229,0.8)" }}>
              From house extensions and loft conversions to full home renovations — get friendly advice and a free, fixed quote from trusted London builders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Link href="/contact" id="portfolio-cta-quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg transition-all duration-200 hover:-translate-y-0.5 text-white"
                style={{ backgroundColor: "#10b981" }}>
                <span className="material-symbols-outlined text-sm sm:text-base">mail</span>
                Get Free Quote
              </Link>
              <a href="tel:02035762228" id="portfolio-cta-call"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl border font-semibold text-xs sm:text-sm transition-all duration-200 text-emerald-300 hover:text-white"
                style={{ borderColor: "rgba(5,150,105,0.5)" }}>
                <span className="material-symbols-outlined text-sm sm:text-base">call</span>
                020 3576 2228
              </a>
              <a href="https://wa.me/447418095006" target="_blank" rel="noopener noreferrer" id="portfolio-cta-whatsapp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 text-white bg-emerald-600 hover:bg-emerald-500 shadow-md">
                <i className="fa-brands fa-whatsapp text-base sm:text-lg"></i>
                +44 7418 095006
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
