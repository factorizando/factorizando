// src/pages/Preparatoria.jsx
import SubjectPage from "../components/SubjectPage";
import { SUBJECTS_PREP } from "../data/preparatoriaData";

export default function Preparatoria() {
  return <SubjectPage level="preparatoria" subjects={SUBJECTS_PREP} />;
}
