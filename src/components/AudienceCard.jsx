import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Home-page entry card for each audience (student / parent / teacher),
// reconstructed from the original "Sunt ELEV / PĂRINTE / PROFESOR" tiles.
export default function AudienceCard({ to, image, imageAlt, tag, desc, cta, accent }) {
  return (
    <Link
      to={to}
      className="group card flex flex-col overflow-hidden transition hover:-translate-y-1.5 hover:shadow-soft focus-visible:ring-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-soft ${accent}`}
        >
          {tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex-1 leading-relaxed text-slate-600">{desc}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand-700 transition group-hover:gap-2.5">
          {cta}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
