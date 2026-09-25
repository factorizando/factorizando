// Editar la identidad de una cuenta desde el panel.
//
// La cuenta manda: esto escribe en `profiles` y el trigger
// `sync_alumno_identidad` copia nombre, apellidos, teléfono y nacimiento al
// expediente de `alumnos`. El correo vive en `auth.users` y no se toca desde
// aquí (se cambia a mano en Supabase); se muestra de solo lectura.
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { Field, Input, Modal, Button } from "./ui.jsx";
import { GRID_FORM } from "./layout.js";

export default function CuentaEditModal({ cuentaId, onClose, onSaved }) {
  const [form, setForm] = useState(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let vivo = true;
    (async () => {
      const { data, error: err } = await supabase
        .from("profiles")
        .select("nombre, apellidos, telefono, fecha_nacimiento, email")
        .eq("id", cuentaId).single();
      if (!vivo) return;
      if (err) { setError(err.message); return; }
      setForm({
        nombre: data.nombre || "",
        apellidos: data.apellidos || "",
        telefono: data.telefono || "",
        fecha_nacimiento: data.fecha_nacimiento || "",
      });
      setEmail(data.email || "");
    })();
    return () => { vivo = false; };
  }, [cuentaId]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function guardar(e) {
    e.preventDefault();
    if (!form.nombre.trim() || !form.apellidos.trim()) { setError("Nombre y apellidos son obligatorios."); return; }
    setSaving(true); setError(null);
    const { error: err } = await supabase.from("profiles").update({
      nombre: form.nombre.trim(),
      apellidos: form.apellidos.trim(),
      telefono: form.telefono.trim() || null,
      fecha_nacimiento: form.fecha_nacimiento || null,
    }).eq("id", cuentaId);
    setSaving(false);
    if (err) { setError(err.message); return; }
    onSaved?.();
  }

  return (
    <Modal titulo="Editar datos de la cuenta" onClose={onClose}>
      {!form ? (
        <p className="ax-sub" style={{ margin: 0 }}>{error || "Cargando…"}</p>
      ) : (
        <form onSubmit={guardar} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <p className="ax-sub" style={{ margin: 0, whiteSpace: "normal" }}>
            Esto corrige la identidad de la persona y se copia a su expediente. El correo se
            cambia desde Supabase, no aquí.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
            <Field label="Nombre(s)"><Input value={form.nombre} onChange={set("nombre")} required /></Field>
            <Field label="Apellidos"><Input value={form.apellidos} onChange={set("apellidos")} required /></Field>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: GRID_FORM, gap: 12 }}>
            <Field label="Teléfono"><Input value={form.telefono} onChange={set("telefono")} /></Field>
            <Field label="Fecha de nacimiento">
              <Input type="date" value={form.fecha_nacimiento} onChange={set("fecha_nacimiento")} />
            </Field>
          </div>
          <Field label="Correo (solo lectura)">
            <Input value={email} readOnly disabled />
          </Field>
          {error && <div className="ax-badge ax-badge-error" style={{ display: "block" }}>{error}</div>}
          <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
            <Button variante="ghost" onClick={onClose}>Cancelar</Button>
            <Button variante="primary" type="submit" disabled={saving}>
              {saving ? "Guardando…" : "Guardar cambios"}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
