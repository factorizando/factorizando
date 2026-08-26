// La carátula del tema.
//
import { DIAGRAMS } from "../diagramas/index.js";

// Es un bloque y no un modo del lienzo porque así se coloca como cualquier otro:
// ocupa las doce columnas, se centra, y una portada con una figura al lado se
// arma cambiando su `ancho` sin tocar código.
export function Portada({ bloque, tema, reflujo }) {
  // Una portada puede traer su propio dibujo —«El Círculo» tiene el suyo— o no
  // traer ninguno y usar el de la materia. Si se ignora el propio, se pierde:
  // pasó con 19 portadas al migrar, y el build no dice nada porque un diagrama
  // que falta no rompe, solo deja el hueco.
  const Propio = bloque.figura ? DIAGRAMS[bloque.figura] : null;
  const Deco = bloque.deco === false ? null : (Propio || tema.DecoSVG);
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", textAlign: "center",
      gap: reflujo ? 16 : 26, height: "100%", minHeight: reflujo ? 0 : 560,
    }}>
      {Deco && !reflujo && <Deco tema={tema} />}
      {bloque.kicker && (
        <div style={{ fontFamily: tema.mono, fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase", color: tema.acento }}>
          {bloque.kicker}
        </div>
      )}
      <h1 style={{
        fontFamily: tema.titulo, fontWeight: 600,
        fontSize: reflujo ? 34 : 68, lineHeight: 1.04, letterSpacing: "-0.032em",
        color: tema.texto, margin: 0,
      }}>{bloque.titulo}</h1>
      {bloque.subtitulo && (
        <p style={{ fontSize: reflujo ? 16 : 20, lineHeight: 1.5, color: tema.muted, margin: 0, maxWidth: "52ch" }}>
          {bloque.subtitulo}
        </p>
      )}
      {bloque.meta?.length > 0 && (
        <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", justifyContent: "center",
          fontFamily: tema.mono, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: tema.sub }}>
          {bloque.meta.map((m, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {i > 0 && <span style={{ width: 3, height: 3, borderRadius: "50%", background: tema.sub }} />}
              {m}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
