export interface WeddingEvent {
  id: string;
  name: string;
  subTitle: string;
  date: string;
  dateISO: string;
  islamicDate: string;
  time: string;
  lunchDetail?: string;
  venue: string;
  address: string;
  city: string;
  state: string;
  country: string;
  mapsSearchUrl: string;
  badge: string;
}

export interface FamilySide {
  side: "bride" | "groom";
  title: string;
  candidateName: string;
  qualifications: string;
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
    qualifications: string;
    shortName: string;
  };
  groom: {
    fullName: string;
    qualifications: string;
    shortName: string;
  };
  monogram: string;
  dateSummary: string;
  islamicDateSummary: string;
  locationSummary: string;
  targetDateTimeISO: string; // Nikah target in IST: 2026-10-18T12:30:00+05:30
  mainInvitationMessage: {
    heading: string;
    invitationBy: string;
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
    sbtFamilyCompliments: string;
  };
  shareDetails: {
    title: string;
    messageText: string;
  };
  qrCode: {
    imageSrc: string;
    title: string;
    caption: string;
  };
}

export const weddingData: WeddingData = {
  bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  bismillahEnglish: "In the name of Allah, the Most Beneficent, the Most Merciful",
  bride: {
    fullName: "Madeeha Nikhath",
    qualifications: "M.Sc., B.Ed.",
    shortName: "Madeeha",
  },
  groom: {
    fullName: "Mohammed Ameenuddin Ashrafi",
    qualifications: "B.Com., C.A.",
    shortName: "Ameenuddin",
  },
  monogram: "A & M",
  dateSummary: "18 October 2026",
  islamicDateSummary: "6th Jamadi-ul-Awwal 1448 Hijri",
  locationSummary: "Ballari, Karnataka",
  targetDateTimeISO: "2026-10-18T12:30:00+05:30",
  mainInvitationMessage: {
    heading: "Wedding Invitation",
    invitationBy: "Mrs. Late Mohammed Ghouse Sab.",
    body: "cordially solicits your gracious presence and blessings on the auspicious occasion of the marriage of her granddaughter, Madeeha Nikhath, with Mohammed Ameenuddin Ashrafi.",
    eventInvite: "With the blessings of Allah and our families, we invite you to join us for the Mehfil-e-Nikah and Dawat-e-Valima.",
  },
  events: [
    {
      id: "nikah",
      name: "Mehfil-e-Nikah",
      subTitle: "The Sacred Marriage Ceremony",
      date: "Sunday, 18 October 2026",
      dateISO: "2026-10-18",
      islamicDate: "6th Jamadi-ul-Awwal 1448 Hijri (Inshallaha)",
      time: "12:30 PM",
      lunchDetail: "Lunch: Thereafter",
      venue: "M.R.K Function Hall",
      address: "Near ITI College, Cantonment",
      city: "Ballari",
      state: "Karnataka",
      country: "India",
      mapsSearchUrl:
        "https://www.google.com/maps/search/?api=1&query=M.R.K+Function+Hall+Near+ITI+College+Cantonment+Ballari+Karnataka+India",
      badge: "Nikah Ceremony",
    },
    {
      id: "valima",
      name: "Dawat-e-Valima",
      subTitle: "The Joyful Reception",
      date: "Monday, 19 October 2026",
      dateISO: "2026-10-19",
      islamicDate: "7th Jamadi-ul-Awwal 1448 Hijri",
      time: "1:30 PM",
      venue: "Karnataka Function Hall",
      address: "4th Railway Gate, Hospet Road, Cantonment",
      city: "Ballari",
      state: "Karnataka",
      country: "India",
      mapsSearchUrl:
        "https://www.google.com/maps/search/?api=1&query=Karnataka+Function+Hall+4th+Railway+Gate+Hospet+Road+Cantonment+Ballari+Karnataka+India",
      badge: "Valima Reception",
    },
  ],
  families: {
    bride: {
      side: "bride",
      title: "Bride's Family",
      candidateName: "Madeeha Nikhath",
      qualifications: "M.Sc., B.Ed.",
      relationshipTitle: "Granddaughter of Late Mohammed Ghouse Sab.",
      fatherInfo: "Daughter of Imtiaz (Lorry Owner, Ballari)",
      additionalInfo: "Grand youngest daughter of the family",
      issuedBy: "Invitation cordially extended by Mrs. Late Mohammed Ghouse Sab.",
    },
    groom: {
      side: "groom",
      title: "Groom's Family",
      candidateName: "Mohammed Ameenuddin Ashrafi",
      qualifications: "B.Com., C.A.",
      relationshipTitle: "Son of Alhaj Shamsfuddin Ashrafi",
      fatherInfo: "Retired Sorting Postman, Head Post Office, Ballari",
      additionalInfo: "Residing in Ballari, Karnataka",
    },
  },
  closing: {
    title: "With Heartfelt Gratitude & Duas",
    duaArabic: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    duaTranslation:
      "“May Allah bless you, shower His blessings upon you, and unite you both in goodness.”",
    message:
      "Thank you for being part of our celebration. Your presence and duas mean so much to our families. May Allah bless this union with love, mercy, peace, and barakah.",
    compliments: "With best compliments from Relatives & Friends",
    sbtFamilyCompliments: "With Best Compliments: SBT Family",
  },
  shareDetails: {
    title: "Wedding Invitation — Madeeha Nikhath & Mohammed Ameenuddin Ashrafi",
    messageText:
      "Wedding Invitation — Madeeha Nikhath & Mohammed Ameenuddin Ashrafi\n\nMehfil-e-Nikah: 18 October 2026 at 12:30 PM, M.R.K Function Hall, near ITI College, Cantonment, Ballari.\n\nDawat-e-Valima: 19 October 2026 at 1:30 PM, Karnataka Function Hall, 4th Railway Gate, Hospet Road, Cantonment, Ballari.\n\nWe warmly invite you to join us and bless the couple.",
  },
  qrCode: {
    imageSrc: "/images/invitation-qr.png",
    title: "Digital Invitation QR Code",
    caption:
      "Supplied wedding invitation QR code. Scan with your camera or QR reader to view.",
  },
};

export const galleryItems: GalleryItem[] = [
  {
    id: "wedding-artwork",
    title: "Wedding Floral Artwork",
    caption:
      "Commemorative illustrated wedding artwork of Ameenuddin & Madeeha with pink floral wreath and royal crest.",
    src: "/images/wedding-artwork.png",
    alt: "Ameenuddin weds Madeeha illustrated wedding artwork",
    tag: "Artwork",
  },
  {
    id: "printed-invitation",
    title: "Official Printed Invitation",
    caption:
      "The physical wedding invitation card featuring laser-cut SBT Family filigree cover and royal ivory insert.",
    src: "/images/printed-invitation.jpg",
    alt: "Photograph of physical printed wedding invitation card",
    tag: "Physical Card",
  },
];
