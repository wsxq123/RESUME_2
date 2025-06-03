import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './i18n/en.json';
import translationZHTW from './i18n/zhTW.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationEN },
      zh_tw: { translation: translationZHTW },
    },
    lng: 'zh_tw',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
