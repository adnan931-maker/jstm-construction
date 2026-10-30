"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const H1_STYLE = { fontFamily: "'Plus Jakarta Sans', sans-serif" };
const INPUT_CLS = "w-full h-11 sm:h-12 bg-slate-950 border border-slate-800 text-white px-3.5 sm:px-4 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors placeholder:text-slate-500";
const SELECT_CLS = "w-full h-11 sm:h-12 bg-slate-950 border border-slate-800 text-white px-3.5 sm:px-4 pr-10 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2334d399%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:18px_18px] bg-[right_14px_center] bg-no-repeat cursor-pointer";

const METRICS = [
  { val: "16", suffix: "+", title: "Years of Excellence", desc: "Continuous prime London operations since 2008" },
  { val: "450", suffix: "+", title: "Homes Delivered", desc: "Extensions, renovations & period homes" },
  { val: "£20M", suffix: "", title: "Fully Insured", desc: "Comprehensive public & employer liability" },
  { val: "99.2", suffix: "%", title: "On-Time Completion", desc: "Projects delivered on agreed schedule" },
];

const COMMITMENTS = [
  {
    icon: "receipt_long",
    title: "Zero Hidden Variations",
    desc: "Detailed, fixed-price quotes with full cost transparency. Every item is agreed before we start, so there are no unexpected extras.",
  },
  {
    icon: "person_pin_circle",
    title: "Dedicated Site Manager",
    desc: "A dedicated project manager on-site throughout your build. Your single point of contact, always available to keep you updated.",
  },
  {
    icon: "architecture",
    title: "Architectural Collaboration",
    desc: "We work closely with your architect, structural engineer, and interior designer to build your plans with complete accuracy.",
  },
  {
    icon: "shield_with_heart",
    title: "10-Year Work Guarantee",
    desc: "Insurance-backed warranty supported by the Federation of Master Builders (FMB), giving you lasting peace of mind.",
  },
];

const PROTOCOLS = [
  {
    num: "01",
    icon: "security",
    title: "Strict Health & Safety",
    desc: "Full compliance with UK building safety standards on every project. Clean, safe, and organized worksites from start to finish.",
    footerLabel: "HSE Status",
    footerVal: "Spotless Safety Record",
  },
  {
    num: "02",
    icon: "handyman",
    title: "In-House Specialist Trades",
    desc: "We employ qualified, experienced tradespeople including Gas Safe heating engineers, NICEIC certified electricians, and master carpenters.",
    footerLabel: "Certification",
    footerVal: "Certified Tradespeople",
  },
  {
    num: "03",
    icon: "view_in_ar",
    title: "Regular Progress Updates",
    desc: "Regular photo updates, progress reports, and site walkthroughs so you always know exactly how your build is progressing.",
    footerLabel: "Transparency",
    footerVal: "Clear Communication",
  },
  {
    num: "04",
    icon: "task_alt",
    title: "Snag-Free Handover",
    desc: "A thorough quality inspection before handover to ensure every detail meets our high standards before you move back in.",
    footerLabel: "Tolerance",
    footerVal: "High Quality Finish",
  },
];

const LEADERSHIP = [
  {
    name: "JSTM",
    role: "Founder & Managing Director",
    badge: "Fellow FMB",
    tagLabel: "Experience",
    tagVal: "24+ Years",
    desc: "Over 24 years of experience leading high-end residential renovations, house extensions, and bespoke builds across London.",
    image: "/assets/images/about/julian_davies.jpg",
  },
  {
    name: "Marcus Sterling",
    role: "Head of Structural Engineering",
    badge: "MIStructE",
    tagLabel: "Specialism",
    tagVal: "Underpinning & Steels",
    desc: "Chartered Structural Engineer specializing in structural steelwork, foundations, party wall matters, and load-bearing alterations.",
    image: "/assets/images/about/marcus_sterling.jpg",
  },
  {
    name: "Elena Rostova",
    role: "Director of Architectural Design",
    badge: "ARB / RIBA",
    tagLabel: "Heritage Expert",
    tagVal: "Listed Consents",
    desc: "Experienced architect with extensive knowledge navigating London planning permissions, building control, and conservation areas.",
    image: "/assets/images/about/elena_rostova.jpg",
  },
  {
    name: "David Chen",
    role: "Head of Joinery & Finishes",
    badge: "Master Guild",
    tagLabel: "Fabrication",
    tagVal: "Bespoke Millwork",
    desc: "Leads our custom joinery team, crafting bespoke fitted wardrobes, staircases, kitchen cabinetry, and custom woodwork.",
    image: "/assets/images/about/david_chen.jpg",
  },
];

