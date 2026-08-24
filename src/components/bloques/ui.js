// Piezas de estilo compartidas por los bloques.
//
// Todas reciben `tema` y devuelven objetos de estilo: los bloques no escriben ni
// un hex. Los valores salen del catálogo visual (docs/diseno/presentaciones/) y
// están medidos sobre el lienzo de 1280 × 720, así que a otra escala se escalan
// con él en vez de recalcularse.

export const eyebrow = (tema) => ({
  fontFamily: tema.mono,
  fontSize: 10.5,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: tema.muted,
  marginBottom: 11,
});

export const tarjeta = (tema) => ({
  background: tema.card,
  border: `1px solid ${tema.border}`,
  borderRadius: 10,
  padding: "16px 20px",
});

export const parrafo = (tema) => ({
  fontSize: 17,
  lineHeight: 1.68,
  color: tema.cuerpo,
  margin: 0,
  textWrap: "pretty",
});

export const titulo = (tema, size = 34) => ({
  fontFamily: tema.titulo,
  fontWeight: 600,
  fontSize: size,
  lineHeight: 1.16,
  letterSpacing: "-0.022em",
  color: tema.texto,
  margin: 0,
});

// Rejilla de 12 columnas. Un bloque declara `ancho` en doceavos; sin `ancho`
// ocupa la fila entera. Por debajo del umbral de reflujo todo pasa a una columna.
export const columnas = (ancho, reflujo) => ({
  gridColumn: reflujo ? "1 / -1" : `span ${Math.min(12, Math.max(1, ancho || 12))}`,
});

// El bloque que aún no se ha revelado sigue ocupando su sitio —para que la
// diapositiva no salte al aparecer— pero no se lee.
export const oculto = { opacity: 0, pointerEvents: "none" };
