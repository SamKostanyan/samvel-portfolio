# Samvel Kostanyan — Portfolio

A fast, animated personal portfolio built with **React 18 + Vite + Tailwind CSS + Framer Motion**.
No backend, no external UI kit copied from anywhere — original layout, your real CV content, and a
light/dark theme toggle.

## Features

- Light/dark mode toggle (respects system preference, remembers your choice, no flash on load)
- Smooth-scroll single-page layout: Home, About, Skills, Projects, Experience, Contact
- Scroll-triggered animations (Framer Motion) on every section
- Animated counters, active-section nav highlighting, animated gradient blobs
- Featured project section for **SportyFriends** (Vue.js + Laravel web, React Native mobile)
- Downloadable CV button (wired to `public/resume.pdf`)
- Fully responsive, accessible focus states, reduced-motion friendly
- Ready to deploy to GitHub Pages two ways (pick one, see below)

## 1. Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## 2. Edit your content

Everything you'll want to change lives in **one file**: `src/data/content.js`
- `profile` — name, title, summary, email, phone, resume link, social URLs
  (update `social.github`, `social.linkedin`, `social.telegram` — these are placeholders right now)
- `skills`, `languages`
- `experience` — one entry per job
- `education`
- `projects` — add more projects here any time; each one automatically gets its own card

Your CV PDF is already copied to `public/resume.pdf` so the "Download CV" button works out of the box.
Replace that file any time you update your resume.

## 3. Put it on GitHub

```bash
cd samvel-portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

## 4. Deploy to GitHub Pages

**Before deploying**, open `vite.config.js` and set `base` to match your repo name:

```js
base: '/<your-repo-name>/',
```

(If you deploy to a root user site, e.g. `<your-username>.github.io`, use `base: '/'` instead.)

### Option A — GitHub Actions (recommended, auto-deploys on every push)

This repo already includes `.github/workflows/deploy.yml`. After pushing to GitHub:

1. Go to your repo → **Settings → Pages**
2. Under "Build and deployment", set **Source** to **GitHub Actions**
3. Push to `main` (or re-run the workflow from the **Actions** tab)
4. Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`

### Option B — one-off manual deploy with `gh-pages`

```bash
npm run deploy
```

This builds the site and pushes the `dist` folder to a `gh-pages` branch. Then in
**Settings → Pages**, set **Source** to the `gh-pages` branch.

## Tech stack

| Layer      | Choice                          |
| ---------- | -------------------------------- |
| Framework  | React 18 (Vite)                  |
| Styling    | Tailwind CSS                     |
| Animation  | Framer Motion                    |
| Icons      | react-icons                      |
| Hosting    | GitHub Pages                     |

## Project structure

```
src/
  components/     UI components (Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer, ...)
  data/content.js All portfolio copy — edit this, not the components
  hooks/          useTheme (dark/light), useActiveSection (nav highlighting)
  App.jsx         Page composition
  main.jsx        React entry point
  index.css       Tailwind + small set of custom utility classes
```
