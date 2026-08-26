// Diagrama «arbol-urna» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { PROB_NODE_TYPES } from "../comun.jsx";
import { ReactFlow } from "@xyflow/react";

export default function ProbArbolUrna({ tema }) {
  const T = tema.texto, a = tema.acento, rj = tema.canal(2), bl = tema.azul, gr = tema.canal(1);
  const eStyle = { stroke: 'rgba(255,255,255,0.28)', strokeWidth: 1.4 };
  const lStyle = { fill: tema.azulTexto, fontSize: 9, fontFamily: 'IBM Plex Mono, monospace' };
  const lBg = { fill: tema.bg, rx: 3 };
  const ed = (id, s, t, label) => ({ id, source: s, target: t, style: eStyle, label, labelStyle: lStyle, labelBgStyle: lBg, labelShowBg: true });
  const nodes = [
    { id: 'root', type: 'probnodo', position: { x: 0,   y: 95  }, data: { label: '2R · 3A', t: T, col: a } },
    { id: 'r1',   type: 'probnodo', position: { x: 150, y: 40  }, data: { label: 'Roja',  t: T, col: rj } },
    { id: 'a1',   type: 'probnodo', position: { x: 150, y: 150 }, data: { label: 'Azul',  t: T, col: bl } },
    { id: 'rr',   type: 'probnodo', position: { x: 312, y: 8   }, data: { label: 'RR · 1/10', t: T, col: gr } },
    { id: 'ra',   type: 'probnodo', position: { x: 312, y: 72  }, data: { label: 'RA · 3/10', t: T, col: gr } },
    { id: 'ar',   type: 'probnodo', position: { x: 312, y: 118 }, data: { label: 'AR · 3/10', t: T, col: gr } },
    { id: 'aa',   type: 'probnodo', position: { x: 312, y: 182 }, data: { label: 'AA · 3/10', t: T, col: gr } },
  ];
  const edges = [
    ed('e1', 'root', 'r1', '2/5'), ed('e2', 'root', 'a1', '3/5'),
    ed('e3', 'r1', 'rr', '1/4'), ed('e4', 'r1', 'ra', '3/4'),
    ed('e5', 'a1', 'ar', '2/4'), ed('e6', 'a1', 'aa', '2/4'),
  ];
  return (
    <div style={{ width: '100%', height: 232 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={PROB_NODE_TYPES}
        fitView
        fitViewOptions={{ padding: 0.12 }}
        nodesDraggable={false}
        nodesConnectable={false}
        nodesFocusable={false}
        edgesFocusable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
        style={{ background: 'transparent' }}
      />
    </div>
  );
}
