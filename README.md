# Equinox Sports Infra — React Redesign

A modern, responsive React rebuild of [equinoxsportsinfra.com](https://equinoxsportsinfra.com),
covering all 28 pages with a clean component/data architecture, parallax sections and
smooth scroll/hover/text animations.

Built with **React 19 + Vite**, **React Router**, and **Framer Motion**.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
```

Build for production:

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build
```

The app runs immediately — images stream from the live site by default (see below).

---

## Images

All images keep their original relative paths (e.g. `/assets/img/about/gym.jpg`) and are
resolved through one helper in **`src/config/media.js`**:

```js
export const MEDIA_BASE = "https://equinoxsportsinfra.com"; // default: live CDN
```

### Self-host the images (recommended for production)

1. Run the downloader (needs internet; grabs every image into `public/images`, preserving
   the original folder structure):

   ```bash
   npm run download-images
   ```

2. Switch the base to your local copy — change **one line** in `src/config/media.js`:

   ```js
   export const MEDIA_BASE = "/images";
   ```

That's it — the whole site now serves images from the bundled `public/images` folder.

> Every image path lives in the data files (`src/data/site.js`, `src/data/pages.js`), so the
> download script and the app always stay in sync.

---

## Project structure

```
equinox/
├── public/
│   └── images/                 # ← run `npm run download-images` to populate
├── scripts/
│   └── download-images.mjs     # pulls all images from the live site
├── src/
│   ├── config/
│   │   └── media.js            # MEDIA_BASE + img() helper (remote ↔ local switch)
│   ├── data/
│   │   ├── site.js             # company info, nav, hero, testimonials, projects, clients
│   │   └── pages.js            # content for all 25 product/sport/service/other pages
│   ├── components/
│   │   ├── common/             # Reveal, ParallaxSection, Counter, Icons, CTAStrip, …
│   │   ├── layout/             # Navbar (dropdowns + mobile drawer), Footer, Layout
│   │   ├── home/               # HeroSlider, AboutIntro, ServicesSection, Projects, …
│   │   └── detail/             # PageBanner
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── DetailPage.jsx      # one template renders every inner page from data
│   │   └── NotFound.jsx
│   ├── App.jsx                 # routes
│   ├── main.jsx                # entry + BrowserRouter
│   └── index.css               # design system (tokens) + all component styles
└── index.html                  # title, meta, Google Fonts (Archivo + Inter)
```

### Routing

| Path                        | Page                                   |
| --------------------------- | -------------------------------------- |
| `/`                         | Home                                   |
| `/about`                    | About Us                               |
| `/contact`                  | Contact Us                             |
| `/:category/:slug`          | Detail page (data-driven)              |

`category` is one of `products`, `sports`, `other-products`, `services`
(e.g. `/products/synthetic-grass-turf`, `/sports/basketball`, `/services/turnkey-projects`).

To add or edit an inner page, just edit **`src/data/pages.js`** — no new components needed.

---

## Design & animations

- **Identity:** an athletic "stadium" system — deep pitch-green sections, turf-green primary,
  a signal-orange CTA accent (running-track lane markings), Archivo display + Inter body.
- **Parallax** on every major section via Framer Motion (`useScroll` / `useTransform`) —
  a lightweight, free equivalent of the parallax/scroll effects catalogued on
  [21st.dev](https://21st.dev) (its component source isn't publicly downloadable, so effects
  are reimplemented natively for zero extra dependencies and better performance).
- Scroll-reveal, animated counters, hero crossfade, hover lifts, animated nav dropdowns.
- Fully **responsive** (desktop / tablet / mobile) with a slide-in mobile drawer.
- Respects `prefers-reduced-motion`.

---

## Notes

- **Contact form** has no backend in this static build — on submit it opens the visitor's mail
  client pre-filled to `info@equinoxsportsinfra.com`. Wire it to your API/form service
  (Formspree, EmailJS, etc.) in `src/pages/Contact.jsx` if you want server-side handling.
- **Steam and Sauna** page uses placeholder copy — the original page returned 404 on the live
  site, so replace the text in `src/data/pages.js` (`steam-and-sauna`) with your final content.
- Content was transferred from the existing site; social links in the top bar/footer are
  placeholders (`#`) — drop in the real URLs in `src/data/site.js`.
```
