import React from "react";
import Image from "next/image";
import { weddingData } from "@/data/wedding";
import { OrnamentalDivider } from "./OrnamentalDivider";
import { Calendar, MapPin, Sparkles, ChevronDown } from "lucide-react";

export function WeddingHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 bg-arabesque-pattern overflow-hidden text-center"
    >
      {/* Soft warm light bloom and decorative background aura */}
      <div className="hidden sm:block absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-full rounded-full bg-gradient-to-b from-[#C98795]/15 via-[#A6B29A]/15 to-transparent blur-3xl pointer-events-none" />

      {/* Decorative Ornate Corner Accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#C6A46A]/40 rounded-tl-xl pointer-events-none hidden sm:block" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#C6A46A]/40 rounded-tr-xl pointer-events-none hidden sm:block" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Monogram Crest */}
        <div className="mb-4 inline-flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#C98795]/70 bg-[#FFFDF9] shadow-md flex items-center justify-center p-1.5 glow-gold">
            <div className="w-full h-full rounded-full border border-[#C6A46A]/45 flex flex-col items-center justify-center">
              <span className="font-display text-[#8A6D47] text-base sm:text-lg font-bold tracking-widest">
                {weddingData.monogram}
              </span>
            </div>
          </div>
        </div>

        {/* Traditional Bismillah in Arabic Calligraphy */}
        <p
          className="font-arabic text-[#46343A] text-2xl sm:text-3xl leading-relaxed tracking-wider mb-2"
          dir="rtl"
        >
          {weddingData.bismillahArabic}
        </p>

        {/* Welcome Blessing Intro */}
        <p className="font-serif italic text-sm sm:text-base text-[#75636A] max-w-md mx-auto mb-3">
          By the blessings of Allah, we invite you to celebrate with us
        </p>

        <OrnamentalDivider variant="gold" symbol="floral" className="my-1" />

        {/* Couple Names — Editorial Luxury Presentation */}
        <div className="my-4 space-y-1 sm:space-y-2">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#46343A] font-bold tracking-tight">
            {weddingData.bride.fullName}
          </h1>

          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 sm:w-16 bg-[#C6A46A]/50" />
            <span className="font-script text-3xl sm:text-4xl text-[#8A6D47] px-2">
              weds
            </span>
            <div className="h-[1px] w-12 sm:w-16 bg-[#C6A46A]/50" />
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#46343A] font-bold tracking-tight">
            {weddingData.groom.fullName}
          </h2>
        </div>

        {/* Couple artwork: replace this image for another invitation client. */}
        <div className="my-8 relative group max-w-md sm:max-w-lg w-full">
          {/* Ornate Gold Outer Arch Frame */}
          <div className="relative rounded-3xl p-2 sm:p-3 bg-gradient-to-br from-[#F4DDE1]/90 via-[#C6A46A]/35 to-[#A6B29A]/30 shadow-[0_28px_70px_-30px_rgba(70,52,58,0.45)]">
            <div className="relative rounded-2xl overflow-hidden border border-[#C6A46A]/50 bg-[#FFFDF9] aspect-[3/2] shadow-inner">
              <Image
                src={weddingData.assets.heroImageSrc}
                alt={`Wedding invitation artwork for ${weddingData.bride.fullName} and ${weddingData.groom.fullName}`}
                fill
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 500px, 600px"
                className="object-contain object-center transform group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            {/* Fine Caption Tag */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C98795] text-[#FFF9F3] border border-[#C6A46A] shadow-md text-[11px] font-serif uppercase tracking-widest whitespace-nowrap">
              A Celebration of Love
            </div>
          </div>
        </div>

        {/* Date, Islamic Date & Location Badges */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF9]/90 border border-[#C98795]/25 shadow-xs text-xs sm:text-sm font-serif text-[#46343A]">
            <Calendar className="w-4 h-4 text-[#8A6D47]" />
            <span className="font-semibold">{weddingData.dateSummary}</span>
          </div>

          <a href={weddingData.events.find((event) => event.id === "nikah")?.mapsSearchUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF9]/90 border border-[#C98795]/25 shadow-xs text-xs sm:text-sm font-serif text-[#46343A] hover:border-[#C98795]/60">
            <MapPin className="w-4 h-4 text-[#8A6D47]" />
            <span className="font-semibold">{weddingData.locationSummary}</span>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#celebrations"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#46343A] hover:bg-[#60464E] text-[#FFF9F3] font-serif font-medium text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 hover:scale-103"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D6BC8D]" />
            <span>Event Celebrations</span>
          </a>

          <a
            href="#venue"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent hover:bg-[#C6A46A]/10 text-[#46343A] border border-[#C6A46A] font-serif font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300"
          >
            <MapPin className="w-3.5 h-3.5 text-[#8A6D47]" />
            <span>Venue &amp; Directions</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center animate-bounce opacity-70">
          <span className="text-[10px] font-serif uppercase tracking-widest text-[#8A6D47]">
            Scroll to Invitation
          </span>
          <ChevronDown className="w-4 h-4 text-[#8A6D47] mt-1" />
        </div>
      </div>
    </section>
  );
}
