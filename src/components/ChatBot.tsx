"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  action?: {
    label: string;
    href: string;
    icon?: string;
    isExternal?: boolean;
  };
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome-1",
    sender: "bot",
    text: "Hello! 👋 Welcome to JSTM Construction London. I'm your virtual build advisor.",
    time: "Just now",
  },
  {
    id: "welcome-2",
    sender: "bot",
    text: "How can we assist you with your property project today? Select a topic below or type your question:",
    time: "Just now",
  },
];

const SUGGESTIONS = [
  { label: "🏠 House Extensions", query: "What are your house extension options & prices?" },
  { label: "🛏️ Loft Conversions", query: "How much does a loft conversion cost in London?" },
  { label: "📋 Book Free Site Survey", query: "How do I book a free site survey?" },
  { label: "📍 Areas You Cover", query: "Which London areas and boroughs do you cover?" },
  { label: "🛡️ 10-Year Guarantee", query: "What warranty or guarantee do you provide?" },
  { label: "📞 Speak to Site Director", query: "Can I speak directly with a director?" },
];

function getBotReply(userQuery: string): { text: string; action?: Message["action"] } {
  const q = userQuery.toLowerCase();

  if (q.includes("extension") || q.includes("rear") || q.includes("side-return") || q.includes("wrap")) {
    return {
      text: "We specialize in Rear, Side-Return, and Wrap-around House Extensions across London. Guide pricing starts from £58,000 + VAT (typically 10–16 weeks duration), including foundations, structural steel, and bi-fold doors.",
      action: {
        label: "View Extension Projects",
        href: "/services",
        icon: "architecture",
      },
    };
  }

  if (q.includes("loft") || q.includes("attic") || q.includes("mansard") || q.includes("dormer")) {
    return {
      text: "Our Loft Conversions (Dormer, Mansard, Hip-to-Gable) typically start from £52,000 + VAT and take 8–12 weeks. We handle architectural stairs, master en-suites, insulation, and building regulations.",
      action: {
        label: "Explore Loft Options",
        href: "/services",
        icon: "roofing",
      },
    };
  }

  if (q.includes("cost") || q.includes("price") || q.includes("how much") || q.includes("budget") || q.includes("quote")) {
    return {
      text: "We provide 100% itemized, fixed-price contracts with zero hidden variations. Typical starting guides:\n• Room / Floor Refurb: from £18,500\n• House Extension / Loft: from £52,000–£58,000\n• Turnkey Home Renovation: from £110,000",
      action: {
        label: "Request Free Fixed Quote",
        href: "/contact",
        icon: "request_quote",
      },
    };
  }

  if (q.includes("survey") || q.includes("visit") || q.includes("book") || q.includes("consultation")) {
    return {
      text: "Our initial site surveys are 100% free with zero obligation! A senior project manager visits your property, reviews feasibility and drawings, and provides an itemized quotation within 48 hours.",
      action: {
        label: "Book Free Site Survey",
        href: "/contact",
        icon: "calendar_month",
      },
    };
  }

  if (q.includes("area") || q.includes("borough") || q.includes("location") || q.includes("where") || q.includes("postcode")) {
    return {
      text: "We cover all 32 Greater London boroughs & Surrey. Our primary prime areas include Kensington & Chelsea, Westminster, Wandsworth, Richmond, Hammersmith & Fulham, and Camden.",
      action: {
        label: "Check Borough Coverage",
        href: "/areas-we-cover",
        icon: "map",
      },
    };
  }

  if (q.includes("guarantee") || q.includes("warranty") || q.includes("fmb") || q.includes("trustmark") || q.includes("insurance")) {
    return {
      text: "Every project by JSTM Construction comes with a comprehensive 10-Year Insurance-Backed Guarantee. We are verified Master Builders with the FMB (#88412), TrustMark accredited, Gas Safe, and NICEIC approved.",
      action: {
        label: "View Certifications",
        href: "/about-us",
        icon: "verified_user",
      },
    };
  }

  if (q.includes("director") || q.includes("phone") || q.includes("call") || q.includes("speak") || q.includes("contact") || q.includes("number")) {
    return {
      text: "You can speak directly with our directors right now:\n📞 Landline: 020 3576 2228\n💬 WhatsApp: +44 7418 095006\n✉️ Email: info@jstmconstruction.com\nOffice hours: Mon–Sat 07:30–18:30 GMT.",
      action: {
        label: "Chat on WhatsApp Now",
        href: "https://wa.me/447418095006",
        icon: "chat",
        isExternal: true,
      },
    };
  }

  return {
    text: "Thank you for asking! For specific drawings or architectural plans, our senior team can review your requirements and provide clear feasibility advice. Would you like to request a free site visit or chat directly on WhatsApp?",
    action: {
      label: "Book Site Visit",
      href: "/contact",
      icon: "send",
    },
  };
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate smart thinking delay
    setTimeout(() => {
      const reply = getBotReply(text);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: reply.text,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        action: reply.action,
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* ─── Chat Window ─────────────────────────────────────────────────── */}
      {isOpen && (
        <div className="mb-4 w-[360px] sm:w-[410px] max-w-[calc(100vw-2rem)] h-[540px] max-h-[82vh] bg-[#0c1424] border border-emerald-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-[#0b1628] to-emerald-950 p-4 border-b border-emerald-500/20 flex items-center justify-between text-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-600 border border-emerald-400 flex items-center justify-center text-white font-bold shadow-[0_0_12px_rgba(16,185,129,0.5)]">
                  <span className="material-symbols-outlined text-[20px]">engineering</span>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900 shadow-[0_0_6px_#34d399]" />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-1.5">
                  <span>JSTM Build Advisor</span>
                  <span className="text-[10px] bg-emerald-950 border border-emerald-500/40 text-emerald-400 px-1.5 py-0.5 rounded font-mono font-medium">AI</span>
                </div>
                <p className="text-[11px] text-slate-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online • London Expert</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-slate-400">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
                className="w-8 h-8 rounded-full hover:bg-slate-800 hover:text-white flex items-center justify-center transition-colors"
              >
                <i className="fa-solid fa-xmark text-sm" />
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="bg-emerald-950/40 border-b border-emerald-500/15 px-4 py-1.5 text-[11px] text-emerald-300 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-emerald-400">verified</span>
              <span>10-Yr Warranty • FMB Master Builder</span>
            </span>
            <a href="tel:02035762228" className="hover:underline font-semibold text-emerald-200">020 3576 2228</a>
          </div>

          {/* Message List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 custom-scrollbar text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 shadow-md leading-relaxed whitespace-pre-line ${
                    m.sender === "user"
                      ? "bg-emerald-600 text-white rounded-br-none"
                      : "bg-slate-900/90 text-slate-200 border border-slate-800 rounded-bl-none"
                  }`}
                >
                  <p>{m.text}</p>

                  {/* Optional Action Button */}
                  {m.action && (
                    <div className="mt-2.5 pt-2 border-t border-slate-800/80">
                      {m.action.isExternal ? (
                        <a
                          href={m.action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg font-semibold text-[11px] shadow-sm transition-colors"
                        >
                          {m.action.icon && (
                            <span className="material-symbols-outlined text-[14px]">
                              {m.action.icon}
                            </span>
                          )}
                          <span>{m.action.label}</span>
                          <i className="fa-solid fa-arrow-up-right-from-square text-[10px] ml-1" />
                        </a>
                      ) : (
                        <Link
                          href={m.action.href}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg font-semibold text-[11px] shadow-sm transition-colors"
                        >
                          {m.action.icon && (
                            <span className="material-symbols-outlined text-[14px]">
                              {m.action.icon}
                            </span>
                          )}
                          <span>{m.action.label}</span>
                          <i className="fa-solid fa-arrow-right text-[10px] ml-1" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-slate-500 mt-1 px-1">{m.time}</span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-slate-900 border border-slate-800 text-emerald-400 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:150ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:300ms]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-slate-950/70 border-t border-slate-800/80 overflow-x-auto hide-scrollbar flex items-center gap-1.5 shrink-0">
            {SUGGESTIONS.map((s) => (
              <button
                key={s.label}
                type="button"
                onClick={() => handleSendMessage(s.query)}
                className="shrink-0 px-2.5 py-1 bg-slate-900 hover:bg-slate-850 hover:border-emerald-500/50 border border-slate-800 rounded-full text-[11px] text-slate-300 hover:text-white transition-all whitespace-nowrap"
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#0a1120] border-t border-slate-800/80 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about extensions, lofts, costs..."
              className="flex-1 bg-slate-900 border border-slate-800 text-white rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-500"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              aria-label="Send message"
              className="w-10 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:hover:bg-emerald-600 text-white flex items-center justify-center transition-all shrink-0 shadow-md shadow-emerald-950/50"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>
        </div>
      )}

      {/* ─── Floating Trigger Button ────────────────────────────────────── */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close building advisor chat" : "Open building advisor chat"}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-700 via-emerald-600 to-teal-500 text-white shadow-[0_4px_25px_rgba(5,150,105,0.5)] hover:shadow-[0_6px_35px_rgba(5,150,105,0.7)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulsing glow */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        {/* Unread badge */}
        {hasUnread && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-slate-950 shadow-md animate-bounce">
            1
          </span>
        )}

        {/* Icon Toggle */}
        <span className="material-symbols-outlined text-[26px] transition-transform duration-300 group-hover:scale-110">
          {isOpen ? "close" : "forum"}
        </span>
      </button>
    </div>
  );
}
