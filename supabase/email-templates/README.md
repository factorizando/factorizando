# Plantillas de correo

Estas plantillas se pegan a mano en **Supabase → Authentication → Email Templates**.
Supabase **no las lee del repositorio**; viven aquí como registro y para poder
diferanciarlas.

| Archivo | Plantilla de Supabase | Asunto |
|---|---|---|
| `confirm-signup.html` | Confirm signup | `Confirma tu cuenta de Factoℝ[i]zando` |
| `reset-password.html` | Reset password | `Tu código para restablecer la contraseña` |

## Variables de Go

Se dejan tal cual salen del editor de Supabase. Las que se usan:

- `{{ .ConfirmationURL }}` — enlace que confirma / recupera y regresa al sitio.
- `{{ .Token }}` — código de 6 dígitos. **Obligatorio en Reset password**: la app
  recupera por código (`verifyOtp({ type: "recovery" })`), no por enlace.
- `{{ .Email }}` y `{{ .SiteURL }}`.

## Al editar

- Solo estilos en línea y layout con tablas: los clientes de correo descartan
  `<style>` y no renderizan SVG. El logo es un PNG servido por GitHub Pages.
- No borrar `{{ .ConfirmationURL }}` en *Confirm signup* ni `{{ .Token }}` en
  *Reset password*.

## URL Configuration

Authentication → **URL Configuration**: que *Site URL* y *Redirect URLs*
incluyan `https://factorizando.github.io/factorizando/`. Si no,
`{{ .ConfirmationURL }}` puede regresar a `localhost`.
