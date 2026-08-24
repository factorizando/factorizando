# Plan de migración — Factorizando

> Hoja de ruta para alinear el contenido existente al estándar de
> [`CONVENCIONES.md`](./CONVENCIONES.md). Pensado para ejecutarse por fases
> en sesiones futuras: cada fase es independiente, compila sola y se puede
> commitear/deployar por separado.
>
> **Cómo retomar:** "ahora vamos con el plan de migración" → empezar por la
> primera fase no marcada como hecha.
>
> **Regla de oro:** el `id` de cada recurso (cuestionario/presentación) **no cambia**
> aunque se mueva el archivo. Mover ≠ renombrar el id. Las rutas (`/cuestionario/<id>`,
> `/ver/<id>`) deben seguir resolviendo.
>
> **Tras cada fase:** `npm run build` debe pasar sin errores antes de commit + deploy
> (ver [[deploy-tras-cada-cambio]]).

---

## Orden de fases (de menor a mayor riesgo)

| # | Fase | Riesgo | Toca |
|---|---|---|---|
| 0 | Preparación / red de seguridad | — | scripts, doc |
| 1 | Limpieza de bajo riesgo | 🟢 bajo | index, exports, extensiones |
| 2 | Diagramas → registro único | 🟡 medio | `SlideRenderer.jsx` |
| 3 | Cuestionarios → organización por materia | 🟡 medio | rutas de archivos, índice |
| 4 | `metadata.examenes` en todo el contenido | 🟢 bajo | metadata |
| 5 | Nuevos esquemas: video + interactivos | 🟡 medio | renderer, libs |
| 6 | Calidad de contenido (diferido) | 🟢 bajo | `explanation` vacías |
| 7 | Sincronizar documentación | 🟢 bajo | CLAUDE.md |

---

## Fase 0 — Preparación ✅ *(24 ago 2026)*

- [x] Confirmar que `npm run build` pasa en limpio (línea base).
- [x] Script de verificación de integridad: `npm run integridad`
      (`scripts/verificar-integridad.mjs`). Corre **antes y después** de cada fase;
      si la lista sale igual en los dos lados, la fase no rompió nada. Comprueba
      `quiz:`, `teoria:` (rutas de App.jsx y archivos de `public/guias/`), `/ver/<id>`,
      los `documentoRef`/`ref` de los cursos, ids repetidos, `metadata.id` contra la
      clave del índice, y preguntas sin `id`. Sale con código ≠ 0 solo si hay un
      enlace roto; lo demás son avisos.
- [x] Inventario de duplicados: lo emite el propio script, así que no se queda
      desactualizado en un documento.

### Línea base — 24 ago 2026

`29 cuestionarios · 65 presentaciones · 13 documentos · 2 cursos`

**Enlaces rotos: 0.** Todo lo que sigue son avisos, y es el trabajo de las fases 1, 4 y 6:

| Aviso | Cuántos | Fase |
|---|---|---|
| Preguntas sin `id` | 25 cuestionarios (~3 500 preguntas) | 1 |
| `metadata.id` ≠ clave del índice | 3 (`sujeto-predicado-uni`, `estructura-oracion-uni`, `numerosracionales`) | 1 |
| Presentaciones sin `subtema` | 6 (todas de Español) | 1 |
| Cuestionarios sin `data` (plantilla) | 2 (`enteros-prepa`, `premedicina`) | 1 |
| Preguntas sin `explanation` | 3 (`producto-enteros`, `la-celula`, `celula-organelos`) | 6 |
| Nombre de archivo repetido | 1 (`sujeto-predicado-uni.js` en prepa y uni) | 3 |

> El número de cuestionarios sin `id` en las preguntas es mayor de lo que suponía el
> plan original: no son "algunos como `la-celula`", son prácticamente todos. Eso cambia
> el enfoque de la Fase 1 — se hace con un script, no a mano.

---

## Fase 1 — Limpieza de bajo riesgo (sin mover archivos)

- [ ] `cuestionarios/.../suma.js`: cambiar `export const SUMA_ENTEROS` → `export default`
      y ajustar su import en `cuestionariosIndex.js`.
- [ ] Unificar extensión: cuestionarios `.jsx` que **no** contienen JSX → `.js`
      (revisar simuladores; conservar `.jsx` solo si usan componentes).
- [ ] Quitar comentarios "TEMPLATE" obsoletos de `cuestionariosIndex.js`.
- [ ] Añadir `questions[].id` faltantes (p. ej. `la-celula.js`) — id estable por pregunta.
- [ ] Verificar `metadata.id` === clave del índice en cada cuestionario; corregir desajustes.
- [ ] Presentaciones sin `materia`/`subtema`: completarlos (~1 y ~7 archivos).

> Esta fase no mueve archivos: cero impacto en rutas. Buen primer commit.

---

