import { Quote } from 'lucide-react'

// Highlighted pull-quote used across pages for the project's central message.
export default function QuoteBlock({ children, caption, variant = 'brand' }) {
  const variants = {
    brand: 'bg-brand-600 text-white',
    soft: 'bg-brand-50 text-brand-900 ring-1 ring-brand-100',
  }
  return (
    <figure
      className={`relative overflow-hidden rounded-4xl px-7 py-10 shadow-soft sm:px-12 sm:py-12 ${variants[variant]}`}
    >
      <Quote
        className="absolute -right-3 -top-3 h-24 w-24 opacity-10"
        aria-hidden="true"
      />
      <blockquote className="relative font-display text-2xl font-semibold leading-snug sm:text-3xl">
        “{children}”
      </blockquote>
      {caption && (
        <figcaption
          className={`relative mt-4 text-sm ${
            variant === 'brand' ? 'text-brand-100' : 'text-slate-600'
          }`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
