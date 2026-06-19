import { useTranslation } from 'react-i18next'
import { Info, PenLine } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import QuoteBlock from '../components/QuoteBlock.jsx'
import DocumentCard from '../components/DocumentCard.jsx'
import { img } from '../data/assets'
import { parentDocs } from '../data/resources'

export default function ForParents() {
  const { t } = useTranslation()
  const bullets = t('parents.letter.bullets', { returnObjects: true })

  return (
    <>
      <PageHero
        eyebrow={t('nav.parents')}
        title={t('parents.title')}
        subtitle={t('parents.welcome')}
        image={img.parentsTender}
        imageAlt={t('parents.title')}
      />

      <section className="container-page py-16 sm:py-20">
        <QuoteBlock variant="soft">{t('parents.quote')}</QuoteBlock>
      </section>

      {/* Letter of intent */}
      <section className="container-page pb-8">
        <SectionHeading
          eyebrow={<span className="inline-flex items-center gap-1.5"><PenLine className="h-4 w-4" />{t('parents.letterTitle')}</span>}
          title={t('parents.letterTitle')}
          className="mb-8"
        />
        <article className="prose-content mx-auto max-w-3xl rounded-4xl bg-gradient-to-br from-brand-50 via-white to-sun-400/5 p-8 shadow-card ring-1 ring-brand-100 sm:p-12">
          <p className="font-display text-2xl font-bold text-brand-800">
            {t('parents.letter.greeting')}
          </p>
          <p className="mt-4 font-semibold text-brand-700">{t('parents.letter.intro')}</p>
          <p>{t('parents.letter.p1')}</p>
          <p>{t('parents.letter.p2')}</p>
          <p className="font-semibold text-brand-800">{t('parents.letter.bulletsTitle')}</p>
          <ul className="my-4 space-y-2">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p>{t('parents.letter.p3')}</p>
          <p>{t('parents.letter.p4')}</p>
          <p className="mt-6 font-display text-lg font-semibold italic text-brand-700">
            {t('parents.letter.signature')}
          </p>
        </article>
      </section>

      <section className="container-page pb-8">
        <SectionHeading
          eyebrow={t('nav.parents')}
          title={t('parents.resourcesTitle')}
          className="mb-10"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {parentDocs.map((doc) => (
            <DocumentCard
              key={doc.key}
              doc={doc}
              titleKey={`parents.docs.${doc.key}.title`}
              descKey={`parents.docs.${doc.key}.desc`}
            />
          ))}
        </div>
      </section>

      <section className="container-page py-12">
        <div className="flex items-start gap-4 rounded-4xl bg-brand-50 p-7 ring-1 ring-brand-100 sm:p-9">
          <Info className="mt-1 h-6 w-6 shrink-0 text-brand-600" aria-hidden="true" />
          <p className="text-lg leading-relaxed text-brand-900">{t('parents.closing')}</p>
        </div>
      </section>
    </>
  )
}
