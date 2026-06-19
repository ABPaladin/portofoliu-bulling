import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CheckCircle2, XCircle, RotateCcw, Trophy, ClipboardCheck, Lightbulb } from 'lucide-react'

export default function Quiz() {
  const { t } = useTranslation()
  const questions = t('evaluation.quiz', { returnObjects: true })
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const total = questions.length
  const correctCount = questions.reduce(
    (n, q, i) => n + (answers[i] === q.answer ? 1 : 0),
    0,
  )
  const allAnswered = Object.keys(answers).length === total

  const select = (qi, oi) => {
    if (!submitted) setAnswers((a) => ({ ...a, [qi]: oi }))
  }

  const reset = () => {
    setAnswers({})
    setSubmitted(false)
  }

  const percent = Math.round((correctCount / total) * 100)
  const scoreMsg =
    percent === 100 ? t('evaluation.quizPerfect') : percent >= 60 ? t('evaluation.quizGood') : t('evaluation.quizKeep')

  // Per-option styling, depending on submit state
  const optionClass = (qi, oi) => {
    const q = questions[qi]
    const chosen = answers[qi] === oi
    if (!submitted) {
      return chosen
        ? 'border-brand-500 bg-brand-50 ring-1 ring-brand-200'
        : 'border-slate-200 hover:border-brand-300 hover:bg-brand-50/40'
    }
    if (oi === q.answer) return 'border-emerald-500 bg-emerald-50'
    if (chosen) return 'border-rose-400 bg-rose-50'
    return 'border-slate-200 opacity-70'
  }

  return (
    <div>
      {/* Result banner */}
      {submitted && (
        <div
          className="mb-8 flex flex-col items-center gap-3 rounded-4xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-8 text-center text-white"
          role="status"
        >
          <Trophy className="h-9 w-9" aria-hidden="true" />
          <p className="font-display text-3xl font-extrabold">
            {correctCount}/{total}
          </p>
          <p className="text-lg font-medium">
            {t('evaluation.quizScore', { correct: correctCount, total })}
          </p>
          <p className="text-brand-100">{scoreMsg}</p>
          <button type="button" onClick={reset} className="btn mt-2 bg-white text-brand-700 hover:bg-brand-50">
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            {t('evaluation.quizRetry')}
          </button>
        </div>
      )}

      <ol className="space-y-6">
        {questions.map((q, qi) => (
          <li key={qi}>
            <fieldset className="card p-6 sm:p-7">
              <legend className="mb-4 flex gap-3 font-display text-lg font-bold text-brand-900">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {qi + 1}
                </span>
                <span>{q.q}</span>
              </legend>

              <div className="space-y-2.5">
                {q.options.map((opt, oi) => {
                  const isCorrect = submitted && oi === q.answer
                  const isWrongChoice = submitted && answers[qi] === oi && oi !== q.answer
                  return (
                    <label
                      key={oi}
                      className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 transition ${optionClass(
                        qi,
                        oi,
                      )} ${submitted ? 'cursor-default' : ''}`}
                    >
                      <input
                        type="radio"
                        name={`q-${qi}`}
                        checked={answers[qi] === oi}
                        onChange={() => select(qi, oi)}
                        disabled={submitted}
                        className="h-4 w-4 accent-brand-600"
                      />
                      <span className="flex-1 text-slate-700">{opt}</span>
                      {isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />}
                      {isWrongChoice && <XCircle className="h-5 w-5 text-rose-500" aria-hidden="true" />}
                    </label>
                  )
                })}
              </div>

              {submitted && q.explanation && (
                <p className="mt-4 flex items-start gap-2 rounded-2xl bg-brand-50 px-4 py-3 text-sm text-brand-800">
                  <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    <strong>{t('evaluation.quizExplanation')}:</strong> {q.explanation}
                  </span>
                </p>
              )}
            </fieldset>
          </li>
        ))}
      </ol>

      {!submitted && (
        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            disabled={!allAnswered}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
            {t('evaluation.quizSubmit')}
          </button>
          {!allAnswered && (
            <p className="text-sm text-slate-500">{t('evaluation.quizAnswerAll')}</p>
          )}
        </div>
      )}
    </div>
  )
}
