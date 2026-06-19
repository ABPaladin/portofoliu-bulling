# Buga Victoria — Anti-Bullying Portfolio

A modern rebuild of the *“Portofoliu Bulling”* Google Sites website of **Buga Victoria**, psychologist.
The original export was refactored from scratch into a **React + Vite + Tailwind CSS** single-page
application with full **English / Romanian / Czech** internationalization.

> 🕊️ *Împreună oprim bullying-ul — Together we stop bullying.*

## ✨ Features

- **Vite + React 18** SPA with `react-router-dom` (hash routing — deploys anywhere, no server config).
- **Tailwind CSS** design system (green brand palette from the original dove logo), mobile-first & responsive.
- **react-i18next** with EN / RO / CS, language selector in the navbar, choice **persisted in `localStorage`**, default **English**.
- Reusable components (`Navbar`, `Footer`, `DocumentCard`, `AudienceCard`, `MissionPillars`, `QuoteBlock`, `PageHero`, …).
- All content, images, the embedded Google Slides presentation and the 8 Google Drive documents from the export are preserved.
- Images optimized (≈15.6 MB → ≈1.4 MB) and lazy-loaded; accessibility built in (skip link, focus rings, semantic landmarks, alt text, `prefers-reduced-motion`).

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
├── vite.config.js             # Vite config (relative base for any host)
├── tailwind.config.js         # Brand palette, fonts, animations
├── postcss.config.js
└── src/
    ├── main.jsx               # Entry point + HashRouter + i18n bootstrap
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
    │   ├── DocumentCard.jsx   # Drive PDF/DOCX/PPTX cards
    │   ├── QuoteBlock.jsx
    │   └── ScrollToTop.jsx
    ├── data/
    │   ├── navigation.js      # Single source of truth for pages
    │   ├── resources.js       # Drive doc IDs, presentation, contact
    │   └── assets.js          # Image registry
    ├── i18n/
    │   ├── index.js           # i18next config (localStorage + navigator)
    │   └── locales/
    │       ├── en.json        # English (default)
    │       ├── ro.json        # Romanian (original source language)
    │       └── cs.json        # Czech
    └── pages/
        ├── Home.jsx
        ├── About.jsx          # "Despre mine"
        ├── Project.jsx        # SMART objectives
        ├── ForStudents.jsx    # Letter, videos, games, gallery
        ├── ForParents.jsx     # Guides to download
        ├── ForTeachers.jsx    # Materials to download
        ├── Evaluation.jsx     # Feedback form (mailto, no backend)
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

`npm run build` outputs a static `dist/` folder. Because routing uses `HashRouter` and Vite `base: './'`,
it works on GitHub Pages, Netlify, Vercel, or by simply uploading `dist/` to any static host.
