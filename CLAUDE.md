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
- Public routes: `/`, `/login`, `/registro`, `/exani-i`, `/exani-ii`, `/teoria/*`, `/documento/:id`, `/curso/:id`
- Protected routes (require Supabase auth): `/preparatoria`, `/universidad`, `/selector/:id`, `/cuestionario/:id`
- Director/presenter routes (require auth): `/presentacion/:id`, `/alumno/:id`
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

### Presentation system (`src/data/presentaciones/`, `src/components/SlideRenderer.jsx`)
Interactive slide presentations for classroom use. Each presentation is a JS module exporting a `PRESENTACION` object:
```js
export const PRESENTACION = {
  id: "slug",
  titulo: "...",
  materia: "Matemáticas",
  subtema: "Geometría",
  slides: [ /* array of slide objects */ ]
}
```
Presentation modules live in `src/data/presentaciones/<materia>/<slug>.js`, organized by subject (`matematicas`, `fisica`, `quimica`, `biologia`, `espanol`, `geografia`) — **not** by exam, because ~half are shared across exams (EXANI-I / EXANI-II / UNAM). The `/ver/:id` route resolves by `id` through `presentacionesIndex.js`, so the folder is purely organizational. All modules are registered in `src/data/presentaciones/presentacionesIndex.js`.

**Slide types:** `portada`, `definicion`, `concepto`, `lista_criterios`, `criterio_detalle`, `ejercicio`, `resumen`.

Each slide can include a `svgDiagram` key referencing an inline SVG component or a JSXGraph component defined in `SlideRenderer.jsx`. All diagrams (SVGs and JSXGraph) are in that file.

**JSXGraph diagrams** — JSXGraph is installed but **NOT yet used in SlideRenderer** because it injects `background-color: white` into the container div at runtime, which blanks the entire slide. When integrating JSXGraph in a future component, you must override its CSS injection AFTER `initBoard` returns AND use `!important` or direct `style` property overrides. Until a clean integration pattern is validated, prefer inline SVG for all static diagrams.

**SVG square proportions:** When drawing a square in SVG, always verify width === height in the polygon points. The viewBox is often wider than tall (e.g., `190×88`), so the polygon coordinates must be explicitly constrained to equal width/height.

### Theory pages (`src/data/teoria/`)
JSX components that render directly as routes. They use KaTeX loaded lazily from CDN via the `useKaTeX` hook in `src/data/teoria/shared.jsx`. The `M` component renders inline math, and `MB` renders block/display math.

### Documents — math textbook (`src/data/documentos/`, `src/components/DocumentoRenderer.jsx`)
Data-driven "pure-math textbook" content with `amsthm`-style numbered environments. Each module exports a `DOCUMENTO` object, registered in `documentosIndex.js`, resolved by `buscarDocumento(id)` and rendered at `/documento/:id` (page `DocumentoVer.jsx`).

```js
export const DOCUMENTO = {
  id, titulo, materia, tema, nivel, examenes,
  contenido: [ /* bloques */ ],
};
```

**Block types in `contenido[]`:**
- `seccion` — `{ titulo }`; renders an `h2` and **resets** numbering.
- `parrafo` — `{ cuerpo: [elementos] }`; unboxed flowing content.
- Numbered environments (each with its **own** counter per section): `definicion`, `axioma`, `notacion`, `teorema`, `lema`, `proposicion`, `corolario`, `observacion`, `ejemplo`, `ejercicio`. Shape `{ titulo?, etiqueta?, cuerpo: [elementos] }`. `teorema/lema/proposicion/corolario/axioma` render their body in italics.
- `ejercicio` also accepts `pista?` (string) and `solucion?` ([elementos]), shown behind collapsible "Ver pista / Ver solución".
- `demostracion` — `{ metodo?, pasos: [{ texto?, math?, figura?, interactivo?, props?, instruccion?, caption? }] }`; renders ∎ at the end (not numbered).

**Elements** (inside `cuerpo`): `{ p }` prose · `{ math }` display formula · `{ lista: [...] }` bullets · `{ figura: "clave", caption? }` (→ `DIAGRAMS`) · `{ interactivo: "clave", props?, instruccion?, caption? }` (→ `INTERACTIVOS`).

**Prose formatting** (in `p`/`caption`/`instruccion`/`lista`): `$...$` inline math (KaTeX), `*...*` emphasis, `[[etiqueta]]` cross-reference (resolves to e.g. "Teorema 1.1"). These chars cannot appear literally (no escape mechanism). Numbering uses `S.N` per section; `etiqueta` registers the label for `[[...]]`.

`DocumentoRenderer` prop `embebido` renders a **compact hero** (used when a document is shown inside a course); default shows the full hero.

### Courses — Coursera-style lienzo (`src/data/cursos/`, `src/pages/CursoVer.jsx`)
A course is an **Área**; it only *references* existing content by `id`. Hierarchy: **Curso (Área) → Sección → Subsección**. Each module exports a `CURSO` object, registered in `cursosIndex.js`, resolved by `buscarCurso(id)`, rendered at `/curso/:id`.

```js
export const CURSO = {
  id, materia, area, nivel, icono, examenes,
  secciones: [
    { id, titulo, subsecciones: [
      { id, titulo, documentoRef: "<doc-id>" },          // subsección = un documento
      { id, titulo, proximamente: true },                 // placeholder
      { id, titulo, habilidades: [                         // o agrupa habilidades
        { tipo: "presentacion"|"cuestionario"|"documento", ref, titulo, duracion?, completado? },
      ] },
    ] },
  ],
};
```

