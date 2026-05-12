# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite HMR on localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Serve the dist/ build locally
npm run lint       # ESLint check
npm run deploy     # Build + push to gh-pages branch (GitHub Pages)
```

There are no tests. The app is deployed to GitHub Pages at the path `/factorizando/` (configured in `vite.config.js` as `base`).

## Architecture

This is a React 19 + Vite SPA for exam preparation (EXANI-I / UNAM admissions). It uses **HashRouter** so that GitHub Pages can serve deep links without a server.

### Routing (`src/App.jsx`)
- Public routes: `/`, `/login`, `/registro`, `/exani-i`, `/exani-ii`, `/teoria/*`
- Protected routes (require Supabase auth): `/preparatoria`, `/universidad`, `/selector/:id`, `/cuestionario/:id`
- `ProtectedRoute` wraps pages that need auth; it redirects to `/login` if no session.

### Content data layer
There are two parallel trees:

1. **Navigation tree** (`src/data/preparatoriaData.js`, `src/data/universidadData.js`) — recursive node objects rendered by `SubjectPage` as accordion menus. Each node can have:
   - `children` → renders a collapsible accordion
   - `quiz: "/cuestionario/<id>"` → renders a quiz pill button
   - `video: "https://..."` → renders a video pill
   - `teoria: "/teoria/<slug>"` or `BASE_URL + "guias/<file>.html"` → renders a theory pill

2. **Quiz data** (`src/data/cuestionarios/`) — JS modules exporting quiz objects with shape:
   ```js
   { metadata, config: { timePerQuestion }, theory?, bloques?, questions: [{ id, question, options, correctAnswer, explanation, diagram?, svgUrl? }] }
   ```
   All quizzes are registered in `cuestionariosIndex.js` and looked up by ID via `buscarCuestionario(id)`.

### Quiz flow (`src/pages/Cuestionario.jsx` + `src/components/QuestionarioGenerico.jsx`)
`Cuestionario.jsx` receives `?bloque=` and `?modo=aleatorio` query params, filters/shuffles questions, then delegates rendering to `QuestionarioGenerico`. The generic component handles three stages: `theory → quiz → results`. It has a global countdown timer (seconds per question × number of questions).

### Theory pages (`src/data/teoria/`)
JSX components that render directly as routes. They use KaTeX loaded lazily from CDN via the `useKaTeX` hook in `src/data/teoria/shared.jsx`. The `M` component renders inline math, and `B` renders block/display math.

### Static HTML guides (`public/guias/`)
Standalone HTML files (for divisibility, grammar categories, etc.) served at `BASE_URL + "guias/<file>.html"`. These are not React — just raw HTML.

### Auth (Supabase)
Client configured in `src/lib/supabase.js` via `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` env vars (`.env` file, gitignored). Auth is email/password via Supabase Auth.

### Styling
No CSS framework classes in most components — inline styles dominate, using a shared color palette object `C` defined per file (`#0e0f11` bg, `#3b9eff` blue, etc.). Tailwind CSS v4 is available via the Vite plugin but is used minimally.

## Adding a new quiz

1. Create a data file under `src/data/cuestionarios/<level>/<subject>/<name>.js` exporting the quiz object.
2. Import it in `src/data/cuestionarios/cuestionariosIndex.js` and add it to `CUESTIONARIOS_INDEX` with a unique `id`.
3. Reference it from the navigation tree in `preparatoriaData.js` or `universidadData.js` with `quiz: "/cuestionario/<id>"`.

## Adding a new theory page

1. Create `src/data/teoria/<slug>.jsx` as a React component (use `shared.jsx` for `M`, `B`, `useKaTeX`).
2. Import and add a route in `src/App.jsx`: `<Route path="/teoria/<slug>" element={<Component />} />`.
3. Reference from the navigation tree with `teoria: "/teoria/<slug>"`.
