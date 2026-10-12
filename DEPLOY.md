# Deploy guide – GitHub Pages + Namecheap domain

Domain: **aquasevasaleandservice.com** (domain names are not case-sensitive; use lowercase in settings).
Cost: GitHub Pages hosting is free for a public repository. You only pay Namecheap for the domain each year.

> Do the steps in this order. GitHub wants the custom domain added **before** you change DNS at Namecheap.

## Part A – Put the project on GitHub

1. Sign in at github.com → **New repository**. Name: `aqua-seva-website`. Choose **Public**. Do not add a README. Click **Create repository**.
2. Unzip the project. In a terminal inside the `aqua-seva-service` folder run (replace YOUR-USERNAME):
   ```bash
   git init
   git add .
   git commit -m "Aqua Seva Service website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/aqua-seva-website.git
   git push -u origin main
   ```
   (No terminal? Install **GitHub Desktop**, add the folder, and click Publish repository. Make sure the hidden `.github` folder is included; it contains the automatic deploy file.)
3. On GitHub open **Settings → Pages**. Under **Build and deployment → Source** choose **GitHub Actions**.
4. Open the **Actions** tab. The workflow *Deploy website to GitHub Pages* runs (about 2–3 minutes). Wait for the green tick.

> Until the custom domain is connected, the default address `YOUR-USERNAME.github.io/aqua-seva-website` will look broken. That is normal: the site is built to run at the root of your own domain. Do not judge it from that address.

## Part B – Connect aquasevasaleandservice.com

5. **Settings → Pages → Custom domain**: type `aquasevasaleandservice.com` and click **Save**.
6. At **Namecheap → Domain List → Manage → Advanced DNS**:
   - Delete the default parking records (the URL Redirect record and the `www` CNAME pointing to Namecheap's parking page).
   - Add these records (TTL: Automatic):

   | Type | Host | Value |
   |---|---|---|
   | A Record | @ | 185.199.108.153 |
   | A Record | @ | 185.199.109.153 |
   | A Record | @ | 185.199.110.153 |
   | A Record | @ | 185.199.111.153 |
   | CNAME Record | www | YOUR-USERNAME.github.io. |

7. Wait. DNS can take a few minutes up to 24–48 hours. In **Settings → Pages** click **Check again** until the DNS check turns green.
8. Tick **Enforce HTTPS** (the padlock). The free certificate can take an hour or more to appear; if the box is greyed out, wait and refresh.
9. Open https://aquasevasaleandservice.com. `www.aquasevasaleandservice.com` redirects to it automatically.
10. Recommended security step: in your GitHub **profile Settings → Pages → Add a domain**, add the domain and create the TXT record GitHub shows at Namecheap. This stops anyone else from claiming your domain on GitHub.

## Part C – After it is live (for Google)

1. **Google Search Console** → Add property → `https://aquasevasaleandservice.com/` → verify (easiest: DNS TXT record at Namecheap) → **Sitemaps** → submit `sitemap.xml`.
2. **Google Business Profile**: create or claim your listing, add the website, phone, hours (24x7), photos, services and service areas (Pune, Chinchwad, Jalgaon). Ask happy customers for reviews, then paste your review link into `googleReviewUrl` in `src/data/siteData.js`.
3. If you also own **aquasevaservice.com**, make it redirect (301) to the new site from wherever it is hosted, so people and Google find the new address.
4. Download the images from your old site into `public/images/` and update the paths in `src/data/siteData.js`, so the site does not depend on the old website.
5. Add your real Facebook / X / Instagram links (`site.social`) and confirm prices and milestone labels.

## Updating the website later
Edit files → `git add . && git commit -m "update" && git push`. GitHub rebuilds and publishes automatically in a few minutes.
Changing the domain: edit `site.url` in `src/data/siteData.js`, `public/CNAME`, and the domain in `index.html` (canonical link and JSON-LD).

## Troubleshooting
- **"DNS check unsuccessful / record could not be retrieved"**: wait longer, and check the four A records and the `www` CNAME at Namecheap have no typos.
- **Site shows an old version**: hard refresh (Ctrl+Shift+R) and check the Actions tab for a green tick.
- **Enforce HTTPS is greyed out**: the certificate is still being created. Wait and refresh.
- **Build failed (red cross) in Actions**: open the run and read the error, then send it to me.
- **Contact enquiry**: needs no setup. The form opens WhatsApp addressed to the number in `phoneRaw` (`src/data/siteData.js`).
