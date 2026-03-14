import { useState, useEffect } from "react";

const C = {
  bg:      "#0e0f11",
  surface: "#13151a",
  border:  "#252830",
  blue:    "#3b9eff",
  gold:    "#f59e0b",
  purple:  "#a78bfa",
  teal:    "#34d399",
  orange:  "#f97316",
  crimson: "#f43f5e",
  text:    "#e8eaf0",
  muted:   "#5a6070",
  dim:     "#8a9ab8",
};

const questions = [
  // ── BLOQUE 1: Suma y resta de racionales (1–30) ───────────────────────────
  { id:1,  q:"¿Cuánto es $\\frac{1}{2} + \\frac{1}{2}$?", opts:["$1$", "$\\frac{1}{4}$", "$\\frac{2}{4}$", "$0$"], ans:"$1$", exp:"Mismo denominador: sumamos numeradores $\\frac{1+1}{2} = \\frac{2}{2} = 1$." },
  { id:2,  q:"¿Cuánto es $\\frac{1}{3} + \\frac{1}{3}$?", opts:["$\\frac{2}{3}$", "$\\frac{1}{6}$", "$\\frac{2}{6}$", "$1$"], ans:"$\\frac{2}{3}$", exp:"Mismo denominador: sumamos numeradores $\\frac{1+1}{3} = \\frac{2}{3}$." },
  { id:3,  q:"¿Cuánto es $\\frac{1}{4} + \\frac{2}{4}$?", opts:["$\\frac{3}{4}$", "$\\frac{3}{8}$", "$\\frac{1}{2}$", "$1$"], ans:"$\\frac{3}{4}$", exp:"Mismo denominador: $\\frac{1+2}{4} = \\frac{3}{4}$." },
  { id:4,  q:"¿Cuánto es $\\frac{3}{5} + \\frac{1}{5}$?", opts:["$\\frac{4}{5}$", "$\\frac{4}{10}$", "$\\frac{2}{5}$", "$1$"], ans:"$\\frac{4}{5}$", exp:"Mismo denominador: $\\frac{3+1}{5} = \\frac{4}{5}$." },
  { id:5,  q:"¿Cuánto es $\\frac{5}{8} - \\frac{2}{8}$?", opts:["$\\frac{3}{8}$", "$\\frac{7}{8}$", "$\\frac{3}{16}$", "$\\frac{1}{4}$"], ans:"$\\frac{3}{8}$", exp:"Restamos numeradores directo: $\\frac{5-2}{8} = \\frac{3}{8}$." },
  { id:6,  q:"¿Cuánto es $\\frac{7}{10} - \\frac{3}{10}$?", opts:["$\\frac{2}{5}$", "$\\frac{4}{10}$", "$\\frac{1}{5}$", "$1$"], ans:"$\\frac{2}{5}$", exp:"$\\frac{7-3}{10} = \\frac{4}{10}$, que se simplifica dividiendo entre 2 a $\\frac{2}{5}$." }, 
  { id:7,  q:"¿Cuánto es $1 + \\frac{1}{2}$?", opts:["$\\frac{3}{2}$", "$\\frac{1}{2}$", "$\\frac{2}{2}$", "$2$"], ans:"$\\frac{3}{2}$", exp:"Convertimos el entero a fracción: $\\frac{2}{2} + \\frac{1}{2} = \\frac{3}{2}$." },
  { id:8,  q:"¿Cuánto es $2 - \\frac{1}{3}$?", opts:["$\\frac{5}{3}$", "$\\frac{1}{3}$", "$\\frac{4}{3}$", "$\\frac{2}{3}$"], ans:"$\\frac{5}{3}$", exp:"Convertimos $2$ a $\\frac{6}{3}$. Luego, $\\frac{6}{3} - \\frac{1}{3} = \\frac{5}{3}$." },
  { id:9,  q:"¿Cuánto es $3 + \\frac{1}{4}$?", opts:["$\\frac{13}{4}$", "$\\frac{12}{4}$", "$\\frac{7}{4}$", "$\\frac{4}{4}$"], ans:"$\\frac{13}{4}$", exp:"Convertimos $3$ a $\\frac{12}{4}$. Luego, $\\frac{12}{4} + \\frac{1}{4} = \\frac{13}{4}$." },
  { id:10, q:"¿Cuánto es $1 - \\frac{3}{5}$?", opts:["$\\frac{2}{5}$", "$\\frac{1}{5}$", "$\\frac{8}{5}$", "$\\frac{4}{5}$"], ans:"$\\frac{2}{5}$", exp:"Convertimos $1$ a $\\frac{5}{5}$. Luego, $\\frac{5}{5} - \\frac{3}{5} = \\frac{2}{5}$." },
  { id:11, q:"¿Cuánto es $\\frac{1}{2} + \\frac{1}{4}$?", opts:["$\\frac{3}{4}$", "$\\frac{2}{6}$", "$\\frac{1}{4}$", "$1$"], ans:"$\\frac{3}{4}$", exp:"Equivalencia: $\\frac{1}{2} = \\frac{2}{4}$. Sumamos $\\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$." },
  { id:12, q:"¿Cuánto es $\\frac{1}{2} - \\frac{1}{4}$?", opts:["$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$", "$0$"], ans:"$\\frac{1}{4}$", exp:"Equivalencia: $\\frac{2}{4} - \\frac{1}{4} = \\frac{1}{4}$." },
  { id:13, q:"¿Cuánto es $\\frac{3}{4} + \\frac{1}{2}$?", opts:["$\\frac{5}{4}$", "$\\frac{4}{6}$", "$1$", "$\\frac{4}{4}$"], ans:"$\\frac{5}{4}$", exp:"Equivalencia: $\\frac{1}{2} = \\frac{2}{4}$. Sumamos $\\frac{3}{4} + \\frac{2}{4} = \\frac{5}{4}$." },
  { id:14, q:"¿Cuánto es $\\frac{1}{3} + \\frac{1}{6}$?", opts:["$\\frac{1}{2}$", "$\\frac{2}{9}$", "$\\frac{1}{9}$", "$\\frac{2}{3}$"], ans:"$\\frac{1}{2}$", exp:"Equivalencia: $\\frac{1}{3} = \\frac{2}{6}$. Sumamos $\\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}$." },
  { id:15, q:"¿Cuánto es $\\frac{2}{3} - \\frac{1}{6}$?", opts:["$\\frac{1}{2}$", "$\\frac{1}{3}$", "$\\frac{1}{6}$", "$\\frac{5}{6}$"], ans:"$\\frac{1}{2}$", exp:"Equivalencia: $\\frac{2}{3} = \\frac{4}{6}$. Restamos $\\frac{4}{6} - \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}$." },
  { id:16, q:"¿Cuánto es $\\frac{5}{6} + \\frac{1}{3}$?", opts:["$\\frac{7}{6}$", "$\\frac{6}{9}$", "$1$", "$\\frac{4}{3}$"], ans:"$\\frac{7}{6}$", exp:"Equivalencia: $\\frac{1}{3} = \\frac{2}{6}$. Sumamos $\\frac{5}{6} + \\frac{2}{6} = \\frac{7}{6}$." },
  { id:17, q:"¿Cuánto es $\\frac{7}{8} - \\frac{1}{4}$?", opts:["$\\frac{5}{8}$", "$\\frac{6}{4}$", "$\\frac{3}{8}$", "$\\frac{1}{2}$"], ans:"$\\frac{5}{8}$", exp:"Equivalencia: $\\frac{1}{4} = \\frac{2}{8}$. Restamos $\\frac{7}{8} - \\frac{2}{8} = \\frac{5}{8}$." },
  { id:18, q:"¿Cuánto es $\\frac{1}{5} + \\frac{3}{10}$?", opts:["$\\frac{1}{2}$", "$\\frac{4}{15}$", "$\\frac{2}{5}$", "$\\frac{4}{10}$"], ans:"$\\frac{1}{2}$", exp:"Equivalencia: $\\frac{1}{5} = \\frac{2}{10}$. Sumamos $\\frac{2}{10} + \\frac{3}{10} = \\frac{5}{10} = \\frac{1}{2}$." },
  { id:19, q:"¿Cuánto es $\\frac{9}{10} - \\frac{2}{5}$?", opts:["$\\frac{1}{2}$", "$\\frac{7}{5}$", "$\\frac{11}{10}$", "$\\frac{1}{5}$"], ans:"$\\frac{1}{2}$", exp:"Equivalencia: $\\frac{2}{5} = \\frac{4}{10}$. Restamos $\\frac{9}{10} - \\frac{4}{10} = \\frac{5}{10} = \\frac{1}{2}$." },
  { id:20, q:"¿Cuánto es $\\frac{1}{2} + \\frac{3}{8}$?", opts:["$\\frac{7}{8}$", "$\\frac{4}{10}$", "$\\frac{1}{8}$", "$\\frac{5}{8}$"], ans:"$\\frac{7}{8}$", exp:"Equivalencia: $\\frac{1}{2} = \\frac{4}{8}$. Sumamos $\\frac{4}{8} + \\frac{3}{8} = \\frac{7}{8}$." },
  { id:21, q:"¿Cuánto es $\\frac{1}{2} + \\frac{1}{3}$?", opts:["$\\frac{5}{6}$", "$\\frac{2}{5}$", "$\\frac{1}{6}$", "$1$"], ans:"$\\frac{5}{6}$", exp:"MCM de 2 y 3 es 6. Convertimos: $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$." },
  { id:22, q:"¿Cuánto es $\\frac{1}{3} + \\frac{1}{4}$?", opts:["$\\frac{7}{12}$", "$\\frac{2}{7}$", "$\\frac{1}{12}$", "$\\frac{5}{12}$"], ans:"$\\frac{7}{12}$", exp:"MCM de 3 y 4 es 12. Convertimos: $\\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$." },
  { id:23, q:"¿Cuánto es $\\frac{2}{5} + \\frac{1}{2}$?", opts:["$\\frac{9}{10}$", "$\\frac{3}{7}$", "$\\frac{1}{5}$", "$\\frac{7}{10}$"], ans:"$\\frac{9}{10}$", exp:"MCM de 5 y 2 es 10. Convertimos: $\\frac{4}{10} + \\frac{5}{10} = \\frac{9}{10}$." },
  { id:24, q:"¿Cuánto es $\\frac{3}{4} - \\frac{1}{3}$?", opts:["$\\frac{5}{12}$", "$2$", "$\\frac{1}{12}$", "$\\frac{7}{12}$"], ans:"$\\frac{5}{12}$", exp:"MCM de 4 y 3 es 12. Convertimos: $\\frac{9}{12} - \\frac{4}{12} = \\frac{5}{12}$." },
  { id:25, q:"¿Cuánto es $\\frac{2}{3} + \\frac{3}{4}$?", opts:["$\\frac{17}{12}$", "$\\frac{5}{7}$", "$1$", "$\\frac{11}{12}$"], ans:"$\\frac{17}{12}$", exp:"MCM de 3 y 4 es 12. Convertimos: $\\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12}$." },
  { id:26, q:"¿Cuánto es $\\frac{4}{5} - \\frac{1}{2}$?", opts:["$\\frac{3}{10}$", "$\\frac{3}{3}$", "$\\frac{1}{10}$", "$\\frac{7}{10}$"], ans:"$\\frac{3}{10}$", exp:"MCM de 5 y 2 es 10. Convertimos: $\\frac{8}{10} - \\frac{5}{10} = \\frac{3}{10}$." },
  { id:27, q:"¿Cuánto es $\\frac{1}{2} + \\frac{2}{5}$?", opts:["$\\frac{9}{10}$", "$\\frac{3}{7}$", "$\\frac{1}{10}$", "$\\frac{7}{10}$"], ans:"$\\frac{9}{10}$", exp:"MCM de 2 y 5 es 10. Convertimos: $\\frac{5}{10} + \\frac{4}{10} = \\frac{9}{10}$." },
  { id:28, q:"¿Cuánto es $\\frac{5}{6} - \\frac{3}{4}$?", opts:["$\\frac{1}{12}$", "$1$", "$\\frac{1}{24}$", "$\\frac{11}{12}$"], ans:"$\\frac{1}{12}$", exp:"MCM de 6 y 4 es 12. Convertimos: $\\frac{10}{12} - \\frac{9}{12} = \\frac{1}{12}$." },
  { id:29, q:"¿Cuánto es $\\frac{3}{5} + \\frac{2}{3}$?", opts:["$\\frac{19}{15}$", "$\\frac{5}{8}$", "$1$", "$\\frac{11}{15}$"], ans:"$\\frac{19}{15}$", exp:"MCM de 5 y 3 es 15. Convertimos: $\\frac{9}{15} + \\frac{10}{15} = \\frac{19}{15}$." },
  { id:30, q:"¿Cuánto es $\\frac{7}{8} - \\frac{2}{3}$?", opts:["$\\frac{5}{24}$", "$1$", "$\\frac{1}{24}$", "$\\frac{11}{24}$"], ans:"$\\frac{5}{24}$", exp:"MCM de 8 y 3 es 24. Convertimos: $\\frac{21}{24} - \\frac{16}{24} = \\frac{5}{24}$." },

  // ── BLOQUE 2: Producto de racionales (31–60) ──────────────────────────────
  { id:31, q:"¿Cuánto es $2 \\cdot \\frac{1}{2}$?", opts:["$1$", "$\\frac{2}{4}$", "$\\frac{1}{4}$", "$0$"], ans:"$1$", exp:"$2 \\cdot \\frac{1}{2} = \\frac{2}{2} = 1$." },
  { id:32, q:"¿Cuánto es $3 \\cdot \\frac{1}{3}$?", opts:["$1$", "$\\frac{3}{9}$", "$\\frac{1}{9}$", "$3$"], ans:"$1$", exp:"$3 \\cdot \\frac{1}{3} = \\frac{3}{3} = 1$." },
  { id:33, q:"¿Cuánto es $4 \\cdot \\frac{1}{2}$?", opts:["$2$", "$\\frac{4}{2}$", "$\\frac{1}{8}$", "$4$"], ans:"$2$", exp:"$4 \\cdot \\frac{1}{2} = \\frac{4}{2} = 2$." },
  { id:34, q:"¿Cuánto es $5 \\cdot \\frac{2}{5}$?", opts:["$2$", "$\\frac{10}{25}$", "$\\frac{2}{25}$", "$5$"], ans:"$2$", exp:"$5 \\cdot \\frac{2}{5} = \\frac{10}{5} = 2$." },
  { id:35, q:"¿Cuánto es $6 \\cdot \\frac{1}{3}$?", opts:["$2$", "$\\frac{6}{9}$", "$\\frac{1}{18}$", "$3$"], ans:"$2$", exp:"$6 \\cdot \\frac{1}{3} = \\frac{6}{3} = 2$." },
  { id:36, q:"¿Cuánto es $8 \\cdot \\frac{3}{4}$?", opts:["$6$", "$\\frac{24}{32}$", "$\\frac{3}{32}$", "$12$"], ans:"$6$", exp:"$8 \\cdot \\frac{3}{4} = \\frac{24}{4} = 6$." },
  { id:37, q:"¿Cuánto es $(-2) \\cdot \\frac{1}{4}$?", opts:["$-\\frac{1}{2}$", "$-\\frac{2}{8}$", "$\\frac{1}{2}$", "$8$"], ans:"$-\\frac{1}{2}$", exp:"$-2 \\cdot \\frac{1}{4} = -\\frac{2}{4} = -\\frac{1}{2}$." },
  { id:38, q:"¿Cuánto es $10 \\cdot \\frac{3}{5}$?", opts:["$6$", "$\\frac{30}{50}$", "$\\frac{3}{50}$", "$2$"], ans:"$6$", exp:"$10 \\cdot \\frac{3}{5} = \\frac{30}{5} = 6$." },
  { id:39, q:"¿Cuánto es $(-3) \\cdot (-\\frac{1}{3})$?", opts:["$1$", "$-1$", "$9$", "$-9$"], ans:"$1$", exp:"Menos por menos es más: $3 \\cdot \\frac{1}{3} = \\frac{3}{3} = 1$." },
  { id:40, q:"¿Cuánto es $7 \\cdot \\frac{2}{7}$?", opts:["$2$", "$\\frac{14}{49}$", "$7$", "$1$"], ans:"$2$", exp:"$7 \\cdot \\frac{2}{7} = \\frac{14}{7} = 2$." },
  { id:41, q:"¿Cuánto es $\\frac{1}{2} \\cdot \\frac{1}{2}$?", opts:["$\\frac{1}{4}$", "$1$", "$\\frac{2}{4}$", "$\\frac{1}{2}$"], ans:"$\\frac{1}{4}$", exp:"Se multiplica directo: $\\frac{1 \\cdot 1}{2 \\cdot 2} = \\frac{1}{4}$." },
  { id:42, q:"¿Cuánto es $\\frac{1}{3} \\cdot \\frac{1}{2}$?", opts:["$\\frac{1}{6}$", "$\\frac{2}{5}$", "$\\frac{1}{5}$", "$1$"], ans:"$\\frac{1}{6}$", exp:"Se multiplica directo: $\\frac{1 \\cdot 1}{3 \\cdot 2} = \\frac{1}{6}$." },
  { id:43, q:"¿Cuánto es $\\frac{2}{3} \\cdot \\frac{1}{4}$?", opts:["$\\frac{1}{6}$", "$\\frac{2}{12}$", "$\\frac{3}{7}$", "$\\frac{1}{2}$"], ans:"$\\frac{1}{6}$", exp:"$\\frac{2 \\cdot 1}{3 \\cdot 4} = \\frac{2}{12}$, que se simplifica a $\\frac{1}{6}$." }, 
  { id:44, q:"¿Cuánto es $\\frac{3}{4} \\cdot \\frac{2}{5}$?", opts:["$\\frac{3}{10}$", "$\\frac{5}{9}$", "$\\frac{6}{20}$", "$\\frac{1}{2}$"], ans:"$\\frac{3}{10}$", exp:"$\\frac{3 \\cdot 2}{4 \\cdot 5} = \\frac{6}{20}$, simplificando la mitad da $\\frac{3}{10}$." },
  { id:45, q:"¿Cuánto es $\\frac{4}{5} \\cdot \\frac{5}{6}$?", opts:["$\\frac{2}{3}$", "$\\frac{20}{30}$", "$\\frac{9}{11}$", "$1$"], ans:"$\\frac{2}{3}$", exp:"$\\frac{4 \\cdot 5}{5 \\cdot 6} = \\frac{20}{30} = \\frac{2}{3}$." },
  { id:46, q:"¿Cuánto es $\\frac{1}{5} \\cdot \\frac{3}{7}$?", opts:["$\\frac{3}{35}$", "$\\frac{4}{12}$", "$\\frac{1}{35}$", "$\\frac{3}{12}$"], ans:"$\\frac{3}{35}$", exp:"Se multiplica directo: $\\frac{1 \\cdot 3}{5 \\cdot 7} = \\frac{3}{35}$." },
  { id:47, q:"¿Cuánto es $\\frac{5}{8} \\cdot \\frac{2}{3}$?", opts:["$\\frac{5}{12}$", "$\\frac{10}{24}$", "$\\frac{7}{11}$", "$\\frac{1}{4}$"], ans:"$\\frac{5}{12}$", exp:"$\\frac{5 \\cdot 2}{8 \\cdot 3} = \\frac{10}{24}$, simplificando da $\\frac{5}{12}$." },
  { id:48, q:"¿Cuánto es $\\frac{7}{10} \\cdot \\frac{1}{2}$?", opts:["$\\frac{7}{20}$", "$\\frac{8}{12}$", "$\\frac{7}{12}$", "$\\frac{1}{10}$"], ans:"$\\frac{7}{20}$", exp:"Se multiplica directo: $\\frac{7 \\cdot 1}{10 \\cdot 2} = \\frac{7}{20}$." },
  { id:49, q:"¿Cuánto es $\\frac{3}{8} \\cdot \\frac{4}{9}$?", opts:["$\\frac{1}{6}$", "$\\frac{12}{72}$", "$\\frac{7}{17}$", "$\\frac{1}{2}$"], ans:"$\\frac{1}{6}$", exp:"$\\frac{3 \\cdot 4}{8 \\cdot 9} = \\frac{12}{72}$, dividiendo entre 12 da $\\frac{1}{6}$." },
  { id:50, q:"¿Cuánto es $\\frac{5}{12} \\cdot \\frac{6}{5}$?", opts:["$\\frac{1}{2}$", "$\\frac{30}{60}$", "$\\frac{11}{17}$", "$1$"], ans:"$\\frac{1}{2}$", exp:"$\\frac{5 \\cdot 6}{12 \\cdot 5} = \\frac{30}{60} = \\frac{1}{2}$." },
  { id:51, q:"¿Cuánto es $(-\\frac{1}{2}) \\cdot \\frac{3}{4}$?", opts:["$-\\frac{3}{8}$", "$\\frac{3}{8}$", "$-\\frac{4}{6}$", "$\\frac{4}{6}$"], ans:"$-\\frac{3}{8}$", exp:"Menos por más es menos: $-\\frac{1 \\cdot 3}{2 \\cdot 4} = -\\frac{3}{8}$." },
  { id:52, q:"¿Cuánto es $(-\\frac{2}{5}) \\cdot (-\\frac{5}{2})$?", opts:["$1$", "$-1$", "$\\frac{10}{10}$", "$0$"], ans:"$1$", exp:"Son recíprocos y de igual signo. Menos por menos da más: $\\frac{10}{10} = 1$." },
  { id:53, q:"¿Cuánto es $\\frac{3}{7} \\cdot (-\\frac{14}{9})$?", opts:["$-\\frac{2}{3}$", "$\\frac{2}{3}$", "$-\\frac{42}{63}$", "$\\frac{1}{3}$"], ans:"$-\\frac{2}{3}$", exp:"$-\\frac{42}{63}$, dividimos entre 21 arriba y abajo, dando $-\\frac{2}{3}$." },
  { id:54, q:"¿Cuánto es $(-\\frac{4}{5}) \\cdot \\frac{15}{16}$?", opts:["$-\\frac{3}{4}$", "$\\frac{3}{4}$", "$-\\frac{60}{80}$", "$\\frac{1}{4}$"], ans:"$-\\frac{3}{4}$", exp:"$-\\frac{60}{80}$, simplificamos quitando un cero y sacando mitad: $-\\frac{3}{4}$." },
  { id:55, q:"¿Cuánto es $\\frac{1}{2} \\cdot \\frac{2}{3} \\cdot \\frac{3}{4}$?", opts:["$\\frac{1}{4}$", "$\\frac{6}{24}$", "$\\frac{1}{24}$", "$\\frac{1}{2}$"], ans:"$\\frac{1}{4}$", exp:"Podemos cancelar cruzado: $\\frac{1 \\cdot 2 \\cdot 3}{2 \\cdot 3 \\cdot 4} = \\frac{1}{4}$." },
  { id:56, q:"¿Cuánto es $(-\\frac{1}{3}) \\cdot (-\\frac{3}{4}) \\cdot (-\\frac{4}{5})$?", opts:["$-\\frac{1}{5}$", "$\\frac{1}{5}$", "$-\\frac{12}{60}$", "$1$"], ans:"$-\\frac{1}{5}$", exp:"Signo: $(-)(-)(-) = (-)$. Cancelamos 3 y 4 cruzados, queda $-\\frac{1}{5}$." },
  { id:57, q:"¿Cuánto es $\\frac{5}{6} \\cdot (-\\frac{12}{25})$?", opts:["$-\\frac{2}{5}$", "$\\frac{2}{5}$", "$-\\frac{60}{150}$", "$\\frac{1}{5}$"], ans:"$-\\frac{2}{5}$", exp:"$-\\frac{60}{150}$, eliminamos un cero y dividimos $\\frac{-6}{15}$ entre 3, da $-\\frac{2}{5}$." },
  { id:58, q:"¿Cuánto es $\\frac{7}{8} \\cdot (-\\frac{16}{21})$?", opts:["$-\\frac{2}{3}$", "$\\frac{2}{3}$", "$-\\frac{1}{3}$", "$1$"], ans:"$-\\frac{2}{3}$", exp:"Cancelamos: $7/21=1/3$ y $-16/8=-2$. El producto es $-\\frac{2}{3}$." },
  { id:59, q:"¿Cuánto es $(-\\frac{9}{10}) \\cdot (-\\frac{20}{27})$?", opts:["$\\frac{2}{3}$", "$-\\frac{2}{3}$", "$\\frac{180}{270}$", "$\\frac{1}{3}$"], ans:"$\\frac{2}{3}$", exp:"$(-)(-) = (+)$. Cancelamos: $-20/-10 = 2$ y $-9/-27 = 1/3$. Da $\\frac{2}{3}$." },
  { id:60, q:"¿Cuánto es $\\frac{2}{3} \\cdot \\frac{3}{2} \\cdot \\frac{5}{7}$?", opts:["$\\frac{5}{7}$", "$1$", "$\\frac{30}{42}$", "$\\frac{7}{5}$"], ans:"$\\frac{5}{7}$", exp:"Las primeras dos fracciones son recíprocas y su producto es 1. Así que $1 \\cdot \\frac{5}{7} = \\frac{5}{7}$." },

  // ── BLOQUE 3: División de racionales (61–90) ──────────────────────────────
  { id:61, q:"¿Cuánto es $1 \\div \\frac{1}{2}$?", opts:["$2$", "$\\frac{1}{2}$", "$1$", "$0$"], ans:"$2$", exp:"Dividir entre una fracción es multiplicar por su recíproco: $1 \\cdot 2 = 2$." },
  { id:62, q:"¿Cuánto es $2 \\div \\frac{1}{3}$?", opts:["$6$", "$\\frac{2}{3}$", "$\\frac{3}{2}$", "$\\frac{1}{6}$"], ans:"$6$", exp:"$2 \\cdot \\frac{3}{1} = 6$." },
  { id:63, q:"¿Cuánto es $4 \\div \\frac{2}{5}$?", opts:["$10$", "$\\frac{8}{5}$", "$\\frac{5}{8}$", "$2$"], ans:"$10$", exp:"$4 \\cdot \\frac{5}{2} = \\frac{20}{2} = 10$." },
  { id:64, q:"¿Cuánto es $\\frac{1}{2} \\div 2$?", opts:["$\\frac{1}{4}$", "$1$", "$\\frac{2}{2}$", "$4$"], ans:"$\\frac{1}{4}$", exp:"Equivale a $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$." },
  { id:65, q:"¿Cuánto es $\\frac{1}{3} \\div 3$?", opts:["$\\frac{1}{9}$", "$1$", "$\\frac{3}{3}$", "$9$"], ans:"$\\frac{1}{9}$", exp:"Equivale a $\\frac{1}{3} \\cdot \\frac{1}{3} = \\frac{1}{9}$." },
  { id:66, q:"¿Cuánto es $\\frac{2}{5} \\div 4$?", opts:["$\\frac{1}{10}$", "$\\frac{8}{5}$", "$\\frac{5}{8}$", "$10$"], ans:"$\\frac{1}{10}$", exp:"Equivale a $\\frac{2}{5} \\cdot \\frac{1}{4} = \\frac{2}{20} = \\frac{1}{10}$." },
  { id:67, q:"¿Cuánto es $(-3) \\div \\frac{1}{4}$?", opts:["$-12$", "$-\\frac{3}{4}$", "$12$", "$\\frac{3}{4}$"], ans:"$-12$", exp:"Multiplicamos por el recíproco: $-3 \\cdot 4 = -12$." },
  { id:68, q:"¿Cuánto es $\\frac{3}{4} \\div 6$?", opts:["$\\frac{1}{8}$", "$\\frac{18}{4}$", "$\\frac{4}{18}$", "$8$"], ans:"$\\frac{1}{8}$", exp:"Equivale a $\\frac{3}{4} \\cdot \\frac{1}{6} = \\frac{3}{24} = \\frac{1}{8}$." },
  { id:69, q:"¿Cuánto es $5 \\div \\frac{5}{6}$?", opts:["$6$", "$\\frac{25}{6}$", "$1$", "$\\frac{1}{6}$"], ans:"$6$", exp:"$5 \\cdot \\frac{6}{5}$, cancelamos los 5 y el resultado es $6$." },
  { id:70, q:"¿Cuánto es $\\frac{7}{8} \\div (-7)$?", opts:["$-\\frac{1}{8}$", "$\\frac{1}{8}$", "$-\\frac{49}{8}$", "$8$"], ans:"$-\\frac{1}{8}$", exp:"Equivale a $\\frac{7}{8} \\cdot -\\frac{1}{7} = -\\frac{7}{56} = -\\frac{1}{8}$." },
  { id:71, q:"¿Cuánto es $\\frac{1}{2} \\div \\frac{1}{2}$?", opts:["$1$", "$\\frac{1}{4}$", "$\\frac{2}{4}$", "$0$"], ans:"$1$", exp:"Cualquier número dividido por sí mismo es $1$." },
  { id:72, q:"¿Cuánto es $\\frac{1}{3} \\div \\frac{1}{2}$?", opts:["$\\frac{2}{3}$", "$\\frac{1}{6}$", "$\\frac{3}{2}$", "$6$"], ans:"$\\frac{2}{3}$", exp:"Multiplicamos cruzado: $\\frac{1 \\cdot 2}{3 \\cdot 1} = \\frac{2}{3}$." },
  { id:73, q:"¿Cuánto es $\\frac{3}{4} \\div \\frac{1}{4}$?", opts:["$3$", "$\\frac{3}{16}$", "$\\frac{1}{3}$", "$\\frac{12}{4}$"], ans:"$3$", exp:"Tienen el mismo denominador, así que dividimos los numeradores: $3 \\div 1 = 3$." },
  { id:74, q:"¿Cuánto es $\\frac{2}{5} \\div \\frac{3}{5}$?", opts:["$\\frac{2}{3}$", "$\\frac{6}{25}$", "$\\frac{3}{2}$", "$1$"], ans:"$\\frac{2}{3}$", exp:"Mismos denominadores, dividimos numeradores: $\\frac{2}{3}$." },
  { id:75, q:"¿Cuánto es $\\frac{4}{7} \\div \\frac{2}{7}$?", opts:["$2$", "$\\frac{8}{49}$", "$\\frac{1}{2}$", "$4$"], ans:"$2$", exp:"Mismos denominadores: $4 \\div 2 = 2$." },
  { id:76, q:"¿Cuánto es $\\frac{5}{8} \\div \\frac{3}{4}$?", opts:["$\\frac{5}{6}$", "$\\frac{15}{32}$", "$\\frac{6}{5}$", "$\\frac{1}{2}$"], ans:"$\\frac{5}{6}$", exp:"Multiplicamos cruzado: $\\frac{5 \\cdot 4}{8 \\cdot 3} = \\frac{20}{24} = \\frac{5}{6}$." },
  { id:77, q:"¿Cuánto es $\\frac{2}{9} \\div \\frac{4}{3}$?", opts:["$\\frac{1}{6}$", "$\\frac{8}{27}$", "$6$", "$\\frac{2}{3}$"], ans:"$\\frac{1}{6}$", exp:"Multiplicamos cruzado: $\\frac{2 \\cdot 3}{9 \\cdot 4} = \\frac{6}{36} = \\frac{1}{6}$." },
  { id:78, q:"¿Cuánto es $\\frac{7}{10} \\div \\frac{14}{5}$?", opts:["$\\frac{1}{4}$", "$\\frac{98}{50}$", "$4$", "$\\frac{1}{2}$"], ans:"$\\frac{1}{4}$", exp:"Multiplicamos cruzado: $\\frac{7 \\cdot 5}{10 \\cdot 14} = \\frac{35}{140} = \\frac{1}{4}$." },
  { id:79, q:"¿Cuánto es $\\frac{3}{8} \\div \\frac{9}{16}$?", opts:["$\\frac{2}{3}$", "$\\frac{27}{128}$", "$\\frac{3}{2}$", "$1$"], ans:"$\\frac{2}{3}$", exp:"$\\frac{3}{8} \\cdot \\frac{16}{9} = \\frac{48}{72} = \\frac{2}{3}$." },
  { id:80, q:"¿Cuánto es $\\frac{5}{12} \\div \\frac{10}{3}$?", opts:["$\\frac{1}{8}$", "$\\frac{50}{36}$", "$8$", "$\\frac{1}{4}$"], ans:"$\\frac{1}{8}$", exp:"$\\frac{5}{12} \\cdot \\frac{3}{10} = \\frac{15}{120} = \\frac{1}{8}$." },
  { id:81, q:"Simplifica: $\\frac{\\frac{1}{2}}{\\frac{3}{4}}$", opts:["$\\frac{2}{3}$", "$\\frac{3}{8}$", "$\\frac{8}{3}$", "$\\frac{3}{2}$"], ans:"$\\frac{2}{3}$", exp:"Ley del sándwich (extremos por extremos, medios por medios): $\\frac{1 \\cdot 4}{2 \\cdot 3} = \\frac{4}{6} = \\frac{2}{3}$." },
  { id:82, q:"¿Cuánto es $(-\\frac{2}{3}) \\div \\frac{4}{9}$?", opts:["$-\\frac{3}{2}$", "$\\frac{3}{2}$", "$-\\frac{8}{27}$", "$\\frac{2}{3}$"], ans:"$-\\frac{3}{2}$", exp:"Multiplicamos cruzado: $-\\frac{2 \\cdot 9}{3 \\cdot 4} = -\\frac{18}{12} = -\\frac{3}{2}$." },
  { id:83, q:"¿Cuánto es $(-\\frac{3}{5}) \\div (-\\frac{6}{25})$?", opts:["$\\frac{5}{2}$", "$-\\frac{5}{2}$", "$\\frac{18}{125}$", "$\\frac{2}{5}$"], ans:"$\\frac{5}{2}$", exp:"Signo $+$. Multiplicamos cruzado: $\\frac{3 \\cdot 25}{5 \\cdot 6} = \\frac{75}{30} = \\frac{5}{2}$." },
  { id:84, q:"Simplifica: $\\frac{\\frac{5}{6}}{\\frac{1}{3}}$", opts:["$\\frac{5}{2}$", "$\\frac{5}{18}$", "$\\frac{2}{5}$", "$\\frac{18}{5}$"], ans:"$\\frac{5}{2}$", exp:"Extremos arriba, medios abajo: $\\frac{5 \\cdot 3}{6 \\cdot 1} = \\frac{15}{6} = \\frac{5}{2}$." },
  { id:85, q:"Simplifica: $\\frac{2}{\\frac{1}{5}}$", opts:["$10$", "$\\frac{2}{5}$", "$\\frac{1}{10}$", "$5$"], ans:"$10$", exp:"Es lo mismo que $2 \\cdot 5 = 10$." },
  { id:86, q:"¿Cuánto es $\\frac{7}{4} \\div (-\\frac{21}{8})$?", opts:["$-\\frac{2}{3}$", "$\\frac{2}{3}$", "$-\\frac{147}{32}$", "$\\frac{3}{2}$"], ans:"$-\\frac{2}{3}$", exp:"Cruzado: $-\\frac{7 \\cdot 8}{4 \\cdot 21} = -\\frac{56}{84} = -\\frac{2}{3}$." },
  { id:87, q:"¿Cuánto es $(-\\frac{11}{12}) \\div (-\\frac{33}{4})$?", opts:["$\\frac{1}{9}$", "$-\\frac{1}{9}$", "$9$", "$-9$"], ans:"$\\frac{1}{9}$", exp:"Signos negativos se cancelan. Cruzado: $\\frac{11 \\cdot 4}{12 \\cdot 33} = \\frac{44}{396} = \\frac{1}{9}$." },
  { id:88, q:"Simplifica: $\\frac{\\frac{4}{5}}{2}$", opts:["$\\frac{2}{5}$", "$\\frac{8}{5}$", "$\\frac{5}{2}$", "$\\frac{5}{8}$"], ans:"$\\frac{2}{5}$", exp:"Agregamos un 1 al 2: $\\frac{4 \\cdot 1}{5 \\cdot 2} = \\frac{4}{10} = \\frac{2}{5}$." },
  { id:89, q:"¿Cuánto es $\\frac{15}{16} \\div \\frac{5}{8}$?", opts:["$\\frac{3}{2}$", "$\\frac{2}{3}$", "$\\frac{75}{128}$", "$1$"], ans:"$\\frac{3}{2}$", exp:"Cruzado: $\\frac{15 \\cdot 8}{16 \\cdot 5} = \\frac{120}{80} = \\frac{3}{2}$." },
  { id:90, q:"¿Cuánto es $(-1) \\div (-\\frac{1}{2})$?", opts:["$2$", "$\\frac{1}{2}$", "$-2$", "$-\\frac{1}{2}$"], ans:"$2$", exp:"Menos entre menos es más. $1 \\cdot 2 = 2$." },

  // ── BLOQUE 4: Problemas de razonamiento (91–120) ──────────────────────────
  { id:91, q:"Juan comió $\\frac{1}{4}$ de pizza y María $\\frac{1}{3}$. ¿Cuánta pizza comieron en total?", opts:["$\\frac{7}{12}$", "$\\frac{2}{7}$", "$\\frac{5}{12}$", "$\\frac{1}{2}$"], ans:"$\\frac{7}{12}$", exp:"Suma con distinto denominador: $\\frac{1}{4} + \\frac{1}{3} = \\frac{3+4}{12} = \\frac{7}{12}$." },
  { id:92, q:"De un tanque lleno, se gasta $\\frac{1}{2}$ en la mañana y $\\frac{1}{4}$ en la tarde. ¿Qué fracción queda?", opts:["$\\frac{1}{4}$", "$\\frac{3}{4}$", "$\\frac{1}{2}$", "$\\frac{1}{8}$"], ans:"$\\frac{1}{4}$", exp:"Gasto total: $\\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}$. Queda $1 - \\frac{3}{4} = \\frac{1}{4}$." },
  { id:93, q:"Pedro tiene $100. Gasta $\\frac{2}{5}$ en libros. ¿Cuánto dinero gastó?", opts:["$40", "$60", "$20", "$50"], ans:"$40", exp:"Multiplicamos la fracción por el total: $\\frac{2}{5} \\cdot 100 = \\frac{200}{5} = 40$." },
  { id:94, q:"Si $\\frac{3}{4}$ de un terreno miden $600\\text{ m}^2$, ¿cuánto mide el terreno completo?", opts:["$800\\text{ m}^2$", "$450\\text{ m}^2$", "$900\\text{ m}^2$", "$1200\\text{ m}^2$"], ans:"$800\\text{ m}^2$", exp:"$x \\cdot \\frac{3}{4} = 600$, despejamos $x = \\frac{600 \\cdot 4}{3} = 800$." },
  { id:95, q:"Una botella tiene $1 \\frac{1}{2}$ litros de agua. Si se sirven vasos de $\\frac{1}{4}$ de litro, ¿cuántos vasos salen?", opts:["$6$", "$4$", "$8$", "$5$"], ans:"$6$", exp:"$1 \\frac{1}{2} = \\frac{3}{2}$. Dividimos $\\frac{3}{2} \\div \\frac{1}{4} = \\frac{12}{2} = 6$." },
  { id:96, q:"Un ciclista recorre $\\frac{2}{3}$ de su ruta de 30 km. ¿Cuántos kilómetros le faltan?", opts:["$10\\text{ km}$", "$20\\text{ km}$", "$15\\text{ km}$", "$5\\text{ km}$"], ans:"$10\\text{ km}$", exp:"Le falta $\\frac{1}{3}$ de la ruta. $\\frac{1}{3} \\cdot 30 = 10$ km." },
  { id:97, q:"Ana hace $\\frac{1}{5}$ de un trabajo en 1 hora. ¿En cuántas horas hará el trabajo completo?", opts:["$5$", "$4$", "$\\frac{1}{5}$", "$10$"], ans:"$5$", exp:"Regla de tres o proporción: si $\\frac{1}{5}$ es 1 hora, el total $\\frac{5}{5}$ serán 5 horas." },
  { id:98, q:"Tengo $\\frac{3}{4}$ de kg de azúcar y uso $\\frac{1}{8}$ de kg. ¿Cuánto me queda?", opts:["$\\frac{5}{8}\\text{ kg}$", "$\\frac{1}{2}\\text{ kg}$", "$\\frac{2}{4}\\text{ kg}$", "$\\frac{7}{8}\\text{ kg}$"], ans:"$\\frac{5}{8}\\text{ kg}$", exp:"Resta: $\\frac{3}{4} - \\frac{1}{8} = \\frac{6}{8} - \\frac{1}{8} = \\frac{5}{8}$." },
  { id:99, q:"El $\\frac{2}{3}$ de los alumnos de un salón de 36 son mujeres. ¿Cuántos hombres hay?", opts:["$12$", "$24$", "$18$", "$6$"], ans:"$12$", exp:"Si $\\frac{2}{3}$ son mujeres, $\\frac{1}{3}$ son hombres. $\\frac{1}{3} \\cdot 36 = 12$." },
  { id:100, q:"Se reparten 2 pasteles entre 5 niños. ¿Qué fracción le toca a cada uno?", opts:["$\\frac{2}{5}$", "$\\frac{5}{2}$", "$\\frac{1}{5}$", "$\\frac{2}{10}$"], ans:"$\\frac{2}{5}$", exp:"Dividimos el total (2 pasteles) entre la cantidad de niños (5): $\\frac{2}{5}$." },
  { id:101, q:"Una llave llena un tinaco en 4h. ¿Qué fracción llena en 1h?", opts:["$\\frac{1}{4}$", "$4$", "$\\frac{1}{2}$", "$\\frac{3}{4}$"], ans:"$\\frac{1}{4}$", exp:"En un tiempo proporcional, en 1 hora llenará una cuarta parte: $\\frac{1}{4}$." },
  { id:102, q:"Si camino $\\frac{1}{2}$ km el lunes y $\\frac{3}{4}$ km el martes, ¿cuánto caminé en total?", opts:["$\\frac{5}{4}\\text{ km}$", "$\\frac{4}{6}\\text{ km}$", "$1\\text{ km}$", "$\\frac{3}{8}\\text{ km}$"], ans:"$\\frac{5}{4}\\text{ km}$", exp:"Suma: $\\frac{1}{2} + \\frac{3}{4} = \\frac{2}{4} + \\frac{3}{4} = \\frac{5}{4}$." },
  { id:103, q:"Luis gana $1200. Ahorra $\\frac{1}{6}$ de su sueldo. ¿Cuánto ahorra?", opts:["$200", "$1000", "$600", "$300"], ans:"$200", exp:"Multiplicamos: $1200 \\cdot \\frac{1}{6} = 200$." },
  { id:104, q:"Un paquete pesa $\\frac{5}{2}$ kg. ¿Cuánto pesan 4 paquetes iguales?", opts:["$10\\text{ kg}$", "$\\frac{20}{2}\\text{ kg}$", "$\\frac{5}{8}\\text{ kg}$", "$8\\text{ kg}$"], ans:"$10\\text{ kg}$", exp:"Multiplicamos: $4 \\cdot \\frac{5}{2} = \\frac{20}{2} = 10$." },
  { id:105, q:"Si gasto $\\frac{3}{5}$ de mi dinero y me quedan $40, ¿cuánto tenía?", opts:["$100", "$60", "$200", "$120"], ans:"$100", exp:"Me sobran $\\frac{2}{5}$ que equivalen a $40. Resolviendo $x \\cdot \\frac{2}{5} = 40 \\rightarrow x = \\frac{200}{2} = 100$." },
  { id:106, q:"Tengo $2 \\frac{1}{4}$ kg de frijol. Lo quiero empacar en bolsas de $\\frac{1}{4}$ kg. ¿Cuántas bolsas necesito?", opts:["$9$", "$8$", "$10$", "$4$"], ans:"$9$", exp:"$2 \\frac{1}{4} = \\frac{9}{4}$. Dividimos: $\\frac{9}{4} \\div \\frac{1}{4} = 9$." },
  { id:107, q:"La mitad de la tercera parte de un número es 5. ¿Cuál es el número?", opts:["$30$", "$15$", "$10$", "$60$"], ans:"$30$", exp:"$\\frac{1}{2} \\cdot \\frac{1}{3} \\cdot x = 5 \\rightarrow \\frac{x}{6} = 5 \\rightarrow x = 30$." },
  { id:108, q:"Un coche consume $\\frac{1}{8}$ de su tanque cada día. ¿En cuántos días se vacía?", opts:["$8$", "$4$", "$6$", "$10$"], ans:"$8$", exp:"Para gastar el total ($\\frac{8}{8}$), tomará exactamente 8 días." },
  { id:109, q:"Si $\\frac{2}{5}$ de un rollo de alambre son 40m, ¿cuánto miden $\\frac{3}{5}$ del mismo rollo?", opts:["$60\\text{ m}$", "$100\\text{ m}$", "$20\\text{ m}$", "$80\\text{ m}$"], ans:"$60\\text{ m}$", exp:"Si $\\frac{2}{5}$ es 40, entonces $\\frac{1}{5}$ es 20. Por lo tanto, $\\frac{3}{5}$ serán $3 \\cdot 20 = 60$." },
  { id:110, q:"Carlos pinta $\\frac{1}{3}$ de pared por hora, y su hermano $\\frac{1}{6}$. Juntos, ¿qué fracción pintan en una hora?", opts:["$\\frac{1}{2}$", "$\\frac{2}{9}$", "$\\frac{1}{9}$", "$\\frac{2}{3}$"], ans:"$\\frac{1}{2}$", exp:"Sumamos sus tasas de trabajo: $\\frac{1}{3} + \\frac{1}{6} = \\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}$." },
  { id:111, q:"De 60 asistentes, $\\frac{1}{4}$ son niños. ¿Cuántos adultos hay?", opts:["$45$", "$15$", "$30$", "$50$"], ans:"$45$", exp:"Los adultos son $\\frac{3}{4}$ del total. $\\frac{3}{4} \\cdot 60 = 45$." },
  { id:112, q:"Un atleta corre $3 \\frac{1}{2}$ km en media hora. ¿Cuánto corre en una hora?", opts:["$7\\text{ km}$", "$3.5\\text{ km}$", "$1.75\\text{ km}$", "$10.5\\text{ km}$"], ans:"$7\\text{ km}$", exp:"Si en $\\frac{1}{2}$ hora hace $3.5$ km, en $1$ hora hará el doble: $7$ km." },
  { id:113, q:"Tengo $\\frac{5}{6}$ de una pizza. Si invito a 4 amigos y la dividimos equitativamente entre los 5, ¿qué fracción come cada uno?", opts:["$\\frac{1}{6}$", "$\\frac{5}{24}$", "$\\frac{1}{5}$", "$\\frac{5}{30}$"], ans:"$\\frac{1}{6}$", exp:"Dividimos la cantidad entre el total de personas: $\\frac{5}{6} \\div 5 = \\frac{5}{30} = \\frac{1}{6}$." },
  { id:114, q:"Un recipiente está lleno a $\\frac{3}{8}$ de su capacidad. Si se le agregan 10 litros se llena a $\\frac{5}{8}$. ¿Cuál es la capacidad total?", opts:["$40\\text{ L}$", "$20\\text{ L}$", "$30\\text{ L}$", "$80\\text{ L}$"], ans:"$40\\text{ L}$", exp:"La diferencia $\\frac{5}{8} - \\frac{3}{8} = \\frac{2}{8} = \\frac{1}{4}$ equivale a $10$ litros. Si $\\frac{1}{4}$ son $10$L, el total son $40$L." },
  { id:115, q:"El sueldo de un trabajador se incrementa en su cuarta parte. Si ganaba $800, ¿cuánto gana ahora?", opts:["$1000", "$1200", "$900", "$200"], ans:"$1000", exp:"El incremento es $\\frac{1}{4}$ de 800, que es 200. $800 + 200 = 1000$." },
  { id:116, q:"Una cuerda mide 12 metros. Si se cortan pedazos de $\\frac{3}{4}$ de metro, ¿cuántos pedazos se obtienen?", opts:["$16$", "$9$", "$15$", "$12$"], ans:"$16$", exp:"Dividimos el total entre el tamaño del pedazo: $12 \\div \\frac{3}{4} = \\frac{48}{3} = 16$." },
  { id:117, q:"¿Qué fracción representa 15 minutos de una hora?", opts:["$\\frac{1}{4}$", "$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{1}{5}$"], ans:"$\\frac{1}{4}$", exp:"Sabiendo que una hora tiene 60 minutos, $\\frac{15}{60}$ se simplifica a $\\frac{1}{4}$." },
  { id:118, q:"Si leo $\\frac{1}{5}$ de un libro de 200 páginas por día, ¿cuántas páginas me faltan después de 3 días?", opts:["$80$", "$120$", "$60$", "$40$"], ans:"$80$", exp:"Cada día leo $\\frac{1}{5} \\cdot 200 = 40$ pág. En 3 días leo 120. Me faltan $200 - 120 = 80$." },
  { id:119, q:"Un pintor usa $\\frac{2}{3}$ de galón por habitación. Para 6 habitaciones necesita:", opts:["$4\\text{ galones}$", "$3\\text{ galones}$", "$6\\text{ galones}$", "$2\\text{ galones}$"], ans:"$4\\text{ galones}$", exp:"Multiplicamos: $6 \\cdot \\frac{2}{3} = \\frac{12}{3} = 4$ galones." },
  { id:120, q:"¿Cuánto es la tercera parte de la mitad de 120?", opts:["$20$", "$40$", "$60$", "$30$"], ans:"$20$", exp:"La mitad de 120 es 60. La tercera parte de 60 es $60 \\div 3 = 20$." },

  // ── BLOQUE 5: Conversión Decimal a Fracción y viceversa (121–150) ───────────
  { id:121, q:"Convierte $0.5$ a fracción.", opts:["$\\frac{1}{2}$", "$\\frac{1}{5}$", "$\\frac{5}{100}$", "$\\frac{2}{5}$"], ans:"$\\frac{1}{2}$", exp:"$0.5 = \\frac{5}{10}$, que al simplificar se convierte en $\\frac{1}{2}$." },
  { id:122, q:"Convierte $0.25$ a fracción.", opts:["$\\frac{1}{4}$", "$\\frac{1}{25}$", "$\\frac{25}{10}$", "$4$"], ans:"$\\frac{1}{4}$", exp:"$0.25 = \\frac{25}{100}$. Dividiendo ambos entre 25 nos da $\\frac{1}{4}$." },
  { id:123, q:"Convierte $0.75$ a fracción.", opts:["$\\frac{3}{4}$", "$\\frac{7}{5}$", "$\\frac{75}{10}$", "$\\frac{4}{3}$"], ans:"$\\frac{3}{4}$", exp:"$0.75 = \\frac{75}{100}$. Simplificando entre 25 obtenemos $\\frac{3}{4}$." },
  { id:124, q:"Convierte $0.2$ a fracción.", opts:["$\\frac{1}{5}$", "$\\frac{2}{100}$", "$\\frac{1}{2}$", "$5$"], ans:"$\\frac{1}{5}$", exp:"$0.2 = \\frac{2}{10}$, que simplificado a su mitad es $\\frac{1}{5}$." },
  { id:125, q:"Convierte $0.8$ a fracción.", opts:["$\\frac{4}{5}$", "$\\frac{8}{100}$", "$\\frac{5}{4}$", "$\\frac{1}{8}$"], ans:"$\\frac{4}{5}$", exp:"$0.8 = \\frac{8}{10}$, que simplificando mitades es $\\frac{4}{5}$." },
  { id:126, q:"Convierte $0.125$ a fracción.", opts:["$\\frac{1}{8}$", "$\\frac{125}{100}$", "$\\frac{1}{4}$", "$8$"], ans:"$\\frac{1}{8}$", exp:"$0.125 = \\frac{125}{1000}$. Dividiendo entre 125 arriba y abajo llegamos a $\\frac{1}{8}$." },
  { id:127, q:"Convierte $1.5$ a fracción.", opts:["$\\frac{3}{2}$", "$\\frac{15}{100}$", "$\\frac{2}{3}$", "$\\frac{1}{5}$"], ans:"$\\frac{3}{2}$", exp:"$1.5 = \\frac{15}{10}$, dividiendo entre 5 nos queda $\\frac{3}{2}$." },
  { id:128, q:"Convierte $2.25$ a fracción.", opts:["$\\frac{9}{4}$", "$\\frac{225}{1000}$", "$\\frac{4}{9}$", "$\\frac{1}{4}$"], ans:"$\\frac{9}{4}$", exp:"$2.25 = \\frac{225}{100}$. Dividiendo entre 25 da $\\frac{9}{4}$." },
  { id:129, q:"Convierte $0.6$ a fracción.", opts:["$\\frac{3}{5}$", "$\\frac{6}{100}$", "$\\frac{5}{3}$", "$\\frac{1}{6}$"], ans:"$\\frac{3}{5}$", exp:"$0.6 = \\frac{6}{10}$. Simplificando con la mitad tenemos $\\frac{3}{5}$." },
  { id:130, q:"Convierte $3.5$ a fracción.", opts:["$\\frac{7}{2}$", "$\\frac{35}{100}$", "$\\frac{2}{7}$", "$\\frac{5}{2}$"], ans:"$\\frac{7}{2}$", exp:"$3.5 = \\frac{35}{10}$, dividiendo entre 5 obtenemos $\\frac{7}{2}$." },
  { id:131, q:"Convierte $0.333...$ a fracción.", opts:["$\\frac{1}{3}$", "$\\frac{3}{10}$", "$\\frac{33}{100}$", "$3$"], ans:"$\\frac{1}{3}$", exp:"Los decimales periódicos llevan nueves abajo: $\\frac{3}{9}$, que es $\\frac{1}{3}$." },
  { id:132, q:"Convierte $0.666...$ a fracción.", opts:["$\\frac{2}{3}$", "$\\frac{6}{10}$", "$\\frac{66}{100}$", "$\\frac{3}{2}$"], ans:"$\\frac{2}{3}$", exp:"Con periodo se divide entre 9: $\\frac{6}{9}$, simplificando entre 3 da $\\frac{2}{3}$." },
  { id:133, q:"Convierte $0.111...$ a fracción.", opts:["$\\frac{1}{9}$", "$\\frac{1}{10}$", "$\\frac{11}{100}$", "$9$"], ans:"$\\frac{1}{9}$", exp:"El periodo es 1, se coloca sobre 9: $\\frac{1}{9}$." },
  { id:134, q:"Convierte $0.444...$ a fracción.", opts:["$\\frac{4}{9}$", "$\\frac{4}{10}$", "$\\frac{44}{100}$", "$\\frac{9}{4}$"], ans:"$\\frac{4}{9}$", exp:"El periodo es 4, se coloca sobre 9: $\\frac{4}{9}$." },
  { id:135, q:"Convierte $0.999...$ a fracción.", opts:["$1$", "$\\frac{9}{10}$", "$\\frac{99}{100}$", "$\\frac{9}{99}$"], ans:"$1$", exp:"$\\frac{9}{9} = 1$. Matemáticamente, $0.999...$ es exactamente igual a $1$." },
  { id:136, q:"Convierte $\\frac{1}{2}$ a decimal.", opts:["$0.5$", "$0.2$", "$1.2$", "$0.05$"], ans:"$0.5$", exp:"Al dividir $1 \\div 2$ obtenemos el valor exacto de $0.5$." },
  { id:137, q:"Convierte $\\frac{1}{4}$ a decimal.", opts:["$0.25$", "$0.4$", "$1.4$", "$0.14$"], ans:"$0.25$", exp:"Al dividir $1 \\div 4$ obtenemos $0.25$." },
  { id:138, q:"Convierte $\\frac{3}{4}$ a decimal.", opts:["$0.75$", "$0.34$", "$3.4$", "$0.075$"], ans:"$0.75$", exp:"Multiplica $0.25 \\cdot 3$ para llegar a $0.75$." },
  { id:139, q:"Convierte $\\frac{1}{5}$ a decimal.", opts:["$0.2$", "$0.5$", "$0.15$", "$0.02$"], ans:"$0.2$", exp:"$1 \\div 5 = 0.2$." },
  { id:140, q:"Convierte $\\frac{2}{5}$ a decimal.", opts:["$0.4$", "$0.25$", "$0.04$", "$2.5$"], ans:"$0.4$", exp:"Sabiendo que $1/5 = 0.2$, entonces $2/5$ es el doble, $0.4$." },
  { id:141, q:"Convierte $\\frac{3}{8}$ a decimal.", opts:["$0.375$", "$0.38$", "$3.8$", "$0.83$"], ans:"$0.375$", exp:"$1/8 = 0.125$. Multiplicado por 3 es $0.375$." },
  { id:142, q:"Convierte $\\frac{5}{8}$ a decimal.", opts:["$0.625$", "$0.58$", "$5.8$", "$0.85$"], ans:"$0.625$", exp:"Si $1/8 = 0.125$, multiplicando por 5 obtenemos $0.625$." },
  { id:143, q:"Convierte $\\frac{1}{10}$ a decimal.", opts:["$0.1$", "$0.01$", "$1.0$", "$10.0$"], ans:"$0.1$", exp:"Dividir por 10 es recorrer el punto un lugar a la izquierda: $0.1$." },
  { id:144, q:"Convierte $\\frac{3}{20}$ a decimal.", opts:["$0.15$", "$0.32$", "$3.2$", "$0.015$"], ans:"$0.15$", exp:"Multiplicamos por 5 arriba y abajo: $\\frac{15}{100} = 0.15$." },
  { id:145, q:"Convierte $\\frac{7}{25}$ a decimal.", opts:["$0.28$", "$0.725$", "$7.25$", "$0.028$"], ans:"$0.28$", exp:"Multiplicamos por 4 arriba y abajo: $\\frac{28}{100} = 0.28$." },
  { id:146, q:"Convierte $\\frac{1}{3}$ a decimal.", opts:["$0.333...$", "$0.3$", "$0.13$", "$1.3$"], ans:"$0.333...$", exp:"La división $1 \\div 3$ nunca termina, resultando en un periodo constante de 3." },
  { id:147, q:"Convierte $\\frac{2}{3}$ a decimal.", opts:["$0.666...$", "$0.6$", "$0.23$", "$2.3$"], ans:"$0.666...$", exp:"Si $\\frac{1}{3} = 0.333...$, el doble será $0.666...$" },
  { id:148, q:"Convierte $\\frac{1}{9}$ a decimal.", opts:["$0.111...$", "$0.1$", "$0.19$", "$1.9$"], ans:"$0.111...$", exp:"Cualquier dígito simple dividido entre 9 es un número periódico con ese mismo dígito." },
  { id:149, q:"Convierte $\\frac{5}{9}$ a decimal.", opts:["$0.555...$", "$0.5$", "$0.59$", "$5.9$"], ans:"$0.555...$", exp:"Como es sobre 9, el número entero del numerador se convierte en su periodo: $0.555...$" },
  { id:150, q:"Convierte $\\frac{1}{6}$ a decimal.", opts:["$0.1666...$", "$0.16$", "$1.6$", "$0.61$"], ans:"$0.1666...$", exp:"Al hacer $1 \\div 6$ nos da un decimal mixto donde el 6 se repite infinitamente." },

  // ── BLOQUE 6: Conversión Decimal a Porcentaje y viceversa (151–180) ────────
  { id:151, q:"Convierte $0.5$ a porcentaje.", opts:["$50\\%$", "$5\\%$", "$500\\%$", "$0.5\\%$"], ans:"$50\\%$", exp:"Multiplicamos por $100$ y agregamos $\\%$: $0.5 \\cdot 100 = 50\\%$." },
  { id:152, q:"Convierte $0.25$ a porcentaje.", opts:["$25\\%$", "$2.5\\%$", "$250\\%$", "$0.25\\%$"], ans:"$25\\%$", exp:"$0.25 \\cdot 100 = 25\\%$." },
  { id:153, q:"Convierte $0.75$ a porcentaje.", opts:["$75\\%$", "$7.5\\%$", "$750\\%$", "$0.75\\%$"], ans:"$75\\%$", exp:"$0.75 \\cdot 100 = 75\\%$." },
  { id:154, q:"Convierte $0.1$ a porcentaje.", opts:["$10\\%$", "$1\\%$", "$100\\%$", "$0.1\\%$"], ans:"$10\\%$", exp:"$0.1 \\cdot 100 = 10\\%$." },
  { id:155, q:"Convierte $0.05$ a porcentaje.", opts:["$5\\%$", "$50\\%$", "$0.5\\%$", "$500\\%$"], ans:"$5\\%$", exp:"$0.05 \\cdot 100 = 5\\%$." },
  { id:156, q:"Convierte $1.2$ a porcentaje.", opts:["$120\\%$", "$12\\%$", "$1.2\\%$", "$1200\\%$"], ans:"$120\\%$", exp:"Los valores mayores a 1 superan el cien por ciento: $1.2 \\cdot 100 = 120\\%$." },
  { id:157, q:"Convierte $2.5$ a porcentaje.", opts:["$250\\%$", "$25\\%$", "$2.5\\%$", "$2500\\%$"], ans:"$250\\%$", exp:"$2.5 \\cdot 100 = 250\\%$." },
  { id:158, q:"Convierte $0.005$ a porcentaje.", opts:["$0.5\\%$", "$5\\%$", "$50\\%$", "$0.05\\%$"], ans:"$0.5\\%$", exp:"Recorremos el punto decimal dos lugares: $0.5\\%$." },
  { id:159, q:"Convierte $0.33$ a porcentaje.", opts:["$33\\%$", "$3.3\\%$", "$330\\%$", "$0.33\\%$"], ans:"$33\\%$", exp:"$0.33 \\cdot 100 = 33\\%$." },
  { id:160, q:"Convierte $1.0$ a porcentaje.", opts:["$100\\%$", "$10\\%$", "$1\\%$", "$1000\\%$"], ans:"$100\\%$", exp:"El entero $1$ representa el todo absoluto, es decir, el $100\\%$." },
  { id:161, q:"Convierte $50\\%$ a decimal.", opts:["$0.5$", "$5.0$", "$0.05$", "$50.0$"], ans:"$0.5$", exp:"Dividimos por $100$: $50 / 100 = 0.5$." },
  { id:162, q:"Convierte $25\\%$ a decimal.", opts:["$0.25$", "$2.5$", "$0.025$", "$25.0$"], ans:"$0.25$", exp:"$25 / 100 = 0.25$." },
  { id:163, q:"Convierte $75\\%$ a decimal.", opts:["$0.75$", "$7.5$", "$0.075$", "$75.0$"], ans:"$0.75$", exp:"$75 / 100 = 0.75$." },
  { id:164, q:"Convierte $10\\%$ a decimal.", opts:["$0.1$", "$1.0$", "$0.01$", "$10.0$"], ans:"$0.1$", exp:"$10 / 100 = 0.1$." },
  { id:165, q:"Convierte $5\\%$ a decimal.", opts:["$0.05$", "$0.5$", "$5.0$", "$0.005$"], ans:"$0.05$", exp:"Cuidado al recorrer el punto: $5 / 100 = 0.05$." },
  { id:166, q:"Convierte $120\\%$ a decimal.", opts:["$1.2$", "$12.0$", "$0.12$", "$120.0$"], ans:"$1.2$", exp:"$120 / 100 = 1.2$." },
  { id:167, q:"Convierte $250\\%$ a decimal.", opts:["$2.5$", "$25.0$", "$0.25$", "$250.0$"], ans:"$2.5$", exp:"$250 / 100 = 2.5$." },
  { id:168, q:"Convierte $0.5\\%$ a decimal.", opts:["$0.005$", "$0.05$", "$0.5$", "$5.0$"], ans:"$0.005$", exp:"Recorremos el punto decimal dos lugares a la izquierda: $0.005$." },
  { id:169, q:"Convierte $33\\%$ a decimal.", opts:["$0.33$", "$3.3$", "$0.033$", "$33.0$"], ans:"$0.33$", exp:"$33 / 100 = 0.33$." },
  { id:170, q:"Convierte $100\\%$ a decimal.", opts:["$1.0$", "$10.0$", "$0.1$", "$100.0$"], ans:"$1.0$", exp:"El cien por ciento representa la unidad: $1.0$." },
  { id:171, q:"¿Qué porcentaje representa $\\frac{1}{4}$?", opts:["$25\\%$", "$20\\%$", "$40\\%$", "$14\\%$"], ans:"$25\\%$", exp:"$\\frac{1}{4} = 0.25$, multiplicando por $100$ nos da $25\\%$." },
  { id:172, q:"¿Qué porcentaje representa $\\frac{1}{2}$?", opts:["$50\\%$", "$20\\%$", "$12\\%$", "$5\\%$"], ans:"$50\\%$", exp:"La mitad de algo es siempre su $50\\%$." },
  { id:173, q:"¿Qué fracción representa el $20\\%$?", opts:["$\\frac{1}{5}$", "$\\frac{1}{2}$", "$\\frac{1}{4}$", "$\\frac{2}{100}$"], ans:"$\\frac{1}{5}$", exp:"$20\\% = \\frac{20}{100}$, simplificando da $\\frac{1}{5}$." },
  { id:174, q:"¿Qué fracción representa el $75\\%$?", opts:["$\\frac{3}{4}$", "$\\frac{7}{5}$", "$\\frac{1}{4}$", "$\\frac{75}{10}$"], ans:"$\\frac{3}{4}$", exp:"$75\\% = \\frac{75}{100}$, simplificando entre 25 nos da $\\frac{3}{4}$." },
  { id:175, q:"Si algo cuesta el $150\\%$ de su valor original, en decimal es:", opts:["$1.5$", "$15.0$", "$0.15$", "$150.0$"], ans:"$1.5$", exp:"$150\\% = \\frac{150}{100} = 1.5$." },
  { id:176, q:"El $12.5\\%$ equivale en fracción a:", opts:["$\\frac{1}{8}$", "$\\frac{1}{4}$", "$\\frac{1}{12}$", "$\\frac{1}{5}$"], ans:"$\\frac{1}{8}$", exp:"Sabiendo que $25\\% = 1/4$, su mitad ($12.5\\%$) es la mitad de $1/4$, o sea $1/8$." },
  { id:177, q:"Un tercio ($\\frac{1}{3}$) es aproximadamente qué porcentaje:", opts:["$33.3\\%$", "$30\\%$", "$3\\%$", "$13\\%$"], ans:"$33.3\\%$", exp:"$\\frac{1}{3} = 0.333...$, multiplicado por $100$ es $33.333\\% \\approx 33.3\\%$." },
  { id:178, q:"$0.6$ es equivalente a qué porcentaje y fracción:", opts:["$60\\%$ y $\\frac{3}{5}$", "$6\\%$ y $\\frac{3}{50}$", "$60\\%$ y $\\frac{1}{6}$", "$600\\%$ y $\\frac{6}{1}$"], ans:"$60\\%$ y $\\frac{3}{5}$", exp:"$0.6 = 60\\%$ y también es igual a $\\frac{6}{10}$, que se simplifica a $\\frac{3}{5}$." },
  { id:179, q:"El $40\\%$ es equivalente a:", opts:["$\\frac{2}{5}$", "$\\frac{1}{4}$", "$\\frac{4}{100}$", "$4.0$"], ans:"$\\frac{2}{5}$", exp:"$40\\% = \\frac{40}{100}$, que dividiendo entre 20 nos deja en $\\frac{2}{5}$." },
  { id:180, q:"¿Cuál es mayor: $0.8$, $75\\%$ o $\\frac{4}{5}$?", opts:["$0.8$ y $\\frac{4}{5}$ son iguales y mayores a $75\\%$", "$75\\%$", "$\\frac{4}{5}$", "Todos son iguales"], ans:"$0.8$ y $\\frac{4}{5}$ son iguales y mayores a $75\\%$", exp:"$0.8$ equivale a $\\frac{4}{5}$ ($80\\%$). $80\\% > 75\\%$." },

  // ── BLOQUE 7: Problemas de Porcentajes (181–210) ──────────────────────────
  { id:181, q:"Calcula el $20\\%$ de $50$.", opts:["$10$", "$20$", "$5$", "$25$"], ans:"$10$", exp:"Convertimos el porcentaje a decimal y multiplicamos: $0.20 \\cdot 50 = 10$." },
  { id:182, q:"Calcula el $15\\%$ de $200$.", opts:["$30$", "$15$", "$300$", "$20$"], ans:"$30$", exp:"$0.15 \\cdot 200 = 30$." },
  { id:183, q:"Calcula el $50\\%$ de $84$.", opts:["$42$", "$84$", "$21$", "$50$"], ans:"$42$", exp:"El 50% siempre es la mitad exacta de una cifra. $84 / 2 = 42$." },
  { id:184, q:"Calcula el $25\\%$ de $120$.", opts:["$30$", "$25$", "$60$", "$40$"], ans:"$30$", exp:"El 25% equivale a dividir entre 4. $120 / 4 = 30$." },
  { id:185, q:"Calcula el $10\\%$ de $350$.", opts:["$35$", "$10$", "$3.5$", "$350$"], ans:"$35$", exp:"El 10% equivale a recorrer el decimal un lugar a la izquierda: $35.0$." },
  { id:186, q:"Si un pantalón cuesta $400 y tiene un $20\\%$ de descuento, ¿cuál es el descuento?", opts:["$80", "$20", "$320", "$40"], ans:"$80", exp:"Calculamos el descuento directo: $0.20 \\cdot 400 = 80$." },
  { id:187, q:"Un artículo cuesta $500 y tiene un descuento del $30\\%$. ¿Cuánto se paga al final?", opts:["$350", "$150", "$470", "$300"], ans:"$350", exp:"Si te descuentan 30%, pagas el 70%. $0.70 \\cdot 500 = 350$." },
  { id:188, q:"En un grupo de 40 alumnos, el $60\\%$ son mujeres. ¿Cuántas mujeres hay?", opts:["$24$", "$16$", "$60$", "$20$"], ans:"$24$", exp:"$0.60 \\cdot 40 = 24$." },
  { id:189, q:"Si el $25\\%$ de un número es $15$, ¿cuál es el número?", opts:["$60$", "$30$", "$45$", "$75$"], ans:"$60$", exp:"$x \\cdot 0.25 = 15 \\rightarrow x = 15 / 0.25 = 60$." },
  { id:190, q:"Una factura de $200 incluye un $16\\%$ de IVA. ¿Cuánto es el IVA?", opts:["$32", "$16", "$232", "$8"], ans:"$32", exp:"Calculamos solo el porcentaje del IVA: $0.16 \\cdot 200 = 32$." },
  { id:191, q:"¿Qué porcentaje es $20$ de $80$?", opts:["$25\\%$", "$20\\%$", "$40\\%$", "$50\\%$"], ans:"$25\\%$", exp:"Dividimos la parte entre el total: $20 / 80 = 0.25 = 25\\%$." },
  { id:192, q:"¿Qué porcentaje es $15$ de $60$?", opts:["$25\\%$", "$15\\%$", "$30\\%$", "$20\\%$"], ans:"$25\\%$", exp:"$15 / 60 = 1 / 4 = 0.25 = 25\\%$." },
  { id:193, q:"De $500$ manzanas, $25$ salieron podridas. ¿Qué porcentaje está podrido?", opts:["$5\\%$", "$25\\%$", "$10\\%$", "$2.5\\%$"], ans:"$5\\%$", exp:"$25 / 500 = 1 / 20 = 0.05 = 5\\%$." },
  { id:194, q:"Si gano $1000 y me aumentan el sueldo un $15\\%$, ¿cuánto ganaré ahora?", opts:["$1150", "$150", "$1015", "$1500"], ans:"$1150", exp:"El aumento es $0.15 \\cdot 1000 = 150$. Sueldo total = $1000 + 150 = 1150$." },
  { id:195, q:"Un equipo ganó 18 de 24 partidos. ¿Qué porcentaje de partidos ganó?", opts:["$75\\%$", "$18\\%$", "$80\\%$", "$60\\%$"], ans:"$75\\%$", exp:"$18 / 24 = 3 / 4 = 0.75 = 75\\%$." },
  { id:196, q:"El precio de una TV subió de $4000 a $4400. ¿Cuál fue el porcentaje de aumento?", opts:["$10\\%$", "$400\\%$", "$40\\%$", "$11\\%$"], ans:"$10\\%$", exp:"La diferencia es 400. Respecto a los 4000 base, $400 / 4000 = 0.10 = 10\\%$." },
  { id:197, q:"Si el $10\\%$ de $X$ es $45$, ¿cuánto es $X$?", opts:["$450$", "$45$", "$90$", "$4.5$"], ans:"$450$", exp:"Si el 10% ($1/10$) es 45, el total (100%) es multiplicar por 10: $45 \\cdot 10 = 450$." },
  { id:198, q:"En una tienda todo tiene $20\\%$ de descuento. Si pago $160 por unos zapatos, ¿cuál era su precio original?", opts:["$200", "$192", "$180", "$220"], ans:"$200", exp:"Pagas el 80%. $x \\cdot 0.80 = 160 \\rightarrow x = 160 / 0.8 = 200$." },
  { id:199, q:"Una inversión de $5000 genera un $5\\%$ de interés anual. ¿Cuánto interés generará en un año?", opts:["$250", "$50", "$5250", "$25"], ans:"$250", exp:"Solo el interés: $5000 \\cdot 0.05 = 250$." },
  { id:200, q:"Un producto cuesta $100. Sube un $10\\%$ y luego baja un $10\\%$. ¿Cuál es su precio final?", opts:["$99", "$100", "$110", "$90"], ans:"$99", exp:"Sube a 110. Luego baja 10% de 110 (que es 11): $110 - 11 = 99$." },
  { id:201, q:"Calcula el $12.5\\%$ de $800$.", opts:["$100$", "$125$", "$80$", "$12.5$"], ans:"$100$", exp:"$12.5\\%$ es igual a la fracción $\\frac{1}{8}$. $800 / 8 = 100$." },
  { id:202, q:"Si $30$ es el $15\\%$ de un número, el número es:", opts:["$200$", "$150$", "$450$", "$300$"], ans:"$200$", exp:"$x \\cdot 0.15 = 30 \\rightarrow x = 30 / 0.15 = 200$." },
  { id:203, q:"En una votación, el ganador obtuvo el $55\\%$ de los votos. Si hubo 2000 votantes, ¿cuántos votos obtuvo?", opts:["$1100$", "$550$", "$110$", "$900$"], ans:"$1100$", exp:"$2000 \\cdot 0.55 = 1100$ votos." },
  { id:204, q:"Compré un auto en $120,000 y lo vendí perdiendo el $15\\%$. ¿En cuánto lo vendí?", opts:["$102,000", "$18,000", "$138,000", "$105,000"], ans:"$102,000", exp:"Lo vendiste al 85% de su valor: $120,000 \\cdot 0.85 = 102,000$." },
  { id:205, q:"El $0.5\\%$ de $4000$ es:", opts:["$20$", "$200$", "$5$", "$40$"], ans:"$20$", exp:"Recuerda que $0.5\\% = 0.005$ en decimal. $4000 \\cdot 0.005 = 20$." },
  { id:206, q:"Si a $80 le sumamos su $25\\%$, obtenemos:", opts:["$100", "$105", "$125", "$90"], ans:"$100", exp:"El 25% (un cuarto) de 80 es 20. Sumamos $80 + 20 = 100$." },
  { id:207, q:"¿A qué cantidad su $10\\%$ es igual a $7$?", opts:["$70$", "$700$", "$0.7$", "$77$"], ans:"$70$", exp:"$x \\cdot 0.10 = 7 \\rightarrow x = 70$." },
  { id:208, q:"Un tanque de gasolina de 60 litros está al $15\\%$ de su capacidad. ¿Cuántos litros tiene?", opts:["$9\\text{ L}$", "$15\\text{ L}$", "$6\\text{ L}$", "$4\\text{ L}$"], ans:"$9\\text{ L}$", exp:"$60 \\cdot 0.15 = 9$ litros." },
  { id:209, q:"El precio con IVA ($16\\%$) de una computadora es $11,600. ¿Cuál es el precio sin IVA?", opts:["$10,000", "$1,600", "$9,744", "$11,000"], ans:"$10,000", exp:"El precio final es 116% del original. $x \\cdot 1.16 = 11600 \\rightarrow x = 10000$." },
  { id:210, q:"Si 8 de cada 40 estudiantes usan lentes, ¿qué porcentaje no usa lentes?", opts:["$80\\%$", "$20\\%$", "$40\\%$", "$60\\%$"], ans:"$80\\%$", exp:"Usan lentes $8/40 = 20\\%$. Por lo tanto, el resto ($80\\%$) NO usa lentes." },

  // ── BLOQUE 8: Proporcionalidad Directa, Inversa y Combinada (211–240) ──────
  { id:211, q:"Si 3 kilos de manzana cuestan $60, ¿cuánto cuestan 5 kilos?", opts:["$100", "$90", "$120", "$80"], ans:"$100", exp:"Directa: $x = (5 \\cdot 60) / 3 = 100$." },
  { id:212, q:"Si un coche recorre 150 km en 2 horas, ¿cuánto recorrerá en 5 horas a la misma velocidad?", opts:["$375\\text{ km}$", "$300\\text{ km}$", "$450\\text{ km}$", "$250\\text{ km}$"], ans:"$375\\text{ km}$", exp:"Directa: $x = (5 \\cdot 150) / 2 = 750 / 2 = 375$ km." },
  { id:213, q:"Si 4 obreros construyen un muro en 6 días, ¿en cuántos días lo construirán 8 obreros?", opts:["$3\\text{ días}$", "$12\\text{ días}$", "$8\\text{ días}$", "$4\\text{ días}$"], ans:"$3\\text{ días}$", exp:"Inversa: Más obreros, menos tiempo. $4 \\cdot 6 = 8 \\cdot x \\rightarrow 24/8 = 3$ días." },
  { id:214, q:"Para llenar una alberca 2 mangueras tardan 10 horas. ¿Cuánto tardarán 5 mangueras?", opts:["$4\\text{ horas}$", "$25\\text{ horas}$", "$5\\text{ horas}$", "$2\\text{ horas}$"], ans:"$4\\text{ horas}$", exp:"Inversa: $2 \\cdot 10 = 5 \\cdot x \\rightarrow 20 / 5 = 4$ horas." },
  { id:215, q:"Si 5 refrescos cuestan $75, ¿cuántos refrescos compro con $150?", opts:["$10$", "$15$", "$8$", "$12$"], ans:"$10$", exp:"Directa (proporción): con el doble de dinero (150) compras el doble de refrescos (10)." },
  { id:216, q:"Un tren va a 80 km/h y tarda 4h en llegar. Si fuera a 160 km/h, ¿cuánto tardaría?", opts:["$2\\text{ horas}$", "$8\\text{ horas}$", "$4\\text{ horas}$", "$6\\text{ horas}$"], ans:"$2\\text{ horas}$", exp:"Inversa: Al ir al doble de velocidad (160), tardará la mitad del tiempo (2h)." },
  { id:217, q:"Si 10 vacas comen cierta cantidad de pasto en 6 días, ¿cuántos días durará el pasto si hay 15 vacas?", opts:["$4\\text{ días}$", "$9\\text{ días}$", "$5\\text{ días}$", "$8\\text{ días}$"], ans:"$4\\text{ días}$", exp:"Inversa: $10 \\cdot 6 = 15 \\cdot x \\rightarrow 60 / 15 = 4$ días." },
  { id:218, q:"Una receta para 4 personas necesita 200g de harina. ¿Cuánta harina se necesita para 10 personas?", opts:["$500\\text{ g}$", "$400\\text{ g}$", "$800\\text{ g}$", "$600\\text{ g}$"], ans:"$500\\text{ g}$", exp:"Directa: $x = (10 \\cdot 200) / 4 = 2000 / 4 = 500$g." },
  { id:219, q:"Si 6 pintores pintan una casa en 8 días, ¿cuántos pintores se necesitan para hacerlo en 4 días?", opts:["$12$", "$3$", "$10$", "$8$"], ans:"$12$", exp:"Inversa: Para hacerlo en la mitad de tiempo (4 días), requieres el doble de pintores (12)." },
  { id:220, q:"Un grifo arroja 20 L/min y llena un estanque en 1.5 h. ¿Cuánto tardará otro grifo que arroja 30 L/min?", opts:["$1\\text{ h}$", "$2\\text{ h}$", "$1.2\\text{ h}$", "$0.5\\text{ h}$"], ans:"$1\\text{ h}$", exp:"Inversa: $20 \\cdot 1.5 = 30 \\cdot x \\rightarrow 30 = 30x \\rightarrow x = 1$." },
  { id:221, q:"Si con $500 compro 20 dólares, ¿cuántos dólares compro con $1250?", opts:["$50$", "$40$", "$60$", "$25$"], ans:"$50$", exp:"Directa: $x = (1250 \\cdot 20) / 500 = 25000 / 500 = 50$." },
  { id:222, q:"3 máquinas hacen 300 piezas en 2 horas. ¿Cuántas piezas hacen 5 máquinas en 2 horas?", opts:["$500$", "$400$", "$600$", "$450$"], ans:"$500$", exp:"Directa (mismo tiempo): Cada máquina hace 100 piezas. 5 máquinas harán 500." },
  { id:223, q:"Un automóvil consume 8L de gasolina por cada 100 km. ¿Cuántos litros consumirá en 350 km?", opts:["$28\\text{ L}$", "$24\\text{ L}$", "$32\\text{ L}$", "$20\\text{ L}$"], ans:"$28\\text{ L}$", exp:"Directa: $x = (350 \\cdot 8) / 100 = 2800 / 100 = 28$ L." },
  { id:224, q:"Si 4 albañiles construyen 2 casas en 30 días, ¿cuántos albañiles se necesitan para construir 2 casas en 15 días?", opts:["$8$", "$2$", "$6$", "$10$"], ans:"$8$", exp:"Inversa (mismas casas): Para reducir los días a la mitad (de 30 a 15), requieres el doble de personas (8)." },
  { id:225, q:"Para empapelar una habitación se necesitan 15 rollos de papel de 0.6m de ancho. ¿Cuántos rollos de 0.9m de ancho se necesitarían?", opts:["$10$", "$22.5$", "$12$", "$8$"], ans:"$10$", exp:"Inversa: $15 \\cdot 0.6 = x \\cdot 0.9 \\rightarrow 9 = 0.9x \\rightarrow x = 10$." },
  { id:226, q:"Si 5 operarios producen 100 zapatos en 4 días, ¿cuántos días tardarán 10 operarios en producir 100 zapatos?", opts:["$2$", "$8$", "$4$", "$5$"], ans:"$2$", exp:"Inversa (misma producción): El doble de operarios lo harán en la mitad de tiempo (2 días)." },
  { id:227, q:"En un campamento hay comida para 20 personas durante 15 días. Si llegan 10 personas más, ¿para cuántos días alcanza la comida?", opts:["$10$", "$22.5$", "$12$", "$8$"], ans:"$10$", exp:"Inversa: Habrá 30 personas. $20 \\cdot 15 = 30 \\cdot x \\rightarrow 300 / 30 = 10$." },
  { id:228, q:"Un ciclista a 20 km/h tarda 3 horas. ¿A qué velocidad debe ir para tardar 2 horas?", opts:["$30\\text{ km/h}$", "$40\\text{ km/h}$", "$15\\text{ km/h}$", "$25\\text{ km/h}$"], ans:"$30\\text{ km/h}$", exp:"Inversa: $20 \\cdot 3 = x \\cdot 2 \\rightarrow 60 = 2x \\rightarrow x = 30$." },
  { id:229, q:"Si 2 carpinteros hacen 10 sillas en 5 días, ¿cuántas sillas harán 4 carpinteros en 5 días?", opts:["$20$", "$10$", "$40$", "$15$"], ans:"$20$", exp:"Directa (mismo tiempo): Al doble de carpinteros, doble de sillas (20)." },
  { id:230, q:"Si 3 bombas extraen 10000 L de agua en 4 horas, ¿cuántas horas tardarán 6 bombas en extraer los mismos 10000 L?", opts:["$2\\text{ h}$", "$8\\text{ h}$", "$4\\text{ h}$", "$1\\text{ h}$"], ans:"$2\\text{ h}$", exp:"Inversa (misma cantidad de agua): Doble de bombas, mitad del tiempo (2h)." },
  { id:231, q:"Una rueda da 200 vueltas en 10 minutos. ¿Cuántas vueltas dará en 1 hora y cuarto (75 min)?", opts:["$1500$", "$1200$", "$2000$", "$1000$"], ans:"$1500$", exp:"Directa: $x = (75 \\cdot 200) / 10 = 15000 / 10 = 1500$ vueltas." },
  { id:232, q:"Si el precio de 2.5 kg de queso es $300, ¿cuánto cuestan 4 kg?", opts:["$480", "$500", "$400", "$600"], ans:"$480", exp:"Directa: $x = (4 \\cdot 300) / 2.5 = 1200 / 2.5 = 480$." },
  { id:233, q:"12 obreros hacen una obra en 28 días. Si fueran 14 obreros, ¿cuántos días tardarían?", opts:["$24$", "$32$", "$20$", "$26$"], ans:"$24$", exp:"Inversa: $12 \\cdot 28 = 14 \\cdot x \\rightarrow 336 / 14 = 24$ días." },
  { id:234, q:"Un grifo da 15 L/min y llena un barril en 20 min. ¿Qué caudal debe tener para llenarlo en 12 min?", opts:["$25\\text{ L/min}$", "$30\\text{ L/min}$", "$20\\text{ L/min}$", "$10\\text{ L/min}$"], ans:"$25\\text{ L/min}$", exp:"Inversa: $15 \\cdot 20 = x \\cdot 12 \\rightarrow 300 = 12x \\rightarrow 25$." },
  { id:235, q:"Si 5 cuadernos cuestan $125, ¿cuánto cuestan 8 cuadernos?", opts:["$200", "$180", "$250", "$150"], ans:"$200", exp:"Directa: Un cuaderno cuesta 25. Entonces, $8 \\cdot 25 = 200$." },
  { id:236, q:"Un motor consume 3 galones de gas para funcionar 5 horas. ¿Cuántos galones necesita para 15 horas?", opts:["$9$", "$6$", "$12$", "$15$"], ans:"$9$", exp:"Directa: 15 es el triple de 5 horas. Necesita el triple de gasolina: $3 \\cdot 3 = 9$." },
  { id:237, q:"4 tractores aran un campo en 12 horas. ¿En cuánto tiempo lo harán 6 tractores iguales?", opts:["$8\\text{ h}$", "$18\\text{ h}$", "$6\\text{ h}$", "$10\\text{ h}$"], ans:"$8\\text{ h}$", exp:"Inversa: $4 \\cdot 12 = 6 \\cdot x \\rightarrow 48 / 6 = 8$ horas." },
  { id:238, q:"Un corredor hace 10 km en 40 min. Si mantiene el ritmo, ¿cuánto tardará en hacer 15 km?", opts:["$60\\text{ min}$", "$50\\text{ min}$", "$75\\text{ min}$", "$45\\text{ min}$"], ans:"$60\\text{ min}$", exp:"Directa: $x = (15 \\cdot 40) / 10 = 600 / 10 = 60$ min." },
  { id:239, q:"Si 8 impresoras imprimen un lote en 3 horas, ¿cuántas impresoras se necesitan para imprimirlo en 2 horas?", opts:["$12$", "$10$", "$6$", "$16$"], ans:"$12$", exp:"Inversa: $8 \\cdot 3 = x \\cdot 2 \\rightarrow 24 / 2 = 12$ impresoras." },
  { id:240, q:"Tres amigos alquilan una casa por $900. Si se unen dos amigos más, ¿cuánto pagará cada uno en total?", opts:["$180", "$300", "$225", "$150"], ans:"$180", exp:"Serán 5 amigos en total. $900 \\div 5 = 180$ cada uno." },

  // ── BLOQUE 9: Exponenciación y Radicación (Leyes de Exponentes) (241–270) ──
  { id:241, q:"¿A qué es igual $x^2 \\cdot x^3$?", opts:["$x^5$", "$x^6$", "$x$", "$2x^5$"], ans:"$x^5$", exp:"En multiplicación de bases iguales, los exponentes se suman: $2+3=5$." },
  { id:242, q:"¿A qué es igual $\\frac{a^5}{a^2}$?", opts:["$a^3$", "$a^7$", "$a^{2.5}$", "$\\frac{1}{a^3}$"], ans:"$a^3$", exp:"En división de bases iguales, los exponentes se restan: $5-2=3$." },
  { id:243, q:"¿A qué es igual $(y^3)^2$?", opts:["$y^6$", "$y^5$", "$y^9$", "$2y^3$"], ans:"$y^6$", exp:"Potencia de potencia: se multiplican los exponentes: $3 \\cdot 2 = 6$." },
  { id:244, q:"¿Cuánto vale $5^0$?", opts:["$1$", "$0$", "$5$", "$10$"], ans:"$1$", exp:"Todo número distinto de cero elevado a la potencia cero es 1." },
  { id:245, q:"¿A qué es igual $x^{-2}$?", opts:["$\\frac{1}{x^2}$", "$-x^2$", "$\\frac{x}{2}$", "$x^2$"], ans:"$\\frac{1}{x^2}$", exp:"Un exponente negativo indica el recíproco: $x^{-n} = \\frac{1}{x^n}$." },
  { id:246, q:"¿A qué equivale $x^{1/2}$?", opts:["$\\sqrt{x}$", "$\\frac{x}{2}$", "$x^2$", "$\\frac{1}{\\sqrt{x}}$"], ans:"$\\sqrt{x}$", exp:"Un exponente a la $1/2$ es una raíz cuadrada ($2$ de índice)." },
  { id:247, q:"¿A qué equivale $y^{2/3}$?", opts:["$\\sqrt[3]{y^2}$", "$\\sqrt{y^3}$", "$\\frac{y}{2/3}$", "$y^6$"], ans:"$\\sqrt[3]{y^2}$", exp:"El denominador del exponente fraccionario dicta la raíz, el numerador la potencia: $\\sqrt[3]{y^2}$." },
  { id:248, q:"Simplifica: $2^3 \\cdot 2^2$", opts:["$2^5$", "$4^5$", "$2^6$", "$4^6$"], ans:"$2^5$", exp:"Bases iguales multiplicando, se suman exponentes: $2^{3+2} = 2^5$." },
  { id:249, q:"Simplifica: $(3^2)^3$", opts:["$3^6$", "$3^5$", "$9^3$", "$3^9$"], ans:"$3^6$", exp:"Potencia de otra potencia: se multiplican $2 \\cdot 3 = 6$. Queda $3^6$." },
  { id:250, q:"¿Cuánto es $4^{1/2}$?", opts:["$2$", "$8$", "$16$", "$\\frac{1}{2}$"], ans:"$2$", exp:"$4^{1/2} = \\sqrt{4} = 2$." },
  { id:251, q:"¿Cuánto es $8^{1/3}$?", opts:["$2$", "$24$", "$4$", "$\\frac{8}{3}$"], ans:"$2$", exp:"$8^{1/3} = \\sqrt[3]{8} = 2$." },
  { id:252, q:"Simplifica: $x^4 \\cdot x^{-1}$", opts:["$x^3$", "$x^5$", "$x^{-4}$", "$x$"], ans:"$x^3$", exp:"Sumamos exponentes: $4 + (-1) = 3$." },
  { id:253, q:"¿A qué es igual $\\sqrt{16}$?", opts:["$4$", "$8$", "$2$", "$\\frac{16}{2}$"], ans:"$4$", exp:"Buscamos el número que multiplicado por sí mismo da 16: es el 4." },
  { id:254, q:"¿A qué es igual $\\sqrt[3]{27}$?", opts:["$3$", "$9$", "$\\frac{27}{3}$", "$6$"], ans:"$3$", exp:"Buscamos el número que multiplicado 3 veces por sí mismo da 27: es el 3." },
  { id:255, q:"Simplifica: $(xy)^3$", opts:["$x^3 y^3$", "$xy^3$", "$x^3 y$", "$3xy$"], ans:"$x^3 y^3$", exp:"La potencia de un producto aplica a cada factor: $x^3 y^3$." },
  { id:256, q:"Simplifica: $(\\frac{a}{b})^2$", opts:["$\\frac{a^2}{b^2}$", "$\\frac{a}{b^2}$", "$\\frac{a^2}{b}$", "$\\frac{2a}{2b}$"], ans:"$\\frac{a^2}{b^2}$", exp:"La potencia de una fracción eleva numerador y denominador independientemente." },
  { id:257, q:"¿Cuánto es $100^{1/2}$?", opts:["$10$", "$50$", "$1000$", "$200$"], ans:"$10$", exp:"$100^{1/2} = \\sqrt{100} = 10$." },
  { id:258, q:"¿Cuánto es $16^{3/4}$?", opts:["$8$", "$12$", "$64$", "$4$"], ans:"$8$", exp:"Primero raíz cuarta de 16 (es 2), y luego elevamos al cubo: $2^3 = 8$." },
  { id:259, q:"Simplifica: $\\frac{m^5 \\cdot m}{m^3}$", opts:["$m^3$", "$m^2$", "$m^4$", "$m$"], ans:"$m^3$", exp:"Arriba queda $m^{5+1} = m^6$. Dividimos entre $m^3$: restamos $6-3 = 3$." },
  { id:260, q:"¿A qué es igual $\\frac{a^m}{a^n}$?", opts:["$a^{m-n}$", "$a^{m/n}$", "$a^{m+n}$", "$a^{n-m}$"], ans:"$a^{m-n}$", exp:"Por ley, división con la misma base conlleva a resta del exponente inferior al superior." },
  { id:261, q:"Convierte a exponente fraccionario: $\\sqrt[4]{x^3}$", opts:["$x^{3/4}$", "$x^{4/3}$", "$x^{12}$", "$x^{1/12}$"], ans:"$x^{3/4}$", exp:"El índice (4) es denominador y la potencia interior (3) es numerador: $x^{3/4}$." },
  { id:262, q:"¿Cuánto es $9^{-1/2}$?", opts:["$\\frac{1}{3}$", "$-3$", "$3$", "$-\\frac{1}{3}$"], ans:"$\\frac{1}{3}$", exp:"Negativo invierte: $\\frac{1}{9^{1/2}} = \\frac{1}{\\sqrt{9}} = \\frac{1}{3}$." },
  { id:263, q:"Simplifica: $2x^0$ (asumiendo $x \\neq 0$)", opts:["$2$", "$0$", "$2x$", "$1$"], ans:"$2$", exp:"El exponente 0 solo afecta a x. $x^0 = 1$. Así que $2 \\cdot 1 = 2$." },
  { id:264, q:"¿A qué equivale $\\sqrt{a^2 b^4}$?", opts:["$ab^2$", "$ab$", "$a^2 b^2$", "$\\frac{a}{b^2}$"], ans:"$ab^2$", exp:"Separamos la raíz: $\\sqrt{a^2} \\cdot \\sqrt{b^4} = a \\cdot b^2$." },
  { id:265, q:"Si $2^x = 8$, ¿cuánto vale $x$?", opts:["$3$", "$4$", "$2$", "$8$"], ans:"$3$", exp:"$2^3 = 8$, por lo que $x=3$." },
  { id:266, q:"Si $3^{x-1} = 9$, ¿cuánto vale $x$?", opts:["$3$", "$2$", "$4$", "$1$"], ans:"$3$", exp:"$3^2 = 9$. Entonces $x-1 = 2 \\rightarrow x=3$." },
  { id:267, q:"Simplifica: $(x^2 y^3)^4$", opts:["$x^8 y^{12}$", "$x^6 y^7$", "$x^2 y^{12}$", "$x^8 y^3$"], ans:"$x^8 y^{12}$", exp:"Multiplicamos cada exponente interno por el externo: $2 \\cdot 4 = 8$ y $3 \\cdot 4 = 12$." },
  { id:268, q:"¿Cuánto es $(-2)^3$?", opts:["$-8$", "$8$", "$-6$", "$6$"], ans:"$-8$", exp:"Número negativo a potencia impar da resultado negativo: $(-2)(-2)(-2) = -8$." },
  { id:269, q:"¿Cuánto es $(-3)^2$?", opts:["$9$", "$-9$", "$6$", "$-6$"], ans:"$9$", exp:"Número negativo a potencia par da positivo: $(-3)(-3) = 9$." },
  { id:270, q:"Simplifica: $x^{1/2} \\cdot x^{1/2}$", opts:["$x$", "$x^2$", "$x^{1/4}$", "$1$"], ans:"$x$", exp:"Sumamos exponentes: $1/2 + 1/2 = 1$. Queda $x^1 = x$." },

  // ── BLOQUE 10: Simplificación con signos de agrupación (271–300) ───────────
  { id:271, q:"Simplifica: $3 + (5 - 2)$", opts:["$6$", "$10$", "$0$", "$4$"], ans:"$6$", exp:"Paréntesis primero: $5-2=3$. Luego $3+3=6$." },
  { id:272, q:"Simplifica: $8 - (4 + 1)$", opts:["$3$", "$5$", "$9$", "$11$"], ans:"$3$", exp:"Paréntesis primero: $4+1=5$. Luego $8-5=3$." },
  { id:273, q:"Simplifica: $2 \\cdot (3 + 4)$", opts:["$14$", "$10$", "$24$", "$11$"], ans:"$14$", exp:"$3+4=7$. Multiplicamos por 2 y da 14." },
  { id:274, q:"Simplifica: $10 - 2 \\cdot (3 + 1)$", opts:["$2$", "$32$", "$8$", "$16$"], ans:"$2$", exp:"Paréntesis: $3+1=4$. Multiplicación: $2 \\cdot 4 = 8$. Resta: $10-8=2$." },
  { id:275, q:"Simplifica: $\\frac{8 - 2}{3}$", opts:["$2$", "$4$", "$6$", "$\\frac{10}{3}$"], ans:"$2$", exp:"Numerador: $8-2=6$. Fracción: $6/3=2$." },
  { id:276, q:"Simplifica: $5 + [ 3 - (1 + 1) ]$", opts:["$6$", "$7$", "$5$", "$4$"], ans:"$6$", exp:"Paréntesis: $1+1=2$. Corchetes: $3-2=1$. Exterior: $5+1=6$." },
  { id:277, q:"Simplifica: $\\frac{12}{2 + 4}$", opts:["$2$", "$10$", "$8$", "$6$"], ans:"$2$", exp:"Denominador: $2+4=6$. División: $12/6=2$." },
  { id:278, q:"Simplifica: $-( -5 + 2 )$", opts:["$3$", "$-3$", "$7$", "$-7$"], ans:"$3$", exp:"Interior: $-5+2=-3$. Menos exterior lo cambia: $-(-3) = 3$." },
  { id:279, q:"Simplifica: $4 \\cdot [ 2 + ( 5 - 3 ) ]$", opts:["$16$", "$24$", "$12$", "$20$"], ans:"$16$", exp:"Paréntesis $5-3=2$. Corchetes: $2+2=4$. Producto: $4 \\cdot 4 = 16$." },
  { id:280, q:"Simplifica: $15 - \\{ 2 + [ 3 + (4 - 1) ] \\}$", opts:["$7$", "$11$", "$9$", "$5$"], ans:"$7$", exp:"Paréntesis: 3. Corchete: $3+3=6$. Llave: $2+6=8$. Final: $15-8=7$." },
  { id:281, q:"Simplifica algebraicamente: $a + (b - a)$", opts:["$b$", "$2a + b$", "$-b$", "$a - b$"], ans:"$b$", exp:"Quitamos el paréntesis porque lo precede un $+$. $a + b - a = b$." },
  { id:282, q:"Simplifica algebraicamente: $2x - (x + y)$", opts:["$x - y$", "$x + y$", "$3x - y$", "$y - x$"], ans:"$x - y$", exp:"El signo menos afecta a todo dentro: $2x - x - y = x - y$." },
  { id:283, q:"Simplifica: $3a - [ 2a + ( a - b ) ]$", opts:["$b$", "$a - b$", "$-b$", "$6a - b$"], ans:"$b$", exp:"Corchete: $2a + a - b = 3a - b$. Afuera: $3a - (3a - b) = 3a - 3a + b = b$." },
  { id:284, q:"Simplifica: $x - \\{ y - ( x - y ) \\}$", opts:["$2x - 2y$", "$2y$", "$0$", "$x - 2y$"], ans:"$2x - 2y$", exp:"Llave interior: $y - x + y = 2y - x$. Afuera: $x - (2y - x) = 2x - 2y$." },
  { id:285, q:"Calcula: $(2^2 + 3) \\cdot 2$", opts:["$14$", "$10$", "$20$", "$24$"], ans:"$14$", exp:"Exponente: $4$. Paréntesis: $4+3=7$. Producto: $7 \\cdot 2 = 14$." },
  { id:286, q:"Calcula: $20 - 2 \\cdot 3^2$", opts:["$2$", "$162$", "$14$", "$26$"], ans:"$2$", exp:"Exponente: $9$. Producto: $2 \\cdot 9 = 18$. Resta: $20 - 18 = 2$." },
  { id:287, q:"Calcula: \\frac{(5 - 3)^3}{2}", opts:["$4$", "$2$", "$8$", "$1$"], ans:"$4$", exp:"Paréntesis: $2$. Cubo: $2^3 = 8$. División: $8/2 = 4$." },
  { id:288, q:"Simplifica: $2x \\cdot ( 3x - x )$", opts:["$4x^2$", "$6x^2 - x$", "$2x^2$", "$5x$"], ans:"$4x^2$", exp:"Paréntesis: $3x - x = 2x$. Multiplicamos $2x \\cdot 2x = 4x^2$." },
  { id:289, q:"Simplifica: $-2 \\cdot ( x - 3 )$", opts:["$-2x + 6$", "$-2x - 6$", "$2x - 6$", "$-2x - 3$"], ans:"$-2x + 6$", exp:"Propiedad distributiva. $-2 \\cdot x = -2x$ y $-2 \\cdot (-3) = +6$." },
  { id:290, q:"Calcula: $\\sqrt{16} + (3 - 1)^2$", opts:["$8$", "$10$", "$6$", "$12$"], ans:"$8$", exp:"Raíz: $4$. Paréntesis y cuadrado: $2^2 = 4$. Suma: $4+4=8$." },
  { id:291, q:"Simplifica: $5a - 3 \\cdot (a - 2)$", opts:["$2a + 6$", "$2a - 6$", "$8a - 6$", "$2a - 2$"], ans:"$2a + 6$", exp:"Distribuimos el $-3$: $-3a + 6$. Juntamos: $5a - 3a + 6 = 2a + 6$." },
  { id:292, q:"Calcula: $10 + [ 4 \\cdot ( 5 - 2 ) ]$", opts:["$22$", "$42$", "$14$", "$30$"], ans:"$22$", exp:"Paréntesis: 3. Corchete (producto): $4 \\cdot 3 = 12$. Suma: $10+12=22$." },
  { id:293, q:"Simplifica: $4 - \\{ 2 - [ 3 - ( 1 - 2 ) ] \\}$", opts:["$6$", "$2$", "$0$", "$4$"], ans:"$6$", exp:"Par.: $-1$. Corchete: $3-(-1)=4$. Llave: $2-4=-2$. Exterior: $4-(-2)=6$." },
  { id:294, q:"Calcula: $\\frac{3 \\cdot 4 - 2}{5}$", opts:["$2$", "$\\frac{10}{5}$", "$10$", "$4$"], ans:"$2$", exp:"Numerador: primero el producto $12 - 2 = 10$. Luego $10/5 = 2$." },
  { id:295, q:"Simplifica: $x + y - ( x - y )$", opts:["$2y$", "$2x$", "$0$", "$x + 2y$"], ans:"$2y$", exp:"Cambiamos signos de adentro: $x + y - x + y$. Cancelamos $x$ y nos da $2y$." },
  { id:296, q:"Calcula: $[ ( \\frac{8}{2} ) + 1 ] \\cdot 3$", opts:["$15$", "$12$", "$9$", "$27$"], ans:"$15$", exp:"División: 4. Corchete: $4+1=5$. Exterior: $5 \\cdot 3 = 15$." },
  { id:297, q:"Simplifica: $3 \\cdot (2m - n) - 2 \\cdot (m + 2n)$", opts:["$4m - 7n$", "$4m - 3n$", "$8m + n$", "$4m - n$"], ans:"$4m - 7n$", exp:"$6m - 3n - 2m - 4n$. Agrupamos términos semejantes: $4m - 7n$." },
  { id:298, q:"Calcula: $25 - ( 2^3 + 4 )$", opts:["$13$", "$17$", "$9$", "$21$"], ans:"$13$", exp:"Potencia: 8. Paréntesis: $8+4=12$. Resta final: $25-12=13$." },
  { id:299, q:"Simplifica: $- [ - ( - x ) ]$", opts:["$-x$", "$x$", "$0$", "$-1$"], ans:"$-x$", exp:"Contamos los signos negativos: 3. Menos por menos por menos es menos. $-x$." },
  { id:300, q:"Calcula: $( \\sqrt{25} - 2 ) \\cdot ( 3^2 - 5 )$", opts:["$12$", "$16$", "$9$", "$15$"], ans:"$12$", exp:"Par. izquierdo: $5-2=3$. Par. derecho: $9-5=4$. Producto: $3 \\cdot 4 = 12$." },
];

