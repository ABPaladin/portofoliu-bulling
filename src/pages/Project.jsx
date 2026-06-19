import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Target, Clock, Handshake, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import MissionPillars from '../components/MissionPillars.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { img } from '../data/assets'

export default function Project() {
  const { t } = useTranslation()
  const objectives = t('project.objectives', { returnObjects: true })
  const outcomes = t('project.outcomes', { returnObjects: true })

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

      {/* Real impact — link to the Moldova × Czech collaboration */}
      <section className="container-page pb-16">
        <div className="overflow-hidden rounded-4xl bg-gradient-to-br from-brand-700 to-brand-900 text-white">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
                <Handshake className="h-4 w-4" aria-hidden="true" />
                {t('czech.partnership')}
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold">{t('project.realTitle')}</h2>
              <p className="mt-3 leading-relaxed text-brand-50/90">{t('project.realText')}</p>
              <Link
                to="/collaboration"
                className="btn mt-6 bg-white text-brand-700 hover:-translate-y-0.5 hover:bg-brand-50"
              >
                {t('project.realCta')}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {outcomes.map((o, i) => (
                <div key={i} className="rounded-3xl bg-white/10 p-5 text-center backdrop-blur">
                  <p className="font-display text-3xl font-extrabold sm:text-4xl">{o.value}</p>
                  <p className="mt-1 text-sm text-brand-100">{o.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
