/**
 * Reuse this invitation by updating the client configuration below and the
 * gallery entries at the end of this file. Put replacement assets in
 * public/images/ and point the asset fields and gallery entries at /images/... paths.
 */
export interface WeddingEvent {
  id: string;
  name: string;
  subTitle: string;
  date: string;
  dateISO: string;
  time: string;
  timeISO?: string;
  mealDetail?: string;
  venue: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  mapsSearchUrl?: string;
  mapsEmbedUrl?: string;
  badge: string;
}

export interface FamilySide {
  side: "bride" | "groom";
  title: string;
  candidateName: string;
  relationshipTitle: string;
  fatherInfo: string;
  additionalInfo: string;
  issuedBy?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
  tag: string;
}

export interface WeddingData {
  bismillahArabic: string;
  bismillahEnglish: string;
  bride: {
    fullName: string;
    shortName: string;
  };
  groom: {
    fullName: string;
    shortName: string;
  };
  monogram: string;
  assets: {
    heroImageSrc: string;
    introVideoSrc: string;
    backgroundMusicSrc: string;
  };
  seo: {
    description: string;
  };
  dateSummary: string;
  locationSummary: string;
  timezoneLabel: string;
  mainInvitationMessage: {
    heading: string;
    invitationBy: string;
    hostAddress: string;
    body: string;
    eventInvite: string;
  };
  events: WeddingEvent[];
  families: {
    bride: FamilySide;
    groom: FamilySide;
  };
  closing: {
    title: string;
    duaArabic: string;
    duaTranslation: string;
    message: string;
    compliments: string;
  };
  shareDetails: {
    title: string;
    closingMessage: string;
    messageText: string;
  };
  qrCode: {
    title: string;
    caption: string;
  };
  gallery: {
    heading: string;
    description: string;
  };
  footer: {
    businessName: string;
    phoneDisplay: string;
    phoneHref: string;
  };
}

const brideDetails = {
  fullName: "Sania Raza",
  shortName: "Sania",
};
const groomDetails = {
  fullName: "Aftab Alam",
  shortName: "Aftab",
};
const familyDetails = {
  brideFather: "Md Aslam Ansari",
  brideMother: "Shabana Khatoon",
  groomFather: "Md Salim Ansari",
};
const residenceAddress = "Road No. 13, Zakirnagar, Mango, Jamshedpur, Jharkhand";
const venueName = "Grand Markaz Banquet Hall";
const venueAddress = "2, Old Purulia Road, Zakir Nagar, Mango";
const venueCity = "Jamshedpur";
const venueState = "Jharkhand";
const venueCountry = "India";
const venueMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Grand+Markaz+Banquet+Hall%2C+Mango%2C+Jamshedpur";
const venueMapEmbedUrl =
  "https://www.google.com/maps?q=Grand%20Markaz%20Banquet%20Hall%2C%202%20Old%20Purulia%20Road%2C%20Zakir%20Nagar%2C%20Mango%2C%20Jamshedpur%2C%20Jharkhand%20831012&output=embed";

