// Consistent page banner for inner pages. Optional image renders beside the
// text on large screens; otherwise a soft brand gradient is used.
export default function PageHero({ eyebrow, title, subtitle, image, imageAlt = '' }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100/60">
      <div className="container-page grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2">
        <div className="animate-fade-up">
          {eyebrow && (
            <p className="mb-3 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-extrabold leading-tight text-brand-900 sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              {subtitle}
            </p>
          )}
        </div>

        {image && (
          <div className="relative">
            <div className="overflow-hidden rounded-4xl shadow-soft ring-1 ring-black/5">
              <img
                src={image}
                alt={imageAlt}
                className="aspect-[5/5] h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-4xl bg-brand-200/50"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </section>
  )
}
