"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Category = "all" | "extensions" | "lofts" | "refurbishments" | "kitchens-bathrooms" | "roofing-structural" | "flooring-tiling" | "painting-decorating" | "general-building";

interface Service { id: string; num: string; badge: string; duration: string; icon: string; title: string; description: string; deliverables: string[]; price: string; image: string; category: Category; }

const SERVICES: Service[] = [
  { id:"01",num:"01",badge:"EXTENSION",duration:"10–16 Weeks",icon:"architecture",title:"House Extensions",description:"Rear, side-return, and wrap-around extensions designed to create bright, open-plan living space for your family.",deliverables:["Structural steel beam installation & solid foundations","Bi-fold doors, sliding glass doors & rooflights","Planning permission & Party Wall agreement support"],price:"From £58,000 + VAT",image:"/assets/images/services-balanced/01-extension.jpg",category:"extensions" },
  { id:"02",num:"02",badge:"ROOF SPACE",duration:"8–12 Weeks",icon:"roofing",title:"Loft Conversions",description:"Dormer, mansard, and hip-to-gable loft conversions tailored to maximize headroom and add spacious new bedrooms and bathrooms.",deliverables:["Bespoke matching staircases, banisters & spindles","Master bedrooms with en-suite bathrooms & insulation","Permitted Development & planning application handling"],price:"From £52,000 + VAT",image:"/assets/images/services-balanced/02-loft.jpg",category:"lofts" },
  { id:"03",num:"03",badge:"TURNKEY RESTORATION",duration:"16–26 Weeks",icon:"apartment",title:"Full Property Refurbishments",description:"Complete interior and exterior renovations for houses and flats. Layout changes, structural remodeling, and modern upgrades throughout.",deliverables:["Full electrical rewiring, new plumbing & heating systems","Soundproofing, subfloor leveling & insulation","Sash window restoration & energy efficiency upgrades"],price:"From £110,000 + VAT",image:"/assets/images/services-balanced/03-refurb.jpg",category:"refurbishments" },
  { id:"04",num:"04",badge:"BESPOKE JOINERY",duration:"4–8 Weeks",icon:"countertops",title:"Kitchen & Bathroom Renovations",description:"Bespoke fitted kitchens, luxury bathrooms, and walk-in wet rooms built to your personal taste and lifestyle.",deliverables:["Quartz, marble, and granite worktop installation","Waterproof walk-in showers & underfloor heating","Custom kitchen cabinets, islands & appliance fitting"],price:"From £24,000 + VAT",image:"/assets/images/services-balanced/04-kitchen.jpg",category:"kitchens-bathrooms" },
  { id:"05",num:"05",badge:"STRUCTURAL RIGOUR",duration:"3–7 Weeks",icon:"carpenter",title:"Roofing & Structural Work",description:"Structural wall removals, steel beam installations, chimney breast removals, and new slate or flat roof installations.",deliverables:["Load-bearing wall removal & steel beam installation","Pitched slate & tile re-roofing with lead flashings","Durable GRP fibreglass flat roofs with long warranties"],price:"From £16,500 + VAT",image:"/assets/images/services-balanced/05-roofing.jpg",category:"roofing-structural" },
  { id:"06",num:"06",badge:"PRECISION SURFACES",duration:"2–4 Weeks",icon:"grid_view",title:"Flooring & Tiling",description:"Professional installation of engineered wood, herringbone parquet, porcelain tiles, and warm underfloor heating.",deliverables:["Herringbone, chevron & wide plank wood flooring","Large-format porcelain, ceramic & marble tiling","Subfloor leveling screed & underfloor heating systems"],price:"From £95 / m² + Materials",image:"/assets/images/services-balanced/06-flooring.jpg",category:"flooring-tiling" },
  { id:"07",num:"07",badge:"FINE FINISHES",duration:"2–5 Weeks",icon:"format_paint",title:"Painting & Decorating",description:"Interior and exterior decorating, smooth plastering, spray finishes, and period woodwork restoration.",deliverables:["High-quality paints including Farrow & Ball and Little Greene","Dust-free surface preparation and spray woodwork finishes","Restoration of ceiling roses, cornices & plaster mouldings"],price:"From £8,500 + VAT",image:"/assets/images/services-balanced/07-painting.jpg",category:"painting-decorating" },
  { id:"08",num:"08",badge:"FABRICATION & MASONRY",duration:"Project Specific",icon:"handyman",title:"General Building & Joinery",description:"Bespoke joinery, fitted wardrobes, brickwork repairs, damp proofing, and general building services by certified tradesmen.",deliverables:["Custom fitted wardrobes, alcove shelving & internal doors","Brickwork repointing, brick matching & chimney repairs","Damp proofing treatments & foundation works"],price:"Bespoke Quotation",image:"/assets/images/services-balanced/08-joinery.jpg",category:"general-building" },
];

