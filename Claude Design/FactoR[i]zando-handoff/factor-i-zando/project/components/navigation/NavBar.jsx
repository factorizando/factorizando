import React from 'react';
import { Logo } from '../core/Logo.jsx';
import { Button } from '../core/Button.jsx';

export function NavBar({ items = [], activeId, onSelect, ctaLabel = 'Comenzar', onCta, secondaryLabel = 'Entrar', onSecondary, style }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(247,249,252,0.92)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--fx-border)', ...style }}>
      <div style={{ maxWidth: 'var(--fx-container)', margin: '0 auto', padding: '16px clamp(20px, 4vw, 48px)', display: 'flex', alignItems: 'center', gap: 'clamp(16px, 3vw, 40px)', flexWrap: 'wrap' }}>
        <Logo />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap', flex: '1 1 auto' }}>
          {items.map(it => {
            const active = it.id === activeId;
            return (
              <a key={it.id} href={it.href || '#'} onClick={e => { if (onSelect) { e.preventDefault(); onSelect(it.id); } }}
                style={{ fontFamily: 'var(--fx-font-body)', fontSize: 15, fontWeight: 500, color: active ? (it.color || 'var(--fx-primary-700)') : 'var(--fx-text-body)', background: active ? (it.tint || 'var(--fx-primary-50)') : 'transparent', padding: '8px 12px', borderRadius: 'var(--fx-radius-sm)', textDecoration: 'none' }}>
                {it.label}
              </a>
            );
          })}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: '0 0 auto' }}>
          {secondaryLabel && <Button variant="tertiary" size="sm" onClick={onSecondary} style={{ border: '1px solid transparent', color: 'var(--fx-primary-700)' }}>{secondaryLabel}</Button>}
          <Button variant="primary" size="sm" style={{ height: 44 }} onClick={onCta}>{ctaLabel}</Button>
        </div>
      </div>
    </header>
  );
}
