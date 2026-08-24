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

Dev-only preview at `/preview-cuestionario/:id` (behind `import.meta.env.DEV` in `App.jsx`, same pattern as `/preview-decodificacion`): mounts the same page without `ProtectedRoute`, since `/cuestionario/:id` requires a session and that made reviewing a bank impossible without logging in. With no session `guardarResultado()` writes nothing. Accepts `?bloque=` and `?modo=` like the real route.

`questions[].id` is **not** written in the bank files. `numerarPreguntas()` in `cuestionariosIndex.js` assigns it at load — the declared `id` always wins, otherwise it's the 1-based position. It is positional, so inserting a question mid-file shifts the ids after it; declare the `id` by hand in that question if that ever matters. Nothing persists per-question ids: `resultados` stores only `puntaje`, `total` and `cuestionario_id`.
`Cuestionario.jsx` receives `?bloque=` and `?modo=aleatorio` query params, filters/shuffles questions, then delegates rendering to `QuestionarioGenerico`. The generic component handles three stages: `theory → quiz → results`. It has a global countdown timer (seconds per question × number of questions).

### Presentation system (`src/data/presentaciones/`, `src/components/SlideRenderer.jsx`)

**Theming**: `temas.jsx` derives everything from `src/styles/fx.css` — `ACENTOS` holds the seven subject accents, `BASE` the surfaces and the single typography (Sora / Figtree / IBM Plex Mono / STIX Two Text), and `conAlfa()` computes the accent's five opacities instead of them being typed per palette. **The accent and the cover drawing are the only things that differ between subjects.** Add a subject → add it to `ACENTOS` *and* to `MATERIA_A_TEMA`, whose keys are the exact `PRESENTACION.materia` strings; an unmapped value silently falls back to maths.

`tema.azul`, `tema.verde` and `tema.rojo` are **drawing channels** used by 215/150 diagram files, not brand colors — don't repurpose them. Feedback never uses green/red: correct is the accent, anything else is grey, and the distinction is carried by drawn SVG icons (`IconoAsiEs`/`IconoAsiNo`), never `✓`/`✗` glyphs. See `docs/DISENO.md` §2.4.
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

**`tipo: "lienzo"` is the composable slide** and the one new presentations should use: `{ etiqueta, titulo, bloques: [...] }` over a 12-column grid, where each block declares `ancho` in twelfths. Blocks live in `src/components/bloques/` grouped by family and resolve through the `BLOQUES` registry in `index.js` — a map, never an `if` chain. A block gets `{ bloque, tema, reflujo }`; `reflujo` is true below 768px, where the canvas stops scaling and everything goes to one column (tables become stacked cards). Blocks write no hex: every value comes from `tema`. `revelar: true` hides a block until the teacher advances, keeping its space so the slide doesn't jump.

`encabezado`, `arbol` and `grafica` are deliberately *not* blocks: the first belongs to the slide, and the other two are drawings that already resolve through `DIAGRAMS` via `figura`. Live catalog of all 21 at `/preview-bloques` (dev only).

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

