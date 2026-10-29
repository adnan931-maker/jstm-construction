"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type ProjectCategory =
  | "All Projects"
  | "House Extensions"
  | "Loft Conversions"
  | "Full Refurbishments"
  | "Kitchens & Bathrooms";

interface TransformationProject {
  id: string;
  category: "House Extensions" | "Loft Conversions" | "Full Refurbishments" | "Kitchens & Bathrooms";
  title: string;
  locationBadge: string;
  image: string;
  alt: string;
  description: string;
  duration: string;
}

const PROJECT_FILTERS: ProjectCategory[] = [
  "All Projects",
  "House Extensions",
  "Loft Conversions",
  "Full Refurbishments",
  "Kitchens & Bathrooms",
];

const TRANSFORMATION_PROJECTS: TransformationProject[] = [
  {
    id: "kensington-refurb",
    category: "Full Refurbishments",
    title: "Kensington Edwardian Townhouse",
    locationBadge: "Full Refurbishment • Kensington W8",
    image: "/assets/images/kensington_refurbishment.jpg",
    alt: "Kensington Edwardian Full Refurbishment",
    description: "Complete 4-storey townhouse renovation, modern insulation, open-plan kitchen, and bespoke herringbone wood flooring.",
    duration: "22 Weeks",
  },
  {
    id: "richmond-loft",
    category: "Loft Conversions",
    title: "Richmond Skyline Mansard Loft",
    locationBadge: "Loft Conversion • Richmond TW9",
    image: "/assets/images/richmond_loft_conversion.jpg",
    alt: "Richmond Double Dormer Loft Conversion",
    description: "Created two spacious double bedrooms and a luxury walk-in shower room with custom Juliet balconies.",
    duration: "9 Weeks",
  },
  {
    id: "wandsworth-ext",
    category: "House Extensions",
    title: "Wandsworth Open-Plan Living",
    locationBadge: "House Extension • Wandsworth SW18",
    image: "/assets/images/wandsworth_wrap_around_extension.jpg",
    alt: "Wandsworth Contemporary Wrap-Around Extension",
    description: "Wrap-around ground floor extension with large sliding glass doors, rooflights, and a bright new family kitchen.",
    duration: "14 Weeks",
  },
  {
    id: "battersea-ext",
    category: "House Extensions",
    title: "Battersea Modern Kitchen & Extension",
    locationBadge: "House Extension • Battersea SW11",
    image: "/gallery/project-03.jpg",
    alt: "Battersea Contemporary Rear Extension",
    description: "Rear kitchen and dining extension with slimline steel doors, integrated skylights, and seamless patio garden flow.",
    duration: "12 Weeks",
  },
  {
    id: "wimbledon-loft",
    category: "Loft Conversions",
    title: "Wimbledon L-Shaped Dormer Loft",
    locationBadge: "Loft Conversion • Wimbledon SW19",
    image: "/gallery/project-06.jpg",
    alt: "Wimbledon Dormer Loft Conversion",
    description: "Spacious master bedroom suite conversion with custom fitted wardrobes, en-suite bathroom, and panoramic skyline views.",
    duration: "8 Weeks",
  },
  {
    id: "chelsea-refurb",
    category: "Full Refurbishments",
    title: "Chelsea Townhouse Interior Remodel",
    locationBadge: "Full Refurbishment • Chelsea SW3",
    image: "/assets/images/townhouse_renovation.jpg",
    alt: "Chelsea Townhouse Interior Renovation",
    description: "Complete interior overhaul including load-bearing wall removals, acoustic insulation, and handcrafted architectural joinery.",
    duration: "18 Weeks",
  },
  {
    id: "fulham-kitchen",
    category: "Kitchens & Bathrooms",
    title: "Fulham Bespoke Kitchen & Island",
    locationBadge: "Kitchen Renovation • Fulham SW6",
    image: "/gallery/project-03.jpg",
    alt: "Fulham Custom Kitchen Renovation",
    description: "Handcrafted contemporary kitchen island with waterfall quartz worktops, bespoke cabinetry, and ambient lighting.",
    duration: "4 Weeks",
  },
  {
    id: "mayfair-bathroom",
    category: "Kitchens & Bathrooms",
    title: "Mayfair Marble En-Suite Bathroom",
    locationBadge: "Bathroom Renovation • Mayfair W1",
    image: "/gallery/project-09.jpg",
    alt: "Mayfair Luxury Marble Bathroom Renovation",
    description: "High-spec Italian marble bathroom featuring a walk-in rainfall shower, bespoke vanity unit, and concealed LED lighting.",
    duration: "3 Weeks",
  },
];

