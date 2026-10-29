"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const H1_STYLE = { fontFamily: "'Plus Jakarta Sans', sans-serif" };
const INPUT_CLS = "w-full bg-slate-950 border border-slate-800 text-white px-3.5 py-2.5 rounded-lg text-[15px] focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors placeholder:text-slate-500";

const METRICS = [
  { val: "16", suffix: "+", title: "Years of Excellence", desc: "Continuous prime London operations since 2008" },
  { val: "450", suffix: "+", title: "Prime Homes Delivered", desc: "Grade II listed, basements & private estates" },
  { val: "£20M", suffix: "", title: "All-Risk Insured", desc: "Institutional PI & Public Liability coverage" },
  { val: "99.2", suffix: "%", title: "On-Time Handover", desc: "Strict critical-path JCT programme adherence" },
];

const COMMITMENTS = [
  {
    icon: "receipt_long",
    title: "Zero Hidden Variations",
    desc: "Fixed-price JCT Minor Works frameworks with full BoQ transparency. Every nut, bolt, and finish line is committed before ground is broken.",
  },
  {
    icon: "person_pin_circle",
    title: "Dedicated Site Director",
    desc: "A full-time resident project manager stationed on-site daily. Never split across multiple regional projects, always directly reachable.",
  },
  {
    icon: "architecture",
    title: "Architectural Collaboration",
    desc: "Seamless coordination with chartered RIBA architects, structural consultants, and interior ateliers for zero translation errors.",
  },
  {
    icon: "shield_with_heart",
    title: "10-Year Insurance Warranty",
    desc: "Independent insurance-backed protection backed by FMB and QANW, providing unshakeable long-term reassurance for legacy assets.",
  },
];

const PROTOCOLS = [
  {
    num: "01",
    icon: "security",
    title: "CDM 2015 Governance",
    desc: "Strict Principal Contractor statutory health & safety compliance on every domestic and commercial project. Independent weekly audits and rigorous hazardous materials handling.",
    footerLabel: "HSE Status",
    footerVal: "100% Spotless Record",
  },
  {
    num: "02",
    icon: "handyman",
    title: "In-House Specialist Trades",
    desc: "We do not outsource critical craftsmanship. Our teams comprise certified heritage stone masons, Gas Safe registered engineers, and NICEIC platinum qualified technicians.",
    footerLabel: "Certification",
    footerVal: "Directly Employed",
  },
  {
    num: "03",
    icon: "view_in_ar",
    title: "Weekly 3D Audits",
    desc: "High-resolution photographic registers and immersive 3D Matterport lidar scans delivered weekly to clients and architectural partners via our private client portal.",
    footerLabel: "Transparency",
    footerVal: "Cloud Portal Access",
  },
  {
    num: "04",
    icon: "task_alt",
    title: "Snag-Free Handover",
    desc: "An exhaustive two-tier pre-completion protocol. Our independent quality manager conducts a 140-point technical review 14 days prior to formal client key handover.",
    footerLabel: "Tolerance",
    footerVal: "Zero-Defect Goal",
  },
];

const LEADERSHIP = [
  {
    name: "Julian Davies",
    role: "Founder & Managing Director",
    badge: "Fellow FMB",
    tagLabel: "Experience",
    tagVal: "24+ Years",
    desc: "Over 24 years directing super-prime residential refurbishments and bespoke basement constructions throughout Kensington, Belgravia, and Knightsbridge.",
    image: "/assets/images/about/julian_davies.jpg",
  },
  {
    name: "Marcus Sterling",
    role: "Head of Structural Engineering",
    badge: "MIStructE",
    tagLabel: "Specialism",
    tagVal: "Underpinning & Steels",
    desc: "Chartered Structural Engineer specializing in period subterranean underpinning, party wall engineering, and complex cantilever steel installations.",
    image: "/assets/images/about/marcus_sterling.jpg",
  },
  {
    name: "Elena Rostova",
    role: "Director of Architectural Design",
    badge: "ARB / RIBA",
    tagLabel: "Heritage Expert",
    tagVal: "Listed Consents",
    desc: "Former senior associate at an award-winning Westminster studio. Expert navigator of Royal Borough of Kensington & Chelsea conservation area regulations.",
    image: "/assets/images/about/elena_rostova.jpg",
  },
  {
    name: "David Chen",
    role: "Head of Joinery & Finishes",
    badge: "Master Guild",
    tagLabel: "Fabrication",
    tagVal: "Bespoke Millwork",
    desc: "Leading our dedicated bespoke joinery workshop, creating custom book-matched veneers, architectural staircases, and museum-grade cabinetry for our clients.",
    image: "/assets/images/about/david_chen.jpg",
  },
];

