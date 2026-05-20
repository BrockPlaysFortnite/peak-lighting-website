// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// When deploying to GitHub Pages as a *project* page (username.github.io/<repo>),
// set `site` to your GH Pages root and `base` to the repo name.
// Set both via env so we can flip between preview (project page) and
// production (apex domain) without editing this file.
const site = process.env.SITE_URL ?? "https://example.github.io";
const baseRaw = process.env.BASE_PATH ?? "/";
// Astro requires the base to end with a trailing slash for paths to compose correctly.
const base = baseRaw.endsWith("/") ? baseRaw : `${baseRaw}/`;

export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
