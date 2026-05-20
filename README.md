# Peak Lighting & Energy — Website

Mockup site for Peak Lighting & Energy (Kevin, Santa Barbara).

Built with **Astro 5** + **Tailwind CSS v4**, deployed via **GitHub Pages**.

## Status

This is a **mockup**. Every value that needs Kevin's input is bracketed like `[THIS]` in `src/content.json`. Hard-coded real info (phone, email, PO Box) is also in `content.json` but unbracketed.

## Quick start

```bash
npm install
npm run dev      # local dev at http://localhost:4321
npm run build    # static build → dist/
npm run preview  # serve the built site
```

## Where to edit content

**`src/content.json`** is the single source of truth. Open it, replace anything in `[BRACKETS]` with the real answer from Kevin, save. Done.

To turn testimonials on once we have them, set `"showTestimonials": true` in the same file.

**Logo:** Save Kevin's logo as `public/logo.png` (the Header and Footer already point at this path). Aspect ratio 5:3 works best — the existing image is ~500×300. If you swap formats, update the `<img src>` in `src/components/Header.astro` and `src/components/Footer.astro`.

## What still needs Kevin

Everything in `[BRACKETS]` in `src/content.json`, plus:

- Logo file (SVG or PNG, transparent background)
- Hero / project / map photos (replace the `.placeholder-img` blocks)
- License # (C-XX) — currently bracketed in Why Peak + Footer
- Form backend if `mailto:` isn't acceptable (e.g. Formspree, Web3Forms, Netlify Forms)
- **Map pin location:** currently pinned to 93160 (PO Box ZIP) to match Kevin's original site. Ask if he wants to change it — a PO Box ZIP isn't somewhere customers visit. See the `TODO` comment in `src/components/ServiceArea.astro` for swap options.

## Deploying

The workflow at `.github/workflows/deploy.yml` builds on every push to `main` and deploys to GitHub Pages.

**Preview deploy (project page — recommended for the mockup):**
1. Create a repo, push this code, push to `main`.
2. In repo Settings → Pages, set Source to "GitHub Actions".
3. The action picks up `SITE_URL=https://<your-user>.github.io` and `BASE_PATH=/<repo-name>` automatically. Site goes live at `https://<your-user>.github.io/<repo-name>/`.

**Production deploy (peaklighting.com apex):**
1. In repo Settings → Secrets and variables → Actions → Variables, add:
   - `SITE_URL` = `https://peaklighting.com`
   - `BASE_PATH` = `/`
2. Add a `public/CNAME` file containing `peaklighting.com`.
3. Point the apex DNS at GitHub Pages per their docs.

## Project structure

```
src/
  content.json              ← edit this to update copy
  layouts/Layout.astro      ← html shell, head, fonts
  components/
    Header.astro            ← sticky nav + phone CTA
    Hero.astro              ← H1, sub, dual CTA, placeholder hero image
    Services.astro          ← 4 service cards (from content.json)
    WhyPeak.astro           ← stats + value props (navy background)
    ServiceArea.astro       ← service area + map placeholder
    Testimonials.astro      ← hidden until showTestimonials=true
    Contact.astro           ← contact details + mailto form
    Footer.astro            ← brand recap + nav + © line
    Icons.astro             ← inline SVGs (spark/panel/wrench/shield/phone/...)
  pages/index.astro         ← assembles the page
  styles/global.css         ← Tailwind v4 import + @theme tokens
public/
  favicon.svg               ← placeholder logo glyph (peak + navy)
```

## Brand tokens

Defined in `src/styles/global.css` under `@theme`:

- `--color-navy-{50..950}` — primary brand color
- `--color-amber-brand` (`#f5a623`) and `-soft` — accent for the "lighting / energy" hint
- `--font-sans` / `--font-display` — Inter via Google Fonts

Change those if Kevin's brand book disagrees.
