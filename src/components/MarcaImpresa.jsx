// src/components/MarcaImpresa.jsx
// Logo + wordmark para los documentos que se capturan con html2canvas (el
// comprobante de pago, el calendario de pagos). Vive aparte porque lleva una
// corrección medida que no se puede deducir leyendo el CSS, y tenerla duplicada
// era garantía de que una copia se quedara atrás.

import { useEffect, useRef } from "react";
import { useKaTeX } from "../data/teoria/shared.jsx";

/**
 * `paraCaptura` lo activan los generadores al renderizar fuera de pantalla.
 *
 * html2canvas dibuja el wordmark 10.5px más abajo que el navegador. Medido: la
 * tinta de "Facto" cae a 0.2px del centro del logo en el DOM y a 10.5px en el
 * canvas.
 *
 * El desfase va atado al TEXTO, no a la caja que lo rodea: es el mismo con el
 * logo a 40px y a 34px (con el logo chico y una corrección proporcional de 7.5
 * quedaba un residuo de exactamente 3). Concuerda con que tampoco se moviera al
 * cambiar line-height ni al pasar de flex a inline-block con vertical-align. Lo
 * que sí lo cambiaría es el cuerpo del wordmark: si se toca el font-size de
 * .mi-wordmark, hay que volver a medir esta constante.
 *
 * Ningún CSS lo arregla, porque cualquier ajuste mueve por igual la vista y la
 * captura; de ahí que se aplique solo al capturar.
 */
const CORRECCION_CAPTURA = 10.5;

export default function MarcaImpresa({ paraCaptura = false, altoLogo = 40 }) {
  const katexReady = useKaTeX();
  const mathRef = useRef(null);
  useEffect(() => {
    if (katexReady && window.katex && mathRef.current) {
      try {
        window.katex.render("\\mathbb{R}[i]", mathRef.current, {
          throwOnError: false,
          displayMode: false,
        });
      } catch { /* se queda el texto de respaldo */ }
    }
  }, [katexReady]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <style>{CSS}</style>
      {/* La marca va como <img> a un PNG, no como SVG en línea: waitForImages
          del generador ya sabe esperar a un <img>, y html2canvas lo rasteriza
          sin sorpresas. El comprobante es documento de cobro; no es donde se
          experimenta con el pipeline.

          Va en la tinta del wordmark, no en azul, y con el sombreado del
          pliego: son tres grises que a 40px —los ~10mm que ocupa en el papel—
          siguen separando las tres orientaciones de cara. Se genera desde la
          misma lista de caras que MarcaTribar. */}
      <img
        src={`${import.meta.env.BASE_URL}assets/marca/v-impresa.png`}
        alt="Factorizando"
        style={{ height: altoLogo, display: "block" }}
      />
      <span
        className="mi-wordmark"
        style={paraCaptura ? { transform: `translateY(-${CORRECCION_CAPTURA}px)` } : undefined}
      >
        Facto
        <span ref={mathRef} style={{ color: "#3b9eff" }}>
          {katexReady ? "" : "ℝ[i]"}
        </span>
        zando
      </span>
    </div>
  );
}

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Cormorant+Garamond:wght@700&display=swap');

  /* KaTeX inyecta font-size 1.21em en .katex, así que el ℝ[i] salía bastante
     más grande que las letras, y su line-height 1.2 inflaba la caja de línea.
     Fijamos line-height y bajamos el math a 1.05em para emparejar el conjunto.
     El margin-top es un ajuste óptico: el centrado flex alinea la *caja* del
     texto, no su banda de mayúsculas, que queda más arriba por el hueco del
     descendente. En un flex item centrado el margen desplaza solo la mitad de
     su valor, así que 2.25px ≈ 1.12px de corrección real. */
  .mi-wordmark {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 700;
    font-size: 19px;
    line-height: 1;
    color: #1a1c1f;
    letter-spacing: .01em;
    margin-top: 2.25px;
  }
  .mi-wordmark .katex { font-size: 1.05em; line-height: 1; color: #3b9eff; }
`;
