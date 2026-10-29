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
    whatsappHref: string;
  };
}

const brideDetails = {
  fullName: "Laila Siddiqui",
  shortName: "Laila",
};
const groomDetails = {
  fullName: "Yusuf Rahman",
  shortName: "Yusuf",
};
const familyDetails = {
  brideFather: "Imran Siddiqui",
  brideMother: "Farah Siddiqui",
  groomFather: "Khalid Rahman",
};
const residenceAddress = "42 Jasmine Street, Gulberg, Lahore";
const venueName = "Noor Garden Banquet";
const venueAddress = "18 Crescent Avenue, Gulberg";
const venueCity = "Lahore";
const venueState = "Punjab";
const venueCountry = "Pakistan";
const venueMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Noor+Garden+Banquet%2C+Gulberg%2C+Lahore";
const venueMapEmbedUrl =
  "https://www.google.com/maps?q=Noor%20Garden%20Banquet%2C%2018%20Crescent%20Avenue%2C%20Gulberg%2C%20Lahore%2C%20Pakistan&output=embed";

// Main client configuration: edit names, artwork, media, location, and dates here.
export const weddingData: WeddingData = {
  bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  bismillahEnglish:
    "In the name of Allah, the Most Beneficent, the Most Merciful",
  bride: brideDetails,
  groom: groomDetails,
  monogram: `${brideDetails.shortName[0]} & ${groomDetails.shortName[0]}`,
  assets: {
    heroImageSrc: "/images/laila-yusuf-hero.png",
    introVideoSrc: "/images/gemini_generated_video_03cf4159.mp4",
    backgroundMusicSrc: "/audio/wedding-bg-music.mp3",
  },
  seo: {
    description: `Join ${brideDetails.fullName} and ${groomDetails.fullName} for wedding celebrations on 12, 13, and 14 February 2027 in ${venueCity}, ${venueState}.`,
  },
  dateSummary: "14 February 2027",
  locationSummary: "Lahore, Punjab, Pakistan",
  timezoneLabel: "Pakistan Standard Time (PKT)",
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
      date: "Friday, 12 February 2027",
      dateISO: "2027-02-12",
      time: "4:00 PM",
      timeISO: "2027-02-12T16:00:00+05:00",
      venue: "Our Residence",
      address: residenceAddress,
      badge: "Haldi",
    },
    {
      id: "mehndi",
      name: "Mehndi Ceremony",
      subTitle: "An evening of color and celebration",
      date: "Saturday, 13 February 2027",
      dateISO: "2027-02-13",
      time: "7:00 PM",
      timeISO: "2027-02-13T19:00:00+05:00",
      venue: "Our Residence",
      address: residenceAddress,
      badge: "Mehndi",
    },
    {
      id: "nikah",
      name: "Mehfil-e-Nikah",
      subTitle: "The Sacred Marriage Ceremony",
      date: "Sunday, 14 February 2027",
      dateISO: "2027-02-14",
      time: "12:30 PM",
      timeISO: "2027-02-14T12:30:00+05:00",
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
      date: "Sunday, 14 February 2027",
      dateISO: "2027-02-14",
      time: "8:00 PM",
      timeISO: "2027-02-14T20:00:00+05:00",
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
      additionalInfo: "Beloved daughter of the family",
      issuedBy: `Invitation extended by ${familyDetails.brideFather} & family.`,
    },
    groom: {
      side: "groom",
      title: "Groom's Family",
      candidateName: groomDetails.fullName,
      relationshipTitle: `Son of ${familyDetails.groomFather}`,
      fatherInfo: `${venueCity}, ${venueState}`,
      additionalInfo: `${venueCity}, ${venueState}`,
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
    whatsappHref: "https://wa.me/916207003180",
  },
};

export const galleryItems: GalleryItem[] = [
  {
    id: "venue-exterior",
    title: "A Night of Celebration",
    caption: "A floral welcome for a joyful celebration.",
    src: "/images/laila-yusuf-hero.png",
    alt: "Floral Muslim wedding invitation artwork",
    tag: "Venue",
  },
  {
    id: "venue-aisle",
    title: "A Blessed Beginning",
    caption: "A keepsake from a beautiful beginning together.",
    src: "/images/laila-yusuf-hero.png",
    alt: "Illustrated Muslim bride and groom with floral details",
    tag: "Venue",
  },
];
