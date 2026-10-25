# Wedding Invitation Website Template

A mobile-first wedding invitation website with an interactive intro, event schedule, Google Maps directions, gallery, countdown, and WhatsApp sharing.

## Personalize for another couple

Edit [`src/data/wedding.ts`](src/data/wedding.ts). Client details are kept there so page components can stay the same:

1. Update the bride and groom names, family names, monogram, invitation text, address, SEO description, and footer contact details.
2. Update `events` with each celebration's name, date, local time, venue, address, and map links. Set each `timeISO` with its correct timezone offset so calendar links show the right time. Also update `dateSummary`, `timezoneLabel`, and the SEO description.
3. Add replacement files under `public/images/` and update `assets.heroImageSrc`, `assets.introVideoSrc`, and `assets.backgroundMusicSrc`. Use paths that start with `/images/` or `/audio/`.
4. Replace the two entries in `galleryItems` with the new client's photos, captions, and alt text. Keep gallery photos in `public/images/` when possible; remote image hosts may need to be added to `next.config.ts`.
5. Update `shareDetails.closingMessage` for the WhatsApp invitation. The event schedule and location details are appended automatically from `events`.

The browser icon monogram is generated from the first letters of the bride and groom names in `weddingData`.

For correct social preview images on a deployed site, set `NEXT_PUBLIC_SITE_URL` to the site's full public URL.

## Run locally

```bash
npm install
npm run dev
```

Open the local address shown in the terminal. For a production check, run `npm run lint` and `npm run build`.
