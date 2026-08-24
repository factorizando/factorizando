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

## Fase 1 — Limpieza de bajo riesgo ✅ *(24 ago 2026)*

- [x] `suma.js`: `export const SUMA_ENTEROS` → `export default`, e import ajustado.
      Era el único banco con export nombrado.
- [x] Comentarios "TEMPLATE" fuera de `cuestionariosIndex.js`, sustituidos por lo que
      de verdad hay que saber al editarlo: que el `id` es la URL y lo que se guarda en
      `resultados.cuestionario_id`.
- [x] Extensiones: **nada que cambiar.** Los tres cuestionarios `.jsx`
      (`simulador-prepa-1`, `simulador-prepa-2`, `simulador-exani-i-3`) contienen JSX
      real —`key={}`, `fill={C.text}`, `.map(… => <rect/>)`—, así que la extensión ya
      era la correcta. El plan suponía lo contrario.
- [x] `questions[].id`: resuelto **en el índice, no en los archivos** (ver abajo).
- [x] `metadata.id` ≠ clave del índice: los 3 corregidos.
- [x] Presentaciones sin `subtema`: las 6 completadas.
- [x] Extra: eliminadas dos entradas plantilla sin `data` (`enteros-prepa`,
      `premedicina`) y dos archivos huérfanos idénticos (`sujeto-predicado-uni.js` en
      `preparatoria/espanol/` y en `universidad/espanol/`).

### Por qué los ids de pregunta no se escribieron en los archivos

Eran ~3 500 preguntas en 25 bancos. Escribir `id: N` en cada literal daba el mismo
valor que calcularlo —la posición dentro del archivo— a cambio de tocar miles de líneas
escritas a mano. Se resuelve con `numerarPreguntas()` en `cuestionariosIndex.js`: al
cargar el índice, cada pregunta sin `id` recibe su posición en base 1. **El `id`
declarado siempre manda**, así que la puerta queda abierta para fijarlo a mano cuando
haga falta.

Contrapartida honesta: al ser posicional, insertar una pregunta a mitad de archivo
recorre los ids siguientes. Mientras los bancos crezcan por el final —que es como han
crecido— no pasa nada; el día que haya que insertar en medio, se declara el `id` en esa
pregunta. Nada persiste ids de pregunta hoy: `resultados` solo guarda `puntaje`, `total`
y `cuestionario_id`, así que no había historial que romper.

De paso, `simulador-exani-i-3` usaba ids de texto (`"q0"`…) y pasó a numérico: el corpus
tiene ahora un solo tipo.

### Pendiente en Supabase (para ti, no lo corro yo)

Tres `metadata.id` cambiaron, y ese campo es el que se guarda en
`resultados.cuestionario_id`. Los intentos anteriores al 24 ago 2026 quedaron bajo el id
viejo. **Primero mira cuánto hay**, que puede no valer la pena:

```sql
select cuestionario_id, cuestionario_titulo, count(*) as intentos,
       min(created_at)::date as desde, max(created_at)::date as hasta
from resultados
where cuestionario_id in ('sujeto-predicado-uni', 'numerosracionales', 'estructura-oracion-uni')
group by 1, 2
order by 1;
```

**Dos son seguros** — ningún otro cuestionario escribió nunca esos ids:

```sql
update resultados set cuestionario_id = 'sujeto-predicado-exani-i'
 where cuestionario_id = 'sujeto-predicado-uni';

update resultados set cuestionario_id = 'uni-numeros-racionales'
 where cuestionario_id = 'numerosracionales';
```

