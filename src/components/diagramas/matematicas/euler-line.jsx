// Diagrama «euler-line» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function EulerLineSVG({ tema }) {
  const cx = 150, cy = 97, r = 72;
  const D = deg => deg * Math.PI / 180;
  const pt = ang => [cx + r * Math.cos(D(ang)), cy + r * Math.sin(D(ang))];

  const A = pt(-90);   // vértice superior
  const B = pt(130);   // vértice inferior izquierdo
  const C = pt(30);    // vértice inferior derecho

  const O = [cx, cy];                                          // circuncentro
  const G = [(A[0]+B[0]+C[0])/3, (A[1]+B[1]+C[1])/3];        // baricentro
  const H = [O[0]+3*(G[0]-O[0]), O[1]+3*(G[1]-O[1])];        // ortocentro
  const N = [(O[0]+H[0])/2, (O[1]+H[1])/2];                  // centro 9 puntos

  const dir = [H[0]-O[0], H[1]-O[1]];
  const L1 = [O[0]-1.1*dir[0], O[1]-1.1*dir[1]];             // extensión anterior
  const L2 = [H[0]+0.8*dir[0], H[1]+0.8*dir[1]];             // extensión posterior

  const f = ([x,y]) => `${x.toFixed(1)},${y.toFixed(1)}`;
  const fx = v => v.toFixed(1);

  return (
    <svg width="200" height="130" viewBox="0 0 300 195" fill="none">
      {/* Círculo circunscrito */}
      <circle cx={cx} cy={cy} r={r}
        stroke={tema.acento} strokeWidth="2" fill={tema.acentoSuave}/>
      {/* Círculo de los nueve puntos */}
      <circle cx={fx(N[0])} cy={fx(N[1])} r={r/2}
        stroke={tema.azul} strokeWidth="1.5" fill="none"
        strokeDasharray="5,3" opacity="0.85"/>
      {/* Triángulo inscrito */}
      <polygon points={`${f(A)} ${f(B)} ${f(C)}`}
        stroke={tema.texto} strokeWidth="1.5" fill="none" opacity="0.55"/>
      {/* Línea de Euler */}
      <line x1={fx(L1[0])} y1={fx(L1[1])} x2={fx(L2[0])} y2={fx(L2[1])}
        stroke={tema.verde} strokeWidth="1.6" strokeDasharray="5,3" opacity="0.9"/>
      {/* Puntos clave */}
      <circle cx={fx(O[0])} cy={fx(O[1])} r="4" fill={tema.acento}/>
      <circle cx={fx(G[0])} cy={fx(G[1])} r="4" fill={tema.verde}/>
      <circle cx={fx(H[0])} cy={fx(H[1])} r="4" fill={tema.azul}/>
      {/* Etiquetas O, G, H */}
      <text x={fx(O[0]+7)} y={fx(O[1]+5)}
        fill={tema.acento} fontSize="13" fontFamily="serif" fontStyle="italic">O</text>
      <text x={fx(G[0]-16)} y={fx(G[1]-5)}
        fill={tema.verde} fontSize="13" fontFamily="serif" fontStyle="italic">G</text>
      <text x={fx(H[0]+7)} y={fx(H[1]+5)}
        fill={tema.azul} fontSize="13" fontFamily="serif" fontStyle="italic">H</text>
      {/* Etiquetas de vértices */}
      <text x={fx(A[0])} y={fx(A[1]-9)}
        fill={tema.texto} fontSize="12" fontFamily="serif"
        textAnchor="middle" opacity="0.55">A</text>
      <text x={fx(B[0]-12)} y={fx(B[1]+4)}
        fill={tema.texto} fontSize="12" fontFamily="serif"
        textAnchor="end" opacity="0.55">B</text>
      <text x={fx(C[0]+12)} y={fx(C[1]+4)}
        fill={tema.texto} fontSize="12" fontFamily="serif" opacity="0.55">C</text>
    </svg>
  );
}
