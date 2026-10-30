"use client";

import React, { useState, useEffect } from "react";

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show greeting bubble after 3 seconds on page
    const timer = setTimeout(() => {
      if (!dismissed) setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const whatsappNumber = "447418095006";
  const defaultMessage = encodeURIComponent(
    "Hello JSTM Construction, I would like to enquire about a building/renovation project."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 flex items-center gap-3">
      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with JSTM Construction on WhatsApp"
        className="relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <i className="fa-brands fa-whatsapp text-2xl sm:text-3xl group-hover:rotate-12 transition-transform duration-300 relative z-10" />

        {/* Online Presence Dot */}
        <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-emerald-300 border-2 border-slate-950 shadow-[0_0_8px_#34d399]" />
      </a>

      {/* Greeting Bubble (Only visible on sm+ screens to keep mobile view clean) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-3 bg-slate-900/95 backdrop-blur-md border border-emerald-500/30 text-white pl-4 pr-3 py-2.5 rounded-2xl shadow-2xl animate-fade-in-up">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Chat on WhatsApp</span>
            </div>
            <p className="text-[11px] text-slate-300">
              Fast drawing reviews &amp; free survey quotes
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
              setDismissed(true);
            }}
            aria-label="Dismiss WhatsApp popup"
            className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors"
          >
            <i className="fa-solid fa-xmark text-xs" />
          </button>
        </div>
      )}
    </div>
  );
}
