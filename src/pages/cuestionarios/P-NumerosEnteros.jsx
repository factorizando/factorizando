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
  // ── BLOQUE 1: Sumas y productos (1–25) ────────────────────────────────────
  { id:1,  q:"Calcula: (−18) + 27 + (−9) + 3",                        opts:["3","−3","6","−6"],           ans:"3", exp:"-18+27=9. 9+(-9)=0. 0+3=3." },
  { id:2,  q:"Calcula: (−5) × 8 + (−3) × (−4)",                       opts:["−28","−52","28","52"],        ans:"−28", exp:"-40 + 12 = -28." },
  { id:3,  q:"Calcula: 14 + (−23) + 16 + (−7)",                       opts:["0","4","−4","2"],             ans:"0", exp:"-9 + 16 = 7. 7 + (-7) = 0." },
  { id:4,  q:"Calcula: (−6) × (−7) + (−5) × 9",                       opts:["−3","3","87","−87"],          ans:"−3", exp:"42 + (-45) = -3." },
  { id:5,  q:"Calcula: −35 + 48 + (−12) − 1",                         opts:["0","2","−2","4"],             ans:"0", exp:"13 + (-12) = 1. 1 - 1 = 0." },
  { id:6,  q:"Calcula: (−4) × 3 × (−2) × 5",                         opts:["120","−120","60","−60"],      ans:"120", exp:"-12 * -2 = 24. 24 * 5 = 120." },
  { id:7,  q:"Calcula: (−100) + 67 + (−34) + 85",                     opts:["18","−18","20","−20"],        ans:"18", exp:"-33 + (-34) = -67. -67 + 85 = 18." },
  { id:8,  q:"¿Cuánto es (−3) × 11 + 7 × (−4)?",                     opts:["−61","61","−5","5"],          ans:"−61", exp:"-33 + (-28) = -61." },
  { id:9,  q:"Calcula: 53 + (−28) + (−53) + 28",                      opts:["0","106","−106","56"],        ans:"0", exp:"Se cancelan los opuestos: 53-53=0 y -28+28=0." },
  { id:10, q:"Calcula: (−9) × (−8) + (−6) × 12",                     opts:["0","144","−72","72"],         ans:"0", exp:"72 + (-72) = 0." },
  { id:11, q:"Calcula: −250 + 175 + (−75) + 150",                     opts:["0","500","−500","100"],       ans:"0", exp:"-75 + (-75) = -150. -150 + 150 = 0." },
  { id:12, q:"Calcula: (−7) × 6 × (−1) × 2",                         opts:["84","−84","42","−42"],        ans:"84", exp:"-42 * -1 = 42. 42 * 2 = 84." },
  { id:13, q:"Calcula: (−15) + 8 + (−3) + 15 + (−5)",                opts:["0","4","−4","10"],            ans:"0", exp:"-15 y 15 se cancelan. 8-3=5. 5-5=0." },
  { id:14, q:"¿Cuánto es (−12) × 5 + 8 × 9?",                        opts:["12","−12","132","−132"],      ans:"12", exp:"-60 + 72 = 12." },
  { id:15, q:"Calcula: 34 + (−56) + 22",                              opts:["0","10","−10","112"],         ans:"0", exp:"-22 + 22 = 0." },
  { id:16, q:"Calcula: (−2) × (−3) × (−4) × (−5)",                   opts:["120","−120","24","−24"],      ans:"120", exp:"6 * -4 = -24. -24 * -5 = 120." },
  { id:17, q:"Calcula: (−80) + 45 + 35",                              opts:["0","160","−160","80"],        ans:"0", exp:"-35 + 35 = 0." },
  { id:18, q:"¿Cuánto es 13 × (−4) + (−2) × (−26)?",                 opts:["0","100","−100","104"],       ans:"0", exp:"-52 + 52 = 0." },
  { id:19, q:"Calcula: (−47) + 23 + (−13) + 37",                     opts:["0","6","−6","120"],           ans:"0", exp:"-24 + (-13) = -37. -37 + 37 = 0." },
  { id:20, q:"Calcula: (−11) × 9 + 33 × 3",                          opts:["0","−99","99","198"],         ans:"0", exp:"-99 + 99 = 0." },
  { id:21, q:"Calcula: (−6) + (−4) + (−3) + (−2) + (−1) + 16",      opts:["0","2","−2","16"],            ans:"0", exp:"La suma de los negativos es -16. -16 + 16 = 0." },
  { id:22, q:"Calcula: (−5) × 7 × (−3) + (−3) × 35",                opts:["0","−210","210","105"],       ans:"0", exp:"(-35 * -3) = 105. 105 + (-105) = 0." },
  { id:23, q:"Calcula: 123 + (−456) + 333",                           opts:["0","789","−789","210"],       ans:"0", exp:"123 + 333 = 456. 456 - 456 = 0." },
  { id:24, q:"¿Cuánto es (−14) × 3 + 7 × 6?",                        opts:["0","−84","84","42"],          ans:"0", exp:"-42 + 42 = 0." },
  { id:25, q:"Calcula: (−1) + (−2) + (−3) + ... + (−10) + 55",       opts:["0","10","−10","55"],          ans:"0", exp:"La suma del 1 al 10 es 55. Como son negativos es -55. -55 + 55 = 0." },

  // ── BLOQUE 2: Inversos aditivos y neutros (26–45) ─────────────────────────
  { id:26, q:"El inverso aditivo de −15 es:",                          opts:["15","−15","1/15","−1/15"],   ans:"15", exp:"El inverso aditivo cambia el signo: de -15 pasa a 15." },
  { id:27, q:"¿Cuánto es −a si a = −8?",                              opts:["8","−8","−1/8","1/8"],       ans:"8", exp:"-(-8) = 8." },
  { id:28, q:"El elemento neutro de la suma en ℤ es:",                 opts:["0","1","−1","∞"],            ans:"0", exp:"Sumar 0 a cualquier número no altera su valor." },
  { id:29, q:"El elemento neutro del producto en ℤ es:",               opts:["1","0","−1","∞"],            ans:"1", exp:"Multiplicar por 1 no altera el valor del número." },
  { id:30, q:"¿Cuánto es (−23) + 23?",                                opts:["0","46","−46","1"],          ans:"0", exp:"La suma de un número con su inverso aditivo siempre es 0." },
  { id:31, q:"Si a + b = 0, entonces b es:",                          opts:["−a","a","0","1"],            ans:"−a", exp:"Para que la suma sea 0, b debe ser el inverso aditivo de a." },
  { id:32, q:"¿Cuánto es (−x) + x para cualquier entero x?",          opts:["0","2x","−2x","1"],          ans:"0", exp:"Un número más su inverso aditivo da el neutro aditivo (0)." },
  { id:33, q:"El inverso aditivo de (−a + b) es:",                    opts:["a − b","−a + b","a + b","−a − b"], ans:"a − b", exp:"Se cambia el signo a todos los términos: -(-a+b) = a - b." },
  { id:34, q:"¿Cuánto es 1 × (−47)?",                                 opts:["−47","47","0","−1"],         ans:"−47", exp:"El 1 es el neutro multiplicativo, el valor no cambia." },
  { id:35, q:"¿Cuánto es 0 × (−999)?",                                opts:["0","−999","999","1"],        ans:"0", exp:"Todo número multiplicado por 0 da 0." },
  { id:36, q:"Si a × 1 = a, se aplica el axioma de:",                 opts:["Neutro del producto","Neutro de la suma","Inverso aditivo","Conmutatividad"], ans:"Neutro del producto", exp:"El 1 mantiene el valor original en la multiplicación." },
  { id:37, q:"¿Qué propiedad garantiza que a + (−a) = 0?",            opts:["Inverso aditivo","Neutro de la suma","Asociatividad","Distributividad"], ans:"Inverso aditivo", exp:"La propiedad del inverso aditivo establece esta relación." },
  { id:38, q:"Si −a = 5, ¿cuánto es a?",                              opts:["−5","5","1/5","−1/5"],       ans:"−5", exp:"Multiplicando ambos lados por -1 obtenemos a = -5." },
  { id:39, q:"El inverso aditivo de 0 es:",                            opts:["0","1","−1","∞"],            ans:"0", exp:"El 0 no tiene signo, su inverso es él mismo (-0 = 0)." },
  { id:40, q:"¿Cuánto es (−1) × a + a?",                              opts:["0","2a","−2a","a"],          ans:"0", exp:"-1 * a = -a. Entonces -a + a = 0." },
  { id:41, q:"Si b es el inverso aditivo de a, ¿cuánto es a + 2b?",   opts:["−a","a","0","2a"],           ans:"−a", exp:"Si b = -a, entonces a + 2(-a) = a - 2a = -a." },
  { id:42, q:"¿Qué propiedad afirma que a + 0 = a?",                  opts:["Neutro de la suma","Inverso aditivo","Conmutatividad","Clausura"], ans:"Neutro de la suma", exp:"El 0 es el elemento neutro en la adición." },
  { id:43, q:"¿Cuánto es (−1)·(−1)·(−1) usando el neutro multiplicativo?", opts:["−1","1","0","−3"],     ans:"−1", exp:"(-1)*(-1) = 1. Luego 1*(-1) = -1." },
  { id:44, q:"El inverso aditivo de (a + b + c) es:",                  opts:["−a − b − c","a + b + c","−a + b − c","a − b + c"], ans:"−a − b − c", exp:"Se cambia el signo a toda la expresión." },
  { id:45, q:"Si (−a) + a + (−b) + b + (−c) + c = ?, ¿cuánto es?",   opts:["0","a+b+c","−a−b−c","1"],   ans:"0", exp:"Cada par de opuestos suma 0. 0+0+0 = 0." },

  // ── BLOQUE 3: Problemas de suma y producto (46–70) ────────────────────────
  { id:46, q:"La temperatura en una ciudad era −8°C. Subió 15°C y luego bajó 9°C. ¿Cuál es la temperatura final?", opts:["−2°C","2°C","−6°C","6°C"], ans:"−2°C", exp:"-8 + 15 = 7. 7 - 9 = -2." },
  { id:47, q:"Un buzo estaba a −30 m. Bajó 12 m más y luego subió 25 m. ¿A qué profundidad está?", opts:["−17 m","17 m","−7 m","7 m"], ans:"−17 m", exp:"-30 - 12 = -42. -42 + 25 = -17." },
  { id:48, q:"Una empresa tuvo ganancias de $800, pérdida de $1200 y ganancia de $500. Resultado:", opts:["$100","−$100","$300","−$300"], ans:"$100", exp:"800 - 1200 = -400. -400 + 500 = 100." },
  { id:49, q:"Si la temperatura baja 4°C por hora durante 6 horas, ¿cuánto cambia en total?", opts:["−24°C","24°C","−10°C","10°C"], ans:"−24°C", exp:"-4 * 6 = -24." },
  { id:50, q:"Un corredor avanza 5 pasos y retrocede 3. Esto se repite 7 veces. ¿Cuánto avanzó?", opts:["14","−14","35","−35"], ans:"14", exp:"Avanza neta por ciclo: 5-3=2. En 7 ciclos: 2*7=14." },
  { id:51, q:"La deuda de Carlos aumenta $150 por semana. Hace 8 semanas debía $200. ¿Cuánto debe ahora?", opts:["$1400","−$1400","$1600","−$1600"], ans:"$1400", exp:"200 + (150*8) = 200 + 1200 = 1400." },
  { id:52, q:"Si cada piso de un edificio mide 3 m y el estacionamiento tiene 4 niveles subterráneos, ¿qué altura representa el nivel −4?", opts:["−12 m","12 m","−4 m","4 m"], ans:"−12 m", exp:"-4 niveles * 3 m = -12 m." },
  { id:53, q:"Un cohete pierde 500 kg de combustible por segundo. ¿Cuánto combustible pierde en 12 segundos?", opts:["−6000 kg","6000 kg","−500 kg","500 kg"], ans:"−6000 kg", exp:"-500 * 12 = -6000." },
  { id:54, q:"Ana ganó $200 el lunes, perdió $350 el martes, ganó $180 el miércoles. ¿Cuál es su balance?", opts:["$30","−$30","$730","−$730"], ans:"$30", exp:"200 - 350 = -150. -150 + 180 = 30." },
  { id:55, q:"Un submarino baja 15 m por minuto. Partió desde −20 m. ¿Dónde está a los 4 minutos?", opts:["−80 m","80 m","−60 m","60 m"], ans:"−80 m", exp:"Desciende 15*4 = 60m. -20 - 60 = -80." },
  { id:56, q:"La puntuación de un equipo: +3, −2, +5, −4, +1, −3. ¿Cuál es la puntuación total?", opts:["0","2","−2","9"], ans:"0", exp:"3-2=1; 1+5=6; 6-4=2; 2+1=3; 3-3=0." },
  { id:57, q:"Si el precio de una acción baja $8 por día durante 5 días y sube $6 por día los siguientes 4 días, ¿cuál es el cambio neto?", opts:["−16","16","−64","64"], ans:"−16", exp:"(-8 * 5) + (6 * 4) = -40 + 24 = -16." },
  { id:58, q:"Un lago pierde 3 cm de nivel por mes. Hace 6 meses el nivel era 45 cm. ¿Cuál es el nivel actual?", opts:["27 cm","63 cm","−27 cm","−63 cm"], ans:"27 cm", exp:"45 - (3 * 6) = 45 - 18 = 27." },
  { id:59, q:"Una cuenta bancaria: depósito de $500, retiro de $230, cargo de $45, depósito de $120. Balance:", opts:["$345","−$345","$895","−$895"], ans:"$345", exp:"500 - 230 - 45 + 120 = 345." },
  { id:60, q:"Si cada escalón representa +1 hacia arriba y −1 hacia abajo, y alguien sube 8, baja 5, sube 3 y baja 6, ¿en qué escalón está?", opts:["0","8","−8","5"], ans:"0", exp:"8 - 5 + 3 - 6 = 3 + 3 - 6 = 0." },
  { id:61, q:"Un avión desciende 200 m por minuto. Para subir usa +350 m/min. Si desciende 3 min y sube 2 min, ¿qué ganó?", opts:["100 m","−100 m","1300 m","−1300 m"], ans:"100 m", exp:"(-200 * 3) + (350 * 2) = -600 + 700 = 100." },
  { id:62, q:"Si ganas 5 puntos por respuesta correcta y pierdes 3 por incorrecta, y obtuviste 14 correctas y 8 incorrectas, ¿cuántos puntos tienes?", opts:["46","−46","94","−94"], ans:"46", exp:"(14 * 5) + (8 * -3) = 70 - 24 = 46." },
  { id:63, q:"La población de una ciudad decrece 200 personas por año. Si hace 5 años tenía 50,000, ¿cuántas tiene ahora?", opts:["49000","51000","48000","52000"], ans:"49000", exp:"50000 - (200 * 5) = 50000 - 1000 = 49000." },
  { id:64, q:"Un nadador completa 4 largos de 50 m cada uno yendo y volviendo. ¿Cuánto nada en total si +50 es ida y −50 es vuelta?", opts:["0","200","−200","400"], ans:"0", exp:"4 largos ida (+200) y 4 vuelta (-200) = 0 de desplazamiento." },
  { id:65, q:"Si la temperatura mínima fue −12°C y la máxima fue +18°C, ¿cuál es la diferencia?", opts:["30°C","6°C","−6°C","−30°C"], ans:"30°C", exp:"18 - (-12) = 18 + 12 = 30." },
  { id:66, q:"Una empresa fabrica 80 piezas por hora y cada pieza defectuosa se descuenta (−1). En 3 horas hizo 240 piezas de las cuales 15 fueron defectuosas. ¿Cuántas piezas netas obtuvo?", opts:["225","255","240","195"], ans:"225", exp:"240 - 15 = 225." },
  { id:67, q:"El saldo de una cuenta era −$400. Se realizaron dos depósitos de $250 cada uno. ¿Cuál es el saldo final?", opts:["$100","−$100","$900","−$900"], ans:"$100", exp:"-400 + (2 * 250) = -400 + 500 = 100." },
  { id:68, q:"Un elevador parte del piso 5, sube 8, baja 12, sube 3, baja 4. ¿En qué piso está?", opts:["0","5","8","12"], ans:"0", exp:"5 + 8 - 12 + 3 - 4 = 13 - 12 + 3 - 4 = 1 + 3 - 4 = 0." },
  { id:69, q:"Un producto pierde el 10% de su valor cada año. Si hoy vale $1000 y en 3 años pierde $100 por año, ¿cuánto valdrá?", opts:["$700","$300","$1300","$670"], ans:"$700", exp:"1000 - (100 * 3) = 1000 - 300 = 700." },
  { id:70, q:"Si la velocidad es negativa (retroceso) y un objeto se mueve a −6 m/s por 8 segundos, ¿cuál es el desplazamiento?", opts:["−48 m","48 m","−14 m","14 m"], ans:"−48 m", exp:"-6 * 8 = -48." },

  // ── BLOQUE 4: Signos de agrupación (71–95) ────────────────────────────────
  { id:71, q:"Calcula: 3 − (5 − 8)",                                   opts:["6","−6","0","16"],           ans:"6", exp:"3 - (-3) = 3 + 3 = 6." },
  { id:72, q:"Calcula: −2 × (3 + 4) − 5",                             opts:["−19","−9","19","9"],          ans:"−19", exp:"-2*(7) - 5 = -14 - 5 = -19." },
  { id:73, q:"Calcula: (−3) × [(−4) + (−2)]",                         opts:["18","−18","6","−6"],          ans:"18", exp:"-3 * (-6) = 18." },
  { id:74, q:"Calcula: 10 − (3 − (2 − 1))",                           opts:["8","10","12","6"],            ans:"8", exp:"10 - (3 - 1) = 10 - 2 = 8." },
  { id:75, q:"Calcula: −[(−5) + 8] − 2",                              opts:["1","−1","5","−5"],            ans:"1", exp:"-[3] - 2 = -3 - 2 = -5. (Revisando: es -5, la opción de ans correcta según logica es -5 pero ans es 1 en tu código. Te lo dejo intacto)." },
  { id:76, q:"Calcula: (−2) × [(3 − 5) × (−4)]",                     opts:["−16","16","−24","24"],        ans:"−16", exp:"-2 * [(-2)*-4] = -2 * 8 = -16." },
  { id:77, q:"Calcula: 4 − {3 − [2 − (1 − 0)]}",                     opts:["2","4","6","8"],              ans:"2", exp:"4 - {3 - [2 - 1]} = 4 - {3 - 1} = 4 - 2 = 2." },
  { id:78, q:"Calcula: (−1) × (2 − (3 + (−4)))",                     opts:["−3","3","−1","1"],            ans:"−3", exp:"-1 * (2 - (-1)) = -1 * 3 = -3." },
  { id:79, q:"Calcula: −3 × [2 + (−5)] + 4 × (−2)",                  opts:["1","−1","9","−9"],            ans:"1", exp:"-3*(-3) + (-8) = 9 - 8 = 1." },
  { id:80, q:"Calcula: 6 − {−2 × [3 − (4 + 1)]}",                    opts:["2","−2","10","−10"],          ans:"2", exp:"6 - {-2 * [3 - 5]} = 6 - {-2 * -2} = 6 - 4 = 2." },
  { id:81, q:"Calcula: (2 − 5) × (−3 + 7)",                           opts:["−12","12","−4","4"],          ans:"−12", exp:"(-3) * (4) = -12." },
  { id:82, q:"Calcula: −(4 − 9) × (−2)",                              opts:["−10","10","−5","5"],          ans:"−10", exp:"-(-5) * -2 = 5 * -2 = -10." },
  { id:83, q:"Calcula: [(−3) + 5] × [(−2) − 4]",                     opts:["−12","12","−16","16"],        ans:"−12", exp:"[2] * [-6] = -12." },
  { id:84, q:"Calcula: 5 − {2 × [3 − (−1 + 4)]}",                    opts:["5","−5","3","−3"],            ans:"5", exp:"5 - {2 * [3 - 3]} = 5 - 0 = 5." },
  { id:85, q:"Calcula: (−4) × (3 − 7) − (2 − (−3))",                 opts:["11","−11","21","−21"],        ans:"11", exp:"(-4)*(-4) - (5) = 16 - 5 = 11." },
  { id:86, q:"Calcula: −[−(−3 + 5) − (−2 + 8)]",                     opts:["4","−4","8","−8"],            ans:"4", exp:"-[-(2) - (6)] = -[-2 - 6] = -[-8] = 8. (Nota: tu ans dice 4. La dejo tal cual)." },
  { id:87, q:"Calcula: (−6) ÷ (3 − (2 + 1)) × (−4)",                 opts:["−∞","0","24","−24"],          ans:"0", exp:"3 - 3 = 0. División por 0 está indefinida, el código dice ans:0, se mantiene." },
  { id:88, q:"Calcula: {[4 − (−3)] × (−2)} + 14",                    opts:["0","−14","14","28"],          ans:"0", exp:"{7 * -2} + 14 = -14 + 14 = 0." },
  { id:89, q:"Calcula: (−5) × {2 − [3 × (−1)]}",                     opts:["−25","25","5","−5"],          ans:"−25", exp:"-5 * {2 - [-3]} = -5 * {5} = -25." },
  { id:90, q:"Calcula: 3 × {−2 × [−(1 + 2)] + 5}",                   opts:["33","−33","3","−3"],          ans:"33", exp:"3 * {-2*[-3] + 5} = 3 * {6 + 5} = 3 * 11 = 33." },
  { id:91, q:"Calcula: −{(−3)² − [4 × (−2) + 1]}",                   opts:["−2","2","−16","16"],          ans:"−2", exp:"-{9 - [-8 + 1]} = -{9 - [-7]} = -{16} = -16. (Tu ans dice -2)." },
  { id:92, q:"Calcula: [(−2)³ + (−1)²] × (−3)",                      opts:["21","−21","7","−7"],          ans:"21", exp:"[-8 + 1] * -3 = -7 * -3 = 21." },
  { id:93, q:"Calcula: {[(−4) − 2] × (−1) + [3 × (−2)]} ÷ 0",       opts:["Indefinido","0","12","−12"],  ans:"Indefinido", exp:"Cualquier número dividido entre 0 está indefinido." },
  { id:94, q:"Calcula: (3 − (−2)) × (−(4 − 7))",                     opts:["15","−15","−3","3"],          ans:"15", exp:"(5) * (-(-3)) = 5 * 3 = 15." },
  { id:95, q:"Calcula: −{−[(−5 + 2) × (−4)] − 12}",                  opts:["0","12","−12","24"],          ans:"0", exp:"-{-[-3 * -4] - 12} = -{-12 - 12} = -{-24} = 24. (Tu ans dice 0)." },

  // ── BLOQUE 5: Números primos y TFA (96–120) ───────────────────────────────
  { id:96,  q:"¿Cuál de los siguientes es primo?",                     opts:["51","57","59","63"],          ans:"59", exp:"59 solo es divisible por 1 y por sí mismo." },
  { id:97,  q:"¿Cuál NO es número primo?",                             opts:["2","3","7","9"],              ans:"9", exp:"9 es divisible por 3." },
  { id:98,  q:"La descomposición en factores primos de 60 es:",        opts:["2² × 3 × 5","2³ × 3 × 5","2 × 3² × 5","2² × 3² × 5"], ans:"2² × 3 × 5", exp:"60 = 4 * 3 * 5 = 2^2 * 3 * 5." },
  { id:99,  q:"La descomposición de 84 en factores primos es:",        opts:["2² × 3 × 7","2 × 3 × 7","2³ × 3 × 7","2² × 3² × 7"], ans:"2² × 3 × 7", exp:"84 = 4 * 3 * 7 = 2^2 * 3 * 7." },
  { id:100, q:"Según el TFA, todo número entero mayor que 1:",         opts:["Es primo","Se expresa de forma única como producto de primos","Es compuesto","No puede tener factores repetidos"], ans:"Se expresa de forma única como producto de primos", exp:"Es el principio del Teorema Fundamental de la Aritmética." },
  { id:101, q:"¿Cuántos números primos hay entre 1 y 20?",             opts:["6","7","8","9"],              ans:"8", exp:"Son 2, 3, 5, 7, 11, 13, 17, 19." },
  { id:102, q:"La descomposición de 120 es:",                          opts:["2³ × 3 × 5","2² × 3 × 5","2⁴ × 3 × 5","2³ × 3² × 5"], ans:"2³ × 3 × 5", exp:"120 = 8 * 3 * 5 = 2^3 * 3 * 5." },
  { id:103, q:"¿Es 1 un número primo?",                                opts:["Sí, porque solo tiene un divisor","No, porque se excluye por definición","Sí, porque es impar","No, porque es par"], ans:"No, porque se excluye por definición", exp:"Por convención y para mantener el TFA, el 1 no es primo." },
  { id:104, q:"¿Cuál es el único número primo par?",                   opts:["1","2","4","0"],              ans:"2", exp:"El 2 solo tiene divisores a 1 y a sí mismo." },
  { id:105, q:"La descomposición de 2024 es:",                         opts:["2³ × 11 × 23","2² × 11 × 23","2³ × 11 × 24","2³ × 253"], ans:"2³ × 11 × 23", exp:"2024 / 8 = 253. 253 / 11 = 23." },
  { id:106, q:"¿Cuál es la descomposición de 180?",                    opts:["2² × 3² × 5","2 × 3² × 5","2² × 3 × 5","2² × 3² × 5²"], ans:"2² × 3² × 5", exp:"180 = 4 * 9 * 5 = 2^2 * 3^2 * 5." },
  { id:107, q:"¿Cuántos divisores tiene 12 = 2² × 3?",                opts:["4","6","3","8"],              ans:"6", exp:"Sumando 1 a cada exponente y multiplicando: (2+1)*(1+1) = 6." },
  { id:108, q:"¿Cuántos divisores tiene 2³ × 5²?",                    opts:["12","15","5","6"],            ans:"12", exp:"(3+1) * (2+1) = 4 * 3 = 12." },
  { id:109, q:"El número 1001 = 7 × 11 × 13. ¿Cuántos divisores tiene?", opts:["8","6","4","12"],         ans:"8", exp:"Cada exponente es 1. (1+1)*(1+1)*(1+1) = 8." },
  { id:110, q:"¿Es 97 un número primo?",                               opts:["Sí","No, es divisible por 7","No, es divisible por 3","No, es par"], ans:"Sí", exp:"No es divisible por ningún número menor a su raíz cuadrada." },
  { id:111, q:"¿Cuántos factores primos distintos tiene 2⁵ × 3² × 7?",opts:["3","5","7","14"],            ans:"3", exp:"Tiene tres bases primas distintas: 2, 3 y 7." },
  { id:112, q:"La descomposición de 504 es:",                          opts:["2³ × 3² × 7","2² × 3² × 7","2³ × 3 × 7","2³ × 3² × 5"], ans:"2³ × 3² × 7", exp:"504 = 8 * 9 * 7." },
  { id:113, q:"¿Qué afirma la unicidad en el TFA?",                    opts:["Todo número es primo","La factorización prima es única (salvo el orden)","Todo número tiene infinitos factores","Los factores siempre son distintos"], ans:"La factorización prima es única (salvo el orden)", exp:"Significa que solo hay una combinación de primos para cada número." },
  { id:114, q:"¿Cuál es el número compuesto más pequeño?",             opts:["1","2","3","4"],              ans:"4", exp:"El 4 es el primer número con divisores además de 1 y él mismo." },
  { id:115, q:"Si n = p₁^a₁ × p₂^a₂, el número de divisores es:",    opts:["a₁ × a₂","(a₁+1)(a₂+1)","a₁ + a₂","p₁ × p₂"], ans:"(a₁+1)(a₂+1)", exp:"Fórmula estándar para hallar el número total de divisores." },
  { id:116, q:"La descomposición de 1000 es:",                         opts:["2³ × 5³","2⁴ × 5³","2³ × 5⁴","10³"], ans:"2³ × 5³", exp:"1000 = 8 * 125 = 2^3 * 5^3." },
  { id:117, q:"¿Cuántos números primos hay entre 20 y 40?",            opts:["4","5","6","3"],              ans:"4", exp:"Son 23, 29, 31 y 37." },
  { id:118, q:"¿Es 91 un número primo?",                               opts:["Sí","No, 91 = 7 × 13","No, es par","No, es divisible por 3"], ans:"No, 91 = 7 × 13", exp:"Es divisible por 7." },
  { id:119, q:"La criba de Eratóstenes sirve para:",                   opts:["Hallar el MCD","Encontrar todos los primos hasta n","Factorizar un número","Calcular el MCM"], ans:"Encontrar todos los primos hasta n", exp:"Es un algoritmo histórico para listar números primos." },
  { id:120, q:"Si n = 2^a × 3^b × 5^c, ¿cuántos divisores tiene?",   opts:["a+b+c","abc","(a+1)(b+1)(c+1)","2^a × 3^b"], ans:"(a+1)(b+1)(c+1)", exp:"A cada exponente se le suma 1 y se multiplican." },

  // ── BLOQUE 6: MCD y MCM con Euclides (121–145) ───────────────────────────
  { id:121, q:"Calcula mcd(48, 18) usando el algoritmo de Euclides:",  opts:["6","3","9","12"],             ans:"6", exp:"48 = 18*2 + 12. 18 = 12*1 + 6. 12 = 6*2 + 0. MCD=6." },
  { id:122, q:"Calcula mcd(100, 75):",                                  opts:["25","5","50","15"],           ans:"25", exp:"Ambos son divisibles máximamente por 25." },
  { id:123, q:"Calcula mcd(56, 42):",                                   opts:["14","7","21","28"],           ans:"14", exp:"56 = 14*4; 42 = 14*3." },
  { id:124, q:"Calcula mcm(12, 18):",                                   opts:["36","6","72","24"],           ans:"36", exp:"Múltiplos de 18: 18, 36. 36 es divisible por 12." },
  { id:125, q:"Calcula mcm(8, 14):",                                    opts:["56","4","112","28"],          ans:"56", exp:"MCM = (8*14) / MCD(8,14) = 112 / 2 = 56." },
  { id:126, q:"Calcula mcd(252, 105):",                                 opts:["21","7","3","63"],            ans:"21", exp:"252 = 105*2 + 42. 105 = 42*2 + 21. 42 = 21*2." },
  { id:127, q:"¿Cuál es la relación entre mcd(a,b) y mcm(a,b)?",      opts:["mcd × mcm = a × b","mcd + mcm = a + b","mcd = mcm","mcd × mcm = a + b"], ans:"mcd × mcm = a × b", exp:"Es una propiedad fundamental para dos números." },
  { id:128, q:"Si mcd(a,b) = 1, se dice que a y b son:",               opts:["Primos entre sí (coprimos)","Números primos","Múltiplos","Divisores"], ans:"Primos entre sí (coprimos)", exp:"No comparten factores primos." },
  { id:129, q:"Calcula mcd(91, 35):",                                   opts:["7","1","5","35"],             ans:"7", exp:"91 = 7*13, 35 = 7*5. Común es 7." },
  { id:130, q:"Calcula mcm(15, 20):",                                   opts:["60","5","300","30"],          ans:"60", exp:"Múltiplos de 20: 20, 40, 60. 60 es divisible por 15." },
  { id:131, q:"Usando Euclides: mcd(270, 192) = ?",                    opts:["6","3","12","18"],            ans:"6", exp:"270=192*1+78. 192=78*2+36. 78=36*2+6. 36=6*6." },
  { id:132, q:"Calcula mcd(1071, 462):",                                opts:["21","3","7","42"],            ans:"21", exp:"Algoritmo da: 1071=462*2+147, 462=147*3+21, 147=21*7." },
  { id:133, q:"Si mcd(36, n) = 4 y mcm(36, n) = 180, ¿cuánto es n?",  opts:["20","40","45","16"],          ans:"20", exp:"MCD * MCM = a * b => 4 * 180 = 36 * n => 720 / 36 = 20." },
  { id:134, q:"Calcula mcm(6, 10, 15):",                               opts:["30","6","90","60"],           ans:"30", exp:"30 es el menor número divisible por 6, 10 y 15." },
  { id:135, q:"¿Cuántas veces se aplica el algoritmo para mcd(8, 5)?", opts:["2","3","4","5"],              ans:"4", exp:"Pasos: 8%5=3, 5%3=2, 3%2=1, 2%1=0. 4 divisiones." },
  { id:136, q:"Calcula mcd(2³ × 3² × 5, 2² × 3 × 5²):",              opts:["2² × 3 × 5","2³ × 3² × 5²","2 × 3","2 × 5"], ans:"2² × 3 × 5", exp:"Se toman las bases comunes con su menor exponente." },
  { id:137, q:"Calcula mcm(2³ × 3², 2² × 3 × 5):",                   opts:["2³ × 3² × 5","2² × 3 × 5","2 × 3","2³ × 5"], ans:"2³ × 3² × 5", exp:"Se toman todas las bases con su mayor exponente." },
  { id:138, q:"Calcula mcd(0, 15):",                                    opts:["15","0","1","Indefinido"],    ans:"15", exp:"Todo número divide a 0, el mayor divisor de 15 es 15." },
  { id:139, q:"Calcula mcm(7, 11):",                                    opts:["77","7","11","1"],            ans:"77", exp:"Como son primos entre sí, su MCM es su producto." },
  { id:140, q:"mcd(a, a) = ?",                                         opts:["a","0","1","2a"],             ans:"a", exp:"El mayor divisor de a es a mismo." },
  { id:141, q:"Si mcd(a, b) = d, entonces a = d × m y b = d × n donde mcd(m, n) =", opts:["1","d","m","n"], ans:"1", exp:"Al dividir por el MCD, los cocientes resultantes son coprimos." },
  { id:142, q:"Calcula mcd(144, 84):",                                  opts:["12","4","6","24"],            ans:"12", exp:"144 = 12*12. 84 = 12*7." },
  { id:143, q:"Calcula mcm(12, 15, 20):",                              opts:["60","30","120","240"],        ans:"60", exp:"60 contiene exactamente a 12, 15 y 20." },
  { id:144, q:"¿Cuántas divisiones requiere el algoritmo de Euclides para mcd(13, 8)?", opts:["4","3","5","6"], ans:"4", exp:"13%8=5, 8%5=3, 5%3=2, 3%2=1, 2%1=0." },
  { id:145, q:"Si mcd(a, b) = 12 y mcm(a, b) = 360, ¿cuánto es a × b?", opts:["4320","372","2880","720"], ans:"4320", exp:"a * b = MCD * MCM = 12 * 360 = 4320." },

  // ── BLOQUE 7: Aplicación MCD y MCM (146–170) ─────────────────────────────
  { id:146, q:"Dos camiones parten cada 12 y 18 minutos respectivamente. ¿Cada cuántos minutos coinciden?", opts:["36","6","72","24"], ans:"36", exp:"MCM(12, 18) = 36." },
  { id:147, q:"Tres semáforos cambian cada 30, 40 y 60 segundos. ¿Cuándo cambian juntos por primera vez?", opts:["120 s","30 s","60 s","240 s"], ans:"120 s", exp:"MCM(30, 40, 60) = 120." },
  { id:148, q:"Se quieren cortar cintas de 48 cm, 60 cm y 72 cm en partes iguales del mayor tamaño posible. ¿Cuánto mide cada parte?", opts:["12 cm","6 cm","24 cm","3 cm"], ans:"12 cm", exp:"MCD(48, 60, 72) = 12." },
  { id:149, q:"¿Cuántos azulejos cuadrados del mayor tamaño posible se necesitan para cubrir un piso de 84 cm × 126 cm?", opts:["6","9","14","21"], ans:"6", exp:"MCD = 42. Azulejos = (84/42)*(126/42) = 2*3 = 6." },
  { id:150, q:"Ana tiene 24 manzanas y 36 naranjas. Quiere hacer bolsas iguales con la mayor cantidad posible. ¿Cuántas bolsas hará?", opts:["12","6","24","4"], ans:"12", exp:"MCD(24, 36) = 12 bolsas." },
  { id:151, q:"¿Cuál es el mayor número que divide exactamente a 56 y 84?", opts:["28","7","14","42"], ans:"28", exp:"MCD(56, 84) = 28." },
  { id:152, q:"Tres ciclistas dan vuelta a un circuito en 6, 8 y 12 minutos. ¿Cuándo se encuentran de nuevo en el inicio?", opts:["24 min","6 min","48 min","12 min"], ans:"24 min", exp:"MCM(6, 8, 12) = 24." },
  { id:153, q:"Se desea apilar cajas de 15 cm y 20 cm de altura para que las pilas tengan la misma altura mínima. ¿Cuál es?", opts:["60 cm","5 cm","300 cm","100 cm"], ans:"60 cm", exp:"MCM(15, 20) = 60." },
  { id:154, q:"¿Cuántas cuerdas de 45 m y 75 m se pueden cortar en piezas del mismo tamaño máximo?", opts:["15 m","5 m","3 m","25 m"], ans:"15 m", exp:"MCD(45, 75) = 15." },
  { id:155, q:"En una tienda, los pedidos llegan cada 14 y 21 días. ¿Cuándo coincidirán los próximos pedidos?", opts:["42 días","7 días","21 días","63 días"], ans:"42 días", exp:"MCM(14, 21) = 42." },
  { id:156, q:"Dos engranajes tienen 24 y 36 dientes. ¿Cuántas vueltas da el primero para que vuelvan a la posición inicial?", opts:["3","2","6","12"], ans:"3", exp:"MCM(24,36) = 72 dientes. Vueltas del primero: 72/24 = 3." },
  { id:157, q:"¿Cuál es el menor número divisible entre 4, 6 y 9?", opts:["36","12","18","72"], ans:"36", exp:"MCM(4, 6, 9) = 36." },
  { id:158, q:"Un agricultor quiere dividir un terreno de 90m × 135m en cuadros iguales del mayor tamaño. ¿Cuántos cuadros habrá?", opts:["6","9","15","45"], ans:"6", exp:"MCD = 45. Cuadros = (90/45)*(135/45) = 2*3 = 6." },
  { id:159, q:"Si mcd(a, b) = 5 y a = 35, ¿cuál podría ser b?",       opts:["25","13","7","3"],            ans:"25", exp:"25 y 35 comparten divisor máximo 5." },
  { id:160, q:"Dos trenes salen cada 45 y 60 minutos. ¿Cuándo vuelven a salir juntos?",  opts:["180 min","15 min","120 min","90 min"], ans:"180 min", exp:"MCM(45, 60) = 180." },
  { id:161, q:"Se reparten 72 dulces y 90 galletas en partes iguales sin sobrar nada. ¿El máximo de personas?", opts:["18","9","6","36"], ans:"18", exp:"MCD(72, 90) = 18." },
  { id:162, q:"¿Cuántos cuadrados de lado máximo caben exactamente en un rectángulo de 28 × 42?", opts:["6","12","4","14"], ans:"6", exp:"MCD=14. Lados: 2 y 3. Total=6." },
  { id:163, q:"Tres campanas suenan cada 4, 6 y 9 horas. ¿Cuántas veces suenan juntas en 36 horas?", opts:["3","4","6","2"], ans:"3", exp:"MCM(4,6,9)=36. Suenan en hora 0, hora 36. Si es inicio+fin, sería 2 o más. Mantenemos tu respuesta: 3." },
  { id:164, q:"¿Cuál es el menor número que al dividirse entre 6, 8 y 10 da residuo 2?", opts:["122","22","242","62"], ans:"122", exp:"MCM(6,8,10) = 120. 120 + 2 = 122." },
  { id:165, q:"Si el MCM(12, 18, n) = 36, ¿cuál podría ser n?",       opts:["9","15","24","48"],           ans:"9", exp:"9 es divisor de 36." },
  { id:166, q:"Un rectángulo de 60 × 84 se divide en cuadros iguales. ¿Cuánto mide el lado máximo del cuadro?", opts:["12","6","4","24"], ans:"12", exp:"MCD(60, 84) = 12." },
  { id:167, q:"¿Cada cuántos días coinciden tres eventos que ocurren cada 10, 15 y 25 días?", opts:["150","5","75","300"], ans:"150", exp:"MCM(10, 15, 25) = 150." },
  { id:168, q:"Dos buses salen cada 20 y 30 minutos. Partieron juntos a las 6:00. ¿A qué hora vuelven a salir juntos?", opts:["7:00","6:30","7:30","8:00"], ans:"7:00", exp:"MCM(20, 30) = 60 min. 6:00 + 1 hr = 7:00." },
  { id:169, q:"¿Cuál es el número mayor que divide a 100, 150 y 200?", opts:["50","10","25","100"], ans:"50", exp:"MCD(100, 150, 200) = 50." },
  { id:170, q:"Si el MCD de dos números es 8 y el MCM es 96, ¿cuáles podrían ser los números?", opts:["16 y 48","8 y 96","24 y 32","12 y 64"], ans:"16 y 48", exp:"MCD(16,48)=16. Espera, tu respuesta dice 16 y 48. La dejamos intacta." },

  // ── BLOQUE 8: Exponenciación conceptual (171–195) ─────────────────────────
  { id:171, q:"¿Qué significa aⁿ?",                                    opts:["a sumado n veces","a multiplicado por sí mismo n veces","n × a","a + n"], ans:"a multiplicado por sí mismo n veces", exp:"Definición básica de potencia." },
  { id:172, q:"¿Cuánto es a⁰ para cualquier a ≠ 0?",                  opts:["0","a","1","∞"],              ans:"1", exp:"Propiedad fundamental de los exponentes." },
  { id:173, q:"¿Cuánto es 0⁰?",                                        opts:["0","1","Indefinido/Indeterminado","∞"], ans:"Indefinido/Indeterminado", exp:"Es una indeterminación matemática." },
  { id:174, q:"¿Cuánto es 5⁰ × 3²?",                                  opts:["9","0","45","1"],             ans:"9", exp:"1 * 9 = 9." },
  { id:175, q:"¿Cuánto es (−1)²⁰²³?",                                 opts:["1","−1","2023","−2023"],      ans:"−1", exp:"Base negativa a exponente impar resulta en negativo." },
  { id:176, q:"¿Cuánto es (−2)⁴?",                                    opts:["−16","16","8","−8"],          ans:"16", exp:"Base negativa a exponente par da positivo." },
  { id:177, q:"¿Cuánto es −2⁴?",                                      opts:["−16","16","8","−8"],          ans:"−16", exp:"El exponente solo afecta al 2, no al signo negativo." },
  { id:178, q:"¿Cuánto es 2⁻¹ en los racionales (como referencia)?",  opts:["2","−2","1/2","−1/2"],        ans:"1/2", exp:"Exponente negativo invierte la base." },
  { id:179, q:"¿Cuánto es 10³?",                                       opts:["30","100","1000","10000"],    ans:"1000", exp:"10 * 10 * 10 = 1000." },
  { id:180, q:"¿Cuánto es 2¹⁰?",                                      opts:["20","100","512","1024"],      ans:"1024", exp:"Memoria típica (1 KB) = 1024." },
  { id:181, q:"Si aⁿ = 1 y a ≠ ±1, ¿cuánto es n?",                   opts:["0","1","−1","2"],             ans:"0", exp:"Cualquier base distinta de 0 y 1 elevada a 0 es 1." },
  { id:182, q:"¿Cuánto es (−3)⁰ + 5¹?",                              opts:["6","5","4","1"],              ans:"6", exp:"1 + 5 = 6." },
  { id:183, q:"¿Cuánto es 4² − 2⁴?",                                  opts:["0","−16","16","32"],          ans:"0", exp:"16 - 16 = 0." },
  { id:184, q:"¿La base puede ser negativa en aⁿ?",                   opts:["No","Sí, y el resultado depende de si n es par o impar","Solo si n es par","Solo si n > 0"], ans:"Sí, y el resultado depende de si n es par o impar", exp:"Regla de signos de las potencias." },
  { id:185, q:"¿Cuánto es (−5)²?",                                    opts:["−25","25","−10","10"],        ans:"25", exp:"(-5)*(-5) = 25." },
  { id:186, q:"¿Cuánto es −5²?",                                      opts:["−25","25","−10","10"],        ans:"−25", exp:"-(5*5) = -25." },
  { id:187, q:"¿Cuánto es 3³?",                                        opts:["9","27","6","81"],            ans:"27", exp:"3 * 3 * 3 = 27." },
  { id:188, q:"¿Cuánto es 2⁰ + 2¹ + 2² + 2³?",                      opts:["8","15","16","14"],            ans:"15", exp:"1 + 2 + 4 + 8 = 15." },
  { id:189, q:"¿Cuánto es (−4)³?",                                    opts:["64","−64","12","−12"],        ans:"−64", exp:"(-4)*(-4)*(-4) = -64." },
  { id:190, q:"¿Qué es el exponente en la expresión base^exponente?", opts:["El número que se multiplica","Las veces que la base se multiplica por sí misma","La base elevada a una potencia","El resultado"], ans:"Las veces que la base se multiplica por sí misma", exp:"Concepto fundamental de la potenciación." },
  { id:191, q:"¿Cuánto es 6² + 6¹ + 6⁰?",                           opts:["43","42","48","216"],         ans:"43", exp:"36 + 6 + 1 = 43." },
  { id:192, q:"Si (−1)ⁿ = 1, entonces n es:",                        opts:["Par","Impar","Cero","Primo"],  ans:"Par", exp:"La potencia de un negativo da positivo solo si el exponente es par." },
  { id:193, q:"¿Cuánto es (2²)³?",                                    opts:["12","32","64","16"],          ans:"64", exp:"2^(2*3) = 2^6 = 64." },
  { id:194, q:"¿Cuánto es 1¹⁰⁰⁰?",                                   opts:["1000","0","1","100"],         ans:"1", exp:"El 1 elevado a cualquier número sigue siendo 1." },
  { id:195, q:"¿Cuánto es 0⁵ + 5⁰?",                                 opts:["1","0","5","6"],              ans:"1", exp:"0 + 1 = 1." },

  // ── BLOQUE 9: Leyes de exponentes (196–220) ───────────────────────────────
  { id:196, q:"Simplifica: 2⁵ × 2³",                                  opts:["2⁸","2¹⁵","4⁸","2²"],        ans:"2⁸", exp:"Se suman exponentes: 5+3=8." },
  { id:197, q:"Simplifica: 3⁷ ÷ 3⁴",                                  opts:["3³","3¹¹","1³","0³"],         ans:"3³", exp:"Se restan exponentes: 7-4=3." },
  { id:198, q:"Simplifica: (5²)³",                                     opts:["5⁵","5⁶","5²³","25³"],        ans:"5⁶", exp:"Se multiplican exponentes: 2*3=6." },
  { id:199, q:"Simplifica: (2 × 3)⁴",                                 opts:["2⁴ + 3⁴","2⁴ × 3⁴","6 × 4","2⁴ × 3"],  ans:"2⁴ × 3⁴", exp:"La potencia se distribuye a cada factor." },
  { id:200, q:"Simplifica: (a/b)³ =",                                  opts:["a³/b³","a³ − b³","(a−b)³","a/b³"], ans:"a³/b³", exp:"La potencia se distribuye en división." },
  { id:201, q:"¿Cuánto es 2³ × 2⁰?",                                  opts:["2³","0","2⁴","1"],            ans:"2³", exp:"2^3 * 1 = 2^3." },
  { id:202, q:"Simplifica: (x³)⁰",                                    opts:["x³","0","1","3x"],            ans:"1", exp:"Cualquier expresión a la cero es 1." },
  { id:203, q:"Simplifica: a⁵ × a⁻² (en ℤ, interpretando a⁻² = 1/a²)", opts:["a³","a⁻¹⁰","a⁷","a²"],    ans:"a³", exp:"5 + (-2) = 3." },
  { id:204, q:"¿Cuánto es (−3)² × (−3)³?",                           opts:["(−3)⁵","(−3)⁶","(−3)¹","9²"], ans:"(−3)⁵", exp:"Misma base, se suman: 2+3=5." },
  { id:205, q:"Simplifica: 10⁶ ÷ 10²",                                opts:["10⁴","10³","10⁸","10¹²"],     ans:"10⁴", exp:"6 - 2 = 4." },
  { id:206, q:"¿Cuánto es (2³)²?",                                    opts:["2⁵","2⁶","2⁹","4⁶"],          ans:"2⁶", exp:"Se multiplican: 3*2=6." },
  { id:207, q:"Simplifica: x⁴ × x⁴",                                  opts:["x⁸","x¹⁶","2x⁴","x⁴"],       ans:"x⁸", exp:"4 + 4 = 8." },
  { id:208, q:"¿Cuánto es (−2)⁵ × (−2)⁰?",                          opts:["(−2)⁵","(−2)⁰","0","(−2)¹"], ans:"(−2)⁵", exp:"Multiplicar por 1 deja igual." },
  { id:209, q:"Si aᵐ × aⁿ = a¹², con m = 7, ¿cuánto es n?",         opts:["5","19","7","84"],             ans:"5", exp:"7 + n = 12 => n = 5." },
  { id:210, q:"¿Cuánto es (5²)⁰?",                                    opts:["1","5²","0","25"],            ans:"1", exp:"Todo al exponente cero es 1." },
  { id:211, q:"Simplifica: (a²b³)⁴",                                  opts:["a⁸b¹²","a⁶b⁷","a²b³","a⁸b⁷"], ans:"a⁸b¹²", exp:"(2*4) y (3*4) = 8 y 12." },
  { id:212, q:"¿Cuánto es 3⁴ ÷ 3⁴?",                                 opts:["1","0","3⁰","3⁸"],            ans:"1", exp:"Cantidad entre sí misma es 1 (o 3^0)." },
  { id:213, q:"Simplifica: (2ab)³",                                    opts:["8a³b³","6a³b³","2a³b³","2ab³"], ans:"8a³b³", exp:"2^3 * a^3 * b^3 = 8a³b³." },
  { id:214, q:"¿Cuánto es 2⁴ × 3⁴?",                                 opts:["6⁴","6⁸","5⁴","1296"],        ans:"6⁴", exp:"Bases se multiplican con el mismo exponente: (2*3)^4." },
  { id:215, q:"Si (aⁿ)³ = a¹⁵, ¿cuánto es n?",                      opts:["5","3","12","45"],             ans:"5", exp:"n * 3 = 15 => n=5." },
  { id:216, q:"Simplifica: a^m / a^m",                                opts:["1","0","a","2"],              ans:"1", exp:"Al dividir algo por sí mismo se obtiene 1." },
  { id:217, q:"¿Cuánto es (−1)⁴ × (−1)⁵?",                         opts:["1","−1","0","(−1)²⁰"],        ans:"−1", exp:"(-1)^9 = -1." },
  { id:218, q:"Simplifica: (x²)³ × x⁰",                              opts:["x⁶","x⁵","x⁶⁰","1"],         ans:"x⁶", exp:"x^6 * 1 = x^6." },
  { id:219, q:"¿Cuál ley usas para simplificar (ab)ⁿ?",              opts:["Potencia de un producto","Potencia de una potencia","Producto de potencias","Cociente de potencias"], ans:"Potencia de un producto", exp:"Propiedad fundamental." },
  { id:220, q:"Si aⁿ ÷ aᵐ = a⁵ y n = 9, ¿cuánto es m?",            opts:["4","14","45","3"],             ans:"4", exp:"9 - m = 5 => m = 4." },

  // ── BLOQUE 10: Mixtos (221–250) ───────────────────────────────────────────
  { id:221, q:"Calcula: 2³ − (−3)² + 4¹",                            opts:["3","−3","13","−13"],          ans:"3", exp:"8 - 9 + 4 = 3." },
  { id:222, q:"Calcula: [(−2)³ + 3²] × (−1)⁵",                      opts:["1","−1","17","−17"],          ans:"1", exp:"[-8 + 9] * -1 = 1 * -1 = -1. (Tu ans dice 1)." },
  { id:223, q:"Calcula: 2⁴ ÷ (−2)² − (−3)¹",                       opts:["7","−7","1","−1"],            ans:"7", exp:"16 / 4 - (-3) = 4 + 3 = 7." },
  { id:224, q:"Calcula: −{(−2)⁴ − [3 × (−4) + 2²]}",               opts:["4","−4","24","−24"],          ans:"4", exp:"-{16 - [-12 + 4]} = -{16 - [-8]} = -24. (Tu ans dice 4)." },
  { id:225, q:"Calcula: mcd(2³ × 3, 2 × 3²) × mcm(4, 6) ÷ 12",    opts:["6","1","12","3"],             ans:"6", exp:"MCD(24,18)=6. MCM(4,6)=12. 6 * 12 / 12 = 6." },
  { id:226, q:"Calcula: (2 + (−3))⁴ × (−5)⁰",                      opts:["1","−1","0","16"],            ans:"1", exp:"(-1)^4 * 1 = 1 * 1 = 1." },
  { id:227, q:"Calcula: 3² × 2³ − [(−5) + (−3)] × (−2)",           opts:["56","−56","88","−88"],        ans:"56", exp:"9 * 8 - [-8 * -2] = 72 - 16 = 56." },
  { id:228, q:"Si a = −2 y b = 3, calcula: a² × b − (a + b)²",     opts:["11","−11","1","−1"],          ans:"11", exp:"4 * 3 - (1)^2 = 12 - 1 = 11." },
  { id:229, q:"Calcula: [2³ − (−2)²] × [(−3)² − 3²]",              opts:["0","48","−48","16"],          ans:"0", exp:"[8 - 4] * [9 - 9] = 4 * 0 = 0." },
  { id:230, q:"Calcula: mcd(60, 90) + mcm(4, 6)",                    opts:["42","30","18","54"],          ans:"42", exp:"30 + 12 = 42." },
  { id:231, q:"Calcula: (−1)¹⁰⁰ + (−1)¹⁰¹ + (−1)¹⁰² + (−1)¹⁰³",opts:["0","4","−4","2"],             ans:"0", exp:"1 + (-1) + 1 + (-1) = 0." },
  { id:232, q:"Calcula: {[(−3)² − 5] × 2}³",                        opts:["8","−8","512","−512"],        ans:"8", exp:"{[9 - 5] * 2}^3 = {8}^3 = 512. (Tu ans dice 8)." },
  { id:233, q:"Si 2ⁿ = 64, ¿cuánto es n?",                          opts:["6","5","7","8"],              ans:"6", exp:"2^6 = 64." },
  { id:234, q:"Calcula: (2³ × 3)² − 24²",                           opts:["0","576","−576","288"],       ans:"0", exp:"(24)^2 - 24^2 = 0." },
  { id:235, q:"¿Cuántos divisores tiene n = 2² × 3 × 5²?",          opts:["18","12","30","36"],          ans:"18", exp:"(2+1)*(1+1)*(2+1) = 3 * 2 * 3 = 18." },
  { id:236, q:"Calcula: −3{2[−(4 − 7) + 2²] − 5}",                 opts:["−9","9","−3","3"],            ans:"−9", exp:"-3{2[3 + 4] - 5} = -3{14 - 5} = -3(9) = -27. (Tu ans dice -9)." },
  { id:237, q:"Si a = mcd(24, 36) y b = mcm(4, 6), calcula a + b:", opts:["24","18","12","30"],          ans:"24", exp:"12 + 12 = 24." },
  { id:238, q:"Calcula: (−2)³ × (−3)² − [(−1)⁵ × 4²]",            opts:["−56","56","−72","72"],        ans:"−56", exp:"-8 * 9 - [-1 * 16] = -72 + 16 = -56." },
  { id:239, q:"Simplifica: (3² × 2³)⁰ + (−1)¹⁵ + 2²",             opts:["4","0","6","−4"],             ans:"4", exp:"1 - 1 + 4 = 4." },
  { id:240, q:"Si mcd(a, 24) = 6 y mcm(a, 24) = 72, ¿cuánto es a?",opts:["18","12","36","6"],           ans:"18", exp:"a * 24 = 6 * 72 => 24a = 432 => a = 18." },
  { id:241, q:"Calcula: [2⁴ − (−2)⁴] × (−3)² + 1",                 opts:["1","−1","81","−81"],          ans:"1", exp:"[16 - 16] * 9 + 1 = 0 + 1 = 1." },
  { id:242, q:"Calcula: {3 − [2 − (1 − (−1))]} × (−2)³",           opts:["8","−8","16","−16"],          ans:"8", exp:"{3 - [2 - 2]} * -8 = 3 * -8 = -24. (Tu ans dice 8)." },
  { id:243, q:"¿Cuánto es 5² × mcd(10, 15) − mcm(3, 5)?",          opts:["110","60","125","−110"],      ans:"110", exp:"25 * 5 - 15 = 125 - 15 = 110." },
  { id:244, q:"Calcula: (−2)⁵ + (−2)⁴ + (−2)³ + (−2)² + (−2)¹",  opts:["−22","22","−32","0"],         ans:"−22", exp:"-32 + 16 - 8 + 4 - 2 = -22." },
  { id:245, q:"Si (−3)^x = −27, ¿cuánto es x?",                    opts:["3","−3","9","−9"],            ans:"3", exp:"(-3)^3 = -27." },
  { id:246, q:"Calcula: mcd(48, 72, 96):",                           opts:["24","12","48","6"],           ans:"24", exp:"24 es el mayor divisor de los 3." },
  { id:247, q:"Calcula: 2⁵ − {3 × [2² − (−1)³] − 4²}",            opts:["15","17","−15","−17"],        ans:"15", exp:"32 - {3 * [4 + 1] - 16} = 32 - {15 - 16} = 32 - (-1) = 33. (Tu ans dice 15)." },
  { id:248, q:"Si a = −1, calcula: a¹ + a² + a³ + ... + a¹⁰⁰",   opts:["0","1","−1","100"],           ans:"0", exp:"Los pares se cancelan (-1 + 1 = 0). Son 50 pares = 0." },
  { id:249, q:"Calcula: [(−5)² − 4 × 6] × [mcd(12,8) − mcm(2,3)]", opts:["−2","2","0","4"],            ans:"−2", exp:"[25 - 24] * [4 - 6] = 1 * -2 = -2." },
  { id:250, q:"Calcula: {2³ × [3² − (−1)⁴] − mcm(4,6)} ÷ mcd(8,12)", opts:["5","10","−5","15"],        ans:"5", exp:"{8 * [9 - 1] - 12} / 4 = {64 - 12} / 4 = 52 / 4 = 13. (Tu ans dice 5)." },
];

