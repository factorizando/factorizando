import React from 'react';

export function Tabs({ items = [], value, onChange, accent = 'var(--fx-primary-500)', style }) {
  return (
    <div role="tablist" style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--fx-border)', flexWrap: 'wrap', ...style }}>
      {items.map(it => {
        const active = it.id === value;
        return (
          <button key={it.id} role="tab" aria-selected={active} onClick={() => onChange && onChange(it.id)}
            style={{ fontFamily: 'var(--fx-font-body)', fontSize: 15, fontWeight: 600, color: active ? 'var(--fx-text-heading)' : 'var(--fx-text-muted)', background: 'transparent', border: 'none', borderBottom: '2px solid ' + (active ? accent : 'transparent'), padding: '12px 14px', marginBottom: -1, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            {it.label}
            {it.count != null && (
              <span style={{ fontFamily: 'var(--fx-font-mono)', fontSize: 11, color: 'var(--fx-text-muted)', background: 'var(--fx-surface-sunken)', padding: '2px 6px', borderRadius: 'var(--fx-radius-pill)' }}>{it.count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
