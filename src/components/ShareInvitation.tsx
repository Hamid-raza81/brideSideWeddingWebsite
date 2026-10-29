"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { weddingData } from "@/data/wedding";
import { copyTextToClipboard } from "@/lib/copyTextToClipboard";
import { OrnamentalDivider } from "./OrnamentalDivider";
import {
  Share2,
  Copy,
  Check,
  QrCode,
  MessageCircle,
  ExternalLink,
  X,
} from "lucide-react";

interface ShareInvitationProps {
  isModalOpen?: boolean;
  onCloseModal?: () => void;
}

export function ShareInvitation({
  isModalOpen = false,
  onCloseModal,
}: ShareInvitationProps) {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const getCurrentUrl = () => typeof window === "undefined" ? (configuredUrl || "") : (configuredUrl || window.location.href);
  const nikahLocationUrl = weddingData.events.find((event) => event.id === "nikah")?.mapsSearchUrl ?? "";
  const locationQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=8&data=${encodeURIComponent(nikahLocationUrl)}`;

  useEffect(() => {
    if (!isModalOpen) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseModal?.();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [isModalOpen, onCloseModal]);

  const shareText = [
    weddingData.shareDetails.messageText,
    weddingData.shareDetails.closingMessage,
  ].join("\n\n");

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: weddingData.shareDetails.title,
          text: shareText,
          url: getCurrentUrl(),
        });
      } catch {
        // The browser can reject sharing when the user dismisses the native sheet.
      }
    } else {
      await handleCopyLink();
    }
  };

  const handleCopyLink = async () => {
    const textToCopy = `${shareText}\n\n${getCurrentUrl()}`;
    try {
      await copyTextToClipboard(textToCopy);
      setCopyFailed(false);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
      setCopyFailed(true);
    }
  };

  const getWhatsAppShareUrl = () => {
    const message = `${shareText}\n\n${getCurrentUrl()}`;
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  };

  const shareCardContent = (
    <div className="relative rounded-3xl bg-[#FFFDF9] border-2 border-[#C6A46A]/40 p-6 sm:p-10 shadow-xl max-w-3xl mx-auto text-center">
      {/* Ornate Corner Accents */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#C6A46A] pointer-events-none" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#C6A46A] pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[#C6A46A] pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#C6A46A] pointer-events-none" />

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6A46A]/15 border border-[#C6A46A]/30 text-[#8A6D47] text-xs font-serif uppercase tracking-widest font-semibold mb-4">
        <Share2 className="w-3.5 h-3.5 text-[#8A6D47]" />
        <span>Share the Joy</span>
      </div>

      <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#46343A] mb-2">
        Share Wedding Invitation
      </h2>

      <p className="font-serif italic text-sm sm:text-base text-[#75636A] max-w-lg mx-auto mb-6">
        Share this auspicious wedding invitation with beloved family, relatives, and friends via WhatsApp or messaging.
      </p>

      <OrnamentalDivider variant="gold" symbol="diamond" className="my-4" />

      {/* Sharing Actions */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-8">
        {/* WhatsApp Direct Share */}
        <a
          href={getWhatsAppShareUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-serif text-xs sm:text-sm uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Share via WhatsApp</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </a>

        {/* Web Share API (if supported) */}
        {
          <button
            type="button"
            onClick={handleNativeShare}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#46343A] hover:bg-[#60464E] text-[#FFF9F3] font-serif text-xs sm:text-sm uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102"
          >
            <Share2 className="w-4 h-4 text-[#D6BC8D]" />
            <span>Share Invitation</span>
          </button>
        }

        {/* Copy Text & Link Fallback */}
        <button
          type="button"
          onClick={handleCopyLink}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#C6A46A] hover:bg-[#C6A46A]/10 text-[#46343A] font-serif text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all duration-300"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-700" />
              <span>Invitation Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-[#8A6D47]" />
              <span>{copyFailed ? "Copy unavailable" : "Copy Invitation Link"}</span>
            </>
          )}
        </button>
      </div>

      {/* QR Code Card Display */}
      <div className="mt-8 pt-8 border-t border-[#C6A46A]/20 max-w-sm mx-auto">
        <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#C6A46A]/30 shadow-md inline-block">
          <div className="relative w-48 h-48 mx-auto bg-[#FFFDF9] p-2">
            <Image
              src={locationQrUrl}
              alt={`QR code for ${weddingData.qrCode.title} directions in Google Maps`}
              fill
              sizes="200px"
              className="object-contain"
              unoptimized
            />
          </div>
          <div className="mt-3 text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-serif font-bold uppercase tracking-wider text-[#46343A]">
              <QrCode className="w-3.5 h-3.5 text-[#8A6D47]" />
              <span>{weddingData.qrCode.title}</span>
            </div>
            <p className="font-serif text-[11px] text-[#75636A] mt-1 max-w-[240px] mx-auto leading-tight">
              {weddingData.qrCode.caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* On-Page Section */}
      <section id="share" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FFF9F3] relative">
        <div className="max-w-5xl mx-auto">{shareCardContent}</div>
      </section>

      {/* Pop-up Share Modal (triggered from navigation or quick actions) */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Share Wedding Invitation"
          className="fixed inset-0 z-50 bg-[#46343A]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
          onClick={onCloseModal}
        >
          <div
            className="relative w-full max-w-lg my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onCloseModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-[#46343A] transition-colors"
              aria-label="Close Share Modal"
            >
              <X className="w-5 h-5" />
            </button>
            {shareCardContent}
          </div>
        </div>
      )}
    </>
  );
}
