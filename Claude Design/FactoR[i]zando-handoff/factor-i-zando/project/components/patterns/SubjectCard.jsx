import React from 'react';
import { Card } from '../core/Card.jsx';

export function SubjectCard({ subject = 'math', title, description, meta, icon, actionLabel = 'Abrir →', onClick, style }) {
  const tint = `var(--fx-${subject}-tint)`;
  const accent = `var(--fx-${subject})`;
  const text = `var(--fx-${subject}-text)`;
  return (
    <Card accent={accent} interactive onClick={onClick}
      style={{ display: 'flex', flexDirection: 'column', gap: 18, cursor: onClick ? 'pointer' : 'default', ...style }}>
      <div style={{ width: 52, height: 52, borderRadius: 14, background: tint, display: 'grid', placeItems: 'center' }}>{icon}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h3 style={{ fontFamily: 'var(--fx-font-heading)', fontWeight: 600, fontSize: 21, lineHeight: 1.3, letterSpacing: '-0.012em', color: 'var(--fx-text-heading)', margin: 0 }}>{title}</h3>
        <p style={{ fontFamily: 'var(--fx-font-body)', fontSize: 15, lineHeight: 1.62, color: 'var(--fx-text-body)', margin: 0, textWrap: 'pretty' }}>{description}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 8, fontFamily: 'var(--fx-font-body)' }}>
        <span style={{ fontSize: 13, color: 'var(--fx-text-muted)' }}>{meta}</span>
        <span style={{ fontSize: 15, fontWeight: 600, color: text }}>{actionLabel}</span>
      </div>
    </Card>
  );
}
