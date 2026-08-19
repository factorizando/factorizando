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
| 4 · **Escher** | Se ve plano y cerrado, pero tiene **pasajes**: dos losas lejanas son la misma | Áreas, circunferencia, fracciones | Sintagmas, mapas conceptuales |

Que la división viva en la banda que invierte no es un chiste: es lo que uno
quiere decir cuando enseña que dividir es multiplicar al revés.

**Estado**: los cuatro mundos jugables (5 + 2 + 2 + 2 niveles).

**La regla que hace que la topología no sea decorado**: en el toro y en la banda,
cada nivel lleva una pared que lo parte de arriba abajo. En un plano sería un
callejón sin salida; ahí es el camino, porque la única manera de pasar al otro
lado es cruzar una costura. Las pruebas lo verifican: si un nivel de esos mundos
se puede terminar caminando como en un plano, falla.

**Cómo se ven las costuras**: alrededor del mapa hay franjas de color, una por
fila y una por columna. Cada franja lleva el color de la franja con la que está
pegada del otro lado. En el toro los colores de la izquierda y la derecha van en
el mismo orden; en la banda de Möbius, **al revés** — y ahí se ve el volteo antes
de que nadie lo explique.

**Los mundos se abren en orden**, como en Mario: cada uno pide llevar la mitad
del anterior. El maestro puede abrirlos todos desde su panel para enseñar la
banda el primer día.

### La vista 3D

En los tres mundos doblados hay un botón, **«Ver el mundo doblado»**, que enseña
*ese mismo nivel, con el jugador donde está parado*, cosido sobre la superficie:
la dona, la banda, o —en el taller de Escher— el suelo plano con los pasajes
dibujados como arcos que conectan las dos losas. Se puede girar con el dedo.

Es la pieza que cierra la idea del juego: se juega en la cuadrícula plana,
que es lo único jugable con el dedo, y la vista 3D explica de un golpe por qué
salir por la derecha te devuelve por la izquierda.

Cómo está hecho (`Vista3D.jsx`): cada casilla del mapa es un pedazo de la
superficie, tomando muestras de la parametrización y cosiéndolas como
triángulos con el color de la casilla. No hay modelos ni texturas: la geometría
se calcula con la misma fórmula que dobla el mundo, y por eso el dibujo nunca
puede contradecir al movimiento. Se carga aparte —three.js pesa 700 KB— y solo
cuando alguien toca el botón.

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
entrada, `?` portal, `S` salida, y en el mundo 4 una letra minúscula repetida
dos veces marca las dos bocas de un pasaje). Las pruebas verifican que desde la
entrada se llegue a todos los portales y a la salida **recorriéndolo con la
topología del mundo**, y en los mundos doblados que *no* se pueda terminar sin
cruzar una costura. Un mapa mal dibujado se descubre corriendo
`node .../pruebas.js`, no frente a un niño.

Ojo con los bordes según el mundo: el plano y el taller de Escher van cerrados
por los cuatro lados; el toro va abierto por los cuatro; la banda, abierta a los
lados y cerrada arriba y abajo.

**Un acertijo de matemáticas**: un generador nuevo en `acertijos/matematicas.js`
y su entrada en `GENERADORES`. Recibe el grado y devuelve
`{ tipo, enunciado, respuesta, figura?, explicacion, clave }`.

**Un acertijo de español**: una línea más en el `BANCO`, de una de dos formas:

```js
// opción múltiple
{ tema, grado, texto?, pregunta, opciones: [...], correcta: 0, explicacion }
// ordenar (se resuelve tocando las tarjetas en orden)
{ tema, grado, pregunta, orden: ["Ser vivo", "Animal", "Perro", "Pastor alemán"], explicacion }
```

La respuesta correcta **siempre se escribe primero** (`correcta: 0`, o la
secuencia ya ordenada) y el juego la revuelve al servirla; así se escribe y se
revisa sin contar índices. Los distractores tienen que ser palabras de la misma
oración: si vienen de otro lado, se acierta sin leer. Los de ordenar se tocan y
no se arrastran, por lo mismo que en el taller de decodificación: el arrastre en
una tablet proyectada falla seguido y vuelve el ejercicio uno de puntería.

**Un tema nuevo** se agrega antes en `src/data/talleres/temas.js` y luego en
`grados.js`, que es lo que decide en qué grado se pregunta.

## 6. Lo que falta

- **Más niveles**: dos por mundo en el 2, 3 y 4; el primero tiene cinco.
- **Mapas conceptuales** como acertijo arrastrable con React Flow; hoy son de
  opción múltiple.
- **El teselado de verdad** en el mundo 4: hoy su identidad son los pasajes, no
  los mosaicos que embonan. Una cuadrícula rómbica (isométrica) sería el
  siguiente paso.
- Que la vista 3D se pueda **abrir desde el mapa del reino**, no solo dentro de
  un nivel.

## 7. Privacidad

Los avatares son fotos de niños y el repositorio del sitio es público. Por eso
se recortan y se encogen a 256 px **en el dispositivo** y viven en el
`localStorage` de esa tablet: no se suben a Supabase, no se commitean, y el
export del panel los omite. Lo único que sale de la tablet es el marcador grueso
de cada nivel terminado, que va al expediente del alumno si el maestro entró con
uno seleccionado.
