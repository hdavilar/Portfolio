import i18n from 'i18next';
import i18nextHttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

/**
 * Archivo en el que se declara la configuración y los archivos de las traducciones de la web.
 */
i18n
  .use(i18nextHttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: true,
    ns: ['translation'],
    defaultNS: 'translation',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', //Esta carpeta debe estar en la carpeta public del proyecto
    },
  });

export default i18n;