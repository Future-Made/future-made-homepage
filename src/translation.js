import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

import translationEn from "./locales/en/translation.json";
import translationDe from "./locales/de/translation.json";
import translationTr from "./locales/tr/translation.json";
import translationEs from "./locales/es/translation.json";
import translationFr from "./locales/fr/translation.json";
import translationIt from "./locales/it/translation.json";
import translationJp from "./locales/jp/translation.json";


i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: "en",
    fallbackLng: "en",

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translations: translationEn,
      },
      de: {
        translations: translationDe,
      },
      tr: {
        translations: translationTr,
      },
      it: {
        translations: translationIt,
      },
      es: {
        translations: translationEs,
      },
      fr: {
        translations: translationFr,
      },
      jp: {
        translations: translationJp,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;