`CursoVer` = top bar (brand + Área + progress) · collapsible sidebar (Sección → Subsección, decorative 🔒 lock) · central **pizarra** that swaps to the opened resource: presentations via an embedded `SlideRenderer` player, documents via `DocumentoRenderer embebido`, quizzes via the existing `/cuestionario/:id` route.

**Levels:** one course file per level (`<area>-<nivel>`, e.g. `probabilidad-universidad`); content (wording/difficulty) differs per level. The user's level is set by age at registration (editable in profile) and selects which course variant to show. *(Age→level plumbing not built yet.)*

### Diagram & interactive registries (`src/components/diagramas/`, `src/components/interactivos/`)
Single-map registries that decouple visual components from consumers (see the §4.2/§4.4 standard in `docs/CONVENCIONES.md`):
- `diagramas/index.js` exports `DIAGRAMS` (`{ "clave": Component }`), static SVGs organized by subject; each receives `{ tema }`.
- `interactivos/index.js` exports `INTERACTIVOS`, manipulable components: **mafs** (math, draggable points) and **matter-js** (physics); each receives `{ tema, ...props }`.

Documents reference these by key via `figura:`/`interactivo:`. (The legacy `SlideRenderer.jsx` still resolves diagrams inline; migrating it to `DIAGRAMS` is a pending refactor.)

### Static HTML guides (`public/guias/`)
Standalone HTML files (for divisibility, grammar categories, etc.) served at `BASE_URL + "guias/<file>.html"`. These are not React — just raw HTML.

### Auth (Supabase)
Client configured in `src/lib/supabase.js` via `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` env vars (`.env` file, gitignored). Auth is email/password via Supabase Auth.

### Styling
No CSS framework classes in most components — inline styles dominate, using a shared color palette object `C` defined per file (`#0e0f11` bg, `#3b9eff` blue, etc.). Tailwind CSS v4 is available via the Vite plugin but is used minimally.

## Visualization libraries

The following libraries are installed for math and science content:

| Library | Version | Use case |
|---|---|---|
| `jsxgraph` | 1.12.2 | Interactive geometry: circles, polygons, angles, loci. Used in `SlideRenderer.jsx` for precise geometric diagrams. |
| `mathjs` | 15.2.0 | Math computation: algebra, matrices, statistics, expression parsing. Use for answer validation and step-by-step calculations. |
| `mafs` | 0.21.0 | React-native coordinate planes, function graphs, vectors. Use for slides that show functions or cartesian diagrams. |
| `recharts` | 3.8.1 | Bar charts, histograms, line charts. Use for statistics and data visualization slides. |
| `@xyflow/react` | 12.10.2 | Node/edge diagrams. Use for probability tree diagrams. |
| `matter-js` | 0.20.0 | 2D physics simulation (gravity, collisions, springs). Use for kinematics and mechanics content. |

**Not installed (and why):** Rapier (3D physics, WASM complexity not needed for 2D content), Desmos API (external dependency), Plotly.js (Recharts covers the use cases more lightly), D3 (Recharts and React Flow are built on it; direct D3 not needed), Three.js (no 3D content in EXANI-I/preparatoria scope).

## Adding a new quiz

1. Create a data file under `src/data/cuestionarios/<level>/<subject>/<name>.js` exporting the quiz object.
2. Import it in `src/data/cuestionarios/cuestionariosIndex.js` and add it to `CUESTIONARIOS_INDEX` with a unique `id`.
3. Reference it from the navigation tree in `preparatoriaData.js` or `universidadData.js` with `quiz: "/cuestionario/<id>"`.

## Adding a new theory page

1. Create `src/data/teoria/<slug>.jsx` as a React component (use `shared.jsx` for `M`, `MB`, `useKaTeX`).
2. Import and add a route in `src/App.jsx`: `<Route path="/teoria/<slug>" element={<Component />} />`.
3. Reference from the navigation tree with `teoria: "/teoria/<slug>"`.

## Adding a new presentation

1. Create `src/data/presentaciones/<materia>/<slug>.js` (subject folder: `matematicas`, `fisica`, `quimica`, `biologia`, `espanol`, `geografia`) exporting a `PRESENTACION` object.
2. Import it in `src/data/presentaciones/presentacionesIndex.js` and add it to the index.
3. Add SVG or JSXGraph diagram components to `src/components/SlideRenderer.jsx` for any `svgDiagram` keys used in the slides.

## Adding a new document

1. Create `src/data/documentos/<materia>/<slug>.js` exporting a `DOCUMENTO` object (see *Documents — math textbook*).
2. Import it in `src/data/documentos/documentosIndex.js` and add it to `DOCUMENTOS_INDEX` keyed by `id`.
3. For any `figura:`/`interactivo:` keys, add the component to `src/components/diagramas/` (`DIAGRAMS`) or `src/components/interactivos/` (`INTERACTIVOS`).

## Adding a new course

1. Create `src/data/cursos/<materia>/<area>-<nivel>.js` exporting a `CURSO` object (one file per level).
2. Import it in `src/data/cursos/cursosIndex.js` and add it to `CURSOS_INDEX` keyed by `id`.
3. Reference existing content by `id`: `documentoRef` on a subsección, or `habilidades[].ref`. Do not duplicate content in the course.
