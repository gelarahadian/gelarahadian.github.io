# Portfolio

Personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
```

The production build is a static export written to `out/`.

## GitHub Pages

Pushes to `main` trigger the deployment workflow. Repository project pages automatically use the repository name as their base path; user or organization pages (`*.github.io`) remain at the root path.

Before the first deployment, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** in the repository.
