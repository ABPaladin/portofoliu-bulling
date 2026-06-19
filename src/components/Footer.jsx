import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Mail, Heart } from 'lucide-react'
import { navLinks } from '../data/navigation'
import { CONTACT_EMAIL, LICENSE_URL } from '../data/resources'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 bg-brand-900 text-brand-50">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-600 text-lg font-bold text-white">
              BV
            </span>
            <div className="leading-tight">
              <p className="font-display text-lg font-bold">{t('site.name')}</p>
              <p className="text-sm text-brand-200">{t('site.role')}</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200">
            {t('footer.blurb')}
          </p>
        </div>

        <nav aria-label={t('footer.quickLinks')}>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-300">
            {t('footer.quickLinks')}
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-brand-100 transition hover:text-white hover:underline"
                >
                  {t(link.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-300">
            {t('footer.contact')}
          </h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-800 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-700"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-brand-300 sm:flex-row sm:text-left">
          <p>
            {t('footer.license', { year })} ·{' '}
            <a
              href={LICENSE_URL}
              target="_blank"
              rel="noreferrer"
              className="underline transition hover:text-white"
            >
              {t('footer.licensedUnder')}
            </a>
          </p>
          <p className="inline-flex items-center gap-1.5">
            {t('footer.builtWith')}
            <Heart className="h-3.5 w-3.5 fill-current text-brand-400" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  )
}
