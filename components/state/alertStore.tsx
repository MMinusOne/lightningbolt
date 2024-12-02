import { Alert, AlertStoreState } from "@/types";
import { create } from "zustand";

export const useAlertStore = create<AlertStoreState>()((set, get) => ({
  alerts: [],
  addAlert: (alert: Alert) => set((prev) => ({ alerts: [...prev.alerts, alert] })),
  deleteAlert: (index: number) => set((prev) => ({
    alerts: prev.alerts.filter((_, i) => i !== index)
  })),
}));
