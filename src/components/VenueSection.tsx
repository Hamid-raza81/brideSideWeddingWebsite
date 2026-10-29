"use client";

import React, { useState } from "react";
import { weddingData } from "@/data/wedding";
import { copyTextToClipboard } from "@/lib/copyTextToClipboard";
import { OrnamentalDivider } from "./OrnamentalDivider";
import { MapPin, Navigation, Copy, Check, ExternalLink } from "lucide-react";

export function VenueSection() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const venue = weddingData.events.find((event) => event.id === "nikah");

  if (!venue?.mapsSearchUrl || !venue.mapsEmbedUrl) return null;

  const address = [venue.venue, venue.address, venue.city, venue.state, venue.country]
    .filter(Boolean)
    .join(", ");

  const handleCopy = async () => {
    try {
      await copyTextToClipboard(address);
      setCopyError(false);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
      setCopyError(true);
      window.setTimeout(() => setCopyError(false), 3000);
    }
  };

  return (
    <section id="venue" className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 bg-[#FFF9F3] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="font-serif uppercase tracking-[0.2em] text-[#8A6D47] text-xs sm:text-sm font-semibold">
            Location &amp; Travel
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-[#46343A] font-bold tracking-tight mt-2 mb-3">
            {venue.venue}
          </h2>
          <p className="font-serif italic text-sm sm:text-base text-[#75636A]">
            Tap the map or open Google Maps for directions to {venue.venue}.
          </p>
          <OrnamentalDivider variant="gold" symbol="floral" className="mt-4" />
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl bg-[#FFFDF9] border-2 border-[#C6A46A]/30 shadow-xl overflow-hidden">
          <iframe
            title={`Google map to ${venue.venue}`}
            src={venue.mapsEmbedUrl}
            className="w-full h-64 sm:h-80 lg:h-96 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#8A6D47] shrink-0 mt-1" />
              <div>
                <p className="font-display text-lg font-bold text-[#46343A]">{venue.venue}</p>
                <p className="font-serif text-sm text-[#75636A] mt-1">{[venue.address, venue.city, venue.state, venue.country].filter(Boolean).join(", ")}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5 sm:shrink-0">
              <a href={venue.mapsSearchUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#46343A] hover:bg-[#60464E] text-[#FFF9F3] font-serif text-xs uppercase tracking-wider font-semibold shadow-sm">
                <Navigation className="w-4 h-4 text-[#D6BC8D]" />Open Google Maps<ExternalLink className="w-3.5 h-3.5 text-[#A6B29A]" />
              </a>
              <button type="button" onClick={handleCopy} className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#C6A46A]/40 hover:bg-[#C6A46A]/10 text-[#46343A] font-serif text-xs uppercase tracking-wider font-medium">
                {copied ? <Check className="w-4 h-4 text-green-700" /> : <Copy className="w-4 h-4 text-[#8A6D47]" />}
                {copied ? "Copied" : copyError ? "Copy unavailable" : "Copy Address"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
