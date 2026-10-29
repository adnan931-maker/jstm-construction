"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      alert("Thank you for subscribing to the JSTM Quarterly Architectural Briefing.");
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#070b14] border-t border-slate-800 text-slate-300 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & Accreditation Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" href="/" />
            <div className="text-sm text-slate-300 max-w-sm leading-relaxed space-y-1">
              <p className="font-semibold text-white">🛠️ Professional Building &amp; Property Services</p>
              <p className="text-emerald-400 font-medium">🪜 Extensions &bull; Renovations &bull; Bathroom &bull; Kitchen</p>
              <p className="text-slate-400">🏡 Quality workmanship, Reliable service across London.</p>
            </div>
            <div className="text-sm space-y-2 text-slate-400 pt-2 border-t border-slate-800/80">
              <p className="flex items-start gap-2">
                <i className="fa-solid fa-location-dot text-emerald-400 text-sm mt-1 shrink-0"></i>
                <span>
                  <strong className="text-slate-200">Address:</strong> JST Construction, Suite A204, 2nd Floor Vista Centre, 50 Salisbury Road, Cranford, Hounslow TW4 6JQ, United Kingdom
                </span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-emerald-400 text-sm shrink-0"></i>
                <span>
                  <strong className="text-slate-200">Landline:</strong>{" "}
                  <a href="tel:02035762228" className="text-white hover:text-emerald-400 font-semibold transition-colors">
                    020 3576 2228
                  </a>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-brands fa-whatsapp text-emerald-400 text-sm shrink-0"></i>
                <span>
                  <strong className="text-slate-200">WhatsApp:</strong>{" "}
                  <a href="https://wa.me/447418095006" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors">
                    +44 7418 095006
                  </a>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-emerald-400 text-sm shrink-0"></i>
                <span>
                  <strong className="text-slate-200">Email:</strong>{" "}
                  <a href="mailto:info@jstmconstruction.com" className="text-white hover:text-emerald-400 transition-colors">
                    info@jstmconstruction.com
                  </a>
                </span>
              </p>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h3 className="text-[16px] text-white font-semibold tracking-tight">Core Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-300 font-medium text-emerald-400/90">&bull; House Extensions</li>
              <li className="text-slate-300 font-medium text-emerald-400/90">&bull; Complete Renovations</li>
              <li className="text-slate-300 font-medium text-emerald-400/90">&bull; Bathroom Refurbishment</li>
              <li className="text-slate-300 font-medium text-emerald-400/90">&bull; Bespoke Kitchen Fitting</li>
              <li className="text-slate-400">&bull; Architectural Loft Conversions</li>
              <li className="text-slate-400">&bull; Structural Alterations</li>
              <li className="text-slate-400">&bull; Bespoke Joinery &amp; Carpentry</li>
              <li className="text-slate-400">&bull; Property Maintenance Services</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="text-[16px] text-white font-semibold tracking-tight">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-slate-400 hover:text-emerald-400 transition-colors" href="/about-us">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-emerald-400 transition-colors" href="/#process">
                  Work Process &amp; Rigour
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-emerald-400 transition-colors" href="/portfolio">
                  Case Studies &amp; Portfolio
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-emerald-400 transition-colors" href="/#pricing">
                  Interactive Estimator
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-emerald-400 transition-colors" href="/#testimonials">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-emerald-400 transition-colors" href="/contact">
                  Consultation &amp; Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Quarterly Registry */}
          <div className="space-y-3">
            <h3 className="text-[16px] text-white font-semibold tracking-tight">Quarterly Registry</h3>
            <p className="text-sm text-slate-400">
              Receive our architectural journals, structural briefing memos, and procurement market indices.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 rounded-lg text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                placeholder="architect@studio.com"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
                type="submit"
              >
                {subscribed ? "Subscribed!" : "Subscribe to Briefing"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 mt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2025 JSTM Construction London Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-slate-500 hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="text-slate-500 hover:text-slate-300 cursor-pointer">Terms of Engagement</span>
            <span className="text-slate-500 hover:text-slate-300 cursor-pointer">CDM 2015 Compliance</span>
            <span className="text-slate-500 hover:text-slate-300 cursor-pointer">Insurance Registry</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
