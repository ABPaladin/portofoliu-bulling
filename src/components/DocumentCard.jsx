import { useTranslation } from 'react-i18next'
import { FileText, FileType, Presentation, ExternalLink, Download } from 'lucide-react'
import { makeUrls } from '../data/resources'

// Visual treatment per document type (mirrors the original Drive file types).
const TYPE_STYLES = {
  pdf: { Icon: FileText, badge: 'bg-red-100 text-red-700', ring: 'ring-red-100' },
  docx: { Icon: FileType, badge: 'bg-blue-100 text-blue-700', ring: 'ring-blue-100' },
  pptx: { Icon: Presentation, badge: 'bg-amber-100 text-amber-700', ring: 'ring-amber-100' },
}

export default function DocumentCard({ doc, titleKey, descKey }) {
  const { t } = useTranslation()
  const { Icon, badge, ring } = TYPE_STYLES[doc.type] ?? TYPE_STYLES.pdf
  const { view, download } = makeUrls(doc.id)

  return (
    <article className={`card flex flex-col gap-4 p-6 ring-1 ${ring} transition hover:-translate-y-1 hover:shadow-soft`}>
      <div className="flex items-start gap-4">
        <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${badge}`}>
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${badge}`}>
            {t(`docType.${doc.type}`)}
          </span>
          <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-brand-900">
            {t(titleKey)}
          </h3>
        </div>
      </div>

      <p className="flex-1 text-sm leading-relaxed text-slate-600">{t(descKey)}</p>

      <div className="flex flex-wrap gap-2 pt-1">
        <a href={view} target="_blank" rel="noreferrer" className="btn-primary !px-5 !py-2.5">
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          {t('common.open')}
        </a>
        <a href={download} target="_blank" rel="noreferrer" className="btn-outline !px-5 !py-2.5">
          <Download className="h-4 w-4" aria-hidden="true" />
          {t('common.download')}
        </a>
      </div>
    </article>
  )
}
