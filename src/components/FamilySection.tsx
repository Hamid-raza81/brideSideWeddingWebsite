import React from "react";
import { weddingData } from "@/data/wedding";
import { OrnamentalDivider } from "./OrnamentalDivider";
import { Users } from "lucide-react";

export function FamilySection() {
  // Keep the bride's family first to match the couple name order everywhere.
  const familySides = [weddingData.families.bride, weddingData.families.groom];

  return (
    <section id="families" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FFFDF9] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-serif uppercase tracking-[0.2em] text-[#8A6D47] text-xs sm:text-sm font-semibold">
            Honoured Lineage
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-[#46343A] font-bold tracking-tight mt-2 mb-3">
            Our Respected Families
          </h2>
          <p className="font-serif italic text-sm sm:text-base text-[#75636A]">
            With deep reverence to our elders and gratitude to the Almighty, our families join in celebrating this sacred union.
          </p>
          <OrnamentalDivider variant="gold" symbol="diamond" className="mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {familySides.map((family) => {
            const isGroom = family.side === "groom";
            const relationshipLabel = isGroom ? "Son of" : "Daughter of";
            const parentLabel = "Family Address";
            const relationship = family.relationshipTitle.replace(`${relationshipLabel} `, "");
            const parentDetail = family.fatherInfo;

            return (
              <article key={family.side} className="relative rounded-3xl bg-[#FFFDF9] border-2 border-[#C6A46A]/30 p-8 sm:p-10 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="flex items-center mb-6 pb-4 border-b border-[#C6A46A]/20">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A6B29A]/20 text-[#46343A] font-serif text-xs font-semibold uppercase tracking-wider">
                      <Users className="w-3.5 h-3.5 text-[#8A6D47]" />
                      <span>{family.title}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-widest text-[#A6B29A] font-serif block">
                      {isGroom ? "The Groom" : "The Bride"}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#46343A] mt-1">
                      {family.candidateName}
                    </h3>
                  </div>

                  <div className="space-y-4 font-serif text-sm sm:text-base text-[#46343A]">
                    <div className="p-3.5 rounded-xl bg-[#FFF9F3] border border-[#C6A46A]/20">
                      <span className="text-xs uppercase tracking-wider text-[#A6B29A] block font-semibold">
                        {relationshipLabel}
                      </span>
                      <p className="font-display text-base font-semibold text-[#46343A] mt-0.5">
                        {relationship}
                      </p>
                    </div>

                    {isGroom && <div className="p-3.5 rounded-xl bg-[#FFF9F3] border border-[#C6A46A]/20">
                      <span className="text-xs uppercase tracking-wider text-[#A6B29A] block font-semibold">
                        {parentLabel}
                      </span>
                      <p className="font-display text-base font-semibold text-[#46343A] mt-0.5">
                        {parentDetail}
                      </p>
                    </div>}
                  </div>
                </div>

                {family.issuedBy && (
                  <div className="mt-8 pt-4 border-t border-[#C6A46A]/20 text-center">
                    <p className="font-serif italic text-xs sm:text-sm text-[#8A6D47] font-medium">
                      {family.issuedBy}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
