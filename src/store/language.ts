import { create } from "zustand";

export type Lang = "en" | "es";

interface LangStore {
	lang: Lang;
	setLang: (lang: Lang) => void;
}

export const useLangStore = create<LangStore>((set) => ({
	lang: "en",
	setLang: (lang) => set({ lang }),
}));