const ACCREDITATIONS = [
  { icon: "home_work", title: "FMB Master Builder", sub: "Licence #88412", desc: "Strictly Vetted & Inspected" },
  { icon: "verified_user", title: "TrustMark Accredited", sub: "Govt Endorsed Quality", desc: "Trading Standards Audited" },
  { icon: "local_fire_department", title: "Gas Safe Register", sub: "Verified Engineers", desc: "Commercial & Domestic" },
  { icon: "bolt", title: "NICEIC Platinum", sub: "Approved Contractor", desc: "Full Building Sign-Off" },
  { icon: "balance", title: "Considerate Scheme", sub: "Mayfair & Belgravia", desc: "Quiet Site Protocols" },
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
    <div className="bg-[#0b1120] text-slate-800 antialiased selection:bg-emerald-500 selection:text-white min-h-screen">
      <Header currentPage="about" />

      <main className="w-full bg-[#0b1120]">
        <div className="flex flex-col w-full">

          {/* SECTION 1: HERO SECTION */}
          <section className="relative w-full bg-[#0b1120] text-white overflow-hidden border-b border-slate-800/80">
            {/* Atmospheric Ambient Glows */}
            <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-0" />
            <div className="absolute top-80 left-10 w-[550px] h-[550px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none -z-0" />

            <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 pt-10 pb-20">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-[12px] font-semibold text-slate-400 mb-6 tracking-wide">
                <Link href="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">home</span> Home
                </Link>
                <span className="text-slate-600">/</span>
                <span className="text-white font-medium">About Us</span>
              </nav>

              {/* Institutional Overline Chip */}
              <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-emerald-500/30 text-emerald-300 px-3.5 py-1.5 rounded-lg shadow-sm mb-6">
                <span className="material-symbols-outlined text-[16px] text-emerald-400">verified</span>
                <span className="text-[11px] tracking-wider uppercase font-semibold">
                  EST. 2008 • LONDON&apos;S PREMIER PRINCIPAL CONTRACTOR
                </span>
              </div>

              {/* Hero Headline & Core Narrative */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
                <div className="lg:col-span-8 space-y-5">
                  <h1
                    style={H1_STYLE}
                    className="text-[44px] md:text-[56px] leading-[1.08] tracking-[-0.03em] font-bold text-white"
                  >
                    Master Craftsmanship, Structural Rigour &amp;{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                      Uncompromising Integrity.
                    </span>
                  </h1>
                  <p className="text-[17px] md:text-[18px] text-slate-300 max-w-2xl leading-relaxed">
                    Founded on the principle of transparent, architect-led prime construction, JSTM Construction has delivered over 450 luxury residences, structural extensions, and period restorations across Kensington, Chelsea, Mayfair, Wandsworth, and Richmond.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 pt-4 lg:pt-0">
                  <a
                    href="#consultation-booking"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-[14px] px-6 py-4 rounded-xl shadow-[0_4px_20px_rgba(5,150,105,0.4)] transition-all duration-150 font-semibold group"
                  >
                    <span>Schedule Director Consultation</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={() => alert("Downloading JSTM Company Prospectus (PDF) - 2025 Edition")}
                    className="inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-[14px] px-6 py-3.5 rounded-xl transition-all duration-150 font-medium"
                  >
                    <span className="material-symbols-outlined text-[18px] text-emerald-400">download_for_offline</span>
                    <span>Download Company Prospectus (PDF)</span>
                  </button>
                </div>
              </div>

              {/* Quantitative Rigour / Institutional Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-[#0f172a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-md">
                {METRICS.map((m) => (
                  <div key={m.title} className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[38px] md:text-[44px] text-emerald-400 font-bold tracking-tight">
                        {m.val}
                      </span>
                      {m.suffix && (
                        <span className="text-[24px] text-emerald-400 font-bold">{m.suffix}</span>
                      )}
                    </div>
                    <div className="text-[14px] md:text-[15px] text-white font-semibold">{m.title}</div>
                    <p className="text-[12px] md:text-[13px] text-slate-400">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 2: STORY & PHILOSOPHY (Light Canvas) */}
          <section className="w-full bg-[#f8fafc] text-slate-900 py-20 border-b border-slate-200">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
              {/* Section Header */}
              <div className="max-w-3xl mb-12">
                <span className="text-[11px] tracking-widest uppercase font-bold text-emerald-700 block mb-2">
                  OUR HERITAGE &amp; APPROACH
                </span>
                <h2 style={H1_STYLE} className="text-[36px] md:text-[42px] leading-[1.15] tracking-tight text-slate-900 font-bold">
                  Redefining Prime Residential Contracting in Central London
                </h2>
              </div>

              {/* Narrative Two-Column Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
                <div className="lg:col-span-7 space-y-4 text-slate-600 text-[15px] leading-relaxed">
                  <p className="text-[17px] text-slate-900 font-medium leading-relaxed">
                    JSTM Construction was established in Mayfair by chartered structural engineers and senior site directors who identified a persistent fracture in high-end UK building contracting: architectural visions compromised by fragmented execution.
                  </p>
                  <p>
                    For years, prime residential clients across Mayfair, Kensington, and Chelsea had grown accustomed to the typical industry compromises—opaque scope variations, unaccountable sub-contracted management, and project schedules that slipped without accountability. JSTM was structured from day one as the structural antidote.
                  </p>
                  <p>
                    We operate under clear, binding JCT Minor Works and Standard Building contracts with exhaustive Bills of Quantities (BoQs). Every single scheme is spearheaded by an experienced full-time site director stationed on your premises every working day, ensuring complete fidelity to architectural drawings and RIBA Plan of Work stages.
                  </p>

                  {/* Engineering Quote Metric Bar */}
                  <div className="bg-white border border-slate-200 p-5 rounded-xl space-y-2 shadow-sm mt-4">
                    <div className="flex items-center justify-between text-slate-900 text-[14px]">
                      <span className="font-semibold">Architectural Delivery Index</span>
                      <span className="text-emerald-700 font-bold">100% RIBA Compliance</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full rounded-full w-full" />
                    </div>
                  </div>
                </div>

                {/* Right Visual Showcase & Director Quote */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200/60">
                    <div className="relative h-[440px] w-full">
                      <Image
                        src="/assets/images/about/townhouse_refurbishment_hero.jpg"
                        alt="A pristine high-end London townhouse under architectural refurbishment in Chelsea"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 42vw"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Floating Director Quote Box */}
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 border border-slate-800 backdrop-blur-md p-5 rounded-xl text-white shadow-xl">
                      <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                        <span className="material-symbols-outlined text-[20px]">format_quote</span>
                        <span className="text-[11px] uppercase tracking-wider text-slate-300 font-semibold">
                          Managing Director&apos;s Mandate
                        </span>
                      </div>
                      <p className="text-[13px] text-slate-200 italic mb-2 leading-relaxed">
                        &ldquo;We believe building your dream home shouldn&apos;t be a test of endurance. We bring quiet order, forensic precision, and white-glove respect to every square metre.&rdquo;
                      </p>
                      <div className="flex items-center justify-between text-[12px] pt-2 border-t border-slate-800 text-slate-400">
                        <span className="font-semibold text-slate-200">Julian Davies</span>
                        <span className="text-emerald-400">Founder &amp; Managing Director</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Core Commitments Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {COMMITMENTS.map((c) => (
                  <div
                    key={c.title}
                    className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-[24px]">{c.icon}</span>
                    </div>
                    <h3 className="text-[18px] text-slate-900 font-bold mb-2">{c.title}</h3>
                    <p className="text-[13px] text-slate-600 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3: THE 4 OPERATIONAL STANDARDS (Dark Navy) */}
          <section className="w-full bg-[#0f172a] text-white py-24 relative overflow-hidden border-b border-slate-800">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
              {/* Section Tag & Title */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-emerald-400 font-semibold block mb-2">
                    HOW WE GOVERN EVERY BUILD
                  </span>
                  <h2 style={H1_STYLE} className="text-[36px] md:text-[42px] font-bold text-white tracking-tight">
                    The JSTM Quality &amp; Safety Protocol
                  </h2>
                </div>
                <p className="text-[15px] text-slate-300 max-w-md leading-relaxed">
                  Standardised procedures engineered to eliminate variance, safeguarding heritage building fabric and client capital.
                </p>
              </div>

              {/* 4 Protocols Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PROTOCOLS.map((p) => (
                  <div
                    key={p.num}
                    className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:border-slate-700 transition-colors group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[36px] font-bold text-emerald-400/30 group-hover:text-emerald-400 transition-colors">
                          {p.num}
                        </span>
                        <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                          <span className="material-symbols-outlined text-[22px]">{p.icon}</span>
                        </div>
                      </div>
                      <h3 className="text-[18px] text-white font-bold">{p.title}</h3>
                      <p className="text-[13px] text-slate-300 leading-relaxed">{p.desc}</p>
                    </div>

                    <div className="mt-6 pt-3 bg-slate-950/70 -mx-6 -mb-6 px-6 py-3 rounded-b-2xl flex items-center justify-between text-[12px] text-slate-400 border-t border-slate-800">
                      <span>{p.footerLabel}</span>
                      <span className="text-emerald-400 font-semibold">{p.footerVal}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 4: LEADERSHIP & EXECUTIVE TEAM */}
          <section className="w-full bg-[#f8fafc] text-slate-900 py-20 border-b border-slate-200">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
              <div className="max-w-3xl mb-12">
                <span className="text-[11px] uppercase tracking-widest font-bold text-emerald-700 block mb-2">
                  EXECUTIVE LEADERSHIP
                </span>
                <h2 style={H1_STYLE} className="text-[36px] md:text-[42px] font-bold text-slate-900 tracking-tight">
                  Led by Master Builders &amp; Chartered Engineers
                </h2>
                <p className="text-[15px] text-slate-600 mt-2">
                  Each member of our operational board brings direct on-site mastery, institutional accreditations, and decades of prime central London residential experience.
                </p>
              </div>

              {/* 4 Profile Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {LEADERSHIP.map((lead) => (
                  <div
                    key={lead.name}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all flex flex-col"
                  >
                    <div className="h-64 overflow-hidden relative bg-slate-100">
                      <Image
                        src={lead.image}
                        alt={lead.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-md text-emerald-300 text-[10px] uppercase font-bold px-2.5 py-1 rounded border border-slate-800">
                        {lead.badge}
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-[19px] text-slate-900 font-bold">{lead.name}</h3>
                        <p className="text-[13px] text-emerald-700 font-semibold mb-3">{lead.role}</p>
                        <p className="text-[13px] text-slate-600 leading-relaxed mb-4">{lead.desc}</p>
                      </div>
                      <div className="pt-3 bg-slate-50 border-t border-slate-100 -mx-5 -mb-5 px-5 py-2.5 flex items-center justify-between text-[12px] text-slate-700">
                        <span className="text-slate-500">{lead.tagLabel}</span>
                        <span className="font-semibold text-slate-900">{lead.tagVal}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 5: INDUSTRY ACCREDITATIONS & CODE OF PRACTICE */}
          <section className="w-full bg-[#0b1120] text-white py-20 border-b border-slate-800">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-[11px] uppercase tracking-widest text-emerald-400 font-semibold block mb-2">
                  INDUSTRY STANDARDS &amp; AFFILIATIONS
                </span>
                <h2 style={H1_STYLE} className="text-[36px] md:text-[42px] font-bold text-white tracking-tight">
                  Endorsed by the UK&apos;s Most Stringent Regulatory Bodies
                </h2>
                <p className="text-[15px] text-slate-300 mt-2">
                  Rigorous independent audits inspect our site management, solvency, technical competency, and customer transparency annually.
                </p>
              </div>

              {/* Accreditations Registry Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                {ACCREDITATIONS.map((acc) => (
                  <div
                    key={acc.title}
                    className="bg-[#0f172a] border border-slate-800 p-5 rounded-xl text-center flex flex-col items-center justify-center space-y-2 shadow-lg hover:border-slate-700 hover:bg-slate-900 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <span className="material-symbols-outlined text-[24px]">{acc.icon}</span>
                    </div>
                    <div className="text-[14px] font-bold text-white">{acc.title}</div>
                    <div className="text-[11px] text-emerald-400 font-medium">{acc.sub}</div>
                    <p className="text-[12px] text-slate-400">{acc.desc}</p>
                  </div>
                ))}
              </div>

              {/* Trustpilot Verified Rating Band */}
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-emerald-950/80 border border-emerald-500/30 rounded-xl flex items-center justify-center text-emerald-400 shrink-0">
                    <span className="material-symbols-outlined text-[32px]">star</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[20px] font-bold text-white">4.9 / 5.0</span>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-[18px]">
                            star
                          </span>
                        ))}
                      </div>
                      <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                        Trustpilot Verified
                      </span>
                    </div>
                    <p className="text-[13px] text-slate-300">
                      Based on 142+ validated prime London homeowner and architect reviews
                    </p>
                  </div>
                </div>

                <div className="text-right flex items-center gap-4">
                  <div className="hidden sm:block text-slate-400 text-[13px] italic">
                    &ldquo;Flawless project management on our Grade II Chelsea townhouse.&rdquo;
                  </div>
                  <Link
                    href="/#testimonials"
                    className="bg-slate-800 hover:bg-slate-700 text-white text-[13px] px-4 py-2 rounded-lg transition-colors font-medium shrink-0"
                  >
                    Read Reviews
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: DIRECT BOARD ENGAGEMENT (CONSULTATION FORM) */}
          <section id="consultation-booking" className="w-full bg-[#0b1120] text-white py-24 border-b border-slate-800">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-5 space-y-8">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-emerald-400 font-semibold block mb-2">
                      DIRECT BOARD ENGAGEMENT
                    </span>
                    <h2 style={H1_STYLE} className="text-[36px] md:text-[42px] leading-[1.12] font-bold text-white tracking-tight">
                      Initiate Your London Project Consultation
                    </h2>
                    <p className="text-[15px] text-slate-300 mt-3 leading-relaxed">
                      Every prospective scheme receives a complimentary desktop feasibility assessment and initial consultation led directly by a JSTM Director.
                    </p>
                  </div>

                  {/* Contact Details Cards */}
                  <div className="space-y-4">
                    <div className="bg-[#0f172a] border border-slate-800 p-5 rounded-xl flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <span className="material-symbols-outlined text-[22px]">location_on</span>
                      </div>
                      <div>
                        <h3 className="text-[15px] font-bold text-white">Registered Headquarters</h3>
                        <p className="text-[13px] text-slate-300">JST Construction Suite A204, 2nd Floor Vista Centre</p>
                        <p className="text-[13px] text-slate-300">50 Salisbury Road, Cranford, Hounslow TW4 6JQ, UK</p>
                        <p className="text-[12px] text-emerald-400 mt-1">Available for in-person architectural consultations</p>
                      </div>
                    </div>

                    <div className="bg-[#0f172a] border border-slate-800 p-5 rounded-xl flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <span className="material-symbols-outlined text-[22px]">call</span>
                      </div>
                      <div>
                        <h3 className="text-[15px] font-bold text-white">Direct Landline</h3>
                        <a
                          className="text-[14px] font-semibold text-slate-200 hover:text-emerald-400 transition-colors block"
                          href="tel:02035762228"
                        >
                          020 3576 2228
                        </a>
                        <span className="text-[12px] text-slate-400">Monday – Saturday: 07:30 – 18:30 GMT</span>
                      </div>
                    </div>

                    <div className="bg-[#0f172a] border border-slate-800 p-5 rounded-xl flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <i className="fa-brands fa-whatsapp text-[20px]"></i>
                      </div>
                      <div>
                        <h3 className="text-[15px] font-bold text-white">WhatsApp Direct</h3>
                        <a
                          className="text-[14px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors block"
                          href="https://wa.me/447418095006"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          +44 7418 095006
                        </a>
                        <span className="text-[12px] text-slate-400">Fast message response &amp; drawing reviews</span>
                      </div>
                    </div>

                    <div className="bg-[#0f172a] border border-slate-800 p-5 rounded-xl flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <span className="material-symbols-outlined text-[22px]">mail</span>
                      </div>
                      <div>
                        <h3 className="text-[15px] font-bold text-white">Email Enquiries</h3>
                        <a
                          href="mailto:info@jstmconstruction.com"
                          className="text-[14px] text-slate-200 hover:text-emerald-400 transition-colors block"
                        >
                          info@jstmconstruction.com
                        </a>
                        <span className="text-[12px] text-slate-400">Tender packages &amp; surveys reviewed promptly</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Interactive Consultation Form */}
                <div className="lg:col-span-7">
                  <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
                    <h3 className="text-[20px] font-bold text-white mb-1">Schedule Feasibility Meeting</h3>
                    <p className="text-[14px] text-slate-400 mb-6">
                      Provide project details below to reserve an appointment with Julian Davies or Marcus Sterling.
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label htmlFor="abt-name" className="text-[12px] font-semibold text-slate-300 uppercase tracking-wider block">
                            Full Name *
                          </label>
                          <input
                            id="abt-name"
                            className={INPUT_CLS}
                            placeholder="e.g. Lord Julian Davies"
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div className="space-y-1">
                          <label htmlFor="abt-postcode" className="text-[12px] font-semibold text-slate-300 uppercase tracking-wider block">
                            London Postcode *
                          </label>
                          <input
                            id="abt-postcode"
                            className={INPUT_CLS}
                            placeholder="e.g. SW3, SW1X, W1J, W8..."
                            required
                            type="text"
                            value={formData.postcode}
                            onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label htmlFor="abt-email" className="text-[12px] font-semibold text-slate-300 uppercase tracking-wider block">
                            Email Address *
                          </label>
                          <input
                            id="abt-email"
                            className={INPUT_CLS}
                            placeholder="client@estate.com"
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div className="space-y-1">
                          <label htmlFor="abt-phone" className="text-[12px] font-semibold text-slate-300 uppercase tracking-wider block">
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

                      <div className="space-y-1">
                        <label htmlFor="abt-class" className="text-[12px] font-semibold text-slate-300 uppercase tracking-wider block">
                          Project Classification *
                        </label>
                        <select
                          id="abt-class"
                          className={INPUT_CLS}
                          required
                          value={formData.classification}
                          onChange={(e) => setFormData({ ...formData, classification: e.target.value })}
                        >
                          <option value="" disabled>Select Proposed Scope</option>
                          <option value="prime-refurb">Full Prime Residential Refurbishment (£350k - £3M+)</option>
                          <option value="basement">Architectural Basement Excavation &amp; Substructure</option>
                          <option value="extension">Heritage Structural Extension &amp; Loft Conversion</option>
                          <option value="commercial">Super-Prime Commercial &amp; Atelier Fit-Out</option>
                          <option value="architectural-tender">RIBA Practice Tender &amp; BoQ Procurement</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="abt-scope" className="text-[12px] font-semibold text-slate-300 uppercase tracking-wider block">
                          Project Scope &amp; Target Timeline
                        </label>
                        <textarea
                          id="abt-scope"
                          className={`${INPUT_CLS} resize-none`}
                          placeholder="Briefly outline property details (e.g., Grade II status, planning permission secured, estimated start date)..."
                          rows={3}
                          value={formData.scope}
                          onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                        />
                      </div>

                      <button
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl text-[14px] font-semibold tracking-wide shadow-[0_4px_20px_rgba(5,150,105,0.4)] flex items-center justify-center gap-2 transition-all duration-150"
                        type="submit"
                      >
                        <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                        <span>Request Formal Director Consultation</span>
                      </button>

                      {formSubmitted && (
                        <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-[13px] text-center animate-fadeIn">
                          Thank you. Your consultation request has been routed directly to Julian Davies&apos; executive office. A director will contact you within 4 business hours.
                        </div>
                      )}

                      <p className="text-[11px] text-slate-400 text-center">
                        Strict Non-Disclosure Guarantee: All architectural drawings and site locations are protected under professional NDA.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
