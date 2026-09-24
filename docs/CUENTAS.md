# Cuentas: ciclo de vida de alumno y tutor

Referencia de cómo se crea, aprueba, usa y modifica una cuenta (alumno o tutor),
qué tablas toca cada paso y quién lo puede tocar. Para la panorámica del
sistema de diseño y la arquitectura general, ver `docs/DISENO.md` y `CLAUDE.md`.

## 1. Las piezas

| Objeto | Qué es | Quién lo crea |
|---|---|---|
| `auth.users` | La credencial (correo/contraseña). La maneja Supabase. | Supabase Auth |
| `profiles` | **La cuenta.** `id = auth.users.id`. Guarda identidad, `rol`, `estado_acceso`, `bloque`, `perfil_completo`, `suspendido_*`. | Un trigger del panel (**no versionado** en este repo), al registrarse |
| `alumnos` | **El expediente del alumno.** `profile_id` nullable; guarda nivel, bloque y datos médicos. | `CompletarPerfil` / aprobación (con cuenta) o el admin (manual) |
| `alumno_tutor` | Vínculo N:M `alumnos.id ↔ profiles.id (tutor)` con `estado` (`pendiente\|activo\|rechazado`). | El tutor (solicita) o el admin (directo) |
| `contactos_emergencia` | 1-2 por alumno (`orden` 1\|2). | `CompletarPerfil` o el admin |
| Storage `avatars` | Foto de perfil (`<uid>/<ts>.<ext>`). | `CompletarPerfil` |
| `cargos` / `inscripciones` / `suscripciones` / `taller_sesiones` / `resultados` | Cobranza y avance; **cuelgan de `alumnos.id`**, no de la cuenta. | Admin o el propio alumno (talleres/cuestionarios) |

Ya **no existe `tutores`**: un tutor es un `profiles` con `rol='tutor'` y `relacion`
(`padre|madre|tutor`), desde `20260923020000_plegar_tutores_profiles.sql`.

La **identidad** (nombre, apellidos, teléfono, fecha de nacimiento) se duplica en
`profiles` y `alumnos` por una razón física: el alumno sin cuenta solo existe en
`alumnos`. Para que no diverja, **manda la cuenta**: el trigger
`sync_alumno_identidad` (`20260923030000_sync_identidad_alumno.sql`) copia de
`profiles` al expediente cuando esos campos cambian. El **correo no** se
sincroniza (vive en la cuenta). Los alumnos sin cuenta capturan su identidad
directamente en `alumnos`.

## 2. Alumno, paso a paso

1. **Registro** (`src/components/AuthCard.jsx`): `supabase.auth.signUp` con
   CAPTCHA → nace `auth.users`; el trigger del panel crea `profiles` en
   `estado_acceso='pendiente'`, `perfil_completo=false`. Supabase manda el
   correo de confirmación.
2. **Verifica el correo** → hay sesión. Al aterrizar, `Home`/`AuthCard`
   detectan `perfil_completo=false` y mandan a `/completar-perfil`.
3. **`CompletarPerfil`** (`src/pages/CompletarPerfil.jsx`):
   - Paso 1 elige tipo (**alumno**), que se guarda en
     `profiles.tipo_solicitado`.
   - Formulario: nombre, apellidos, teléfono, avatar, estado, ciudad, fecha de
     nacimiento, nivel educativo, institución/CCT y hasta 2 contactos.
   - **Escribe:**
     - `profiles`: `nombre, apellidos, telefono, avatar_url,
       perfil_completo=true, tipo_solicitado, estado, ciudad, fecha_nacimiento,
       nivel_educativo, institucion, institucion_cct`.
     - `alumnos` **upsert** (`id = profile_id = uid`): `nombre, apellidos,
       fecha_nacimiento, email=null, telefono, nivel` (derivado:
       `media_superior→prepa`, `superior→universidad`; si no, por edad:
       `<12`→primaria, si no secundaria).
     - `contactos_emergencia`: borra los del alumno e inserta 0-2.
     - Storage `avatars`.
   - Manda a `/cuenta-pendiente`.
4. **Aprobación** (`src/pages/admin/AdminSolicitudes.jsx`, tipo Alumno):
   `profiles.update({ estado_acceso:'aprobado', motivo_rechazo:null,
   revisado_en, bloque })`. **Solo si el bloque es `regularizacion`**, además
   hace `alumnos` upsert (id = profile id, `nivel` por edad).
   - **Rechazo:** `profiles` (`estado_acceso='rechazado', bloque=null,
     motivo_rechazo, revisado_en`) y borra/archiva el expediente `alumnos`.
