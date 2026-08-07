// Diagramas del taller de decodificación.
//
// Mismo patrón que el registro de components/diagramas: un mapa `clave →
// definición` para que los bancos de datos referencien un dibujo sin importar
// nada de React. Cada definición trae su lienzo (`Fondo`) y las coordenadas
// de los puntos que se pueden etiquetar; las etiquetas y los datos de cada
// pieza los pone el banco, no el dibujo.
//
// Todo es SVG escrito a mano: nada de imágenes externas, para que el taller
// se vea igual en un salón sin internet.
import { C } from "./estilo.js";

const METAL = "#39424f";
const METAL_CLARO = "#4a5666";
const HUECO = "#0c0f13";

// ── Corte de un cilindro ──────────────────────────────────────────────────
function MotorFondo() {
  return (
    <g>
      {/* Cárter: la parte de abajo, que aloja el cigüeñal. Va primero para
          que el bloque y la culata se dibujen encima de sus bordes. */}
      <path d="M56 292 h248 l-26 108 h-196 z" fill={METAL} stroke="#2e3742" strokeWidth="2" />
      <path d="M74 302 h212 l-22 88 h-168 z" fill="#232b34" />

      {/* Monoblock */}
      <rect x="56" y="122" width="248" height="176" fill={METAL} stroke="#2e3742" strokeWidth="2" />
      {/* Camisas de enfriamiento, para que se lea como un corte */}
      <g fill="#313a46">
        <rect x="86" y="140" width="18" height="132" rx="9" />
        <rect x="256" y="140" width="18" height="132" rx="9" />
      </g>

      {/* Culata */}
      <rect x="44" y="58" width="272" height="64" rx="7" fill={METAL_CLARO} stroke="#5b6878" strokeWidth="2" />

      {/* Cilindro: el hueco por donde corre el pistón, con la cámara arriba */}
      <path d="M126 122 h108 v164 h-108 z" fill={HUECO} />
      <path d="M126 122 v-8 q54 -26 108 0 v8 z" fill={HUECO} />
      <path d="M126 114 q54 -26 108 0 v172 h-108 z" fill="none" stroke="#1a1f26" strokeWidth="2" />

      {/* Bujía, roscada en la culata con la punta en la cámara */}
      <rect x="173" y="24" width="14" height="16" rx="2" fill="#dfe4ea" />
      <rect x="169" y="38" width="22" height="20" rx="2" fill="#a8b2bd" />
      <rect x="173" y="56" width="14" height="44" rx="2" fill="#8a949f" />
      <path d="M180 100 v10 M180 106 l8 6" stroke="#e2e7ec" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Válvulas: admisión a la izquierda, escape a la derecha */}
      <g stroke="#9aa5b2" strokeWidth="6" strokeLinecap="round">
        <path d="M141 44 v58" />
        <path d="M219 44 v58" />
      </g>
      <path d="M127 100 h30 l-9 12 h-12 z" fill="#c3ccd6" />
      <path d="M233 100 h-30 l9 12 h12 z" fill="#c3ccd6" />

      {/* Pistón con sus anillos y el perno */}
      <rect x="128" y="176" width="104" height="54" rx="3" fill="#aab4c0" stroke="#788390" strokeWidth="2" />
      <g stroke="#727d8a" strokeWidth="3">
        <path d="M128 187 h104" />
        <path d="M128 196 h104" />
      </g>
      <circle cx="180" cy="214" r="8" fill="#5f6d7e" stroke="#788390" strokeWidth="2" />

      {/* Biela: del perno del pistón al muñón del cigüeñal */}
      <path d="M172 214 L196 324 h-22 L166 214 z" fill="#98a3b0" stroke="#788390" strokeWidth="2" />

      {/* Cigüeñal, dentro del cárter */}
      <circle cx="180" cy="346" r="38" fill={METAL_CLARO} stroke="#5b6878" strokeWidth="3" />
      <path d="M180 346 L186 312 a38 38 0 0 1 -34 12 z" fill="#6d7b8c" />
      <circle cx="185" cy="322" r="12" fill="#98a3b0" stroke="#788390" strokeWidth="2" />
      <circle cx="180" cy="346" r="11" fill={HUECO} />
    </g>
  );
}

// ── Cancha de futbol vista desde arriba ───────────────────────────────────
function CanchaFondo() {
  const linea = { fill: "none", stroke: "#c8d4dd", strokeWidth: 2.5 };
  return (
    <g>
      <rect x="30" y="25" width="460" height="270" rx="4" fill="#1d3428" stroke="#2a4a37" strokeWidth="2" />
      {/* Franjas de pasto */}
      {[0, 1, 2, 3, 4, 5].map((k) => (
        <rect key={k} x={30 + k * 76.6} y="25" width="38.3" height="270" fill="#213a2d" />
      ))}
      <rect x="30" y="25" width="460" height="270" {...linea} />
      {/* Medio campo */}
      <path d="M260 25 V295" {...linea} />
      <circle cx="260" cy="160" r="45" {...linea} />
      <circle cx="260" cy="160" r="3.5" fill="#c8d4dd" />
      {/* Área grande, área chica y portería (izquierda) */}
      <rect x="30" y="85" width="100" height="150" {...linea} />
      <rect x="30" y="122" width="40" height="76" {...linea} />
      <rect x="12" y="132" width="18" height="56" fill="#0f1a14" stroke="#c8d4dd" strokeWidth="2.5" />
      <circle cx="105" cy="160" r="3.5" fill="#c8d4dd" />
      <path d="M130 132 a45 45 0 0 0 0 56" {...linea} />
      {/* Lado derecho, para que se lea como cancha completa */}
      <rect x="390" y="85" width="100" height="150" {...linea} />
      <rect x="450" y="122" width="40" height="76" {...linea} />
      <rect x="490" y="132" width="18" height="56" fill="#0f1a14" stroke="#c8d4dd" strokeWidth="2.5" />
      <path d="M390 132 a45 45 0 0 1 0 56" {...linea} />
      {/* Esquinas */}
      <path d="M30 34 a9 9 0 0 0 9 -9" {...linea} />
      <path d="M30 286 a9 9 0 0 1 9 9" {...linea} />
      <path d="M22 25 v-12" stroke="#c8d4dd" strokeWidth="2" />
      <path d="M30 13 l10 4 -10 4 z" fill={C.rojo} transform="translate(-8,0)" />
    </g>
  );
}

