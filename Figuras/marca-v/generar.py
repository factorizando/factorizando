# -*- coding: utf-8 -*-
"""
Marca de Factorizando · el tribar de prismas 3D, orientacion Ult(V,U).

Emite las piezas sueltas a partir de UNA fuente: las nueve caras copiadas
literales del pliego "Prismas 3D" de Figuras/biblioteca.html (var-ult3d-*).
Son la proyeccion isometrica del circuito (0,0,0)->(L,0,0)->(L,L,0)->(L,L,L),
ya rotada 90 grados para caer en la disposicion del diagrama Ult(V,U). No se
re-derivan con una formula: cualquier recalculo da otra figura.

Tono por orientacion de cara: z opaca, x media, y tenue. Ese sombreado NO es
decoracion — es lo unico que hace legible la V a tamano chico, porque las dos
caras z son los dos trazos de la V. Aplanarlo a un tono da una mancha
trapezoidal (comprobado; ver contacto.png, tercera tira).

Falta la variante de una tinta (bordado, impresion a un color): sin sombreado
la figura se parte en trozos sueltos, y no se emite un asset sin verificar.

Uso: python3 generar.py  ->  v-*.svg en esta carpeta y en public/assets/marca/.
"""
import os, subprocess

D = os.path.dirname(os.path.abspath(__file__))
PUBLICO = os.path.join(D, "..", "..", "public", "assets", "marca")
AZUL = "#4A9EE8"      # el azul del pliego de exploracion, el del disco
TINTA = "#1a1c1f"     # la tinta del comprobante, la misma del wordmark impreso

# (d, orientacion de la cara)
CARAS = [
    ("M 80.69 42.41 L 88 29.75 L 26.62 29.75 L 19.31 42.41 Z", "x"),
    ("M 80.69 17.09 L 88 29.75 L 26.62 29.75 L 19.31 17.09 Z", "y"),
    ("M 12 29.75 L 19.31 42.41 L 26.62 29.75 L 19.31 17.09 Z", "z"),
    ("M 57.31 82.91 L 88 29.75 L 73.38 29.75 L 42.69 82.91 Z", "x"),
    ("M 80.69 17.09 L 88 29.75 L 73.38 29.75 L 66.08 17.09 Z", "y"),
    ("M 35.38 70.25 L 42.69 82.91 L 73.38 29.75 L 66.08 17.09 Z", "z"),
    ("M 57.31 82.91 L 64.62 70.25 L 50 70.25 L 42.69 82.91 Z", "x"),
    ("M 33.92 17.09 L 64.62 70.25 L 50 70.25 L 19.31 17.09 Z", "y"),
    ("M 12 29.75 L 42.69 82.91 L 50 70.25 L 19.31 17.09 Z", "z"),
]

# Las dos escalas de sombreado. PLIEGO es la de la captura; DISCO sube el
# contraste porque el blanco al .3 sobre azul se lava por debajo de 32 px.
PLIEGO = {"z": "1", "x": ".55", "y": ".3"}
DISCO = {"z": "1", "x": ".38", "y": ".12"}

# El pliego dibuja la figura ocupando 76 de 100 (x de 12 a 88). Suelta, sin
# disco, se agranda hasta 92; dentro del disco baja a .80 del lienzo.
SUELTA = 92.0 / 76.0


def figura(op, fill, escala):
    caras = "".join('<path d="%s" opacity="%s"/>' % (d, op[t]) for d, t in CARAS)
    return ('<g fill="%s" transform="translate(50 50) scale(%.4f) '
            'translate(-50 -50)">%s</g>' % (fill, escala, caras))


def hoja(cuerpo):
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">'
            + cuerpo + '</svg>\n')


def disco(fill_disco):
    return hoja('<circle cx="50" cy="50" r="50" fill="%s"/>' % fill_disco
                + figura(DISCO, "#fff", .80))


PIEZAS = {
    "principal": hoja(figura(PLIEGO, "currentColor", SUELTA)),
    "avatar":    disco(AZUL),
    "impresa":   hoja(figura(PLIEGO, TINTA, SUELTA)),
}

os.makedirs(PUBLICO, exist_ok=True)
for k, v in PIEZAS.items():
    open(os.path.join(D, "v-%s.svg" % k), "w").write(v)

# Al sitio solo van las tres que consume: la de la barra, el favicon/avatar y
# el PNG del comprobante (que va como <img>, no en linea — ver MarcaImpresa).
for k in ("principal", "avatar"):
    open(os.path.join(PUBLICO, "v-%s.svg" % k), "w").write(PIEZAS[k])
subprocess.run(["inkscape", os.path.join(D, "v-impresa.svg"),
                "-w", "320", "-h", "320",
                "-o", os.path.join(PUBLICO, "v-impresa.png")],
               check=True, capture_output=True)

print("piezas:", " ".join(sorted(PIEZAS)))
