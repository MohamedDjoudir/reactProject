import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationsEN from './en/en.json'
import translationsAR from './ar/ar.json'
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

const resources = {
  ar: { translation: translationsAR },
  en: { translation: translationsEN }

};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ar',
    debug: true,
    resources,
     interpolation: {
      escapeValue: false, 
    },
    react: {
      useSuspense: false //   <---- this will do the magic
    }
  });


export default i18n;