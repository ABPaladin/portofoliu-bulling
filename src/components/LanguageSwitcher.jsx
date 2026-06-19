import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { LANGUAGES } from '../i18n'

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const current =
    LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) ?? LANGUAGES[0]

  // Close on outside click or Escape
  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const changeLanguage = (code) => {
    i18n.changeLanguage(code) // persisted to localStorage by the detector
    setOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-brand-200 bg-white/80 px-3 py-2 text-sm font-medium text-brand-800 transition hover:bg-brand-50"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('nav.language')}
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span aria-hidden="true">{current.flag}</span>
        <span className="hidden sm:inline uppercase">{current.code}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t('nav.language')}
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-brand-100 bg-white py-1 shadow-soft"
        >
          {LANGUAGES.map((lang) => {
            const active = lang.code === current.code
            return (
              <li key={lang.code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition hover:bg-brand-50 ${
                    active ? 'font-semibold text-brand-700' : 'text-slate-700'
                  }`}
                >
                  <span aria-hidden="true">{lang.flag}</span>
                  <span className="flex-1">{lang.label}</span>
                  {active && <Check className="h-4 w-4 text-brand-600" aria-hidden="true" />}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
