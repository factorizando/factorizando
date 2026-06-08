// src/pages/Universidad.jsx
import SubjectPage from "../components/SubjectPage";
import { SUBJECTS_UNI } from "../data/universidadData";
import { SUBJECTS_EXANI_II } from "../data/exaniIIData";

const TABS = [
  { id: "unam", label: "UNAM", subjects: SUBJECTS_UNI },
  { id: "exani-ii", label: "EXANI-II", subjects: SUBJECTS_EXANI_II },
];

export default function Universidad() {
  return <SubjectPage level="universidad" tabs={TABS} />;
}