const FILTERS: { label: string; value: Category }[] = [
  { label: "All Services", value: "all" },
  { label: "House Extensions", value: "extensions" },
  { label: "Loft Conversions", value: "lofts" },
  { label: "Full Refurbishments", value: "refurbishments" },
  { label: "Kitchens & Bathrooms", value: "kitchens-bathrooms" },
  { label: "Roofing & Structural", value: "roofing-structural" },
  { label: "Flooring & Tiling", value: "flooring-tiling" },
  { label: "Painting & Decorating", value: "painting-decorating" },
  { label: "General Building", value: "general-building" },
];

const TIERS = [
  { label:"Tier 01",duration:"4–6 Weeks",title:"Room / Single Floor Renovation",description:"Ideal for master bedroom upgrades, kitchen renovations, luxury wet rooms, or new flooring throughout.",price:"£18,500",features:["Electrical & plumbing rewiring","Subfloor preparation & new flooring","Dedicated Project Manager"],cta:"Get a Free Quote",h:false },
  { label:"Tier 02",duration:"10–14 Weeks",title:"House Extension / Loft Conversion",description:"Rear or side-return extensions, structural steel frames, or complete dormer/mansard loft conversions.",price:"£55,000",features:["Structural steel & engineer sign-off","Bi-fold doors & rooflights included","Building Control & planning support","10-Year Insurance Backed Guarantee"],cta:"Book a Free Survey",h:true },
  { label:"Tier 03",duration:"18–26 Weeks",title:"Complete House Renovation",description:"Full property transformation combining extensions, lofts, layout changes, and premium finishes throughout.",price:"£120,000",features:["Complete layout redesign & wall removals","Custom fitted kitchen & luxury bathrooms","Dedicated full-time Project Manager","Complete new plumbing & electrical systems"],cta:"Book a Consultation",h:false },
];

const BOROUGHS = ["Kensington & Chelsea","Westminster & Mayfair","Hammersmith & Fulham","Wandsworth & Battersea","Richmond upon Thames","Islington & Highbury","Camden & Hampstead","Wimbledon & Putney","St John's Wood"];

const STEPS = [
  { num:"01",icon:"search_insights",title:"Feasibility & Survey",body:"We visit your property for a detailed survey, review planning permission rules, check Party Wall requirements, and assess feasibility.",ms:"Clear Feasibility & Cost Assessment" },
  { num:"02",icon:"draw",title:"Specification & Costing",body:"Fully itemized quote with clear scope of works, structural engineer plans, realistic timelines, and an agreed fixed-price contract.",ms:"Agreed Fixed-Price Contract" },
  { num:"03",icon:"construction",title:"Construction & Build",body:"Hands-on daily management by your dedicated project manager. Qualified Gas Safe and NICEIC tradespeople on site with weekly progress updates.",ms:"Weekly Progress Updates" },
  { num:"04",icon:"task_alt",title:"Final Inspection & Handover",body:"Thorough quality checks, Local Authority Building Control completion certificate, and your 10-year insurance-backed warranty pack.",ms:"Completion Certificate & 10-Yr Warranty" },
];

const BADGES = [
  { icon:"workspace_premium",title:"Federation of Master Builders",sub:"Verified Member #88412",amber:false },
  { icon:"local_fire_department",title:"Gas Safe Registered",sub:"Certified Heating Engineers",amber:false },
  { icon:"bolt",title:"NICEIC Approved Contractor",sub:"Platinum Electrical Standard",amber:false },
  { icon:"policy",title:"TrustMark Endorsed",sub:"Government Verified Quality",amber:false },
  { icon:"star",title:"4.9 / 5.0 Rating",sub:"Trustpilot Verified Reviews",amber:true },
];

