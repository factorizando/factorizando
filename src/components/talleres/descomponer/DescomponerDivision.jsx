// Raíz del taller «Dividir descomponiendo». Delgada a propósito: toda la
// armazón vive en Shell.jsx y el motor de ejercicios, en la capa de datos.
import Shell from "./Shell.jsx";

export default function DescomponerDivision(props) {
  return <Shell operacion="division" {...props} />;
}
