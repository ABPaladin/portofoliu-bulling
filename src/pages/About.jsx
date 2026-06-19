import { useTranslation } from 'react-i18next'
import PageHero from '../components/PageHero.jsx'
import MissionPillars from '../components/MissionPillars.jsx'
import QuoteBlock from '../components/QuoteBlock.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { img } from '../data/assets'

export default function About() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        eyebrow={t('about.title')}
        title={t('about.subtitle')}
        subtitle={t('about.intro')}
        image={img.aboutPortrait}
        imageAlt={t('about.portraitAlt')}
      />

      <section className="container-page py-16 sm:py-20">
        <div className="prose-content mx-auto max-w-3xl text-lg">
          <p>{t('about.body')}</p>
        </div> 
      </section>

      <section className="container-page pb-4">
        <SectionHeading
          eyebrow={t('about.title')}
          title={t('about.whyTitle')}
          subtitle={t('about.whyIntro')}
          className="mb-12"
        />
        <MissionPillars />
      </section>

      <section className="container-page py-16">
        <QuoteBlock caption={t('about.quoteCaption')}>{t('about.quote')}</QuoteBlock>
      </section>
    </>
  )
}
