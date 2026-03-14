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
  // ── BLOQUE 1: Suma y resta de expresiones algebraicas (1–30) ───────────────
  { id:1,  q:"Simplifica: $x + x$", opts:["$2x$", "$x^2$", "$1$", "$0$"], ans:"$2x$", exp:"Términos semejantes se suman: $1x + 1x = 2x$." },
  { id:2,  q:"Simplifica: $2x + 3x$", opts:["$5x$", "$6x$", "$5x^2$", "$6x^2$"], ans:"$5x$", exp:"Suma de coeficientes: $2 + 3 = 5$." },
  { id:3,  q:"Simplifica: $5a - 2a$", opts:["$3a$", "$7a$", "$3$", "$-3a$"], ans:"$3a$", exp:"Resta de coeficientes: $5 - 2 = 3$." },
  { id:4,  q:"Simplifica: $-4y - 3y$", opts:["$-7y$", "$7y$", "$-12y$", "$-y$"], ans:"$-7y$", exp:"Signos iguales se suman y conservan el signo: $-7y$." },
  { id:5,  q:"Simplifica: $3x^2 + 4x^2$", opts:["$7x^2$", "$12x^2$", "$7x^4$", "$12x^4$"], ans:"$7x^2$", exp:"Se suman coeficientes, el exponente no cambia." },
  { id:6,  q:"Simplifica: $x + y + 2x$", opts:["$3x + y$", "$2x + y$", "$3xy$", "$x + 2y$"], ans:"$3x + y$", exp:"Solo se suman los términos con $x$: $1x+2x = 3x$." },
  { id:7,  q:"Simplifica: $4ab - 2ab + ab$", opts:["$3ab$", "$2ab$", "$5ab$", "$ab$"], ans:"$3ab$", exp:"$4 - 2 + 1 = 3$." },
  { id:8,  q:"Simplifica: $(x + 2) + (x + 3)$", opts:["$2x + 5$", "$x^2 + 5$", "$2x + 6$", "$5x$"], ans:"$2x + 5$", exp:"$x+x=2x$, y $2+3=5$." },
  { id:9,  q:"Simplifica: $(2a - 1) + (3a + 4)$", opts:["$5a + 3$", "$5a - 3$", "$6a + 3$", "$5a + 5$"], ans:"$5a + 3$", exp:"$2a+3a=5a$, y $-1+4=3$." },
  { id:10, q:"Simplifica: $(5x + y) - (2x + y)$", opts:["$3x$", "$7x + 2y$", "$3x + 2y$", "$3x - 2y$"], ans:"$3x$", exp:"El signo negativo afecta al segundo binomio: $5x+y-2x-y = 3x$." },
  { id:11, q:"Simplifica: $m - (m - n)$", opts:["$n$", "$-n$", "$2m - n$", "$2m + n$"], ans:"$n$", exp:"$m - m + n = n$." },
  { id:12, q:"Simplifica: $3x - (x + 2)$", opts:["$2x - 2$", "$2x + 2$", "$4x - 2$", "$4x + 2$"], ans:"$2x - 2$", exp:"$3x - x - 2 = 2x - 2$." },
  { id:13, q:"Simplifica: $x^2 + 3x - 2x^2 + x$", opts:["$-x^2 + 4x$", "$3x^2 + 4x$", "$-x^2 + 3x$", "$x^2 + 4x$"], ans:"$-x^2 + 4x$", exp:"$x^2-2x^2 = -x^2$, y $3x+x=4x$." },
  { id:14, q:"Simplifica: $-(a + b) + (a - b)$", opts:["$-2b$", "$0$", "$2a$", "$-2a$"], ans:"$-2b$", exp:"$-a - b + a - b = -2b$." },
  { id:15, q:"Simplifica: $0.5x + 1.5x$", opts:["$2x$", "$2.5x$", "$x$", "$2x^2$"], ans:"$2x$", exp:"$0.5 + 1.5 = 2.0$." },
  { id:16, q:"Simplifica: $\\frac{1}{2}x + \\frac{1}{2}x$", opts:["$x$", "$\\frac{1}{4}x$", "$2x$", "$\\frac{1}{2}x^2$"], ans:"$x$", exp:"$\\frac{1}{2} + \\frac{1}{2} = 1$." },
  { id:17, q:"Simplifica: $(x^3 - x) + (2x^3 + 3x)$", opts:["$3x^3 + 2x$", "$3x^3 - 4x$", "$2x^3 + 2x$", "$x^3 + 2x$"], ans:"$3x^3 + 2x$", exp:"$x^3+2x^3 = 3x^3$, $-x+3x = 2x$." },
  { id:18, q:"Resta $2x$ de $5x$.", opts:["$3x$", "$-3x$", "$7x$", "$-7x$"], ans:"$3x$", exp:"La operación es $5x - 2x = 3x$." },
  { id:19, q:"Resta $-3y$ de $4y$.", opts:["$7y$", "$y$", "$-7y$", "$-y$"], ans:"$7y$", exp:"$4y - (-3y) = 4y + 3y = 7y$." },
  { id:20, q:"Suma $a-b$ y $b-a$.", opts:["$0$", "$2a-2b$", "$2b-2a$", "$a+b$"], ans:"$0$", exp:"$(a-b)+(b-a) = a-a -b+b = 0$." },
  { id:21, q:"Simplifica: $2(x+1) + 3(x-1)$", opts:["$5x - 1$", "$5x + 1$", "$5x + 5$", "$6x - 1$"], ans:"$5x - 1$", exp:"$2x+2+3x-3 = 5x-1$." },
  { id:22, q:"Simplifica: $- (2x - 3) - (x + 4)$", opts:["$-3x - 1$", "$-3x + 1$", "$3x - 1$", "$-x - 1$"], ans:"$-3x - 1$", exp:"$-2x+3-x-4 = -3x-1$." },
  { id:23, q:"Simplifica: $5xy - 2yx + xy$", opts:["$4xy$", "$3xy$", "$8xy$", "$4x^2y^2$"], ans:"$4xy$", exp:"$xy$ y $yx$ son semejantes: $5-2+1=4$." },
  { id:24, q:"Si $P=x+2$ y $Q=x-2$, halla $P-Q$.", opts:["$4$", "$2x$", "$-4$", "$0$"], ans:"$4$", exp:"$(x+2) - (x-2) = x+2-x+2 = 4$." },
  { id:25, q:"Simplifica: $x^2 y + 2x^2 y - 3xy^2$", opts:["$3x^2 y - 3xy^2$", "$0$", "$6x^2 y$", "$-3x^2 y$"], ans:"$3x^2 y - 3xy^2$", exp:"Solo se suman los $x^2 y$." },
  { id:26, q:"Simplifica: $a^2 - (a^2 - 1)$", opts:["$1$", "$-1$", "$2a^2 - 1$", "$0$"], ans:"$1$", exp:"$a^2 - a^2 + 1 = 1$." },
  { id:27, q:"¿Cuál es el inverso aditivo de $2x - 5$?", opts:["$-2x + 5$", "$2x + 5$", "$-2x - 5$", "$\\frac{1}{2x-5}$"], ans:"$-2x + 5$", exp:"Se cambia el signo a toda la expresión." },
  { id:28, q:"Resta $x^2 + x$ de $x^2 - x$.", opts:["$-2x$", "$2x$", "$0$", "$-2x^2$"], ans:"$-2x$", exp:"$(x^2 - x) - (x^2 + x) = -2x$." },
  { id:29, q:"Simplifica: $4m - [2m + (m - 1)]$", opts:["$m + 1$", "$m - 1$", "$3m + 1$", "$7m - 1$"], ans:"$m + 1$", exp:"$4m - [3m - 1] = 4m - 3m + 1 = m + 1$." },
  { id:30, q:"Si $A = 2x$ y $B = -2x$, halla $A+B$.", opts:["$0$", "$4x$", "$-4x$", "$x$"], ans:"$0$", exp:"$2x + (-2x) = 0$." },

  // ── BLOQUE 2: Producto y división de expresiones algebraicas (31–60) ───────
  { id:31, q:"Simplifica: $x \\cdot x$", opts:["$x^2$", "$2x$", "$x$", "$1$"], ans:"$x^2$", exp:"Bases iguales multiplicándose suman exponentes: $1+1=2$." },
  { id:32, q:"Simplifica: $(2x)(3x)$", opts:["$6x^2$", "$5x^2$", "$6x$", "$5x$"], ans:"$6x^2$", exp:"$2 \\cdot 3 = 6$, y $x \\cdot x = x^2$." },
  { id:33, q:"Simplifica: $(-4a)(2a^2)$", opts:["$-8a^3$", "$8a^3$", "$-2a^3$", "$-8a^2$"], ans:"$-8a^3$", exp:"$-4 \\cdot 2 = -8$, y $a^1 \\cdot a^2 = a^3$." },
  { id:34, q:"Simplifica: $x(x + 2)$", opts:["$x^2 + 2x$", "$x^2 + 2$", "$2x^2$", "$3x$"], ans:"$x^2 + 2x$", exp:"Distributiva: $x \\cdot x + x \\cdot 2$." },
  { id:35, q:"Simplifica: $-2(x - 3)$", opts:["$-2x + 6$", "$-2x - 6$", "$-2x - 3$", "$2x - 6$"], ans:"$-2x + 6$", exp:"Distributiva: $-2 \\cdot x$ y $-2 \\cdot (-3) = +6$." },
  { id:36, q:"Simplifica: $(x + 1)(x + 2)$", opts:["$x^2 + 3x + 2$", "$x^2 + 2$", "$x^2 + 3x + 3$", "$2x + 3$"], ans:"$x^2 + 3x + 2$", exp:"$x^2 + 2x + x + 2 = x^2 + 3x + 2$." },
  { id:37, q:"Simplifica: $(2x)(-3xy)$", opts:["$-6x^2 y$", "$6x^2 y$", "$-5x^2 y$", "$-6xy$"], ans:"$-6x^2 y$", exp:"Coeficientes: $-6$. Exponentes de x: $1+1=2$." },
  { id:38, q:"Divide: $\\frac{x^3}{x}$", opts:["$x^2$", "$x^4$", "$x$", "$1$"], ans:"$x^2$", exp:"Se restan exponentes: $3 - 1 = 2$." },
  { id:39, q:"Divide: $\\frac{6x^2}{2x}$", opts:["$3x$", "$3x^2$", "$4x$", "$12x^3$"], ans:"$3x$", exp:"$6/2=3$, $x^2/x = x$." },
  { id:40, q:"Divide: $\\frac{-10a^4}{5a^2}$", opts:["$-2a^2$", "$2a^2$", "$-5a^2$", "$-2a^6$"], ans:"$-2a^2$", exp:"$-10/5 = -2$, $a^4/a^2 = a^2$." },
  { id:41, q:"Simplifica: $\\frac{8x^3 y^2}{4xy}$", opts:["$2x^2 y$", "$2x^3 y$", "$4x^2 y$", "$2xy$"], ans:"$2x^2 y$", exp:"$8/4=2$, $x^{3-1}=x^2$, $y^{2-1}=y$." },
  { id:42, q:"Simplifica: $3x(x^2 - 2x + 1)$", opts:["$3x^3 - 6x^2 + 3x$", "$3x^3 - 2x + 1$", "$3x^3 - 6x + 3$", "$x^3 - 6x^2 + 3x$"], ans:"$3x^3 - 6x^2 + 3x$", exp:"El $3x$ multiplica a cada término interno." },
  { id:43, q:"Divide: $\\frac{x^2 y + xy^2}{xy}$", opts:["$x + y$", "$xy$", "$x^2 + y^2$", "$1 + 1$"], ans:"$x + y$", exp:"Se divide cada término: $x^2y/xy = x$, $xy^2/xy = y$." },
  { id:44, q:"Simplifica: $(a - 2)(a - 3)$", opts:["$a^2 - 5a + 6$", "$a^2 - a - 6$", "$a^2 + 6$", "$a^2 - 5a - 6$"], ans:"$a^2 - 5a + 6$", exp:"$a^2 - 3a - 2a + 6 = a^2 - 5a + 6$." },
  { id:45, q:"Divide: $\\frac{12m^5}{-3m^2}$", opts:["$-4m^3$", "$4m^3$", "$-4m^7$", "$-9m^3$"], ans:"$-4m^3$", exp:"$12 / -3 = -4$. $m^5 / m^2 = m^3$." },
  { id:46, q:"Simplifica: $(-x)(-y)(-z)$", opts:["$-xyz$", "$xyz$", "$-x-y-z$", "$x+y+z$"], ans:"$-xyz$", exp:"Tres negativos multiplicados dan negativo." },
  { id:47, q:"Halla el área de un rectángulo de base $2x$ y altura $3x$.", opts:["$6x^2$", "$5x$", "$6x$", "$5x^2$"], ans:"$6x^2$", exp:"Área = base por altura = $(2x)(3x) = 6x^2$." },
  { id:48, q:"Divide: $\\frac{4x^2 - 2x}{2x}$", opts:["$2x - 1$", "$2x$", "$2x - 2x$", "$4x - 1$"], ans:"$2x - 1$", exp:"$4x^2/2x = 2x$, y $-2x/2x = -1$." },
  { id:49, q:"Simplifica: $(x^2)(x^3)(x^4)$", opts:["$x^9$", "$x^{24}$", "$3x^9$", "$x^7$"], ans:"$x^9$", exp:"Se suman exponentes: $2+3+4=9$." },
  { id:50, q:"Si $x \\neq 0$, ¿cuánto es $\\frac{5x^0}{x^0}$?", opts:["$5$", "$1$", "$0$", "$5x$"], ans:"$5$", exp:"$x^0=1$, entonces $5(1)/1 = 5$." },
  { id:51, q:"Simplifica: $(x + y)(x^2 - xy + y^2)$", opts:["$x^3 + y^3$", "$x^3 - y^3$", "$x^3 + 3x^2y + y^3$", "$x^2 - y^2$"], ans:"$x^3 + y^3$", exp:"Es el desarrollo estándar de la suma de cubos." },
  { id:52, q:"Simplifica: $(x-1)(x^2+x+1)$", opts:["$x^3 - 1$", "$x^3 + 1$", "$x^2 - 1$", "$x^3 - x - 1$"], ans:"$x^3 - 1$", exp:"Es el desarrollo estándar de la diferencia de cubos." },
  { id:53, q:"Divide: $\\frac{-15a^2 b^3}{-5ab}$", opts:["$3ab^2$", "$-3ab^2$", "$3a^2 b^2$", "$10ab^2$"], ans:"$3ab^2$", exp:"Signos iguales da $+$, $15/5=3$, $a^{2-1}=a$, $b^{3-1}=b^2$." },
  { id:54, q:"Halla el producto: $x(x-1)(x+1)$", opts:["$x^3 - x$", "$x^3 + x$", "$x^3 - 1$", "$x^2 - 1$"], ans:"$x^3 - x$", exp:"$(x-1)(x+1) = x^2-1$. Multiplicado por $x$ es $x^3-x$." },
  { id:55, q:"Divide: $\\frac{x^n}{x^{n-2}}$", opts:["$x^2$", "$x^{-2}$", "$x^{2n-2}$", "$1$"], ans:"$x^2$", exp:"Se restan: $n - (n-2) = 2$." },
  { id:56, q:"Simplifica: $\\frac{(2x)^3}{2x}$", opts:["$4x^2$", "$2x^2$", "$8x^2$", "$4x$"], ans:"$4x^2$", exp:"$(2x)^3 = 8x^3$. $8x^3/2x = 4x^2$." },
  { id:57, q:"Halla el volumen de un cubo de lado $2a$.", opts:["$8a^3$", "$6a^2$", "$4a^2$", "$2a^3$"], ans:"$8a^3$", exp:"Volumen = lado al cubo = $(2a)^3 = 8a^3$." },
  { id:58, q:"Multiplica: $\\frac{1}{2}x \\cdot \\frac{2}{3}x^2$", opts:["$\\frac{1}{3}x^3$", "$\\frac{3}{5}x^3$", "$x^3$", "$\\frac{1}{6}x^2$"], ans:"$\\frac{1}{3}x^3$", exp:"$(\\frac{1}{2})(\\frac{2}{3}) = \\frac{1}{3}$. $x \\cdot x^2 = x^3$." },
  { id:59, q:"Simplifica: $\\frac{xyz}{xzy}$", opts:["$1$", "$0$", "$xy$", "$z$"], ans:"$1$", exp:"El orden de los factores no altera el producto, numerador y denominador son iguales." },
  { id:60, q:"Multiplica: $-a(-a)(-a)(-a)$", opts:["$a^4$", "$-a^4$", "$4a$", "$-4a$"], ans:"$a^4$", exp:"Cuatro signos negativos dan positivo. Base a la cuarta." },

  // ── BLOQUE 3: Raíces y potencias de expresiones algebraicas (61–90) ────────
  { id:61, q:"Simplifica: $(x^2)^3$", opts:["$x^6$", "$x^5$", "$x^8$", "$x$"], ans:"$x^6$", exp:"Potencia de potencia: se multiplican exponentes ($2 \\cdot 3 = 6$)." },
  { id:62, q:"Simplifica: $(2x)^2$", opts:["$4x^2$", "$2x^2$", "$4x$", "$2x$"], ans:"$4x^2$", exp:"El cuadrado aplica al número y a la variable." },
  { id:63, q:"Simplifica: $(-3y)^2$", opts:["$9y^2$", "$-9y^2$", "$-6y^2$", "$6y^2$"], ans:"$9y^2$", exp:"Un negativo al cuadrado se vuelve positivo: $(-3)^2 = 9$." },
  { id:64, q:"Calcula: $\\sqrt{x^2}$ (asumiendo $x \\ge 0$)", opts:["$x$", "$x^2$", "$\\pm x$", "$1$"], ans:"$x$", exp:"La raíz cuadrada anula el cuadrado para valores no negativos." },
  { id:65, q:"Simplifica: $\\sqrt{4x^2}$", opts:["$2x$", "$4x$", "$2x^2$", "$16x^2$"], ans:"$2x$", exp:"Raíz de $4$ es $2$, raíz de $x^2$ es $x$." },
  { id:66, q:"Simplifica: $\\sqrt[3]{x^3}$", opts:["$x$", "$x^3$", "$x^9$", "$1$"], ans:"$x$", exp:"La raíz cúbica cancela el exponente al cubo." },
  { id:67, q:"¿A qué es igual $x^{-1}$?", opts:["$\\frac{1}{x}$", "$-x$", "$x$", "$0$"], ans:"$\\frac{1}{x}$", exp:"El exponente negativo invierte la base." },
  { id:68, q:"¿A qué es igual $x^{1/2}$?", opts:["$\\sqrt{x}$", "$\\frac{x}{2}$", "$x^2$", "$0.5x$"], ans:"$\\sqrt{x}$", exp:"Un exponente de $\\frac{1}{2}$ equivale a la raíz cuadrada." },
  { id:69, q:"Simplifica: $(x^3 y^2)^2$", opts:["$x^6 y^4$", "$x^5 y^4$", "$x^9 y^4$", "$x^6 y^2$"], ans:"$x^6 y^4$", exp:"Se multiplica el exponente exterior por cada interior." },
  { id:70, q:"Simplifica: $(\\frac{x}{y})^3$", opts:["$\\frac{x^3}{y^3}$", "$\\frac{x}{y^3}$", "$\\frac{x^3}{y}$", "$x^3 y^3$"], ans:"$\\frac{x^3}{y^3}$", exp:"La potencia afecta al numerador y al denominador." },
  { id:71, q:"Simplifica: $x^2 \\cdot x^{-2}$", opts:["$1$", "$0$", "$x^{-4}$", "$x^4$"], ans:"$1$", exp:"$x^{2-2} = x^0 = 1$." },
  { id:72, q:"¿Cuánto es $\\sqrt{25a^4}$?", opts:["$5a^2$", "$25a^2$", "$5a$", "$5a^4$"], ans:"$5a^2$", exp:"Raíz de $25$ es $5$. Raíz de $a^4$ es $a^2$." },
  { id:73, q:"Convierte a exponente fraccionario: $\\sqrt[3]{m^2}$", opts:["$m^{2/3}$", "$m^{3/2}$", "$m^6$", "$m^{-1}$"], ans:"$m^{2/3}$", exp:"La potencia va arriba, el índice de la raíz abajo." },
  { id:74, q:"Simplifica: $(x^{-2})^{-3}$", opts:["$x^6$", "$x^{-5}$", "$x^{-6}$", "$x^5$"], ans:"$x^6$", exp:"Multiplicamos $(-2) \\cdot (-3) = 6$." },
  { id:75, q:"Simplifica: $\\frac{1}{x^{-3}}$", opts:["$x^3$", "$x^{-3}$", "$-x^3$", "$3x$"], ans:"$x^3$", exp:"Al pasarlo al numerador, el exponente cambia de signo." },
  { id:76, q:"Simplifica: $(3x^0)^2$ (si $x \\neq 0$)", opts:["$9$", "$3$", "$0$", "$6$"], ans:"$9$", exp:"$x^0=1$. Así que $(3 \\cdot 1)^2 = 9$." },
  { id:77, q:"¿A qué es igual $(x^{1/2})^2$?", opts:["$x$", "$x^{1/4}$", "$x^2$", "$1$"], ans:"$x$", exp:"Multiplicamos $\\frac{1}{2} \\cdot 2 = 1$. Queda $x^1$." },
  { id:78, q:"Simplifica: $\\sqrt[4]{x^8}$", opts:["$x^2$", "$x^4$", "$x^{1/2}$", "$x^{32}$"], ans:"$x^2$", exp:"$8/4 = 2$." },
  { id:79, q:"Calcula: $16^{1/4} \\cdot a^0$", opts:["$2$", "$4$", "$16$", "$0$"], ans:"$2$", exp:"Raíz cuarta de 16 es 2. $a^0$ es 1. $2 \\cdot 1 = 2$." },
  { id:80, q:"Simplifica: $(-x^2)^3$", opts:["$-x^6$", "$x^6$", "$-x^5$", "$x^5$"], ans:"$-x^6$", exp:"Base negativa a exponente impar es negativa: $-(x^2)^3 = -x^6$." },
  { id:81, q:"Simplifica: $\\sqrt{x^2 y^2}$ (para $x,y \\ge 0$)", opts:["$xy$", "$x^2 y^2$", "$x+y$", "$\\sqrt{xy}$"], ans:"$xy$", exp:"Se extrae raíz a ambos factores." },
  { id:82, q:"¿A qué equivale $(ab)^{-1}$?", opts:["$\\frac{1}{ab}$", "$-ab$", "$a^{-1}b$", "$\\frac{a}{b}$"], ans:"$\\frac{1}{ab}$", exp:"El exponente negativo invierte la base completa." },
  { id:83, q:"Simplifica: $x^{1/3} \\cdot x^{2/3}$", opts:["$x$", "$x^{2/9}$", "$x^{1/2}$", "$x^2$"], ans:"$x$", exp:"Suma de exponentes: $1/3 + 2/3 = 3/3 = 1$." },
  { id:84, q:"Simplifica: $\\frac{x^3}{(x^2)^2}$", opts:["$x^{-1}$", "$x$", "$x^5$", "$x^{-2}$"], ans:"$x^{-1}$", exp:"Denominador es $x^4$. $x^3 / x^4 = x^{-1}$." },
  { id:85, q:"Simplifica: $\\sqrt[3]{-8a^3}$", opts:["$-2a$", "$2a$", "$-8a$", "$-2a^3$"], ans:"$-2a$", exp:"Raíz cúbica de $-8$ es $-2$, de $a^3$ es $a$." },
  { id:86, q:"Simplifica: $(\\frac{2}{x})^{-2}$", opts:["$\\frac{x^2}{4}$", "$\\frac{4}{x^2}$", "$-\\frac{4}{x^2}$", "$\\frac{x^2}{2}$"], ans:"$\\frac{x^2}{4}$", exp:"Se invierte la fracción y se eleva al cuadrado." },
  { id:87, q:"Calcula la potencia: $(-a^3)^2$", opts:["$a^6$", "$-a^6$", "$a^5$", "$-a^5$"], ans:"$a^6$", exp:"Negativo a potencia par da positivo. $3 \\cdot 2 = 6$." },
  { id:88, q:"Simplifica: $\\sqrt{x} \\cdot \\sqrt{x}$", opts:["$x$", "$x^2$", "$\\sqrt{2x}$", "$2\\sqrt{x}$"], ans:"$x$", exp:"Equivale a $(\\sqrt{x})^2 = x$." },
  { id:89, q:"Expresa con exponente positivo: $3x^{-2}$", opts:["$\\frac{3}{x^2}$", "$\\frac{1}{3x^2}$", "$-3x^2$", "$-6x$"], ans:"$\\frac{3}{x^2}$", exp:"Solo la $x$ tiene exponente negativo, baja al denominador." },
  { id:90, q:"¿A qué es igual $(x^a)^b$?", opts:["$x^{ab}$", "$x^{a+b}$", "$x^{a/b}$", "$ab^x$"], ans:"$x^{ab}$", exp:"Potencia de potencia: exponentes se multiplican." },

  // ── BLOQUE 4: Simplificación de expresiones algebraicas (91–120) ───────────
  { id:91, q:"Simplifica: $\\frac{2x + 4}{2}$", opts:["$x + 2$", "$2x + 2$", "$x + 4$", "$x$"], ans:"$x + 2$", exp:"Se divide cada término entre 2." },
  { id:92, q:"Simplifica: $\\frac{x^2 - x}{x}$", opts:["$x - 1$", "$x$", "$x^2 - 1$", "$1 - x$"], ans:"$x - 1$", exp:"Factor común $x$ en el numerador, se cancela con el denominador." },
  { id:93, q:"Simplifica: $\\frac{3a - 6}{3}$", opts:["$a - 2$", "$a - 6$", "$3a - 2$", "$a$"], ans:"$a - 2$", exp:"Se extrae el 3 y se cancela." },
  { id:94, q:"Simplifica: $\\frac{x^2 - 9}{x - 3}$", opts:["$x + 3$", "$x - 3$", "$x^2 + 3$", "$x + 9$"], ans:"$x + 3$", exp:"$x^2-9 = (x-3)(x+3)$. Se cancela $(x-3)$." },
  { id:95, q:"Simplifica: $\\frac{x^2 - 4}{x + 2}$", opts:["$x - 2$", "$x + 2$", "$x - 4$", "$x$"], ans:"$x - 2$", exp:"$x^2-4 = (x-2)(x+2)$. Se cancela $(x+2)$." },
  { id:96, q:"Simplifica: $\\frac{5x^2}{10x}$", opts:["$\\frac{x}{2}$", "$2x$", "$5x$", "$\\frac{2}{x}$"], ans:"$\\frac{x}{2}$", exp:"$5/10 = 1/2$. $x^2/x = x$." },
  { id:97, q:"Simplifica: $\\frac{x^2 - 4x + 4}{x - 2}$", opts:["$x - 2$", "$x + 2$", "$x - 4$", "$x^2 - 2$"], ans:"$x - 2$", exp:"Numerador es TCP: $(x-2)^2$. Al dividir entre $(x-2)$ queda $(x-2)$." },
  { id:98, q:"Simplifica: $\\frac{x^2 + 2x + 1}{x + 1}$", opts:["$x + 1$", "$x - 1$", "$x + 2$", "$x$"], ans:"$x + 1$", exp:"Numerador es TCP: $(x+1)^2$." },
  { id:99, q:"Simplifica: $\\frac{x^2 - x - 6}{x - 3}$", opts:["$x + 2$", "$x - 2$", "$x + 3$", "$x - 6$"], ans:"$x + 2$", exp:"Numerador: $(x-3)(x+2)$. Se cancela $(x-3)$." },
  { id:100, q:"Simplifica: $\\frac{2x^2 + 4x}{2x}$", opts:["$x + 2$", "$2x + 2$", "$x + 4$", "$x$"], ans:"$x + 2$", exp:"Factor común $2x$: $\\frac{2x(x+2)}{2x}$." },
  { id:101, q:"Simplifica: $\\frac{ab + ac}{a}$", opts:["$b + c$", "$ab + c$", "$b + ac$", "$bc$"], ans:"$b + c$", exp:"Se factoriza $a(b+c)$ y se cancela la $a$." },
  { id:102, q:"Simplifica: $\\frac{x^2 - 25}{x + 5}$", opts:["$x - 5$", "$x + 5$", "$x - 25$", "$x$"], ans:"$x - 5$", exp:"$(x-5)(x+5)/(x+5) = x-5$." },
  { id:103, q:"Simplifica: $\\frac{x^3 - x}{x}$", opts:["$x^2 - 1$", "$x^2 - x$", "$x^3 - 1$", "$x - 1$"], ans:"$x^2 - 1$", exp:"$x(x^2 - 1) / x = x^2 - 1$." },
  { id:104, q:"Simplifica: $\\frac{-x + y}{x - y}$", opts:["$-1$", "$1$", "$0$", "$-x+y$"], ans:"$-1$", exp:"$-x+y = -(x-y)$. Al dividir, da $-1$." },
  { id:105, q:"Simplifica: $\\frac{3x^2 y - 6xy^2}{3xy}$", opts:["$x - 2y$", "$x - y$", "$3x - 2y$", "$x^2 - 2y^2$"], ans:"$x - 2y$", exp:"Divides cada término entre $3xy$." },
  { id:106, q:"Simplifica: $\\frac{m^2 - n^2}{m - n}$", opts:["$m + n$", "$m - n$", "$m^2 + n^2$", "$1$"], ans:"$m + n$", exp:"Es una diferencia de cuadrados." },
  { id:107, q:"Simplifica: $\\frac{x^2 + 5x + 6}{x + 2}$", opts:["$x + 3$", "$x + 2$", "$x + 6$", "$x + 5$"], ans:"$x + 3$", exp:"$(x+2)(x+3) / (x+2) = x+3$." },
  { id:108, q:"Simplifica: $\\frac{a^2 - 2ab + b^2}{a - b}$", opts:["$a - b$", "$a + b$", "$a^2 - b^2$", "$2a - 2b$"], ans:"$a - b$", exp:"Numerador es $(a-b)^2$." },
  { id:109, q:"Simplifica: $\\frac{1}{x} + \\frac{1}{x}$", opts:["$\\frac{2}{x}$", "$\\frac{1}{2x}$", "$\\frac{2}{x^2}$", "$x$"], ans:"$\\frac{2}{x}$", exp:"Suma de fracciones con igual denominador." },
  { id:110, q:"Simplifica: $\\frac{x}{2} + \\frac{x}{2}$", opts:["$x$", "$\\frac{x^2}{2}$", "$\\frac{2x}{4}$", "$2x$"], ans:"$x$", exp:"Media $x$ más media $x$ es una $x$ entera." },
  { id:111, q:"Simplifica: $\\frac{4x^2 - 9}{2x - 3}$", opts:["$2x + 3$", "$2x - 3$", "$4x + 3$", "$2x + 9$"], ans:"$2x + 3$", exp:"$(2x-3)(2x+3) / (2x-3) = 2x+3$." },
  { id:112, q:"Simplifica: $\\frac{x^2 + x - 12}{x - 3}$", opts:["$x + 4$", "$x - 4$", "$x + 3$", "$x - 12$"], ans:"$x + 4$", exp:"$(x-3)(x+4) / (x-3) = x+4$." },
  { id:113, q:"Simplifica: $\\frac{x^3 + 8}{x + 2}$", opts:["$x^2 - 2x + 4$", "$x^2 + 2x + 4$", "$x^2 - 4$", "$x^2 + 4$"], ans:"$x^2 - 2x + 4$", exp:"Suma de cubos: $(x+2)(x^2 - 2x + 4)$." },
  { id:114, q:"Simplifica: $\\frac{x}{y} \\cdot \\frac{y}{x}$ (con $x, y \\neq 0$)", opts:["$1$", "$0$", "$\\frac{x^2}{y^2}$", "$xy$"], ans:"$1$", exp:"Se cancela todo, queda $1$." },
  { id:115, q:"Simplifica: $\\frac{x^2 - 16}{4 - x}$", opts:["$-(x + 4)$", "$x + 4$", "$x - 4$", "$-(x - 4)$"], ans:"$-(x + 4)$", exp:"$4-x = -(x-4)$. $(x-4)(x+4)/-(x-4) = -(x+4)$." },
  { id:116, q:"Simplifica: $\\frac{3a^2 b}{6ab^2}$", opts:["$\\frac{a}{2b}$", "$\\frac{a^2}{2b}$", "$\\frac{2a}{b}$", "$\\frac{1}{2ab}$"], ans:"$\\frac{a}{2b}$", exp:"$3/6 = 1/2$. $a^2/a = a$. $b/b^2 = 1/b$." },
  { id:117, q:"Simplifica: $\\frac{x^2 + 7x + 10}{x + 5}$", opts:["$x + 2$", "$x + 5$", "$x + 7$", "$x + 10$"], ans:"$x + 2$", exp:"$(x+5)(x+2) / (x+5) = x+2$." },
  { id:118, q:"Simplifica: $\\frac{a^3 - b^3}{a - b}$", opts:["$a^2 + ab + b^2$", "$a^2 - ab + b^2$", "$a^2 + b^2$", "$a^2 - b^2$"], ans:"$a^2 + ab + b^2$", exp:"Fórmula de diferencia de cubos." },
  { id:119, q:"Simplifica: $\\frac{1}{x-1} - \\frac{1}{x-1}$", opts:["$0$", "$1$", "$\\frac{2}{x-1}$", "$\\frac{1}{(x-1)^2}$"], ans:"$0$", exp:"Dos cantidades iguales que se restan dan $0$." },
  { id:120, q:"Simplifica: $\\frac{2x^2 y^3 z}{4xy^4 z^2}$", opts:["$\\frac{x}{2yz}$", "$\\frac{2x}{yz}$", "$\\frac{x^2}{2y^2 z}$", "$\\frac{1}{2xyz}$"], ans:"$\\frac{x}{2yz}$", exp:"Se restan exponentes para cada variable." },

  // ── BLOQUE 5: Productos notables (Dif. cuadrados, TCP, etc.) (121–150) ─────
  { id:121, q:"Desarrolla: $(x + 1)^2$", opts:["$x^2 + 2x + 1$", "$x^2 + 1$", "$x^2 + x + 1$", "$x^2 + 2$"], ans:"$x^2 + 2x + 1$", exp:"Binomio al cuadrado: el primero al cuadrado + el doble producto + el segundo al cuadrado." },
  { id:122, q:"Desarrolla: $(x - 2)^2$", opts:["$x^2 - 4x + 4$", "$x^2 - 4$", "$x^2 + 4x + 4$", "$x^2 - 2x + 4$"], ans:"$x^2 - 4x + 4$", exp:"$(x)^2 - 2(x)(2) + (2)^2$." },
  { id:123, q:"Desarrolla: $(x + 3)(x - 3)$", opts:["$x^2 - 9$", "$x^2 + 9$", "$x^2 - 6x + 9$", "$x^2 - 3$"], ans:"$x^2 - 9$", exp:"Binomios conjugados: $(a+b)(a-b) = a^2 - b^2$." },
  { id:124, q:"Desarrolla: $(2x + 1)^2$", opts:["$4x^2 + 4x + 1$", "$4x^2 + 1$", "$2x^2 + 2x + 1$", "$4x^2 + 2x + 1$"], ans:"$4x^2 + 4x + 1$", exp:"$(2x)^2 + 2(2x)(1) + (1)^2$." },
  { id:125, q:"Desarrolla: $(a - b)(a + b)$", opts:["$a^2 - b^2$", "$a^2 + b^2$", "$a^2 - 2ab + b^2$", "$a^2 - b$"], ans:"$a^2 - b^2$", exp:"Diferencia de cuadrados." },
  { id:126, q:"Desarrolla: $(x + 5)(x + 2)$", opts:["$x^2 + 7x + 10$", "$x^2 + 10$", "$x^2 + 3x + 10$", "$x^2 + 7x + 7$"], ans:"$x^2 + 7x + 10$", exp:"Suma de raíces $5+2=7$, producto $5\\cdot 2=10$." },
  { id:127, q:"Desarrolla: $(x - 4)(x + 1)$", opts:["$x^2 - 3x - 4$", "$x^2 - 4x - 4$", "$x^2 + 3x - 4$", "$x^2 - 4$"], ans:"$x^2 - 3x - 4$", exp:"$-4+1 = -3$, $-4 \\cdot 1 = -4$." },
  { id:128, q:"Desarrolla: $(3x - 2)^2$", opts:["$9x^2 - 12x + 4$", "$9x^2 - 4$", "$9x^2 - 6x + 4$", "$3x^2 - 12x + 4$"], ans:"$9x^2 - 12x + 4$", exp:"$(3x)^2 - 2(3x)(2) + 2^2$." },
  { id:129, q:"Desarrolla: $(x + y)^2$", opts:["$x^2 + 2xy + y^2$", "$x^2 + y^2$", "$x^2 + xy + y^2$", "$2x + 2y$"], ans:"$x^2 + 2xy + y^2$", exp:"Regla del trinomio cuadrado perfecto." },
  { id:130, q:"Desarrolla: $(x - y)^2$", opts:["$x^2 - 2xy + y^2$", "$x^2 - y^2$", "$x^2 + 2xy + y^2$", "$x^2 - xy + y^2$"], ans:"$x^2 - 2xy + y^2$", exp:"El término central es negativo." },
  { id:131, q:"¿Cuál es el resultado de $(5 - a)(5 + a)$?", opts:["$25 - a^2$", "$25 + a^2$", "$a^2 - 25$", "$10 - a^2$"], ans:"$25 - a^2$", exp:"El primer término al cuadrado menos el segundo al cuadrado." },
  { id:132, q:"Desarrolla: $(x + 4)(x - 4)$", opts:["$x^2 - 16$", "$x^2 + 16$", "$x^2 - 8x - 16$", "$x^2 - 4$"], ans:"$x^2 - 16$", exp:"Diferencia de cuadrados, las variables cruzadas se cancelan." },
  { id:133, q:"Desarrolla: $(x + 6)(x - 2)$", opts:["$x^2 + 4x - 12$", "$x^2 - 4x - 12$", "$x^2 + 8x - 12$", "$x^2 - 12$"], ans:"$x^2 + 4x - 12$", exp:"$6 + (-2) = 4$, $6 \\cdot (-2) = -12$." },
  { id:134, q:"Desarrolla: $(m + n)(m - n)$", opts:["$m^2 - n^2$", "$m^2 + n^2$", "$m^2 - 2mn + n^2$", "$m^2 - n$"], ans:"$m^2 - n^2$", exp:"Forma clásica de binomios conjugados." },
  { id:135, q:"Desarrolla: $(2a + 3b)(2a - 3b)$", opts:["$4a^2 - 9b^2$", "$4a^2 + 9b^2$", "$4a^2 - 6b^2$", "$2a^2 - 3b^2$"], ans:"$4a^2 - 9b^2$", exp:"$(2a)^2 - (3b)^2 = 4a^2 - 9b^2$." },
  { id:136, q:"Desarrolla: $(\\frac{1}{2}x + 1)^2$", opts:["$\\frac{1}{4}x^2 + x + 1$", "$\\frac{1}{4}x^2 + 1$", "$\\frac{1}{2}x^2 + x + 1$", "$\\frac{1}{4}x^2 + \\frac{1}{2}x + 1$"], ans:"$\\frac{1}{4}x^2 + x + 1$", exp:"El doble de $(1/2)x \\cdot 1$ es $x$." },
  { id:137, q:"¿A qué es igual $x^2 + 6x + 9$?", opts:["$(x + 3)^2$", "$(x - 3)^2$", "$(x + 9)^2$", "$(x + 6)^2$"], ans:"$(x + 3)^2$", exp:"Trinomio cuadrado perfecto: $(x+3)(x+3)$." },
  { id:138, q:"¿A qué es igual $x^2 - 10x + 25$?", opts:["$(x - 5)^2$", "$(x + 5)^2$", "$(x - 10)^2$", "$(x - 25)^2$"], ans:"$(x - 5)^2$", exp:"TCP con signo negativo en medio." },
  { id:139, q:"Desarrolla: $(x - 7)(x - 1)$", opts:["$x^2 - 8x + 7$", "$x^2 + 8x - 7$", "$x^2 - 7x + 7$", "$x^2 - 6x - 7$"], ans:"$x^2 - 8x + 7$", exp:"$-7 - 1 = -8$, $(-7)(-1) = +7$." },
  { id:140, q:"Desarrolla: $(ab + c)^2$", opts:["$a^2b^2 + 2abc + c^2$", "$a^2b^2 + c^2$", "$ab^2 + 2abc + c^2$", "$a^2b^2 + abc + c^2$"], ans:"$a^2b^2 + 2abc + c^2$", exp:"Cuadrado del primero + doble producto + cuadrado del segundo." },
  { id:141, q:"¿Qué término falta para que $x^2 + 8x + \\_$ sea TCP?", opts:["$16$", "$4$", "$8$", "$64$"], ans:"$16$", exp:"La mitad de $8$ es $4$, al cuadrado es $16$." },
  { id:142, q:"¿Qué término falta para que $x^2 - 2x + \\_$ sea TCP?", opts:["$1$", "$-1$", "$2$", "$4$"], ans:"$1$", exp:"Mitad de $-2$ es $-1$, al cuadrado es $1$." },
  { id:143, q:"Desarrolla: $(x^2 + 2)^2$", opts:["$x^4 + 4x^2 + 4$", "$x^4 + 4$", "$x^2 + 4x^2 + 4$", "$x^4 + 2x^2 + 4$"], ans:"$x^4 + 4x^2 + 4$", exp:"$(x^2)^2 + 2(x^2)(2) + 2^2$." },
  { id:144, q:"Desarrolla: $(3 + x)(3 - x)$", opts:["$9 - x^2$", "$x^2 - 9$", "$9 - 6x + x^2$", "$3 - x^2$"], ans:"$9 - x^2$", exp:"El orden importa en la resta: $3^2 - x^2$." },
  { id:145, q:"Si $(x+a)^2 = x^2 + 12x + 36$, ¿cuánto vale $a$?", opts:["$6$", "$12$", "$36$", "$3$"], ans:"$6$", exp:"El doble de $a$ es $12$, y $a^2$ es $36$." },
  { id:146, q:"Desarrolla: $(2xy - 1)^2$", opts:["$4x^2y^2 - 4xy + 1$", "$4x^2y^2 + 1$", "$4xy^2 - 4xy + 1$", "$2x^2y^2 - 4xy + 1$"], ans:"$4x^2y^2 - 4xy + 1$", exp:"Binomio al cuadrado." },
  { id:147, q:"¿A qué es igual $(x+2)(x-3)$?", opts:["$x^2 - x - 6$", "$x^2 + x - 6$", "$x^2 - 6$", "$x^2 - 5x - 6$"], ans:"$x^2 - x - 6$", exp:"$2-3 = -1$, $2(-3) = -6$." },
  { id:148, q:"Desarrolla: $(a^2 + b^2)(a^2 - b^2)$", opts:["$a^4 - b^4$", "$a^4 + b^4$", "$a^2 - b^2$", "$a^4 - 2a^2b^2 + b^4$"], ans:"$a^4 - b^4$", exp:"Diferencia de cuadrados con potencias 2 da potencias 4." },
  { id:149, q:"El área de un cuadrado de lado $(x+3)$ es:", opts:["$x^2 + 6x + 9$", "$x^2 + 9$", "$4x + 12$", "$x^2 + 3x + 9$"], ans:"$x^2 + 6x + 9$", exp:"El área es el lado al cuadrado." },
  { id:150, q:"¿Cuál de estos NO es un producto notable?", opts:["Factor común", "Binomio al cuadrado", "Binomios conjugados", "Binomios con término común"], ans:"Factor común", exp:"Factor común es un método de factorización, no un producto notable." },

  // ── BLOQUE 6: Factorización (151–180) ──────────────────────────────────────
  { id:151, q:"Factoriza: $2x + 4$", opts:["$2(x + 2)$", "$2(x + 4)$", "$4(x + 1)$", "$x(2 + 4)$"], ans:"$2(x + 2)$", exp:"Factor común es 2." },
  { id:152, q:"Factoriza: $x^2 + 3x$", opts:["$x(x + 3)$", "$3(x^2 + x)$", "$x(x + 1)$", "$x^2(1 + 3x)$"], ans:"$x(x + 3)$", exp:"Factor común es $x$." },
  { id:153, q:"Factoriza: $x^2 - 16$", opts:["$(x - 4)(x + 4)$", "$(x - 4)^2$", "$(x + 4)^2$", "$(x - 8)(x + 2)$"], ans:"$(x - 4)(x + 4)$", exp:"Diferencia de cuadrados." },
  { id:154, q:"Factoriza: $y^2 - 25$", opts:["$(y - 5)(y + 5)$", "$(y - 5)^2$", "$(y - 25)(y + 1)$", "$(y - 5)(y - 5)$"], ans:"$(y - 5)(y + 5)$", exp:"Diferencia de cuadrados ($5^2 = 25$)." },
  { id:155, q:"Factoriza: $x^2 + 5x + 6$", opts:["$(x + 2)(x + 3)$", "$(x + 1)(x + 6)$", "$(x + 5)(x + 1)$", "$(x - 2)(x - 3)$"], ans:"$(x + 2)(x + 3)$", exp:"Números que sumen $5$ y multipliquen $6$: $2$ y $3$." },
  { id:156, q:"Factoriza: $x^2 - x - 2$", opts:["$(x - 2)(x + 1)$", "$(x + 2)(x - 1)$", "$(x - 2)(x - 1)$", "$(x + 2)(x + 1)$"], ans:"$(x - 2)(x + 1)$", exp:"Sumados $-1$, multiplicados $-2$." },
  { id:157, q:"Factoriza: $x^2 - 4x + 3$", opts:["$(x - 3)(x - 1)$", "$(x + 3)(x + 1)$", "$(x - 3)(x + 1)$", "$(x - 4)(x + 1)$"], ans:"$(x - 3)(x - 1)$", exp:"Sumados $-4$, multiplicados $3$." },
  { id:158, q:"Factoriza: $3a^2 - 6a$", opts:["$3a(a - 2)$", "$3(a^2 - 2)$", "$a(3a - 6)$", "$3a(a - 6)$"], ans:"$3a(a - 2)$", exp:"Factor común es $3a$." },
  { id:159, q:"Factoriza: $x^2 - 9y^2$", opts:["$(x - 3y)(x + 3y)$", "$(x - 3y)^2$", "$(x - 9y)(x + y)$", "$(x - 3)(x + 3y)$"], ans:"$(x - 3y)(x + 3y)$", exp:"Diferencia de cuadrados. Raíz de $9y^2$ es $3y$." },
  { id:160, q:"Factoriza: $4x^2 - 1$", opts:["$(2x - 1)(2x + 1)$", "$(4x - 1)(x + 1)$", "$(2x - 1)^2$", "$(2x - 1)(x + 1)$"], ans:"$(2x - 1)(2x + 1)$", exp:"Diferencia de cuadrados con coeficientes." },
  { id:161, q:"Factoriza: $m^2 + 2m + 1$", opts:["$(m + 1)^2$", "$(m - 1)^2$", "$(m + 2)^2$", "$(m + 1)(m + 2)$"], ans:"$(m + 1)^2$", exp:"Es un Trinomio Cuadrado Perfecto." },
  { id:162, q:"Factoriza: $x^2 + 8x + 15$", opts:["$(x + 3)(x + 5)$", "$(x + 8)(x + 15)$", "$(x + 1)(x + 15)$", "$(x - 3)(x - 5)$"], ans:"$(x + 3)(x + 5)$", exp:"Suman $8$, multiplican $15$." },
  { id:163, q:"Factoriza: $x^2 - 9x + 20$", opts:["$(x - 4)(x - 5)$", "$(x + 4)(x + 5)$", "$(x - 10)(x + 2)$", "$(x - 9)(x + 20)$"], ans:"$(x - 4)(x - 5)$", exp:"Suman $-9$, multiplican $20$." },
  { id:164, q:"Factoriza: $5x^3 - 10x^2$", opts:["$5x^2(x - 2)$", "$5x(x^2 - 2x)$", "$5x^2(x - 10)$", "$x^2(5x - 10)$"], ans:"$5x^2(x - 2)$", exp:"El MCD de los coeficientes es 5, de las variables $x^2$." },
  { id:165, q:"Factoriza: $1 - x^2$", opts:["$(1 - x)(1 + x)$", "$(x - 1)(x + 1)$", "$(1 - x)^2$", "$-(x - 1)^2$"], ans:"$(1 - x)(1 + x)$", exp:"Diferencia de cuadrados, $1$ es el término positivo." },
  { id:166, q:"Factoriza: $x^2 + x - 12$", opts:["$(x + 4)(x - 3)$", "$(x - 4)(x + 3)$", "$(x + 6)(x - 2)$", "$(x - 6)(x + 2)$"], ans:"$(x + 4)(x - 3)$", exp:"$4 + (-3) = 1$, $4 \\cdot (-3) = -12$." },
  { id:167, q:"¿Cuál es un factor de $x^2 - 7x + 10$?", opts:["$x - 5$", "$x + 5$", "$x - 7$", "$x + 2$"], ans:"$x - 5$", exp:"$(x-5)(x-2)$. Por ende, $(x-5)$ es factor." },
  { id:168, q:"Factoriza: $ax + bx + ay + by$", opts:["$(a + b)(x + y)$", "$(ab)(xy)$", "$x(a+b) + y(a-b)$", "$(a+x)(b+y)$"], ans:"$(a + b)(x + y)$", exp:"Factorización por agrupación de términos." },
  { id:169, q:"Factoriza: $x^3 - 8$", opts:["$(x - 2)(x^2 + 2x + 4)$", "$(x - 2)(x^2 - 2x + 4)$", "$(x - 2)^3$", "$(x + 2)(x^2 - 2x + 4)$"], ans:"$(x - 2)(x^2 + 2x + 4)$", exp:"Diferencia de cubos." },
  { id:170, q:"Factoriza: $x^3 + 1$", opts:["$(x + 1)(x^2 - x + 1)$", "$(x + 1)^3$", "$(x - 1)(x^2 + x + 1)$", "$(x + 1)(x^2 + x + 1)$"], ans:"$(x + 1)(x^2 - x + 1)$", exp:"Suma de cubos." },
  { id:171, q:"Factoriza el trinomio: $2x^2 + 5x + 3$", opts:["$(2x + 3)(x + 1)$", "$(2x + 1)(x + 3)$", "$(2x + 5)(x + 1)$", "$(2x + 3)(x - 1)$"], ans:"$(2x + 3)(x + 1)$", exp:"Método de tijera o completando el término medio: $2x^2+2x+3x+3$." },
  { id:172, q:"Factoriza: $x^4 - 16$", opts:["$(x^2 + 4)(x - 2)(x + 2)$", "$(x^2 - 4)^2$", "$(x - 2)^4$", "$(x^2 + 4)(x^2 + 4)$"], ans:"$(x^2 + 4)(x - 2)(x + 2)$", exp:"$(x^2-4)(x^2+4)$, y el primero se vuelve a factorizar." },
  { id:173, q:"¿Cuál de los siguientes es un trinomio cuadrado perfecto?", opts:["$x^2 + 4x + 4$", "$x^2 + 4x + 8$", "$x^2 + 5x + 6$", "$x^2 - x - 2$"], ans:"$x^2 + 4x + 4$", exp:"La raíz del tercero al doble da el segundo: $2(2x) = 4x$." },
  { id:174, q:"Factoriza: $x^2 - 100$", opts:["$(x - 10)(x + 10)$", "$(x - 10)^2$", "$(x - 50)(x + 2)$", "$(x - 100)(x + 1)$"], ans:"$(x - 10)(x + 10)$", exp:"Diferencia de cuadrados con raíz $10$." },
  { id:175, q:"Factoriza: $x^2 - 3x - 10$", opts:["$(x - 5)(x + 2)$", "$(x + 5)(x - 2)$", "$(x - 10)(x + 1)$", "$(x - 5)(x - 2)$"], ans:"$(x - 5)(x + 2)$", exp:"$-5 + 2 = -3$ y $-5 \\cdot 2 = -10$." },
  { id:176, q:"Si factorizo $3x^2 - 27$, obtengo:", opts:["$3(x - 3)(x + 3)$", "$3(x - 9)(x + 9)$", "$(3x - 9)(x + 3)$", "$3(x^2 - 27)$"], ans:"$3(x - 3)(x + 3)$", exp:"$3(x^2 - 9) = 3(x-3)(x+3)$." },
  { id:177, q:"¿Qué expresión es equivalente a $(x+y)^2 - z^2$?", opts:["$(x+y-z)(x+y+z)$", "$(x+y-z)^2$", "$x^2+y^2-z^2$", "$(x-y-z)(x+y+z)$"], ans:"$(x+y-z)(x+y+z)$", exp:"Diferencia de cuadrados donde el primer término es $(x+y)$." },
  { id:178, q:"Factoriza: $8x^3 + 27$", opts:["$(2x + 3)(4x^2 - 6x + 9)$", "$(2x + 3)^3$", "$(2x - 3)(4x^2 + 6x + 9)$", "$(2x + 3)(4x^2 + 6x + 9)$"], ans:"$(2x + 3)(4x^2 - 6x + 9)$", exp:"Suma de cubos: $(2x)^3 + 3^3$." },
  { id:179, q:"Halla el factor común de $12x^3 y^2 - 18x^2 y^3$", opts:["$6x^2 y^2$", "$6xy$", "$3x^2 y^2$", "$12x^2 y^2$"], ans:"$6x^2 y^2$", exp:"MCD de 12 y 18 es 6. De x es $x^2$. De y es $y^2$." },
  { id:180, q:"La factorización completa de $x^3 - x$ es:", opts:["$x(x - 1)(x + 1)$", "$x(x^2 - 1)$", "$x(x - 1)^2$", "$(x^2 - x)(x + 1)$"], ans:"$x(x - 1)(x + 1)$", exp:"Primero se saca $x$, queda $x^2-1$, luego dif. de cuadrados." },

  // ── BLOQUE 7: Binomio de Newton (181–210) ──────────────────────────────────
  { id:181, q:"Desarrolla: $(x + y)^3$", opts:["$x^3 + 3x^2y + 3xy^2 + y^3$", "$x^3 + y^3$", "$x^3 + 3xy + y^3$", "$x^3 + 2x^2y + 2xy^2 + y^3$"], ans:"$x^3 + 3x^2y + 3xy^2 + y^3$", exp:"Fórmula clásica del cubo de un binomio perfecto." },
  { id:182, q:"Desarrolla: $(x - y)^3$", opts:["$x^3 - 3x^2y + 3xy^2 - y^3$", "$x^3 - y^3$", "$x^3 - 3xy + y^3$", "$x^3 + 3x^2y - 3xy^2 - y^3$"], ans:"$x^3 - 3x^2y + 3xy^2 - y^3$", exp:"Los signos se alternan: +, -, +, -." },
  { id:183, q:"¿Cuáles son los coeficientes de $(a+b)^2$?", opts:["1, 2, 1", "1, 1, 1", "1, 3, 1", "2, 2"], ans:"1, 2, 1", exp:"El desarrollo es $1a^2 + 2ab + 1b^2$." },
  { id:184, q:"¿Cuáles son los coeficientes de $(a+b)^3$?", opts:["1, 3, 3, 1", "1, 2, 2, 1", "1, 4, 6, 4, 1", "3, 3, 3"], ans:"1, 3, 3, 1", exp:"Fila 3 del Triángulo de Pascal." },
  { id:185, q:"¿Cuáles son los coeficientes de $(a+b)^4$?", opts:["1, 4, 6, 4, 1", "1, 4, 4, 1", "1, 5, 10, 10, 5, 1", "4, 6, 4, 1"], ans:"1, 4, 6, 4, 1", exp:"Fila 4 del Triángulo de Pascal." },
  { id:186, q:"¿Cuántos términos tiene el desarrollo de $(x+y)^5$?", opts:["6", "5", "4", "7"], ans:"6", exp:"La cantidad de términos siempre es $n + 1$." },
  { id:187, q:"¿Cuántos términos tiene el desarrollo de $(a-b)^{10}$?", opts:["11", "10", "9", "12"], ans:"11", exp:"$n + 1 = 10 + 1 = 11$." },
  { id:188, q:"Desarrolla el primer término de $(2x + y)^3$", opts:["$8x^3$", "$2x^3$", "$6x^3$", "$8x$"], ans:"$8x^3$", exp:"$(2x)^3 = 8x^3$." },
  { id:189, q:"¿Cuál es el último término de $(x - 2y)^3$?", opts:["$-8y^3$", "$8y^3$", "$-2y^3$", "$-6y^3$"], ans:"$-8y^3$", exp:"$(-2y)^3 = -8y^3$." },
  { id:190, q:"¿Cuál es el coeficiente del término central de $(x+y)^2$?", opts:["2", "1", "3", "0"], ans:"2", exp:"El término es $2xy$." },
  { id:191, q:"En el desarrollo de $(x+y)^3$, ¿cuál es el coeficiente de $x^2y$?", opts:["3", "1", "2", "6"], ans:"3", exp:"El término es $3x^2y$." },
  { id:192, q:"En $(a+b)^4$, ¿cuál es el coeficiente de $a^2b^2$?", opts:["6", "4", "1", "2"], ans:"6", exp:"Por Triángulo de Pascal (1, 4, 6, 4, 1), el central es 6." },
  { id:193, q:"Desarrolla el primer término de $(x^2 + 1)^3$", opts:["$x^6$", "$x^5$", "$3x^2$", "$x^8$"], ans:"$x^6$", exp:"$(x^2)^3 = x^6$." },
  { id:194, q:"Halla el tercer término de $(x + 1)^4$", opts:["$6x^2$", "$4x^2$", "$6x^3$", "$4x$"], ans:"$6x^2$", exp:"Términos: $x^4, 4x^3, 6x^2, 4x, 1$. El tercero es $6x^2$." },
  { id:195, q:"Desarrolla: $(x+1)^3$", opts:["$x^3 + 3x^2 + 3x + 1$", "$x^3 + 1$", "$x^3 + 3x + 1$", "$x^3 - 3x^2 + 3x - 1$"], ans:"$x^3 + 3x^2 + 3x + 1$", exp:"Aplicando coeficientes 1, 3, 3, 1 con $y=1$." },
  { id:196, q:"Desarrolla: $(x-1)^3$", opts:["$x^3 - 3x^2 + 3x - 1$", "$x^3 - 1$", "$x^3 + 3x^2 - 3x - 1$", "$x^3 - x^2 + x - 1$"], ans:"$x^3 - 3x^2 + 3x - 1$", exp:"Alternando signos para $y=-1$." },
  { id:197, q:"¿Cuál es la suma de los coeficientes del desarrollo de $(x+y)^2$?", opts:["4", "3", "2", "8"], ans:"4", exp:"$1 + 2 + 1 = 4$. (O evaluar con $x=1, y=1 \\rightarrow 2^2=4$)." },
  { id:198, q:"¿Cuál es la suma de los coeficientes de $(x+y)^3$?", opts:["8", "6", "4", "9"], ans:"8", exp:"$1 + 3 + 3 + 1 = 8$." },
  { id:199, q:"El Triángulo de Pascal sirve para encontrar:", opts:["Coeficientes binomiales", "Raíces cuadradas", "Áreas de triángulos", "Factores comunes"], ans:"Coeficientes binomiales", exp:"Es su principal uso en el álgebra elemental." },
  { id:200, q:"¿Cuál es el valor de $\\binom{4}{2}$ (coeficiente central de potencia 4)?", opts:["6", "4", "2", "8"], ans:"6", exp:"$\\frac{4!}{2!2!} = \\frac{24}{4} = 6$." },
  { id:201, q:"¿Cuál es el valor de $\\binom{5}{0}$?", opts:["1", "5", "0", "10"], ans:"1", exp:"Todo combinatorio con $0$ abajo es $1$." },
  { id:202, q:"¿Qué término no tiene $x$ en el desarrollo de $(x + 2)^3$?", opts:["8", "6", "2", "12"], ans:"8", exp:"Es el último término: $2^3 = 8$." },
  { id:203, q:"Halla el segundo término de $(2x + y)^3$", opts:["$12x^2y$", "$6x^2y$", "$4x^2y$", "$8x^2y$"], ans:"$12x^2y$", exp:"$3 \\cdot (2x)^2 \\cdot (y)^1 = 3 \\cdot 4x^2 \\cdot y = 12x^2y$." },
  { id:204, q:"En $(x - 3)^3$, el último término es:", opts:["$-27$", "$27$", "$-9$", "$9$"], ans:"$-27$", exp:"$(-3)^3 = -27$." },
  { id:205, q:"¿Cuál es el término central de $(x - y)^4$?", opts:["$6x^2y^2$", "$-6x^2y^2$", "$4x^2y^2$", "$-4x^2y^2$"], ans:"$6x^2y^2$", exp:"El signo de las potencias pares de $-y$ es positivo." },
  { id:206, q:"Evalúa $\\binom{3}{1}$:", opts:["3", "1", "0", "6"], ans:"3", exp:"$\\frac{3!}{1!2!} = 3$." },
  { id:207, q:"¿Cuál es la potencia de $x$ en el primer término de $(x^3 + 1)^4$?", opts:["12", "7", "4", "8"], ans:"12", exp:"$(x^3)^4 = x^{12}$." },
  { id:208, q:"Para que un binomio al cubo sea perfecto, los coeficientes deben seguir la razón:", opts:["1:3:3:1", "1:2:1", "1:4:6:4:1", "1:1:1:1"], ans:"1:3:3:1", exp:"Por definición del binomio de Newton." },
  { id:209, q:"Halla el segundo término de $(x - 1)^4$", opts:["$-4x^3$", "$4x^3$", "$-6x^2$", "$-4x^2$"], ans:"$-4x^3$", exp:"$4 \\cdot (x)^3 \\cdot (-1)^1 = -4x^3$." },
  { id:210, q:"¿Cómo se relacionan los coeficientes simétricos en el Triángulo de Pascal?", opts:["Son iguales", "Tienen signo opuesto", "Son el doble", "No hay relación"], ans:"Son iguales", exp:"El triángulo es simétrico respecto a su centro." },

  // ── BLOQUE 8: Ecuaciones de 1er grado y graficación (211–240) ──────────────
  { id:211, q:"Resuelve para $x$: $x + 5 = 12$", opts:["$7$", "$17$", "$-7$", "$5$"], ans:"$7$", exp:"$x = 12 - 5 = 7$." },
  { id:212, q:"Resuelve para $x$: $x - 3 = 8$", opts:["$11$", "$5$", "$-5$", "$8$"], ans:"$11$", exp:"$x = 8 + 3 = 11$." },
  { id:213, q:"Resuelve: $2x = 10$", opts:["$5$", "$20$", "$8$", "$12$"], ans:"$5$", exp:"$x = 10 / 2 = 5$." },
  { id:214, q:"Resuelve: $3x - 1 = 8$", opts:["$3$", "$7/3$", "$9$", "$-3$"], ans:"$3$", exp:"$3x = 9 \\rightarrow x = 3$." },
  { id:215, q:"Resuelve: $5x + 2 = 17$", opts:["$3$", "$15$", "$19/5$", "$5$"], ans:"$3$", exp:"$5x = 15 \\rightarrow x = 3$." },
  { id:216, q:"Resuelve: $-2x = 6$", opts:["$-3$", "$3$", "$-8$", "$8$"], ans:"$-3$", exp:"$x = 6 / -2 = -3$." },
  { id:217, q:"Resuelve: $\\frac{x}{2} = 4$", opts:["$8$", "$2$", "$6$", "$1/2$"], ans:"$8$", exp:"$x = 4 \\cdot 2 = 8$." },
  { id:218, q:"Resuelve: $\\frac{x}{3} + 1 = 5$", opts:["$12$", "$4$", "$15$", "$16$"], ans:"$12$", exp:"$\\frac{x}{3} = 4 \\rightarrow x = 12$." },
  { id:219, q:"Resuelve: $2x + 3x = 20$", opts:["$4$", "$5$", "$10$", "$2$"], ans:"$4$", exp:"$5x = 20 \\rightarrow x = 4$." },
  { id:220, q:"Resuelve: $4x - x = 9$", opts:["$3$", "$9/4$", "$4$", "$2$"], ans:"$3$", exp:"$3x = 9 \\rightarrow x = 3$." },
  { id:221, q:"Resuelve: $3x + 2 = x + 10$", opts:["$4$", "$6$", "$8$", "$2$"], ans:"$4$", exp:"$3x - x = 10 - 2 \\rightarrow 2x = 8 \\rightarrow x = 4$." },
  { id:222, q:"Resuelve: $5x - 4 = 2x + 11$", opts:["$5$", "$15$", "$3$", "$7$"], ans:"$5$", exp:"$3x = 15 \\rightarrow x = 5$." },
  { id:223, q:"Resuelve: $2(x - 1) = 6$", opts:["$4$", "$3$", "$2$", "$5$"], ans:"$4$", exp:"$x - 1 = 3 \\rightarrow x = 4$." },
  { id:224, q:"Resuelve: $3(x + 2) = 15$", opts:["$3$", "$5$", "$7$", "$1$"], ans:"$3$", exp:"$x + 2 = 5 \\rightarrow x = 3$." },
  { id:225, q:"Resuelve: $-(x + 5) = -8$", opts:["$3$", "$-3$", "$13$", "$-13$"], ans:"$3$", exp:"$x + 5 = 8 \\rightarrow x = 3$." },
  { id:226, q:"En la gráfica de $y = x + 2$, ¿dónde interseca al eje $y$?", opts:["$(0, 2)$", "$(2, 0)$", "$(0, -2)$", "$(-2, 0)$"], ans:"$(0, 2)$", exp:"Intersección en $y$ es cuando $x=0$, $y=2$." },
  { id:227, q:"En la gráfica de $y = 2x - 4$, ¿dónde interseca al eje $x$?", opts:["$(2, 0)$", "$(0, -4)$", "$(-2, 0)$", "$(0, 4)$"], ans:"$(2, 0)$", exp:"Intersección en $x$ es cuando $y=0$. $2x=4 \\rightarrow x=2$." },
  { id:228, q:"¿Cuál es la pendiente de la recta $y = 3x - 1$?", opts:["$3$", "$-1$", "$1/3$", "$0$"], ans:"$3$", exp:"En la forma $y=mx+b$, $m=3$." },
  { id:229, q:"¿Qué tipo de gráfica produce una ecuación de 1er grado?", opts:["Una recta", "Una parábola", "Una circunferencia", "Una curva cúbica"], ans:"Una recta", exp:"Por eso se llaman ecuaciones lineales." },
  { id:230, q:"Si la pendiente es negativa, la recta...", opts:["Desciende de izq a der", "Asciende de izq a der", "Es horizontal", "Es vertical"], ans:"Desciende de izq a der", exp:"Pendiente negativa indica decrecimiento." },
  { id:231, q:"En la ecuación $2x + y = 6$, ¿cuánto vale $y$ si $x=0$?", opts:["$6$", "$3$", "$-6$", "$0$"], ans:"$6$", exp:"$2(0) + y = 6 \\rightarrow y = 6$." },
  { id:232, q:"¿Cuál es la ecuación de una recta horizontal que pasa por $(0,5)$?", opts:["$y = 5$", "$x = 5$", "$y = x + 5$", "$x + y = 5$"], ans:"$y = 5$", exp:"Una recta horizontal tiene pendiente $0$ y valor $y$ constante." },
  { id:233, q:"¿Cuál es la ecuación de una recta vertical que pasa por $(3,0)$?", opts:["$x = 3$", "$y = 3$", "$y = 3x$", "$y = x + 3$"], ans:"$x = 3$", exp:"Recta vertical fija el valor de $x$." },
  { id:234, q:"Resuelve: $0.5x = 10$", opts:["$20$", "$5$", "$15$", "$10$"], ans:"$20$", exp:"$10 / 0.5 = 20$." },
  { id:235, q:"Resuelve: $\\frac{2}{3}x = 6$", opts:["$9$", "$4$", "$12$", "$18$"], ans:"$9$", exp:"$x = (6 \\cdot 3) / 2 = 18 / 2 = 9$." },
  { id:236, q:"Si $y = -x + 4$, su intersección con $x$ es:", opts:["$(4,0)$", "$(0,4)$", "$(-4,0)$", "$(0,-4)$"], ans:"$(4,0)$", exp:"Haciendo $y=0$: $0 = -x + 4 \\rightarrow x = 4$." },
  { id:237, q:"¿Cuál de estos puntos pertenece a la recta $y=x+1$?", opts:["$(1,2)$", "$(2,1)$", "$(0,0)$", "$(1,-1)$"], ans:"$(1,2)$", exp:"Sustituyendo $x=1$, $y=1+1=2$. Cumple." },
  { id:238, q:"Resuelve: $3x + 5 = 3x + 2$", opts:["Sin solución", "$x=0$", "$x=3$", "Soluciones infinitas"], ans:"Sin solución", exp:"Las $x$ se cancelan y queda $5 = 2$, lo cual es una contradicción." },
  { id:239, q:"Resuelve: $2(x+1) = 2x + 2$", opts:["Soluciones infinitas", "$x=0$", "$x=1$", "Sin solución"], ans:"Soluciones infinitas", exp:"Se simplifica a $2x+2 = 2x+2$, que es una identidad." },
  { id:240, q:"Si el triple de un número menos dos es diez, ¿cuál es el número?", opts:["$4$", "$3$", "$5$", "$6$"], ans:"$4$", exp:"$3x - 2 = 10 \\rightarrow 3x = 12 \\rightarrow x = 4$." },

  // ── BLOQUE 9: Ecuaciones de 2do grado incompletas (241–270) ────────────────
  { id:241, q:"Resuelve: $x^2 - 9 = 0$ (Caso $b=0$)", opts:["$x = \\pm 3$", "$x = 3$", "$x = 9$", "$x = \\pm 9$"], ans:"$x = \\pm 3$", exp:"$x^2 = 9 \\rightarrow x = \\pm \\sqrt{9} = \\pm 3$." },
  { id:242, q:"Resuelve: $x^2 - 25 = 0$", opts:["$x = \\pm 5$", "$x = 5$", "$x = 25$", "Sin solución real"], ans:"$x = \\pm 5$", exp:"$x^2 = 25 \\rightarrow x = \\pm 5$." },
  { id:243, q:"Resuelve: $2x^2 - 8 = 0$", opts:["$x = \\pm 2$", "$x = 2$", "$x = \\pm 4$", "$x = 4$"], ans:"$x = \\pm 2$", exp:"$2x^2 = 8 \\rightarrow x^2 = 4 \\rightarrow x = \\pm 2$." },
  { id:244, q:"Resuelve: $x^2 + 4 = 0$", opts:["Sin solución real", "$x = \\pm 2$", "$x = -2$", "$x = 4$"], ans:"Sin solución real", exp:"$x^2 = -4$. No existen raíces reales de números negativos." },
  { id:245, q:"Resuelve: $3x^2 - 27 = 0$", opts:["$x = \\pm 3$", "$x = \\pm 9$", "$x = 3$", "$x = -3$"], ans:"$x = \\pm 3$", exp:"$3x^2 = 27 \\rightarrow x^2 = 9 \\rightarrow x = \\pm 3$." },
  { id:246, q:"Resuelve: $x^2 - x = 0$ (Caso $c=0$)", opts:["$x=0, x=1$", "$x=1, x=-1$", "$x=0$", "$x=1$"], ans:"$x=0, x=1$", exp:"Factorizando: $x(x - 1) = 0$." },
  { id:247, q:"Resuelve: $x^2 + 5x = 0$", opts:["$x=0, x=-5$", "$x=0, x=5$", "$x=-5$", "$x=5$"], ans:"$x=0, x=-5$", exp:"$x(x + 5) = 0$." },
  { id:248, q:"Resuelve: $2x^2 - 6x = 0$", opts:["$x=0, x=3$", "$x=0, x=-3$", "$x=3$", "$x=\\pm 3$"], ans:"$x=0, x=3$", exp:"$2x(x - 3) = 0$." },
  { id:249, q:"Resuelve: $x^2 = 4x$", opts:["$x=0, x=4$", "$x=4$", "$x=0, x=-4$", "$x=\\pm 4$"], ans:"$x=0, x=4$", exp:"$x^2 - 4x = 0 \\rightarrow x(x - 4) = 0$." },
  { id:250, q:"Resuelve: $5x^2 = 10x$", opts:["$x=0, x=2$", "$x=2$", "$x=0, x=5$", "$x=\\pm 2$"], ans:"$x=0, x=2$", exp:"$5x^2 - 10x = 0 \\rightarrow 5x(x - 2) = 0$." },
  { id:251, q:"Resuelve: $x^2 = 0$ (Caso $b=0, c=0$)", opts:["$x=0$", "$x=1$", "Sin solución", "$x=\\pm 1$"], ans:"$x=0$", exp:"La única raíz de cero es cero (raíz doble)." },
  { id:252, q:"Resuelve: $3x^2 = 0$", opts:["$x=0$", "$x=3$", "$x=\\pm 3$", "$x=1/3$"], ans:"$x=0$", exp:"$x^2 = 0 \\rightarrow x=0$." },
  { id:253, q:"Resuelve: $-5x^2 = 0$", opts:["$x=0$", "$x=5$", "$x=-5$", "Sin solución"], ans:"$x=0$", exp:"Cualquier múltiplo no nulo de $x^2$ igual a cero implica $x=0$." },
  { id:254, q:"¿Cuáles son las raíces de $x^2 - 16 = 0$?", opts:["$4, -4$", "$16, -16$", "$0, 4$", "$8, -8$"], ans:"$4, -4$", exp:"$x = \\pm \\sqrt{16}$." },
  { id:255, q:"¿Cuáles son las raíces de $x^2 + 7x = 0$?", opts:["$0, -7$", "$0, 7$", "$7, -7$", "$1, -7$"], ans:"$0, -7$", exp:"$x(x + 7) = 0$." },
  { id:256, q:"En el caso incompleto $ax^2 + c = 0$, las raíces son:", opts:["Simétricas u opuestas", "Una es cero", "Siempre imaginarias", "Iguales a cero"], ans:"Simétricas u opuestas", exp:"$x = \\pm \\sqrt{-c/a}$ (si $-c/a > 0$)." },
  { id:257, q:"En el caso incompleto $ax^2 + bx = 0$, una raíz siempre es:", opts:["Cero", "El coeficiente b", "El coeficiente a", "Positiva"], ans:"Cero", exp:"Al factorizar la $x$, tenemos $x(ax+b)=0$, así que $x_1=0$." },
  { id:258, q:"Resuelve: $\\frac{x^2}{2} - 8 = 0$", opts:["$x = \\pm 4$", "$x = \\pm 16$", "$x = 4$", "$x = 16$"], ans:"$x = \\pm 4$", exp:"$x^2 / 2 = 8 \\rightarrow x^2 = 16 \\rightarrow x = \\pm 4$." },
  { id:259, q:"Resuelve: $x(x - 2) = 0$", opts:["$0, 2$", "$0, -2$", "$1, 2$", "$2, -2$"], ans:"$0, 2$", exp:"Igualamos cada factor a cero." },
  { id:260, q:"Resuelve: $2x(x + 5) = 0$", opts:["$0, -5$", "$0, 5$", "$2, -5$", "$2, 5$"], ans:"$0, -5$", exp:"$2x=0 \\rightarrow x=0$. Y $x+5=0 \\rightarrow x=-5$." },
  { id:261, q:"Resuelve: $x^2 - 1 = 0$", opts:["$1, -1$", "$0, 1$", "$1, 1$", "Sin solución"], ans:"$1, -1$", exp:"$x^2 = 1 \\rightarrow x = \\pm 1$." },
  { id:262, q:"Resuelve: $x^2 - \\frac{1}{4} = 0$", opts:["$\\pm 1/2$", "$\\pm 1/4$", "$1/2$", "$-1/4$"], ans:"$\\pm 1/2$", exp:"La raíz cuadrada de $1/4$ es $1/2$." },
  { id:263, q:"¿Qué valor de $x$ satisface $4x^2 - 36 = 0$?", opts:["$\\pm 3$", "$\\pm 9$", "$\\pm 6$", "$3$"], ans:"$\\pm 3$", exp:"$4x^2 = 36 \\rightarrow x^2 = 9 \\rightarrow x = \\pm 3$." },
  { id:264, q:"Si el área de un cuadrado es 49, ¿cuánto mide su lado (x)?", opts:["$7$", "$-7$", "$\\pm 7$", "$49$"], ans:"$7$", exp:"$x^2 = 49$. Aunque algebraicamente es $\\pm 7$, como es lado es positivo." },
  { id:265, q:"Resuelve: $-x^2 + 100 = 0$", opts:["$\\pm 10$", "$\\pm 100$", "Sin solución", "$10$"], ans:"$\\pm 10$", exp:"$100 = x^2 \\rightarrow x = \\pm 10$." },
  { id:266, q:"Resuelve: $7x^2 - 7x = 0$", opts:["$0, 1$", "$0, -1$", "$1, -1$", "$7, 1$"], ans:"$0, 1$", exp:"$7x(x - 1) = 0$." },
  { id:267, q:"Para que $x^2 - c = 0$ no tenga solución real, $c$ debe ser:", opts:["Negativo", "Positivo", "Cero", "Mayor a 1"], ans:"Negativo", exp:"Si $c$ es negativo, $x^2$ sería igual a un número negativo, lo cual no es real." },
  { id:268, q:"La ecuación de una parábola centrada en el origen es tipo:", opts:["$y = ax^2$", "$y = mx+b$", "$y = ax^2+bx$", "$y = 1/x$"], ans:"$y = ax^2$", exp:"Su vértice está en $(0,0)$." },
  { id:269, q:"El vértice de $y = x^2 - 4$ está en:", opts:["$(0, -4)$", "$(0, 0)$", "$(-4, 0)$", "$(2, 0)$"], ans:"$(0, -4)$", exp:"La curva $y=x^2$ baja 4 unidades en el eje Y." },
  { id:270, q:"¿Cuáles son los cortes en X de $y = x^2 - 4$?", opts:["$2, -2$", "$4, -4$", "$0, -4$", "$0, 0$"], ans:"$2, -2$", exp:"Se hace $y=0 \\rightarrow x^2 - 4 = 0$." },

  // ── BLOQUE 10: Ecuaciones de 2do grado (Fórmula general y casos) (271–300) ─
  { id:271, q:"¿Cuál es la fórmula general (chicharronera)?", opts:["$\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$", "$\\frac{b \\pm \\sqrt{b^2 - 4ac}}{2a}$", "$\\frac{-b \\pm \\sqrt{b^2 + 4ac}}{2a}$", "$\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{a}$"], ans:"$\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$", exp:"Es la fórmula estándar para resolver $ax^2+bx+c=0$." },
  { id:272, q:"¿Qué expresión representa el discriminante?", opts:["$b^2 - 4ac$", "$\\sqrt{b^2 - 4ac}$", "$b^2 + 4ac$", "$-b \\pm \\sqrt{b^2 - 4ac}$"], ans:"$b^2 - 4ac$", exp:"Lo que está dentro de la raíz cuadrada se llama discriminante ($\\Delta$)." },
  { id:273, q:"Si el discriminante es $> 0$, ¿cómo son las raíces?", opts:["Reales y distintas", "Reales e iguales", "Imaginarias / No reales", "Solo una raíz real"], ans:"Reales y distintas", exp:"La raíz cuadrada de un número positivo da dos resultados reales." },
  { id:274, q:"Si el discriminante es $= 0$, ¿cómo son las raíces?", opts:["Reales e iguales (una solución)", "Reales y distintas", "Imaginarias", "No tiene raíces"], ans:"Reales e iguales (una solución)", exp:"Se suma y resta cero, dejando un único valor: $-b/2a$." },
  { id:275, q:"Si el discriminante es $< 0$, ¿cómo son las raíces?", opts:["No reales / Imaginarias", "Reales y distintas", "Reales e iguales", "Cero"], ans:"No reales / Imaginarias", exp:"No existe la raíz cuadrada real de un número negativo." },
  { id:276, q:"Halla el discriminante de $x^2 - 5x + 6 = 0$.", opts:["$1$", "$25$", "$49$", "$-1$"], ans:"$1$", exp:"$(-5)^2 - 4(1)(6) = 25 - 24 = 1$." },
  { id:277, q:"¿Cuántas raíces reales tiene $x^2 - 4x + 4 = 0$?", opts:["1 (raíz doble)", "2", "0", "Infinitas"], ans:"1 (raíz doble)", exp:"Discriminante: $(-4)^2 - 4(1)(4) = 16 - 16 = 0$." },
  { id:278, q:"¿Cuántas raíces reales tiene $x^2 + x + 1 = 0$?", opts:["0", "1", "2", "3"], ans:"0", exp:"Discriminante: $1^2 - 4(1)(1) = 1 - 4 = -3$ (negativo)." },
  { id:279, q:"Resuelve: $x^2 - 5x + 6 = 0$", opts:["$2, 3$", "$-2, -3$", "$1, 6$", "$-1, -6$"], ans:"$2, 3$", exp:"Factorizando: $(x-2)(x-3)=0$." },
  { id:280, q:"Resuelve: $x^2 + 5x + 6 = 0$", opts:["$-2, -3$", "$2, 3$", "$1, 6$", "$-1, -6$"], ans:"$-2, -3$", exp:"Factorizando: $(x+2)(x+3)=0$." },
  { id:281, q:"Resuelve: $x^2 - x - 2 = 0$", opts:["$-1, 2$", "$1, -2$", "$1, 2$", "$-1, -2$"], ans:"$-1, 2$", exp:"$(x-2)(x+1)=0$." },
  { id:282, q:"En $ax^2 + bx + c = 0$, la suma de las raíces es:", opts:["$-b/a$", "$c/a$", "$b/a$", "$-c/a$"], ans:"$-b/a$", exp:"Fórmula de Vieta para la suma de raíces." },
  { id:283, q:"En $ax^2 + bx + c = 0$, el producto de las raíces es:", opts:["$c/a$", "$-b/a$", "$-c/a$", "$b/a$"], ans:"$c/a$", exp:"Fórmula de Vieta para el producto de raíces." },
  { id:284, q:"¿Cuál es la suma de las raíces de $x^2 - 7x + 10 = 0$?", opts:["$7$", "$-7$", "$10$", "$-10$"], ans:"$7$", exp:"$-b/a = -(-7)/1 = 7$." },
  { id:285, q:"¿Cuál es el producto de las raíces de $x^2 - 7x + 10 = 0$?", opts:["$10$", "$-10$", "$7$", "$-7$"], ans:"$10$", exp:"$c/a = 10/1 = 10$." },
  { id:286, q:"Construye la ecuación si sus raíces son $3$ y $4$.", opts:["$x^2 - 7x + 12 = 0$", "$x^2 + 7x + 12 = 0$", "$x^2 - 7x - 12 = 0$", "$x^2 + 12x + 7 = 0$"], ans:"$x^2 - 7x + 12 = 0$", exp:"$(x-3)(x-4) = x^2 - 7x + 12$." },
  { id:287, q:"¿Qué valor de $x$ satisface $(x-1)^2 = 9$?", opts:["$4, -2$", "$10, -8$", "$3, -3$", "$2, -4$"], ans:"$4, -2$", exp:"$x-1 = \\pm 3 \\rightarrow x = 1 \\pm 3$." },
  { id:288, q:"Usa la fórmula general para $x^2 - 2x - 3 = 0$. Las raíces son:", opts:["$3, -1$", "$-3, 1$", "$3, 1$", "$-3, -1$"], ans:"$3, -1$", exp:"$\\frac{2 \\pm \\sqrt{4 - 4(-3)}}{2} = \\frac{2 \\pm 4}{2}$." },
  { id:289, q:"El vértice de la parábola $y = ax^2 + bx + c$ se encuentra en $x = $", opts:["$-b / (2a)$", "$b / (2a)$", "$-b / a$", "$\\pm \\sqrt{c}$"], ans:"$-b / (2a)$", exp:"Fórmula para la coordenada x del vértice." },
  { id:290, q:"¿En qué coordenada x está el vértice de $y = x^2 - 4x + 4$?", opts:["$2$", "$-2$", "$4$", "$0$"], ans:"$2$", exp:"$-b / (2a) = -(-4) / (2) = 2$." },
  { id:291, q:"Resuelve: $2x^2 - 5x + 3 = 0$", opts:["$1, 3/2$", "$-1, -3/2$", "$1, -3/2$", "$-1, 3/2$"], ans:"$1, 3/2$", exp:"Discriminante: $25 - 24 = 1$. Raíces: $(5 \\pm 1)/4 \\rightarrow 6/4$ y $4/4$." },
  { id:292, q:"¿Cuál de estas ecuaciones no tiene solución en los números reales?", opts:["$x^2 + 9 = 0$", "$x^2 - 9 = 0$", "$x^2 - 3x = 0$", "$x^2 - 5x + 6 = 0$"], ans:"$x^2 + 9 = 0$", exp:"$x^2$ no puede ser un número negativo." },
  { id:293, q:"Si la suma de dos números es $5$ y su producto es $6$, los números son raíces de:", opts:["$x^2 - 5x + 6 = 0$", "$x^2 + 5x + 6 = 0$", "$x^2 - 6x + 5 = 0$", "$x^2 + 6x + 5 = 0$"], ans:"$x^2 - 5x + 6 = 0$", exp:"Por Vieta: $x^2 - (Suma)x + Producto = 0$." },
  { id:294, q:"Resuelve: $(2x - 1)(x + 3) = 0$", opts:["$1/2, -3$", "$-1/2, 3$", "$1, -3$", "$2, -3$"], ans:"$1/2, -3$", exp:"$2x-1=0 \\rightarrow x=1/2$. $x+3=0 \\rightarrow x=-3$." },
  { id:295, q:"¿Cuál es la raíz doble de $x^2 - 12x + 36 = 0$?", opts:["$6$", "$-6$", "$12$", "$36$"], ans:"$6$", exp:"$(x-6)^2 = 0 \\rightarrow x=6$." },
  { id:296, q:"Encuentra $c$ para que $x^2 + 10x + c$ sea un TCP.", opts:["$25$", "$100$", "$5$", "$50$"], ans:"$25$", exp:"$(b/2)^2 = (10/2)^2 = 25$." },
  { id:297, q:"¿Qué indica un término 'a' negativo en $y = ax^2+bx+c$?", opts:["Abre hacia abajo", "Abre hacia arriba", "No es parábola", "Pasa por el origen"], ans:"Abre hacia abajo", exp:"El coeficiente principal negativo invierte la concavidad." },
  { id:298, q:"Resuelve: $x^2 = x + 2$", opts:["$2, -1$", "$-2, 1$", "$2, 1$", "$-2, -1$"], ans:"$2, -1$", exp:"$x^2 - x - 2 = 0 \\rightarrow (x-2)(x+1)=0$." },
  { id:299, q:"Resuelve: $x(x - 5) = 6$", opts:["$6, -1$", "$-6, 1$", "$3, 2$", "$-3, -2$"], ans:"$6, -1$", exp:"$x^2 - 5x - 6 = 0 \\rightarrow (x-6)(x+1)=0$." },
  { id:300, q:"¿Cuáles son las intersecciones con el eje X de la gráfica $y = x^2 - 1$?", opts:["$1, -1$", "$0, 1$", "$0, -1$", "No tiene"], ans:"$1, -1$", exp:"$x^2 - 1 = 0 \\rightarrow x = \\pm 1$." }
];

// ─── NIVELES Y BLOQUES ────────────────────────────────────────────────────
const LEVELS = [
  { label:"Suma y Resta Alg.",       range:[1, 30],     color:C.blue },
  { label:"Producto y División",     range:[31, 60],    color:C.teal },
  { label:"Raíces y Potencias",      range:[61, 90],    color:C.purple },
  { label:"Simplificación Alg.",     range:[91, 120],   color:C.gold },
  { label:"Productos Notables",      range:[121, 150],  color:C.orange },
  { label:"Factorización",           range:[151, 180],  color:C.crimson },
  { label:"Binomio de Newton",       range:[181, 210],  color:C.blue },
  { label:"Ecuaciones 1er Grado",    range:[211, 240],  color:C.teal },
  { label:"Ec. 2do (Incompletas)",   range:[241, 270],  color:C.purple },
  { label:"Fórmula General",         range:[271, 300],  color:C.gold },
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

export default function AlgebraPrepa() {
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
          Álgebra: Expresiones y Ecuaciones
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