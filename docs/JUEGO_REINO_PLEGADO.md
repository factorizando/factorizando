# El Reino Plegado

> Juego por mundos y niveles para regularización de primaria, donde **el
> escenario es un espacio topológico**. Se camina por el mapa, se abren portales
> resolviendo acertijos de matemáticas y español, y por debajo el juego estima
> en qué grado va cada jugador —de 3.º a 6.º— sin enseñarle nunca una
> calificación.
>
> Se juega **por turnos en una sola tablet**, con seis jugadores y su avatar.
> Vive en `/regularizacion/reino-plegado`, como un taller más.

---

## 1. La idea

Cuatro mundos, uno por espacio: el plano, la banda de Möbius, el toro (el mundo
de Pac-Man) y el taller de Escher. **La topología no es decorado**: impone cómo
se mueve el jugador y arrastra consigo los temas que se le parecen.

| Mundo | Lo que impone el espacio | Matemáticas | Español |
|---|---|---|---|
| 1 · **Flatland** | Un rectángulo y ya: ubicarse | Planos y trayectoria, recta numérica, suma y resta agrupando, multiplicación, perímetro | Clases de palabra, mayúsculas, oraciones completas |
| 2 · **La Banda** | Sales por un lado y vuelves **de cabeza** | Multiplicación ↔ división, fracción ↔ decimal | Prefijos y sufijos, sentido literal y figurado |
| 3 · **La Dona** | Sales por un borde y entras por el opuesto: ciclos | Múltiplos y divisores, sucesiones, promedio y moda | Conectores, jerarquizar, interrogativos |
| 4 · **Escher** | Piezas que embonan | Áreas, circunferencia, fracciones | Sintagmas, mapas conceptuales |

Que la división viva en la banda que invierte no es un chiste: es lo que uno
quiere decir cuando enseña que dividir es multiplicar al revés.

**Estado**: Mundo 1 completo (5 niveles). Los otros tres tienen ya su topología,
sus temas y su ficha en el mapa del reino; les faltan los mapas. El movimiento
por casillas (`lib/movimiento.js`) ya sabe hacer el toro y la Möbius.

## 2. Cómo se juega

- Cada jugador toca su avatar y sigue **su** partida. En el mapa del reino se
  ven las caras de los seis sobre el mundo donde va cada uno: la competencia se
  ve sin necesidad de red.
- Dentro de un nivel se camina **por casillas** (tocando la casilla de al lado,
  con la cruceta o con las flechas del teclado). Los portales `◈` guardan un
  acertijo; al resolverlo se gana una llave, y con todas las llaves se abre la
  salida.
- **El acertijo está dentro del nivel, no antes.** Es la decisión que separa un
  juego de un cuestionario con disfraz.
- Al fallar no se pierde nada: se muestra la explicación —que cuenta *cómo se
  llega*, no solo cuál era— y el portal se queda ahí. Al reintentar sale **otro
  acertijo del mismo tema**, para que se vuelva a pensar en vez de memorizar la
  respuesta.

## 3. La medición

El problema de medir dentro de un juego: si para avanzar hay que resolver, todos
acaban en 100%. Aquí:

1. **Solo cuenta el primer intento** de cada portal.
2. Una **escalera adaptativa** por materia mueve el grado de los acertijos: tres
   aciertos seguidos suben, dos fallos de los últimos tres bajan. Matemáticas y
   español avanzan por separado, porque a un niño puede irle muy bien en cuentas
   y atorarse en gramática.
3. La estimación final no es el escalón donde quedó, sino **el grado más alto
   donde acierta al menos tres de cada cuatro a la primera**, con un mínimo de
   cuatro intentos para que no sea casualidad.

El niño no ve grado, ni porcentaje, ni escalón. El maestro lo ve completo en el
panel de la esquina, junto con los temas que más se le atoran.

## 4. Dónde vive cada cosa

```
src/data/talleres/reino-plegado/
  grados.js          LA TABLA DE GRADOS (la revisó el maestro; es el instrumento)
  mundos.js          los 4 mundos y los mapas, dibujados con texto
  acertijos/
    matematicas.js   generadores (los números cambian en cada partida)
    espanol.js       banco escrito a mano (una oración no se sortea)
    index.js         sirve los acertijos ya listos para dibujar
  pruebas.js         node src/data/talleres/reino-plegado/pruebas.js

src/components/talleres/reino-plegado/
  ReinoPlegado.jsx   shell: jugadores → mapa del reino → nivel
  Jugadores.jsx      los seis perfiles y la subida de avatar
  MapaReino.jsx      los cuatro mundos y por dónde va cada quien
  Nivel.jsx          el mapa, el movimiento y los portales
  Acertijo.jsx       lo que guarda un portal
  Figuras.jsx        los dibujos de los acertijos (croquis, recta, agrupación…)
  PanelMaestro.jsx   la estimación de grado por jugador
  lib/movimiento.js  plano, toro y Möbius
  lib/medicion.js    la escalera adaptativa
  lib/perfiles.js    los seis jugadores en localStorage
```

## 5. Cómo agregar contenido

**Un nivel**: se dibuja con texto en `mundos.js` (`#` muro, `.` piso, `@`
entrada, `?` portal, `S` salida). Las pruebas verifican que desde la entrada se
llegue a todos los portales y a la salida, así que un mapa mal dibujado se
descubre corriendo `node .../pruebas.js`, no frente a un niño.

**Un acertijo de matemáticas**: un generador nuevo en `acertijos/matematicas.js`
y su entrada en `GENERADORES`. Recibe el grado y devuelve
`{ tipo, enunciado, respuesta, figura?, explicacion, clave }`.

**Un acertijo de español**: una línea más en el `BANCO`. La respuesta correcta
**siempre se escribe primero** (`correcta: 0`) y se revuelve al servirla; así se
escribe y se revisa sin contar índices. Los distractores tienen que ser palabras
de la misma oración: si vienen de otro lado, se acierta sin leer.

**Un tema nuevo** se agrega antes en `src/data/talleres/temas.js` y luego en
`grados.js`, que es lo que decide en qué grado se pregunta.

## 6. Privacidad

Los avatares son fotos de niños y el repositorio del sitio es público. Por eso
se recortan y se encogen a 256 px **en el dispositivo** y viven en el
`localStorage` de esa tablet: no se suben a Supabase, no se commitean, y el
export del panel los omite. Lo único que sale de la tablet es el marcador grueso
de cada nivel terminado, que va al expediente del alumno si el maestro entró con
uno seleccionado.
