import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pt from "../locales/pt";
import en from "../locales/en";
import es from "../locales/es";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["pt", "en", "es"],
    fallbackLng: "pt",
    resources: {
      pt,
      en,
      es,
    },
    defaultNS: "common",
    react: { useSuspense: false },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18next;
