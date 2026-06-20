import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, PlayCircle, Mail } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import AudienceCard from '../components/AudienceCard.jsx'
import MissionPillars from '../components/MissionPillars.jsx'
import QuoteBlock from '../components/QuoteBlock.jsx'
import { img } from '../data/assets'
import { presentation, CONTACT_EMAIL } from '../data/resources'

export default function Home() {
  const { t } = useTranslation()

  const audiences = [
    {
      to: '/students',
      image: img.homeStudent,
      tag: t('home.audiences.student.tag'),
      desc: t('home.audiences.student.desc'),
      cta: t('home.audiences.student.cta'),
      accent: 'bg-sun-500',
    },
    {
      to: '/parents',
      image: img.homeParent,
      tag: t('home.audiences.parent.tag'),
      desc: t('home.audiences.parent.desc'),
      cta: t('home.audiences.parent.cta'),
      accent: 'bg-brand-500',
    },
    {
      to: '/teachers',
      image: img.homeTeacher,
      tag: t('home.audiences.teacher.tag'),
      desc: t('home.audiences.teacher.desc'),
      cta: t('home.audiences.teacher.cta'),
      accent: 'bg-teal-500',
    },
  ]

  return (
    <>
      {/* Hero — full-bleed brand image fills the whole section */}
      <section className="relative isolate flex min-h-[78vh] items-center overflow-hidden text-white">
        <img
          src={img.logoBanner}
          alt={t('site.tagline')}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          loading="eager"
        />
        {/* Readability overlay so the headline stays legible over the image */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900/90 via-brand-900/65 to-brand-900/30"
          aria-hidden="true"
        />
        <div className="container-page relative py-20 sm:py-28">
          <div className="max-w-2xl animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
              🕊️ {t('home.heroTagline')}
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] drop-shadow-sm sm:text-5xl lg:text-6xl">
              {t('home.heroTitle')}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-50/95 drop-shadow-sm">
              {t('home.heroSubtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/project"
                className="btn bg-white text-brand-700 shadow-soft hover:-translate-y-0.5 hover:bg-brand-50"
              >
                {t('home.heroCtaPrimary')}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={presentation.present}
                target="_blank"
                rel="noreferrer"
                className="btn border-2 border-white/70 text-white hover:bg-white/10"
              >
                <PlayCircle className="h-5 w-5" aria-hidden="true" />
                {t('home.heroCtaSecondary')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation */}
      <section className="container-page py-16 sm:py-24">
        <SectionHeading
          eyebrow={t('site.projectName')}
          title={t('home.presentationTitle')}
          subtitle={t('home.presentationDesc')}
          center
          className="mb-10"
        />
        <div className="mx-auto max-w-4xl overflow-hidden rounded-4xl bg-slate-900 shadow-soft ring-1 ring-black/5">
          <div className="aspect-video">
            <iframe
              src={presentation.embed}
              title={t('home.presentationTitle')}
              className="h-full w-full"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-6 text-center">
          <a
            href={presentation.present}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <PlayCircle className="h-5 w-5" aria-hidden="true" />
            {t('common.viewPresentation')}
          </a>
        </div>
      </section>

      {/* Audiences */}
      <section className="bg-brand-50/60 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow={t('nav.audiences')}
            title={t('home.audienceTitle')}
            subtitle={t('home.audienceSubtitle')}
            center
            className="mb-12"
          />
          <div className="grid gap-7 md:grid-cols-3">
            {audiences.map((a) => (
              <AudienceCard key={a.to} {...a} imageAlt={a.tag} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="container-page py-16 sm:py-24">
        <SectionHeading
          eyebrow={t('home.missionTitle')}
          title={t('home.missionIntro')}
          className="mb-12"
        />
        <MissionPillars />
      </section>

      {/* Quote + contact */}
      <section className="container-page py-12">
        <div className="flex flex-col items-center justify-between gap-6 rounded-4xl bg-brand-900 px-8 py-10 text-center text-white sm:flex-row sm:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold">{t('common.writeToMe')}</h2>
            <p className="mt-1 text-brand-200">{CONTACT_EMAIL}</p>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="btn bg-white text-brand-700 hover:bg-brand-50"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {t('common.email')}
          </a>
        </div>
      </section>
    </>
  )
}
