// Diagrama «diptongo-hiato» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function DiptongoHiatoSVG({ tema }) {
  return (
    <svg viewBox="0 0 640 160" width="100%" style={{ display: "block" }}>
      {/* DIPTONGO */}
      <text x="155" y="20" fill={tema.azul} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif"
        fontWeight="700" letterSpacing="0.12em" textAnchor="middle">DIPTONGO</text>
      <text x="155" y="34" fill={tema.muted} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif"
        textAnchor="middle">vocal cerrada ÁTONA + vocal</text>
      {/* Ejemplo: bue-no */}
      {[["b",""], ["u","cerrada\nátona"], ["e","abierta"], ["-",""], ["n",""], ["o",""]].map(([ch], i) => {
        const x = 55 + i * 28;
        const isVowel = ["u","e","o"].includes(ch);
        const isSpecial = ch === "u";
        return (
          <g key={i}>
            <text x={x} y={65} fill={isSpecial ? tema.azul : isVowel ? tema.verde : tema.muted}
              fontSize="22" fontFamily="Georgia,serif" textAnchor="middle" fontWeight={isVowel ? "700" : "400"}>
              {ch}
            </text>
          </g>
        );
      })}
      {/* Bracket bajo ue */}
      <path d="M 70,72 Q 70,82 83,82 Q 97,82 97,72" fill="none" stroke={tema.azul} strokeWidth="1.5"/>
      <text x="83" y="95" fill={tema.azul} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">1 sílaba</text>
      <text x="83" y="107" fill={tema.azul} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">«bue»</text>
      {/* bracket de toda la sílaba bue */}
      <text x="155" y="130" fill={tema.verde} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">bue-no → 2 sílabas</text>
      <text x="155" y="145" fill={tema.muted} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">tilde sobre vocal abierta: huésped</text>

      {/* Divisor */}
      <line x1="310" y1="10" x2="310" y2="155" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4,3"/>

      {/* HIATO */}
      <text x="480" y="20" fill={tema.acento} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif"
        fontWeight="700" letterSpacing="0.12em" textAnchor="middle">HIATO</text>
      <text x="480" y="34" fill={tema.muted} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif"
        textAnchor="middle">vocal cerrada TÓNICA + vocal</text>
      {/* Ejemplo: pa-ís */}
      {[["p",""], ["a","abierta"], ["-",""], ["í","cerrada\ntónica"], ["s",""]].map(([ch], i) => {
        const x = 380 + i * 32;
        const isA = ch === "a";
        const isI = ch === "í";
        return (
          <g key={i}>
            <text x={x} y={65}
              fill={isI ? tema.acento : isA ? tema.verde : tema.muted}
              fontSize="22" fontFamily="Georgia,serif" textAnchor="middle"
              fontWeight={(isA || isI) ? "700" : "400"}>
              {ch}
            </text>
            {isI && (
              <text x={x} y={82} fill={tema.acento} fontSize="8"
                fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">TÓNICA</text>
            )}
          </g>
        );
      })}
      {/* Separate brackets */}
      <path d="M 374,72 Q 374,82 381,82 Q 388,82 388,72" fill="none" stroke={tema.verde} strokeWidth="1.5"/>
      <path d="M 405,72 Q 405,82 412,82 Q 419,82 419,72" fill="none" stroke={tema.acento} strokeWidth="1.5"/>
      <text x="380" y="95" fill={tema.verde} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">«pa»</text>
      <text x="412" y="95" fill={tema.acento} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">«ís»</text>
      <text x="480" y="115" fill={tema.acento} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">pa-ís → 2 sílabas distintas</text>
      <text x="480" y="130" fill={tema.acento} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" fontWeight="700">tilde en la í SIEMPRE</text>
      <text x="480" y="145" fill={tema.muted} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">aunque sea llana terminada en s</text>
    </svg>
  );
}