**El tercero NO se puede reconciliar, y no hay que intentarlo.** `estructura-oracion-uni`
y `estructura-oracion-prepa` son dos cuestionarios distintos que hasta hoy escribían el
**mismo** `cuestionario_id`, con el **mismo** `cuestionario_titulo` ("Estructura de la
oración") y el mismo `nivel`. No existe ninguna columna que los separe.

Lo único que acota es la fecha: el banco de preparatoria se enlazó el **2026-04-30**
(commit `518c433`); el de universidad existía desde el 23-abr. Así que:

- `created_at < '2026-04-30'` → seguro del de universidad.
- `created_at >= '2026-04-30'` → ambiguo, mezcla de los dos, irrecuperable.

La recomendación es **dejarlo como está**: `estructura-oracion-uni` sigue siendo un id
válido, así que esas filas no quedan huérfanas; solo están sobreatribuidas. De hoy en
adelante los dos escriben ids distintos y el problema no se repite.

```sql
-- Solo para dimensionar cuántas filas quedan ambiguas:
select count(*) filter (where created_at <  date '2026-04-30') as seguras_uni,
       count(*) filter (where created_at >= date '2026-04-30') as ambiguas
from resultados where cuestionario_id = 'estructura-oracion-uni';
```

> `resultados` no está en `supabase/migrations/`: se creó desde el panel, como avisa el
> historial desincronizado. Estas consultas suponen que tiene `created_at`, que es el
> valor por defecto de Supabase; compruébalo antes.

### Hallazgo suelto para la Fase 4

`metadata.nivel` dice `"universidad"` en dos bancos que son de preparatoria
(`sujeto-predicado-exani-i`, `estructura-oracion-prepa`) — herencia de haberse copiado
de sus hermanos de universidad. Y `uni-numeros-racionales` tiene
`titulo: "NumerosRacionales"` sin espacios ni acento. No rompe nada hoy; se arregla al
tocar `metadata` en la Fase 4.

### Estado tras la fase

`27 cuestionarios · 65 presentaciones · 13 documentos · 2 cursos` · **0 enlaces rotos**
· 2 avisos, los dos de Fase 6 (`producto-enteros` y `la-celula` sin `explanation`).
Bajamos de 39 avisos a 2.

---

## Fase 2 — Diagramas al registro único 🟡 *(24 ago 2026 — falta matemáticas)*

**2a · La resolución pasa de código a dato** ✅

- [x] Las seis cadenas de `if` y el objeto `svgMap` —468 comparaciones repartidas por el
      archivo— se sustituyen por un mapa y un único `<Diagrama>` que resuelve.
- [x] `buscarDiagrama()` consulta primero `DIAGRAMS` y luego el mapa local, así que el
      registro definitivo y lo aún no mudado conviven. Eso es lo que permite ir por lotes.

**2b · Los componentes salen del archivo** 🟡

- [x] `scripts/mover-diagramas.mjs <materia>` hace la extracción con guardas: no toca un
      componente que se use fuera del registro, aborta si depende de algo que se queda
      atrás, y no escribe nada hasta que todo pasa.
- [x] `src/components/diagramas/comun.jsx`: `arrowHead`, `EjesXY`, `Bloque`, `Vector` y
      `GenDobleHelice`, que eran lo único que impedía extraer física, química y biología.
- [x] geografía (14) · geometría (8) · español (23) · química (18) · biología (36) · física (53)
- [ ] **matemáticas (156 claves, ~4 500 líneas)** — pendiente. Necesita subir antes a
      `comun.jsx`: `_svgH`, `qRegPoly`, `estChips`, `estBarras`, `DadoSVG`, `UrnaSVG` y las
      constantes `PROB_NODE_TYPES`, `DIST_BINOMIAL`, `DIST_SUMA_DADOS`, `DADO_FREC`, `GRADE_FREC`.
- [ ] (Opcional) `React.lazy` por materia. Mover archivos no adelgaza el bundle por sí solo;
      SlideRenderer sigue importándolos todos.

### Estado

`SlideRenderer.jsx`: **12 749 → 7492 líneas**. 155 diagramas en `DIAGRAMS`, 156 aún locales,
311 en total · 302 usados · 0 sin resolver.

### Tres cosas que salieron mal y cómo se detectaron

1. **49 archivos extraídos sin sus imports.** El script no arrastraba `M` (KaTeX en línea)
   ni los hooks de React. Compilaba igual —Vite no comprueba identificadores no resueltos en
   tiempo de build— y habría reventado al renderizar. **Lo cazó `npm run lint`**, no el build.
2. **Las rutas relativas subían dos niveles y hacían falta tres.** Desde
   `diagramas/<materia>/` hasta `src/data/` son `../../../`. Esa sí la cazó el build.
3. **El prefijo `geo-` mezcla geografía y geometría.** Ocho diagramas (`geo-pitagoras`,
   `geo-isometrias`, `geo-cubo-desarrollo`…) son de matemáticas y acabaron en la carpeta
   equivocada. No lo detectó ninguna herramienta: se vio al leer la lista de archivos. La
   verdad no está en el prefijo de la clave sino en **qué presentación la usa**, que es como
   se reclasificaron.

> Moraleja para el lote de matemáticas: compilar no es verificar. El orden que funcionó es
> build → lint → `npm run integridad` → abrir una diapositiva de verdad en
> `/preview-ver/<id>`.

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
