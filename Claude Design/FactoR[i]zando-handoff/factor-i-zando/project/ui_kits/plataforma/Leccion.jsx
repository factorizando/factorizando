const { Button, IconButton, Card, Badge, ProgressBar, Logo, Input, Alert, Switch } = window.__FX;

function Leccion({ subject, onBack }) {
  const [answer, setAnswer] = React.useState('');
  const [state, setState] = React.useState(null);
  const accent = `var(--fx-${subject.token})`;
  const check = () => setState(answer.replace(/\s/g, '') === '2^3x3' || answer.replace(/\s/g, '') === '2³×3' ? 'success' : 'error');
  return (
    <div style={{ background: 'var(--fx-bg)', minHeight: '100vh', fontFamily: 'var(--fx-font-body)', color: 'var(--fx-text-body)' }}>
      <header style={{ background: 'var(--fx-surface)', borderBottom: '1px solid var(--fx-border)', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '14px clamp(20px,4vw,48px)', display: 'flex', alignItems: 'center', gap: 20 }}>
          <IconButton label="Volver" variant="outline" onClick={onBack}>←</IconButton>
          <Logo size={16} mark={false} />
          <div style={{ flex: 1, maxWidth: 420 }}>
            <ProgressBar value={4} max={10} valueLabel="" color={accent} size="sm" />
          </div>
          <span style={{ fontFamily: 'var(--fx-font-mono)', fontSize: 13, color: 'var(--fx-text-muted)' }}>4 / 10</span>
          <Switch label="Pistas" checked onChange={() => {}} />
        </div>
      </header>

      <main style={{ maxWidth: 1080, margin: '0 auto', padding: 'clamp(32px,5vw,56px) clamp(20px,4vw,48px) 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <Badge tone={subject.token === 'math' ? 'math' : subject.token}>{subject.title}</Badge>
            <span style={{ fontSize: 13, color: 'var(--fx-text-muted)' }}>Unidad 4 · Ejercicio 4</span>
          </div>
          <h1 style={{ fontFamily: 'var(--fx-font-heading)', fontWeight: 600, fontSize: 'clamp(26px,3vw,34px)', lineHeight: 1.2, letterSpacing: '-0.022em', color: 'var(--fx-text-heading)', margin: 0 }}>Escribe 24 como producto de factores primos</h1>
          <p style={{ fontSize: 17, lineHeight: 1.66, margin: 0, textWrap: 'pretty' }}>Usa exponentes cuando un factor se repita. Puedes apoyarte en el árbol de la derecha: arrastra cada rama hasta que todas las hojas sean primas.</p>
          <Card padding={22} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Input label="Tu respuesta" mono placeholder="2^3 x 3" value={answer} onChange={e => { setAnswer(e.target.value); setState(null); }} />
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Button variant="success" onClick={check}>Comprobar respuesta</Button>
              <Button variant="tertiary" onClick={() => { setAnswer(''); setState(null); }}>Limpiar</Button>
            </div>
            {state === 'success' && <Alert tone="success" title="¡Correcto!">24 = 2³ × 3. Pasa a la siguiente rama.</Alert>}
            {state === 'error' && <Alert tone="error" title="Todavía no">Revisa el exponente del 2: escribe la respuesta como 2^3 x 3.</Alert>}
          </Card>
          <Alert tone="info" title="Modo práctica">Este ejercicio no cuenta para tu calificación.</Alert>
        </div>

        <Card padding={16} style={{ boxShadow: 'var(--fx-shadow-float)' }}>
          <div style={{ aspectRatio: '1 / 1', borderRadius: 12, background: 'repeating-linear-gradient(135deg, #EEF4FE 0 10px, #E2ECFD 10px 20px)', display: 'grid', placeItems: 'center', textAlign: 'center', padding: 24 }}>
            <span style={{ fontFamily: 'var(--fx-font-mono)', fontSize: 12, lineHeight: 1.8, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--fx-primary-600)' }}>widget interactivo<br />árbol de factores</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 6px 4px' }}>
            <span style={{ fontSize: 13, color: 'var(--fx-text-muted)' }}>Arrastra las ramas</span>
            <span style={{ fontFamily: 'var(--fx-font-mono)', fontSize: 15, color: 'var(--fx-text-heading)' }}>24 = ?</span>
          </div>
        </Card>
      </main>
    </div>
  );
}
window.Leccion = Leccion;