const H1_STYLE = { fontFamily: "'Plus Jakarta Sans', sans-serif" };
const INPUT_CLS = "w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-[15px] text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500";

export default function ServicesPage() {
  const [cat, setCat] = useState<Category>("all");
  const svcs = cat === "all" ? SERVICES : SERVICES.filter(s => s.category === cat);

  return (
    <div className="bg-[#0b1120] text-slate-800 antialiased selection:bg-emerald-500 selection:text-white min-h-screen">
      <Header currentPage="services" />
      <main className="w-full bg-[#0b1120]">
        <div className="flex flex-col w-full">

          {/* HERO */}
          <div className="relative w-full bg-[#0b1120] overflow-hidden border-b border-slate-800/80">
            <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-80 left-10 w-[550px] h-[550px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />
            <section className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 pt-8 sm:pt-10 pb-12 sm:pb-16">
              <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
                <nav className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-400">
                  <Link href="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1"><span className="material-symbols-outlined text-[14px] sm:text-[15px]">home</span> Home</Link>
                  <span>/</span><span className="text-white font-semibold">Our Building Services</span>
                </nav>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-900/90 border border-emerald-500/30 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-slate-300 shadow-inner">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                  <span className="text-[9px] sm:text-[11px] font-semibold tracking-wider uppercase text-emerald-300">PROFESSIONAL RESIDENTIAL BUILDING SERVICES ACROSS LONDON</span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-14">
                <div className="lg:col-span-8 space-y-3.5 sm:space-y-5">
                  <h1 style={H1_STYLE} className="text-[26px] sm:text-[38px] md:text-[48px] lg:text-[56px] leading-[1.15] sm:leading-[1.1] lg:leading-[64px] tracking-[-0.03em] font-bold text-white">High-Quality Building, Renovation &amp; Extension Services in London</h1>
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-slate-300 max-w-3xl">From house extensions and loft conversions to complete home renovations and structural works. We deliver exceptional craftsmanship, fixed-price quotes, and reliable service across London.</p>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 justify-end">
                  <a href="#book-survey" className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-[13px] sm:text-[14px] font-semibold px-5 py-3 sm:px-6 sm:py-4 rounded-lg shadow-[0_4px_20px_rgba(5,150,105,0.4)] transition-all duration-150 text-center">
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]">calendar_today</span><span>Book a Free Site Survey</span>
                  </a>
                  <button type="button" onClick={() => alert("Downloading JSTM Services & Specifications Guide (PDF) - 2025 Edition")} className="inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-[13px] sm:text-[14px] font-semibold px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg transition-all duration-150 text-center">
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-emerald-400">download</span><span>Download Services &amp; Pricing Guide (PDF)</span>
                  </button>
                </div>
              </div>
              <div className="w-full bg-[#0f172a] border border-slate-800 rounded-xl shadow-xl p-4 sm:p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[{icon:"verified_user",t:"10-Year Warranty",s:"Insurance-backed policy"},{icon:"workspace_premium",t:"FMB Master Builder",s:"Verified & TrustMark cert"},{icon:"engineering",t:"Dedicated Site Manager",s:"Daily on-site management"},{icon:"request_quote",t:"Fixed-Price Quotes",s:"No hidden surprises"}].map(g=>(
                  <div key={g.t} className="flex items-center gap-2.5 sm:gap-3.5">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0"><span className="material-symbols-outlined text-[20px] sm:text-[24px]">{g.icon}</span></div>
                    <div><span className="text-xs sm:text-sm font-bold text-white block">{g.t}</span><span className="text-[11px] sm:text-[13px] text-slate-400">{g.s}</span></div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* FILTER NAV */}
          <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 py-3 overflow-x-auto">
              <div className="flex items-center gap-2 min-w-max">
                {FILTERS.map(btn=>(
                  <button key={btn.value} type="button" onClick={()=>setCat(btn.value)} className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[12px] sm:text-[14px] font-semibold transition-all duration-150 border ${cat===btn.value?"bg-emerald-600 text-white shadow-sm border-emerald-600":"bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border-slate-200"}`}>{btn.label}</button>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICE CARDS */}
          <section className="w-full bg-[#f8fafc] py-14 sm:py-20 border-b border-slate-200">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-700 uppercase tracking-widest block mb-1">Our Services</span>
                  <h2 style={H1_STYLE} className="text-[22px] sm:text-[32px] md:text-[40px] leading-[1.2] sm:leading-[48px] tracking-[-0.02em] font-bold text-slate-900">Expert Building Services for Every Project</h2>
                </div>
                <p className="text-[13px] sm:text-[15px] text-slate-600 max-w-md leading-relaxed">Every project is managed with care, transparent pricing, and guaranteed quality from start to finish.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {svcs.map(svc=>(
                  <article key={svc.id} className="flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-600/50 transition-all duration-300">
                    <div className="relative h-52 sm:h-64 w-full overflow-hidden bg-slate-100">
                      <Image src={svc.image} alt={svc.title} fill className="object-cover" sizes="(max-width:768px) 100vw,50vw" />
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-slate-950/85 backdrop-blur-md text-white border border-slate-800 px-2.5 sm:px-3 py-1 rounded-md text-[10px] sm:text-[11px] font-semibold tracking-wider flex items-center gap-1.5"><span className="text-emerald-400 font-bold">{svc.num}</span> / {svc.badge}</div>
                      <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-slate-950/85 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-md text-slate-200 border border-slate-800 text-[10px] sm:text-[11px] font-semibold">{svc.duration}</div>
                    </div>
                    <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between">
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0"><span className="material-symbols-outlined text-[20px] sm:text-[24px]">{svc.icon}</span></div>
                          <h3 className="text-[18px] sm:text-[20px] font-bold text-slate-900">{svc.title}</h3>
                        </div>
                        <p className="text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">{svc.description}</p>
                        <div className="pt-2">
                          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-emerald-700 font-bold block mb-2 sm:mb-2.5">Key Deliverables</span>
                          <ul className="space-y-2 text-[12px] sm:text-[13px] text-slate-600">
                            {svc.deliverables.map((d,i)=>(
                              <li key={i} className="flex items-start gap-2"><span className="material-symbols-outlined text-emerald-600 text-[16px] sm:text-[18px] shrink-0 mt-0.5">check_circle</span><span>{d}</span></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 sm:mt-8 pt-4 bg-slate-50 border border-slate-200 rounded-lg p-3.5 sm:p-4 flex items-center justify-between">
                        <div><span className="text-[10px] uppercase text-slate-500 font-bold block">Guide Price</span><span className="text-xs sm:text-sm font-bold text-slate-900">{svc.price}</span></div>
                        <a href="#book-survey" className="text-emerald-700 hover:text-emerald-800 text-[13px] sm:text-[14px] font-semibold inline-flex items-center gap-1 transition-colors">Get a Quote <span className="material-symbols-outlined text-[15px] sm:text-[16px]">arrow_forward</span></a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 4-STAGE STANDARD */}
          <section className="w-full bg-[#0b1120] border-y border-slate-800/80 py-14 sm:py-24 relative overflow-hidden text-white">
            <div className="absolute top-1/2 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
              <div className="max-w-3xl mb-10 sm:mb-14">
                <div className="inline-flex items-center gap-2 bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 px-3 py-1 rounded-md text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold mb-2 sm:mb-3">How We Work</div>
                <h2 style={H1_STYLE} className="text-[22px] sm:text-[32px] md:text-[40px] leading-[1.2] sm:leading-[48px] tracking-[-0.02em] font-bold text-white">Our 4-Step Process: From Initial Survey to Handover</h2>
                <p className="text-[13px] sm:text-[15px] text-slate-300 mt-2 sm:mt-3 leading-relaxed">We keep your project organized, transparent, and on schedule at every step.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {STEPS.map(s=>(
                  <div key={s.num} className="bg-[#0f172a] border border-slate-800 rounded-xl flex flex-col justify-between overflow-hidden shadow-lg hover:border-slate-700 transition-colors">
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center justify-between mb-4 sm:mb-6"><span className="text-[28px] sm:text-[40px] font-black text-emerald-400/30">{s.num}</span><span className="material-symbols-outlined text-emerald-400 text-[24px] sm:text-[28px]">{s.icon}</span></div>
                      <h3 className="text-[17px] sm:text-[20px] font-bold text-white mb-2 sm:mb-3">{s.title}</h3>
                      <p className="text-[12px] sm:text-[13px] text-slate-400 leading-relaxed">{s.body}</p>
                    </div>
                    <div className="p-3.5 sm:p-4 bg-slate-900 border-t border-slate-800/80 text-[10px] sm:text-[11px] text-emerald-400 font-medium">Milestone: {s.ms}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* INVESTMENT TIERS */}
          <section className="w-full bg-[#f8fafc] py-14 sm:py-20 border-b border-slate-200">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
              <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                <span className="text-[10px] sm:text-[11px] font-bold text-emerald-700 uppercase tracking-widest block mb-1">Pricing Guide</span>
                <h2 style={H1_STYLE} className="text-[22px] sm:text-[32px] md:text-[40px] leading-[1.2] sm:leading-[48px] tracking-[-0.02em] font-bold text-slate-900">Estimated Starting Costs &amp; Packages</h2>
                <p className="text-[13px] sm:text-[15px] text-slate-600 mt-2 leading-relaxed">Guide prices based on recent London home extensions, lofts, and refurbishment projects.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                {TIERS.map(t=>(
                  <div key={t.label} className={`relative rounded-xl p-5 sm:p-8 flex flex-col justify-between shadow-sm transition-shadow ${t.h?"bg-white border-2 border-emerald-600 shadow-xl ring-1 ring-emerald-600/20 md:-translate-y-2":"bg-white border border-slate-200 hover:shadow-md"}`}>
                    {t.h&&<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] sm:text-[11px] px-3.5 py-0.5 sm:px-4 sm:py-1 rounded-full uppercase tracking-wider font-bold shadow-md">Most Requested</div>}
                    <div>
                      <div className={`flex justify-between items-center mb-3 sm:mb-4 ${t.h?"mt-2":""}`}>
                        <span className={`text-[10px] sm:text-[11px] uppercase tracking-wider font-bold ${t.h?"text-emerald-700":"text-slate-500"}`}>{t.label}</span>
                        <span className={`text-[10px] sm:text-[11px] px-2.5 py-0.5 sm:py-1 rounded font-semibold ${t.h?"bg-emerald-50 border border-emerald-200 text-emerald-700":"bg-slate-100 border border-slate-200 text-slate-600"}`}>{t.duration}</span>
                      </div>
                      <h3 className="text-[18px] sm:text-[20px] font-bold text-slate-900 mb-1.5 sm:mb-2">{t.title}</h3>
                      <p className="text-[12px] sm:text-[13px] text-slate-600 mb-4 sm:mb-6 leading-relaxed">{t.description}</p>
                      <div className="mb-4 sm:mb-6">
                        <span className="text-[11px] sm:text-[13px] text-slate-500 block">Starting from</span>
                        <div className={`text-[28px] sm:text-[40px] font-bold leading-tight sm:leading-[48px] ${t.h?"text-emerald-700":"text-slate-900"}`}>{t.price}<span className="text-sm sm:text-base font-normal text-slate-500"> + VAT</span></div>
                      </div>
                      <ul className={`space-y-2 sm:space-y-2.5 text-[12px] sm:text-[13px] mb-6 sm:mb-8 ${t.h?"text-slate-700":"text-slate-600"}`}>
                        {t.features.map(f=><li key={f} className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-600 text-[16px] sm:text-[18px]">check</span>{f}</li>)}
                      </ul>
                    </div>
                    <a href="#book-survey" className={`w-full text-center text-[13px] sm:text-[14px] font-semibold py-2.5 sm:py-3 rounded-lg transition-colors block ${t.h?"bg-emerald-600 hover:bg-emerald-500 text-white shadow-md":"bg-slate-900 hover:bg-slate-800 text-white"}`}>{t.cta}</a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BOROUGH COVERAGE */}
          <section className="w-full bg-white py-12 sm:py-16 border-b border-slate-200">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-700 uppercase tracking-widest block">Areas We Cover</span>
                  <h2 style={H1_STYLE} className="text-[22px] sm:text-[32px] md:text-[40px] leading-[1.2] sm:leading-[48px] tracking-[-0.02em] font-bold text-slate-900">Delivering Quality Building Projects Across London</h2>
                  <p className="text-[13px] sm:text-[15px] text-slate-600 leading-relaxed">Our teams work across all London boroughs, handling local planning rules, building control, and site logistics with ease.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
                    {BOROUGHS.map(b=><div key={b} className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-2.5 sm:p-3 rounded-lg text-slate-700 text-xs sm:text-sm hover:border-emerald-500/40 transition-colors"><span className="material-symbols-outlined text-emerald-600 text-[16px] sm:text-[18px]">location_on</span>{b}</div>)}
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden shadow-md border border-slate-200 relative bg-slate-100">
                    <Image src="/assets/images/services-balanced/map-mayfair.jpg" alt="JSTM Central Operations - Mayfair, London" fill className="object-cover" sizes="(max-width:1024px) 100vw,41vw" />
                    <div className="absolute inset-0 bg-slate-900/20" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/95 border border-slate-200 backdrop-blur-md p-3 sm:p-4 rounded-lg flex items-center justify-between shadow-lg">
                      <div><span className="text-xs sm:text-sm font-bold text-slate-900 block">Central Operations Office</span><span className="text-[11px] sm:text-xs text-slate-500">Suite A204 Vista Centre, 50 Salisbury Rd, Cranford, Hounslow TW4 6JQ</span></div>
                      <div className="relative flex items-center justify-center shrink-0 ml-2"><div className="w-3 h-3 rounded-full bg-emerald-600" /><div className="absolute w-5 h-5 rounded-full bg-emerald-600/40 animate-ping" /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
                  {BADGES.map(b=>(
                    <div key={b.title} className="flex items-center gap-2.5 sm:gap-3">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 ${b.amber?"bg-amber-50 border border-amber-200 text-amber-600":"bg-emerald-50 border border-emerald-200 text-emerald-700"}`}><span className="material-symbols-outlined text-[20px] sm:text-[24px]">{b.icon}</span></div>
                      <div><span className="text-xs sm:text-sm font-bold text-slate-900 block">{b.title}</span><span className="text-[11px] sm:text-xs text-slate-500">{b.sub}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CONSULTATION FORM */}
          <section id="book-survey" className="w-full bg-[#0b1120] py-14 sm:py-24 text-white border-b border-slate-800">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-6 sm:space-y-8">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">Get Started</span>
                    <h2 style={H1_STYLE} className="text-[22px] sm:text-[32px] md:text-[40px] leading-[1.2] sm:leading-[48px] tracking-[-0.02em] font-bold text-white">Book Your Free Site Survey &amp; Quote</h2>
                    <p className="text-[13px] sm:text-[15px] text-slate-300 mt-2 sm:mt-3 leading-relaxed">Speak with our experienced building team. We'll visit your property, assess feasibility, and provide clear advice and estimated costs with no obligation.</p>
                  </div>
                  <div className="bg-[#0f172a] border border-slate-800 p-5 sm:p-8 rounded-xl shadow-lg space-y-5 sm:space-y-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(5,150,105,0.4)] shrink-0"><span className="material-symbols-outlined text-[22px] sm:text-[26px]">apartment</span></div>
                      <div><span className="text-[16px] sm:text-[20px] font-bold text-white block">JST Construction HQ</span><span className="text-[12px] sm:text-[13px] text-slate-400">Suite A204 Vista Centre, 50 Salisbury Rd, Cranford, Hounslow TW4 6JQ</span></div>
                    </div>
                    <div className="space-y-3 text-[13px] sm:text-[15px] text-slate-200">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-emerald-400 text-[18px] sm:text-[20px]">phone</span>
                        <a href="tel:02035762228" className="font-semibold text-white hover:text-emerald-400 transition-colors">020 3576 2228</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <i className="fa-brands fa-whatsapp text-emerald-400 text-[16px] sm:text-[18px]"></i>
                        <a href="https://wa.me/447418095006" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-400 hover:text-emerald-300 transition-colors">+44 7418 095006 (WhatsApp)</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-emerald-400 text-[18px] sm:text-[20px]">mail</span>
                        <a href="mailto:info@jstmconstruction.com" className="text-white hover:text-emerald-400 transition-colors">info@jstmconstruction.com</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-emerald-400 text-[18px] sm:text-[20px]">schedule</span>
                        <span className="text-slate-400">Mon – Sat: 07:30 – 18:30 GMT</span>
                      </div>
                    </div>
                    <div className="pt-3 sm:pt-4 bg-slate-900 border border-slate-800 rounded-lg p-3.5 sm:p-4 text-[12px] sm:text-[13px] text-slate-300">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1"><span className="material-symbols-outlined text-[16px] sm:text-[18px]">verified</span><span>Fast Response: Within 4 Business Hours</span></div>
                      All enquiries are reviewed by our senior building team before your free site visit is scheduled.
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 bg-[#0f172a] border border-slate-800 p-5 sm:p-8 md:p-10 rounded-xl shadow-xl">
                  <form className="space-y-4 sm:space-y-6" onSubmit={e=>{e.preventDefault();alert("Thank you. Your consultation request has been received. A JSTM Site Director will contact you within 4 hours.");}}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
                      <div className="space-y-1.5 sm:space-y-2"><label htmlFor="sb-name" className="block text-[13px] sm:text-[14px] font-semibold text-slate-200">Full Name *</label><input id="sb-name" type="text" required placeholder="e.g. James Smith" className={INPUT_CLS} /></div>
                      <div className="space-y-1.5 sm:space-y-2"><label htmlFor="sb-pc" className="block text-[13px] sm:text-[14px] font-semibold text-slate-200">London Postcode *</label><input id="sb-pc" type="text" required placeholder="e.g. SW3 4PB" className={INPUT_CLS} /></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
                      <div className="space-y-1.5 sm:space-y-2"><label htmlFor="sb-email" className="block text-[13px] sm:text-[14px] font-semibold text-slate-200">Email Address *</label><input id="sb-email" type="email" required placeholder="name@domain.co.uk" className={INPUT_CLS} /></div>
                      <div className="space-y-1.5 sm:space-y-2"><label htmlFor="sb-phone" className="block text-[13px] sm:text-[14px] font-semibold text-slate-200">Direct Telephone *</label><input id="sb-phone" type="tel" required placeholder="+44 7..." className={INPUT_CLS} /></div>
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="sb-svc" className="block text-[13px] sm:text-[14px] font-semibold text-slate-200">Primary Construction Specialism *</label>
                      <select id="sb-svc" required className={INPUT_CLS}>
                        <option value="" disabled>Select from our 8 specialisms...</option>
                        <option value="extensions">01. House Extensions (Rear / Wraparound / Side-Return)</option>
                        <option value="lofts">02. Loft Conversions (Mansard / Dormer / Hip-to-Gable)</option>
                        <option value="refurbishments">03. Full Turnkey Property Refurbishment</option>
                        <option value="kitchens-bathrooms">04. Luxury Kitchen &amp; Bathroom Renovation</option>
                        <option value="roofing-structural">05. Structural Engineering &amp; Slate Roofing</option>
                        <option value="flooring-tiling">06. Hardwood Parquet, Screed &amp; Marble Tiling</option>
                        <option value="painting-decorating">07. Premium Painting &amp; Heritage Plastering</option>
                        <option value="general-building">08. General Building, Joinery &amp; Brickwork</option>
                      </select>
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="sb-scope" className="block text-[13px] sm:text-[14px] font-semibold text-slate-200">Project Scope &amp; Intended Start Date</label>
                      <textarea id="sb-scope" rows={3} placeholder="Tell us about your property, what you want to build, and your target start date..." className={INPUT_CLS} />
                    </div>
                    <div className="pt-2">
                      <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-[13px] sm:text-[14px] font-semibold py-3.5 sm:py-4 rounded-lg shadow-[0_4px_20px_rgba(5,150,105,0.4)] transition-all duration-150 flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[18px] sm:text-[20px]">send</span><span>Book a Free Site Survey</span>
                      </button>
                      <p className="text-[11px] sm:text-xs text-slate-400 text-center mt-3">Your information is strictly confidential and used only to prepare your quote. No marketing third parties.</p>
                    </div>
                  </form>
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