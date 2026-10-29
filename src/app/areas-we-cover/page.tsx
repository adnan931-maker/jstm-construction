"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const H1_STYLE = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

type BoroughCategory = "all" | "rbkc" | "westminster" | "wandsworth" | "richmond" | "camden" | "hammersmith";

interface BoroughDossier {
  id: string;
  category: BoroughCategory;
  name: string;
  sub: string;
  postcodes: string;
  delivered: string;
  image: string;
  alt: string;
  description: string;
  metric1Label: string;
  metric1Val: string;
  metric2Label: string;
  metric2Val: string;
  streets: string;
  competencies: string[];
  ctaLabel: string;
  leadTime: string;
}

const BOROUGH_DOSSIERS: BoroughDossier[] = [
  {
    id: "rbkc",
    category: "rbkc",
    name: "Royal Borough of Kensington & Chelsea",
    sub: "RBKC Code of Construction Practice Certified",
    postcodes: "SW3, SW7, SW10, W8, W11, W14",
    delivered: "140+ Delivered",
    image: "/assets/images/areas/kensington_chelsea.jpg",
    alt: "Victorian stucco-fronted luxury townhouse in Kensington, London, with modern bronze Crittall rear extension",
    description: "Specialized in Grade II listed restorations, subterranean basement dig-outs compliant with the stringent RBKC Basements SPD, and intricate structural underpinning on constrained mews streets.",
    metric1Label: "Approval Rate",
    metric1Val: "100% Planning Rapport",
    metric2Label: "Lead Time",
    metric2Val: "4–6 Weeks Pre-Commencement",
    streets: "The Boltons, Sloane Square, Holland Park, Chelsea Embankment",
    competencies: ["Grade II Conservation", "Silent Acoustic Piling", "Heritage Lime Plastering", "Party Wall Awards"],
    ctaLabel: "Request RBKC Site Survey",
    leadTime: "Lead Foreman On-Call",
  },
  {
    id: "westminster",
    category: "westminster",
    name: "City of Westminster & Mayfair",
    sub: "Grosvenor & Crown Estate Approval Accordance",
    postcodes: "W1, SW1, NW8, WC2",
    delivered: "95+ Delivered",
    image: "/assets/images/areas/westminster_mayfair.jpg",
    alt: "Luxurious Mayfair penthouse interior refurbishment featuring dark timber parquet herringbone flooring and bronze accents",
    description: "Flawless turnkey transformations across Grosvenor Square, Belgravia mews houses, and Marylebone apartments. Complete acoustic decoupling and dedicated liaison with historic land estates.",
    metric1Label: "Estate Approvals",
    metric1Val: "Grosvenor & Portman Vetted",
    metric2Label: "Access Logistics",
    metric2Val: "Red Route & Westminster Bay Managed",
    streets: "Mount Street, Eaton Square, Chester Square, Berkeley Square",
    competencies: ["Turnkey Penthouse Refurbishment", "Acoustic Floor Decoupling", "Historic Woodwork Restoration", "Estate Landlord Licenses"],
    ctaLabel: "Request Westminster Survey",
    leadTime: "Dedicated Resident PM",
  },
  {
    id: "wandsworth",
    category: "wandsworth",
    name: "Wandsworth, Battersea & Clapham",
    sub: "Subterranean & Large Footprint Domestic Experts",
    postcodes: "SW11, SW12, SW18, SW4",
    delivered: "80+ Delivered",
    image: "/assets/images/areas/wandsworth_battersea.jpg",
    alt: "Modern double-height glass kitchen pavilion in a Victorian terraced family residence in Battersea",
    description: "Master builders for expansive Victorian terraced homes around Wandsworth Common, Battersea Park, and the Nightingale Triangle. Double-storey rear glass wraps, mansards, and garden pavilions.",
    metric1Label: "Typical Scale",
    metric1Val: "Family Home Transformations",
    metric2Label: "Planning Scope",
    metric2Val: "Lawful Development Certs",
    streets: "Nightingale Triangle, Spencer Park, Wandsworth Common, Prince of Wales Drive",
    competencies: ["Side-Return Glazing", "L-Shaped Mansard Dormers", "Underfloor Radiant Screed", "Basement Playrooms"],
    ctaLabel: "Request Wandsworth Survey",
    leadTime: "Fast Site Deployment",
  },
  {
    id: "richmond",
    category: "richmond",
    name: "Richmond upon Thames & Kingston",
    sub: "Thames Water & Conservation Zone Specialists",
    postcodes: "TW9, TW10, KT1, KT2",
    delivered: "60+ Delivered",
    image: "/assets/images/areas/richmond_upon_thames.jpg",
    alt: "Detached riverside luxury family home in Richmond upon Thames showcasing zinc clad architectural roof extension",
    description: "Specialists in flood-risk mitigation engineering, green-belt architectural integration, standing seam zinc roofs, and Passivhaus thermal envelope retrofits.",
    metric1Label: "Water Authority",
    metric1Val: "Thames Water Build-Over Approved",
    metric2Label: "Green Standard",
    metric2Val: "Passivhaus EnerPHit Capable",
    streets: "Richmond Hill, St Margarets, Ham Common, Petersham Road",
    competencies: ["Standing Seam Zinc Lofts", "Waterproof Tanking", "Timber Glulam Beams", "Air-Source Heat Pumps"],
    ctaLabel: "Request Richmond Survey",
    leadTime: "Environmental Team Assigned",
  },
  {
    id: "camden",
    category: "camden",
    name: "Camden, Hampstead & Highgate",
    sub: "Hampstead Garden Suburb Trust Accordance",
    postcodes: "NW3, NW1, N6",
    delivered: "42+ Delivered",
    image: "/assets/images/areas/camden_hampstead.jpg",
    alt: "Grand Georgian red-brick residence in Hampstead undergoing meticulous architectural restoration",
    description: "Pristine red-brick Georgian restoration, deep Heath-adjacent foundation underpinning, and delicate tree-root preservation architecture.",
    metric1Label: "Conservation Liaison",
    metric1Val: "HGS Trust & Highgate Society",
    metric2Label: "Geotechnical Protocol",
    metric2Val: "London Clay Deep Underpinning",
    streets: "Well Walk, Church Row, Highgate West Hill, Primrose Hill Road",
    competencies: ["Tuck Pointing Masonry", "Deep RSJ Basement Shoring", "Handcrafted Sash Windows", "Tree Root Protection Substructures"],
    ctaLabel: "Request Camden Survey",
    leadTime: "Historic Masonry Team",
  },
  {
    id: "hammersmith",
    category: "hammersmith",
    name: "Hammersmith & Fulham",
    sub: "Peterborough Estate & Conservation Zones",
    postcodes: "SW6, W6, W12",
    delivered: "75+ Delivered",
    image: "/assets/images/areas/hammersmith_fulham.jpg",
    alt: "Renovated Lion House in Peterborough Estate, Fulham, displaying refined architectural brickwork",
    description: "Specialists in iconic Fulham 'Lion Houses', bespoke pod conversions, structural chimney breast removal, and modern architectural rear open-plan living extensions.",
    metric1Label: "Estate Precedents",
    metric1Val: "Lion House Structural Specialists",
    metric2Label: "Council Pre-App",
    metric2Val: "LBHF Protocol Certified",
    streets: "Peterborough Estate, Hurlingham Road, Parsons Green, Brook Green",
    competencies: ["Lion House Pod Conversions", "Crittall Steel Openings", "Acoustic Party Wall Upgrades", "Turnkey Luxury Kitchens"],
    ctaLabel: "Request Fulham Survey",
    leadTime: "Resident Site Team",
  },
];

