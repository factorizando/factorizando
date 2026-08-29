# -*- coding: utf-8 -*-
"""Hoja de pruebas: cada pieza a sus tamanos reales, ampliada 8x al pixel."""
import os, subprocess
D = os.path.dirname(os.path.abspath(__file__)); TMP = os.path.join(D, "png")
os.makedirs(TMP, exist_ok=True)

CLARO, OSCURO = "#f7f9fc", "#0e1926"
AZUL_CLARO, AZUL_OSCURO = "#0056d2", "#4f92f0"

def fila(nombre, svg, fondo, tams):
    f = os.path.join(TMP, "%s.svg" % nombre); open(f, "w").write(svg)
    piezas = []
    for t in tams:
        o = os.path.join(TMP, "%s-%d.png" % (nombre, t))
        subprocess.run(["inkscape", f, "-w", str(t), "-h", str(t), "-o", o],
                       check=True, capture_output=True)
        a = o.replace(".png", "-x8.png")
        subprocess.run(["magick", o, "-background", fondo, "-flatten", "-filter", "point",
                        "-resize", str(t * 8), "-bordercolor", fondo, "-border", "10", a],
                       check=True)
        piezas.append(a)
    out = os.path.join(TMP, "fila-%s.png" % nombre)
    subprocess.run(["magick"] + piezas + ["-background", fondo, "-gravity", "south",
                    "+append", "-bordercolor", "#888", "-border", "2", out], check=True)
    return out

def leer(k):
    return open(os.path.join(D, "v-%s.svg" % k)).read()

filas = [
    fila("barra-claro",  leer("principal").replace("currentColor", AZUL_CLARO),  CLARO,  [40, 28, 25, 16]),
    fila("barra-oscuro", leer("principal").replace("currentColor", AZUL_OSCURO), OSCURO, [40, 28, 25, 16]),
    fila("favicon",      leer("avatar"),                                          CLARO,  [96, 48, 32, 16]),
    fila("impresa",      leer("impresa"),                                         "#fff", [40, 28]),

]
out = os.path.join(D, "hoja-marca.png")
subprocess.run(["magick"] + filas + ["-background", "#888", "-gravity", "west",
                "-append", out], check=True)
print(out)
