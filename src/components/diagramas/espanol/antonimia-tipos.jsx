// Diagrama «antonimia-tipos» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function AntonimiasTiposSVG({ tema }) {
  return (
    <svg viewBox="0 0 520 148" width="100%" style={{ display: "block" }}>
      <defs>
        <linearGradient id="ls-antGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#60a5fa" stopOpacity="0.9"/>
          <stop offset="50%"  stopColor="#a78bfa" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#f97316" stopOpacity="0.9"/>
        </linearGradient>
      </defs>
      {/* Column titles */}
      <text x="86"  y="13" fill={tema.azul}   fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.12em">GRADUALES</text>
      <text x="258" y="13" fill={tema.acento} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.12em">COMPLEMENTARIOS</text>
      <text x="434" y="13" fill={tema.canal(1)}  fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.12em">RECÍPROCOS</text>
      <line x1="172" y1="0" x2="172" y2="148" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <line x1="344" y1="0" x2="344" y2="148" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      {/* GRADUALES: spectrum bar */}
      <rect x="10" y="25" width="152" height="8" rx="4" fill="url(#ls-antGrad)"/>
      <circle cx="10"  cy="29" r="4" fill="#60a5fa"/>
      <circle cx="86"  cy="29" r="3.5" fill="#a78bfa"/>
      <circle cx="162" cy="29" r="4" fill="#f97316"/>
      <text x="10"  y="49" fill="#60a5fa" fontSize="10" fontFamily="Georgia,serif" fontStyle="italic">frío</text>
      <text x="86"  y="49" fill="#a78bfa" fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">tibio</text>
      <text x="162" y="49" fill="#f97316" fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">caliente</text>
      <text x="86" y="64" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">Hay términos intermedios</text>
      <text x="86" y="81" fill={tema.sub}   fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">joven / adulto / anciano</text>
      <text x="86" y="96" fill={tema.sub}   fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">pequeño / mediano / grande</text>
      <text x="86" y="115" fill={tema.muted} fontSize="7.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">«no frío» ≠ «caliente»</text>
      <text x="86" y="128" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">La negación no implica el opuesto</text>
      {/* COMPLEMENTARIOS: binary boxes */}
      <rect x="181" y="22" width="72" height="28" rx="6" fill={`${tema.acento}18`} stroke={tema.acento} strokeWidth="1.5"/>
      <text x="217" y="40" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">vivo</text>
      <rect x="263" y="22" width="72" height="28" rx="6" fill={`${tema.acento}18`} stroke={tema.acento} strokeWidth="1.5"/>
      <text x="299" y="40" fill={tema.acento} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">muerto</text>
      <rect x="192" y="58" width="152" height="16" rx="4" fill="rgba(0,0,0,0.3)" stroke={`${tema.acento}33`} strokeWidth="1"/>
      <text x="268" y="70" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" letterSpacing="0.07em">NO HAY TÉRMINO MEDIO</text>
      <text x="258" y="88"  fill={tema.sub}   fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">verdadero / falso</text>
      <text x="258" y="103" fill={tema.sub}   fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">soltero / casado</text>
      <text x="258" y="122" fill={tema.muted} fontSize="7.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">«no vivo» = «muerto»</text>
      <text x="258" y="135" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">La negación implica el opuesto</text>
      {/* RECÍPROCOS: bidirectional arrow */}
      <rect x="356" y="22" width="76" height="28" rx="6" fill={`${tema.canal(1)}18`} stroke={tema.canal(1)} strokeWidth="1.5"/>
      <text x="394" y="40" fill={tema.canal(1)} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">comprar</text>
      <rect x="442" y="22" width="70" height="28" rx="6" fill={`${tema.canal(1)}18`} stroke={tema.canal(1)} strokeWidth="1.5"/>
      <text x="477" y="40" fill={tema.canal(1)} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">vender</text>
      <line x1="432" y1="36" x2="442" y2="36" stroke={tema.canal(1)} strokeWidth="1.8"/>
      <polygon points="432,32 424,36 432,40" fill={tema.canal(1)}/>
      <polygon points="442,32 450,36 442,40" fill={tema.canal(1)}/>
      <text x="434" y="67" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">Presuposición mutua</text>
      <text x="434" y="83"  fill={tema.sub}   fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">enseñar / aprender</text>
      <text x="434" y="98"  fill={tema.sub}   fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">preguntar / responder</text>
      <text x="434" y="117" fill={tema.muted} fontSize="7.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A vende implica B compra</text>
      <text x="434" y="130" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">La relación es simétrica</text>
    </svg>
  );
}
