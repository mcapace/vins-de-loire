# Vins de Loire launch checklist

Paste each block into Cursor when ready. External items need URLs or data from the client before they can ship.

---

## Done in repo (verify after deploy)

- [x] Image compression (~941 MB to ~108 MB in `public/images/`)
- [x] `vercel.json` Next.js framework fix
- [x] OG/Twitter metadata in `app/layout.tsx` (uses `NEXT_PUBLIC_SITE_URL`)
- [x] Favicon/icon metadata pointing at brand logo PNG
- [x] GA4 loader gated by cookie consent (`components/GoogleAnalytics.tsx`)
- [x] Cookie consent banner (`components/CookieConsent.tsx`)
- [x] Sponsor disclosure in footer (legal review flag still visible)

---

## Prompt 1: Vercel environment variables

```
Set these in the Vercel project vins-de-loire (Production + Preview):

NEXT_PUBLIC_SITE_URL = the canonical production URL (e.g. https://loire.winespectator.com when DNS is live)
NEXT_PUBLIC_GA_MEASUREMENT_ID = G-XXXXXXXXXX from the WS/brand GA4 property

Redeploy after saving. Confirm OG debugger shows the hero image and title.
```

---

## Prompt 2: GA4 validation

```
After NEXT_PUBLIC_GA_MEASUREMENT_ID is set in Vercel, confirm GA4 only loads after Accept analytics on the cookie banner. Use GA4 Realtime to verify one page_view on /. Document the property ID in README for the team.
```

---

## Prompt 3: Consent / CMP (if brand requires a vendor)

```
We have a first-party cookie banner. If Wine Spectator or InterLoire requires OneTrust, Cookiebot, or similar, replace components/CookieConsent.tsx and wire the vendor script in SiteProviders. Keep GA4 blocked until marketing consent is granted. No em dashes in UI copy.
```

---

## Prompt 4: Privacy Policy link

```
Replace href="#" on the cookie banner Privacy Policy link and footer Privacy Policy link with the approved Wine Spectator or program privacy URL. Same for Terms of Use when URLs exist.
```

---

## Prompt 5: Sponsor disclosure (legal sign-off)

```
Legal approved this exact disclosure text: [paste approved line].

Update components/Footer.tsx: replace sponsorDisclosure from lib/site.ts if needed, remove the "Legal review pending" span, and ensure the line matches legal copy character for character. No em dashes.
```

---

## Prompt 6: Wine scores (external, pending)

```
Populate src/data/wines.ts with the approved Kristen Bieler / Wine Spectator list. Do not invent entries. Each wine needs id, name, producer, appellation, color, wsScore, tastingNote, vintage, optional imageUrl. WineGrid renders automatically when the array is non-empty.
```

---

## Prompt 7: Trade signup URL (external, pending)

```
Set the Join the Loire Trade Network button href in components/EducationCTA.tsx to: [paste URL]

Remove the TODO comment. Open in new tab if the destination is external (target="_blank" rel="noopener noreferrer").
```

---

## Prompt 8: Education download URL (external, pending)

```
Set the Download educational material button href in components/EducationCTA.tsx to: [paste PDF or page URL]

Remove the TODO comment. Use download attribute if it is a direct PDF file.
```

---

## Prompt 9: Custom domain

```
Add domain [loire.winespectator.com] in Vercel project Domains. Update NEXT_PUBLIC_SITE_URL to match. Provide DNS records to infra (Anu). Verify HTTPS and redirect from vins-de-loire.vercel.app if required.
```

---

## Prompt 10: Pre-deploy smoke test

```
Run npm run build and npm run lint. Confirm no placeholder href="#" remains except items explicitly still pending. Check / at 375px, 768px, 1440px. Run Lighthouse on production URL after deploy.
```
