import { themes } from "@/constants/themes";
import { ThemeStoreState } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useThemeStore = create<ThemeStoreState>()(
  persist(
    (set, get) => ({
      theme: themes.at(0) || "dark",
      updateTheme: (newTheme: string) => set({ theme: newTheme }),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
