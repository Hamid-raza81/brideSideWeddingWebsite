"use client";

import React, { useState, useEffect } from "react";
import { weddingData } from "@/data/wedding";
import { Menu, X, Share2 } from "lucide-react";

interface SiteNavigationProps {
  onOpenShareModal?: () => void;
}

export function SiteNavigation({ onOpenShareModal }: SiteNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let animationFrame = 0;
    const handleScroll = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        const nextScrolled = window.scrollY > 50;
        setIsScrolled((current) => current === nextScrolled ? current : nextScrolled);
        animationFrame = 0;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const navLinks = [
    { name: "Invitation", href: "#invitation" },
    { name: "Celebrations", href: "#celebrations" },
    { name: "Venue", href: "#venue" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FFF9F3]/95 backdrop-blur-md shadow-md border-b border-[#C6A46A]/20 py-2.5"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-3 sm:px-6 grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 sm:gap-4">
          {/* Couple Text Brand in Header (No logo) */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex min-w-0 flex-col group cursor-pointer"
          >
            <span className="font-display text-[13px] sm:text-base font-bold text-[#46343A] tracking-wide group-hover:text-[#8A6D47] transition-colors leading-tight whitespace-nowrap">
              {weddingData.bride.shortName} &amp; {weddingData.groom.shortName}
            </span>
            <span className="font-serif text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-widest text-[#8A6D47] uppercase mt-0.5 whitespace-nowrap">
              {weddingData.dateSummary}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center justify-self-center gap-4 lg:gap-7 font-serif text-xs lg:text-sm tracking-wider uppercase whitespace-nowrap"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[#46343A] hover:text-[#8A6D47] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#C6A46A] after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center justify-self-end gap-1.5 sm:gap-3">
            {/* Share Invitation Trigger */}
            <button
              type="button"
              id="nav-share-btn"
              onClick={onOpenShareModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border border-[#C6A46A]/60 bg-[#FFF9F3] hover:bg-[#C6A46A] text-[#46343A] hover:text-[#FFF9F3] text-xs font-serif font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-sm"
              title="Share Invitation"
              aria-label="Share invitation"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#46343A] hover:bg-[#C6A46A]/15 focus:outline-none focus:ring-2 focus:ring-[#C6A46A]"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#46343A]" />
              ) : (
                <Menu className="w-6 h-6 text-[#46343A]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#46343A]/40 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed top-[calc(4.5rem+env(safe-area-inset-top))] right-3 left-3 max-h-[calc(100dvh-5rem-env(safe-area-inset-top))] overflow-y-auto rounded-2xl bg-[#FFF9F3] border border-[#C6A46A]/30 shadow-2xl p-4 sm:right-4 sm:left-4 sm:p-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-display font-bold text-base text-[#46343A] mb-1">
              {weddingData.bride.fullName}
            </p>
            <p className="font-script text-lg text-[#8A6D47] -mt-1 mb-1">&amp;</p>
            <p className="font-display font-bold text-base text-[#46343A] mb-4">
              {weddingData.groom.fullName}
            </p>

            <div className="h-[1px] w-24 bg-[#C6A46A]/30 mx-auto mb-4" />

            <nav className="flex flex-col gap-3 font-serif text-sm uppercase tracking-wider">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="py-2.5 px-4 rounded-lg text-[#46343A] hover:bg-[#C6A46A]/15 hover:text-[#46343A] font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-5 pt-4 border-t border-[#C6A46A]/20 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenShareModal?.();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#46343A] text-[#FFF9F3] font-serif text-xs uppercase tracking-wider font-semibold shadow hover:bg-[#60464E]"
              >
                <Share2 className="w-4 h-4 text-[#D6BC8D]" />
                <span>Share Invitation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