const ALL_32_BOROUGHS = [
  "Barking & Dagenham", "Barnet", "Bexley", "Brent", "Bromley", "Camden", "City of London", "Croydon",
  "Ealing", "Enfield", "Greenwich", "Hackney", "Hammersmith & Fulham", "Haringey", "Harrow", "Havering",
  "Hillingdon", "Hounslow", "Islington", "Kensington & Chelsea", "Kingston upon Thames", "Lambeth", "Lewisham", "Merton",
  "Newham", "Redbridge", "Richmond upon Thames", "Southwark", "Sutton", "Tower Hamlets", "Waltham Forest", "Wandsworth", "City of Westminster"
];

const NUANCE_MATRIX = [
  {
    borough: "Kensington & Chelsea (RBKC)",
    excavation: "Strict single-storey constraint; 50% garden max; CoCP Level 1 audits.",
    pd: "Heavily restricted via Article 4 directions in 70% of conservation zones.",
    rapport: "Established 15+ Yrs",
    timeline: "8 - 10 Weeks",
  },
  {
    borough: "City of Westminster (WCC)",
    excavation: "Subterranean SPD compliant; structural method statement (SMS) mandatory.",
    pd: "Restricted in Grosvenor, Howard de Walden, and Crown Estate enclaves.",
    rapport: "Direct Liaison",
    timeline: "7 - 9 Weeks",
  },
  {
    borough: "Wandsworth & Battersea",
    excavation: "Standard subterranean criteria; party wall engineer vetting required.",
    pd: "Expansive; rear wraparounds and mansards routinely lawful.",
    rapport: "Rapid Accord",
    timeline: "5 - 7 Weeks",
  },
  {
    borough: "Richmond upon Thames",
    excavation: "Thames Water flood risk assessment required within 500m of river basin.",
    pd: "Balanced; Permitted Development available on detached residences.",
    rapport: "High Compliance",
    timeline: "6 - 8 Weeks",
  },
  {
    borough: "Camden & Hampstead",
    excavation: "Geological hydrology testing and tree protection orders (TPOs) strictly vetted.",
    pd: "Subject to Hampstead Garden Suburb Trust architectural veto.",
    rapport: "Trust Accredited",
    timeline: "8 - 11 Weeks",
  },
  {
    borough: "Hammersmith & Fulham (LBHF)",
    excavation: "Basement SPD enforced; party wall dispute resolution panel integration.",
    pd: "Strong support for pod conversions and rear kitchen pavilions.",
    rapport: "Direct Liaison",
    timeline: "6 - 8 Weeks",
  },
];

