// src/pages/Universidad.jsx
import SubjectPage from "../components/SubjectPage";
import { SUBJECTS_UNI } from "../data/universidadData";

export default function Universidad() {
  return <SubjectPage level="universidad" subjects={SUBJECTS_UNI} />;
}
