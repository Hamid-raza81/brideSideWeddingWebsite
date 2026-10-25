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
    <section id="celebrations" className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 bg-[#F8F3E8] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="font-serif uppercase tracking-[0.2em] text-[#B58B35] text-xs sm:text-sm font-semibold">
            Wedding Programme
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-[#243A2D] font-bold tracking-tight mt-2 mb-3">
            Three Days of Celebration
          </h2>
          <p className="font-serif italic text-sm sm:text-base text-[#5E5A4F]">
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
                className="relative rounded-3xl bg-white border-2 border-[#B58B35]/35 shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`p-5 sm:p-6 text-center text-white ${isNikah ? "bg-gradient-to-br from-[#18281F] via-[#243A2D] to-[#16241B]" : "bg-gradient-to-br from-[#2E4B3A] via-[#243A2D] to-[#18281F]"}`}>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#B58B35]/30 border border-[#E5C365]/40 text-[#E5C365] text-[10px] sm:text-xs font-serif uppercase tracking-widest font-semibold mb-3">
                    {event.badge}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-[#F8F3E8] font-bold tracking-tight">
                    {event.name}
                  </h3>
                  <p className="font-serif italic text-xs sm:text-sm text-[#C6CDBB] mt-1">
                    {event.subTitle}
                  </p>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#B58B35] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-serif uppercase tracking-wider text-[#9DA78B] font-semibold block">Date</span>
                      <p className="font-display text-base sm:text-lg font-bold text-[#243A2D]">{event.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#B58B35] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-serif uppercase tracking-wider text-[#9DA78B] font-semibold block">Time</span>
                      <p className="font-display text-base sm:text-lg font-bold text-[#243A2D]">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#B58B35] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-serif uppercase tracking-wider text-[#9DA78B] font-semibold block">Location</span>
                      <p className="font-display text-base font-bold text-[#243A2D]">{event.venue}</p>
                      {event.address && <p className="font-serif text-xs sm:text-sm text-[#5E5A4F] mt-1 leading-relaxed">{[event.address, event.city, event.state, event.country].filter(Boolean).join(", ")}</p>}
                    </div>
                  </div>

                  {event.timeISO && (
                    <div className="mt-auto pt-4 border-t border-[#B58B35]/20 flex flex-col gap-2.5">
                      {event.mapsSearchUrl && (
                        <a href={event.mapsSearchUrl} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#243A2D] hover:bg-[#18281F] text-[#F8F3E8] font-serif text-xs uppercase tracking-wider font-semibold">
                          <MapPin className="w-3.5 h-3.5 text-[#E5C365]" />Google Maps<ExternalLink className="w-3 h-3 text-[#9DA78B]" />
                        </a>
                      )}
                      <a href={createGoogleCalendarLink(event)} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-[#B58B35]/40 hover:bg-[#B58B35]/10 text-[#243A2D] font-serif text-xs uppercase tracking-wider font-medium">
                        <CalendarPlus className="w-3.5 h-3.5 text-[#B58B35]" />Add to Calendar
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
