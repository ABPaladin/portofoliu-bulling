import { useTranslation } from 'react-i18next'
import { Target, Clock } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import MissionPillars from '../components/MissionPillars.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { img } from '../data/assets'

export default function Project() {
  const { t } = useTranslation()
  const objectives = t('project.objectives', { returnObjects: true })

  return (
    <>
      <PageHero
        eyebrow={t('site.projectName')}
        title={t('project.subtitle')}
        subtitle={t('project.goal')}
        image={img.project}
        imageAlt={t('project.subtitle')}
      />

      {/* Why */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow={t('project.title')}
          title={t('project.whyTitle')}
          subtitle={t('project.whyIntro')}
          className="mb-12"
        />
        <MissionPillars />
      </section>

      {/* Goal callout */}
      <section className="container-page pb-4">
        <div className="flex flex-col gap-5 rounded-4xl bg-brand-50 p-8 ring-1 ring-brand-100 sm:flex-row sm:items-start sm:p-10">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white">
            <Target className="h-7 w-7" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-900">
              {t('project.goalTitle')}
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">{t('project.goal')}</p>
          </div>
        </div>
      </section>

      {/* SMART objectives */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow="SMART"
          title={t('project.objectivesTitle')}
          subtitle={t('project.objectivesNote')}
          center
          className="mb-12"
        />
        <ol className="grid gap-6 md:grid-cols-2">
          {objectives.map((obj, i) => (
            <li
              key={i}
              className="card flex flex-col gap-3 p-7 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-600 font-bold text-white">
                  {i + 1}
                </span>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                  {obj.tag}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-900">{obj.title}</h3>
              <p className="flex-1 leading-relaxed text-slate-600">{obj.objective}</p>
              <p className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {obj.meta}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
