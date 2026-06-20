# Buga Victoria — Anti-Bullying Portfolio

A modern rebuild of the *“Portofoliu Bulling”* Google Sites website of **Buga Victoria**, psychologist.
The original export was refactored from scratch into a **React + Vite + Tailwind CSS** single-page
application with full **English / Romanian / Czech** internationalization.

> 🕊️ *Împreună oprim bullying-ul — Together we stop bullying.*

## ✨ Features

- **Vite + React 18** SPA with `react-router-dom` (`BrowserRouter`, clean URLs — `vercel.json` rewrites every path to `index.html`).
- **Tailwind CSS** design system (green brand palette from the original dove logo), mobile-first & responsive.
- **react-i18next** with EN / RO / CS, language selector in the navbar, choice **persisted in `localStorage`**, default **English**.
- Reusable components (`Navbar`, `Footer`, `DocumentCard`, `AudienceCard`, `MissionPillars`, `QuoteBlock`, `PageHero`, `Quiz`, …).
- A dedicated **Moldova × Czech Republic collaboration** page ("Unitate prin Diversitate") with project photo gallery + videos.
- An **interactive knowledge quiz** on the Evaluation page (scoring + per-question feedback), plus a mailto feedback form.
- The students' page embeds **5 YouTube videos + 2 Padlet games**; teachers/parents pages keep the original Drive documents + local project files (`/public/docs`).
- Images optimized and lazy-loaded; accessibility built in (skip link, focus rings, semantic landmarks, alt text, `prefers-reduced-motion`).

## 🚀 Getting started

```bash
# 1. install dependencies
npm install

# 2. start the dev server (http://localhost:5173)
npm run dev

# 3. production build  ->  dist/
npm run build

# 4. preview the production build locally
npm run preview
```

## 📁 Project structure

```
buga-victoria-site/
├── index.html                 # App shell, fonts, favicon, meta
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite config (base '/')
├── vercel.json                # Vercel build + SPA rewrite for BrowserRouter
├── tailwind.config.js         # Brand palette, fonts, animations
├── postcss.config.js
├── public/
│   └── docs/                  # Local project files (PDF/PPTX) served as-is
└── src/
    ├── main.jsx               # Entry point + BrowserRouter + i18n bootstrap
    ├── App.jsx                # Routes
    ├── index.css              # Tailwind layers + base styles
    ├── assets/                # Optimized images (hashed by Vite)
    ├── components/
    │   ├── Layout.jsx         # Skip link + Navbar + Footer shell
    │   ├── Navbar.jsx         # Responsive nav + mobile drawer
    │   ├── LanguageSwitcher.jsx
    │   ├── Logo.jsx
    │   ├── Footer.jsx
    │   ├── PageHero.jsx
    │   ├── SectionHeading.jsx
    │   ├── MissionPillars.jsx # Prevent / Protect / Educate
    │   ├── AudienceCard.jsx
    │   ├── DocumentCard.jsx   # PDF/DOCX/PPTX cards (Drive + local)
    │   ├── QuoteBlock.jsx
    │   ├── Quiz.jsx           # Interactive scored knowledge quiz
    │   └── ScrollToTop.jsx
    ├── data/
    │   ├── navigation.js      # Single source of truth for pages
    │   ├── resources.js       # Drive/local doc + presentation + contact
    │   ├── media.js           # Students' YouTube videos + Padlet games
    │   └── assets.js          # Image registry (+ Czech project photos/videos)
    ├── i18n/
    │   ├── index.js           # i18next config (localStorage + navigator)
    │   └── locales/
    │       ├── en.json        # English (default)
    │       ├── ro.json        # Romanian (original source language)
    │       └── cs.json        # Czech
    └── pages/
        ├── Home.jsx
        ├── About.jsx               # "Despre mine"
        ├── Project.jsx             # SMART objectives + real outcomes
        ├── CzechCollaboration.jsx  # Moldova × Czech partnership + media
        ├── ForStudents.jsx         # Letter, YouTube videos, Padlet games, gallery
        ├── ForParents.jsx          # Letter of intent + guides to download
        ├── ForTeachers.jsx         # Materials to download (Drive + local)
        ├── Evaluation.jsx          # Knowledge quiz + mailto feedback form
        └── NotFound.jsx
```

## 🌍 Internationalization

- Translations live in `src/i18n/locales/{en,ro,cs}.json`. Add a key in all three files and use it
  via `t('namespace.key')`.
- The selected language is stored under the `lang` key in `localStorage` and reflected on `<html lang>`.
- Romanian text is taken verbatim from the original site; English and Czech are equivalent translations.

## 📄 Pages mapped from the Google Sites export

| Original (Google Sites) | New route | Notes |
|---|---|---|
| Главная страница | `/` | Hero, presentation, audience cards, mission |
| Обо мне | `/about` | Bio + research motivation |
| Страница проекта | `/project` | Goal + 5 SMART objectives |
| Pentru elevi | `/students` | Letter, videos, games, image gallery |
| Pentru părinți | `/parents` | 4 downloadable Drive documents |
| Pentru cadre didactice | `/teachers` | 4 downloadable Drive materials |
| Evaluare proiect / evaluarea editare | `/evaluation` | Two empty draft pages merged into a feedback page |

## 🔗 Preserved external resources

- **Presentation:** Google Slides *“Bullying-ul pe înțelesul tuturor”* (embedded on the home page).
- **Documents:** the original Google Drive PDF / DOCX / PPTX files are linked by their real file IDs
  in `src/data/resources.js` (open + download). If a file is private, share it publicly in Drive for
  visitors to access it.
- **Contact:** viki.pancenco@gmail.com
- **License:** content © Buga Victoria, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

## 🛠️ Deployment

`npm run build` outputs a static `dist/` folder. The app is configured for **Vercel** (`vercel.json`
sets the Vite build + an SPA rewrite so deep links and refresh work with the clean `BrowserRouter` URLs).
Connect the repo to Vercel (or run `vercel --prod`); a custom domain (e.g. from Namecheap) can be added in
the project's **Settings → Domains**.