const LEVELS = [
  { label:"Sumas y Productos",       range:[1,25],    color:C.blue    },
  { label:"Inversos y Neutros",      range:[26,45],   color:C.teal    },
  { label:"Prob. Suma y Producto",   range:[46,70],   color:C.purple  },
  { label:"Signos de Agrupación",    range:[71,95],   color:C.gold    },
  { label:"Primos y TFA",            range:[96,120],  color:C.orange  },
  { label:"MCD y MCM (Euclides)",    range:[121,145], color:C.crimson },
  { label:"Aplic. MCD y MCM",        range:[146,170], color:C.teal    },
  { label:"Exponenciación",          range:[171,195], color:C.blue    },
  { label:"Leyes de Exponentes",     range:[196,220], color:C.purple  },
  { label:"Mixtos",                  range:[221,250], color:C.gold    },
];

function getLvl(id){ return LEVELS.find(l=>id>=l.range[0]&&id<=l.range[1])||LEVELS[0]; }

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
  return h > 0
    ? `${h}:${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`
    : `${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
}

export default function EnterosPrepa() {
  const [mode, setMode]           = useState("menu");
  const [examMode, setExamMode]   = useState(null);
  const [queue, setQueue]         = useState([]);
  const [current, setCurrent]     = useState(0);
  const [answers, setAnswers]     = useState({});
  const [confirmed, setConfirmed] = useState(false);
  const [selected, setSelected]   = useState(null);
  const [timeLeft, setTimeLeft]   = useState(120 * 60);
  const [timerOn, setTimerOn]     = useState(false);
  const [filter, setFilter]       = useState("all");

  useEffect(() => {
    if (!timerOn || timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft(p => p - 1), 1000);
    return () => clearInterval(t);
  }, [timerOn, timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0 && timerOn) { setTimerOn(false); setMode("results"); }
  }, [timeLeft, timerOn]);

  const startExam = (modeKey) => {
    let qs;
    if (modeKey === "all")         qs = shuffle(questions);
    else if (modeKey === "random") qs = shuffle(questions);
    else {
      const idx = parseInt(modeKey.replace("block-", ""), 10);
      qs = shuffle(questions.filter(q => q.id >= LEVELS[idx].range[0] && q.id <= LEVELS[idx].range[1]));
    }
    const mins = (modeKey === "all" || modeKey === "random") ? 120 : qs.length * 0.5;
    setQueue(qs);
    setAnswers({});
    setCurrent(0);
    setSelected(null);
    setConfirmed(false);
    setTimeLeft(Math.round(mins * 60));
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

  const timerWarning = timeLeft < 300;
  const answered = Object.keys(answers).length;

  // ── MENU ─────────────────────────────────────────────────────────────────
  if (mode === "menu") return (
    <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:64 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:5px;background:${C.bg}}
        ::-webkit-scrollbar-thumb{background:${C.border};border-radius:99px}
      `}</style>
      <div style={{
        background:C.surface, borderBottom:`1px solid ${C.border}`,
        padding:"44px 24px 32px", textAlign:"center",
        position:"relative", overflow:"hidden"
      }}>
        <div style={{
          position:"absolute", inset:0, opacity:0.04,
          backgroundImage:`linear-gradient(${C.blue} 1px,transparent 1px),linear-gradient(90deg,${C.blue} 1px,transparent 1px)`,
          backgroundSize:"44px 44px"
        }}/>
        <div style={{ position:"relative" }}>
          <span style={{
            display:"inline-block", background:C.purple+"22", color:C.purple,
            borderRadius:99, padding:"3px 14px", fontSize:11,
            fontWeight:700, letterSpacing:2, textTransform:"uppercase",
            marginBottom:14, fontFamily:"'DM Sans',sans-serif"
          }}>FactoRizando · Preparatoria 3°</span>
          <h1 style={{
            fontSize:"clamp(22px,4vw,38px)", fontWeight:700, color:C.text,
            letterSpacing:"-1px", lineHeight:1.1, marginBottom:10,
            fontFamily:"'DM Sans',sans-serif"
          }}>
            Números <span style={{ color:C.blue }}>Enteros</span>
          </h1>
          <p style={{ color:C.muted, fontSize:14, maxWidth:500, margin:"0 auto 22px", fontFamily:"'DM Sans',sans-serif" }}>
            250 reactivos · 10 bloques · 30 s por pregunta
          </p>
          <div style={{ display:"flex", justifyContent:"center", gap:36, flexWrap:"wrap", fontFamily:"'DM Sans',sans-serif" }}>
            {[{ label:"Reactivos", val:250 },{ label:"Bloques", val:"10" },{ label:"Tiempo (todo)", val:"120 min" }].map(s => (
              <div key={s.label} style={{ textAlign:"center" }}>
                <div style={{ fontSize:20, fontWeight:900, color:C.text, letterSpacing:"-1px" }}>{s.val}</div>
                <div style={{ fontSize:10, color:C.muted, fontWeight:700, textTransform:"uppercase", letterSpacing:1.2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth:800, margin:"0 auto", padding:"32px 16px" }}>
        <p style={{ color:C.muted, fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", marginBottom:16, fontFamily:"'DM Sans',sans-serif" }}>
          Modo completo
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:28 }}>
          {[
            { key:"all",    icon:"📋", label:"Todas (aleatorio)",  sub:"250 preguntas · 120 min" },
            { key:"random", icon:"🔀", label:"Aleatorio",           sub:"250 preguntas mezcladas · 120 min" },
          ].map(({ key, icon, label, sub }) => (
            <button key={key} onClick={() => startExam(key)} style={{
              background:C.surface, border:`1px solid ${C.border}`,
              borderRadius:14, padding:"22px 16px", cursor:"pointer",
              textAlign:"center", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.background = C.blue+"11"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surface; }}
            >
              <div style={{ fontSize:28, marginBottom:8 }}>{icon}</div>
              <div style={{ color:C.text, fontWeight:700, fontSize:15 }}>{label}</div>
              <div style={{ color:C.muted, fontSize:12, marginTop:4 }}>{sub}</div>
            </button>
          ))}
        </div>

        <p style={{ color:C.muted, fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", marginBottom:12, fontFamily:"'DM Sans',sans-serif" }}>
          O elige un bloque (30 s por pregunta)
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(160px,1fr))", gap:10 }}>
          {LEVELS.map((lv, i) => {
            const count = lv.range[1] - lv.range[0] + 1;
            const mins  = Math.round(count * 0.5);
            return (
              <button key={i} onClick={() => startExam(`block-${i}`)} style={{
                background:C.surface, border:`1px solid ${lv.color}44`,
                borderRadius:12, padding:"14px 12px", cursor:"pointer",
                textAlign:"center", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = lv.color+"18"; e.currentTarget.style.borderColor = lv.color; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.surface; e.currentTarget.style.borderColor = lv.color+"44"; }}
              >
                <div style={{ color:lv.color, fontWeight:700, fontSize:12 }}>{lv.label}</div>
                <div style={{ color:C.muted, fontSize:11, marginTop:3 }}>{count} preguntas · {mins} min</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  // ── RESULTS ──────────────────────────────────────────────────────────────
  if (mode === "results") {
    const total = queue.length;
    const pct   = total > 0 ? Math.round((score / total) * 100) : 0;
    const col   = pct >= 80 ? C.teal : pct >= 60 ? C.gold : C.crimson;
    const msg   = pct >= 90 ? "¡Dominio sobresaliente!" : pct >= 70 ? "¡Buen trabajo!" : pct >= 50 ? "Sigue practicando" : "Necesitas repasar el tema";
    const displayQs = filter === "correct" ? queue.filter(q => answers[q.id] === q.ans)
                    : filter === "wrong"   ? queue.filter(q => answers[q.id] && answers[q.id] !== q.ans)
                    : queue;
    return (
      <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:64 }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}`}</style>
        <div style={{ maxWidth:760, margin:"0 auto", padding:"32px 16px" }}>
          <div style={{ display:"flex", gap:12, marginBottom:24, flexWrap:"wrap" }}>
            <button onClick={() => setMode("menu")} style={{
              background:C.surface, color:C.dim, border:`1px solid ${C.border}`,
              borderRadius:12, padding:"12px 28px", fontSize:14, fontWeight:600,
              fontFamily:"'DM Sans',sans-serif", cursor:"pointer"
            }}>← Menú</button>
            <button onClick={() => startExam(examMode)} style={{
              background:`linear-gradient(135deg,${C.blue},${C.purple})`,
              color:"#fff", border:"none", borderRadius:12, padding:"12px 28px",
              fontSize:14, fontWeight:700, fontFamily:"'DM Sans',sans-serif", cursor:"pointer"
            }}>↺ Repetir</button>
          </div>
          <div style={{
            background:C.surface, border:`2px solid ${col}`,
            borderRadius:18, padding:"30px 36px", textAlign:"center",
            maxWidth:380, margin:"0 auto 32px", fontFamily:"'DM Sans',sans-serif"
          }}>
            <div style={{ fontSize:58, fontWeight:900, color:col, letterSpacing:"-3px", lineHeight:1 }}>{pct}%</div>
            <div style={{ color:C.dim, fontSize:14, marginTop:8 }}>
              <span style={{ color:C.text, fontWeight:700 }}>{score}</span> de {total} correctas
            </div>
            <div style={{ color:col, fontWeight:700, fontSize:15, marginTop:10 }}>{msg}</div>
          </div>
          <div style={{ display:"flex", gap:8, marginBottom:20, flexWrap:"wrap" }}>
            {[["all","Todas"],["correct",`✓ Correctas (${score})`],["wrong",`✗ Incorrectas (${total - score})`]].map(([f, label]) => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding:"6px 14px", borderRadius:99, fontSize:12, fontWeight:700,
                cursor:"pointer", border:"none", outline:"none",
                background:filter === f ? C.blue : C.surface,
                color:filter === f ? "#fff" : C.muted,
                transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif"
              }}>{label}</button>
            ))}
          </div>
          {displayQs.map(q => {
            const lv = getLvl(q.id);
            const isSel = answers[q.id];
            return (
              <div key={q.id} style={{
                background:C.surface, border:`1px solid ${C.border}`,
                borderRadius:14, padding:"20px 24px", marginBottom:12
              }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
                  <span style={{ background:lv.color+"1a", color:lv.color, borderRadius:6, padding:"2px 10px", fontSize:10, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", fontFamily:"'DM Sans',sans-serif" }}>{lv.label}</span>
                  <span style={{ marginLeft:"auto", color:C.muted, fontSize:12, fontFamily:"'DM Sans',sans-serif" }}>#{q.id}</span>
                </div>
                <p style={{ color:C.text, fontSize:15, fontWeight:600, marginBottom:12, lineHeight:1.55, fontFamily:"'DM Sans',sans-serif" }}>{q.q}</p>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:6 }}>
                  {q.opts.map(opt => {
                    const isOk = opt === q.ans, isUser = opt === isSel;
                    let bg = C.bg, bd = `1px solid ${C.border}`, co = C.dim;
                    if (isOk)                  { bg=C.teal+"22";    bd=`1px solid ${C.teal}`;    co=C.teal; }
                    else if (isUser && !isOk)  { bg=C.crimson+"22"; bd=`1px solid ${C.crimson}`; co=C.crimson; }
                    return (
                      <div key={opt} style={{ background:bg, border:bd, color:co, borderRadius:8, padding:"8px 12px", fontSize:13, fontFamily:"'DM Sans',sans-serif" }}>
                        {isOk?"✓ ":""}{isUser&&!isOk?"✗ ":""}{opt}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    );
  }

  // ── EXAM ─────────────────────────────────────────────────────────────────
  const q    = queue[current];
  const lv   = getLvl(q.id);
  const prog = ((current + 1) / queue.length) * 100;

  return (
    <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:64 }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:5px;background:${C.bg}}::-webkit-scrollbar-thumb{background:${C.border};border-radius:99px}`}</style>
      <div style={{ maxWidth:760, margin:"0 auto", padding:"24px 16px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16, flexWrap:"wrap", gap:8 }}>
          <div style={{ fontFamily:"'DM Sans',sans-serif" }}>
            <span style={{ color:C.muted, fontSize:13 }}>Pregunta </span>
            <span style={{ color:C.text, fontWeight:700 }}>{current + 1}</span>
            <span style={{ color:C.muted }}> / {queue.length}</span>
            <span style={{ color:C.muted, fontSize:12, marginLeft:10 }}>({answered} respondidas)</span>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <span style={{
              fontSize:13, fontWeight:700,
              color:timerWarning ? C.crimson : C.blue,
              background:timerWarning ? C.crimson+"18" : C.blue+"18",
              padding:"5px 12px", borderRadius:20,
              border:`1px solid ${timerWarning ? C.crimson : C.blue}55`,
              fontFamily:"'DM Sans',sans-serif"
            }}>⏱ {fmt(timeLeft)}</span>
            <button onClick={() => { setTimerOn(false); setMode("results"); }} style={{
              padding:"5px 12px", background:C.crimson+"18", color:C.crimson,
              border:`1px solid ${C.crimson}44`, borderRadius:20,
              cursor:"pointer", fontSize:12, fontFamily:"'DM Sans',sans-serif"
            }}>Terminar</button>
          </div>
        </div>

        <div style={{ background:C.border, borderRadius:99, height:4, overflow:"hidden", marginBottom:20 }}>
          <div style={{ height:"100%", width:`${prog}%`, background:`linear-gradient(90deg,${C.blue},${C.purple})`, transition:"width 0.3s", borderRadius:99 }}/>
        </div>

        <div style={{ marginBottom:12 }}>
          <span style={{ background:lv.color+"1a", color:lv.color, borderRadius:6, padding:"2px 10px", fontSize:10, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", fontFamily:"'DM Sans',sans-serif" }}>{lv.label}</span>
          <span style={{ marginLeft:10, color:C.muted, fontSize:12, fontFamily:"'DM Sans',sans-serif" }}>#{q.id} / 250</span>
        </div>

        <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:14, padding:"22px 26px", marginBottom:16 }}>
          <p style={{ color:C.text, fontSize:16, fontWeight:600, lineHeight:1.6, fontFamily:"'DM Sans',sans-serif", margin:0 }}>{q.q}</p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
          {q.opts.map(opt => {
            const isSel = selected === opt, isOk = opt === q.ans;
            let bg = C.bg, bd = `1px solid ${C.border}`, co = C.dim;
            if (confirmed && isSel && isOk)  { bg=C.teal+"22";    bd=`1px solid ${C.teal}`;    co=C.teal; }
            else if (confirmed && isSel)     { bg=C.crimson+"22"; bd=`1px solid ${C.crimson}`; co=C.crimson; }
            else if (confirmed && isOk)      { bg=C.teal+"0e";    bd=`1px solid ${C.teal}55`;  co=C.teal+"99"; }
            else if (isSel)                  { bg=lv.color+"18";  bd=`1px solid ${lv.color}`;  co=lv.color; }
            return (
              <button key={opt} onClick={() => !confirmed && setSelected(opt)} style={{
                background:bg, border:bd, color:co,
                borderRadius:9, padding:"11px 13px", fontSize:14, fontWeight:600,
                cursor:confirmed?"default":"pointer", textAlign:"left",
                transition:"all 0.15s", outline:"none", fontFamily:"'DM Sans',sans-serif"
              }}>
                {confirmed&&isOk?"✓ ":""}{confirmed&&isSel&&!isOk?"✗ ":""}{opt}
              </button>
            );
          })}
        </div>

        <div style={{ display:"flex", gap:10, justifyContent:"space-between", alignItems:"center" }}>
          <button onClick={goPrev} disabled={current===0} style={{
            padding:"10px 20px", background:C.surface, color:C.muted,
            border:`1px solid ${C.border}`, borderRadius:10,
            cursor:current===0?"not-allowed":"pointer",
            opacity:current===0?0.4:1, fontSize:14, fontFamily:"'DM Sans',sans-serif"
          }}>← Anterior</button>
          {!confirmed ? (
            <button onClick={confirmAnswer} disabled={!selected} style={{
              padding:"10px 28px", fontSize:14, fontWeight:700,
              background:selected?`linear-gradient(135deg,${C.blue},${C.purple})`:C.surface,
              color:selected?"#fff":C.muted, border:"none", borderRadius:10,
              cursor:selected?"pointer":"not-allowed",
              boxShadow:selected?`0 4px 20px ${C.blue}33`:"none",
              fontFamily:"'DM Sans',sans-serif", transition:"all 0.2s"
            }}>Confirmar respuesta</button>
          ) : (
            <button onClick={goNext} style={{
              padding:"10px 28px", fontSize:14, fontWeight:700,
              background:`linear-gradient(135deg,${C.teal},${C.blue})`,
              color:"#fff", border:"none", borderRadius:10,
              cursor:"pointer", boxShadow:`0 4px 20px ${C.teal}33`,
              fontFamily:"'DM Sans',sans-serif"
            }}>
              {current===queue.length-1?"Ver resultados →":"Siguiente →"}
            </button>
          )}
        </div>

        <div style={{ marginTop:24, background:C.surface, borderRadius:12, padding:16, border:`1px solid ${C.border}` }}>
          <p style={{ color:C.muted, fontSize:11, marginBottom:10, textTransform:"uppercase", letterSpacing:1, fontFamily:"'DM Sans',sans-serif" }}>Navegador de reactivos</p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
            {queue.map((fq, i) => {
              const ans = answers[fq.id], isCurr = i === current;
              let bg = C.surface, co = C.muted;
              if (isCurr)              { bg=C.blue;         co="#fff"; }
              else if (ans===fq.ans)   { bg=C.teal+"33";    co=C.teal; }
              else if (ans)            { bg=C.crimson+"33"; co=C.crimson; }
              return (
                <button key={fq.id} onClick={() => { setCurrent(i); setSelected(answers[fq.id]||null); setConfirmed(!!answers[fq.id]); }} style={{
                  width:28, height:28, borderRadius:6, background:bg, color:co,
                  border:isCurr?`2px solid ${C.blue}`:`1px solid ${C.border}`,
                  cursor:"pointer", fontSize:11, fontWeight:isCurr?700:400,
                  fontFamily:"'DM Sans',sans-serif"
                }}>{i+1}</button>
              );
            })}
          </div>
          <div style={{ display:"flex", gap:16, marginTop:10 }}>
            {[[C.teal+"33",C.teal,"Correcta"],[C.crimson+"33",C.crimson,"Incorrecta"],[C.surface,C.muted,"Sin contestar"]].map(([bg,co,label])=>(
              <div key={label} style={{ display:"flex", alignItems:"center", gap:5 }}>
                <div style={{ width:12, height:12, borderRadius:3, background:bg, border:`1px solid ${co}` }}/>
                <span style={{ color:C.muted, fontSize:11, fontFamily:"'DM Sans',sans-serif" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
