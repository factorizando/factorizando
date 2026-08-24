// Diagrama «geo-ciclo-hidrologico» — geografia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function GeoCicloHidrologicoSVG({ tema }) {
  const a = tema.acento;
  const g = "#f5c842";
  const azulAgua = "#2a7fbf";
  const verdeVeg = "#3a8a3a";
  return (
    <svg viewBox="0 0 320 160" width="100%" style={{ display: "block" }}>
      {/* Fondo cielo */}
      <rect x="0" y="0" width="320" height="160" rx="6" fill="rgba(10,20,40,0.4)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      {/* ── SOL ── */}
      <circle cx="285" cy="28" r="16" fill="#ffd020" opacity="0.9"/>
      <text x="285" y="32" textAnchor="middle" fill="#fff" fontSize="12">☀</text>
      {/* ── OCÉANO / MAR ── */}
      <rect x="170" y="118" width="148" height="36" rx="5" fill={azulAgua} opacity="0.75"/>
      <text x="244" y="138" textAnchor="middle" fill="rgba(200,240,255,0.9)" fontSize="7" fontFamily="monospace">OCÉANO / MAR</text>
      {/* ── MONTAÑA ── */}
      <polygon points="10,154 65,60 120,154" fill="#4a4a5a" opacity="0.85"/>
      <polygon points="45,100 65,60 85,100" fill="rgba(220,230,255,0.25)"/>
      <text x="65" y="56" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="6" fontFamily="monospace">nieve</text>
      {/* ── VEGETACIÓN (pie montaña) ── */}
      <ellipse cx="115" cy="148" rx="18" ry="8" fill={verdeVeg} opacity="0.7"/>
      <text x="115" y="150" textAnchor="middle" fill="rgba(200,255,200,0.8)" fontSize="5" fontFamily="monospace">biósfera</text>
      {/* ── NUBE ── */}
      <ellipse cx="158" cy="42" rx="32" ry="18" fill="rgba(200,215,240,0.55)"/>
      <ellipse cx="140" cy="48" rx="20" ry="14" fill="rgba(200,215,240,0.55)"/>
      <ellipse cx="175" cy="50" rx="22" ry="13" fill="rgba(200,215,240,0.55)"/>
      <text x="158" y="45" textAnchor="middle" fill="rgba(30,50,100,0.9)" fontSize="6" fontFamily="monospace">NUBE</text>
      {/* ── RÍO ── */}
      <path d="M 105,140 Q 130,135 155,130 Q 168,126 170,120" fill="none" stroke={azulAgua} strokeWidth="3" opacity="0.8"/>
      <text x="132" y="131" fill="rgba(150,210,255,0.8)" fontSize="5.5" fontFamily="monospace">río</text>
      {/* SUELO / ACUÍFERO */}
      <rect x="10" y="148" width="158" height="10" rx="3" fill="rgba(120,90,60,0.5)"/>
      <text x="90" y="156" textAnchor="middle" fill="rgba(200,170,140,0.6)" fontSize="5" fontFamily="monospace">suelo · acuífero</text>

      {/* ── FLECHAS Y ETIQUETAS ── */}
      {/* Evaporación: océano → nube */}
      <path d="M 244,116 Q 230,80 185,55" fill="none" stroke={g} strokeWidth="1.4" strokeDasharray="4,2"
        markerEnd="url(#arrowGeo)"/>
      <text x="218" y="82" fill={g} fontSize="6" fontFamily="monospace" transform="rotate(-55,218,82)">evaporación</text>
      {/* Transpiración: vegetación → nube */}
      <path d="M 118,140 Q 130,100 138,62" fill="none" stroke={verdeVeg} strokeWidth="1.2" strokeDasharray="3,2"
        markerEnd="url(#arrowGeo)"/>
      <text x="108" y="110" fill={verdeVeg} fontSize="5.5" fontFamily="monospace" transform="rotate(-78,108,110)">trans-</text>
      <text x="106" y="118" fill={verdeVeg} fontSize="5.5" fontFamily="monospace" transform="rotate(-78,106,118)">piración</text>
      {/* Precipitación: nube → montaña */}
      <path d="M 138,62 Q 110,80 85,108" fill="none" stroke={a} strokeWidth="1.5" strokeDasharray="4,2"
        markerEnd="url(#arrowGeo)"/>
      <text x="98" y="80" fill={a} fontSize="6" fontFamily="monospace" transform="rotate(-55,98,80)">precipitación</text>
      {/* Escurrimiento: montaña → río/mar */}
      <path d="M 100,138 Q 128,135 168,120" fill="none" stroke={azulAgua} strokeWidth="1.3" strokeDasharray="4,2"
        markerEnd="url(#arrowGeo)"/>
      <text x="130" y="141" fill={azulAgua} fontSize="5.5" fontFamily="monospace">escurrimiento</text>
      {/* Infiltración: flecha hacia abajo */}
      <path d="M 92,140 L 92,152" fill="none" stroke="rgba(160,130,100,0.8)" strokeWidth="1.2"
        markerEnd="url(#arrowGeo)"/>
      <text x="58" y="146" fill="rgba(200,170,140,0.75)" fontSize="5.5" fontFamily="monospace">infiltración</text>
      {/* Definición de marcador de flecha */}
      <defs>
        <marker id="arrowGeo" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.5)"/>
        </marker>
      </defs>
      {/* Leyenda */}
      <text x="160" y="13" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">Hidrósfera + Atmósfera + Litósfera + Biósfera</text>
    </svg>
  );
}
