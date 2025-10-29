# Pet Finance — Next.js Template

Opinionated starter template for building a front-end with Next.js (app router), TypeScript, TailwindCSS, and a small set of useful utilities and UI primitives.

This repository provides a minimal but practical scaffold for consumer-facing dashboards and small web apps. It includes:

- Next.js 16 app-router layout with React server/client separation
- Tailwind CSS v4 configuration and conventions
- A small UI primitives set (Button, Toaster integration with Sonner)
- Axios + helpers for API calls
- Biome configuration for linting/formatting
- Husky prepared for git hooks

## Quick start

Prerequisites: Node 18+ recommended, pnpm/npm/yarn of your choice.

1. Install dependencies

```bash
# using npm
npm install

# or using pnpm
pnpm install

# or yarn
yarn install
```

2. Run development server

```bash
npm run dev
```

Open http://localhost:3000

3. Build for production

```bash
npm run build
npm run start
```

## Available scripts

Taken from `package.json` — adjust to your package manager as needed.

- `dev` — runs `next dev` (development server)
- `build` — runs `next build` (production build)
- `start` — runs `next start` (start production server)
- `lint` — runs `biome check` (lint/type checks)
- `format` — runs `biome format --write` (format files)
- `prepare` — runs `husky` (git hook installation step)

## Project structure (important files)

Top-level important files and folders:

- `next.config.ts` — Next.js config (reactCompiler: true)
- `tailwind.config.ts` — Tailwind content paths and theme extensions
- `src/app/layout.tsx` — Root layout (wraps with Providers)
- `src/context/providers.tsx` — App providers (theme, auth, toasts)
- `src/components/ui/button.tsx` — Reusable Button primitive using CVA
- `src/components/ui/sonner.tsx` — Sonner Toaster wrapper configured for theme
- `src/providers` — axios instance and API helpers
- `src/lib/utils.ts` — small utilities (e.g., `cn` helper)
- `src/styles/global.css` — Tailwind base + project css

Note: this template uses the `/src` folder with Next.js app-router conventions.

## Key concepts and examples

### Providers

The root layout (`src/app/layout.tsx`) renders a `Providers` component which is responsible for application-level providers such as Theme provider, Toast provider, and any Auth or API context you want to inject.

### Buttons

The `Button` component is implemented with class-variance-authority (CVA) and exposes `variant` and `size` props. You can import it like:

```tsx
import { Button } from '@/components/ui/button';

<Button variant="default">Get started</Button>
<Button variant="outline" size="sm">Cancel</Button>
```

### Toaster (Sonner)

This template wraps `sonner` to respect the `next-themes` theme and provide consistent icons/styles via `src/components/ui/sonner.tsx`:

```tsx
import { Toaster } from '@/components/ui/sonner';

// Place <Toaster /> near the top-level (Providers usually do this)
```

### API

There is an axios instance and helpers in `src/providers/` (e.g. `axiosInstance.ts` and `getHeaders.ts`) — adapt them to match your backend authentication and base URL. Use those helpers from services (e.g., `src/services/auth/doLogin.ts`) to centralize API logic.

### Styling and Tailwind

- Tailwind content path includes `./src/**/*.{js,jsx,ts,tsx}`.
- Dark mode uses the `class` strategy; the project includes CSS variables for theme tokens.

### Linting and formatting

This template uses Biome for linting and formatting.

Editor settings suggestion (VS Code): set Biome as the default formatter and enable format on save.

### Husky

Husky is prepared (`prepare` script) — add hooks under `.husky/` as needed.

### TypeScript

TypeScript is already configured (project uses `.ts`/`.tsx`). The template pins types for React and Node in `devDependencies`.

### Third-party libraries included (high level)

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Sonner for toasts
- Axios for API calls
- cvA, clsx for styling primitives
- lucide-react icons

### Assumptions and notes

- I assume you will connect the axios instance to your backend via environment variables (e.g. `NEXT_PUBLIC_API_URL`). If you want, I can add `.env.example` and wiring for that.
- The template is intentionally minimal — add additional components, pages, or tests as required by your project.

### Contributing and extending

- Add pages under `src/app/` using the app-router patterns.
- Create feature folders with `components`, `services`, and `types` to keep concerns separated.
- Add unit tests using your preferred runner (Vitest/Jest) — I can add a starter test setup if you want.

Try it locally

```bash
npm install
npm run dev
```


## Biome: update on save:

To configure Biome to lint and format the code on save, follow these steps:

1. Open your users setting;

2. Apply this:

```json
{
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.biome": "explicit",
    "source.organizeImports.biome": "explicit"
  },
  "[javascript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[typescript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "biomejs.biome"
  }
}
```
