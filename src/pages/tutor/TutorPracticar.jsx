// Práctica de regularización operada por el tutor: /tutor/alumno/:alumnoId/practicar/:id
//
// El tutor abre un taller **en nombre** de uno de sus tutorados (normalmente un
// alumno sin cuenta, que no puede iniciar sesión). El avance se guarda en el
// expediente del alumno; la RLS solo lo permite si el vínculo está activo.
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import TallerVer from "../TallerVer.jsx";

export default function TutorPracticar() {
  const { alumnoId } = useParams();
  const [nombre, setNombre] = useState(null);

  useEffect(() => {
    let cancelado = false;
    supabase
      .from("alumnos").select("nombre, apellidos").eq("id", alumnoId).maybeSingle()
      .then(({ data }) => {
        if (!cancelado) setNombre(data ? `${data.nombre} ${data.apellidos}` : "");
      });
    return () => { cancelado = true; };
  }, [alumnoId]);

  return (
    <TallerVer
      alumnoId={alumnoId}
      alumnoNombre={nombre || "Alumno"}
      volverA={`/tutor/alumno/${alumnoId}`}
    />
  );
}
