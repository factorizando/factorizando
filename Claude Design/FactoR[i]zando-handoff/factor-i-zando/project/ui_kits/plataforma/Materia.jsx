const { NavBar, Button, Card, Badge, ProgressBar, Tabs } = window.__FX;

const LESSONS = [
  { n: '01', title: 'Múltiplos y divisores', meta: '8 min · 12 ejercicios', done: true },
  { n: '02', title: 'Criterios de divisibilidad', meta: '10 min · 14 ejercicios', done: true },
  { n: '03', title: 'Números primos y compuestos', meta: '9 min · 10 ejercicios', done: true },
  { n: '04', title: 'Factorización en primos', meta: '12 min · 10 ejercicios', current: true },
  { n: '05', title: 'Máximo común divisor', meta: '11 min · 12 ejercicios' },
  { n: '06', title: 'Mínimo común múltiplo', meta: '11 min · 12 ejercicios' }
];

function Materia({ subject, onOpen, onHome }) {
  const [tab, setTab] = React.useState('lec');
  const accent = `var(--fx-${subject.token})`;
  return (
    <div style={{ background: 'var(--fx-bg)', minHeight: '100vh', fontFamily: 'var(--fx-font-body)', color: 'var(--fx-text-body)' }}>
      <NavBar items={window.__FX_SUBJECTS.map(s => ({ id: s.id, label: s.title, tint: `var(--fx-${s.token}-tint)`, color: `var(--fx-${s.token}-text)` }))}
        activeId={subject.id} onSelect={() => {}} ctaLabel="Mi cuenta" onSecondary={onHome} secondaryLabel="Inicio" />

      <div style={{ background: `var(--fx-${subject.token}-tint)`, borderBottom: '1px solid var(--fx-border)' }}>
        <div style={{ maxWidth: 'var(--fx-container)', margin: '0 auto', padding: 'clamp(32px,4vw,56px) clamp(20px,4vw,48px)', display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 620 }}>
            <span style={{ fontFamily: 'var(--fx-font-mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: `var(--fx-${subject.token}-text)` }}>Materia · 6.º primaria</span>
            <h1 style={{ fontFamily: 'var(--fx-font-heading)', fontWeight: 600, fontSize: 'clamp(32px,3.6vw,44px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--fx-text-heading)', margin: 0 }}>{subject.title}</h1>
            <p style={{ fontSize: 17, lineHeight: 1.62, margin: 0, textWrap: 'pretty' }}>{subject.description}</p>
          </div>
          <Card padding={20} style={{ minWidth: 280, boxShadow: 'none' }}>
            <ProgressBar value={3} max={14} label="Unidades completas" valueLabel="3 / 14" color={accent} />
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <Button size="sm" onClick={() => onOpen(subject)}>Continuar</Button>
              <Button size="sm" variant="tertiary">Diagnóstico</Button>
            </div>
          </Card>
        </div>
      </div>

      <div style={{ maxWidth: 'var(--fx-container)', margin: '0 auto', padding: '0 clamp(20px,4vw,48px)' }}>
        <Tabs accent={accent} value={tab} onChange={setTab} style={{ marginTop: 8 }}
          items={[{ id: 'lec', label: 'Lecciones', count: 14 }, { id: 'pra', label: 'Práctica', count: 312 }, { id: 'pro', label: 'Progreso' }]} />
      </div>

      <section style={{ maxWidth: 'var(--fx-container)', margin: '0 auto', padding: 'clamp(28px,4vw,48px) clamp(20px,4vw,48px) 80px' }}>
        {tab === 'lec' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 860 }}>
            {LESSONS.map(l => (
              <Card key={l.n} padding="18px 22px" interactive onClick={() => onOpen(subject)}
                style={{ display: 'flex', alignItems: 'center', gap: 20, borderTop: '1px solid var(--fx-border)', borderLeft: l.current ? `3px solid ${accent}` : '1px solid var(--fx-border)', boxShadow: 'none', cursor: 'pointer' }}>
                <span style={{ fontFamily: 'var(--fx-font-mono)', fontSize: 13, color: 'var(--fx-text-muted)', width: 26 }}>{l.n}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
                  <span style={{ fontFamily: 'var(--fx-font-heading)', fontWeight: 500, fontSize: 17, color: 'var(--fx-text-heading)' }}>{l.title}</span>
                  <span style={{ fontSize: 13, color: 'var(--fx-text-muted)' }}>{l.meta}</span>
                </div>
                {l.done && <Badge tone="success">Completada</Badge>}
                {l.current && <Badge tone={subject.token === 'math' ? 'math' : subject.token}>En curso</Badge>}
                <span style={{ fontSize: 15, fontWeight: 600, color: `var(--fx-${subject.token}-text)` }}>→</span>
              </Card>
            ))}
          </div>
        )}
        {tab === 'pra' && (
          <Card style={{ maxWidth: 620 }}>
            <h3 style={{ fontFamily: 'var(--fx-font-heading)', fontWeight: 600, fontSize: 21, margin: '0 0 8px', color: 'var(--fx-text-heading)' }}>Práctica libre</h3>
            <p style={{ margin: '0 0 18px', fontSize: 15, lineHeight: 1.62 }}>Series generadas al momento a partir de las unidades que ya viste. No cuentan para tu calificación.</p>
            <Button onClick={() => onOpen(subject)}>Generar serie</Button>
          </Card>
        )}
        {tab === 'pro' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 20, maxWidth: 860 }}>
            {[['Racha', '5 días'], ['Precisión', '82 %'], ['Tiempo esta semana', '1 h 40 min']].map(([l, v]) => (
              <Card key={l} padding={22} style={{ boxShadow: 'none' }}>
                <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--fx-text-muted)' }}>{l}</span>
                <div style={{ fontFamily: 'var(--fx-font-heading)', fontWeight: 600, fontSize: 30, color: 'var(--fx-text-heading)', marginTop: 6, fontVariantNumeric: 'tabular-nums' }}>{v}</div>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
window.Materia = Materia;
