"use client";

import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

interface BackgroundMusicPlayerProps {
  autoStart: boolean;
  isPausedByVideo: boolean;
}

export function BackgroundMusicPlayer({
  autoStart,
  isPausedByVideo,
}: BackgroundMusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userMuted, setUserMuted] = useState(false);

  // When autoStart is triggered (video ended) and not muted
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (autoStart && !isPausedByVideo && !userMuted) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay policy prevented playback, user can tap floating button
            setIsPlaying(false);
          });
      }
    } else if (isPausedByVideo && isPlaying) {
      audio.pause();
      setIsPlaying(false);
    }
  }, [autoStart, isPausedByVideo, userMuted]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setUserMuted(true);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
        setUserMuted(false);
      }).catch(() => {});
    }
  };

  // Only show floating button once the video has completed / page is active
  if (!autoStart) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/wedding-bg-music.mp3"
        loop
        preload="auto"
      />

      {/* Floating Glassmorphic Music Player Pill */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 animate-fade-in">
        <button
          type="button"
          onClick={toggleMusic}
          aria-label={isPlaying ? "Mute background music" : "Play background music"}
          className="group inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#18281F]/90 hover:bg-[#243A2D] text-[#E5C365] border border-[#B58B35]/60 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer glow-gold"
          title={isPlaying ? "Pause background music" : "Play background music"}
        >
          {isPlaying ? (
            <>
              {/* Animated Equalizer Wave Bars */}
              <div className="flex items-end gap-0.5 h-3.5 w-3.5">
                <span className="w-0.5 bg-[#E5C365] rounded-full animate-music-bar-1 h-2" />
                <span className="w-0.5 bg-[#E5C365] rounded-full animate-music-bar-2 h-3.5" />
                <span className="w-0.5 bg-[#E5C365] rounded-full animate-music-bar-3 h-1.5" />
              </div>
              <Volume2 className="w-3.5 h-3.5 text-[#E5C365]" />
              <span className="font-serif text-[11px] sm:text-xs uppercase tracking-wider font-semibold">
                Music Playing
              </span>
            </>
          ) : (
            <>
              <Music className="w-3.5 h-3.5 text-[#9DA78B]" />
              <VolumeX className="w-3.5 h-3.5 text-[#9DA78B]" />
              <span className="font-serif text-[11px] sm:text-xs uppercase tracking-wider text-[#9DA78B] font-medium">
                Music Paused
              </span>
            </>
          )}
        </button>
      </div>
    </>
  );
}
