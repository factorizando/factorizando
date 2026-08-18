// Utilidades de sorteo compartidas por los tres generadores.
//
// Todo se genera al vuelo: no hay listas fijas de ejercicios. Dos partidas
// seguidas del mismo juego no traen los mismos números, que es lo que evita
// que el alumno acabe memorizando la ronda en vez de la operación.

export function entero(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

export function elegir(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

export function barajar(lista) {
  const l = [...lista];
  for (let i = l.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [l[i], l[j]] = [l[j], l[i]];
  }
  return l;
}

// Elige con pesos: [["a", 3], ["b", 1]] saca "a" tres de cada cuatro veces.
export function elegirPesado(pares) {
  const total = pares.reduce((s, [, p]) => s + p, 0);
  let r = Math.random() * total;
  for (const [valor, peso] of pares) {
    r -= peso;
    if (r <= 0) return valor;
  }
  return pares[pares.length - 1][0];
}

// Una ronda de `n` ejercicios sin repetidos. El reintento es acotado a
// propósito: con denominadores 2, 3 y 4 hay pocos ejercicios posibles y una
// búsqueda exhaustiva se colgaría; después de `intentos` se acepta el
// repetido, que es mucho mejor que dejar al alumno esperando.
export function serie(generar, n, { clave = (x) => JSON.stringify(x), intentos = 20 } = {}) {
  const salida = [];
  const vistas = new Set();
  while (salida.length < n) {
    let ej = generar();
    for (let t = 0; t < intentos && vistas.has(clave(ej)); t++) ej = generar();
    vistas.add(clave(ej));
    salida.push(ej);
  }
  return salida;
}
