import { useTranslation } from 'react-i18next'
import { Sparkles, PlayCircle } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import DocumentCard from '../components/DocumentCard.jsx'
import { img } from '../data/assets'
import { teacherDocs, projectDocs, presentation } from '../data/resources'

export default function ForTeachers() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        eyebrow={t('nav.teachers')}
        title={t('teachers.title')}
        subtitle={t('teachers.welcome')}
        image={img.teachersWelcome}
        imageAlt={t('teachers.welcome')}
      />

      <section className="container-page py-16 sm:py-20">
        <div className="flex flex-col items-center gap-4 rounded-4xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-10 text-center text-white">
          <Sparkles className="h-9 w-9" aria-hidden="true" />
          <p className="max-w-2xl font-display text-2xl font-bold leading-snug sm:text-3xl">
            {t('teachers.highlight')}
          </p>
          <p className="text-brand-100">{t('teachers.intro')}</p>
        </div>
      </section>

      {/* Project presentation (moved from the homepage) */}
      <section className="container-page pb-4">
        <SectionHeading
          eyebrow={<span className="inline-flex items-center gap-1.5"><PlayCircle className="h-4 w-4" />{t('teachers.presentationEyebrow')}</span>}
          title={t('teachers.presentationTitle')}
          subtitle={t('teachers.presentationDesc')}
          center
          className="mb-10"
        />
        <div className="mx-auto max-w-4xl overflow-hidden rounded-4xl bg-slate-900 shadow-soft ring-1 ring-black/5">
          <div className="aspect-video">
            <iframe
              src={presentation.embed}
              title={t('teachers.presentationTitle')}
              className="h-full w-full"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-6 text-center">
          <a href={presentation.present} target="_blank" rel="noreferrer" className="btn-outline">
            <PlayCircle className="h-5 w-5" aria-hidden="true" />
            {t('common.viewPresentation')}
          </a>
        </div>
      </section>

      <section className="container-page py-12">
        <SectionHeading
          eyebrow={t('nav.teachers')}
          title={t('teachers.resourcesTitle')}
          className="mb-10"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {[...projectDocs, ...teacherDocs].map((doc) => (
            <DocumentCard
              key={doc.key}
              doc={doc}
              titleKey={`teachers.docs.${doc.key}.title`}
              descKey={`teachers.docs.${doc.key}.desc`}
            />
          ))}
        </div>
      </section>
    </>
  )
}
