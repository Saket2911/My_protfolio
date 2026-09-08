# K. Shiva Saket — Portfolio

A premium, dark-first developer portfolio for K. Shiva Saket, focused on AI/ML, cybersecurity, and practical software engineering.

## Stack

- React 19 + React Router framework mode
- TypeScript
- Tailwind CSS v4 + custom CSS system
- Lucide React icons
- Cloudflare Workers project scaffold
- CSS motion with `prefers-reduced-motion` support

## Local development

```bash
bun install
bun run dev
```

The build/typecheck command is:

```bash
bun run build
```

## Update content

Most portfolio content is centralized in `app/lib/portfolio.ts`. Update the profile links, skills, project descriptions, tags, and focus areas there. Project links are intentionally limited to repositories publicly verified during the initial profile review.

## Resume

The portfolio now downloads the supplied resume from `public/resume.pdf`. Replace that file with a newer PDF whenever needed; keep the filename or update `profile.resume` in `app/lib/portfolio.ts`.

## Deploy

The current project is configured for Cloudflare Workers. Use camelAI's project deploy flow for the published Cloudflare deployment.

To move this React Router framework-mode app to Vercel with SSR:

1. Install the Vercel preset: `npm install @vercel/react-router`.
2. Update `react-router.config.ts` with `ssr: true` and `presets: [vercelPreset()]` from `@vercel/react-router/vite`.
3. Remove the Cloudflare-only Vite plugin, Worker entry point, Wrangler config, and any `context.cloudflare` usage if you add server-side features later.
4. In Vercel, use `npm run build` and leave Output Directory unset for SSR.

If you keep this portfolio client-only, you can instead set `ssr: false` and deploy `build/client` as a static site. Do not use the static setup if you later add server loaders/actions or Cloudflare bindings.

## Content notes

- No CGPA, dates, awards, certifications, internships, work experience, or unsupported repository features are invented. The displayed email address was supplied by the owner.
- AI-driven network attack forecasting and explainable threat triage are described as directions in progress, not shipped public projects.
- `GenAI_Mobilitics` is described conservatively because its public README does not substantiate specific AI or mobility functionality.
