import { useTranslation } from 'react-i18next'
import {
  Handshake,
  Target,
  Lightbulb,
  Users,
  CalendarClock,
  BarChart3,
  Sparkles,
  Languages,
  School,
  CheckCircle2,
  Heart,
  Camera,
  PlayCircle,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import DocumentCard from '../components/DocumentCard.jsx'
import { czechDocs } from '../data/resources'
import { czechPhotos, czechVideos } from '../data/assets'

// Czech-flag palette helpers (blue / red / white). Full literal strings so
// Tailwind's scanner keeps the classes.
const flagAccent = (i) =>
  i % 2 === 0 ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
const flagSolid = (i) => (i % 2 === 0 ? 'bg-blue-600' : 'bg-red-600')

export default function CzechCollaboration() {
  const { t } = useTranslation()
  const partners = t('czech.partners', { returnObjects: true })
  const team = t('czech.team', { returnObjects: true })
  const stages = t('czech.stages', { returnObjects: true })
  const quant = t('czech.quant', { returnObjects: true })
  const qual = t('czech.qual', { returnObjects: true })
  const vocab = t('czech.vocab', { returnObjects: true })

  return (
    <>
      {/* Hero — Czech flag palette: blue field fading to red */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-red-700 text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_50%,rgba(255,255,255,0.20),transparent_45%),radial-gradient(circle_at_88%_50%,rgba(255,255,255,0.16),transparent_45%)]"
          aria-hidden="true"
        />
        <div className="container-page relative py-16 sm:py-24">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
            <Handshake className="h-4 w-4" aria-hidden="true" />
            {t('czech.eyebrow')}
          </p>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            {t('czech.title')}
          </h1>
          <p className="mt-3 text-xl font-medium text-blue-100">{t('czech.subtitle')}</p>
          <p className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-2xl bg-white/15 px-5 py-3 text-lg font-semibold ring-1 ring-white/25 backdrop-blur">
            {t('czech.partnership')}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
            {t('czech.intro')}
          </p>
        </div>
      </section>

      {/* Partner schools */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow={t('czech.eyebrow')}
          title={t('czech.partnersTitle')}
          center
          tone="czech"
          className="mb-10"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {partners.map((p, i) => (
            <article
              key={i}
              className="card relative flex items-start gap-4 overflow-hidden p-7"
            >
              <span className={`absolute inset-y-0 left-0 w-1.5 ${flagSolid(i)}`} aria-hidden="true" />
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${flagAccent(i)}`}>
                <School className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-slate-900">{p.country}</p>
                <p className="mt-1 text-slate-600">{p.school}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Goal (blue) & argument (red) */}
      <section className="container-page grid gap-6 pb-4 lg:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-4xl bg-blue-50 p-8 ring-1 ring-blue-100">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-white">
            <Target className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="font-display text-2xl font-bold text-blue-900">{t('czech.goalTitle')}</h2>
          <p className="leading-relaxed text-slate-600">{t('czech.goal')}</p>
        </div>
        <div className="flex flex-col gap-4 rounded-4xl bg-red-50 p-8 ring-1 ring-red-100">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-red-600 text-white">
            <Lightbulb className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="font-display text-2xl font-bold text-red-900">{t('czech.argumentTitle')}</h2>
          <p className="leading-relaxed text-slate-600">{t('czech.argument')}</p>
        </div>
      </section>

      {/* Team */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow={<span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4" />{t('czech.teamTitle')}</span>}
          title={t('czech.teamTitle')}
          center
          tone="czech"
          className="mb-10"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((m, i) => (
            <article key={i} className="card p-7 text-center">
              <span className={`mx-auto grid h-14 w-14 place-items-center rounded-full font-display text-xl font-bold ${flagAccent(i)}`}>
                {m.name.charAt(0)}
              </span>
              <p className="mt-4 font-display text-lg font-bold text-slate-900">{m.name}</p>
              <p className="mt-1 text-sm text-slate-600">{m.role}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Activity stages */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow={<span className="inline-flex items-center gap-1.5"><CalendarClock className="h-4 w-4" />{t('czech.stagesTitle')}</span>}
            title={t('czech.stagesTitle')}
            center
            tone="czech"
            className="mb-12"
          />
          <ol className="space-y-6">
            {stages.map((s, i) => (
              <li key={i} className="card flex flex-col gap-3 p-7 sm:flex-row sm:gap-6">
                <div className="flex items-center gap-3 sm:w-44 sm:flex-col sm:items-start">
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-bold text-white ${flagSolid(i)}`}>
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-blue-700">{s.period}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{s.desc}</p>
                  <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium italic text-blue-700 ring-1 ring-blue-100">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    {s.motto}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Results */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow={<span className="inline-flex items-center gap-1.5"><BarChart3 className="h-4 w-4" />{t('czech.resultsTitle')}</span>}
          title={t('czech.resultsTitle')}
          center
          tone="czech"
          className="mb-12"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card border-t-4 border-blue-600 p-7">
            <h3 className="mb-4 font-display text-xl font-bold text-slate-900">
              {t('czech.quantTitle')}
            </h3>
            <ul className="space-y-3">
              {quant.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card border-t-4 border-red-600 p-7">
            <h3 className="mb-4 font-display text-xl font-bold text-slate-900">
              {t('czech.qualTitle')}
            </h3>
            <ul className="space-y-3">
              {qual.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <Heart className="mt-0.5 h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Visual documentation: videos + photo gallery */}
      <section className="bg-blue-50/40 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow={<span className="inline-flex items-center gap-1.5"><Camera className="h-4 w-4" />{t('czech.galleryTitle')}</span>}
            title={t('czech.galleryTitle')}
            subtitle={t('czech.gallerySubtitle')}
            center
            tone="czech"
            className="mb-12"
          />

          {czechVideos.length > 0 && (
            <>
              <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-slate-900">
                <PlayCircle className="h-5 w-5 text-blue-600" aria-hidden="true" />
                {t('czech.videosLabel')}
              </h3>
              <div className="mb-12 grid gap-6 md:grid-cols-3">
                {czechVideos.map((src, i) => (
                  <video
                    key={i}
                    src={src}
                    controls
                    preload="metadata"
                    playsInline
                    className="aspect-video w-full rounded-3xl bg-black object-contain shadow-card ring-1 ring-black/5"
                  />
                ))}
              </div>
            </>
          )}

          <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-slate-900">
            <Camera className="h-5 w-5 text-red-600" aria-hidden="true" />
            {t('czech.photosLabel')}
          </h3>
          <div className="gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3 xl:columns-4">
            {czechPhotos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${t('czech.photoAlt')} ${i + 1}`}
                loading="lazy"
                className="mb-4 w-full break-inside-avoid rounded-2xl shadow-card ring-1 ring-black/5"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bilingual vocabulary */}
      <section className="container-page py-16">
        <SectionHeading
          eyebrow={<span className="inline-flex items-center gap-1.5"><Languages className="h-4 w-4" />Mărțișor</span>}
          title={t('czech.vocabTitle')}
          center
          tone="czech"
          className="mb-10"
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {vocab.map((w, i) => (
            <div
              key={i}
              className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-red-50 p-5 text-center shadow-card ring-1 ring-slate-100"
            >
              <p className="font-display text-lg font-bold text-blue-700">{w.ro}</p>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">ro</p>
              <div className="my-1 text-slate-300">↓</div>
              <p className="font-display text-lg font-bold text-red-600">{w.cz}</p>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">cz</p>
              <p className="mt-1 text-xs text-slate-500">[{w.pron}]</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing message */}
      <section className="container-page py-16">
        <div className="rounded-4xl bg-gradient-to-br from-blue-800 via-blue-700 to-red-700 px-8 py-12 text-center text-white sm:px-12">
          <Heart className="mx-auto mb-5 h-10 w-10 fill-white/20" aria-hidden="true" />
          <p className="mx-auto max-w-3xl font-display text-2xl font-semibold leading-snug sm:text-3xl">
            {t('czech.closing')}
          </p>
          <p className="mt-6 text-lg font-medium text-blue-100">{t('czech.thanks')}</p>
        </div>
      </section>

      {/* Presentations */}
      <section className="container-page pb-8">
        <SectionHeading title={t('czech.docsTitle')} tone="czech" className="mb-10" />
        <div className="grid gap-6 md:grid-cols-2">
          {czechDocs.map((doc) => (
            <DocumentCard
              key={doc.key}
              doc={doc}
              tone="czech"
              titleKey={`teachers.docs.${doc.key}.title`}
              descKey={`teachers.docs.${doc.key}.desc`}
            />
          ))}
        </div>
      </section>
    </>
  )
}
