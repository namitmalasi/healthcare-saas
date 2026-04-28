import { create } from "zustand";

type ViewMode = "grid" | "list";

type PatientState = {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
};

export const usePatientStore = create<PatientState>((set) => ({
  viewMode: "grid",
  setViewMode: (mode) => set({ viewMode: mode }),
}));