### Regularización — talleres (`src/data/talleres/`, `src/pages/Regularizacion.jsx`)
Admin-only section for **primaria/secundaria** tutoring (the levels the public site doesn't cover). Catalog at `/regularizacion`, player at `/regularizacion/:id`; both behind `ProtectedRoute requiredNivel="admin"`. Kept outside `Admin.jsx`'s tab shell because a taller is projected in front of the student — `AdminHeader` links to it via a tab carrying `to: "/regularizacion"`.

```js
export const TALLER = {
  id, titulo, materia, tema,
  nivel: "primaria" | "secundaria", edades, icono, descripcion, objetivos,
  render: { tipo: "html", html } | { tipo: "react", componente: "<clave>" },
};
```

Registered in `talleresIndex.js` (`buscarTaller`, `listaTalleres`); React talleres resolve through the `TALLERES_REACT` map.

**Two render modes.** `tipo: "html"` mounts a self-contained HTML artifact in an `<iframe srcDoc>` — the HTML lives as a real `.html` file next to its module and is imported with Vite's `?raw`, so there is nothing to escape and it never becomes a separately fetchable file. This isolates the artifact's global CSS (`:root`, `body`, `*`) from the site theme, which is why the iframe exists. `tipo: "react"` is the destination once a taller earns porting; the component is registered in `TALLERES_REACT` and receives `{ alumnoId, tallerId, guardarSesion, cargarSesiones }`.

**`decodificacion` is the first React taller** (`src/components/talleres/decodificacion/`, banks in `src/data/talleres/decodificacion/`) — see `docs/TALLER_DECODIFICACION.md`. Two things forced React over the iframe, and they're the test for the next one: content had to live in **separate data files** so a teacher can add words without touching logic, and the per-word/per-reading detail needs `localStorage`, which throws `SecurityError` inside a sandbox without `allow-same-origin`. Its coarse tally still goes to `taller_sesiones`; only the detail is local. Dev-only preview at `/preview-decodificacion` (behind `import.meta.env.DEV` in `App.jsx`, same pattern as `/preview-comprobante`), since `/regularizacion` requires an admin session.

**`pizzas-cajas-vasos` is the second React taller** (`src/components/talleres/pizzas-cajas-vasos/`, content in `src/data/talleres/pizzas-cajas-vasos/`) — three math games for 7-10 (division with remainder, multiplication as equal groups, fractions) — see `docs/TALLER_PIZZAS_CAJAS_VASOS.md`. It sets the pattern for any generated-exercise taller: **exercise generators live in the data folder, never in a component**, so difficulty ranges move without touching the UI; `rangos.js` is the single knob (two age blocks, `7-8` / `9-10`, chosen once at start and stored as `grupo`). Exact divisions are built by multiplying, never sorted at random hoping for a zero remainder, and `node src/data/talleres/pizzas-cajas-vasos/pruebas.js` asserts that plus the equivalent-fraction invariants — run it after touching a generator. Each exercise carries a `categoria` (labelled in `CATEGORIAS`), which is what lets the teacher panel answer *what kind of exercise is failing*; that breakdown is the local half of the split. Dev-only preview at `/preview-pizzas-cajas-vasos`.

**`el-terreno` is the third React taller** (`src/components/talleres/el-terreno/`, content in `src/data/talleres/el-terreno/`) — four games introducing perimeter and area, in teaching order (walk the edge → separate the two measures → same fence, different area → compound figures) — see `docs/TALLER_EL_TERRENO.md`. Its one transferable idea: the two measures are taught as **two different actions on the same figure** (walk the edge placing fence segments, cover the floor with grass squares), and the generator never emits a rectangle where perimeter equals area, because there the child who confuses them would be marked correct. When the answer is exactly the *other* measure it is logged as its own category (`confusion-area-perimetro`) instead of a generic miss — that is the diagnosis the teacher panel exists to show. A juego may declare `soloRangos` to be offered only in one age block. Dev-only preview at `/preview-el-terreno`.

**`reino-plegado` is the fourth React taller and the first *game*** (`src/components/talleres/reino-plegado/`, content in `src/data/talleres/reino-plegado/`) — worlds and levels where the scenery is a topological space; see `docs/JUEGO_REINO_PLEGADO.md`. Three things make it different from the other talleres: it has **six local player profiles with photo avatars** (playable solo or as a *caravana*: one shared peón, rotating turns, where each portal's puzzle is generated on entry from the current player's own ladder — that lazy generation is why the mode works) (cropped to 256px and kept in `localStorage` — the repo is public, they must never be committed or uploaded), the puzzles live **inside** the level as portals rather than gating it, and it carries a **measurement layer**: every puzzle is tagged `{tema, grado}`, only the first attempt counts, and an adaptive ladder per subject (`lib/medicion.js`) estimates which grade (3.º-6.º) each player actually dominates. `grados.js` is that instrument's backbone — a teacher-reviewed table of tema→grado; changing it changes what the estimate means. Levels are ASCII maps validated by `pruebas.js`, which walks them with each world's topology: every portal and the exit must be reachable from the entrance, and in the torus/Möbius worlds a level must be **impossible** to finish without crossing a seam — otherwise the topology is decoration. The fourth world is folded by **passages** instead of a surface: a lowercase letter appearing twice in the map marks two tiles that are the same tile, resolved inside `mover()` on entry. `Vista3D.jsx` (lazy-loaded; three.js is shared with `solidos-platonicos`) quilts the live level onto its surface by sampling the same parametrization that defines the movement — the picture can never contradict the mechanic. Dev-only preview at `/preview-reino`.

**`solidos-platonicos` is the fifth React taller** (`src/components/talleres/solidos-platonicos/`, content in `src/data/talleres/solidos-platonicos/`) — the five Platonic solids in 3D and, above all, **their duality**; see `docs/TALLER_SOLIDOS_PLATONICOS.md`. Three salas: La Galería (the five, rotatable, explodable, with caras/aristas/vértices counted separately — each element always the same colour), El Dual (a five-step hand-advanced animation: a point at each face centre → join neighbours → the faces close → the dual grows to the original's size, then offers to repeat on *it*), and El Reto (ten questions). Its transferable idea: **the geometry is computed, never typed**. Each solid is given only its vertices; `construir()` derives faces, edges and face centres from the convex hull's supporting planes, so `dual(p) = construir(p.centros)` is literally the sentence the taller says out loud — the picture cannot contradict the claim (same principle as `Vista3D.jsx` in the reino). `pruebas.js` checks regularity, Euler, that the dual swaps C↔V and keeps A, that dual(dual) lands on the original, **and the three claims the animation makes on screen**. The first two salas record nothing (they are a projector exhibit, so there is no age-block screen either); only El Reto writes. three.js is `lazy`-loaded from the shell and shares its chunk with the reino's 3D view. Dev-only preview at `/preview-solidos`.

**Shared across the game talleres** (`src/components/talleres/comun/`): `ui.jsx` (Boton, Panel, TarjetaMenu, Cabecera, TecladoNumerico, RespuestaDada, Retro, Operacion, Cierre), `hooks.js` (`useRonda`), `estilo.js` (the palette; each taller keeps its own `ACENTO` map), `sonido.js`, `registro.js` and `PanelProfesor.jsx`. `registro.js` is a factory: `crearRegistro("<taller-id>")` returns the functions bound to that taller's localStorage key, and the panel takes `{ registro, nombreJuego, etiquetaCategoria }` as props. A new game taller should reuse all of this and only bring its own generators, figures and games. Generic sorting helpers live in `src/data/talleres/azar.js`.

**Persistence bridge** (`src/components/talleres/TallerRunner.jsx`): the iframe is sandboxed `allow-scripts allow-popups` — **no `allow-same-origin`**, so it sits in an opaque origin and cannot reach the site's Supabase session. It therefore requests writes/reads over `postMessage` (`{source:"taller", rid, tipo:"guardar"|"cargar"}` → `{source:"taller-host", rid, payload|error}`) and the runner performs them. Validate the sender with `e.source === iframe.contentWindow`, never `e.origin` (it's `"null"` for `srcDoc`). Any pasted artifact using Claude's `window.storage` API must be rewired to this bridge — that API does not exist outside artifacts and fails silently.

Sessions land in `taller_sesiones` (`alumno_id`, `taller_id`, `actividad`, `grupo`, `aciertos`, `errores`, `creado_en`; RLS admin-only). `TallerVer.jsx` picks the student first; "practicar sin registrar" passes `alumnoId = null` and the runner skips the write rather than inserting orphan rows.

Talleres live in `src/data/talleres/<materia>/`, plus `juegos/` for shared game engines and `decodificacion/` for that taller's thematic banks. `grupo` carries the age block (`"8-9"`, `"10-12"`, …) so the same taller can be filtered by level in the student's record.

**Temas — "hoy quiero trabajar divisiones".** The searchable unit is the *activity*, not the taller: `divisiones` covers reparto, residuo and the long-division algorithm in different screens. So every TALLER declares `actividades: [{ id, nombre, edades, temas: [...] }]`, whose `temas` are ids from the canonical vocabulary in `src/data/talleres/temas.js` (`{ id, label, materia, area, alias }` — `alias` is what a teacher would type: "adjetivos", "tablas", "sobra"). `talleresIndex.js` exposes `listaActividades()`, `buscarPorTema(id)` and `buscarTalleres(texto)`, and warns in dev when an activity points at a tema id that doesn't exist. Search is accent-insensitive and tries the singular of the query, so "adjetivos" hits the alias "adjetivo". Add the tema to `temas.js` first, then tag the activity.

**One taller per materia.** The catalog groups by `materia` (`Regularizacion.jsx`, order in `ORDEN_MATERIAS`), so a taller declares exactly one. When the same engine serves two subjects, the HTML stays single and each published taller injects its subject: `carrera-autos.html` carries a `__MATERIA_FIJA__` marker, `carrera-autos.js` exports `htmlConMateria(materia)` + the shared `BASE` fields, and `carrera-autos-matematicas.js` / `carrera-autos-espanol.js` are the two entries in the index. With the marker substituted, the setup screen drops the subject toggle; opened standalone (unsubstituted) it falls back to asking. Prefer this over duplicating the HTML.

### Diagram & interactive registries (`src/components/diagramas/`, `src/components/interactivos/`)
Single-map registries that decouple visual components from consumers (see the §4.2/§4.4 standard in `docs/CONVENCIONES.md`):
- `diagramas/index.js` exports `DIAGRAMS` (`{ "clave": Component }`), static SVGs organized by subject; each receives `{ tema }`.
- `interactivos/index.js` exports `INTERACTIVOS`, manipulable components: **mafs** (math, draggable points) and **matter-js** (physics); each receives `{ tema, ...props }`.

Documents reference these by key via `figura:`/`interactivo:`; presentations via `svgDiagram:` on a slide or the `id` of a `tipo: "diagrama"` block. **All 311 diagrams now live in `DIAGRAMS`** — `SlideRenderer.jsx` resolves them through a single `<Diagrama clave={…} tema={tema} />`, never an `if` chain. Pieces shared by diagrams of several subjects (`arrowHead`, `EjesXY`, `Bloque`, `Vector`, `qRegPoly`, `_svgH`, the probability and statistics data constants…) live in `diagramas/comun.jsx`.

Adding a diagram: a file in `diagramas/<materia>/<clave>.jsx` exporting a default `({ tema })` component, plus one line in `index.js`. It never touches `SlideRenderer.jsx`.

**Verify with `npm run integridad`, not just the build.** A key with no registry entry does not crash the page — it leaves the hole empty, silently — so the build is blind to it. The script cross-references every key used by a presentation or document against both registries. And note the build is blind to missing imports too: a file extracted without its `M`/hook imports compiles and then throws at render. `npm run lint` is what catches that.

### Static HTML guides (`public/guias/`)
Standalone HTML files (for divisibility, grammar categories, etc.) served at `BASE_URL + "guias/<file>.html"`. These are not React — just raw HTML.

### Auth (Supabase)
Client configured in `src/lib/supabase.js` via `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` env vars (`.env` file, gitignored). Auth is email/password via Supabase Auth.

### Admin panel (`src/pages/admin/`, `src/components/admin/AdminHeader.jsx`)
Operational back-office for the tutoring business (not exam content). Tabs: Alumnos, Tutores, Estadísticas, Presentaciones, Cursos, Inscripciones, Cargos, Suscripciones. Each `Admin<Tab>.jsx` accepts an `embedded` prop to render without its own `AdminHeader`/page shell when hosted inside `Admin.jsx`'s tab switcher; it's also reachable standalone at `/admin/<tab>`.

**Supabase schema** (migrations in `supabase/migrations/`):
- `alumnos` — student record. `nivel` ∈ `primaria|secundaria|prepa|universidad`. `id` is **not** FK'd to `profiles` (dropped in `20260726100000_alumnos_nivel_check.sql`) so "manual" students without a platform account can exist — the frontend generates `crypto.randomUUID()` for these (see `AdminAlumnos.jsx`).
- `tutores` — independent tutor records (`nombre`, `apellidos`, `telefono`, `email?`, `relacion: padre|madre|tutor`), managed on their own in `AdminTutores.jsx` and linked to students via `alumno_tutor` (N:M join table). `AdminAlumnoDetalle.jsx`'s `TutorPicker` links an *existing* tutor to a student rather than duplicating one.
- `contactos_emergencia` — 1-2 per alumno (`orden` 1|2), separate from tutores.
- `cursos` / `grupos` / `planes_precio` / `inscripciones` — course catalog, cohorts, pricing plans, enrollments.
- `cargos` — a billing charge (`concepto`, `monto`, `fecha_vencimiento`, `estado: pendiente|pagado|vencido|cancelado`), sourced from either an inscripción or an asesoría session.
- `pagos` — payments against a `cargo`; `pagos.cargo_id` is `ON DELETE CASCADE` (`20260726110000_cargos_cascade_delete.sql`), so deleting a cargo deletes its pagos — the UI warns with the pago count before confirming.
- `suscripciones` — recurring subscription plans, separate from one-off `cargos`.

**Date handling gotcha:** Supabase `DATE`/`TIMESTAMPTZ` columns come back as ISO strings; `new Date(iso).toLocaleDateString(...)` shifts the displayed day back by one due to UTC parsing + local timezone. Always parse the date part manually first:
```js
const [y, m, d] = iso.split("T")[0].split("-").map(Number);
new Date(y, m - 1, d).toLocaleDateString("es-MX", { ... });
```
This pattern is repeated as a local `fmtDate` helper in every admin page — don't reintroduce the naive form.

**PDF generation** (`src/utils/comprobantePago.jsx`, `src/components/ComprobantePDF.jsx`): pattern for exporting a React component as a PDF — render the component offscreen (`position: fixed; left: -9999px`) via `createRoot`, wait for images/fonts to load, capture with `html2canvas`, then place the canvas image into a `jsPDF` doc sized to letter paper. Reuse this pattern for any future printable document rather than building a new PDF pipeline.

### Code splitting (`src/App.jsx`, `scripts/generar-catalogo.mjs`)
Every route except the landing page and `/login` is loaded with `React.lazy`, wrapped in a single `<Suspense>` in `App`. **Adding a route means adding a `lazy(() => import(...))` line**, not a static import — a static import drags that page's libraries (three, jsxgraph, mathjs, recharts, jspdf) back into the entry chunk. The entry chunk is ~480 KB; before splitting it was 8.4 MB.

The other half of that fix is the catalog: `src/data/materias.js` holds **only** the static list of the seven materias (imported eagerly by Home and FxHeader), while `src/data/materias-contenido.js` walks the real content indexes and must only be imported by a lazy route (`/materia/:slug`) or by the generator script — importing it from an eager module pulls the whole site's content back into the entry chunk. The Home counters come from `src/data/catalogo.generado.json`, regenerated by `npm run catalogo` (wired to `predev`/`prebuild`), which loads `materias-contenido.js` through Vite's own module loader so `import.meta.glob` and `.jsx` content modules resolve. The numbers are still never maintained by hand.

### Design system — read before touching any UI
**`docs/DISENO.md` is binding**: the visual rules (color, type, density, feedback, per-subject accents, screen adaptation) plus a dated log of *why* each was decided. Read §2 and §3 there before writing a screen, a slide block, or a taller.

The values themselves live in exactly one place, **`src/styles/fx.css`** — light palette on `:root`, dark on `.fx-oscuro` **redefining the same token names**, so a component written with `var(--fx-…)` works in both themes unchanged. Never hardcode a hex; if a value isn't a token, add the token. `docs/DISENO.md` cites tokens by name and contains no values, so the two can't drift.

Three rules that get violated most often: no green/red for right/wrong anywhere (see §2.4 — one accent, three treatments); body weight never below 400; icons are drawn SVG, never emoji or ✓/✗ glyphs.

Visual catalog of the 22 slide blocks, both themes, phone landscape: the *Bloques de presentación* canvas — sources in `docs/diseno/presentaciones/*.dc.html`, re-seeded with the `design` skill's helper and republished to the same URL.

**Legacy:** most older components still use inline styles with a per-file palette object `C` (`#0e0f11` bg, `#3b9eff` blue). That's what's being migrated away from — don't add more of it. Tailwind v4 is available via the Vite plugin but is used minimally.

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

1. Create `src/data/cuestionarios/<materia>/<id>.js` — **the filename is the id**, so the URL `/cuestionario/<id>` tells you the file. Whole-exam simulators go in `simuladores/`. Export the quiz object as default.
2. Add it to `CUESTIONARIOS_INDEX` in `cuestionariosIndex.js`, keyed by that same id, with `{ titulo, descripcion, materia, nivel, data }`. The index is **flat** (like `presentacionesIndex.js`); `materia: null` means it belongs to no single subject and is excluded from per-subject counts.
3. Reference it from the navigation tree in `preparatoriaData.js` or `universidadData.js` with `quiz: "/cuestionario/<id>"`.

The id is frozen: it is the URL *and* what `resultados.cuestionario_id` stores, so moving a file must never change it. `questions[].id` is assigned at load — don't write it in the bank. Verify with `npm run integridad`, and preview without logging in at `/preview-cuestionario/<id>` (dev only).

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
