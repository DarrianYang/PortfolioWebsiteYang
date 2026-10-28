# Darrian Yang — Portfolio

Personal site for [darrianyang.com](https://darrianyang.com). Built so employers can read experience on the page and open the resume as a PDF.

## Stack

- [Next.js](https://nextjs.org/) (App Router, static export)
- TypeScript
- React 19
- Tailwind CSS

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The resume lives at `/resume` and `public/resume.pdf`.

## Production build

```bash
npm run build
```

This writes a static site to `out/`, which GitHub Pages deploys from `.github/workflows/deploy.yml`. In the GitHub repo, set **Pages → Source** to **GitHub Actions**.
