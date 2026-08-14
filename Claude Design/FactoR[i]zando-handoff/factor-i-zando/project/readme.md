# FactoR[i]zando · Design System

Plataforma educativa interactiva en español (es-MX) para estudiantes de primaria hasta niveles avanzados. Seis materias: Matemáticas, Biología, Química, Historia, Geografía y Física/Música. El producto son lecciones cortas con ejercicios manipulables (árboles de factores, laboratorio de pH, líneas de tiempo, cuerdas vibrantes), no video ni texto pasivo.

## Origen de este sistema

No hubo código, Figma ni archivos de marca previos: el sistema se derivó de un brief del cliente en chat (tema claro inspirado en la sensación de Coursera, azul #0056D2, fondo #F7F9FC, navy #0A2540, acentos por materia) y se formalizó en dos documentos de diseño de este proyecto:

- `FactoRizando Design System.dc.html` — hoja de paleta, escala tipográfica y ejemplos.
- `FactoRizando Home.dc.html` — pantalla de inicio de referencia.

**No existe logotipo provisto.** La marca actual es tipográfica: cuadrado azul con "F" + wordmark en Sora, con la variable *i* compuesta en modo matemático. No hay fotografías ni ilustraciones reales; los huecos rayados en azul de los UI kits son placeholders explícitos.

## Fundamentos visuales

**Color.** Un solo azul manda: #0056D2 es acción (botones primarios, links, estado activo, foco). El fondo nunca es blanco puro — #F7F9FC en el lienzo, #FFFFFF solo en superficies elevadas. Los neutros llevan un matiz azul-verde en lugar de gris neutro, para que las sesiones largas se sientan cálidas y no clínicas. Máximo dos fondos por pantalla (bg + surface), más el navy #0A2540 reservado a bloques de cierre.

**Acentos por materia.** Salvia #4F9377 (Biología y Geografía), coral #DE6E55 (Química), ámbar #D2942E (Historia), índigo apagado #6C63B5 (Física/Música); Matemáticas usa el propio azul. Todos comparten luminosidad y saturación media para no competir con el primario. Como texto no cumplen AA: existe una variante `-text` oscurecida para eso, y una `-tint` al ~10% para fondos.

**Estados.** Éxito en azul #1B8ACB, advertencia #D9A200 y error #F0C22B (decisión explícita del cliente: sin rojo ni verde). Al ser dos ámbares vecinos, advertencia y error **siempre** llevan glifo y título; el color nunca es el único portador de significado.

**Tipografía.** Sora en encabezados (geométrica, terminaciones rectas, numerales altos y abiertos, buena en cifras de dashboard); Figtree en cuerpo (x-height generosa, aguanta párrafos largos de explicación); IBM Plex Mono exclusivamente para fórmulas, unidades, códigos de unidad y eyebrows en mayúsculas; STIX Two Text itálica para variables sueltas en modo matemático.

**Forma y profundidad.** Radios 8/10/18/22px; tarjetas de 18px con borde #E3E9F2 y sombra baja de dos capas. Un acento de materia se aplica como línea superior de 3px, nunca como borde izquierdo. Sin gradientes decorativos (solo el rayado diagonal de los placeholders). Sin blur salvo la barra superior fija (`backdrop-filter: blur(10px)` sobre fondo al 92%).

**Movimiento.** Corto y sobrio: 140ms para color/borde, 160ms para elevación, 240ms para barras de progreso. Hover en superficies interactivas = subir 3px + sombra más amplia; hover en botones = un paso más oscuro del azul (600); pressed = 700 y vuelta a translateY(0). Nada de rebotes ni escalados.

**Layout.** Contenedor 1280px, padding lateral `clamp(20px, 4vw, 48px)`, secciones separadas por `clamp(40px, 5vw, 72px)`. Rejillas siempre `repeat(auto-fit, minmax(320px, 1fr))` para que tablet y móvil reflowen sin media queries. Alturas de control 40/46/54px; en flujos de primaria el default es 54px.

## Fundamentos de contenido

Español de México, tuteo directo al estudiante ("Arrastra cada factor", "Puedes repetir el ejercicio"). Frases cortas y concretas, verbo al frente, sin signos de exclamación salvo en la corrección positiva ("¡Correcto!"). Se nombra la acción real del ejercicio en vez de prometer resultados ("mide el pH de seis disoluciones", no "domina la química"). Sin emoji. Sin metadiscurso ni lenguaje motivacional genérico. Los números se escriben con cifra y unidad ("12 min", "7 / 10", "1 240 ejercicios"). Los eyebrows van en mayúsculas con tracking amplio; los títulos, en caja normal.

## Iconografía

No hay set de iconos provisto. Las marcas de materia son **formas geométricas propias** construidas con `border-radius` y sombras (círculo con anillo para Geografía, gota invertida para Química, barras de distinta altura para Física/Música, el glifo `×` monoespaciado para Matemáticas). Las flechas y signos de interfaz usan caracteres Unicode (`→`, `←`, `×`, `+`, `♪`, `✓`) en la fuente de cuerpo, no SVG dibujado a mano. Si el proyecto adopta un set de iconos, la recomendación es Lucide (trazo 1.5–2px, sin relleno), que combina con el peso de Figtree — **está pendiente de decisión, no implementado**.

## Índice

- `styles.css` — punto de entrada; importa todos los tokens.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `fonts.css` (webfonts vía Google Fonts).
- `guidelines/` — 14 fichas de fundamentos (Colors, Type, Spacing, Brand).
- `components/core/` — Button, IconButton, Card, Badge, ProgressBar, Logo.
- `components/forms/` — Input, Select, Checkbox, Radio, Switch.
- `components/navigation/` — NavBar, Tabs.
- `components/feedback/` — Alert.
- `components/patterns/` — SubjectCard.
- `ui_kits/plataforma/` — Inicio, Materia y Lección enlazadas (`index.html`).
- `SKILL.md` — envoltorio para usar el sistema como Agent Skill.

### Adiciones intencionales

Ningún archivo de origen definía un inventario de componentes, así que se autoró el set estándar dimensionado al producto. `Logo` y `SubjectCard` se añaden porque la marca y la tarjeta de materia se repiten en todas las superficies y traen reglas propias (modo matemático; acento + tinte + texto derivados del token de materia).

## Accesibilidad

Verificado sobre #F7F9FC y #FFFFFF: #0A2540 ≈14:1, #33475B ≈7.9:1, #5A6B7F ≈5.1:1, #0047AF ≈7:1, blanco sobre #0056D2 ≈5.9:1. Reglas: los acentos puros solo en barras, bordes e iconos; para texto usa siempre `--fx-<materia>-text`. El ámbar de error (#F0C22B) jamás como fondo con texto blanco ni como texto: su par legible es #96751A sobre #FDF8E6.
