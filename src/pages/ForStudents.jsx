import { useTranslation } from 'react-i18next'
import { Video, Gamepad2, Sparkles, Heart, ExternalLink } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { img } from '../data/assets'
import { studentVideos, studentGames, ytEmbed } from '../data/media'

function VideoCard({ id, title, author }) {
  return (
    <figure className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-black/5">
      <div className="aspect-video">
        <iframe
          src={ytEmbed(id)}
          title={title}
          className="h-full w-full"
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <figcaption className="p-4">
        <p className="font-semibold leading-snug text-brand-900">{title}</p>
        <p className="text-sm text-slate-500">{author}</p>
      </figcaption>
    </figure>
  )
}

function GameCard({ index, title, desc, instructions, instructionsTitle, url, openLabel, note }) {
  return (
    <article className="card overflow-hidden">
      <div className="grid gap-6 p-7 sm:p-9 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-sun-400/20 px-3 py-1 text-sm font-semibold text-sun-600">
            <Gamepad2 className="h-4 w-4" aria-hidden="true" />
            {title}
          </span>
          <p className="leading-relaxed text-slate-600">{desc}</p>
          <a href={url} target="_blank" rel="noreferrer" className="btn-primary w-fit">
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            {openLabel}
          </a>
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-600">
            {instructionsTitle}
          </p>
          <ol className="space-y-2">
            {instructions.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="border-t border-brand-100 bg-slate-50">
        <iframe
          src={url}
          title={title}
          className="h-[460px] w-full sm:h-[520px]"
          loading="lazy"
          allow="fullscreen; autoplay"
        />
      </div>
      <p className="px-7 py-3 text-xs text-slate-500">{note}</p>
    </article>
  )
}

export default function ForStudents() {
  const { t } = useTranslation()

  const games = [
    {
      ...studentGames[0],
      title: t('students.game1Title'),
      desc: t('students.game1Desc'),
      instructions: t('students.game1Instructions', { returnObjects: true }),
    },
    {
      ...studentGames[1],
      title: t('students.game2Title'),
      desc: t('students.game2Desc'),
      instructions: t('students.game2Instructions', { returnObjects: true }),
    },
  ]

  const gallery = [
    { src: img.studentsHero, key: 'hero' },
    { src: img.studentsFingers, key: 'fingers' },
    { src: img.studentsGirls, key: 'girls' },
    { src: img.studentsFilming, key: 'filming' },
    { src: img.studentsStop, key: 'stop' },
    { src: img.studentsIllustration, key: 'illustration' },
  ]

  return (
    <>
      <PageHero
        eyebrow={t('nav.students')}
        title={t('students.heroTitle')}
        subtitle={t('students.heroSubtitle')}
        image={img.studentsHero}
        imageAlt={t('students.gallery.hero')}
      />

      {/* Letter */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading title={t('students.letterTitle')} center className="mb-10" />
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-4xl bg-gradient-to-br from-sun-400/10 via-white to-brand-50 p-8 shadow-card ring-1 ring-brand-100 sm:p-12">
          <Sparkles className="absolute right-6 top-6 h-8 w-8 text-sun-400/60" aria-hidden="true" />
          <p className="font-display text-2xl font-bold text-brand-800">
            {t('students.letter.greeting')}
          </p>
          <p className="mt-5 leading-relaxed text-slate-700">{t('students.letter.p1')}</p>
          <p className="mt-4 leading-relaxed text-slate-700">{t('students.letter.p2')}</p>
        </div>
      </section>

      {/* Videos */}
      <section className="bg-brand-50/60 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white">
              <Video className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="font-display text-3xl font-bold text-brand-900">
              {t('students.videosTitle')}
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">{t('students.videosDesc')}</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {studentVideos.map((v) => (
              <VideoCard key={v.id} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* Games (after the video grid) */}
      <section className="container-page space-y-8 py-16 sm:py-20">
        <SectionHeading
          eyebrow={<span className="inline-flex items-center gap-1.5"><Gamepad2 className="h-4 w-4" />{t('students.gamesTitle')}</span>}
          title={t('students.gamesTitle')}
          center
          className="mb-4"
        />
        {games.map((g, i) => (
          <GameCard
            key={g.key}
            index={i}
            title={g.title}
            desc={g.desc}
            instructions={g.instructions}
            instructionsTitle={t('students.instructionsTitle')}
            url={g.url}
            openLabel={t('students.openGame')}
            note={t('students.gameNote')}
          />
        ))}
      </section>

      {/* Gallery */}
      <section className="container-page py-8">
        <SectionHeading title={t('students.galleryTitle')} center className="mb-10" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {gallery.map(({ src, key }) => (
            <figure key={key} className="group relative overflow-hidden rounded-3xl shadow-card ring-1 ring-black/5">
              <img
                src={src}
                alt={t(`students.gallery.${key}`)}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* Quote + affirmations */}
      <section className="container-page py-16">
        <div className="rounded-4xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-12 text-center text-white sm:px-12">
          <Heart className="mx-auto mb-5 h-10 w-10 fill-white/20" aria-hidden="true" />
          <p className="mx-auto max-w-2xl font-display text-2xl font-semibold leading-snug sm:text-3xl">
            “{t('students.quote')}”
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-white/15 px-5 py-2 font-bold backdrop-blur">
              {t('students.affirm1')}
            </span>
            <span className="rounded-full bg-white/15 px-5 py-2 font-bold backdrop-blur">
              {t('students.affirm2')}
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
