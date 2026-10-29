"use client";

import React, { useState } from "react";
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

  return (
    <>
      {/* TopBar */}
      <div className="text-slate-300 text-xs py-2.5 px-4 border-b border-slate-800/80 hidden md:block" style={{ backgroundColor: '#121927' }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <i className="fa-solid fa-location-dot text-emerald-500"></i>
              <span>Vista Centre, 50 Salisbury Rd, Cranford, Hounslow TW4 6JQ</span>
            </span>
            <span className="flex items-center space-x-2">
              <i className="fa-solid fa-clock text-emerald-500"></i>
              <span>Mon - Sat: 07:30 - 18:30</span>
            </span>
            <span className="flex items-center space-x-2">
              <i className="fa-solid fa-shield-check text-emerald-500"></i>
              <span className="font-medium text-emerald-400">
                Quality Workmanship &bull; Reliable Service
              </span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-medium"
              href="tel:02035762228"
            >
              <i className="fa-solid fa-phone text-xs text-emerald-500"></i> 020 3576 2228
            </a>
            <div className="h-3 w-px bg-slate-700"></div>
            <a
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-semibold"
              href="https://wa.me/447418095006"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp text-sm text-emerald-400"></i> +44 7418 095006
            </a>
            <div className="h-3 w-px bg-slate-700"></div>
            <a
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-medium"
              href="mailto:info@jstmconstruction.com"
            >
              <i className="fa-solid fa-envelope text-xs text-emerald-500"></i> info@jstmconstruction.com
            </a>
          </div>
        </div>
      </div>

      {/* MainHeader */}
      <header className="sticky top-0 z-50 relative border-b border-slate-800/80 shadow-xl" style={{ backgroundColor: '#121927' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo */}
            <Logo size="md" href="/" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              <Link
                className={`text-sm font-semibold transition-colors ${
                  isActive("home")
                    ? "text-emerald-400"
                    : "text-slate-300 hover:text-emerald-400"
                }`}
                href="/"
              >
                Home
              </Link>
              <Link
                className={`text-sm font-semibold transition-colors ${
                  isActive("about-us")
                    ? "text-emerald-400"
                    : "text-slate-300 hover:text-emerald-400"
                }`}
                href="/about-us"
              >
                About Us
              </Link>
              <Link
                className={`text-sm font-semibold transition-colors ${
                  isActive("services")
                    ? "text-emerald-400"
                    : "text-slate-300 hover:text-emerald-400"
                }`}
                href="/services"
              >
                Services
              </Link>
              <Link
                className={`text-sm font-semibold transition-colors ${
                  isActive("portfolio")
                    ? "text-emerald-400"
                    : "text-slate-300 hover:text-emerald-400"
                }`}
                href="/portfolio"
              >
                Portfolio
              </Link>
              <Link
                className={`text-sm font-semibold transition-colors ${
                  isActive("areas-we-cover")
                    ? "text-emerald-400"
                    : "text-slate-300 hover:text-emerald-400"
                }`}
                href="/areas-we-cover"
              >
                Areas We Cover
              </Link>
              <Link
                className={`text-sm font-semibold transition-colors ${
                  isActive("contact")
                    ? "text-emerald-400"
                    : "text-slate-300 hover:text-emerald-400"
                }`}
                href="/contact"
              >
                Contact
              </Link>
            </nav>

            {/* Right Side Header Action */}
            <div className="flex items-center space-x-3">
              <Link
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-700/30 transition-all duration-200 transform hover:-translate-y-0.5"
                href="/contact"
              >
                <span>Get Free Quote</span>
                <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
              </Link>
              {/* Mobile Menu Trigger */}
              <button
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                className="lg:hidden text-slate-200 hover:text-white p-2.5 rounded-lg border border-slate-700/60 bg-slate-800/40 hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <i
                  className={`fa-solid ${
                    mobileMenuOpen ? "fa-xmark" : "fa-bars"
                  } text-xl`}
                ></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div
              className="lg:hidden fixed inset-0 top-20 bg-black/60 backdrop-blur-xs z-40"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div
              className="lg:hidden absolute top-full left-0 right-0 z-50 border-b border-slate-800 p-6 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto"
              style={{ backgroundColor: '#121927' }}
            >
              <nav className="flex flex-col space-y-4 text-base font-semibold">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1.5 transition-colors ${
                    isActive("home")
                      ? "text-emerald-400"
                      : "text-slate-300 hover:text-emerald-400"
                  }`}
                  href="/"
                >
                  Home
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1.5 transition-colors ${
                    isActive("about-us")
                      ? "text-emerald-400"
                      : "text-slate-300 hover:text-emerald-400"
                  }`}
                  href="/about-us"
                >
                  About Us
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1.5 transition-colors ${
                    isActive("services")
                      ? "text-emerald-400"
                      : "text-slate-300 hover:text-emerald-400"
                  }`}
                  href="/services"
                >
                  Services
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1.5 transition-colors ${
                    isActive("portfolio")
                      ? "text-emerald-400"
                      : "text-slate-300 hover:text-emerald-400"
                  }`}
                  href="/portfolio"
                >
                  Portfolio
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1.5 transition-colors ${
                    isActive("areas-we-cover")
                      ? "text-emerald-400"
                      : "text-slate-300 hover:text-emerald-400"
                  }`}
                  href="/areas-we-cover"
                >
                  Areas We Cover
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1.5 transition-colors ${
                    isActive("contact")
                      ? "text-emerald-400"
                      : "text-slate-300 hover:text-emerald-400"
                  }`}
                  href="/contact"
                >
                  Contact
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-lg text-center mt-2 shadow-lg shadow-emerald-700/30 font-semibold"
                  href="/contact"
                >
                  Get Free Quote
                </Link>
                <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5 text-sm font-normal">
                  <a
                    href="tel:02035762228"
                    className="flex items-center gap-2.5 text-slate-200 hover:text-emerald-400 font-semibold"
                  >
                    <i className="fa-solid fa-phone text-xs text-emerald-400"></i>
                    <span>020 3576 2228</span>
                  </a>
                  <a
                    href="https://wa.me/447418095006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 font-semibold"
                  >
                    <i className="fa-brands fa-whatsapp text-sm"></i>
                    <span>+44 7418 095006 (WhatsApp)</span>
                  </a>
                  <a
                    href="mailto:info@jstmconstruction.com"
                    className="flex items-center gap-2.5 text-slate-400 hover:text-emerald-400 text-xs"
                  >
                    <i className="fa-solid fa-envelope text-xs text-emerald-400"></i>
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
