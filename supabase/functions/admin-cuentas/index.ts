// Edge Function `admin-cuentas` — gestión de cuentas que exige la service role.
//
// `auth.users` no es accesible con la llave anónima, así que el panel no puede
// por sí solo ver quién no confirmó su correo ni borrar esas cuentas. Esta
// función hace de intermediaria: recibe el JWT de quien llama, comprueba que
// sea `admin` y solo entonces usa la service role.
//
// Acciones (POST, JSON):
//   { accion: "listar" }        → cuentas sin confirmar
//   { accion: "eliminar", id }  → borra auth.users (cascadea profiles)
//
// Desplegar:  supabase functions deploy admin-cuentas
// La service role la inyecta Supabase; no hay que configurar secretos.
import { createClient } from "npm:@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });

  const url = Deno.env.get("SUPABASE_URL")!;
  const anon = Deno.env.get("SUPABASE_ANON_KEY")!;
  const service = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const authHeader = req.headers.get("Authorization") || "";

  // 1. ¿Quién llama? Cliente con SU JWT (sujeto a RLS).
  const llamante = createClient(url, anon, { global: { headers: { Authorization: authHeader } } });
  const { data: { user }, error: uErr } = await llamante.auth.getUser();
  if (uErr || !user) return json({ error: "Sin sesión." }, 401);

  const { data: perfil } = await llamante.from("profiles").select("rol").eq("id", user.id).single();
  if (perfil?.rol !== "admin") return json({ error: "Solo un administrador." }, 403);

  // 2. Cliente con service role, solo después de verificar.
  const admin = createClient(url, service, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  let body: { accion?: string; id?: string } = {};
  try { body = await req.json(); } catch { /* sin cuerpo */ }

  if (body.accion === "listar") {
    const { data, error } = await admin.auth.admin.listUsers({ page: 1, perPage: 1000 });
    if (error) return json({ error: error.message }, 500);
    const usuarios = (data.users || [])
      .filter((u) => !u.email_confirmed_at)
      .map((u) => ({
        id: u.id,
        email: u.email,
        creado_en: u.created_at,
        nombre: (u.user_metadata?.nombre as string) || null,
      }));
    return json({ usuarios });
  }

  if (body.accion === "eliminar") {
    if (!body.id) return json({ error: "Falta el id de la cuenta." }, 400);
    if (body.id === user.id) return json({ error: "No puedes borrar tu propia cuenta." }, 400);
    const { error } = await admin.auth.admin.deleteUser(body.id);
    if (error) return json({ error: error.message }, 500);
    return json({ ok: true });
  }

  return json({ error: "Acción desconocida." }, 400);
});
