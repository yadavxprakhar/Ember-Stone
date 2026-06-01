# 🔥 Ember & Stone

> *An immersive, Michelin-caliber fine dining experience — crafted in code.*

<br />

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-C8A96E?style=flat-square)](LICENSE)
[![Build](https://img.shields.io/badge/Build-Passing-4CAF50?style=flat-square)](#)

<br />

**Ember & Stone** is a premium, full-stack marketing and reservation website for a high-end wood-fired fine dining restaurant. Designed with a Swiss natural-editorial visual language — dark, moody, cinematic — it delivers a first-class digital experience that mirrors the restaurant's Michelin-starred ambiance.

---

## ✨ Live Preview

🔗 **[emberandstone.vercel.app](https://ember-stone.vercel.app)** 

---


## 🏗️ Architecture & Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | React 19 + Vite 8 | Component-driven UI with lightning-fast HMR |
| **Styling** | Tailwind CSS v4 + `@tailwindcss/vite` | Utility-first CSS with custom `@theme` design tokens |
| **Icons** | Lucide React + Inline SVGs | Crisp, tree-shakable iconography |
| **Typography** | Playfair Display + Inter | Swiss editorial serif/sans-serif pairing |
| **Animations** | CSS Keyframes + IntersectionObserver | Hardware-accelerated scroll reveals & marquee loops |
| **Build Tool** | Rolldown (via Vite 8) | Ultra-fast production bundling (~111ms) |

---

## 🎨 Design System

The visual language is inspired by the natural-editorial aesthetic of high-end Swiss alpine hospitality.

```
Color Palette
─────────────────────────────────────────
Base Black       #0D0D0D   ██  Background canvas
Secondary        #141410   ██  Card & section surfaces
Accent Gold      #C8A96E   ██  Primary brand color
Accent Cream     #F5F0E8   ██  Body & headline text
Muted Text       #8A8478   ██  Secondary descriptors
Footer Black     #0A0A08   ██  Footer base

Typography
─────────────────────────────────────────
Display          Playfair Display (Italic, 400wt)
Body             Inter (400 / 500 / 600wt)

Design Rules
─────────────────────────────────────────
→ Zero border-radius on all elements (Swiss precision)
→ No pure white (#FFF) — all text uses warm cream
→ Uppercase + wide letter-spacing for eyebrow labels
→ Gold outlines on all interactive buttons & inputs
```

---

## 📂 Project Structure

```
Ember & Stone/
├── public/
│   └── images/
│       └── chef.png              # Chef portrait (About section)
│
├── src/
│   ├── components/
│   │   ├── ThreeBackground.jsx   # Organic slate backdrop + candlelight glows + SVG noise
│   │   ├── AnnouncementBar.jsx   # Dismissible gold announcement ribbon
│   │   ├── Navbar.jsx            # Scroll-blur frosted glass navigation
│   │   ├── Hero.jsx              # Full-screen headline + dual CTA
│   │   ├── About.jsx             # Editorial split-layout brand story
│   │   ├── Menu.jsx              # Stateful tabbed menu (Starters / Mains / Desserts / Wines)
│   │   ├── SignatureDishes.jsx   # 3-column showcase card grid
│   │   ├── Events.jsx            # Glassmorphic upcoming events with full-bleed backdrop
│   │   ├── PrivateDining.jsx     # 2×2 occasion grid with slide-up hover text
│   │   ├── StatsBar.jsx          # IntersectionObserver count-up stats strip
│   │   ├── Gallery.jsx           # ∞ Infinite horizontal cinematic film tape marquee
│   │   ├── FAQ.jsx               # Stateful accordion (720px max-width)
│   │   ├── Reservation.jsx       # Custom date/guest booking dashboard
│   │   └── Footer.jsx            # 4-column footer + newsletter subscription
│   │
│   ├── App.jsx                   # Root layout + global scroll-reveal observer
│   ├── index.css                 # Design tokens, utilities, Tailwind v4 config
│   └── main.jsx                  # React DOM entry point
│
├── index.html                    # SEO meta tags, OG properties, page title
├── vite.config.js                # Vite + @tailwindcss/vite plugin setup
├── tailwind.config.js            # Extended theme tokens
└── package.json
```

---

## ⚡ Key Features

### 🌑 Organic Stone Backdrop
A zero-CPU-overhead layered background system:
- **Slate mineral texture** blended via CSS `soft-light` blend-mode
- **Candlelight ambient glows** — blurred radial gold gradients (`blur: 140px`) that gently pulse
- **Tactile noise film grain** — SVG `feTurbulence` fractal filter at 1.6% opacity for a physical stone/paper feel

### 🎞️ Infinite Cinematic Film Tape
The gallery section presents an endlessly scrolling horizontal strip of 12 high-resolution culinary photography frames:
- Seamless CSS `translate3d` loop with **zero gaps or jumps**
- **Hover-to-pause** interaction (`animation-play-state: paused`)
- Warm gold filter overlay + Instagram vector icon on individual frame hover

### 📜 Scroll-Reveal System
A global `IntersectionObserver` instance tracks all `.reveal-on-scroll` elements across the page and applies smooth `translateY + opacity` entrance animations as they enter the viewport — no external animation libraries required.

### 📊 Count-Up Stats
The Stats Bar uses `IntersectionObserver` to trigger animated number count-ups when scrolled into view (e.g. `0 → 3 Michelin Stars`, `0 → 48 Seats`).

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>=20.x`
- **npm** `>=10.x`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yadavxprakhar/Ember-Stone.git
cd Ember-Stone

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server with HMR |
| `npm run build` | Compile production bundle to `/dist` |
| `npm run preview` | Serve the compiled `/dist` folder locally |
| `npm run lint` | Run ESLint across the codebase |

---

## 📦 Build Output

```bash
vite v8.0.16 building client environment for production...
✓ 1754 modules transformed.

dist/index.html                   1.36 kB │ gzip:  0.71 kB
dist/assets/index.css            40.18 kB │ gzip:  7.29 kB
dist/assets/index.js            239.75 kB │ gzip: 71.62 kB

✓ built in 111ms
```

---

## ☁️ Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyadavxprakhar%2FEmber-Stone)

1. Import the repository at [vercel.com/new](https://vercel.com/new)
2. Vercel auto-detects **Vite** — no configuration needed
3. Click **Deploy** — your site is live in ~30 seconds

### Netlify

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |

### GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

npm run build && npm run deploy
```

---

## 🌐 SEO

The `index.html` is configured with full SEO and Open Graph metadata:

```html
<title>Ember & Stone | Immersive Wood-Fired Fine Dining Restaurant</title>
<meta name="description" content="Experience Michelin-caliber open-hearth cooking at Ember & Stone..." />
<meta property="og:title" content="Ember & Stone | Immersive Wood-Fired Fine Dining" />
<meta property="og:type" content="website" />
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. **Fork** the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a **Pull Request**

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Prakhar Yadav**
- GitHub: [@yadavxprakhar](https://github.com/yadavxprakhar)

---

<div align="center">

*Built with passion for craft, flavour, and pixel-perfect precision.*

**⭐ Star this repo if you found it useful!**

</div>
