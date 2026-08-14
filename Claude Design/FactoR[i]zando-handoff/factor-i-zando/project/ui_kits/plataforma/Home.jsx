const { NavBar, Button, Card, Badge, ProgressBar, Logo, SubjectCard } = window.__FX;

const marks = {
  math: <span style={{ fontFamily: 'var(--fx-font-mono)', fontSize: 20, color: 'var(--fx-math)' }}>×</span>,
  bio: <span style={{ width: 20, height: 20, borderRadius: '999px 4px 999px 4px', background: 'var(--fx-sage)' }} />,
  qui: <span style={{ width: 22, height: 22, borderRadius: '4px 999px 999px 999px', background: 'var(--fx-coral)' }} />,
  his: <span style={{ width: 22, height: 4, borderRadius: 999, background: 'var(--fx-amber)', boxShadow: '0 7px 0 var(--fx-amber), 0 -7px 0 #E8BE7A' }} />,
  geo: <span style={{ width: 22, height: 22, borderRadius: '50%', border: '4px solid var(--fx-sage)' }} />,
  fis: <span style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 22 }}>
    <span style={{ width: 4, height: 10, borderRadius: 999, background: 'var(--fx-indigo)' }} />
    <span style={{ width: 4, height: 22, borderRadius: 999, background: 'var(--fx-indigo)' }} />
    <span style={{ width: 4, height: 15, borderRadius: 999, background: '#A9A3D8' }} />
  </span>
};

const SUBJECTS = [
  { id: 'math', token: 'math', icon: marks.math, title: 'Matemáticas', meta: '14 unidades · 312 ejercicios', description: 'Aritmética, álgebra y geometría con pizarras donde el resultado cambia mientras lo resuelves.' },
  { id: 'bio', token: 'sage', icon: marks.bio, title: 'Biología', meta: '11 unidades · 208 ejercicios', description: 'De la célula a los ecosistemas: modelos que se desarman por capas para ver qué hay dentro.' },
  { id: 'qui', token: 'coral', icon: marks.qui, title: 'Química', meta: '9 unidades · 176 ejercicios', description: 'Laboratorio virtual: mezcla disoluciones, mide el pH y balancea ecuaciones sin gastar reactivos.' },
  { id: 'his', token: 'amber', icon: marks.his, title: 'Historia', meta: '10 unidades · 154 ejercicios', description: 'Líneas de tiempo que se recorren y comparan: qué pasaba al mismo tiempo en el otro lado del mundo.' },
  { id: 'geo', token: 'sage', icon: marks.geo, title: 'Geografía', meta: '8 unidades · 132 ejercicios', description: 'Mapas reales con capas de clima, relieve y población que puedes encender y apagar.' },
  { id: 'fis', token: 'indigo', icon: marks.fis, title: 'Física / Música', meta: '7 unidades · 118 ejercicios', description: 'Ondas, frecuencia y armonía en un mismo lugar: mueve la cuerda y escucha cómo cambia la nota.' }
];
window.__FX_SUBJECTS = SUBJECTS;

