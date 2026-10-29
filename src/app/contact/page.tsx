"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    clientType: "",
    phone: "",
    email: "",
    postcode: "",
    scope: "",
    budget: "tier2",
    targetCommencement: "immediate",
    notes: "",
  });

  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      clientType: "",
      phone: "",
      email: "",
      postcode: "",
      scope: "",
      budget: "tier2",
      targetCommencement: "immediate",
      notes: "",
    });
    setFiles([]);
    setIsSubmitted(false);
  };

  return (
    <div className="bg-[#FAFAF9] text-slate-800 antialiased selection:bg-emerald-500 selection:text-white min-h-screen">
      <Header currentPage="contact" />

      <main className="w-full">
        {/* SECTION 1: Dark Architectural Hero Section */}
        <section className="relative bg-gradient-to-b from-[#0b1120] via-[#060d17] to-[#0f172a] text-white border-b border-slate-800/80 overflow-hidden">
          {/* Subtle Grid and Radial Glow Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24 relative z-10">
            {/* Breadcrumb & Direct Channel Indicator Pill */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <nav className="flex items-center space-x-2 text-[11px] sm:text-xs font-medium text-slate-400">
                <Link className="hover:text-emerald-400 transition-colors" href="/">
                  Home
                </Link>
                <span className="text-slate-600">/</span>
                <span className="text-emerald-400">Contact Us</span>
              </nav>
              <span className="h-4 w-px bg-slate-700/60 hidden sm:block" />
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-900/80 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-emerald-400 border border-emerald-500/30 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>GET IN TOUCH • FAST RESPONSE</span>
              </div>
            </div>

            {/* Main Headline with Typographic Rhythm */}
            <div className="max-w-4xl space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-heading leading-tight">
                Get in Touch For a Free Consultation &amp;{" "}
                <span className="text-emerald-400 underline decoration-emerald-500/40 decoration-2 underline-offset-4 sm:underline-offset-8">
                  Fixed-Price Quote
                </span>
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
                High-quality house extensions, loft conversions, and complete home renovations across London and Surrey. Speak directly with our team to discuss your project.
              </p>
            </div>

            {/* Quick Action Dial & Status Bar */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-6 pt-4 sm:pt-6 border-t border-slate-800">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400">
                  <i className="fa-solid fa-phone text-sm" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Direct Landline
                  </div>
                  <a
                    className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors tracking-tight font-heading"
                    href="tel:02035762228"
                  >
                    020 3576 2228
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400">
                  <i className="fa-brands fa-whatsapp text-base" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    WhatsApp Chat
                  </div>
                  <a
                    className="text-base sm:text-lg font-bold text-emerald-400 hover:text-emerald-300 transition-colors tracking-tight font-heading"
                    href="https://wa.me/447418095006"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +44 7418 095006
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-slate-900/80 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-slate-800 text-xs sm:text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-slate-200 font-medium">
                  Free Site Survey Available
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-slate-900/80 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-slate-800 text-xs sm:text-sm">
                <i className="fa-solid fa-circle-check text-emerald-400 text-base" />
                <span className="text-slate-200 font-medium">
                  JCT &amp; RIBA Contract Certified
                </span>
              </div>
            </div>

            {/* Metric Highlights Cards (Deep Slate Cards) */}
            <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-slate-900/90 rounded-xl p-4 sm:p-5 border border-slate-800/80 backdrop-blur-sm hover:border-emerald-500/40 transition-colors">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-heading">
                  &lt; 24hr
                </div>
                <div className="text-sm sm:text-base text-white mt-1 font-semibold leading-snug">
                  Response Guarantee
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 leading-relaxed hidden sm:block">
                  Prompt enquiry response and expert review of your project drawings and ideas.
                </p>
              </div>

              <div className="bg-slate-900/90 rounded-xl p-4 sm:p-5 border border-slate-800/80 backdrop-blur-sm hover:border-emerald-500/40 transition-colors">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-heading">
                  1-on-1
                </div>
                <div className="text-sm sm:text-base text-white mt-1 font-semibold leading-snug">
                  Direct Communication
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 leading-relaxed hidden sm:block">
                  You will have a dedicated project manager overseeing your build from start to finish.
                </p>
              </div>

              <div className="bg-slate-900/90 rounded-xl p-4 sm:p-5 border border-slate-800/80 backdrop-blur-sm hover:border-emerald-500/40 transition-colors">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-heading">
                  Zero Fee
                </div>
                <div className="text-sm sm:text-base text-white mt-1 font-semibold leading-snug">
                  Site Survey &amp; Quote
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 leading-relaxed hidden sm:block">
                  Free, no-obligation property visit and detailed, itemised fixed-price quotation.
                </p>
              </div>

              <div className="bg-slate-900/90 rounded-xl p-4 sm:p-5 border border-slate-800/80 backdrop-blur-sm hover:border-emerald-500/40 transition-colors">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-heading">
                  Full Privacy
                </div>
                <div className="text-sm sm:text-base text-white mt-1 font-semibold leading-snug">
                  Strict Confidentiality
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 leading-relaxed hidden sm:block">
                  Your drawings, contact information, and property details remain completely private.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Light Mayfair Executive HQ & Tender Submission Split Layout */}
        <section className="bg-slate-50/70 py-10 sm:py-16 lg:py-24 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
              {/* LEFT COLUMN: Executive Consultation Hub & Logistics (5 cols) */}
              <div className="lg:col-span-5 space-y-5 sm:space-y-8">
                <div>
                  <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 inline-block">
                    Our Office
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight font-heading">
                    Contact JSTM Construction
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    We are here to answer your questions, arrange site visits, review drawings, and provide clear quotations.
                  </p>
                </div>

                {/* Contact Channels List */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Physical Location */}
                  <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow transition-shadow flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                      <span className="material-symbols-outlined text-xl sm:text-2xl">apartment</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] sm:text-xs text-slate-500 uppercase font-bold tracking-wider">
                        Office Address
                      </span>
                      <div className="text-sm sm:text-base text-slate-900 font-bold">
                        JST Construction Suite A204, 2nd Floor Vista Centre
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600">
                        50 Salisbury Road, Cranford, Hounslow TW4 6JQ, United Kingdom
                      </div>
                      <div className="pt-1 text-[11px] sm:text-xs text-emerald-700 flex items-center gap-1.5 font-semibold">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        Serving all 32 London Boroughs &bull; Mon - Sat: 07:30 - 18:30 GMT
                      </div>
                    </div>
                  </div>

                  {/* Telephony */}
                  <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow transition-shadow flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                      <span className="material-symbols-outlined text-xl sm:text-2xl">support_agent</span>
                    </div>
                    <div className="space-y-2 w-full">
                      <span className="text-[10px] sm:text-xs text-slate-500 uppercase font-bold tracking-wider">
                        Call or Message Us
                      </span>
                      <div className="flex justify-between items-center text-xs sm:text-sm">
                        <span className="text-slate-600 font-medium">Landline:</span>
                        <a
                          className="font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                          href="tel:02035762228"
                        >
                          020 3576 2228
                        </a>
                      </div>
                      <div className="flex justify-between items-center text-xs sm:text-sm">
                        <span className="text-slate-600 font-medium">WhatsApp:</span>
                        <a
                          className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-1"
                          href="https://wa.me/447418095006"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-whatsapp"></i> +44 7418 095006
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email Dispatches */}
                  <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow transition-shadow flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                      <span className="material-symbols-outlined text-xl sm:text-2xl">mark_email_read</span>
                    </div>
                    <div className="space-y-2 w-full">
                      <span className="text-[10px] sm:text-xs text-slate-500 uppercase font-bold tracking-wider">
                        Email Us
                      </span>
                      <div className="flex flex-col text-xs sm:text-sm">
                        <span className="text-slate-500 text-[11px] sm:text-xs">General Enquiries &amp; Drawings:</span>
                        <a
                          className="font-bold text-emerald-700 hover:underline"
                          href="mailto:info@jstmconstruction.com"
                        >
                          info@jstmconstruction.com
                        </a>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-500 pt-1">
                        Send your plans or photos for a clear quote within 24 hours.
                      </p>
                    </div>
                  </div>

                  {/* Hours & Site Compliance Notice */}
                  <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                      <span className="material-symbols-outlined text-xl sm:text-2xl">event_available</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] sm:text-xs text-slate-500 uppercase font-bold tracking-wider">
                        Working Hours
                      </span>
                      <div className="text-sm sm:text-base text-slate-900 font-bold">
                        Office Hours: Mon - Sat 07:30 - 18:30
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-600 leading-snug">
                        Our sites operate strictly within standard local council working hours (08:00 – 17:00) with clean and considerate conduct.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interactive Map Representation with Directions Card */}
                <div className="bg-white rounded-xl border border-slate-200 p-3 sm:p-4 shadow-sm overflow-hidden">
                  <div className="flex items-center justify-between mb-2 sm:mb-3 px-1">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-600 text-lg sm:text-xl">
                        near_me
                      </span>
                      <span className="text-xs sm:text-sm text-slate-900 font-bold">
                        Location &amp; Access
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-xs text-slate-500">Hounslow &bull; Greater London</span>
                  </div>

                  {/* Map Image Container */}
                  <div className="w-full h-44 sm:h-56 rounded-lg relative overflow-hidden flex items-end p-3 border border-slate-200 group">
                    <Image
                      src="/assets/images/contact/mayfair_map.jpg"
                      alt="Map view near JST Construction Vista Centre Cranford"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="relative z-10 bg-slate-950/90 backdrop-blur-md px-2.5 sm:px-3 py-1.5 sm:py-2 rounded text-white text-[11px] sm:text-xs font-semibold flex items-center gap-2 border border-slate-800 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>JST Construction • Suite A204 Vista Centre</span>
                    </div>
                  </div>

                  {/* Route Details */}
                  <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 text-[11px] sm:text-xs">
                    <div className="bg-slate-100 p-2 sm:p-2.5 rounded text-slate-700 flex items-center gap-1.5 sm:gap-2">
                      <span className="material-symbols-outlined text-sm text-emerald-700">
                        directions_subway
                      </span>
                      <span className="font-medium">Green Park (5 min)</span>
                    </div>
                    <div className="bg-slate-100 p-2 sm:p-2.5 rounded text-slate-700 flex items-center gap-1.5 sm:gap-2">
                      <span className="material-symbols-outlined text-sm text-emerald-700">
                        directions_subway
                      </span>
                      <span className="font-medium">Bond Street (6 min)</span>
                    </div>
                    <div className="bg-slate-100 p-2 sm:p-2.5 rounded text-slate-700 flex items-center gap-1.5 sm:gap-2">
                      <span className="material-symbols-outlined text-sm text-emerald-700">
                        local_parking
                      </span>
                      <span className="font-medium">On-Site Parking Available</span>
                    </div>
                    <div className="bg-slate-100 p-2 sm:p-2.5 rounded text-slate-700 flex items-center gap-1.5 sm:gap-2">
                      <span className="material-symbols-outlined text-sm text-emerald-700">
                        badge
                      </span>
                      <span className="font-medium">Visitor Reception</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: High-Density Project Intake & Tender Form */}
              <div className="lg:col-span-7">
                <div className="bg-white text-slate-900 rounded-2xl p-5 sm:p-8 lg:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
                  {/* Top Emerald Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-700" />

                  <div className="mb-5 sm:mb-8">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                      <span className="material-symbols-outlined text-sm sm:text-base">
                        assignment_turned_in
                      </span>
                      ONLINE ENQUIRY FORM
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
                      Tell Us About Your Project
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      Fill in your details below to request a free site visit or quote. You can also upload plans or photos.
                    </p>
                  </div>

                  {/* Form Body or Success Confirmation */}
                  {!isSubmitted ? (
                    <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                      {/* Name & Role */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-1.5 sm:space-y-2">
                          <label
                            className="block text-[11px] sm:text-xs uppercase tracking-wider text-slate-700 font-bold"
                            htmlFor="name"
                          >
                            Full Name *
                          </label>
                          <input
                            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                            id="name"
                            placeholder="e.g. Sarah Jenkins"
                            required
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                          <label
                            className="block text-[11px] sm:text-xs uppercase tracking-wider text-slate-700 font-bold"
                            htmlFor="clientType"
                          >
                            I Am A... *
                          </label>
                          <select
                            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                            id="clientType"
                            required
                            value={formData.clientType}
                            onChange={handleInputChange}
                          >
                            <option value="">Select Option...</option>
                            <option value="private">Homeowner</option>
                            <option value="architect">Architect / Designer</option>
                            <option value="designer">Interior Architect / Designer</option>
                            <option value="developer">Property Developer / Landlord</option>
                            <option value="qs">Project Manager / Surveyor</option>
                          </select>
                        </div>
                      </div>

                      {/* Contact Coordinates */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-1.5 sm:space-y-2">
                          <label
                            className="block text-[11px] sm:text-xs uppercase tracking-wider text-slate-700 font-bold"
                            htmlFor="phone"
                          >
                            Phone Number *
                          </label>
                          <input
                            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                            id="phone"
                            placeholder="07123 456789"
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                          <label
                            className="block text-[11px] sm:text-xs uppercase tracking-wider text-slate-700 font-bold"
                            htmlFor="email"
                          >
                            Email Address *
                          </label>
                          <input
                            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                            id="email"
                            placeholder="sarah.jenkins@example.co.uk"
                            required
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* Borough & Scope */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-1.5 sm:space-y-2">
                          <label
                            className="block text-[11px] sm:text-xs uppercase tracking-wider text-slate-700 font-bold"
                            htmlFor="postcode"
                          >
                            Postcode / Area *
                          </label>
                          <input
                            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                            id="postcode"
                            placeholder="e.g. SW3, TW4, CR0"
                            required
                            type="text"
                            value={formData.postcode}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                          <label
                            className="block text-[11px] sm:text-xs uppercase tracking-wider text-slate-700 font-bold"
                            htmlFor="scope"
                          >
                            Type of Project *
                          </label>
                          <select
                            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                            id="scope"
                            required
                            value={formData.scope}
                            onChange={handleInputChange}
                          >
                            <option value="">Select Project Type...</option>
                            <option value="extension">House Extension (Rear / Side-Return / Wrap-Around)</option>
                            <option value="basement">Basement Conversion</option>
                            <option value="heritage">Period &amp; Listed Property Refurbishment</option>
                            <option value="loft">Loft Conversion (Dormer / Mansard / Velux)</option>
                            <option value="fitout">Full House Renovation &amp; Refurbishment</option>
                            <option value="commercial">Commercial / Office Fit-Out</option>
                          </select>
                        </div>
                      </div>

                      {/* Financial Envelope & Target Timeline */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-1.5 sm:space-y-2">
                          <label
                            className="block text-[11px] sm:text-xs uppercase tracking-wider text-slate-700 font-bold"
                            htmlFor="budget"
                          >
                            Approximate Budget
                          </label>
                          <select
                            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                            id="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                          >
                            <option value="tier1">Under £50,000</option>
                            <option value="tier2">£50,000 – £150,000</option>
                            <option value="tier3">£150,000 – £300,000</option>
                            <option value="tier4">£300,000+</option>
                          </select>
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                          <label
                            className="block text-[11px] sm:text-xs uppercase tracking-wider text-slate-700 font-bold"
                            htmlFor="targetCommencement"
                          >
                            Ideal Start Date
                          </label>
                          <select
                            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                            id="targetCommencement"
                            value={formData.targetCommencement}
                            onChange={handleInputChange}
                          >
                            <option value="immediate">As soon as possible (Ready to start)</option>
                            <option value="q1">In 1 – 3 months</option>
                            <option value="q2">In 3 – 6 months</option>
                            <option value="feasibility">Just planning / Getting initial estimates</option>
                          </select>
                        </div>
                      </div>

                      {/* Description / Architectural Specifics */}
                      <div className="space-y-1.5 sm:space-y-2">
                        <label
                          className="block text-[11px] sm:text-xs uppercase tracking-wider text-slate-700 font-bold"
                          htmlFor="notes"
                        >
                          Project Details
                        </label>
                        <textarea
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3.5 sm:p-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors resize-none"
                          id="notes"
                          placeholder="Tell us about your project, your timeline, or any specific requirements you have..."
                          rows={4}
                          value={formData.notes}
                          onChange={handleInputChange}
                        />
                      </div>

                      {/* File Attachment Dropzone */}
                      <div className="space-y-1.5 sm:space-y-2">
                        <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-slate-700 font-bold">
                          Upload Drawings, Plans or Photos (Optional)
                        </label>
                        <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          className="hidden"
                          onChange={handleFileSelect}
                        />
                        <div
                          onDragOver={(e) => {
                            e.preventDefault();
                            setIsDragging(true);
                          }}
                          onDragLeave={() => setIsDragging(false)}
                          onDrop={handleFileDrop}
                          onClick={() => fileInputRef.current?.click()}
                          className={`border-2 border-dashed rounded-xl p-4 sm:p-6 text-center cursor-pointer transition-all group ${
                            isDragging
                              ? "border-emerald-600 bg-emerald-50/50"
                              : "border-slate-300 hover:border-emerald-500 bg-slate-50/60"
                          }`}
                        >
                          <span className="material-symbols-outlined text-3xl sm:text-4xl text-emerald-600 group-hover:scale-110 transition-transform">
                            cloud_upload
                          </span>
                          <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-2">
                            Click to select files or drag &amp; drop
                          </p>
                          <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                            Accepted: PDF, JPG, PNG, DWG, ZIP (up to 50MB)
                          </p>

                          {files.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-2 justify-center">
                              {files.map((file, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center gap-1.5 bg-white border border-emerald-300 text-emerald-800 text-[11px] sm:text-xs px-2.5 py-1 rounded shadow-sm"
                                >
                                  <span className="material-symbols-outlined text-sm text-emerald-600">
                                    description
                                  </span>
                                  {file.name}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Submit Action & NDA Notice */}
                      <div className="pt-2 sm:pt-4 space-y-3 sm:space-y-4">
                        <button
                          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 sm:py-4 rounded-lg flex items-center justify-center gap-2 sm:gap-3 transition-colors shadow-lg shadow-emerald-700/20 disabled:opacity-75 text-xs sm:text-sm"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          <span className="font-semibold">
                            {isSubmitting
                              ? "Sending Enquiry..."
                              : "Request Free Site Visit & Quote"}
                          </span>
                          <span className="material-symbols-outlined text-base sm:text-lg">arrow_forward</span>
                        </button>
                        <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-500">
                          <span className="material-symbols-outlined text-emerald-600 text-sm sm:text-base">
                            lock
                          </span>
                          <span>
                            We respect your privacy. Your details will only be used to respond to your enquiry.
                          </span>
                        </div>
                      </div>
                    </form>
                  ) : (
                    /* Success State Confirmation */
                    <div className="text-center py-10 sm:py-12 space-y-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                        <span className="material-symbols-outlined text-3xl sm:text-4xl">check_circle</span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                        Thank You — Enquiry Received
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                        We have received your project details. A member of our team will review your information and get back to you within 24 hours to discuss next steps.
                      </p>
                      <div className="pt-4">
                        <button
                          className="text-xs sm:text-sm font-bold text-emerald-700 underline hover:text-emerald-900 transition-colors"
                          onClick={resetForm}
                          type="button"
                        >
                          Submit another enquiry
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Dark OUR EXPERIENCED TEAM & Practice Directors Section */}
        <section className="bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-[#0f172a] text-white py-10 sm:py-16 lg:py-24 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-700/50 inline-block">
                  OUR EXPERIENCED TEAM
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-3 tracking-tight font-heading">
                  Meet Our Senior Management Team
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-4 md:mt-0 leading-relaxed">
                Every project is led by experienced professionals who ensure your build is completed on time, within budget, and to the highest standards.
              </p>
            </div>

            {/* Director Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Director 1: Julian Davies */}
              <div className="bg-slate-900/90 rounded-xl p-6 border border-slate-800 hover:border-emerald-500/50 shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden border-2 border-emerald-500/40">
                      <Image
                        src="/assets/images/contact/julian_davies.jpg"
                        alt="Portrait of Julian Davies, Founder and Managing Director of JSTM Construction London"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-heading">Julian Davies</h3>
                      <span className="text-xs text-emerald-400 font-semibold">
                        Founder &amp; Managing Director
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-circle-check text-emerald-400" />
                      <span>Fellow, FMB (30+ Yrs Experience)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-file-contract text-emerald-400" />
                      <span>JCT &amp; Standard Contracts</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                    30+ years leading residential building projects across London, focused on top-quality craft and personal client care.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col gap-1.5">
                  <a
                    className="text-xs font-semibold text-slate-200 hover:text-emerald-400 transition-colors flex items-center justify-between"
                    href="mailto:j.davies@jstm-construction.co.uk"
                  >
                    <span>j.davies@jstm-construction.co.uk</span>
                    <i className="fa-solid fa-paper-plane text-[10px] text-emerald-400" />
                  </a>
                  <span className="text-[11px] text-slate-500">Extension: #101</span>
                </div>
              </div>

              {/* Director 2: Marcus Sterling */}
              <div className="bg-slate-900/90 rounded-xl p-6 border border-slate-800 hover:border-emerald-500/50 shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden border-2 border-emerald-500/40">
                      <Image
                        src="/assets/images/contact/marcus_sterling.jpg"
                        alt="Portrait of Marcus Sterling, Head of Structural Engineering at JSTM Construction"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-heading">
                        Marcus Sterling
                      </h3>
                      <span className="text-xs text-emerald-400 font-semibold">
                        Head of Structural Engineering
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-compass-drafting text-emerald-400" />
                      <span>CEng MIStructE Qualified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-cube text-emerald-400" />
                      <span>Basements, Lofts &amp; Extensions</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                    Expert in structural steel calculations, foundation design, and complex load-bearing wall removals.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col gap-1.5">
                  <a
                    className="text-xs font-semibold text-slate-200 hover:text-emerald-400 transition-colors flex items-center justify-between"
                    href="mailto:m.sterling@jstm-construction.co.uk"
                  >
                    <span>m.sterling@jstm-construction.co.uk</span>
                    <i className="fa-solid fa-paper-plane text-[10px] text-emerald-400" />
                  </a>
                  <span className="text-[11px] text-slate-500">Extension: #104</span>
                </div>
              </div>

              {/* Director 3: Elena Rostova */}
              <div className="bg-slate-900/90 rounded-xl p-6 border border-slate-800 hover:border-emerald-500/50 shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden border-2 border-emerald-500/40">
                      <Image
                        src="/assets/images/contact/elena_rostova.jpg"
                        alt="Portrait of Elena Rostova, Director of Architectural Collaboration at JSTM Construction London"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-heading">Elena Rostova</h3>
                      <span className="text-xs text-emerald-400 font-semibold">
                        Architectural Project Lead
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-landmark text-emerald-400" />
                      <span>ARB / RIBA Qualified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-shield text-emerald-400" />
                      <span>Planning &amp; Building Regulations</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                    Works closely with architects, council planning officers, and clients to make sure every design detail is built accurately.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col gap-1.5">
                  <a
                    className="text-xs font-semibold text-slate-200 hover:text-emerald-400 transition-colors flex items-center justify-between"
                    href="mailto:e.rostova@jstm-construction.co.uk"
                  >
                    <span>e.rostova@jstm-construction.co.uk</span>
                    <i className="fa-solid fa-paper-plane text-[10px] text-emerald-400" />
                  </a>
                  <span className="text-[11px] text-slate-500">Extension: #108</span>
                </div>
              </div>

              {/* Director 4: James Thorne */}
              <div className="bg-slate-900/90 rounded-xl p-6 border border-slate-800 hover:border-emerald-500/50 shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden border-2 border-emerald-500/40">
                      <Image
                        src="/assets/images/contact/james_thorne.jpg"
                        alt="Portrait of James Thorne, Senior Commercial Estimator and Lead Quantity Surveyor at JSTM Construction"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-heading">James Thorne</h3>
                      <span className="text-xs text-emerald-400 font-semibold">
                        Lead Estimator &amp; Quantity Surveyor
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-calculator text-emerald-400" />
                      <span>MRICS Qualified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-stamp text-emerald-400" />
                      <span>Fixed-Price Costing</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                    Prepares detailed, transparent fixed-price quotes with clear itemised breakdowns so there are never any unexpected costs.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col gap-1.5">
                  <a
                    className="text-xs font-semibold text-slate-200 hover:text-emerald-400 transition-colors flex items-center justify-between"
                    href="mailto:j.thorne@jstm-construction.co.uk"
                  >
                    <span>j.thorne@jstm-construction.co.uk</span>
                    <i className="fa-solid fa-paper-plane text-[10px] text-emerald-400" />
                  </a>
                  <span className="text-[11px] text-slate-500">Extension: #112</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Light FREQUENTLY ASKED QUESTIONS */}
        <section className="bg-slate-50/70 text-slate-900 py-10 sm:py-16 lg:py-24 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 inline-block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight font-heading">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                Here are answers to the most common questions about our quotation process, contracts, and how we manage projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* FAQ 1 */}
              <div className="bg-white rounded-xl p-5 sm:p-8 border border-slate-200 shadow-sm hover:shadow transition-shadow">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">speed</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                      How quickly will I receive my quote?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 sm:mt-2.5 leading-relaxed">
                      For detailed architectural drawings, we provide an itemised fixed-price quote within 5 to 7 working days. If you are at an early stage, we can provide indicative costings within 24 to 48 hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <span className="material-symbols-outlined text-2xl">handshake</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading">
                      Can you work with my architect or interior designer?
                    </h3>
                    <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                      Yes, absolutely. We frequently work alongside client-appointed architects, structural engineers, and interior designers, or we can provide complete design-and-build services if you prefer.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <span className="material-symbols-outlined text-2xl">
                      account_balance_wallet
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading">
                      How do you guarantee fixed prices with no hidden extras?
                    </h3>
                    <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                      We provide comprehensive, itemised contracts based on standard JCT guidelines. Every cost is clearly outlined before work starts. We never carry out extra work without your written approval in advance.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <span className="material-symbols-outlined text-2xl">policy</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading">
                      Do you arrange council permits and party wall agreements?
                    </h3>
                    <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                      Yes. We coordinate with party wall surveyors, arrange skip permits, parking bay suspensions, and liaise directly with council building control inspectors to keep everything simple for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Listed Building Inquiry Banner */}
            <div className="mt-8 sm:mt-12 bg-white rounded-xl p-4 sm:p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <span className="material-symbols-outlined text-3xl">help_outline</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 font-heading">
                    Planning a Listed Building or Conservation Area Project?
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Our team has extensive experience with period homes, conservation permissions, and heritage craftsmanship.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  className="px-6 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-emerald-600 transition-colors text-sm flex items-center gap-2"
                  href="tel:02035762228"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  <span>Call 020 3576 2228</span>
                </a>
                <a
                  className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors text-sm flex items-center gap-2 shadow-md"
                  href="https://wa.me/447418095006"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Crisp Light Trust, Insurance & Accreditation Strip */}
        <section className="bg-white py-12 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
              {/* Trust Statement & Rating */}
              <div className="space-y-2 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  <div className="flex text-amber-500">
                    <i className="fa-solid fa-star text-xs" />
                    <i className="fa-solid fa-star text-xs" />
                    <i className="fa-solid fa-star text-xs" />
                    <i className="fa-solid fa-star text-xs" />
                    <i className="fa-solid fa-star text-xs" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    5.0 / 5.0 Independent Master Builder Audit
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight font-heading">
                  Regulated, Certified &amp; Fully Insured
                </h3>
                <p className="text-xs text-slate-600">
                  £20,000,000 Contractor&apos;s All-Risks &amp; Public Liability Cover backed by
                  Zurich Municipal.
                </p>
              </div>

              {/* Accreditations Badges Strip */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2.5 bg-slate-50 px-4 py-2.5 rounded-lg border border-slate-200">
                  <span className="material-symbols-outlined text-emerald-700 text-2xl">
                    verified_user
                  </span>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">
                      Federation of Master Builders
                    </div>
                    <div className="text-[11px] text-slate-500">Licence #88412 • Inspected</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-50 px-4 py-2.5 rounded-lg border border-slate-200">
                  <span className="material-symbols-outlined text-emerald-700 text-2xl">shield</span>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">TrustMark Govt Endorsed</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500">Quality Scheme #49120</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-50 px-4 py-2.5 rounded-lg border border-slate-200">
                  <span className="material-symbols-outlined text-emerald-700 text-2xl">
                    local_fire_department
                  </span>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">Gas Safe Register</div>
                    <div className="text-[11px] text-slate-500">Ref #551928 Certified</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-50 px-4 py-2.5 rounded-lg border border-slate-200">
                  <span className="material-symbols-outlined text-emerald-700 text-2xl">
                    electrical_services
                  </span>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">
                      NICEIC Platinum Approved
                    </div>
                    <div className="text-[11px] text-slate-500">Contractor Accreditation</div>
                  </div>
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
