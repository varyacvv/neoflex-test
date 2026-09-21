import { createContext } from "react";
import type { Lang, TranslationSchema } from "./translations";

export interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: <K extends keyof TranslationSchema>(section: K) => TranslationSchema[K];
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export const LANG_STORAGE_KEY = "qpick_lang";
