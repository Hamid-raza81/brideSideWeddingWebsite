"use client";

import React from "react";
import { weddingData } from "@/data/wedding";
import { OrnamentalDivider } from "./OrnamentalDivider";
import { ArrowUp, RotateCcw, Heart, Phone, MessageCircle } from "lucide-react";

interface ClosingSectionProps {
  onReplayIntro?: () => void;
}

export function ClosingSection({ onReplayIntro }: ClosingSectionProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { closing, footer } = weddingData;

  return (
    <footer className="py-24 sm:py-32 px-4 sm:px-6 bg-[#F4DDE1] text-[#46343A] relative overflow-hidden text-center">
      {/* Background ambient lighting and ornate pattern */}
      <div className="absolute inset-0 bg-arabesque-pattern opacity-35 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-80 bg-gradient-to-t from-[#C98795]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Monogram Medallion */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#C6A46A] bg-[#46343A] flex items-center justify-center p-2 mb-6 glow-gold">
          <span className="font-display text-[#D6BC8D] text-lg sm:text-xl font-bold tracking-widest">
            {weddingData.monogram}
          </span>
        </div>

        {/* Closing Title */}
        <span className="font-serif uppercase tracking-[0.25em] text-[#8A6D47] text-xs sm:text-sm font-semibold mb-3">
          {closing.title}
        </span>

        {/* Sacred Sunnah Dua */}
        <div className="my-4 px-4 py-3 rounded-2xl bg-[#FFFDF9]/85 border border-[#C98795]/35 max-w-xl mx-auto shadow-sm">
          <p
            className="font-arabic text-[#46343A] text-2xl sm:text-3xl leading-relaxed tracking-wide"
            dir="rtl"
          >
            {closing.duaArabic}
          </p>
          <p className="font-serif italic text-xs sm:text-sm text-[#75636A] mt-2">
            {closing.duaTranslation}
          </p>
        </div>

        <OrnamentalDivider variant="gold" symbol="floral" className="my-6" />

        {/* Personal Appreciation Note */}
        <p className="font-serif text-base sm:text-lg text-[#75636A] max-w-xl mx-auto leading-relaxed mb-6">
          {closing.message}
        </p>

        {/* Couple's Signature */}
        <div className="my-4">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#46343A]">
            {weddingData.bride.fullName} &amp; {weddingData.groom.fullName}
          </h3>
          <p className="font-serif text-xs uppercase tracking-widest text-[#8A6D47] mt-1">
            {weddingData.dateSummary} · {weddingData.locationSummary}
          </p>
        </div>

        {/* Compliments Section */}
        <div className="my-6 space-y-1">
          <p className="font-serif text-sm sm:text-base text-[#75636A] font-medium">
            {closing.compliments}
          </p>
        </div>

        <OrnamentalDivider variant="gold" symbol="diamond" className="my-6" />

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          {/* Scroll to Top Button */}
          <button
            type="button"
            id="back-to-top-btn"
            onClick={handleScrollToTop}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#46343A] hover:bg-[#70535c] text-[#FFF9F3] border border-[#C6A46A]/40 font-serif text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:scale-103"
          >
            <ArrowUp className="w-4 h-4 text-[#D6BC8D]" />
            <span>Back to Top</span>
          </button>

          {/* Replay Cinematic Opening */}
          {onReplayIntro && (
            <button
              type="button"
              id="replay-intro-btn"
              onClick={onReplayIntro}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent hover:bg-[#C98795]/10 text-[#46343A] border border-[#C98795]/60 font-serif text-xs uppercase tracking-wider font-semibold transition-all duration-300"
            >
              <RotateCcw className="w-4 h-4 text-[#D6BC8D]" />
              <span>Watch Video Invitation</span>
            </button>
          )}
        </div>

        <div className="mt-14 pt-8 border-t border-[#C6A46A]/30 text-center text-xs font-serif text-[#75636A] space-y-3.5">
          <p className="flex items-center justify-center gap-1.5">
            <span>Crafted with reverence &amp; barakah</span>
            <Heart className="w-3.5 h-3.5 text-[#C98795] fill-[#C98795]" />
            <span>for {weddingData.bride.shortName} &amp; {weddingData.groom.shortName}</span>
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 text-xs font-serif text-[#75636A]">
            <span>
              Developed by{" "}
              {footer.phoneHref ? (
                <a
                  href={footer.phoneHref}
                  className="text-[#8A6D47] hover:text-[#46343A] font-semibold underline underline-offset-4 transition-colors"
                >
                  {footer.businessName}
                </a>
              ) : (
                <span className="text-[#8A6D47] font-semibold">{footer.businessName}</span>
              )}
            </span>
            {footer.phoneDisplay && footer.phoneHref && (
              <>
                <span className="hidden sm:inline text-[#C6A46A]/60">·</span>
                <a
                  href={footer.phoneHref}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#46343A] hover:bg-[#70535c] text-[#FFF9F3] border border-[#C6A46A]/40 transition-all hover:scale-105 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Contact: {footer.phoneDisplay}</span>
                </a>
              </>
            )}
            {footer.phoneDisplay && footer.whatsappHref && (
              <a
                href={footer.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp developer at ${footer.phoneDisplay}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#46343A] hover:bg-[#70535c] text-[#FFF9F3] border border-[#C6A46A]/40 transition-all hover:scale-105 shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: {footer.phoneDisplay}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
