// `tone` switches the accent palette: 'brand' (green, default) or 'czech'
// (blue, used on the Moldova × Czech Republic collaboration page).
const TONES = {
  brand: { eyebrow: 'text-brand-600', title: 'text-brand-900' },
  czech: { eyebrow: 'text-blue-700', title: 'text-blue-900' },
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  tone = 'brand',
  className = '',
}) {
  const c = TONES[tone] ?? TONES.brand
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <p className={`mb-2 text-sm font-semibold uppercase tracking-wider ${c.eyebrow}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-bold sm:text-4xl ${c.title}`}>{title}</h2>
      {subtitle && <p className="mt-3 text-lg text-slate-600">{subtitle}</p>}
    </div>
  )
}
