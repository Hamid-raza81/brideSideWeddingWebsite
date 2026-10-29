"use client";

import React from "react";
import { weddingData } from "@/data/wedding";
import { OrnamentalDivider } from "./OrnamentalDivider";
import {
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  CalendarPlus,
} from "lucide-react";

export function WeddingEvents() {
  const createGoogleCalendarLink = (event: (typeof weddingData.events)[number]) => {
    const start = new Date(event.timeISO!);
    const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
    const toCalendarUtc = (date: Date) =>
      date.toISOString().replaceAll("-", "").replaceAll(":", "").replace(/\.\d{3}Z$/, "Z");
    const dates = `${toCalendarUtc(start)}/${toCalendarUtc(end)}`;
    const fullAddress = [event.venue, event.address, event.city, event.state, event.country]
      .filter(Boolean)
      .join(", ");
    const title = encodeURIComponent(
      `${event.name} — ${weddingData.bride.fullName} & ${weddingData.groom.fullName}`
    );
    const details = encodeURIComponent(
      `${event.name}\nDate: ${event.date}\nTime: ${event.time}\n${event.mealDetail ? `${event.mealDetail}\n` : ""}Venue: ${fullAddress}`
    );

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${encodeURIComponent(fullAddress)}`;
  };

  return (
    <section id="celebrations" className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 bg-[#FFF9F3] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="font-serif uppercase tracking-[0.2em] text-[#8A6D47] text-xs sm:text-sm font-semibold">
            Wedding Programme
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-[#46343A] font-bold tracking-tight mt-2 mb-3">
            Three Days of Celebration
          </h2>
          <p className="font-serif italic text-sm sm:text-base text-[#75636A]">
            Haldi, Mehndi, the Nikah, and dinner. We look forward to celebrating with you.
          </p>
          <OrnamentalDivider variant="gold" symbol="floral" className="mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-5 sm:gap-6">
          {weddingData.events.map((event) => {
            const isNikah = event.id === "nikah" || event.id === "dinner";

            return (
              <article
                key={event.id}
                className="relative rounded-3xl bg-[#FFFDF9] border border-[#C98795]/30 shadow-[0_18px_50px_-24px_rgba(87,55,65,0.24)] overflow-hidden flex flex-col hover:shadow-[0_24px_56px_-24px_rgba(87,55,65,0.32)] transition-shadow duration-300"
              >
                <div className={`p-5 sm:p-6 text-center text-[#46343A] ${isNikah ? "bg-gradient-to-br from-[#F4DDE1] via-[#FFF9F3] to-[#F2E4D8]" : "bg-gradient-to-br from-[#E7EBE1] via-[#FFF9F3] to-[#F6E9E4]"}`}>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#C6A46A]/12 border border-[#C6A46A]/45 text-[#8A6D47] text-[10px] sm:text-xs font-serif uppercase tracking-widest font-semibold mb-3">
                    {event.badge}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-[#46343A] font-bold tracking-tight">
                    {event.name}
                  </h3>
                  <p className="font-serif italic text-xs sm:text-sm text-[#75636A] mt-1">
                    {event.subTitle}
                  </p>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col gap-5 bg-[#FFFDF9]">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#8A6D47] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-serif uppercase tracking-wider text-[#A6B29A] font-semibold block">Date</span>
                      <p className="font-display text-base sm:text-lg font-bold text-[#46343A]">{event.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#8A6D47] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-serif uppercase tracking-wider text-[#A6B29A] font-semibold block">Time</span>
                      <p className="font-display text-base sm:text-lg font-bold text-[#46343A]">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#8A6D47] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-serif uppercase tracking-wider text-[#A6B29A] font-semibold block">Location</span>
                      <p className="font-display text-base font-bold text-[#46343A]">{event.venue}</p>
                      {event.address && <p className="font-serif text-xs sm:text-sm text-[#75636A] mt-1 leading-relaxed">{[event.address, event.city, event.state, event.country].filter(Boolean).join(", ")}</p>}
                    </div>
                  </div>

                  {event.timeISO && (
                    <div className="mt-auto pt-4 border-t border-[#C6A46A]/20 flex flex-col gap-2.5">
                      {event.mapsSearchUrl && (
                        <a href={event.mapsSearchUrl} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#46343A] hover:bg-[#60464E] text-[#FFF9F3] font-serif text-xs uppercase tracking-wider font-semibold">
                          <MapPin className="w-3.5 h-3.5 text-[#D6BC8D]" />Google Maps<ExternalLink className="w-3 h-3 text-[#A6B29A]" />
                        </a>
                      )}
                      <a href={createGoogleCalendarLink(event)} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-[#C6A46A]/40 hover:bg-[#C6A46A]/10 text-[#46343A] font-serif text-xs uppercase tracking-wider font-medium">
                        <CalendarPlus className="w-3.5 h-3.5 text-[#8A6D47]" />Add to Calendar
                      </a>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
