# Aqua Seva Service – React JS + Bootstrap (v4, GitHub Pages ready)

Plain **React (JavaScript, no TypeScript)** · **Bootstrap 5** · React Router · Three.js (3D hero) · built with Vite.
Website address: **https://aquasevasaleandservice.com**

## Run on your computer
```bash
npm install
npm run dev        # development, http://localhost:5173
npm run build      # production build (also pre-builds every page) -> /dist
npm run preview    # preview the build
```

## Deploy
See **DEPLOY.md** for the step-by-step GitHub Pages + Namecheap guide. A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and publishes automatically every time you push to `main`.

## What the build does
`npm run build` creates the site, then pre-builds each page into its own HTML file (`/enquiry/index.html`, `/blog/<article>/index.html`, ...) with its own title, description and canonical link, plus `404.html`, `sitemap.xml` and `robots.txt`. GitHub Pages therefore serves real pages (HTTP 200) that Google can read, and refreshing or sharing any page link works.

## Pages
`/` · `/about/` · `/service/` · `/tools/` (RO Care Tools) · `/blog/` · `/blog/<article>/` (4 articles) · `/enquiry/` · `/contact/` · `/privacy-policy/` · 404

## Enquiry form -> WhatsApp
`/enquiry/` has the full form; the Contact page has a short version. On submit WhatsApp opens **addressed to +91-8698565561** with a tidy message and reference number; the customer presses **Send**. (Silent sending needs the paid WhatsApp Business API.) Service buttons link to `/enquiry/?type=repair` etc. to pre-select the enquiry type.
Change the number: `phoneRaw` in `src/data/siteData.js`. Change fields/message: `src/components/EnquiryForm.jsx`, `src/utils/whatsapp.js`.

## Mobile responsive
Tested at 360, 390, 768 and 1366 px: no sideways scrolling. Slide-in menu, sticky Call / WhatsApp / Enquiry bar on phones, 16 px inputs, 44 px touch targets, tap-to-flip cards, stacked tables, lighter 3D hero on phones.

## Features
3D water-drop hero, rotating 3D filter ring, tilt and flip cards, RO Care Tools (membrane health check, service-due calculator, filter guide), call-back strip, FAQ with Google FAQ data, local-business data for Google, installable web-app manifest, cookie notice, feedback block (add real reviews in `reviews`).

## Edit content
Everything lives in `src/data/siteData.js`: website address, phone, email, address, prices, services, areas (Jalgaon included), FAQ, blog articles, privacy text, social links, `googleReviewUrl`, `reviews`.

## Before launch
Follow Part C of DEPLOY.md (Search Console, Google Business Profile, images into `public/images/`, social links, confirm prices and milestone labels).
