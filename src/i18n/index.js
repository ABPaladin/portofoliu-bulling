import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import ro from './locales/ro.json'
import cs from './locales/cs.json'

export const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ro', label: 'Română', flag: '🇷🇴' },
  { code: 'cs', label: 'Čeština', flag: '🇨🇿' },
]

i18n
  // Detects language from localStorage first, then the browser, and persists the choice.
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ro: { translation: ro },
      cs: { translation: cs },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'ro', 'cs'],
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'lang',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React already escapes
    },
  })

// Keep the <html lang> attribute in sync for accessibility / SEO
i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng)
})
document.documentElement.setAttribute('lang', i18n.resolvedLanguage || 'en')

export default i18n
