import json, os
SALIDA = "/home/alef/proyectos/factorizando/Figuras/marca"
AZUL = "#4A9EE8"

# ---------------------------------------------------------------
# Marca de Factorizando: el "Cubriente universal" original.
# Trazo dibujado a mano (bezier cubica). La ruta se copia literal
# desde el pliego de las 18; no se re-deriva ni se recalcula.
# ---------------------------------------------------------------
RUTA = "M22 62C22 53 78 53 78 44S22 35 22 26C22 19 44 16 62 20"

def hoja(cuerpo, extra="", stroke="currentColor"):
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" '
            'stroke="%s" stroke-linecap="round">%s%s</svg>' % (stroke, extra, cuerpo))

def cuerpo(sw, sw_el, op_el, punto=True, r=5.5, relleno="currentColor"):
    s = ('<ellipse cx="50" cy="80" rx="28" ry="9" stroke-width="%.1f" opacity="%s"/>'
         '<path d="%s" stroke-width="%.1f"/>' % (sw_el, op_el, RUTA, sw))
    if punto:
        s += '<g fill="%s" stroke="none"><circle cx="50" cy="80" r="%.1f"/></g>' % (relleno, r)
    return s

PRINCIPAL = cuerpo(3.8, 3.8, ".45")
CORTE     = cuerpo(7.5, 5.5, "1", punto=False)          # redibujo para <= 32 px

P = {}
P["principal"] = hoja(PRINCIPAL)
P["una-tinta"] = hoja(cuerpo(3.8, 2.6, "1"))            # sin alfa disponible
P["favicon"]   = hoja(CORTE)
P["medallon"]  = hoja('<g transform="translate(50 50) scale(.76) translate(-50 -50)">%s</g>' % PRINCIPAL,
                      '<circle cx="50" cy="50" r="47" stroke-width="3" opacity=".4"/>')

def disco(interior, escala):
    return ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">'
            '<circle cx="50" cy="50" r="50" fill="%s"/>'
            '<g fill="none" stroke="#fff" stroke-linecap="round" '
            'transform="translate(50 50) scale(%.2f) translate(-50 -50)">%s</g></svg>'
            % (AZUL, escala, interior))

P["avatar"]        = disco(CORTE, .74)
CAND_AV_PRINCIPAL  = disco(cuerpo(3.8, 3.8, ".55", relleno="#fff"), .74)

os.makedirs("png", exist_ok=True)
open("png/av-corte.svg","w").write(P["avatar"])
open("png/av-principal.svg","w").write(CAND_AV_PRINCIPAL)
json.dump(P, open("gen3.json","w"))
for k,v in P.items(): open(os.path.join(SALIDA, "cubriente-%s.svg"%k),"w").write(v+"\n")
print("piezas:", " ".join(P))
