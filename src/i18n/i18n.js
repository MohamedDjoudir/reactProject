import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationsEN from './en/en.json'
import translationsAR from './ar/ar.json'
 

const resources = {
  ar: { translation: translationsAR },
  en: { translation: translationsEN }

};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ["en-US","ar", "en"],
    debug: false,
    resources,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false  
    }
  });


export default i18n;