5. **Ingreso** (`src/components/ProtectedRoute.jsx`): sesión →
   `perfil_completo` → staff → `estado_acceso='aprobado'` → suspensión →
   `bloque === requiredNivel`. Destino: `/alumno` si tiene expediente, si no
   `/{bloque}`.

## 3. Tutor, paso a paso

1-3. Igual que el alumno, pero en `CompletarPerfil` elige **tutor**: solo
   nombre, apellidos, teléfono y avatar. **No crea `alumnos` ni contactos.**
   `tipo_solicitado='tutor'`. Manda a `/cuenta-pendiente`.
4. **Aprobación** (tipo Tutor):
   `profiles.update({ estado_acceso:'aprobado', rol:'tutor', bloque:null,
   relacion })`. Ya no hay ficha.
5. **Ingreso:** `/tutor` (`requiredNivel="tutor"`; exige `rol='tutor'`). Lista
   a sus alumnos por `alumno_tutor` con `estado='activo'` y
   `tutor_id = auth.uid()`.
6. **Vincular a un alumno:** busca por correo/teléfono exacto
   (`buscar_alumno_para_tutor`) y crea `alumno_tutor` `pendiente`
   (`solicitar_vinculo_tutor`); el **alumno confirma** (`resolver_vinculo_tutor`
   → `activo`) o el admin vincula directo desde la ficha (`activo`).
7. **Opera en nombre del alumno:** talleres
   (`/tutor/alumno/:id/practicar/:tallerId` → escribe
   `taller_sesiones.alumno_id`) y cuestionarios
   (`/cuestionario/:id?alumno=<id>` → `resultados.user_id`).

## 4. Quién puede modificar qué (y efecto en tablas)

**El alumno (su propia cuenta):**
- **No hay pantalla de "editar perfil"** para usuarios aprobados. La única vía
  es re-ejecutar `/completar-perfil` a mano (ruta pública con sesión), que
  re-escribe `profiles`, re-upserta `alumnos` y reemplaza
  `contactos_emergencia`. La identidad que cambie en `profiles` la copia el
  trigger al expediente.
- En `/alumno`: **confirma o rechaza** vínculos de tutores
  (`alumno_tutor.estado` vía `resolver_vinculo_tutor`).
- En talleres/cuestionarios: escribe `taller_sesiones` y `resultados`.
- **No puede** tocar `bloque`, `estado_acceso`, `rol`, `suspendido_*`.

**El administrador:**

| Dónde | Cambia | Tablas |
|---|---|---|
| Solicitudes | aprobar/rechazar, `bloque`, `rol='tutor'`, `relacion`, `motivo_rechazo` | `profiles` (+ `alumnos` si regularización) |
| Cuentas | suspender/reactivar (`suspendido_*`), cambiar `bloque` | `profiles` |
| Alumnos (lista) | nivel, datos médicos; **identidad solo lectura si tiene cuenta** | `alumnos` |
| Ficha del alumno | `bloque`, médicos, contactos, vincular/quitar tutores | `profiles`, `alumnos`, `contactos_emergencia`, `alumno_tutor` |
| Tutores | `relacion`, archivar/reactivar (corta acceso y desactiva vínculos) | `profiles`, `alumno_tutor` |

**El trigger de identidad** (`sync_alumno_identidad`): cuando `profiles` cambia
`nombre/apellidos/telefono/fecha_nacimiento`, copia al `alumnos` con ese
`profile_id`. **Manda la cuenta.** El correo **no** se sincroniza.

## 5. Huecos conocidos (pendientes)

- **P1 — Nadie edita la identidad de una cuenta aprobada desde el panel.**
  El formulario de Alumnos la bloquea para alumnos con cuenta, y Cuentas no
  edita nombre/teléfono. Hoy solo se corrige re-corriendo `/completar-perfil`.
  Falta un "Editar datos" en la cuenta.
- **P2 — La aprobación de admisión no crea expediente `alumnos`.** Consecuencias:
  no hay `/alumno`, no hay contactos ni datos médicos, y **no se puede vincular
  a un tutor** (porque `alumno_tutor` apunta a `alumnos`). Esto es lo que
  resuelven la fase de `alumnos.bloque` y el modo operador.
- La **suspensión es un gate de navegación**, no RLS: el contenido viaja en el
  bundle.
- **`profiles` no está versionada en el repo** (se creó desde el panel): su
  trigger de alta y algunas columnas viven fuera de las migraciones.
- El **correo de confirmación/recuperación** depende del SMTP configurado; con
  el integrado solo llega a correos del equipo y a 2/hora.
