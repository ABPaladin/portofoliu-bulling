import { useTranslation } from 'react-i18next'

// Text + dove mark logo, reconstructed from the original "BV" anti-bullying
// banner. Crisp at any size and fully translatable, unlike the source image.
export default function Logo({ className = '' }) {
  const { t } = useTranslation()
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-600 text-lg font-bold text-white shadow-soft">
        BV
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-lg font-bold text-brand-800">
          {t('site.name')}
        </span>
        <span className="text-[11px] font-medium uppercase tracking-wide text-brand-500">
          🕊️ {t('site.tagline')}
        </span>
      </span>
    </span>
  )
}