// ─── NIVELES Y BLOQUES ────────────────────────────────────────────────────
const LEVELS = [
  { label:"Suma y Resta",       range:[1, 30],     color:C.blue },
  { label:"Producto",           range:[31, 60],    color:C.teal },
  { label:"División",           range:[61, 90],    color:C.purple },
  { label:"Problemas Fracciones", range:[91, 120], color:C.gold },
  { label:"Dec. a Frac. y vice", range:[121, 150], color:C.orange },
  { label:"Dec. a Porc. y vice", range:[151, 180], color:C.crimson },
  { label:"Problemas Porc.",     range:[181, 210], color:C.blue },
  { label:"Proporcionalidad",    range:[211, 240], color:C.teal },
  { label:"Leyes Exponentes",    range:[241, 270], color:C.purple },
  { label:"Signos Agrupación",   range:[271, 300], color:C.gold },
];

function getLvl(id){
  return LEVELS.find(l => id >= l.range[0] && id <= l.range[1]) || LEVELS[0];
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fmt(s) {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) return `${h}:${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function RacionalesPrepa() {
  const [mode, setMode] = useState("menu"); 
  const [examMode, setExamMode] = useState(""); 
  const [queue, setQueue] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const [selected, setSelected] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [filter, setFilter] = useState("all"); 

  const [katexLoaded, setKatexLoaded] = useState(false);

  // Cargar KaTeX dinámicamente
  useEffect(() => {
    if (!document.getElementById("katex-css")) {
      const link = document.createElement("link");
      link.id = "katex-css";
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css";
      document.head.appendChild(link);
    }
    if (!document.getElementById("katex-js")) {
      const script = document.createElement("script");
      script.id = "katex-js";
      script.src = "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js";
      script.onload = () => setKatexLoaded(true);
      document.head.appendChild(script);
    } else {
      setKatexLoaded(true);
    }
  }, []);

  // Función para parsear $...$ y renderizarlos con KaTeX
  const renderMathText = (txt) => {
    if (!katexLoaded || !window.katex || typeof txt !== 'string') return txt;
    
    const parts = txt.split(/(\$.*?\$)/g);
    return parts.map((part, i) => {
      if (part.startsWith('$') && part.endsWith('$')) {
        const math = part.slice(1, -1);
        try {
          return <span key={i} dangerouslySetInnerHTML={{ __html: window.katex.renderToString(math, { throwOnError: false }) }} />;
        } catch (e) {
          return <span key={i}>{part}</span>;
        }
      }
      return <span key={i}>{part}</span>;
    });
  };

  useEffect(() => {
    let interval;
    if (timerOn && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0 && timerOn) {
      setTimerOn(false);
      setMode("results");
    }
    return () => clearInterval(interval);
  }, [timerOn, timeLeft]);

  const startExam = (modeKey) => {
    let qList = [];
    if (modeKey === "full") {
      qList = [...questions];
    } else if (modeKey.startsWith("block-")) {
      const idx = parseInt(modeKey.split("-")[1], 10);
      const lv = LEVELS[idx];
      qList = questions.filter(q => q.id >= lv.range[0] && q.id <= lv.range[1]);
    }
    if (qList.length === 0) {
      alert("Este bloque aún no tiene preguntas generadas.");
      return;
    }

    const prepared = qList.map(q => ({
      ...q,
      opts: shuffle(q.opts)
    }));

    setQueue(shuffle(prepared));
    setCurrent(0);
    setAnswers({});
    setSelected(null);
    setConfirmed(false);
    setTimeLeft(prepared.length * 60); 
    setTimerOn(true);
    setExamMode(modeKey);
    setMode("exam");
  };

  const confirmAnswer = () => {
    if (!selected) return;
    setAnswers(p => ({ ...p, [queue[current].id]: selected }));
    setConfirmed(true);
  };

  const goNext = () => {
    if (current < queue.length - 1) {
      const nextId = queue[current + 1].id;
      setCurrent(c => c + 1);
      setSelected(answers[nextId] || null);
      setConfirmed(!!answers[nextId]);
    } else {
      setTimerOn(false);
      setMode("results");
    }
  };

  const goPrev = () => {
    if (current > 0) {
      const prevId = queue[current - 1].id;
      setCurrent(c => c - 1);
      setSelected(answers[prevId] || null);
      setConfirmed(!!answers[prevId]);
    }
  };

  const score = Object.entries(answers).reduce((acc, [id, ans]) => {
    const q = questions.find(q => q.id === Number(id));
    return acc + (q?.ans === ans ? 1 : 0);
  }, 0);

  const timerWarning = timeLeft < 600; 

  if (mode === "menu") return (
    <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:64 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:5px;background:${C.bg}}
        ::-webkit-scrollbar-thumb{background:${C.border};border-radius:99px}
        .katex { font-size: 1.1em; }
      `}</style>
      
      <div style={{ background:C.surface, borderBottom:`1px solid ${C.border}`, padding:"44px 24px 32px", textAlign:"center", position:"relative" }}>
        <h1 style={{ color:C.text, fontSize:28, fontWeight:800, letterSpacing:"-0.5px", marginBottom:12, fontFamily:"'DM Sans',sans-serif" }}>
          Números Racionales
        </h1>
        <p style={{ color:C.muted, fontSize:15, maxWidth:500, margin:"0 auto", lineHeight:1.5, fontFamily:"'DM Sans',sans-serif" }}>
          Simulador EXANI-II / UNAM. Elige un modo para comenzar.
        </p>
      </div>

      <div style={{ maxWidth:800, margin:"0 auto", padding:"32px 24px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:16, marginBottom:40 }}>
          <button 
            onClick={() => startExam("full")}
            style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:14, padding:"22px 16px", cursor:"pointer", textAlign:"center", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.background = C.blue+"11"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surface; }}
          >
            <div style={{ fontSize:28, marginBottom:8 }}>🚀</div>
            <div style={{ color:C.text, fontWeight:700, fontSize:15 }}>Simulador Completo</div>
            <div style={{ color:C.muted, fontSize:12, marginTop:4 }}>Todas las preguntas disponibles ({questions.length})</div>
          </button>
        </div>

        <p style={{ color:C.muted, fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", marginBottom:12, fontFamily:"'DM Sans',sans-serif" }}>
          O elige un bloque específico
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px,1fr))", gap:10 }}>
          {LEVELS.map((lv, i) => (
            <button key={i} onClick={() => startExam(`block-${i}`)} style={{
              background:C.surface, border:`1px solid ${lv.color}44`, borderRadius:12, padding:"14px 12px", cursor:"pointer", textAlign:"center", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif"
            }}
            onMouseEnter={e => { e.currentTarget.style.background = lv.color+"18"; e.currentTarget.style.borderColor = lv.color; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.surface; e.currentTarget.style.borderColor = lv.color+"44"; }}
            >
              <div style={{ color:lv.color, fontWeight:700, fontSize:13 }}>{lv.label}</div>
              <div style={{ color:C.muted, fontSize:11, marginTop:3 }}>
                {lv.range[1] - lv.range[0] + 1} preguntas
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  if (mode === "results") {
    const total = queue.length;
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    const col = pct >= 80 ? C.teal : pct >= 60 ? C.gold : C.crimson;
    
    let displayQs = queue;
    if (filter === "correct") displayQs = queue.filter(q => answers[q.id] === q.ans);
    if (filter === "wrong") displayQs = queue.filter(q => answers[q.id] !== q.ans);

    return (
      <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:64 }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:5px;background:${C.bg}}::-webkit-scrollbar-thumb{background:${C.border};border-radius:99px}`}</style>
        
        <div style={{ maxWidth:760, margin:"0 auto", padding:"24px 16px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:32 }}>
            <h2 style={{ color:C.text, fontSize:22, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>Resultados</h2>
            <button onClick={() => setMode("menu")} style={{ background:C.surface, border:`1px solid ${C.border}`, color:C.text, padding:"8px 16px", borderRadius:8, cursor:"pointer", fontSize:13, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>
              Volver al inicio
            </button>
          </div>

          <div style={{ background:C.surface, border:`2px solid ${col}`, borderRadius:18, padding:"30px 36px", textAlign:"center", maxWidth:380, margin:"0 auto 32px", fontFamily:"'DM Sans',sans-serif" }}>
            <div style={{ fontSize:58, fontWeight:900, color:col, letterSpacing:"-3px", lineHeight:1 }}>{pct}%</div>
            <div style={{ color:C.dim, fontSize:14, marginTop:8 }}>
              <span style={{ color:C.text, fontWeight:700 }}>{score}</span> de {total} correctas
            </div>
          </div>

          <div style={{ display:"flex", gap:8, marginBottom:20, flexWrap:"wrap" }}>
            {[["all","Todas"],["correct",`✓ Correctas (${score})`],["wrong",`✗ Incorrectas (${total - score})`]].map(([f, label]) => (
              <button key={f} onClick={() => setFilter(f)} style={{ padding:"6px 14px", borderRadius:99, fontSize:12, fontWeight:700, cursor:"pointer", border:"none", background:filter === f ? C.blue : C.surface, color:filter === f ? "#fff" : C.muted, fontFamily:"'DM Sans',sans-serif" }}>
                {label}
              </button>
            ))}
          </div>

          {displayQs.map((q, i) => {
            const lv = getLvl(q.id);
            const userAns = answers[q.id];
            return (
              <div key={q.id} style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:16, padding:20, marginBottom:16 }}>
                <div style={{ display:"flex", alignItems:"center", marginBottom:12 }}>
                  <span style={{ background:lv.color+"22", color:lv.color, padding:"3px 8px", borderRadius:6, fontSize:11, fontWeight:700 }}>{lv.label}</span>
                  <span style={{ marginLeft:"auto", color:C.muted, fontSize:12 }}>#{q.id}</span>
                </div>
                <p style={{ color:C.text, fontSize:15, fontWeight:600, marginBottom:12 }}>{renderMathText(q.q)}</p>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:6 }}>
                  {q.opts.map(opt => {
                    const isOk = opt === q.ans;
                    const isUser = opt === userAns;
                    let bg = C.bg, bd = `1px solid ${C.border}`, co = C.dim;
                    
                    if (isOk) { bg=C.teal+"22"; bd=`1px solid ${C.teal}`; co=C.teal; }
                    else if (isUser && !isOk) { bg=C.crimson+"22"; bd=`1px solid ${C.crimson}`; co=C.crimson; }
                    
                    return (
                      <div key={opt} style={{ background:bg, border:bd, color:co, borderRadius:9, padding:"8px 12px", fontSize:13, fontWeight:600 }}>
                        {isOk?"✓ ":""}{isUser&&!isOk?"✗ ":""}{renderMathText(opt)}
                      </div>
                    );
                  })}
                </div>
                
                {/* Explicación en el panel de resultados */}
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${C.border}` }}>
                  <p style={{ color: C.blue, fontSize: 12, fontWeight: 700, marginBottom: 4 }}>EXPLICACIÓN:</p>
                  <p style={{ color: C.dim, fontSize: 14, lineHeight: 1.4 }}>{renderMathText(q.exp)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const q = queue[current];
  const lv = getLvl(q.id);
  const prog = ((current + 1) / queue.length) * 100;

  return (
    <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:64 }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:5px;background:${C.bg}}::-webkit-scrollbar-thumb{background:${C.border};border-radius:99px}`}</style>
      
      <div style={{ maxWidth:760, margin:"0 auto", padding:"24px 16px" }}>
        
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
          <button onClick={() => { setTimerOn(false); setMode("menu"); }} style={{ background:"none", border:"none", color:C.muted, cursor:"pointer", fontSize:14, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>
            ✕ Salir
          </button>
          <div style={{ color:timerWarning ? C.crimson : C.text, fontWeight:700, fontSize:16, fontFamily:"'DM Sans',sans-serif", display:"flex", alignItems:"center", gap:6 }}>
            <span style={{ fontSize:18 }}>⏱</span> {fmt(timeLeft)}
          </div>
          <button onClick={() => { setTimerOn(false); setMode("results"); }} style={{ background:C.surface, border:`1px solid ${C.border}`, color:C.text, padding:"6px 14px", borderRadius:8, cursor:"pointer", fontSize:13, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>
            Finalizar
          </button>
        </div>

        <div style={{ background:C.surface, height:6, borderRadius:99, overflow:"hidden", marginBottom:24 }}>
          <div style={{ width:`${prog}%`, background:lv.color, height:"100%", transition:"all 0.3s ease" }} />
        </div>

        <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:20, padding:"32px 24px" }}>
          <div style={{ display:"flex", alignItems:"center", marginBottom:20 }}>
            <span style={{ background:lv.color+"22", color:lv.color, padding:"4px 10px", borderRadius:6, fontSize:12, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>
              {lv.label}
            </span>
            <span style={{ marginLeft:"auto", color:C.muted, fontSize:12, fontFamily:"'DM Sans',sans-serif" }}>
              Pregunta {current + 1} de {queue.length}
            </span>
          </div>

          <p style={{ color:C.text, fontSize:18, fontWeight:600, marginBottom:24, lineHeight:1.5, fontFamily:"'DM Sans',sans-serif" }}>
            {renderMathText(q.q)}
          </p>

          <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:24 }}>
            {q.opts.map(opt => {
              const isSel = selected === opt;
              const isOk = opt === q.ans;
              let bg = C.bg, bd = `1px solid ${C.border}`, co = C.dim;

              if (confirmed && isSel && !isOk) { bg = C.crimson+"22"; bd = `1px solid ${C.crimson}`; co = C.crimson; }
              else if (confirmed && isOk) { bg = C.teal+"0e"; bd = `1px solid ${C.teal}55`; co = C.teal+"99"; }
              else if (isSel) { bg = lv.color+"18"; bd = `1px solid ${lv.color}`; co = lv.color; }

              return (
                <button key={opt} onClick={() => !confirmed && setSelected(opt)} style={{ background:bg, border:bd, color:co, borderRadius:12, padding:"14px 18px", fontSize:15, fontWeight:600, cursor:confirmed ? "default" : "pointer", textAlign:"left", transition:"all 0.15s", fontFamily:"'DM Sans',sans-serif" }}>
                  {confirmed && isOk ? "✓ " : ""}{confirmed && isSel && !isOk ? "✗ " : ""}{renderMathText(opt)}
                </button>
              );
            })}
          </div>

          {/* Mostrar la explicación interactiva durante el examen una vez contestado */}
          {confirmed && (
            <div style={{ 
              marginBottom: 24, padding: 18, background: C.bg, 
              border: `1px solid ${selected === q.ans ? C.teal : C.crimson}55`, 
              borderRadius: 12 
            }}>
              <p style={{ color: C.dim, fontSize: 13, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>
                EXPLICACIÓN
              </p>
              <p style={{ color: C.text, fontSize: 15, lineHeight: 1.5 }}>
                {renderMathText(q.exp)}
              </p>
            </div>
          )}

          <div style={{ display:"flex", gap:12 }}>
            <button onClick={goPrev} disabled={current === 0} style={{ flex:1, padding:"14px", background:C.surface, color:C.text, border:`1px solid ${C.border}`, borderRadius:12, cursor:current === 0 ? "not-allowed" : "pointer", opacity:current === 0 ? 0.4 : 1, fontSize:14, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>
              ← Anterior
            </button>
            {!confirmed ? (
              <button onClick={confirmAnswer} disabled={!selected} style={{ flex:2, padding:"14px", background:selected ? C.blue : C.surface, color:selected ? "#fff" : C.muted, border:selected ? "none" : `1px solid ${C.border}`, borderRadius:12, cursor:selected ? "pointer" : "not-allowed", fontSize:14, fontWeight:700, transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif" }}>
                Confirmar
              </button>
            ) : (
              <button onClick={goNext} style={{ flex:2, padding:"14px", background:C.text, color:C.bg, border:"none", borderRadius:12, cursor:"pointer", fontSize:14, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>
                {current === queue.length - 1 ? "Ver resultados" : "Siguiente →"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}