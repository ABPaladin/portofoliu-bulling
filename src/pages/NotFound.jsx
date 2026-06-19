import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Home } from 'lucide-react'

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-display text-7xl font-extrabold text-brand-200">404</p>
      <h1 className="mt-4 text-3xl font-bold text-brand-900">{t('notFound.title')}</h1>
      <p className="mt-2 text-slate-600">{t('notFound.desc')}</p>
      <Link to="/" className="btn-primary mt-8">
        <Home className="h-4 w-4" aria-hidden="true" />
        {t('notFound.cta')}
      </Link>
    </section>
  )
}
