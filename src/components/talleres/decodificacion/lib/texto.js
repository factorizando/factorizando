// Utilidades de texto del taller de decodificación.

// Los reactivos de anclas se escriben con la letra en disputa entre
// corchetes: "cig[ü]eñal". Eso deja el dato legible para quien lo escribe y
// evita que alguien tenga que contar índices de caracteres a mano.
export function parsearReactivo(crudo) {
  const m = crudo.match(/^(.*?)\[([^\]]+)\](.*)$/);
  if (!m) return { antes: crudo, ok: "", despues: "", palabra: crudo };
  const [, antes, ok, despues] = m;
  return { antes, ok, despues, palabra: antes + ok + despues };
}

// Parte un texto en tokens conservando la posición de cada palabra dentro de
// la cadena original. El índice importa: `speechSynthesis` reporta el avance
// de la locución en caracteres (`charIndex`), no en palabras, así que sin
// esto no se puede resaltar lo que va sonando.
export function partirEnPalabras(texto) {
  const tokens = [];
  const re = /\S+/g;
  let m;
  while ((m = re.exec(texto)) !== null) {
    tokens.push({ texto: m[0], inicio: m.index, fin: m.index + m[0].length });
  }
  return tokens;
}

// Quita puntuación y acentos para comparar palabras. NFD parte la ñ en n +
// tilde combinante, así que el mismo barrido de diacríticos la deja en "n":
// suficiente para comparar, y no se usa para nada que se muestre en pantalla.
export function normalizar(s) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

// Baraja sin tocar el original.
export function barajar(lista) {
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Toma n elementos al azar sin repetir.
export function tomar(lista, n) {
  return barajar(lista).slice(0, n);
}
