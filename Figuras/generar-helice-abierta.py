import math, json
P = math.pi
CX, RX, RY = 50.0, 27.0, 7.0
YTOP, YBOT = 8.0, 70.0
T0, T1 = -1.5*P, 2.5*P
W_MAX, EXP = 4.3, 0.62
N, POR = 48, 4                       # tramos, muestras por tramo

C = ((YBOT - YTOP) - 2*RY) / (T1 - T0)
YMID = (YTOP + YBOT)/2 + C*(T0 + T1)/2
punto = lambda t: (CX + RX*math.cos(t), YMID - C*t + RY*math.sin(t))
ancho = lambda s: W_MAX * math.sin(P*s) ** EXP

# radio de curvatura minimo, para saber si un relleno por desfase se plegaria
def radio(t):
    dx, dy = -RX*math.sin(t), -C + RY*math.cos(t)
    ddx, ddy = -RX*math.cos(t), -RY*math.sin(t)
    num = (dx*dx + dy*dy) ** 1.5
    den = abs(dx*ddy - dy*ddx)
    return num/den if den > 1e-9 else 1e9
rmin = min(radio(T0 + (T1-T0)*k/2000) for k in range(2001))
print("radio de curvatura minimo %.2f vs medio ancho %.2f -> %s" %
      (rmin, W_MAX/2, "el relleno por desfase se pliega" if rmin < W_MAX/2 else "ok"))

# los tramos se agolpan en las puntas: ahi el ancho cambia mas rapido,
# y con reparto uniforme el salto entre tramos vecinos se ve
u = lambda i: 0.5 * (1 - math.cos(P * i / N))
tramos, saltos, anterior = [], [], None
for i in range(N):
    ua, ub = u(i), u(i+1)
    a, b = T0 + (T1-T0)*ua, T0 + (T1-T0)*ub
    pts = [punto(a + (b-a)*k/(POR-1)) for k in range(POR)]
    d = "M%.1f %.1f" % pts[0] + "".join("L%.1f %.1f" % q for q in pts[1:])
    w = max(ancho((ua + ub)/2), 0.3)
    if anterior is not None: saltos.append(abs(w - anterior))
    anterior = w
    tramos.append('<path d="%s" stroke-width="%.2f"/>' % (d, w))

svg = ('<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" '
       'stroke-linecap="round" stroke-linejoin="round">'
       '<ellipse cx="50" cy="82" rx="27" ry="7" stroke-width="3" opacity=".38"/>'
       '<g>' + "".join(tramos) + '</g>'
       '<g fill="currentColor" stroke="none"><circle cx="50" cy="82" r="5"/></g></svg>')
print("salto de ancho maximo entre tramos vecinos: %.3f · %d bytes" % (max(saltos), len(svg)))
open("trazo.svg","w").write(svg)

j = json.load(open("helices.json")); j["TRAZO"] = svg; json.dump(j, open("helices.json","w"))
filas = ""
for k in ["ORIG","TRAZO","CINTA"]:
    tiras = "".join('<div class=p><span class=c style="width:%dpx;height:%dpx">%s</span><i>%d</i></div>'
                    % (s,s,j[k],s) for s in (240,150,96,48,26,16))
    filas += '<section><h2>%s</h2><div class=row>%s</div></section>' % (k, tiras)
open("comparar.html","w").write("""<!doctype html><meta charset=utf-8>
<style>body{background:#13161A;color:#F0EAE1;font:14px/1.5 system-ui;margin:0;padding:24px}
section{border-bottom:1px solid #2A3038;padding:12px 0}
h2{font:600 13px monospace;letter-spacing:.1em;color:#4A9EE8;margin:0 0 10px}
.row{display:flex;align-items:flex-end;gap:22px;flex-wrap:wrap}
.p{display:flex;flex-direction:column;align-items:center;gap:6px}
.c{display:block}.c svg{width:100%;height:100%;display:block}
i{font:11px monospace;color:#98A0A9;font-style:normal}</style>""" + filas)
