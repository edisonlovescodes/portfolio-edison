# Edison Essien portfolio

The refreshed source of the original `portfolio-edison` site. Built with Next.js, React and TypeScript, with self-hosted typography and light/dark themes. The original portfolio's component structure is retained; experience, project descriptions, screenshots and the resume are updated from the October 2026 records.

The source of truth is https://github.com/edisonlovescodes/portfolio-edison. The portfolio is intended to be served at https://byedison.com through the existing Vercel project. Local development and the portable static export also work independently of Vercel.

## Run locally

Use Node.js 20.9 or newer and npm:

```sh
npm ci --ignore-scripts
npm run dev -- --hostname 127.0.0.1
```

Open the localhost address printed by Next.js. The application does not call an external API or run machine-learning inference.

## Build portable website files

```sh
npm run build
python3 -m http.server 3000 --bind 127.0.0.1 --directory out
```

The `out/` directory contains static website files. It can be served by a web server you control. Open `http://127.0.0.1:3000` for local inspection; do not double-click an HTML file because root-relative asset paths expect an HTTP server.

GitHub stores the versioned source. Vercel serves the public website and its HTTPS certificate. Namecheap manages the byedison.com registration and DNS.

## Content

- `components/`: the original portfolio sections, refreshed with current content.
- `lib/projects.ts`: four evidence-grounded project profiles.
- `app/projects/[slug]/page.tsx`: generated project pages.
- `public/images/`: screenshots of the refreshed software applications.
- `public/Edison_Essien_Resume.pdf` and `public/resume.pdf`: the current one-page resume.
- `public/fonts/`: self-hosted typeface and its original license.

The three software project pages link to their repositories and local run instructions. Screenshot previews are not hosted inference services. Drug Delivery Modeling is ongoing senior-design work; private institutional CAD and project documents are excluded. Additional software repositories remain linked without unsupported performance claims.

Canonical URLs use `https://byedison.com`. Source code, package locks, screenshots, fonts and the resume are versioned; generated dependencies and build output are intentionally ignored. Clone this repository to recover the website on another computer.
