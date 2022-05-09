import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { i18nextPlugin } from 'translation-check';

import i18nConfig from './config';

export default i18n
  .use(LanguageDetector)
  .use(i18nextPlugin)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(i18nConfig);