export default function HomePage() {
  const [activeProjectFilter, setActiveProjectFilter] = useState<ProjectCategory>("All Projects");

  const filteredProjects = activeProjectFilter === "All Projects"
    ? TRANSFORMATION_PROJECTS
    : TRANSFORMATION_PROJECTS.filter((p) => p.category === activeProjectFilter);
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#1E293B]">

      <Header currentPage="home" />
      <main id="home">
        {/*  BEGIN: HeroSection  */}
        <section className="relative bg-charcoal-950 text-white overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 border-b border-slate-800">
          {/* Embedded CSS for guaranteed instant Zoom In animation execution */}
          <style dangerouslySetInnerHTML={{
            __html: `
    @keyframes heroZoomIn {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.18);
      }
    }
    .hero-zoom-bg {
      animation: heroZoomIn 10s ease-in-out infinite alternate !important;
      will-change: transform;
      transform-origin: center center;
    }
  `}} />

          {/* Hero Background Image with Ken Burns Zoom In Animation */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/wandsworth_wrap_around_extension.jpg"
              alt="Luxury London wrap-around house extension and architectural refurbishment"
              className="w-full h-full object-cover object-center hero-zoom-bg select-none"
              style={{
                animation: "heroZoomIn 10s ease-in-out infinite alternate",
                transformOrigin: "center center",
              }}
              draggable={false}
            />
            {/* Balanced Cinematic Gradient Overlays: Image & zoom motion clearly visible, text crystal clear */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#060d17]/85 via-[#0b1324]/70 to-[#060d17]/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060d17] via-transparent to-[#060d17]/40" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_40%,rgba(16,185,129,0.22),transparent_70%)]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/*  Hero Copy  */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  🛠️ Professional Building &amp; Property Services
                </div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                  Built With Strength, Precision &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Craftsmanship</span>
                </h1>
                <p className="text-xs sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
                  Quality home extensions, renovations, and property services across London. From initial design to completion, we deliver exceptional craftsmanship on time and on budget.
                </p>
                {/*  Hero Action Buttons  */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <a className="inline-flex items-center justify-center px-5 py-3 sm:px-7 sm:py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-900/40 transition-all duration-200" href="#contact">
                    <span>Request a Free Site Survey</span>
                    <i className="fa-solid fa-calendar-check ml-2.5"></i>
                  </a>
                  <a className="inline-flex items-center justify-center px-5 py-3 sm:px-7 sm:py-3.5 rounded-lg border border-slate-700 hover:border-emerald-500/60 bg-slate-900/70 text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition-colors" href="#projects">
                    <span>Explore London Projects</span>
                  </a>
                </div>
                {/*  Guarantee Badges under Buttons  */}
                <div className="grid grid-cols-2 gap-4 pt-6 max-w-lg border-t border-slate-800/80">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400 shrink-0">
                      <i className="fa-solid fa-leaf text-sm sm:text-base"></i>
                    </div>
                    <div>
                      <h4 className="text-[11px] sm:text-xs uppercase font-bold text-slate-200">01 Eco-Friendly</h4>
                      <p className="text-[10px] sm:text-xs text-slate-400">Energy Efficient</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400 shrink-0">
                      <i className="fa-solid fa-certificate text-sm sm:text-base"></i>
                    </div>
                    <div>
                      <h4 className="text-[11px] sm:text-xs uppercase font-bold text-slate-200">02 Quality Assured</h4>
                      <p className="text-[10px] sm:text-xs text-slate-400">10-Year Guarantee</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Hero Visual Grid / Image Composition  */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-600/30 shadow-2xl shadow-emerald-950/50 bg-slate-900">
                    <img alt="JSTM Construction site directors reviewing architectural drawings on a London renovation project" className="w-full h-[320px] sm:h-[460px] object-cover" src="/assets/images/director_reviewing_drawings.jpg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent"></div>
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3 sm:p-4 rounded-xl bg-charcoal-900/90 backdrop-blur-md border border-slate-700/80 text-white">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] sm:text-xs font-semibold text-emerald-400 uppercase tracking-wider">Live Kensington Site</span>
                        <span className="flex items-center text-[10px] sm:text-xs text-emerald-300 font-mono">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-ping"></span> Phase 3 Finishing
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-slate-200">Victorian Townhouse Full Refurbishment &amp; Glass Extension</p>
                    </div>
                  </div>
                  {/*  Floating Experience Pill  */}
                  <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 bg-emerald-600 text-white p-3 sm:p-4 rounded-xl shadow-xl flex items-center gap-2.5 sm:gap-3 border border-emerald-400/30">
                    <div className="text-2xl sm:text-3xl font-extrabold font-heading">15+</div>
                    <div className="text-[10px] sm:text-xs font-semibold leading-tight uppercase tracking-wider">
                      Years of<br />Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  END: HeroSection  */}
        {/*  BEGIN: QuickHighlightsBar  */}
        <section className="bg-charcoal-900 border-b border-slate-800 py-6" data-purpose="highlight-cards">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/*  Highlight Item 1  */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-charcoal-950/80 border border-slate-800 hover:border-emerald-600/40 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-emerald-950/60 border border-emerald-700/40 text-emerald-400 flex items-center justify-center shrink-0 text-xl">
                  <i className="fa-solid fa-trophy"></i>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white font-heading">Quality Workmanship</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">Federation of Master Builders (FMB) audited standards with high-quality finishes on every project.</p>
                </div>
              </div>
              {/*  Highlight Item 2  */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-charcoal-950/80 border border-slate-800 hover:border-emerald-600/40 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-emerald-950/60 border border-emerald-700/40 text-emerald-400 flex items-center justify-center shrink-0 text-xl">
                  <i className="fa-solid fa-diagram-project"></i>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white font-heading">Dedicated Project Manager</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">Your direct point of contact with regular weekly updates and clear communication throughout.</p>
                </div>
              </div>
              {/*  Highlight Item 3  */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-charcoal-950/80 border border-slate-800 hover:border-emerald-600/40 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-emerald-950/60 border border-emerald-700/40 text-emerald-400 flex items-center justify-center shrink-0 text-xl">
                  <i className="fa-solid fa-id-card-clip"></i>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white font-heading">Certified London Trades</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">Qualified Gas Safe and NICEIC approved tradespeople backed by £5M public liability insurance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  END: QuickHighlightsBar  */}
        {/*  BEGIN: AboutSection  */}
        <section className="py-14 sm:py-20 lg:py-28 bg-white" data-purpose="about-company" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/*  Image Collage Left  */}
              <div className="lg:col-span-5 relative">
                <div className="relative">
                  <img alt="London townhouse renovation in progress by JSTM master craft team" className="rounded-2xl shadow-xl w-full h-[340px] sm:h-[480px] object-cover" src="/assets/images/townhouse_renovation.jpg" />
                  {/*  Small inset image  */}
                  <div className="absolute -bottom-8 -right-6 w-56 sm:w-64 rounded-xl border-4 border-white shadow-2xl overflow-hidden hidden sm:block bg-charcoal-900">
                    <img alt="High-end joinery and steelwork" className="w-full h-36 object-cover" src="/assets/images/joinery_steelwork.jpg" />
                    <div className="p-3 bg-charcoal-900 text-white">
                      <p className="text-xs font-bold text-emerald-400 font-heading">Passivhaus Ready</p>
                      <p className="text-[11px] text-slate-300">Sustainable building envelopes</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Content Right  */}
              <div className="lg:col-span-7 lg:pl-6 space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 text-emerald-700 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                  <span className="w-6 h-0.5 bg-emerald-600"></span>
                  About JSTM Construction London
                </div>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Trusted London Builders &amp; Home Renovation Specialists
                </h2>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm lg:text-base">
                  With over 15 years of building experience, JSTM Construction helps London homeowners create beautiful, practical spaces. Whether you need a ground-floor extension, a loft conversion, or a full house refurbishment, we deliver quality workmanship with transparent pricing and clear communication.
                </p>
                {/*  Nav Tabs Mimic  */}
                <div className="border-b border-slate-200">
                  <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm font-semibold">
                    <button className="pb-3 border-b-2 border-emerald-600 text-emerald-700">Our Mission</button>
                    <button className="pb-3 text-slate-500 hover:text-slate-900">London Expertise</button>
                    <button className="pb-3 text-slate-500 hover:text-slate-900">Core Values</button>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic bg-emerald-50/70 p-3.5 sm:p-4 rounded-lg border-l-4 border-emerald-600">
                  "Our goal is straightforward: deliver top-quality building work without the stress. We keep you updated, stick to agreed budgets, and build spaces your family will enjoy for years to come."
                </p>
                {/*  Bullet Checklist  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium text-slate-800">
                    <i className="fa-solid fa-circle-check text-emerald-600"></i>
                    <span>Planning Permission &amp; Building Control Guidance</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium text-slate-800">
                    <i className="fa-solid fa-circle-check text-emerald-600"></i>
                    <span>Clear, Fixed-Price Quotes &amp; Agreed Schedules</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium text-slate-800">
                    <i className="fa-solid fa-circle-check text-emerald-600"></i>
                    <span>Honest, Transparent Pricing with No Hidden Extras</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium text-slate-800">
                    <i className="fa-solid fa-circle-check text-emerald-600"></i>
                    <span>Dedicated Project Manager on Every Build</span>
                  </div>
                </div>
                <div className="pt-3 sm:pt-4 flex items-center gap-6">
                  <a className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm transition-colors shadow" href="#services">
                    <span>Discover Services</span>
                    <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                  </a>
                  <div className="flex items-center space-x-2.5 sm:space-x-3">
                    <div className="text-xl sm:text-2xl font-black text-emerald-700 font-heading">25+</div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase leading-tight">Skilled London<br />Tradesmen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  END: AboutSection  */}
        {/*  BEGIN: CoreServicesGrid  */}
        <section className="py-14 sm:py-20 bg-slate-50 border-y border-slate-200/80" data-purpose="services-grid" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/*  Section Header  */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 text-emerald-700 font-bold uppercase tracking-wider text-[11px] sm:text-xs mb-2 sm:mb-3">
                <span className="w-4 h-0.5 bg-emerald-600"></span>
                Our Building Capabilities
                <span className="w-4 h-0.5 bg-emerald-600"></span>
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
                Complete Building Services Across London
              </h2>
              <p className="text-slate-600 mt-2.5 sm:mt-4 text-xs sm:text-sm lg:text-base">
                From house extensions and loft conversions to full house refurbishments, we provide complete, reliable building solutions with guaranteed quality.
              </p>
            </div>
            {/*  8 Core Services Grid  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/*  Service 1: House Extensions  */}
              <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-600/60 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 mb-5 sm:mb-6">
                    <i className="fa-solid fa-house-chimney-window"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors font-heading mb-2 sm:mb-3">
                    House Extensions
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Rear, side-return, and wrap-around extensions that create bright, spacious open-plan living for your home.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-2 mb-6 border-t border-slate-100 pt-3">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Bi-fold, sliding &amp; Crittall doors</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Structural steel beams &amp; foundations</li>
                  </ul>
                </div>
                <a className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800" href="#contact">
                  <span>Explore Service</span>
                  <i className="fa-solid fa-arrow-right ml-1.5 transform group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
              {/*  Service 2: Loft Conversions  */}
              <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-600/60 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 mb-5 sm:mb-6">
                    <i className="fa-solid fa-stairs"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors font-heading mb-2 sm:mb-3">
                    Loft Conversions
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Turn unused attic space into an extra master bedroom, en-suite bathroom, or a comfortable home office.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-2 mb-6 border-t border-slate-100 pt-3">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Mansard, Dormer &amp; Velux setups</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Party Wall &amp; Building Control support</li>
                  </ul>
                </div>
                <a className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800" href="#contact">
                  <span>Explore Service</span>
                  <i className="fa-solid fa-arrow-right ml-1.5 transform group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
              {/*  Service 3: Full Refurbishments  */}
              <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-600/60 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 mb-5 sm:mb-6">
                    <i className="fa-solid fa-hammer"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors font-heading mb-2 sm:mb-3">
                    Full Refurbishments
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Complete home makeovers, including wall removals, layout redesign, new electrical wiring, and plumbing.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-2 mb-6 border-t border-slate-100 pt-3">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Complete interior &amp; exterior overhaul</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Energy-efficient insulation &amp; soundproofing</li>
                  </ul>
                </div>
                <a className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800" href="#contact">
                  <span>Explore Service</span>
                  <i className="fa-solid fa-arrow-right ml-1.5 transform group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
              {/*  Service 4: Kitchen & Bathrooms  */}
              <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-600/60 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 mb-5 sm:mb-6">
                    <i className="fa-solid fa-bath"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors font-heading mb-2 sm:mb-3">
                    Kitchens &amp; Bathrooms
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Modern fitted kitchens, luxury family bathrooms, walk-in wet rooms, and premium stone worktops.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-2 mb-6 border-t border-slate-100 pt-3">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Custom kitchen units &amp; breakfast bars</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Walk-in showers &amp; waterproof wet rooms</li>
                  </ul>
                </div>
                <a className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800" href="#contact">
                  <span>Explore Service</span>
                  <i className="fa-solid fa-arrow-right ml-1.5 transform group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
              {/*  Service 5: Roofing & Structural  */}
              <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-600/60 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 mb-5 sm:mb-6">
                    <i className="fa-solid fa-layer-group"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors font-heading mb-2 sm:mb-3">
                    Roofing &amp; Structural
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Pitched slate and tile roofs, GRP flat roofing, chimney repairs, and load-bearing steel beam installations.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-2 mb-6 border-t border-slate-100 pt-3">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Structural engineer calculations &amp; drawings</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> 20-year flat roof warranties</li>
                  </ul>
                </div>
                <a className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800" href="#contact">
                  <span>Explore Service</span>
                  <i className="fa-solid fa-arrow-right ml-1.5 transform group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
              {/*  Service 6: Flooring & Tiling  */}
              <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-600/60 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 mb-5 sm:mb-6">
                    <i className="fa-solid fa-border-all"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors font-heading mb-2 sm:mb-3">
                    Flooring &amp; Tiling
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Hardwood engineered flooring, herringbone parquet, porcelain tiling, and energy-efficient underfloor heating.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-2 mb-6 border-t border-slate-100 pt-3">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Level subfloor screed &amp; prep</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Wet &amp; electric UFH systems</li>
                  </ul>
                </div>
                <a className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800" href="#contact">
                  <span>Explore Service</span>
                  <i className="fa-solid fa-arrow-right ml-1.5 transform group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
              {/*  Service 7: Painting & Decorating  */}
              <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-600/60 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 mb-5 sm:mb-6">
                    <i className="fa-solid fa-paint-roller"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors font-heading mb-2 sm:mb-3">
                    Painting &amp; Decorating
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Interior and exterior painting, smooth plastering, quality decorative finishes, and woodwork restoration.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-2 mb-6 border-t border-slate-100 pt-3">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Dustless sanding preparation</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Specialist decorative moulding</li>
                  </ul>
                </div>
                <a className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800" href="#contact">
                  <span>Explore Service</span>
                  <i className="fa-solid fa-arrow-right ml-1.5 transform group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
              {/*  Service 8: General Building & Joinery  */}
              <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-600/60 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 mb-5 sm:mb-6">
                    <i className="fa-solid fa-toolbox"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors font-heading mb-2 sm:mb-3">
                    General Building &amp; Joinery
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Brickwork, foundations, garden rooms, bespoke fitted wardrobes, alcove shelving, and internal doors.
                  </p>
                  <ul className="text-xs text-slate-500 space-y-2 mb-6 border-t border-slate-100 pt-3">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> London brick matching</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Custom artisan carpentry</li>
                  </ul>
                </div>
                <a className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800" href="#contact">
                  <span>Explore Service</span>
                  <i className="fa-solid fa-arrow-right ml-1.5 transform group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Need advice on your upcoming project?
                <a className="text-emerald-700 font-bold underline ml-1 hover:text-emerald-800" href="#contact">Speak directly with our building team →</a>
              </p>
            </div>
          </div>
        </section>
        {/*  END: CoreServicesGrid  */}
        {/*  BEGIN: QuickEnquiryBanner  */}
        <section className="bg-charcoal-900 text-white py-10 sm:py-12 border-y border-slate-800" data-purpose="quick-consultation-banner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-emerald-950 via-charcoal-900 to-charcoal-950 rounded-2xl p-6 sm:p-12 border border-emerald-800/40 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="text-emerald-400 font-semibold text-[11px] sm:text-xs uppercase tracking-wider">Free Consultation &amp; Advice</span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mt-1 font-heading">
                    Have a London Project in Mind? Let’s Talk.
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl">
                    Get straightforward advice and an estimated budget guide for your project within 24 hours. No obligation.
                  </p>
                  {/*  Quick Enquiry Form  */}
                  <form className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3 max-w-lg" onSubmit={(e) => { e.preventDefault(); alert("Form submitted successfully! A JSTM project surveyor will contact you shortly."); }}>
                    <input className="flex-1 bg-charcoal-800 border border-slate-700 rounded-lg px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Enter your email or phone..." required type="email" />
                    <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 sm:px-6 py-3 rounded-lg text-xs sm:text-sm transition-colors whitespace-nowrap shadow-md shadow-emerald-900/50" type="submit">
                      Request Callback
                    </button>
                  </form>
                </div>
                {/*  Direct Contact Box  */}
                <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4 sm:gap-6 border-t lg:border-t-0 lg:border-l border-slate-800 lg:pl-8 pt-5 lg:pt-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl sm:text-2xl shrink-0">
                    <i className="fa-solid fa-headset"></i>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-xs uppercase text-slate-400 font-bold tracking-wider">Direct Landline &bull; WhatsApp</span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4">
                      <a className="block text-base sm:text-xl font-black text-white hover:text-emerald-400 transition-colors font-heading" href="tel:02035762228">
                        020 3576 2228
                      </a>
                      <span className="hidden sm:inline text-slate-600">|</span>
                      <a className="inline-flex items-center gap-1.5 text-xs sm:text-base font-bold text-emerald-400 hover:text-emerald-300 transition-colors" href="https://wa.me/447418095006" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-whatsapp text-sm sm:text-lg"></i> +44 7418 095006
                      </a>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400">Free advice &bull; Fast response &bull; No obligation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  END: QuickEnquiryBanner  */}
        {/*  BEGIN: WorkProcessSection  */}
        <section className="py-14 sm:py-20 lg:py-28 bg-white" data-purpose="work-process" id="process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-emerald-700 font-bold uppercase tracking-wider text-[11px] sm:text-xs mb-2 sm:mb-3">
                  <span className="w-4 h-0.5 bg-emerald-600"></span>
                  Methodical Execution
                </div>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
                  Our Simple 4-Step Building Process
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm lg:text-base mt-2 sm:mt-3">
                  We manage your build carefully from first consultation to final inspection, keeping your project on time and on budget.
                </p>
              </div>
              <a className="inline-flex items-center font-bold text-xs sm:text-sm text-emerald-700 hover:text-emerald-800" href="#contact">
                <span>Book a Free Site Survey</span>
                <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
              </a>
            </div>
            {/*  4 Step Cards Grid  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/*  Step 1  */}
              <div className="p-5 sm:p-6 rounded-2xl bg-charcoal-900 text-white relative overflow-hidden border border-slate-800">
                <span className="absolute top-4 right-4 text-4xl sm:text-5xl font-black text-slate-800 font-heading select-none">01</span>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-lg sm:text-xl mb-4 sm:mb-6">
                  <i className="fa-solid fa-clipboard-check"></i>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-1.5 sm:mb-2">Planning &amp; Feasibility</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We visit your property to discuss your ideas, assess structural feasibility, and advise on planning rules.
                </p>
              </div>
              {/*  Step 2  */}
              <div className="p-5 sm:p-6 rounded-2xl bg-charcoal-900 text-white relative overflow-hidden border border-slate-800">
                <span className="absolute top-4 right-4 text-4xl sm:text-5xl font-black text-slate-800 font-heading select-none">02</span>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-lg sm:text-xl mb-4 sm:mb-6">
                  <i className="fa-solid fa-drafting-compass"></i>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-1.5 sm:mb-2">Design &amp; Engineering</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Detailed architectural drawings, structural engineer calculations, and building regulations submissions.
                </p>
              </div>
              {/*  Step 3  */}
              <div className="p-5 sm:p-6 rounded-2xl bg-charcoal-900 text-white relative overflow-hidden border border-slate-800">
                <span className="absolute top-4 right-4 text-4xl sm:text-5xl font-black text-slate-800 font-heading select-none">03</span>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-lg sm:text-xl mb-4 sm:mb-6">
                  <i className="fa-solid fa-helmet-safety"></i>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-1.5 sm:mb-2">Construction &amp; Build</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Skilled tradesmen working on-site, managed daily by your project manager with clean workspaces and weekly updates.
                </p>
              </div>
              {/*  Step 4  */}
              <div className="p-5 sm:p-6 rounded-2xl bg-charcoal-900 text-white relative overflow-hidden border border-slate-800">
                <span className="absolute top-4 right-4 text-4xl sm:text-5xl font-black text-slate-800 font-heading select-none">04</span>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-lg sm:text-xl mb-4 sm:mb-6">
                  <i className="fa-solid fa-key"></i>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-1.5 sm:mb-2">Final Inspection &amp; Handover</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Detailed quality inspection, Building Control completion certificate, and your 10-year warranty guarantee pack.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*  END: WorkProcessSection  */}
        {/*  BEGIN: TickerBar  */}
        <div className="bg-emerald-600 text-white py-3.5 overflow-hidden font-bold tracking-wider text-xs sm:text-sm uppercase select-none shadow-inner">
          <div className="marquee-track flex gap-8 items-center whitespace-nowrap">
            <span>★ House Extensions across London</span>
            <span>•</span>
            <span>Dormer &amp; Mansard Loft Conversions</span>
            <span>•</span>
            <span>Luxury Kitchen &amp; Bathroom Installations</span>
            <span>•</span>
            <span>Full Period Refurbishments</span>
            <span>•</span>
            <span>Structural Steel &amp; RSJ Alterations</span>
            <span>•</span>
            <span>Passivhaus &amp; Eco Upgrades</span>
            <span>•</span>
            <span>10-Year Insurance-Backed Guarantees</span>
            <span>•</span>
            <span>★ House Extensions across London</span>
            <span>•</span>
            <span>Dormer &amp; Mansard Loft Conversions</span>
            <span>•</span>
            <span>Luxury Kitchen &amp; Bathroom Installations</span>
            <span>•</span>
            <span>Full Period Refurbishments</span>
            <span>•</span>
            <span>Structural Steel &amp; RSJ Alterations</span>
          </div>
        </div>
        {/*  END: TickerBar  */}
        {/*  BEGIN: WhyChooseUsDark  */}
        <section className="py-14 sm:py-20 lg:py-28 bg-charcoal-950 text-white border-b border-slate-800" data-purpose="why-choose-us">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-[11px] sm:text-xs mb-2 sm:mb-3">
                <span className="w-4 h-0.5 bg-emerald-500"></span>
                Why Choose JSTM London
                <span className="w-4 h-0.5 bg-emerald-500"></span>
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading">
                Your Trusted London Construction Partner
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm lg:text-base mt-2 sm:mt-3">
                We take the hassle out of building work: clear pricing with no hidden surprises, agreed completion dates, and certified builders you can trust.
              </p>
            </div>
            <div className="bg-charcoal-900 rounded-3xl p-5 sm:p-10 border border-slate-800 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
                {/*  Site Image Left  */}
                <div className="lg:col-span-6 relative">
                  <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 shadow-xl">
                    <img alt="Senior JSTM structural inspector conducting rigorous quality checks" className="w-full h-64 sm:h-96 object-cover" src="/assets/images/structural_inspection.jpg" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-charcoal-950/90 backdrop-blur px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-emerald-500/40 text-[11px] sm:text-xs">
                      <span className="font-bold text-white">Project:</span> <span className="text-emerald-400">Notting Hill Mews House</span>
                    </div>
                  </div>
                </div>
                {/*  Content Checklist Right  */}
                <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                  <div className="inline-block px-3 py-1 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] sm:text-xs font-bold uppercase">
                    Trusted &amp; Fully Insured
                  </div>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white font-heading">
                    We take care of your home from foundations to finishes.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Every project is fully covered by our comprehensive liability insurance, signed off to UK building standards, and delivered by tidy, considerate tradespeople.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-slate-200">
                    <div className="flex items-center gap-2.5">
                      <i className="fa-solid fa-square-check text-emerald-400 text-sm sm:text-base"></i>
                      <span>Agreed Timelines &amp; Completion Dates</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <i className="fa-solid fa-square-check text-emerald-400 text-sm sm:text-base"></i>
                      <span>Dedicated Resident Site Manager</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <i className="fa-solid fa-square-check text-emerald-400 text-sm sm:text-base"></i>
                      <span>Transparent, Itemized Quotations</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <i className="fa-solid fa-square-check text-emerald-400 text-sm sm:text-base"></i>
                      <span>£5,000,000 Public Liability</span>
                    </div>
                  </div>
                  <div className="pt-3 sm:pt-4 border-t border-slate-800 flex items-center gap-4">
                    <a className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-950" href="#contact">
                      Book a Free Site Survey
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*  Metrics Counters (from Reference)  */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <div className="bg-charcoal-900 p-4 sm:p-6 rounded-2xl border border-slate-800 text-center">
                <div className="text-2xl sm:text-4xl font-extrabold text-white font-heading">99.2%</div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">Client Satisfaction</p>
              </div>
              <div className="bg-charcoal-900 p-4 sm:p-6 rounded-2xl border border-slate-800 text-center">
                <div className="text-2xl sm:text-4xl font-extrabold text-white font-heading">450+</div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">London Homes Delivered</p>
              </div>
              <div className="bg-charcoal-900 p-4 sm:p-6 rounded-2xl border border-slate-800 text-center">
                <div className="text-2xl sm:text-4xl font-extrabold text-white font-heading">15+</div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">Years Experience</p>
              </div>
              <div className="bg-charcoal-900 p-4 sm:p-6 rounded-2xl border border-slate-800 text-center">
                <div className="text-2xl sm:text-4xl font-extrabold text-white font-heading">100%</div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">Insured &amp; Guaranteed</p>
              </div>
            </div>
          </div>
        </section>
        {/*  END: WhyChooseUsDark  */}
        {/*  BEGIN: FeaturedProjects  */}
        <section className="py-14 sm:py-20 lg:py-28 bg-white" data-purpose="portfolio-showcase" id="projects">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 text-emerald-700 font-bold uppercase tracking-wider text-[11px] sm:text-xs mb-2 sm:mb-3">
                <span className="w-4 h-0.5 bg-emerald-600"></span>
                Recent Projects
                <span className="w-4 h-0.5 bg-emerald-600"></span>
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
                Recent Transformations Across London
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm lg:text-base mt-2 sm:mt-3">
                Take a look at some of our completed home extensions, loft conversions, and full house renovations across London.
              </p>
            </div>

            {/*  Filter Buttons  */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
              {PROJECT_FILTERS.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveProjectFilter(cat)}
                  className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    activeProjectFilter === cat
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/20 scale-105"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/*  Projects Grid  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href="/portfolio"
                  className="group rounded-2xl overflow-hidden bg-slate-900 relative shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="h-56 sm:h-72 w-full overflow-hidden relative bg-slate-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={project.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={project.image}
                    />
                  </div>
                  <div className="p-5 sm:p-6 bg-white border border-slate-200 border-t-0 rounded-b-2xl flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block">
                        {project.locationBadge}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mt-2 group-hover:text-emerald-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-700">Duration: {project.duration}</span>
                      <span className="text-emerald-700 font-bold group-hover:underline flex items-center">
                        Case Study <i className="fa-solid fa-arrow-right ml-1"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <Link
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg border-2 border-emerald-700 text-emerald-800 hover:bg-emerald-700 hover:text-white font-bold text-xs sm:text-sm transition-colors"
                href="/portfolio"
              >
                <span>View All 50+ London Case Studies</span>
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </section>
        {/*  END: FeaturedProjects  */}
        {/*  BEGIN: TransparentPricingGuide  */}
        <section className="py-14 sm:py-20 lg:py-28 bg-slate-50 border-y border-slate-200/80" data-purpose="pricing-packages" id="pricing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 text-emerald-700 font-bold uppercase tracking-wider text-[11px] sm:text-xs mb-2 sm:mb-3">
                <span className="w-4 h-0.5 bg-emerald-600"></span>
                Cost Guide
                <span className="w-4 h-0.5 bg-emerald-600"></span>
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
                Clear &amp; Transparent Pricing Guide
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm lg:text-base mt-2 sm:mt-3">
                Every home is unique, but our guide prices give you a realistic idea of costs before we provide a free, itemized quote.
              </p>
            </div>
            {/*  3 Tier Pricing Cards (Reflecting Reference Sequence)  */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {/*  Package 1: Essential Refurbishment  */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-slate-400">Package 01</span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mt-1">Room / Floor Refurbishment</h3>
                  <p className="text-xs text-slate-500 mt-1.5 sm:mt-2">High-quality upgrade for single rooms, bathrooms, or full apartment floors.</p>
                  <div className="mt-5 mb-5 sm:mt-6 sm:mb-6 pb-5 sm:pb-6 border-b border-slate-100">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading">£18,500+</span>
                    <span className="text-[11px] sm:text-xs text-slate-500 block mt-1">Guide price (excl. VAT)</span>
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-600 mb-6 sm:mb-8">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Full strip-out &amp; rubbish removal</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> New wiring &amp; NICEIC electrical certificate</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Premium plastering &amp; decorating</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Engineered flooring installation</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> 5-Year Craftsmanship Guarantee</li>
                  </ul>
                </div>
                <a className="w-full py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider text-center transition-colors" href="#contact">
                  Request a Free Quote
                </a>
              </div>
              {/*  Package 2: Extension & Loft (Featured)  */}
              <div className="bg-charcoal-900 text-white rounded-2xl p-6 sm:p-8 border-2 border-emerald-500 shadow-2xl relative flex flex-col justify-between transform md:-translate-y-2">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-charcoal-950 font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow">
                  Most Popular London Choice
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-emerald-400">Package 02</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading mt-1">Extension / Loft Conversion</h3>
                  <p className="text-xs text-slate-300 mt-1.5 sm:mt-2">Rear or side-return extension, or a full dormer loft conversion.</p>
                  <div className="mt-5 mb-5 sm:mt-6 sm:mb-6 pb-5 sm:pb-6 border-b border-slate-800">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-400 font-heading">£55,000+</span>
                    <span className="text-[11px] sm:text-xs text-slate-400 block mt-1">Guide price (excl. VAT)</span>
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-300 mb-6 sm:mb-8">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-400"></i> Structural steel installation &amp; foundations</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-400"></i> Building Regulations &amp; planning support</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-400"></i> Bi-fold doors, rooflights &amp; flat roofing</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-400"></i> Energy-efficient insulation &amp; underfloor heating</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-400"></i> 10-Year Insurance-Backed Guarantee</li>
                  </ul>
                </div>
                <a className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center transition-colors shadow-lg shadow-emerald-950" href="#contact">
                  Book Feasibility Survey
                </a>
              </div>
              {/*  Package 3: Turnkey House Refurbishment  */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-slate-400">Package 03</span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mt-1">Complete House Renovation</h3>
                  <p className="text-xs text-slate-500 mt-1.5 sm:mt-2">Full house transformation from bare brick to premium painted finishes.</p>
                  <div className="mt-5 mb-5 sm:mt-6 sm:mb-6 pb-5 sm:pb-6 border-b border-slate-100">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading">£120,000+</span>
                    <span className="text-[11px] sm:text-xs text-slate-500 block mt-1">Guide price (excl. VAT)</span>
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-600 mb-6 sm:mb-8">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Full layout redesign &amp; wall removals</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> New fitted kitchen &amp; luxury bathrooms</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Complete new heating, plumbing &amp; electrics</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Full-time on-site Project Director</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-600"></i> 10-Year Structural Guarantee</li>
                  </ul>
                </div>
                <a className="w-full py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider text-center transition-colors" href="#contact">
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*  END: TransparentPricingGuide  */}
        {/*  BEGIN: ClientTestimonials  */}
        <section className="py-14 sm:py-20 bg-charcoal-950 text-white overflow-hidden relative" data-purpose="testimonials" id="testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              {/*  Testimonial Visual  */}
              <div className="lg:col-span-5 relative">
                <div className="relative">
                  <img alt="Satisfied London property owners receiving handover from JSTM Project Director" className="rounded-2xl border border-slate-800 shadow-2xl w-full h-[280px] sm:h-[380px] object-cover" src="/assets/images/client_handover.jpg" />
                  <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 bg-emerald-600 text-white p-3.5 sm:p-5 rounded-2xl shadow-xl flex items-center gap-2.5 sm:gap-3">
                    <div className="text-2xl sm:text-3xl font-black font-heading">4.9/5</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold uppercase leading-tight">
                      Trustpilot<br />&amp; Houzz Rating
                    </div>
                  </div>
                </div>
              </div>
              {/*  Testimonial Quote  */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                  <span className="w-4 h-0.5 bg-emerald-500"></span>
                  Client Testimonials
                </div>
                <div className="flex text-accent-amber text-base sm:text-lg gap-1">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <blockquote className="text-sm sm:text-xl lg:text-2xl text-slate-200 font-light italic leading-relaxed">
                  "JSTM Construction carried out our rear kitchen extension and loft conversion in Fulham. Their pricing was completely transparent from start to finish. They finished two weeks ahead of schedule and the quality of the finish is outstanding."
                </blockquote>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-heading">Dr. Julian &amp; Sarah Thorne</h4>
                  <p className="text-xs text-emerald-400 font-medium">Fulham SW6 • Full Ground Extension &amp; Mansard Conversion</p>
                </div>
                {/*  Accreditation Partner Badges  */}
                <div className="pt-6 sm:pt-8 border-t border-slate-800/80">
                  <p className="text-[10px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider mb-3 sm:mb-4">Official Certifications &amp; Accreditations</p>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-slate-400 text-xs sm:text-sm font-semibold">
                    <span className="flex items-center gap-2 hover:text-white"><i className="fa-solid fa-shield-halved text-emerald-500"></i> FMB Master Builder</span>
                    <span className="flex items-center gap-2 hover:text-white"><i className="fa-solid fa-fire-burner text-emerald-500"></i> Gas Safe Registered</span>
                    <span className="flex items-center gap-2 hover:text-white"><i className="fa-solid fa-bolt text-emerald-500"></i> NICEIC Approved</span>
                    <span className="flex items-center gap-2 hover:text-white"><i className="fa-solid fa-certificate text-emerald-500"></i> TrustMark Govt Endorsed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  END: ClientTestimonials  */}
        {/*  BEGIN: ContactSection  */}
        <section className="py-14 sm:py-20 lg:py-28 bg-white" data-purpose="survey-contact-form" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
              {/*  Contact Left: Form (Matching Reference Dark Card Form)  */}
              <div className="lg:col-span-7 bg-charcoal-900 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl">
                <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px] sm:text-xs">Direct Consultation</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mt-1 font-heading">
                  Book a Free Site Survey &amp; Quote
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 mb-6 sm:mb-8">
                  Tell us about your project below. Our team will review your requirements and get back to you within 24 hours with free, friendly advice.
                </p>
                <form className="space-y-3.5 sm:space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Form submitted successfully! A JSTM project surveyor will contact you shortly."); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                      <input className="w-full bg-charcoal-800 border border-slate-700 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none" placeholder="e.g. James Smith" required type="text" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">London Postcode *</label>
                      <input className="w-full bg-charcoal-800 border border-slate-700 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none" placeholder="e.g. SW3 4AA" required type="text" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                      <input className="w-full bg-charcoal-800 border border-slate-700 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none" placeholder="name@example.com" required type="email" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Contact Phone *</label>
                      <input className="w-full bg-charcoal-800 border border-slate-700 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none" placeholder="+44 7000 000000" required type="tel" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Service Needed *</label>
                    <select className="w-full bg-charcoal-800 border border-slate-700 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                      <option>House Extension (Rear/Side/Wraparound)</option>
                      <option>Loft Conversion (Mansard/Dormer/Velux)</option>
                      <option>Full Property Refurbishment</option>
                      <option>Kitchen &amp; Bathroom Renovation</option>
                      <option>Roofing &amp; Structural Engineering</option>
                      <option>Flooring &amp; Tiling Works</option>
                      <option>Painting &amp; Decorating</option>
                      <option>General Building &amp; Joinery</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Tell Us About Your Project</label>
                    <textarea className="w-full bg-charcoal-800 border border-slate-700 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none" placeholder="Tell us about your property (e.g. Victorian terrace, semi-detached), what work you need, and your target start date..." rows={4}></textarea>
                  </div>
                  <button className="w-full py-3 sm:py-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-emerald-950 flex items-center justify-center gap-2" type="submit">
                    <span>Request Free Survey &amp; Quote</span>
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </button>
                </form>
              </div>
              {/*  Contact Right: Company Info & Borough Coverage  */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 text-emerald-700 font-bold uppercase tracking-wider text-[11px] sm:text-xs mb-2">
                    <span className="w-4 h-0.5 bg-emerald-600"></span>
                    Let’s Work Together
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 font-heading">
                    Our London Office &amp; Operations
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed">
                    Call or message us directly to discuss your project. We manage residential building projects across all London boroughs daily.
                  </p>
                  {/*  Office Details Card  */}
                  <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0 text-lg sm:text-xl">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div>
                        <h4 className="text-[10px] sm:text-xs uppercase font-bold text-slate-400">Direct Landline</h4>
                        <a className="text-base sm:text-lg font-bold text-slate-900 hover:text-emerald-700 font-heading block" href="tel:02035762228">020 3576 2228</a>
                        <p className="text-[11px] sm:text-xs text-slate-500">Mon - Sat: 07:30 - 18:30 GMT</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0 text-lg sm:text-xl">
                        <i className="fa-brands fa-whatsapp"></i>
                      </div>
                      <div>
                        <h4 className="text-[10px] sm:text-xs uppercase font-bold text-slate-400">WhatsApp Instant Chat</h4>
                        <a className="text-base sm:text-lg font-bold text-emerald-600 hover:text-emerald-700 font-heading block" href="https://wa.me/447418095006" target="_blank" rel="noopener noreferrer">+44 7418 095006</a>
                        <p className="text-[11px] sm:text-xs text-slate-500">Send photos or plans on WhatsApp for a quick chat</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0 text-lg sm:text-xl">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <div>
                        <h4 className="text-[10px] sm:text-xs uppercase font-bold text-slate-400">Office Address</h4>
                        <p className="text-sm sm:text-base font-bold text-slate-900 font-heading">JST Construction Suite A204, 2nd Floor Vista Centre</p>
                        <p className="text-xs sm:text-sm text-slate-700">50 Salisbury Road, Cranford, Hounslow TW4 6JQ, United Kingdom</p>
                        <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Serving all 32 London Boroughs &amp; Greater London</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0 text-lg sm:text-xl">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                      <div>
                        <h4 className="text-[10px] sm:text-xs uppercase font-bold text-slate-400">Email Us</h4>
                        <a className="text-sm sm:text-base font-bold text-slate-900 hover:text-emerald-700 font-heading" href="mailto:info@jstmconstruction.com">info@jstmconstruction.com</a>
                        <p className="text-[11px] sm:text-xs text-slate-500">We reply to all email enquiries within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Boroughs Grid  */}
                <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-[10px] sm:text-xs uppercase font-bold text-slate-700 tracking-wider mb-1.5 sm:mb-2">Key Areas We Cover Across London:</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                    Kensington &amp; Chelsea, Westminster, Hammersmith &amp; Fulham, Wandsworth, Richmond, Islington, Camden, Southwark, Lambeth, Greenwich, Wimbledon, and Hampstead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  END: ContactSection  */}
      </main>
      <Footer />

    </div>
  );
}
