import { useEffect, useState, type ReactNode } from 'react';
import {
    LANG_STORAGE_KEY,
    LanguageContext,
    type LanguageContextValue,
} from './languageContext';
import { translations, type Lang, type TranslationSchema } from './translations';

function loadLang(): Lang {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    return saved === 'en' ? 'en' : 'ru';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>(loadLang);

    useEffect(() => {
        localStorage.setItem(LANG_STORAGE_KEY, lang);
        document.documentElement.lang = lang;
    }, [lang]);

    const setLang = (next: Lang) => setLangState(next);

    const t: LanguageContextValue['t'] = <K extends keyof TranslationSchema>(
        section: K,
    ) => translations[lang][section];

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}