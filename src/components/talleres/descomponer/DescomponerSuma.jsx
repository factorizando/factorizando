// Raíz del taller «Sumar descomponiendo». Delgada a propósito: toda la
// armazón vive en Shell.jsx y el motor de ejercicios, en la capa de datos.
import Shell from "./Shell.jsx";

export default function DescomponerSuma(props) {
  return <Shell operacion="suma" {...props} />;
}
