import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Send, Mail, MessageSquareHeart } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import { CONTACT_EMAIL } from '../data/resources'

export default function Evaluation() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', role: 'student', message: '' })

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  // No backend required: compose an email the visitor can review and send.
  const handleSubmit = (e) => {
    e.preventDefault()
    const roleLabel = t(`evaluation.roles.${form.role}`)
    const subject = `[${t('site.projectName')}] ${t('evaluation.subtitle')} — ${form.name || roleLabel}`
    const body = `${t('evaluation.role')} ${roleLabel}\n${t('evaluation.name')}: ${form.name}\n\n${form.message}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  const field =
    'w-full rounded-2xl border border-brand-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200'

  return (
    <>
      <PageHero
        eyebrow={t('nav.evaluation')}
        title={t('evaluation.title')}
        subtitle={t('evaluation.subtitle')}
      />

      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white">
              <MessageSquareHeart className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">{t('evaluation.intro')}</p>

            <div className="mt-8 rounded-3xl bg-brand-50 p-6 ring-1 ring-brand-100">
              <p className="text-sm font-semibold text-brand-800">
                {t('evaluation.directContact')}
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-2 inline-flex items-center gap-2 font-medium text-brand-700 hover:underline"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card space-y-5 p-7 sm:p-9 lg:col-span-3">
            <h2 className="font-display text-2xl font-bold text-brand-900">
              {t('evaluation.formTitle')}
            </h2>

            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                {t('evaluation.name')}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={update}
                placeholder={t('evaluation.namePlaceholder')}
                className={field}
              />
            </div>

            <div>
              <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-slate-700">
                {t('evaluation.role')}
              </label>
              <select id="role" name="role" value={form.role} onChange={update} className={field}>
                <option value="student">{t('evaluation.roles.student')}</option>
                <option value="parent">{t('evaluation.roles.parent')}</option>
                <option value="teacher">{t('evaluation.roles.teacher')}</option>
                <option value="other">{t('evaluation.roles.other')}</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                {t('evaluation.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={update}
                placeholder={t('evaluation.messagePlaceholder')}
                className={`${field} resize-y`}
              />
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto">
              <Send className="h-4 w-4" aria-hidden="true" />
              {t('evaluation.send')}
            </button>
            <p className="text-xs text-slate-500">{t('evaluation.note')}</p>
          </form>
        </div>
      </section>
    </>
  )
}