const ACCREDITATIONS = [
  { icon: "home_work", title: "FMB Master Builder", sub: "Licence #88412", desc: "Vetted & Inspected Builders" },
  { icon: "verified_user", title: "TrustMark Accredited", sub: "Govt Endorsed Quality", desc: "Government Endorsed Quality" },
  { icon: "local_fire_department", title: "Gas Safe Register", sub: "Verified Engineers", desc: "Certified Heating & Gas" },
  { icon: "bolt", title: "NICEIC Platinum", sub: "Approved Contractor", desc: "Certified Electrical Works" },
  { icon: "balance", title: "Considerate Scheme", sub: "London Wide", desc: "Clean & Respectful Sites" },
];

export default function AboutUsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    email: "",
    phone: "",
    classification: "",
    scope: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({
      name: "",
      postcode: "",
      email: "",
      phone: "",
      classification: "",
      scope: "",
    });
  };

  return (
    <div className="bg-[#0b1120] text-slate-800 antialiased selection:bg-emerald-500 selection:text-white min-h-screen w-full overflow-x-hidden">
      <Header currentPage="about" />

      <main className="w-full bg-[#0b1120]">
        <div className="flex flex-col w-full">

          {/* SECTION 1: HERO SECTION */}
          <section className="relative w-full bg-[#0b1120] text-white overflow-hidden border-b border-slate-800/80">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/assets/images/kensington_refurbishment.jpg"
                alt="Premium London residential renovation by JSTM Construction"
                fill
                className="object-cover object-center opacity-20"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0b1120]/95 via-[#0b1120]/80 to-[#0b1120]/90" />
            </div>

            {/* Atmospheric Ambient Glows */}
            <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none z-0" />
            <div className="absolute top-80 left-10 w-[550px] h-[550px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 pt-8 sm:pt-10 pb-14 sm:pb-20">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-[11px] sm:text-[12px] font-semibold text-slate-400 mb-4 sm:mb-6 tracking-wide">
                <Link href="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] sm:text-[15px]">home</span> Home
                </Link>
                <span className="text-slate-600">/</span>
                <span className="text-white font-medium">About Us</span>
              </nav>

              {/* Institutional Overline Chip */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-900/90 border border-emerald-500/30 text-emerald-300 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg shadow-sm mb-4 sm:mb-6 animate-fade-in-up max-w-full">
                <span className="material-symbols-outlined text-[14px] sm:text-[16px] text-emerald-400 shrink-0">verified</span>
                <span className="text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold truncate">
                  <span className="sm:hidden">EST. 2008 • LONDON BUILDERS</span>
                  <span className="hidden sm:inline">EST. 2008 • TRUSTED LONDON RESIDENTIAL BUILDERS</span>
                </span>
              </div>

              {/* Hero Headline & Core Narrative */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-14">
                <div className="lg:col-span-8 space-y-3.5 sm:space-y-5">
                  <h1
                    style={H1_STYLE}
                    className="text-[26px] sm:text-[38px] md:text-[48px] lg:text-[56px] leading-[1.12] sm:leading-[1.08] tracking-[-0.03em] font-bold text-white animate-fade-in-up [animation-delay:150ms]"
                  >
                    Exceptional Craftsmanship, Honest Service &amp;{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                      Quality You Can Trust.
                    </span>
                  </h1>
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] text-slate-300 max-w-2xl leading-relaxed animate-fade-in-up [animation-delay:300ms]">
                    With over 15 years of experience, JSTM Construction delivers high-quality house extensions, renovations, and architectural builds across London. We take pride in clear communication, honest pricing, and outstanding finishes.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 pt-2 sm:pt-4 lg:pt-0 animate-fade-in-up [animation-delay:450ms]">
                  <a
                    href="#consultation-booking"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white no-underline text-[13px] sm:text-[14px] px-5 py-3 sm:px-6 sm:py-4 rounded-xl shadow-[0_4px_20px_rgba(5,150,105,0.4)] hover:shadow-[0_6px_24px_rgba(5,150,105,0.55)] transition-all duration-200 font-semibold group text-center"
                  >
                    <span>Book a Free Site Survey</span>
                    <span className="material-symbols-outlined text-[16px] sm:text-[18px] group-hover:translate-x-1 transition-transform duration-200">
                      arrow_forward
                    </span>
                  </a>
                  <a
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 bg-slate-800/70 hover:bg-slate-700/80 active:bg-slate-900 text-slate-200 hover:text-white no-underline border border-slate-700/60 hover:border-slate-500/60 text-[13px] sm:text-[14px] px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl transition-all duration-200 font-medium text-center group"
                  >
                    <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-emerald-400">photo_library</span>
                    <span>View Our Portfolio</span>
                  </a>
                </div>
              </div>

              {/* Quantitative Rigour / Institutional Metrics Grid */}
              <AnimateOnScroll direction="up" delay={250} className="w-full">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-[#0f172a] border border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl backdrop-blur-md">
                  {METRICS.map((m) => (
                    <div key={m.title} className="space-y-1 p-2 rounded-xl transition-all duration-300 hover:bg-slate-850/60">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[26px] sm:text-[34px] md:text-[44px] text-emerald-400 font-bold tracking-tight">
                          {m.val}
                        </span>
                        {m.suffix && (
                          <span className="text-[18px] sm:text-[22px] md:text-[24px] text-emerald-400 font-bold">{m.suffix}</span>
                        )}
                      </div>
                      <div className="text-[12px] sm:text-[14px] md:text-[15px] text-white font-semibold">{m.title}</div>
                      <p className="text-[11px] sm:text-[12px] md:text-[13px] text-slate-400">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </section>

          {/* SECTION 2: STORY & PHILOSOPHY (Light Canvas) */}
          <section className="w-full bg-[#f8fafc] text-slate-900 py-14 sm:py-20 border-b border-slate-200">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
              {/* Section Header */}
              <AnimateOnScroll direction="up">
                <div className="max-w-3xl mb-8 sm:mb-12">
                  <span className="text-[10px] sm:text-[11px] tracking-widest uppercase font-bold text-emerald-700 block mb-1.5 sm:mb-2">
                    OUR HERITAGE &amp; APPROACH
                  </span>
                  <h2 style={H1_STYLE} className="text-[22px] sm:text-[32px] md:text-[42px] leading-[1.2] sm:leading-[1.15] tracking-tight text-slate-900 font-bold">
                    Building Beautiful London Homes With Care &amp; Precision
                  </h2>
                </div>
              </AnimateOnScroll>

              {/* Narrative Two-Column Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 sm:mb-16">
                <AnimateOnScroll direction="left" delay={100} className="lg:col-span-7">
                  <div className="space-y-3.5 sm:space-y-4 text-slate-600 text-[13px] sm:text-[15px] leading-relaxed">
                    <p className="text-[15px] sm:text-[17px] text-slate-900 font-medium leading-relaxed">
                      JSTM Construction was founded with a clear goal: to make home building and renovation a positive, transparent experience for London homeowners.
                    </p>
                    <p>
                      Too often, building projects suffer from unexpected cost increases, poor communication, and missed deadlines. We do things differently. We provide clear, itemized quotes from day one, set realistic schedules, and stand behind our work with a 10-year guarantee.
                    </p>
                    <p>
                      Every project is managed on-site by an experienced project manager who coordinates all trades, keeps you informed with regular updates, and ensures work is carried out to the highest standard.
                    </p>

                    {/* Engineering Quote Metric Bar */}
                    <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-xl space-y-2 shadow-sm mt-4 hover:shadow-md hover:border-emerald-400/40 transition-all duration-300">
                      <div className="flex items-center justify-between text-slate-900 text-[13px] sm:text-[14px]">
                        <span className="font-semibold">Quality &amp; Building Standards</span>
                        <span className="text-emerald-700 font-bold">100% Guaranteed</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 h-full rounded-full w-full transition-all duration-1000 ease-out" />
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* Right Visual Showcase & Director Quote */}
                <AnimateOnScroll direction="right" delay={200} className="lg:col-span-5">
                  <div className="relative group cursor-pointer">
                    {/* Ambient Glow */}
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-600/25 to-teal-500/20 rounded-3xl blur-xl opacity-40 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700 pointer-events-none" />

                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200/60 group-hover:border-emerald-500/60 group-hover:-translate-y-1.5 transition-all duration-500 ease-out">
                      <div className="relative h-[280px] sm:h-[440px] w-full overflow-hidden">
                        <Image
                          src="/assets/images/wandsworth_wrap_around_extension.jpg"
                          alt="Wandsworth wrap-around house extension under construction by JSTM Construction London"
                          fill
                          className="object-cover group-hover:scale-108 transition-all duration-700 ease-out will-change-transform"
                          sizes="(max-width: 1024px) 100vw, 42vw"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent group-hover:opacity-85 transition-opacity duration-500 pointer-events-none" />

                      {/* Glass Shimmer on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                      {/* Floating Director Quote Box */}
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-slate-900/95 group-hover:bg-slate-900/98 border border-slate-800 group-hover:border-emerald-500/40 backdrop-blur-md p-3.5 sm:p-5 rounded-xl text-white shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                          <span className="material-symbols-outlined text-[18px] sm:text-[20px]">format_quote</span>

                        </div>
                        <p className="text-[12px] sm:text-[13px] text-slate-200 italic mb-2 leading-relaxed">
                          &ldquo;Building or extending your home should be exciting, not stressful. We treat every property with the utmost care, communicate openly, and deliver work we are truly proud of.&rdquo;
                        </p>
                        <div className="flex items-center justify-between text-[11px] sm:text-[12px] pt-2 border-t border-slate-800 text-slate-400">
                          <span className="font-semibold text-slate-200"></span>
                          <span className="text-emerald-400">Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>

              {/* 4 Core Commitments Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {COMMITMENTS.map((c, idx) => (
                  <AnimateOnScroll key={c.title} direction="up" delay={idx * 100}>
                    <div
                      className="group bg-white border border-slate-200 p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-xl hover:border-emerald-500/50 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-3.5 sm:mb-4 group-hover:scale-110 group-hover:bg-emerald-100 group-hover:border-emerald-400 transition-all duration-300">
                        <span className="material-symbols-outlined text-[20px] sm:text-[24px]">{c.icon}</span>
                      </div>
                      <h3 className="text-[16px] sm:text-[18px] text-slate-900 font-bold mb-1.5 sm:mb-2 group-hover:text-emerald-800 transition-colors">{c.title}</h3>
                      <p className="text-[12px] sm:text-[13px] text-slate-600 leading-relaxed flex-1">{c.desc}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3: THE 4 OPERATIONAL STANDARDS (Dark Navy) */}
          <section className="w-full bg-[#0f172a] text-white py-14 sm:py-24 relative overflow-hidden border-b border-slate-800">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
              {/* Section Tag & Title */}
              <AnimateOnScroll direction="up">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 sm:gap-6">
                  <div>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-emerald-400 font-semibold block mb-1.5 sm:mb-2">
                      OUR QUALITY STANDARDS
                    </span>
                    <h2 style={H1_STYLE} className="text-[22px] sm:text-[32px] md:text-[42px] font-bold text-white tracking-tight leading-[1.2]">
                      How We Deliver Quality on Every Build
                    </h2>
                  </div>
                  <p className="text-[13px] sm:text-[15px] text-slate-300 max-w-md leading-relaxed">
                    We follow clear, proven building standards to ensure your home is safe, structurally sound, and beautifully finished.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* 4 Protocols Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {PROTOCOLS.map((p, idx) => (
                  <AnimateOnScroll key={p.num} direction="up" delay={idx * 100}>
                    <div
                      className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xl hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-950/50 hover:-translate-y-1.5 transition-all duration-300 group h-full"
                    >
                      <div className="space-y-3.5 sm:space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[28px] sm:text-[36px] font-bold text-emerald-400/30 group-hover:text-emerald-400 transition-colors">
                            {p.num}
                          </span>
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-900/70 group-hover:border-emerald-400 transition-all duration-300">
                            <span className="material-symbols-outlined text-[19px] sm:text-[22px]">{p.icon}</span>
                          </div>
                        </div>
                        <h3 className="text-[16px] sm:text-[18px] text-white font-bold group-hover:text-emerald-300 transition-colors">{p.title}</h3>
                        <p className="text-[12px] sm:text-[13px] text-slate-300 leading-relaxed">{p.desc}</p>
                      </div>

                      <div className="mt-5 sm:mt-6 pt-3 bg-slate-950/70 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 px-5 sm:px-6 py-2.5 sm:py-3 rounded-b-2xl flex items-center justify-between text-[11px] sm:text-[12px] text-slate-400 border-t border-slate-800 group-hover:border-emerald-500/30 transition-colors">
                        <span>{p.footerLabel}</span>
                        <span className="text-emerald-400 font-semibold">{p.footerVal}</span>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 4: LEADERSHIP & EXECUTIVE TEAM */}
          <section className="w-full bg-[#f8fafc] text-slate-900 py-14 sm:py-20 border-b border-slate-200">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
              <AnimateOnScroll direction="up">
                <div className="max-w-3xl mb-8 sm:mb-12">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-emerald-700 block mb-1.5 sm:mb-2">
                    OUR EXPERIENCED TEAM
                  </span>
                  <h2 style={H1_STYLE} className="text-[22px] sm:text-[32px] md:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.2]">
                    Meet Our Leadership &amp; Building Team
                  </h2>
                  <p className="text-[13px] sm:text-[15px] text-slate-600 mt-2 leading-relaxed">
                    Our directors and senior managers have decades of combined construction experience across London, bringing practical expertise to every project.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* 4 Profile Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {LEADERSHIP.map((lead, idx) => (
                  <AnimateOnScroll key={lead.name} direction="up" delay={idx * 100}>
                    <div
                      className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-emerald-500/50 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                    >
                      <div className="h-52 sm:h-64 overflow-hidden relative bg-slate-100">
                        <Image
                          src={lead.image}
                          alt={lead.name}
                          fill
                          className="object-cover group-hover:scale-108 transition-all duration-700 ease-out will-change-transform"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-slate-950/85 backdrop-blur-md text-emerald-300 text-[10px] uppercase font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-slate-800">
                          {lead.badge}
                        </div>
                      </div>
                      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-[17px] sm:text-[19px] text-slate-900 font-bold group-hover:text-emerald-800 transition-colors">{lead.name}</h3>
                          <p className="text-[12px] sm:text-[13px] text-emerald-700 font-semibold mb-2 sm:mb-3">{lead.role}</p>
                          <p className="text-[12px] sm:text-[13px] text-slate-600 leading-relaxed mb-3 sm:mb-4">{lead.desc}</p>
                        </div>
                        <div className="pt-2.5 sm:pt-3 bg-slate-50 border-t border-slate-100 -mx-4 -mb-4 sm:-mx-5 sm:-mb-5 px-4 py-2 sm:px-5 sm:py-2.5 flex items-center justify-between text-[11px] sm:text-[12px] text-slate-700">
                          <span className="text-slate-500">{lead.tagLabel}</span>
                          <span className="font-semibold text-slate-900">{lead.tagVal}</span>
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 5: INDUSTRY ACCREDITATIONS & CODE OF PRACTICE */}
          <section className="w-full bg-[#0b1120] text-white py-14 sm:py-20 border-b border-slate-800">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
              <AnimateOnScroll direction="up">
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-emerald-400 font-semibold block mb-1.5 sm:mb-2">
                    INDUSTRY STANDARDS &amp; AFFILIATIONS
                  </span>
                  <h2 style={H1_STYLE} className="text-[22px] sm:text-[32px] md:text-[42px] font-bold text-white tracking-tight leading-[1.2]">
                    Certified by Leading UK Building &amp; Safety Bodies
                  </h2>
                  <p className="text-[13px] sm:text-[15px] text-slate-300 mt-2 leading-relaxed">
                    We are proud members of respected industry associations, ensuring all our work complies with the highest UK standards.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Accreditations Registry Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8 sm:mb-12">
                {ACCREDITATIONS.map((acc, idx) => (
                  <AnimateOnScroll key={acc.title} direction="up" delay={idx * 80}>
                    <div
                      className="group bg-[#0f172a] border border-slate-800 p-3.5 sm:p-5 rounded-xl text-center flex flex-col items-center justify-center space-y-1.5 sm:space-y-2 shadow-lg hover:border-emerald-500/50 hover:bg-slate-900 hover:-translate-y-1.5 transition-all duration-300 h-full"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-900/60 group-hover:border-emerald-400 transition-all duration-300">
                        <span className="material-symbols-outlined text-[20px] sm:text-[24px]">{acc.icon}</span>
                      </div>
                      <div className="text-[12px] sm:text-[14px] font-bold text-white group-hover:text-emerald-300 transition-colors">{acc.title}</div>
                      <div className="text-[10px] sm:text-[11px] text-emerald-400 font-medium">{acc.sub}</div>
                      <p className="text-[11px] sm:text-[12px] text-slate-400 leading-snug">{acc.desc}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>

              {/* Trustpilot Verified Rating Band */}
              <AnimateOnScroll direction="up" delay={200}>
                <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl hover:border-slate-700/80 transition-all duration-300">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-950/80 border border-emerald-500/30 rounded-xl flex items-center justify-center text-emerald-400 shrink-0">
                      <span className="material-symbols-outlined text-[26px] sm:text-[32px]">star</span>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[17px] sm:text-[20px] font-bold text-white">4.9 / 5.0</span>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-[16px] sm:text-[18px]">
                              star
                            </span>
                          ))}
                        </div>
                        <span className="text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                          Trustpilot Verified
                        </span>
                      </div>
                      <p className="text-[12px] sm:text-[13px] text-slate-300 mt-0.5">
                        Based on 140+ verified London homeowner and client reviews
                      </p>
                    </div>
                  </div>

                  <div className="text-right flex items-center gap-3 sm:gap-4">
                    <div className="hidden sm:block text-slate-400 text-[12px] sm:text-[13px] italic">
                      &ldquo;Flawless project management on our Grade II Chelsea townhouse.&rdquo;
                    </div>
                    <Link
                      href="/#testimonials"
                      className="bg-slate-800 hover:bg-slate-700 text-white text-[12px] sm:text-[13px] px-3.5 sm:px-4 py-2 rounded-lg transition-colors font-medium shrink-0"
                    >
                      Read Reviews
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </section>

          {/* SECTION 6: START YOUR PROJECT (CONSULTATION FORM) */}
          <section id="consultation-booking" className="w-full bg-[#0b1120] text-white py-12 sm:py-20 border-b border-slate-800">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                <AnimateOnScroll direction="left" className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-5">
                  <div>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-emerald-400 font-semibold block mb-1.5 sm:mb-2">
                      DIRECT BOARD ENGAGEMENT
                    </span>
                    <h2 style={H1_STYLE} className="text-[22px] sm:text-[32px] md:text-[38px] leading-[1.2] sm:leading-[1.12] font-bold text-white tracking-tight">
                      Book a Free Consultation &amp; Site Visit
                    </h2>
                    <p className="text-[13px] sm:text-[14px] text-slate-300 mt-2 sm:mt-2.5 leading-relaxed">
                      Speak directly with our team about your project ideas. We offer free site surveys, budget advice, and friendly guidance.
                    </p>
                  </div>

                  {/* Contact Details Cards */}
                  <div className="space-y-3 flex-1 flex flex-col justify-between">
                    <div className="bg-[#0f172a] border border-slate-800 p-3.5 sm:p-4 rounded-xl flex items-start gap-3 sm:gap-3.5 hover:border-emerald-500/50 hover:bg-slate-900/90 hover:-translate-y-0.5 transition-all duration-300">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <span className="material-symbols-outlined text-[19px] sm:text-[22px]">location_on</span>
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-[13px] sm:text-[14px] font-bold text-white">Registered Headquarters</h3>
                        <p className="text-[12px] sm:text-[13px] text-slate-300">JSTM Construction • Suite A204, 2nd Floor, Vista Centre</p>
                        <p className="text-[11px] sm:text-[12px] text-slate-400">50 Salisbury Road, Cranford, Hounslow TW4 6JQ, UK</p>
                        <p className="text-[10px] sm:text-[11px] text-emerald-400 pt-0.5">Available for in-person architectural consultations</p>
                      </div>
                    </div>

                    <div className="bg-[#0f172a] border border-slate-800 p-3.5 sm:p-4 rounded-xl flex items-start gap-3 sm:gap-3.5 hover:border-emerald-500/50 hover:bg-slate-900/90 hover:-translate-y-0.5 transition-all duration-300">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <span className="material-symbols-outlined text-[19px] sm:text-[22px]">call</span>
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-[13px] sm:text-[14px] font-bold text-white">Direct Landline</h3>
                        <a
                          className="text-[13px] sm:text-[14px] font-semibold text-slate-200 hover:text-emerald-400 transition-colors block"
                          href="tel:02035762228"
                        >
                          020 3576 2228
                        </a>
                        <span className="text-[11px] sm:text-[12px] text-slate-400">Monday – Saturday: 07:30 – 18:30 GMT</span>
                      </div>
                    </div>

                    <div className="bg-[#0f172a] border border-slate-800 p-3.5 sm:p-4 rounded-xl flex items-start gap-3 sm:gap-3.5 hover:border-emerald-500/50 hover:bg-slate-900/90 hover:-translate-y-0.5 transition-all duration-300">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <i className="fa-brands fa-whatsapp text-[18px] sm:text-[20px]"></i>
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-[13px] sm:text-[14px] font-bold text-white">WhatsApp Direct</h3>
                        <a
                          className="text-[13px] sm:text-[14px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors block"
                          href="https://wa.me/447418095006"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          +44 7418 095006
                        </a>
                        <span className="text-[11px] sm:text-[12px] text-slate-400">Fast message response &amp; drawing reviews</span>
                      </div>
                    </div>

                    <div className="bg-[#0f172a] border border-slate-800 p-3.5 sm:p-4 rounded-xl flex items-start gap-3 sm:gap-3.5 hover:border-emerald-500/50 hover:bg-slate-900/90 hover:-translate-y-0.5 transition-all duration-300">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <span className="material-symbols-outlined text-[19px] sm:text-[22px]">mail</span>
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-[13px] sm:text-[14px] font-bold text-white">Email Enquiries</h3>
                        <a
                          href="mailto:info@jstmconstruction.com"
                          className="text-[13px] sm:text-[14px] text-slate-200 hover:text-emerald-400 transition-colors block"
                        >
                          info@jstmconstruction.com
                        </a>
                        <span className="text-[11px] sm:text-[12px] text-slate-400">Tender packages &amp; surveys reviewed promptly</span>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* Right: Interactive Consultation Form */}
                <AnimateOnScroll direction="right" delay={150} className="lg:col-span-7 flex flex-col">
                  <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl flex-1 flex flex-col justify-between hover:border-slate-700/80 transition-colors">
                    <div>
                      <h3 className="text-[18px] sm:text-[20px] font-bold text-white mb-1">Request a Free Consultation</h3>
                      <p className="text-[13px] sm:text-[14px] text-slate-400 mb-5 sm:mb-6">
                        Share a few details about your project and we will contact you within 24 hours.
                      </p>
                    </div>

                    <form className="space-y-3.5 sm:space-y-4 flex-1 flex flex-col justify-between" onSubmit={handleSubmit}>
                      <div className="space-y-3 sm:space-y-3.5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <div className="space-y-1.5">
                            <label htmlFor="abt-name" className="text-[11px] sm:text-[12px] font-semibold text-slate-300 uppercase tracking-wider block">
                              Full Name *
                            </label>
                            <input
                              id="abt-name"
                              className={INPUT_CLS}
                              placeholder="e.g. James Smith"
                              required
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label htmlFor="abt-postcode" className="text-[11px] sm:text-[12px] font-semibold text-slate-300 uppercase tracking-wider block">
                              London Postcode *
                            </label>
                            <input
                              id="abt-postcode"
                              className={INPUT_CLS}
                              placeholder="e.g. SW3, W8, TW9, SW18..."
                              required
                              type="text"
                              value={formData.postcode}
                              onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <div className="space-y-1.5">
                            <label htmlFor="abt-email" className="text-[11px] sm:text-[12px] font-semibold text-slate-300 uppercase tracking-wider block">
                              Email Address *
                            </label>
                            <input
                              id="abt-email"
                              className={INPUT_CLS}
                              placeholder="name@example.com"
                              required
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label htmlFor="abt-phone" className="text-[11px] sm:text-[12px] font-semibold text-slate-300 uppercase tracking-wider block">
                              Telephone *
                            </label>
                            <input
                              id="abt-phone"
                              className={INPUT_CLS}
                              placeholder="+44 7..."
                              required
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="abt-class" className="text-[11px] sm:text-[12px] font-semibold text-slate-300 uppercase tracking-wider block">
                            Project Classification *
                          </label>
                          <select
                            id="abt-class"
                            className={SELECT_CLS}
                            required
                            value={formData.classification}
                            onChange={(e) => setFormData({ ...formData, classification: e.target.value })}
                          >
                            <option value="" disabled>Select Proposed Scope</option>
                            <option value="full-refurb">Full House Refurbishment &amp; Renovation</option>
                            <option value="extension">House Extension (Rear / Side / Wraparound)</option>
                            <option value="loft">Loft Conversion (Dormer / Mansard / Velux)</option>
                            <option value="kitchen-bath">Kitchen &amp; Bathroom Refurbishment</option>
                            <option value="structural">Structural Alterations &amp; Steelwork</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="abt-scope" className="text-[11px] sm:text-[12px] font-semibold text-slate-300 uppercase tracking-wider block">
                            Project Scope &amp; Target Timeline
                          </label>
                          <textarea
                            id="abt-scope"
                            className={`${INPUT_CLS} h-auto py-2.5 sm:py-3 resize-none`}
                            placeholder="Tell us about your property, what you want to achieve, and your ideal timeline..."
                            rows={3}
                            value={formData.scope}
                            onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="pt-2 space-y-2.5">
                        <button
                          className="w-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white py-3.5 sm:py-4 rounded-xl text-[13px] sm:text-[14px] font-semibold tracking-wide shadow-[0_4px_20px_rgba(5,150,105,0.4)] hover:shadow-[0_6px_24px_rgba(5,150,105,0.55)] flex items-center justify-center gap-2 transition-all duration-200"
                          type="submit"
                        >
                          <span className="material-symbols-outlined text-[18px] sm:text-[20px]">calendar_month</span>
                          <span>Book a Free Consultation</span>
                        </button>

                        {formSubmitted && (
                          <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-[12px] sm:text-[13px] text-center animate-fadeIn">
                            Thank you. We have received your project details. A senior member of our team will contact you within 4 business hours to discuss your project.
                          </div>
                        )}

                        <p className="text-[10px] sm:text-[11px] text-slate-400 text-center">
                          Privacy Guaranteed: Your details and project plans are kept strictly confidential.
                        </p>
                      </div>
                    </form>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