// ── Corte de un cohete ────────────────────────────────────────────────────
function CoheteFondo() {
  return (
    <g>
      {/* Aletas */}
      <path d="M78 330 L38 392 h40 z" fill="#5f6d7e" stroke="#77828f" strokeWidth="2" />
      <path d="M142 330 L182 392 h-40 z" fill="#5f6d7e" stroke="#77828f" strokeWidth="2" />
      {/* Cuerpo */}
      <rect x="78" y="110" width="64" height="272" fill="#c3ccd6" stroke="#8d97a3" strokeWidth="2" />
      {/* Cofia */}
      <path d="M110 14 L142 110 H78 Z" fill="#dfe6ee" stroke="#8d97a3" strokeWidth="2" />
      {/* Cápsula */}
      <rect x="78" y="110" width="64" height="56" fill="#9aa5b2" stroke="#8d97a3" strokeWidth="2" />
      <circle cx="110" cy="138" r="11" fill="#0f1a24" stroke="#dfe6ee" strokeWidth="2.5" />
      {/* Tanque de oxígeno */}
      <rect x="84" y="172" width="52" height="76" rx="10" fill="#5aa9d6" stroke="#3f8ab5" strokeWidth="2" />
      {/* Tanque de combustible */}
      <rect x="84" y="256" width="52" height="86" rx="10" fill={C.ambar} stroke="#c98a13" strokeWidth="2" />
      {/* Motor */}
      <path d="M86 348 h48 l-8 30 h-32 z" fill="#7d8794" stroke="#5b6878" strokeWidth="2" />
      {/* Tobera */}
      <path d="M94 378 h32 l18 52 h-68 z" fill="#5b6878" stroke="#414c5b" strokeWidth="2" />
      <path d="M78 430 q32 12 64 0" fill="none" stroke="#414c5b" strokeWidth="3" />
    </g>
  );
}

const DIAGRAMAS = {
  motor: {
    viewBox: "0 0 360 410",
    Fondo: MotorFondo,
    puntos: {
      bujia: [180, 40],
      admision: [141, 72],
      escape: [219, 72],
      piston: [180, 192],
      biela: [186, 272],
      "cigüenal": [180, 346],
      cilindro: [104, 158],
    },
  },
  cancha: {
    viewBox: "0 0 520 320",
    Fondo: CanchaFondo,
    puntos: {
      porteria: [21, 160],
      "area-chica": [50, 122],
      "area-grande": [98, 235],
      penal: [105, 160],
      central: [260, 160],
      medio: [260, 48],
      corner: [40, 36],
    },
  },
  cohete: {
    viewBox: "0 0 220 450",
    Fondo: CoheteFondo,
    puntos: {
      cofia: [110, 62],
      capsula: [110, 138],
      oxigeno: [110, 210],
      combustible: [110, 299],
      // Motor y tobera van pegados en el dibujo: se separan lo suficiente
      // para que sus áreas de toque no se encimen bajo el dedo.
      motor: [110, 356],
      tobera: [110, 415],
      aleta: [54, 374],
    },
  },
};

// Lienzo genérico: dibuja el fondo y encima un punto tocable por pieza.
// El punto es un círculo de radio holgado porque esto se opera con el dedo
// sobre una tablet, no con un ratón.
export function Diagrama({ clave, piezas, resueltas, seleccion, onTocarPieza }) {
  const def = DIAGRAMAS[clave];
  if (!def) return null;
  const { Fondo, puntos, viewBox } = def;

  return (
    <svg viewBox={viewBox} style={{ width: "100%", height: "100%", display: "block" }}>
      <Fondo />
      {piezas.map((pieza, k) => {
        const punto = puntos[pieza.id];
        if (!punto) return null;
        const [x, y] = punto;
        const lista = resueltas.has(pieza.id);
        const activa = seleccion === pieza.id;
        return (
          <g
            key={pieza.id}
            onClick={() => onTocarPieza(pieza.id)}
            style={{ cursor: lista ? "default" : "pointer" }}
          >
            {/* Área de toque, invisible y generosa */}
            <circle cx={x} cy={y} r="30" fill="transparent" />
            <circle
              cx={x} cy={y} r="15"
              fill={lista ? C.verde : activa ? C.ambar : "rgba(15,18,22,.85)"}
              stroke={lista ? C.verde : activa ? C.ambar : C.texto}
              strokeWidth="2.5"
            />
            <text
              x={x} y={y + 6} textAnchor="middle"
              fontSize="16" fontWeight="800"
              fill={lista || activa ? "#101216" : C.texto}
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              {lista ? "✓" : k + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
