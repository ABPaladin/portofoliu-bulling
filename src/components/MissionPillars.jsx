import { useTranslation } from 'react-i18next'
import { ShieldCheck, HeartHandshake, GraduationCap } from 'lucide-react'

const PILLARS = [
  { key: 'prevent', Icon: ShieldCheck, accent: 'bg-brand-100 text-brand-700' },
  { key: 'protect', Icon: HeartHandshake, accent: 'bg-sun-400/20 text-sun-600' },
  { key: 'educate', Icon: GraduationCap, accent: 'bg-brand-600/10 text-brand-700' },
]

export default function MissionPillars() {
  const { t } = useTranslation()
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {PILLARS.map(({ key, Icon, accent }, i) => (
        <article
          key={key}
          className="card flex flex-col gap-3 p-7 transition hover:-translate-y-1 hover:shadow-soft"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <span className={`grid h-12 w-12 place-items-center rounded-2xl ${accent}`}>
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className="text-xl font-bold text-brand-900">
            {t(`mission.${key}.title`)}
          </h3>
          <p className="leading-relaxed text-slate-600">
            {t(`mission.${key}.desc`)}
          </p>
        </article>
      ))}
    </div>
  )
}
