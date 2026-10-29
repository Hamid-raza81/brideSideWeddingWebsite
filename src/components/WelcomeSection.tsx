import React from "react";
import { weddingData } from "@/data/wedding";
import { OrnamentalDivider } from "./OrnamentalDivider";

export function WelcomeSection() {
  const groomFamily = weddingData.families.groom;

  return (
    <section
      id="invitation"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FFF9F3] relative overflow-hidden"
    >
      {/* Delicate background ornament */}
      <div className="max-w-4xl mx-auto">
        {/* Formal digital invitation card */}
        <div className="relative rounded-3xl bg-[#FFFDF9] border-2 border-[#C6A46A]/30 p-8 sm:p-14 md:p-16 shadow-xl text-center">
          {/* Ornate Corner Accents */}
          <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-[#C6A46A] rounded-tl-lg pointer-events-none" />
          <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#C6A46A] rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-[#C6A46A] rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-[#C6A46A] rounded-br-lg pointer-events-none" />

          {/* Bismillah Calligraphy */}
          <div className="mb-6">
            <p
              className="font-arabic text-[#46343A] text-3xl sm:text-4xl md:text-5xl leading-relaxed tracking-wider"
              dir="rtl"
            >
              {weddingData.bismillahArabic}
            </p>
            <p className="font-serif italic text-xs sm:text-sm text-[#A6B29A] mt-2">
              {weddingData.bismillahEnglish}
            </p>
          </div>

          <OrnamentalDivider variant="gold" symbol="diamond" className="my-6" />

          {/* Royal Heading */}
          <div className="inline-block px-6 py-1.5 rounded-full bg-[#C6A46A]/10 border border-[#C6A46A]/30 mb-8">
            <span className="font-serif uppercase tracking-[0.25em] text-[#8A6D47] text-xs sm:text-sm font-semibold">
              {weddingData.mainInvitationMessage.heading}
            </span>
          </div>

          {/* Invitation from the bride's parents */}
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl text-[#46343A] font-bold tracking-tight">
              {weddingData.mainInvitationMessage.invitationBy}
            </h3>

            <p className="font-serif text-sm sm:text-base text-[#8A6D47] leading-relaxed">
              {weddingData.mainInvitationMessage.hostAddress}
            </p>

            <p className="font-serif text-base sm:text-lg text-[#75636A] leading-relaxed">
              {weddingData.mainInvitationMessage.body}
            </p>
          </div>

          {/* Couple Spotlight Presentation */}
          <div className="my-10 py-6 px-4 sm:px-8 rounded-2xl bg-[#FFFDF9]/70 border border-[#C6A46A]/20 max-w-xl mx-auto shadow-xs">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#A6B29A] font-serif">
                The Bride
              </span>
              <p className="font-display text-2xl sm:text-3xl font-bold text-[#46343A]">
                {weddingData.bride.fullName}
              </p>
            </div>

            <div className="my-3 flex items-center justify-center gap-3">
              <div className="h-[1px] w-12 bg-[#C6A46A]/40" />
              <span className="font-script text-2xl sm:text-3xl text-[#8A6D47]">
                with
              </span>
              <div className="h-[1px] w-12 bg-[#C6A46A]/40" />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#A6B29A] font-serif">
                The Groom
              </span>
              <p className="font-display text-2xl sm:text-3xl font-bold text-[#46343A]">
                {weddingData.groom.fullName}
              </p>
              <p className="font-serif text-sm sm:text-base text-[#75636A] pt-1">
                {groomFamily.relationshipTitle}
              </p>
              <p className="font-serif text-sm text-[#75636A]">
                Address: {groomFamily.additionalInfo}
              </p>
            </div>
          </div>

          {/* Invitation Call to Events */}
          <p className="font-serif text-base sm:text-lg text-[#46343A] font-medium max-w-2xl mx-auto leading-relaxed">
            {weddingData.mainInvitationMessage.eventInvite}
          </p>

          <OrnamentalDivider variant="gold" symbol="floral" className="my-8" />

          {/* Compliments badge */}
          <p className="font-serif italic text-xs sm:text-sm text-[#A6B29A] uppercase tracking-wider">
            InshaAllah
          </p>
        </div>
      </div>
    </section>
  );
}
