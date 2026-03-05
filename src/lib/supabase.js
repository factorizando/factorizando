// src/lib/supabase.js
// ─────────────────────────────────────────────────────────────────────────────
// Configuración del cliente de Supabase.
// Las variables de entorno se leen del archivo .env en la raíz del proyecto.
//
// PASOS para configurar:
//   1. Crea un proyecto en https://supabase.com (gratis)
//   2. Ve a Project Settings → API
//   3. Copia "Project URL" y "anon / public key"
//   4. Pégalos en tu archivo .env:
//        VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
//        VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5c...
// ─────────────────────────────────────────────────────────────────────────────

import { createClient } from "@supabase/supabase-js";

const supabaseUrl  = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey  = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "❌ Faltan las variables de entorno de Supabase.\n" +
    "Crea un archivo .env en la raíz con:\n" +
    "  VITE_SUPABASE_URL=...\n" +
    "  VITE_SUPABASE_ANON_KEY=..."
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);