function Home({ onOpen }) {
  return (
    <div style={{ background: 'var(--fx-bg)', minHeight: '100vh', fontFamily: 'var(--fx-font-body)', color: 'var(--fx-text-body)' }}>
      <NavBar items={SUBJECTS.map(s => ({ id: s.id, label: s.title, tint: `var(--fx-${s.token}-tint)`, color: `var(--fx-${s.token}-text)` }))} onSelect={onOpen} ctaLabel="Comenzar" />

      <section style={{ maxWidth: 'var(--fx-container)', margin: '0 auto', padding: 'clamp(48px,7vw,96px) clamp(20px,4vw,48px) clamp(40px,5vw,72px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 560 }}>
            <Badge tone="math" style={{ alignSelf: 'flex-start', fontFamily: 'var(--fx-font-mono)', letterSpacing: '0.12em' }}>Nuevo · Laboratorios de química</Badge>
            <h1 style={{ fontFamily: 'var(--fx-font-heading)', fontWeight: 600, fontSize: 'clamp(38px,4.6vw,58px)', lineHeight: 1.08, letterSpacing: '-0.028em', color: 'var(--fx-text-heading)', margin: 0, textWrap: 'balance' }}>Entender primero. Memorizar después.</h1>
            <p style={{ fontSize: 19, lineHeight: 1.62, margin: 0, textWrap: 'pretty' }}>Lecciones cortas con ejercicios que se manipulan: arrastra factores, mide el pH, recorre una línea de tiempo. De primaria a preparatoria, seis materias con la misma lógica de aprendizaje.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 4 }}>
              <Button size="lg" onClick={() => onOpen('math')}>Empezar gratis</Button>
              <Button size="lg" variant="tertiary" style={{ borderColor: 'var(--fx-primary-200)', color: 'var(--fx-primary-700)', background: 'var(--fx-surface)' }} onClick={() => onOpen('math')}>Ver una lección</Button>
            </div>
            <div style={{ display: 'flex', gap: 'clamp(20px,4vw,44px)', flexWrap: 'wrap', borderTop: '1px solid var(--fx-border)', marginTop: 12, paddingTop: 24 }}>
              {[['1 240', 'ejercicios interactivos'], ['6', 'materias, 9 grados'], ['12 min', 'por lección, en promedio']].map(([n, l]) => (
                <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <span style={{ fontFamily: 'var(--fx-font-heading)', fontWeight: 600, fontSize: 28, color: 'var(--fx-text-heading)', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>{n}</span>
                  <span style={{ fontSize: 13, color: 'var(--fx-text-muted)' }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 320 }}>
            <Card padding={14} style={{ boxShadow: 'var(--fx-shadow-float)', borderRadius: 20 }}>
              <div style={{ aspectRatio: '4 / 3', borderRadius: 12, background: 'repeating-linear-gradient(135deg, #EEF4FE 0 10px, #E2ECFD 10px 20px)', display: 'grid', placeItems: 'center', textAlign: 'center', padding: 20 }}>
                <span style={{ fontFamily: 'var(--fx-font-mono)', fontSize: 12, lineHeight: 1.7, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--fx-primary-600)' }}>captura del producto<br />widget · árbol de factores</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '16px 10px 6px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{ fontFamily: 'var(--fx-font-heading)', fontWeight: 600, fontSize: 16, color: 'var(--fx-text-heading)' }}>Factorización en primos</span>
                  <span style={{ fontSize: 13, color: 'var(--fx-text-muted)' }}>Matemáticas · 6.º grado</span>
                </div>
                <span style={{ fontFamily: 'var(--fx-font-mono)', fontSize: 15, color: 'var(--fx-text-heading)', background: 'var(--fx-bg)', border: '1px solid var(--fx-border)', padding: '7px 11px', borderRadius: 9 }}>24 = 2³ × 3</span>
              </div>
            </Card>
            <Card padding="14px 18px" style={{ display: 'flex', alignItems: 'center', gap: 12, borderRadius: 14, boxShadow: 'none' }}>
              <span style={{ width: 10, height: 10, borderRadius: 999, background: 'var(--fx-success)', flex: '0 0 auto' }} />
              <span style={{ fontSize: 14 }}>Respuesta correcta — <strong style={{ fontWeight: 600, color: 'var(--fx-text-heading)' }}>7 de 10</strong> completados esta semana.</span>
            </Card>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 'var(--fx-container)', margin: '0 auto', padding: 'clamp(40px,5vw,72px) clamp(20px,4vw,48px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap', marginBottom: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 620 }}>
            <span style={{ fontFamily: 'var(--fx-font-mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fx-text-muted)' }}>Materias</span>
            <h2 style={{ fontFamily: 'var(--fx-font-heading)', fontWeight: 600, fontSize: 'clamp(28px,3vw,38px)', lineHeight: 1.16, letterSpacing: '-0.022em', color: 'var(--fx-text-heading)', margin: 0 }}>Elige por dónde empezar</h2>
            <p style={{ fontSize: 17, lineHeight: 1.62, margin: '4px 0 0', textWrap: 'pretty' }}>Cada materia tiene su color: lo reconocerás en las gráficas, en tu progreso y en los widgets.</p>
          </div>
          <Button variant="tertiary" style={{ borderColor: 'var(--fx-primary-200)', color: 'var(--fx-primary-700)', background: 'var(--fx-surface)' }}>Ver el temario completo</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, maxWidth: 1060 }}>
          {SUBJECTS.map(s => (
            <SubjectCard key={s.id} subject={s.token} icon={s.icon} title={s.title} meta={s.meta} description={s.description} onClick={() => onOpen(s.id)} />
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 'var(--fx-container)', margin: '0 auto', padding: 'clamp(24px,4vw,48px) clamp(20px,4vw,48px) clamp(56px,6vw,88px)' }}>
        <div style={{ background: 'var(--fx-primary-900)', borderRadius: 'var(--fx-radius-xl)', padding: 'clamp(32px,5vw,56px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 620 }}>
            <h2 style={{ fontFamily: 'var(--fx-font-heading)', fontWeight: 600, fontSize: 'clamp(26px,2.8vw,34px)', lineHeight: 1.2, letterSpacing: '-0.022em', color: '#fff', margin: 0, textWrap: 'balance' }}>¿Das clase? Crea un grupo en dos minutos</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--fx-text-on-dark)', margin: 0, textWrap: 'pretty' }}>Asigna unidades, revisa el progreso por estudiante y detecta dónde se atoró el grupo. Gratis para escuelas públicas.</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="onDark">Crear grupo</Button>
            <Button variant="tertiary" style={{ color: '#fff', borderColor: '#3F5B7A' }}>Hablar con alguien</Button>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid var(--fx-border)', background: 'var(--fx-surface)' }}>
        <div style={{ maxWidth: 'var(--fx-container)', margin: '0 auto', padding: 'clamp(40px,5vw,64px) clamp(20px,4vw,48px) 32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Logo size={16} />
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fx-text-muted)', margin: 0, maxWidth: '26ch' }}>Aprender haciendo, de primaria a preparatoria.</p>
          </div>
          {[['Materias', ['Matemáticas', 'Biología y Geografía', 'Química', 'Historia', 'Física / Música']],
            ['Plataforma', ['Para docentes', 'Para escuelas', 'Precios', 'Ayuda']],
            ['Nosotros', ['Quiénes somos', 'Accesibilidad', 'Privacidad', 'Contacto']]].map(([t, links]) => (
            <div key={t} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fx-text-heading)' }}>{t}</span>
              {links.map(l => <a key={l} href="#" style={{ fontSize: 14, color: 'var(--fx-text-body)', textDecoration: 'none' }}>{l}</a>)}
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 'var(--fx-container)', margin: '0 auto', padding: '20px clamp(20px,4vw,48px) 40px', borderTop: '1px solid var(--fx-surface-sunken)', display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', fontFamily: 'var(--fx-font-mono)', fontSize: 12, color: 'var(--fx-text-muted)' }}>
          <span>© 2026 FactoR[i]zando</span><span>Hecho en español · es-MX</span>
        </div>
      </footer>
    </div>
  );
}
window.Home = Home;
