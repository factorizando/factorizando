// Diagrama «arbol-tres-monedas» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { PROB_NODE_TYPES } from "../comun.jsx";
import { ReactFlow } from "@xyflow/react";

export default function ProbArbolTresMonedas({ tema }) {
  const T = tema.texto, a = tema.acento, bl = tema.azul, gr = tema.canal(1);
  const eStyle = { stroke: 'rgba(255,255,255,0.28)', strokeWidth: 1.4 };
  const lStyle = { fill: tema.azulTexto, fontSize: 9, fontFamily: 'IBM Plex Mono, monospace' };
  const lBg = { fill: tema.bg, rx: 3 };
  const ed = (id, s, t, lbl) => ({ id, source: s, target: t, style: eStyle, label: lbl, labelStyle: lStyle, labelBgStyle: lBg, labelShowBg: true });
  // exactly-2-caras leaves highlighted in acento; 3 caras in verde; rest muted
  const nodes = [
    { id: 'root', type: 'probnodo', position: { x: 0,   y: 153 }, data: { label: '3 lanzam.', t: T, col: a  } },
    { id: 'c1',   type: 'probnodo', position: { x: 140, y: 69  }, data: { label: 'Cara',      t: T, col: bl } },
    { id: 'x1',   type: 'probnodo', position: { x: 140, y: 237 }, data: { label: 'Cruz',      t: T, col: bl } },
    { id: 'cc',   type: 'probnodo', position: { x: 280, y: 27  }, data: { label: 'CC',        t: T, col: bl } },
    { id: 'cx',   type: 'probnodo', position: { x: 280, y: 111 }, data: { label: 'CX',        t: T, col: bl } },
    { id: 'xc',   type: 'probnodo', position: { x: 280, y: 195 }, data: { label: 'XC',        t: T, col: bl } },
    { id: 'xx',   type: 'probnodo', position: { x: 280, y: 279 }, data: { label: 'XX',        t: T, col: bl } },
    { id: 'ccc',  type: 'probnodo', position: { x: 430, y: 6   }, data: { label: 'CCC = ⅛',  t: T, col: gr } },
    { id: 'ccx',  type: 'probnodo', position: { x: 430, y: 48  }, data: { label: 'CCX = ⅛',  t: T, col: a  } },
    { id: 'cxc',  type: 'probnodo', position: { x: 430, y: 90  }, data: { label: 'CXC = ⅛',  t: T, col: a  } },
    { id: 'cxx',  type: 'probnodo', position: { x: 430, y: 132 }, data: { label: 'CXX = ⅛',  t: T, col: tema.muted } },
    { id: 'xcc',  type: 'probnodo', position: { x: 430, y: 174 }, data: { label: 'XCC = ⅛',  t: T, col: a  } },
    { id: 'xcx',  type: 'probnodo', position: { x: 430, y: 216 }, data: { label: 'XCX = ⅛',  t: T, col: tema.muted } },
    { id: 'xxc',  type: 'probnodo', position: { x: 430, y: 258 }, data: { label: 'XXC = ⅛',  t: T, col: tema.muted } },
    { id: 'xxx',  type: 'probnodo', position: { x: 430, y: 300 }, data: { label: 'XXX = ⅛',  t: T, col: tema.canal(2)  } },
  ];
  const edges = [
    ed('e1',  'root', 'c1',  'C'), ed('e2',  'root', 'x1',  'X'),
    ed('e3',  'c1',   'cc',  'C'), ed('e4',  'c1',   'cx',  'X'),
    ed('e5',  'x1',   'xc',  'C'), ed('e6',  'x1',   'xx',  'X'),
    ed('e7',  'cc',   'ccc', 'C'), ed('e8',  'cc',   'ccx', 'X'),
    ed('e9',  'cx',   'cxc', 'C'), ed('e10', 'cx',   'cxx', 'X'),
    ed('e11', 'xc',   'xcc', 'C'), ed('e12', 'xc',   'xcx', 'X'),
    ed('e13', 'xx',   'xxc', 'C'), ed('e14', 'xx',   'xxx', 'X'),
  ];
  return (
    <div style={{ width: '100%', height: 340 }}>
      <ReactFlow
        nodes={nodes} edges={edges} nodeTypes={PROB_NODE_TYPES}
        fitView fitViewOptions={{ padding: 0.08 }}
        nodesDraggable={false} nodesConnectable={false} nodesFocusable={false}
        edgesFocusable={false} panOnDrag={false} zoomOnScroll={false}
        zoomOnPinch={false} zoomOnDoubleClick={false} preventScrolling={false}
        proOptions={{ hideAttribution: true }} style={{ background: 'transparent' }}
      />
    </div>
  );
}
