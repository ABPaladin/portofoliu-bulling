import { useTranslation } from 'react-i18next'
import { Info } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import QuoteBlock from '../components/QuoteBlock.jsx'
import DocumentCard from '../components/DocumentCard.jsx'
import { img } from '../data/assets'
import { parentDocs } from '../data/resources'

export default function ForParents() {
  const { t } = useTranslation()

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
