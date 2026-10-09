"use client";

import React, { useState } from "react";
import { HeroVideoIntro } from "@/components/HeroVideoIntro";
import { SiteNavigation } from "@/components/SiteNavigation";
import { WeddingHero } from "@/components/WeddingHero";
import { WelcomeSection } from "@/components/WelcomeSection";
import { WeddingEvents } from "@/components/WeddingEvents";
import { WeddingCountdown } from "@/components/WeddingCountdown";
import { FamilySection } from "@/components/FamilySection";
import { VenueSection } from "@/components/VenueSection";
import { ShareInvitation } from "@/components/ShareInvitation";
import { ClosingSection } from "@/components/ClosingSection";

export default function WeddingPage() {
  // Full-screen video shows first when the user lands on the site
  const [isVideoActive, setIsVideoActive] = useState(true);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleVideoComplete = () => {
    setIsVideoActive(false);
  };

  const handleReplayVideo = () => {
    setIsVideoActive(true);
  };

  return (
    <main className="min-h-screen bg-[#F8F3E8] relative selection:bg-[#B58B35]/20 selection:text-[#243A2D]">
      {/* Full-Screen Video Presentation — Shows first before page content */}
      <HeroVideoIntro
        isActive={isVideoActive}
        onComplete={handleVideoComplete}
      />

      {/* Main Site Header Navigation */}
      <SiteNavigation
        onOpenShareModal={() => setIsShareModalOpen(true)}
      />

      {/* Hero Presentation with Couple Artwork */}
      <WeddingHero />

      {/* Welcome Card & Grandmother's Invitation */}
      <WelcomeSection />

      {/* Wedding Events: Nikah & Valima */}
      <WeddingEvents />

      {/* Live Countdown to Nikah */}
      <WeddingCountdown />

      {/* Respected Lineage & Family Details */}
      <FamilySection />

      {/* Venues & Google Maps Directions */}
      <VenueSection />

      {/* WhatsApp Sharing & QR Code Section */}
      <ShareInvitation
        isModalOpen={isShareModalOpen}
        onCloseModal={() => setIsShareModalOpen(false)}
      />

      {/* Closing Sunnah Dua & Family Gratitude */}
      <ClosingSection
        onReplayIntro={handleReplayVideo}
      />
    </main>
  );
}
