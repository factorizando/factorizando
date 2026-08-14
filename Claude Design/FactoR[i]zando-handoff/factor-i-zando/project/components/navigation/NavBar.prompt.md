Barra superior fija con logo, enlaces de materia y un único botón primario.

```jsx
<NavBar items={materias} activeId="quimica" onSelect={setId} ctaLabel="Comenzar" />
```

Cada materia puede llevar su `tint`/`color` para el estado activo.