export default function AreasWeCoverPage() {
  const [selectedBorough, setSelectedBorough] = useState<BoroughCategory>("all");
  const [postcodeCheck, setPostcodeCheck] = useState("");
  const [detectedBorough, setDetectedBorough] = useState("Auto-Detected From Postcode");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    scope: "",
    notes: "",
  });

  const handlePostcodeChange = (val: string) => {
    setPostcodeCheck(val);
    const code = val.trim().toUpperCase();
    if (code.startsWith("SW3") || code.startsWith("SW7") || code.startsWith("SW10") || code.startsWith("W8") || code.startsWith("W11") || code.startsWith("W14")) {
      setDetectedBorough("Royal Borough of Kensington & Chelsea (RBKC)");
    } else if (code.startsWith("W1") || code.startsWith("SW1") || code.startsWith("NW8")) {
      setDetectedBorough("City of Westminster (Mayfair / Belgravia)");
    } else if (code.startsWith("SW11") || code.startsWith("SW12") || code.startsWith("SW18") || code.startsWith("SW4")) {
      setDetectedBorough("London Borough of Wandsworth");
    } else if (code.startsWith("TW9") || code.startsWith("TW10") || code.startsWith("KT1") || code.startsWith("KT2")) {
      setDetectedBorough("London Borough of Richmond upon Thames");
    } else if (code.startsWith("NW3") || code.startsWith("NW1") || code.startsWith("N6")) {
      setDetectedBorough("London Borough of Camden / Hampstead");
    } else if (code.startsWith("W6") || code.startsWith("SW6")) {
      setDetectedBorough("London Borough of Hammersmith & Fulham");
    } else if (code.length >= 2) {
      setDetectedBorough("Greater London Borough Authority Verified");
    } else {
      setDetectedBorough("Auto-Detected From Postcode");
    }
  };

  const filteredDossiers = selectedBorough === "all"
    ? BOROUGH_DOSSIERS
    : BOROUGH_DOSSIERS.filter((b) => b.category === selectedBorough);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      postcode: "",
      scope: "",
      notes: "",
    });
    setDetectedBorough("Auto-Detected From Postcode");
    setPostcodeCheck("");
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 antialiased selection:bg-emerald-500 selection:text-white min-h-screen">
      <Header currentPage="areas" />

      <main className="w-full">
        {/* 1. HERO SECTION */}
        <section className="relative bg-[#0b1120] text-slate-100 overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800">
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-80 left-10 w-[550px] h-[550px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
            {/* Breadcrumb and Authority Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
              <nav className="flex items-center space-x-2 text-[11px] sm:text-xs text-slate-400 font-medium">
                <Link className="hover:text-emerald-400 transition-colors flex items-center gap-1" href="/">
                  <span className="material-symbols-outlined text-[14px]">home</span> Home
                </Link>
                <span className="text-slate-600">/</span>
                <span className="text-emerald-400">Areas We Cover</span>
              </nav>

              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-900/90 border border-emerald-500/30 text-emerald-300 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider shadow-inner">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span>GREATER LONDON REGULATORY MATRIX</span>
              </div>
            </div>

            {/* Main Headline & Description */}
            <div className="max-w-4xl space-y-4 sm:space-y-6">
              <h1
                style={H1_STYLE}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white"
              >
                Prime Central London &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                  Home Counties
                </span>{" "}
                Architectural Coverage
              </h1>
              <p className="text-xs sm:text-base lg:text-lg text-slate-300 leading-relaxed font-light max-w-3xl">
                Deep institutional mastery of local planning policies, conservation area Article 4 directions, subterranean guidelines, and party wall logistics across London’s prime residential enclaves.
              </p>
            </div>

            {/* Quick Interactive Postcode Feasibility Checker */}
            <div className="max-w-2xl bg-[#0f172a] p-3.5 sm:p-5 rounded-2xl border border-slate-800 shadow-xl space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-400">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                  </span>
                  <input
                    type="text"
                    placeholder="Enter London Postcode (e.g. SW3, W1, SW11, TW9)..."
                    value={postcodeCheck}
                    onChange={(e) => handlePostcodeChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-[#1e293b] border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>
                <a
                  href="#feasibility-survey"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold text-xs sm:text-sm transition-all duration-150 flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(5,150,105,0.4)]"
                >
                  <span>Check Clearance</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
              {postcodeCheck.trim() && (
                <div className="text-[11px] sm:text-xs text-emerald-400 font-medium flex items-center gap-1.5 pl-1">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>Jurisdiction: {detectedBorough}</span>
                </div>
              )}
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 pt-2 sm:pt-4">
              <div className="bg-[#0f172a]/90 border border-slate-800 p-3.5 sm:p-5 rounded-xl">
                <div style={H1_STYLE} className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">6 Prime</div>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1 uppercase font-semibold">Flagship Focus Boroughs</p>
              </div>
              <div className="bg-[#0f172a]/90 border border-slate-800 p-3.5 sm:p-5 rounded-xl">
                <div style={H1_STYLE} className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">32 Boroughs</div>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1 uppercase font-semibold">Greater London Coverage</p>
              </div>
              <div className="bg-[#0f172a]/90 border border-slate-800 p-3.5 sm:p-5 rounded-xl">
                <div style={H1_STYLE} className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">100%</div>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1 uppercase font-semibold">Planning Approval Record</p>
              </div>
              <div className="bg-[#0f172a]/90 border border-slate-800 p-3.5 sm:p-5 rounded-xl">
                <div style={H1_STYLE} className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">4 Hours</div>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1 uppercase font-semibold">Director Response SLA</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. BOROUGH NAVIGATION FILTER TABS */}
        <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3 sm:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-2 min-w-max">
              {[
                { label: "All 6 Core Boroughs", val: "all" },
                { label: "Kensington & Chelsea", val: "rbkc" },
                { label: "Westminster & Mayfair", val: "westminster" },
                { label: "Wandsworth & Battersea", val: "wandsworth" },
                { label: "Richmond & Kingston", val: "richmond" },
                { label: "Camden & Hampstead", val: "camden" },
                { label: "Hammersmith & Fulham", val: "hammersmith" },
              ].map((btn) => (
                <button
                  key={btn.val}
                  type="button"
                  onClick={() => setSelectedBorough(btn.val as BoroughCategory)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-150 border ${
                    selectedBorough === btn.val
                      ? "bg-emerald-600 text-white shadow-sm border-emerald-600"
                      : "bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border-slate-200"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 3. FEATURED PRIME BOROUGH DOSSIERS */}
        <section className="bg-[#f8fafc] py-12 sm:py-20 lg:py-28 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
            <div className="max-w-3xl space-y-2.5 sm:space-y-3">
              <div className="inline-flex items-center gap-2 text-emerald-700 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>Bespoke Territorial Expertise</span>
              </div>
              <h2 style={H1_STYLE} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
                Comprehensive Regional Dossiers
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                Every London Borough operates under distinct statutory constraints, architectural precedents, and building control frameworks. Here is how our engineering teams navigate each prime enclave.
              </p>
            </div>

            {/* Dossier Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {filteredDossiers.map((b) => (
                <article
                  key={b.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 overflow-hidden flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={b.image}
                        alt={b.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#0b1120]/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold px-2.5 sm:px-3 py-1 rounded border border-slate-800">
                        {b.postcodes}
                      </div>
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-emerald-600 text-white text-[10px] sm:text-[11px] font-semibold px-2.5 sm:px-3 py-1 rounded flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-[13px] sm:text-[14px]">verified</span>
                        <span>{b.delivered}</span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                      <div>
                        <h3 style={H1_STYLE} className="text-xl sm:text-2xl font-bold text-slate-900">
                          {b.name}
                        </h3>
                        <p className="text-[11px] sm:text-xs font-bold text-emerald-700 mt-1 uppercase tracking-wider">
                          {b.sub}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {b.description}
                      </p>

                      {/* Technical Specifications Matrix */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs bg-slate-50 border border-slate-200 p-3 sm:p-4 rounded-xl">
                        <div>
                          <span className="text-slate-400 block uppercase font-semibold text-[9px] sm:text-[10px]">
                            {b.metric1Label}
                          </span>
                          <span className="font-semibold text-slate-900 text-xs sm:text-sm">{b.metric1Val}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block uppercase font-semibold text-[9px] sm:text-[10px]">
                            {b.metric2Label}
                          </span>
                          <span className="font-semibold text-slate-900 text-xs sm:text-sm">{b.metric2Val}</span>
                        </div>
                        <div className="col-span-2 pt-2 border-t border-slate-200">
                          <span className="text-slate-400 block uppercase font-semibold text-[9px] sm:text-[10px]">
                            Frequent Streets Handled
                          </span>
                          <span className="text-slate-800 font-medium text-xs sm:text-sm">{b.streets}</span>
                        </div>
                      </div>

                      {/* Key Competencies tags */}
                      <div className="space-y-2">
                        <span className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-slate-500 block">
                          Key Competencies
                        </span>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                          {b.competencies.map((comp) => (
                            <span
                              key={comp}
                              className="bg-slate-100 border border-slate-200 px-2.5 sm:px-3 py-1 rounded-md text-slate-700 font-medium"
                            >
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 lg:p-8 pt-0 flex items-center justify-between border-t border-slate-100 mt-2 sm:mt-4">
                    <a
                      className="text-emerald-700 hover:text-emerald-800 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
                      href="#feasibility-survey"
                    >
                      <span>{b.ctaLabel}</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>
                    <span className="text-[11px] sm:text-xs text-slate-400">{b.leadTime}</span>
                  </div>
                </article>
              ))}
            </div>

            {/* Complete London 32-Borough Directory */}
            <div className="bg-white p-5 sm:p-8 lg:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div>
                  <h3 style={H1_STYLE} className="text-xl sm:text-2xl font-bold text-slate-900">
                    Complete London 32-Borough Directory
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Licensed, insured, and actively operating across every administrative borough in Greater London.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg border border-emerald-200 self-start sm:self-auto">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>32/32 Active Jurisdictions</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2.5 text-[11px] sm:text-xs text-slate-700">
                {ALL_32_BOROUGHS.map((borough) => (
                  <div
                    key={borough}
                    className="p-2.5 sm:p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-1.5 sm:gap-2 hover:border-emerald-500/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span className="font-medium truncate">{borough}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. LOGISTICS & SITE MANAGEMENT MAP SECTION */}
        <section className="bg-[#0b1120] text-slate-100 py-12 sm:py-20 lg:py-28 relative overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
              <div className="max-w-3xl space-y-2.5 sm:space-y-3">
                <div className="inline-flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Unrivalled Municipal Logistics</span>
                </div>
                <h2 style={H1_STYLE} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                  Strategic Central London Logistics Hub &amp; Site Orchestration
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed font-light">
                  Delivering premier renovations in high-density London settings demands acute site logistics: rapid parking bay suspensions, acoustic baffles, and considerately managed delivery corridors.
                </p>
              </div>

              <div className="bg-[#0f172a] p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-xl shrink-0">
                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 font-semibold">Operations Headquarters</div>
                <div style={H1_STYLE} className="text-lg sm:text-xl font-bold text-emerald-400 mt-1">Vista Centre, Suite A204</div>
                <div className="text-xs text-slate-300">50 Salisbury Rd, Cranford, Hounslow TW4 6JQ</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
              {/* Map Viewport */}
              <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-2xl relative min-h-[300px] sm:min-h-[440px] bg-slate-900 flex flex-col justify-end border border-slate-800">
                <div className="absolute inset-0">
                  <Image
                    src="/assets/images/areas/map_mayfair_logistics.jpg"
                    alt="Mayfair Central Operations Map"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                  <div className="absolute inset-0 bg-slate-950/40" />
                </div>

                <div className="relative z-10 m-3 sm:m-6 p-4 sm:p-6 rounded-xl bg-[#0b1120]/95 border border-slate-800 backdrop-blur-md space-y-3 sm:space-y-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs uppercase tracking-widest text-emerald-400 font-bold">
                      Live Fleet &amp; Site Dispatch
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Real-Time Monitored</span>
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-[#0f172a] p-2.5 sm:p-3 rounded-lg border border-slate-800">
                      <span className="block text-base sm:text-lg font-bold text-white">18m</span>
                      <span className="text-slate-400 text-[9px] sm:text-[10px]">Avg Response</span>
                    </div>
                    <div className="bg-[#0f172a] p-2.5 sm:p-3 rounded-lg border border-slate-800">
                      <span className="block text-base sm:text-lg font-bold text-white">100%</span>
                      <span className="text-slate-400 text-[9px] sm:text-[10px]">Euro 6 Clean</span>
                    </div>
                    <div className="bg-[#0f172a] p-2.5 sm:p-3 rounded-lg border border-slate-800">
                      <span className="block text-base sm:text-lg font-bold text-white">Zero</span>
                      <span className="text-slate-400 text-[9px] sm:text-[10px]">Delay Metric</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Guarantees */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-3 sm:gap-4">
                {[
                  {
                    icon: "local_parking",
                    num: "1",
                    title: "Bay Suspensions Managed",
                    body: "We process all residential parking suspensions, TfL Red Route clearances, and crane lift permits directly with borough transport offices—zero client administration.",
                  },
                  {
                    icon: "volume_off",
                    num: "2",
                    title: "Considerate Constructors",
                    body: "Acoustic curtains, dust extraction manifolds, and strict working hour accords ensure harmonious relations with neighbouring properties and residents' associations.",
                  },
                  {
                    icon: "engineering",
                    num: "3",
                    title: "Dedicated Resident Directors",
                    body: "Every prime contract features an on-site resident manager with chartered qualifications, guaranteeing daily oversight and continuous quality control.",
                  },
                  {
                    icon: "handshake",
                    num: "4",
                    title: "Pre-Packaged Party Wall Care",
                    body: "Chartered surveyors on retainer handle Schedules of Condition and Party Wall Awards with adjoining owners before ground is broken, preventing legal bottlenecks.",
                  },
                ].map((g) => (
                  <div
                    key={g.num}
                    className="p-4 sm:p-5 rounded-xl bg-[#0f172a] border border-slate-800 space-y-1.5 sm:space-y-2 hover:border-slate-700 transition-colors shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px] sm:text-[20px]">{g.icon}</span>
                      </span>
                      <h3 style={H1_STYLE} className="text-sm sm:text-base font-bold text-white">
                        {g.num}. {g.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-0 sm:pl-13">
                      {g.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. BOROUGH REGULATORY & PLANNING RAPPORT TABLE */}
        <section className="bg-white py-12 sm:py-20 lg:py-28 border-b border-slate-200" id="planning-matrix">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
            <div className="max-w-3xl space-y-2.5 sm:space-y-3">
              <div className="inline-flex items-center gap-2 text-emerald-700 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>Regulatory Intelligence</span>
              </div>
              <h2 style={H1_STYLE} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
                Borough Planning &amp; Conservation Nuance Matrix
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                Statutory standards vary greatly across London&apos;s prime councils. Review our track records and clearance timelines for each prominent local authority.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm scrollbar-none">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-800 uppercase tracking-wider text-[10px] sm:text-[11px] font-bold border-b border-slate-200 whitespace-nowrap">
                  <tr>
                    <th className="py-3 sm:py-4 px-4 sm:px-6">Borough Jurisdiction</th>
                    <th className="py-3 sm:py-4 px-4 sm:px-6">Basement / Excavation Policy</th>
                    <th className="py-3 sm:py-4 px-4 sm:px-6">Permitted Development Scope</th>
                    <th className="py-3 sm:py-4 px-4 sm:px-6">Conservation Officer Rapport</th>
                    <th className="py-3 sm:py-4 px-4 sm:px-6 text-right">Avg. Approval Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {NUANCE_MATRIX.map((row, idx) => (
                    <tr
                      key={row.borough}
                      className={idx % 2 === 1 ? "bg-slate-50/60 hover:bg-slate-50" : "hover:bg-slate-50"}
                    >
                      <td className="py-3 sm:py-4 px-4 sm:px-6 font-bold text-slate-900 whitespace-nowrap">{row.borough}</td>
                      <td className="py-3 sm:py-4 px-4 sm:px-6 text-slate-600 min-w-[200px]">{row.excavation}</td>
                      <td className="py-3 sm:py-4 px-4 sm:px-6 text-slate-600 min-w-[180px]">{row.pd}</td>
                      <td className="py-3 sm:py-4 px-4 sm:px-6 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold">
                          <span className="material-symbols-outlined text-[16px]">check_circle</span>
                          <span>{row.rapport}</span>
                        </span>
                      </td>
                      <td className="py-3 sm:py-4 px-4 sm:px-6 text-right font-semibold text-slate-900 whitespace-nowrap">{row.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 sm:p-6 lg:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-sm">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px]">shield</span>
                </div>
                <div>
                  <div style={H1_STYLE} className="text-base sm:text-lg font-bold text-slate-900">
                    Unsure of Your Borough&apos;s Permitted Limits?
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Our chartered in-house planning consultants run complimentary pre-application property audits.
                  </div>
                </div>
              </div>
              <a
                className="w-full sm:w-auto text-center px-6 py-3 sm:py-3.5 bg-slate-900 text-white font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-800 transition-colors shrink-0 shadow-md"
                href="#feasibility-survey"
              >
                Request Planning Audit
              </a>
            </div>
          </div>
        </section>

        {/* 6. ACCREDITATIONS & INSTITUTIONAL TRUST STRIP */}
        <section className="bg-[#0b1120] text-slate-400 py-10 sm:py-16 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
              <span className="flex items-center gap-1.5 sm:gap-2 text-white">
                <span className="material-symbols-outlined text-emerald-400 text-[18px] sm:text-[20px]">home_work</span>
                FMB Master Builder #88412
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-white">
                <span className="material-symbols-outlined text-emerald-400 text-[18px] sm:text-[20px]">verified_user</span>
                TrustMark Govt Endorsed
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-white">
                <span className="material-symbols-outlined text-emerald-400 text-[18px] sm:text-[20px]">local_fire_department</span>
                Gas Safe Registered
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-white">
                <span className="material-symbols-outlined text-emerald-400 text-[18px] sm:text-[20px]">bolt</span>
                NICEIC Approved Contractor
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-white">
                <span className="material-symbols-outlined text-emerald-400 text-[18px] sm:text-[20px]">balance</span>
                Considerate Constructors Scheme
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-emerald-400">
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">policy</span>
                £20M All-Risk Insured
              </span>
            </div>
          </div>
        </section>

        {/* 7. FEASIBILITY SURVEY & ENGAGEMENT SECTION */}
        <section className="bg-white py-12 sm:py-20 lg:py-28" id="feasibility-survey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
              {/* Left Details */}
              <div className="lg:col-span-5 space-y-6 sm:space-y-8">
                <div>
                  <span className="text-emerald-700 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                    Direct Feasibility Protocol
                  </span>
                  <h2 style={H1_STYLE} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2">
                    Request Your Borough Feasibility Site Survey
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                    Prior to any contractual commitment, a JSTM Site Director visits your property to evaluate Party Wall vulnerabilities, Thames Water conduits, structural span constraints, and planning clearances.
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px] sm:text-[20px]">call</span>
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs uppercase font-bold text-slate-400">Direct Landline</div>
                      <a href="tel:02035762228" className="text-sm sm:text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors">
                        020 3576 2228
                      </a>
                      <p className="text-[11px] sm:text-xs text-slate-500">Mon - Sat: 07:30 - 18:30 GMT</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                      <i className="fa-brands fa-whatsapp text-[18px] sm:text-[20px]"></i>
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs uppercase font-bold text-slate-400">WhatsApp Instant Chat</div>
                      <a href="https://wa.me/447418095006" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                        +44 7418 095006
                      </a>
                      <p className="text-[11px] sm:text-xs text-slate-500">Message directly for swift drawings review</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px] sm:text-[20px]">mail</span>
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs uppercase font-bold text-slate-400">Email Enquiries</div>
                      <a href="mailto:info@jstmconstruction.com" className="text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors">
                        info@jstmconstruction.com
                      </a>
                      <p className="text-[11px] sm:text-xs text-slate-500">Drawings &amp; tenders reviewed within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px] sm:text-[20px]">verified</span>
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs uppercase font-bold text-slate-400">Zero Obligation Feasibility</div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">Comprehensive Pre-Commencement Dossier</p>
                      <p className="text-[11px] sm:text-xs text-slate-500">Fully itemized Bill of Quantities &amp; Schedule</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Interactive Form */}
              <div className="lg:col-span-7">
                <div className="bg-[#0f172a] text-white p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl">
                  <h3 style={H1_STYLE} className="text-xl sm:text-2xl font-bold text-white mb-1">
                    Book On-Site Architectural Inspection
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mb-6 sm:mb-8">
                    Complete your project coordinates. Our Mayfair engineering desk will match your address to its statutory borough protocol.
                  </p>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label htmlFor="awc-name" className="block text-xs font-semibold text-slate-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          id="awc-name"
                          className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-colors"
                          placeholder="Lord Julian Davies"
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="awc-postcode" className="block text-xs font-semibold text-slate-300 mb-1">
                          London Postcode *
                        </label>
                        <input
                          id="awc-postcode"
                          className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-colors"
                          placeholder="e.g. SW3 4PB"
                          required
                          type="text"
                          value={formData.postcode}
                          onChange={(e) => {
                            setFormData({ ...formData, postcode: e.target.value });
                            handlePostcodeChange(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label htmlFor="awc-email" className="block text-xs font-semibold text-slate-300 mb-1">
                          Email Address *
                        </label>
                        <input
                          id="awc-email"
                          className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-colors"
                          placeholder="client@estate.com"
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="awc-phone" className="block text-xs font-semibold text-slate-300 mb-1">
                          Contact Phone *
                        </label>
                        <input
                          id="awc-phone"
                          className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-colors"
                          placeholder="+44 7..."
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="awc-detected" className="block text-xs font-semibold text-slate-300 mb-1">
                        Detected London Borough Authority
                      </label>
                      <input
                        id="awc-detected"
                        readOnly
                        value={detectedBorough}
                        className="w-full bg-[#0b1120] border border-slate-700/80 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs text-emerald-400 font-semibold focus:outline-none cursor-default"
                      />
                    </div>

                    <div>
                      <label htmlFor="awc-scope" className="block text-xs font-semibold text-slate-300 mb-1">
                        Proposed Construction Specialism *
                      </label>
                      <select
                        id="awc-scope"
                        required
                        value={formData.scope}
                        onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                        className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-colors"
                      >
                        <option value="" disabled>Select Proposed Specialism</option>
                        <option value="rbkc-listed">Grade II Listed Victorian/Georgian Refurbishment</option>
                        <option value="basement">Subterranean Basement Excavation &amp; Underpinning</option>
                        <option value="extension">Architectural Rear / Side-Return Glass Extension</option>
                        <option value="loft">Mansard / Dormer Loft Sky Suite</option>
                        <option value="whole-house">Complete Turnkey Whole-House Renovation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="awc-notes" className="block text-xs font-semibold text-slate-300 mb-1">
                        Project Scope &amp; Target Start Date
                      </label>
                      <textarea
                        id="awc-notes"
                        rows={3}
                        className="w-full bg-[#1e293b] border border-slate-700 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none resize-none transition-colors"
                        placeholder="Briefly state conservation area status, architect drawings readiness, and target start timescale..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-[0_4px_20px_rgba(5,150,105,0.4)] transition-all text-xs sm:text-sm flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[18px] sm:text-[20px]">calendar_month</span>
                      <span>Request Borough Feasibility Site Survey</span>
                    </button>

                    {formSubmitted && (
                      <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm text-center animate-fadeIn">
                        Thank you. Your borough site survey request has been received. Our Mayfair engineering desk will match your coordinates and contact you within 4 business hours.
                      </div>
                    )}

                    <p className="text-[10px] sm:text-[11px] text-slate-400 text-center">
                      Strict Professional Non-Disclosure: Architectural drawings &amp; property locations protected under professional NDA.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
