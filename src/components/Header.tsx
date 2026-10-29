"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

interface HeaderProps {
  currentPage?:
    | "home"
    | "about-us"
    | "about"
    | "services"
    | "portfolio"
    | "areas-we-cover"
    | "areas"
    | "contact";
}

export default function Header({ currentPage = "home" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (page: string) => {
    if (page === "home") return currentPage === "home";
    if (page === "about-us")
      return currentPage === "about-us" || currentPage === "about";
    if (page === "services") return currentPage === "services";
    if (page === "portfolio") return currentPage === "portfolio";
    if (page === "areas-we-cover")
      return currentPage === "areas-we-cover" || currentPage === "areas";
    if (page === "contact") return currentPage === "contact";
    return false;
  };

  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "About Us", href: "/about-us", id: "about-us" },
    { name: "Services", href: "/services", id: "services" },
    { name: "Portfolio", href: "/portfolio", id: "portfolio" },
    { name: "Areas We Cover", href: "/areas-we-cover", id: "areas-we-cover" },
    { name: "Contact", href: "/contact", id: "contact" },
  ];

  return (
    <>
      {/* ─── Institutional TopBar ────────────────────────────────────────── */}
      <div className="bg-[#080e1a] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-5 text-[11px] font-medium text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span className="font-semibold tracking-wide uppercase text-[10px]">London Sites Active</span>
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <i className="fa-solid fa-location-dot text-emerald-400 text-xs" />
              <span>Vista Centre, Cranford, Hounslow TW4 6JQ</span>
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <i className="fa-solid fa-clock text-emerald-400 text-xs" />
              <span>Mon – Sat: 07:30 – 18:30</span>
            </span>
          </div>

          <div className="flex items-center space-x-4 text-xs font-medium">
            <a
              className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              href="tel:02035762228"
            >
              <i className="fa-solid fa-phone text-xs text-emerald-400" />
              <span>020 3576 2228</span>
            </a>
            <div className="h-3 w-px bg-slate-800" />
            <a
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-semibold bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30"
              href="https://wa.me/447418095006"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp text-sm text-emerald-400" />
              <span>+44 7418 095006</span>
            </a>
            <div className="h-3 w-px bg-slate-800" />
            <a
              className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-[11px]"
              href="mailto:info@jstmconstruction.com"
            >
              <i className="fa-solid fa-envelope text-xs text-emerald-400" />
              <span>info@jstmconstruction.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* ─── Ultra-Modern Main Header (Glassmorphic) ────────────────────── */}
      <header
        className={`sticky top-0 z-50 relative transition-all duration-300 ${
          scrolled
            ? "bg-[#0b1220]/95 backdrop-blur-xl border-b border-emerald-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-[#0c1424]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo with ambient glow */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/0 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Logo size="md" href="/" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center p-1.5 bg-slate-900/60 rounded-full border border-slate-800/80 backdrop-blur-sm space-x-1 shadow-inner">
              {navLinks.map((link) => {
                const active = isActive(link.id);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                      active
                        ? "text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent"
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Header Action */}
            <div className="flex items-center space-x-3">
              <Link
                href="/contact"
                className="relative group hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-[13px] text-white overflow-hidden shadow-[0_4px_20px_rgba(5,150,105,0.4)] hover:shadow-[0_6px_28px_rgba(16,185,129,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: "linear-gradient(135deg, #059669 0%, #10b981 50%, #047857 100%)",
                }}
              >
                {/* Shimmer light sweep on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
                <span className="relative flex items-center gap-2">
                  <span>Get Free Quote</span>
                  <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>

              {/* Mobile Menu Trigger */}
              <button
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                className="lg:hidden text-slate-200 hover:text-white p-2.5 rounded-xl border border-slate-700/60 bg-slate-800/60 hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <i
                  className={`fa-solid ${
                    mobileMenuOpen ? "fa-xmark" : "fa-bars"
                  } text-lg text-emerald-400`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ─── Mobile Navigation Drawer (Frosted Glass) ────────────────────── */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div
              className="lg:hidden fixed inset-0 top-20 bg-black/75 backdrop-blur-sm z-40 transition-opacity duration-300"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div
              className="lg:hidden absolute top-full left-0 right-0 z-50 border-b border-emerald-500/20 p-6 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto bg-[#0b1220]/98 backdrop-blur-xl animate-drawer-down"
            >
              <nav className="flex flex-col space-y-3 text-base font-semibold">
                {navLinks.map((link) => {
                  const active = isActive(link.id);
                  return (
                    <Link
                      key={link.name}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl transition-all ${
                        active
                          ? "text-emerald-400 bg-emerald-950/60 border border-emerald-500/30"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                      }`}
                      href={link.href}
                    >
                      <span>{link.name}</span>
                      {active ? (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                      ) : (
                        <i className="fa-solid fa-chevron-right text-xs text-slate-600" />
                      )}
                    </Link>
                  );
                })}

                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white py-3 px-4 rounded-xl text-center mt-3 shadow-lg shadow-emerald-700/40 font-semibold flex items-center justify-center gap-2"
                  href="/contact"
                >
                  <span>Request Free Quote</span>
                  <i className="fa-solid fa-arrow-right text-xs" />
                </Link>

                <div className="pt-4 border-t border-slate-800 flex flex-col gap-3 text-sm font-normal">
                  <a
                    href="tel:02035762228"
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-200 hover:text-emerald-400 font-semibold"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <i className="fa-solid fa-phone text-xs" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase">Direct Office</div>
                      <div>020 3576 2228</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/447418095006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 font-semibold"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <i className="fa-brands fa-whatsapp text-sm" />
                    </div>
                    <div>
                      <div className="text-[10px] text-emerald-400/70 uppercase">Direct WhatsApp</div>
                      <div>+44 7418 095006</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@jstmconstruction.com"
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-emerald-400 text-xs"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400">
                      <i className="fa-solid fa-envelope text-xs" />
                    </div>
                    <span>info@jstmconstruction.com</span>
                  </a>
                </div>
              </nav>
            </div>
          </>
        )}
      </header>
    </>
  );
}
