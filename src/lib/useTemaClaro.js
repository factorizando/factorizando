import { useEffect } from "react";

// Activa el tema claro (data-theme="light") mientras el componente está montado
// y revierte al valor previo al desmontar.
export function useTemaClaro() {
  useEffect(() => {
    const prev = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", "light");
    return () => {
      if (prev) document.documentElement.setAttribute("data-theme", prev);
      else document.documentElement.removeAttribute("data-theme");
    };
  }, []);
}
