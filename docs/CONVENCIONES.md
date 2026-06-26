# Convenciones de contenido — Factorizando

> Estándar único para crear y mantener **cuestionarios**, **presentaciones** y **teoría**.
> Objetivo: contenido homogéneo, una sola fuente por tema, fácil de mantener.
>
> **Estado:** estándar definido (no se han migrado todavía los archivos existentes).
> La sección [Brechas detectadas](#brechas-detectadas) lista lo que falta alinear.

---

## 1. Principio de organización: por **materia**, no por examen

Todo el contenido se organiza en carpetas **por materia**. El examen al que aplica
(EXANI-I / EXANI-II / UNAM) **no** se codifica en la ruta: se declara en `metadata.examenes`.

**Por qué:** ~mitad del contenido se comparte entre exámenes. Organizar por examen
obliga a duplicar archivos (hoy existe `sujeto-predicado-uni.js` en `preparatoria/` Y
en `universidad/`). Una sola fuente por tema elimina la divergencia.

Materias canónicas (mismo nombre de carpeta en los tres árboles):

```
matematicas · espanol · fisica · quimica · biologia · geografia · comprension · ingles
```

Estructura objetivo:

```
src/data/
  cuestionarios/<materia>/<slug>.js
  presentaciones/<materia>/<slug>.js
  teoria/<materia>/<slug>.jsx
```

> Las presentaciones ya siguen este eje. Los cuestionarios (hoy en `preparatoria/`
> y `universidad/`) se migrarán a este esquema. Teoría se decide después.

---

## 2. Reglas transversales (todos los tipos)

| Regla | Estándar |
|---|---|
| **Extensión** | `.js` para datos puros. `.jsx` **solo** si el archivo contiene JSX (p. ej. simuladores con componentes, teoría). |
| **Nombre de archivo** | `kebab-case`, sin sufijos de examen (`-exani-i`, `-uni`, `-prepa`). El examen va en metadata. |
| **`id`** | Igual al nombre de archivo sin extensión. Único en todo el proyecto. Es la clave de las rutas (`/cuestionario/<id>`, `/ver/<id>`). |
| **Export** | Cuestionarios y teoría: `export default`. Presentaciones: `export const PRESENTACION` (ya consistente, se mantiene). |
| **`metadata.examenes`** | Array: `["EXANI-I"]`, `["EXANI-II","UNAM"]`, etc. Reemplaza la distinción por carpeta. Valores permitidos: `EXANI-I`, `EXANI-II`, `UNAM`. |
| **`metadata.nivel`** | `"preparatoria"` o `"universidad"` (audiencia, no organización). |
| **Comentario de cabecera** | Primera línea: `// src/data/<ruta-real-del-archivo>`. |

---

## 3. Esquema canónico — Cuestionario

```js
// src/data/cuestionarios/biologia/la-celula.js
export default {
  metadata: {
    id: "la-celula",            // === nombre de archivo, === id en el índice
    titulo: "La Célula",
    materia: "Biología",
    tema: "La Célula",
    nivel: "universidad",
    examenes: ["EXANI-II", "UNAM"],
  },
  config: { timePerQuestion: 60 },   // siempre presente
  bloques: [                          // opcional; omitir si el quiz no se divide
    { id: "nucleo", titulo: "Núcleo", from: 0, to: 11, color: "#3b9eff" },
  ],
  questions: [
    {
      id: "q1",                       // OBLIGATORIO y único dentro del quiz
      question: "¿Cuál es la función principal del núcleo?",
      options: ["...", "...", "...", "..."],   // 4 opciones, prefijo "a) " incluido
      correctAnswer: 1,               // índice 0-based
      explanation: "...",             // OBLIGATORIO, nunca cadena vacía
      diagram: null,                  // opcional: componente/clave de SVG
    },
  ],
}
```

Reglas:
- `questions[].id` **obligatorio** (hoy faltan en varios; ver brechas).
- `explanation` nunca vacía. Una pregunta sin explicación no se considera terminada.
- `correctAnswer` es índice numérico, no la letra.
- En `bloques`, `cantidad` es redundante con `from`/`to` → se elimina (derivable).

---

## 4. Esquema canónico — Presentación

```js
// src/data/presentaciones/matematicas/circulo.js
export const PRESENTACION = {
  id: "circulo",
  titulo: "El Círculo",
  materia: "Matemáticas",     // OBLIGATORIO (faltan en ~1 archivo)
  subtema: "Geometría",       // OBLIGATORIO (faltan en ~7 archivos)
  examenes: ["EXANI-I", "EXANI-II"],
  nivel: "preparatoria",
  slides: [ /* ... */ ],
}
```

### 4.1. Dos capas: `slide.tipo` y `bloque.tipo`

El sistema tiene **dos niveles** (hoy sin documentar). Entenderlos es lo que permite
componer presentaciones libremente:

- **Slides atómicas** — una slide con su propio `tipo` y campos. Render directo.
- **Slides compuestas** — una slide que contiene `bloques: [...]`, donde cada bloque
  tiene su propio `bloque.tipo`. Las piezas se apilan en el orden del array.

El array `slides[]` **no impone secuencia**. "Título → tabla → ejemplos → trampa" es una
convención de autor, no una regla del motor. Puedes ordenar como quieras y mezclar slides
atómicas con compuestas. Lo que sigue es el **menú** de piezas disponibles.

**Tipos de slide atómica** (`slide.tipo`, despachados en el `switch` de `SlideRenderer.jsx`):

| Tipo | Uso |
|---|---|
| `portada` | Carátula del tema. |
| `definicion` | Definición formal con símbolo/fórmula y condiciones. |
| `concepto` | Concepto con items/lista. |
| `lista_criterios` | Enumera criterios; cada uno se detalla luego. |
| `criterio_detalle` | Desarrollo de un criterio. |
| `ejemplo` | Ejemplo resuelto. |
| `ejercicio` | Ejercicio (con o sin solución guiada). El más usado. |
| `regla_rica` | Regla mnemotécnica o atajo. |
| `arbol_decision` | Flujo de decisión (usa `@xyflow/react`). |
| `resumen` | Cierre / síntesis. |
| `video` 🆕 | Video de YouTube embebido (§4.3). |
| `interactivo` 🆕 | Componente manipulable: mate (mafs) o física (matter-js) (§4.4). |

**Tipos de bloque** (`bloque.tipo`, dentro de una slide compuesta con `bloques[]`):

| Tipo | Uso |
|---|---|
| `texto` | Bloque expositivo. |
| `par` | Comparación de dos elementos (correcto/incorrecto, antes/después). |
| `tabla` | Datos tabulares. |
| `diagrama` | Diagrama estático vía registro `svgDiagram` (§4.2). |
| `trampa` | Error común / distractor a evitar. |
| `video` 🆕 | Mismo render que la slide de video, como bloque. |
| `interactivo` 🆕 | Mismo render que la slide interactiva, como bloque. |

> **Acción de doc:** CLAUDE.md solo lista 7 tipos. Sincronizar con esta tabla al migrar.

### 4.2. Diagramas estáticos: registro único 🆕

**Problema actual:** `SlideRenderer.jsx` tiene ~12,700 líneas con **322 componentes
`...SVG`** y **251 comparaciones `slide.svgDiagram === "..."`** en cadenas de `if`.
Cada diagrama nuevo obliga a editar ese archivo.

**Estándar:** los diagramas viven por materia y se resuelven con un mapa único.

```
src/components/diagramas/
  <materia>/<slug>.jsx     // componente que recibe { tema }
  index.js                 // export const DIAGRAMS = { "circulo-partes": CirculoPartesSVG, ... }
```

```jsx
// En SlideRenderer / SlideDiagrama:
import { DIAGRAMS } from "./diagramas";
const D = DIAGRAMS[slide.svgDiagram];
return D ? <D tema={tema} /> : null;   // sin if-chains
```

Reglas:
- Un `svgDiagram` (string) = una clave en `DIAGRAMS`. Sin duplicar lógica de despacho.
- Todo componente de diagrama recibe `{ tema }` y respeta la paleta (no fija colores).
- Se permite `React.lazy` por materia para no cargar todos los SVG de golpe.

### 4.3. Video (YouTube) 🆕

Slide atómica **o** bloque dentro de una compuesta. Mismo shape:

```js
{
  tipo: "video",
  youtubeId: "dQw4w9WgXcQ",   // OBLIGATORIO (solo el id, no la URL completa)
  titulo: "...",              // opcional
  caption: "...",             // opcional, pie de video
  inicio: 30,                 // opcional, segundos de arranque
  ratio: "16:9",              // opcional, default "16:9"
}
```

Render:
- Usar dominio `youtube-nocookie.com` (privacidad).
- **Click-para-cargar**: mostrar miniatura (`https://img.youtube.com/vi/<id>/hqdefault.jpg`)
  y montar el `<iframe>` solo al hacer clic, para no incrustar varios reproductores a la vez.

### 4.4. Interactivos: registro único 🆕

Mismo patrón que los diagramas, pero para componentes manipulables con el mouse.

```
src/components/interactivos/
  matematicas/<slug>.jsx   // motor: mafs (useMovablePoint, etc.)
  fisica/<slug>.jsx        // motor: matter-js (gravedad, colisiones, arrastre)
  index.js                 // export const INTERACTIVOS = { "recta-pendiente": RectaPendiente, ... }
```

Shape en la slide/bloque:

```js
{
  tipo: "interactivo",
  interactivo: "recta-pendiente",   // clave en INTERACTIVOS
  props: { m: 2, b: -1 },           // parámetros iniciales del componente
  titulo: "...",                    // opcional
  instruccion: "Arrastra el punto para cambiar la pendiente",  // opcional
}
```

Motores adoptados:
- **Matemáticas → `mafs`** (React nativo; `useMovablePoint` para arrastrar puntos,
  vértices y vectores; plano cartesiano y funciones). Motor principal. *Pendiente instalar.*
- **Física → `matter-js`** (ya instalado; objetos con gravedad/colisiones arrastrables
  para cinemática y dinámica).
- `jsxgraph` queda en reserva solo para construcciones geométricas que mafs no cubra;
  antes de usarlo hay que resolver el bug de fondo blanco (ver CLAUDE.md).

Reglas:
- Cada interactivo recibe `{ tema, ...props }` y es autónomo (limpia su board/engine al desmontar).
- Catálogo inicial sugerido (mate): `recta-pendiente`, `funcion-cuadratica`,
  `triangulo-vertices`, `vector-suma`. (física): `caida-libre`, `plano-inclinado`,
  `colisiones`.

---

## 5. Esquema canónico — Teoría

> El mecanismo (JSX vs HTML en `public/guias/`) **queda por decidir**. Mientras tanto,
> el contenido nuevo usa JSX con `shared.jsx` (`M`, `B`, `useKaTeX`).

```jsx
// src/data/teoria/matematicas/fracciones-decimales.jsx
import { M, B, useKaTeX } from "../shared";
export default function FraccionesDecimales() { /* ... */ }
```

---

## 6. Registro único (evitar fuentes paralelas)

Hoy un recurso se referencia en **tres** sitios que pueden desincronizarse:
`cuestionariosIndex.js`, los árboles de navegación (`preparatoriaData.js` /
`universidadData.js`) y `presentacionesIndex.js`.

**Regla:** el `id` es la única clave de verdad.
- `metadata.id` del archivo === `id` con que se registra en el índice === nombre de archivo.
- El índice (`cuestionariosIndex.js` / `presentacionesIndex.js`) es el **único** registro
  de existencia. Los árboles de navegación solo **referencian** por `id`/ruta, nunca
  redefinen metadata.
- Al crear contenido, verificar que `metadata.id` y la clave del índice coincidan.

---

## 7. Checklist para contenido nuevo

**Cuestionario**
- [ ] Archivo en `cuestionarios/<materia>/<slug>.js`, `export default`.
- [ ] `metadata` completa con `examenes` y `nivel`.
- [ ] `metadata.id` === slug === id en el índice.
- [ ] Cada `question` tiene `id` único y `explanation` no vacía.
- [ ] Registrado en `cuestionariosIndex.js` y referenciado por `id` en el árbol.

**Presentación**
- [ ] Archivo en `presentaciones/<materia>/<slug>.js`, `export const PRESENTACION`.
- [ ] `materia` y `subtema` presentes; `examenes` declarado.
- [ ] Cada slide usa un `tipo` del catálogo §4.
- [ ] `svgDiagram` referenciados existen en `SlideRenderer.jsx`.
- [ ] Registrado en `presentacionesIndex.js`.

---

## Brechas detectadas

Pendientes de alinear al estándar (no resueltas en esta sesión). La hoja de ruta para
cerrarlas está en [`PLAN_MIGRACION.md`](./PLAN_MIGRACION.md).

1. **Cuestionarios por nivel → por materia.** Migrar `preparatoria/` y `universidad/`
   a `<materia>/`; eliminar el duplicado `sujeto-predicado-uni.js`.
2. **Export mixto.** `suma.js` usa `export const SUMA_ENTEROS`; pasar a `export default`.
3. **Extensiones.** Revisar `.jsx` que no contienen JSX (cuestionarios) → `.js`.
4. **`questions[].id` faltantes** en varios cuestionarios (p. ej. `la-celula.js`).
5. **350 `explanation: ""` vacías** (hueco de calidad — diferido por decisión).
6. **Presentaciones sin `materia`/`subtema`** (~1 y ~7 archivos).
7. **CLAUDE.md documenta 7 tipos de slide; existen 15.** Sincronizar.
8. **`cuestionariosIndex.js` con comentarios "TEMPLATE" obsoletos.**
9. **`metadata.examenes` no existe aún** en ningún archivo; introducir al migrar.
10. **Mecanismo de teoría** (JSX vs HTML) por decidir.
11. **`SlideRenderer.jsx` ~12,700 líneas** con 322 `...SVG` + 251 `if` de `svgDiagram`;
    desacoplar al registro de diagramas (§4.2).
12. **Sin soporte de video** — implementar tipo `video` (§4.3).
13. **Sin capa interactiva** — implementar tipo `interactivo` con `mafs` (mate, *falta
    instalar*) y `matter-js` (física); registro `INTERACTIVOS` (§4.4).
14. **`jsxgraph` importada pero sin usar** en `SlideRenderer`; dejar en reserva o retirar.