// Main client configuration: edit names, artwork, media, location, and dates here.
export const weddingData: WeddingData = {
  bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  bismillahEnglish:
    "In the name of Allah, the Most Beneficent, the Most Merciful",
  bride: brideDetails,
  groom: groomDetails,
  monogram: `${brideDetails.shortName[0]} & ${groomDetails.shortName[0]}`,
  assets: {
    heroImageSrc: "/images/sania-aftab-hero.png",
    introVideoSrc: "/images/gemini_generated_video_03cf4159.mp4",
    backgroundMusicSrc: "/audio/wedding-bg-music.mp3",
  },
  seo: {
    description: `Join ${brideDetails.fullName} with ${groomDetails.fullName} for wedding celebrations on 06, 07, and 08 December 2026 in ${venueCity}, ${venueState}.`,
  },
  dateSummary: "08 December 2026",
  locationSummary: "Jamshedpur, Jharkhand, India",
  timezoneLabel: "Indian Standard Time (IST)",
  mainInvitationMessage: {
    heading: "Wedding Invitation",
    invitationBy: `Mr. ${familyDetails.brideFather} & Mrs. ${familyDetails.brideMother}`,
    hostAddress: residenceAddress,
    body: `cordially invite you to share in the wedding celebrations of their daughter, ${brideDetails.fullName}, with ${groomDetails.fullName}.`,
    eventInvite:
      "With the blessings of Allah and our families, we invite you to join us for the Haldi, Mehndi, Nikah, and dinner.",
  },
  events: [
    {
      id: "haldi",
      name: "Haldi Ceremony",
      subTitle: "A joyful beginning to the celebrations",
      date: "Sunday, 06 December 2026",
      dateISO: "2026-12-06",
      time: "4:00 PM",
      timeISO: "2026-12-06T16:00:00+05:30",
      venue: "Our Residence",
      address: residenceAddress,
      badge: "Haldi",
    },
    {
      id: "mehndi",
      name: "Mehndi Ceremony",
      subTitle: "An evening of color and celebration",
      date: "Monday, 07 December 2026",
      dateISO: "2026-12-07",
      time: "7:00 PM",
      timeISO: "2026-12-07T19:00:00+05:30",
      venue: "Our Residence",
      address: residenceAddress,
      badge: "Mehndi",
    },
    {
      id: "nikah",
      name: "Mehfil-e-Nikah",
      subTitle: "The Sacred Marriage Ceremony",
      date: "Tuesday, 08 December 2026",
      dateISO: "2026-12-08",
      time: "12:30 PM",
      timeISO: "2026-12-08T12:30:00+05:30",
      venue: venueName,
      address: venueAddress,
      city: venueCity,
      state: venueState,
      country: venueCountry,
      mapsSearchUrl: venueMapUrl,
      mapsEmbedUrl: venueMapEmbedUrl,
      badge: "Nikah Ceremony",
    },
    {
      id: "dinner",
      name: "Dinner",
      subTitle: "Dinner following the Nikah celebration",
      date: "Tuesday, 08 December 2026",
      dateISO: "2026-12-08",
      time: "8:00 PM",
      timeISO: "2026-12-08T20:00:00+05:30",
      venue: venueName,
      address: venueAddress,
      city: venueCity,
      state: venueState,
      country: venueCountry,
      mapsSearchUrl: venueMapUrl,
      badge: "Dinner",
    },
  ],
  families: {
    bride: {
      side: "bride",
      title: "Bride's Family",
      candidateName: brideDetails.fullName,
      relationshipTitle: `Daughter of ${familyDetails.brideFather}`,
      fatherInfo: `Daughter of ${familyDetails.brideFather} (${venueCity})`,
      additionalInfo: "Grand youngest daughter of the family",
      issuedBy: `Invitation extended by ${familyDetails.brideFather} & family.`,
    },
    groom: {
      side: "groom",
      title: "Groom's Family",
      candidateName: groomDetails.fullName,
      relationshipTitle: `Son of ${familyDetails.groomFather}`,
      fatherInfo: `T.O.P., ${venueCity}, ${venueState}`,
      additionalInfo: `T.O.P., ${venueCity}, ${venueState}`,
    },
  },
  closing: {
    title: "With Heartfelt Gratitude & Duas",
    duaArabic:
      "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    duaTranslation:
      "“May Allah bless you, shower His blessings upon you, and unite you both in goodness.”",
    message:
      "Thank you for being part of our celebration. Your presence and duas mean so much to our families. May Allah bless this union with love, mercy, peace, and barakah.",
    compliments: "With best compliments from Relatives & Friends",
  },
  shareDetails: {
    title: `Wedding Invitation — ${brideDetails.fullName} & ${groomDetails.fullName}`,
    closingMessage: "Your presence will make our wedding shine brighter.",
    messageText: `Assalamu Alaikum! You are warmly invited to celebrate ${brideDetails.fullName} with ${groomDetails.fullName}.`,
  },
  qrCode: {
    title: `${venueName} Google Maps QR`,
    caption: `Scan to open ${venueName} in Google Maps.`,
  },
  gallery: {
    heading: `${venueName} Gallery`,
    description: `Explore two views of ${venueName}. Tap a photo to view it in full size.`,
  },
  footer: {
    businessName: "HR softwaresSolutions",
    phoneDisplay: "6207003180",
    phoneHref: "tel:+916207003180",
  },
};

export const galleryItems: GalleryItem[] = [
  {
    id: "venue-exterior",
    title: `${venueName} by Night`,
    caption: `The illuminated exterior entrance of ${venueName}.`,
    src: "https://content.jdmagicbox.com/comp/jamshedpur/v1/0657px657.x657.191207071503.t6v1/catalogue/grand-markaz-banquet-jamshedpur-0yjgk6nfx9.jpg",
    alt: `Illuminated ${venueName} exterior in ${venueCity}`,
    tag: "Venue",
  },
  {
    id: "venue-aisle",
    title: "Wedding Aisle",
    caption: `A decorated aisle inside ${venueName}.`,
    src: "https://content.jdmagicbox.com/comp/jamshedpur/v1/0657px657.x657.191207071503.t6v1/catalogue/grand-markaz-banquet-mango-jamshedpur-banquet-halls-ut5zpy22k1.jpg",
    alt: `Wedding aisle with decorated arches at ${venueName}`,
    tag: "Venue",
  },
];
