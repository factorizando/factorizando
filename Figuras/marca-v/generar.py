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
AZUL = "#3b9eff"      # el azul del sitio: el de la R[i] del wordmark y el de las
                      # doce pantallas del sistema viejo, donde vive el disco. NO el
                      # #4A9EE8 del pliego de exploracion, que era el de la hoja.
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


# Los iconos maskable de Android y los apple-touch de iOS se recortan con una
# mascara del sistema, asi que el fondo tiene que llegar a las ESQUINAS: un
# disco deja transparencia que iOS compone en negro y Android muerde. De ahi
# esta variante cuadrada. La figura cabe en la zona segura sin encogerla: a
# escala .80 su vertice mas lejano queda a 34.5 del centro y el radio seguro
# de un maskable es 40.
def cuadro(fill_fondo):
    return hoja('<rect width="100" height="100" fill="%s"/>' % fill_fondo
                + figura(DISCO, "#fff", .80))


PIEZAS = {
    "principal": hoja(figura(PLIEGO, "currentColor", SUELTA)),
    "avatar":    disco(AZUL),
    "cuadro":    cuadro(AZUL),
    "impresa":   hoja(figura(PLIEGO, TINTA, SUELTA)),
}

os.makedirs(PUBLICO, exist_ok=True)
for k, v in PIEZAS.items():
    open(os.path.join(D, "v-%s.svg" % k), "w").write(v)

# Al sitio van la de la barra y la de disco (favicon, y el avatar circular de
# las doce pantallas del sistema viejo).
for k in ("principal", "avatar"):
    open(os.path.join(PUBLICO, "v-%s.svg" % k), "w").write(PIEZAS[k])


def png(pieza, destino, lado):
    origen = os.path.join(D, "v-%s.svg" % pieza)
    subprocess.run(["inkscape", origen, "-w", str(lado), "-h", str(lado),
                    "-o", os.path.join(PUBLICO, "..", destino)],
                   check=True, capture_output=True)


# El del comprobante va como <img> a un PNG, no en linea — ver MarcaImpresa.
png("impresa", "marca/v-impresa.png", 320)

# Iconos del PWA. El de 'any' puede ser el disco; los que pasan por una mascara
# del sistema (maskable de Android, apple-touch de iOS) van cuadrados.
png("avatar", "icon-192.png", 192)
png("avatar", "icon-512.png", 512)
png("cuadro", "icon-512-maskable.png", 512)
png("cuadro", "icon-180.png", 180)

print("piezas:", " ".join(sorted(PIEZAS)))
