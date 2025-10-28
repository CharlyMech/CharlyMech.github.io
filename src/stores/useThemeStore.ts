import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ThemeMode } from "@/utils/theme.config";

interface ThemeState {
	mode: ThemeMode;
	toggleTheme: () => void;
	setTheme: (mode: ThemeMode) => void;
	initTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
	persist(
		(set, get) => ({
			mode: "light",

			toggleTheme: () => {
				const newMode = get().mode === "light" ? "dark" : "light";
				set({ mode: newMode });

				// Update DOM
				if (typeof document !== "undefined") {
					if (newMode === "dark") {
						document.documentElement.classList.add("dark");
					} else {
						document.documentElement.classList.remove("dark");
					}
				}
			},

			setTheme: (mode: ThemeMode) => {
				set({ mode });

				// Update DOM
				if (typeof document !== "undefined") {
					if (mode === "dark") {
						document.documentElement.classList.add("dark");
					} else {
						document.documentElement.classList.remove("dark");
					}
				}
			},

			initTheme: () => {
				if (typeof window === "undefined") return;

				// Check localStorage first
				const stored = localStorage.getItem("theme-storage");
				if (stored) {
					try {
						const { state } = JSON.parse(stored);
						const mode = state.mode as ThemeMode;
						get().setTheme(mode);
						return;
					} catch (e) {
						console.error("Error parsing stored theme:", e);
					}
				}

				// Fall back to system preference
				const prefersDark = window.matchMedia(
					"(prefers-color-scheme: dark)"
				).matches;
				get().setTheme(prefersDark ? "dark" : "light");

				// Listen for system theme changes
				window
					.matchMedia("(prefers-color-scheme: dark)")
					.addEventListener("change", (e) => {
						// Only update if user hasn't manually set a preference
						const stored = localStorage.getItem("theme-storage");
						if (!stored) {
							get().setTheme(e.matches ? "dark" : "light");
						}
					});
			},
		}),
		{
			name: "theme-storage",
			partialize: (state) => ({ mode: state.mode }),
		}
	)
);