## Fase 2 — Diagramas al registro único

Objetivo: vaciar `SlideRenderer.jsx` (~12,700 líneas) de los 322 `...SVG` y 251 `if`.

- [ ] Crear `src/components/diagramas/` con un `index.js` que exporte `DIAGRAMS`.
- [ ] En `SlideRenderer`, reemplazar las cadenas de `if (slide.svgDiagram === ...)`
      y los objetos `svgMap` por `DIAGRAMS[slide.svgDiagram]`.
- [ ] Mover los componentes `...SVG` a `diagramas/<materia>/` en lotes por materia
      (geometría, espanol, fisica, geografia, biologia, quimica). Un commit por materia.
- [ ] Mantener firma `({ tema })` y respeto a la paleta en cada componente movido.
- [ ] (Opcional) `React.lazy` por materia para reducir el bundle inicial.

> Riesgo: es el archivo más grande. Mitigación: mover **por materia**, compilando entre
> lotes; el registro permite coexistencia (algunos en `index.js`, otros aún inline) durante
> la transición.

---

## Fase 3 — Cuestionarios: de nivel a materia

Migrar `cuestionarios/preparatoria/*` y `cuestionarios/universidad/*` a
`cuestionarios/<materia>/*` (eje único, como las presentaciones).

- [ ] Resolver duplicados primero: fusionar `sujeto-predicado-uni.js` (prepa+uni) en un
      único archivo por materia; el examen se distingue con `metadata.examenes`.
- [ ] Mover archivos a `cuestionarios/<materia>/<slug>.js` (sin sufijos `-uni`/`-prepa`/`-exani-i`).
- [ ] Actualizar imports en `cuestionariosIndex.js`. **Los `id` se conservan** → rutas intactas.
- [ ] Correr el script de integridad de ids (Fase 0) y `npm run build`.
- [ ] Decidir si el árbol anidado de `cuestionariosIndex.js` se aplana (registro plano por
      id, como `presentacionesIndex.js`) — coherencia entre ambos índices.

> Riesgo: rutas. Mitigación: ids estables + script de verificación antes/después.

---

## Fase 4 — `metadata.examenes` en todo el contenido

- [ ] Añadir `examenes: [...]` a cada cuestionario y presentación (valores: `EXANI-I`,
      `EXANI-II`, `UNAM`).
- [ ] Añadir `nivel` donde falte.
- [ ] (Opcional) Aprovecharlo para filtrar contenido por examen en la navegación, en lugar
      de depender de carpetas.

---

## Fase 5 — Nuevos esquemas: video + interactivos

- [ ] **Video**: implementar `tipo: "video"` (slide y bloque) con `youtube-nocookie` +
      click-para-cargar (§4.3 de CONVENCIONES).
- [ ] **mafs**: `npm i mafs`; crear `src/components/interactivos/index.js` (`INTERACTIVOS`)
      y los primeros componentes mate (`recta-pendiente`, `funcion-cuadratica`,
      `triangulo-vertices`, `vector-suma`).
- [ ] **matter-js** (ya instalado): primeros componentes física (`caida-libre`,
      `plano-inclinado`, `colisiones`).
- [ ] Implementar `tipo: "interactivo"` en `SlideRenderer` resolviendo por `INTERACTIVOS`.
- [ ] Cada interactivo: recibe `{ tema, ...props }`, autónomo, limpia su engine al desmontar.
- [ ] Probar en las tres vistas (`/ver`, `/presentacion`, `/alumno`).

---

## Fase 6 — Calidad de contenido (diferido)

- [ ] Rellenar las ~350 `explanation: ""` vacías (priorizar por materia/uso).
- [ ] Revisión de `correctAnswer` y consistencia de opciones (4 opciones, prefijo `a) `).

> Separado a propósito de la estructura; puede correr en paralelo a otras fases.

---

## Fase 7 — Sincronizar documentación

- [ ] Actualizar `CLAUDE.md`: catálogo completo de slide/bloque, nuevos tipos
      (`video`, `interactivo`), registro de diagramas e interactivos, organización por materia.
- [ ] Reflejar que `mafs` está en uso y `jsxgraph` queda en reserva.
- [ ] Cerrar las "Brechas detectadas" de `CONVENCIONES.md` ya resueltas.

---

## Resumen de decisiones tomadas (sesión de diseño)

- Organización **por materia**; examen en `metadata.examenes`.
- Prioridad **estructura/mantenibilidad**; calidad de contenido diferida (Fase 6).
- Teoría JSX/HTML: **por decidir** (no bloquea ninguna fase).
- Interactivos: **mafs** (mate) + **matter-js** (física); jsxgraph en reserva.
- Esquema de presentaciones ampliado con **video**, **interactivo**, **registro de
  diagramas** y **documentación de las 2 capas** (slide.tipo / bloque.tipo).
