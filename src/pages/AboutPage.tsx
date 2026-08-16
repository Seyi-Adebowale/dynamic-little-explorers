import { Link } from 'react-router-dom'
import { Seo } from '@/components/layout/Seo'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Accordion } from '@/components/ui/Accordion'
import { FinalCta } from '@/components/sections/FinalCta'
import { siteInfo } from '@/data/site'
import bannerImage from '@/assets/facilities/outdoor-play.jpg'

const faqs = [
  {
    question: 'What is Montessori education?',
    answer:
      'A child-centred approach where children learn through hands-on materials and self-paced exploration, guided (not instructed) by trained teachers — building independence, curiosity and a lifelong love of learning.',
  },
  {
    question: 'What age groups do you serve?',
    answer:
      'Crèche (3–18 months), Toddlers (14 months–3 years), and Preschool (3–5 years), each in an environment matched to that stage of development.',
  },
  {
    question: 'Where are you located?',
    answer: `${siteInfo.address}. If you're around Omole Phase 2, Ojodu or the CMD Road axis, we're just a short drive away.`,
  },
  {
    question: 'What makes Dynamic Little Explorers different?',
    answer:
      'A genuinely Montessori-trained team, mixed-age classrooms, and a warm, community-first approach — not just the Montessori name on the door.',
  },
  {
    question: 'Are your teachers Montessori-trained?',
    answer:
      'Yes — our educators are trained to observe and guide each child individually rather than teach the whole class at once.',
  },
  {
    question: 'How do you handle discipline?',
    answer:
      'Through self-discipline and natural consequences rather than punishment — we help children understand the impact of their choices and resolve conflicts respectfully.',
  },
  {
    question: 'Will my child be ready for a traditional primary school afterward?',
    answer:
      'Yes — Montessori builds strong foundations in literacy, numeracy, independence and focus that transfer well into any school environment.',
  },
  {
    question: 'How are parents involved?',
    answer:
      'We see parents as partners — with regular updates and open communication, plus guidance on extending Montessori learning at home.',
  },
  {
    question: 'What does a typical day look like?',
    answer:
      'A balance of focused, self-directed work with Montessori materials, practical life activities, outdoor play, and social time — structured but never rigid.',
  },
  {
    question: 'How do I enrol my child?',
    answer: (
      <>
        Start on our{' '}
        <Link to="/enrol" className="font-semibold text-berry-600 hover:underline">
          Enrolment page
        </Link>{' '}
        or reach out directly — our admissions team will guide you through the next steps. You’re
        also welcome to visit the school in person if you’d rather make your enquiries face to
        face.
      </>
    ),
  },
]

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Our Montessori School"
        description="Our mission, vision and answers to the questions parents ask most about Montessori education at Dynamic Little Explorers in Lagos."
        path="/about"
      />
      <PageHero
        eyebrow="About Us"
        title="Why we do what we do"
        description="The Montessori philosophy, people and purpose behind Dynamic Little Explorers in Lagos."
        image={bannerImage}
        imageAlt="Children playing safely outdoors at Dynamic Little Explorers Montessori School"
      />

      <Section tone="cream" tightTop>
        <Container>
          <SectionHeading eyebrow="Our Philosophy" title="Mission &amp; Vision" tone="forest" />

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border-t-2 border-berry-400 bg-cream-50 p-8 shadow-soft">
                <h3 className="font-display text-lg font-semibold text-ink-900">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{siteInfo.mission}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border-t-2 border-forest-400 bg-cream-50 p-8 shadow-soft">
                <h3 className="font-display text-lg font-semibold text-ink-900">Our Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{siteInfo.vision}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently asked questions"
            description="A few things parents often ask us before enrolling."
            tone="berry"
          />

          <Reveal className="mt-14">
            <Accordion items={faqs} />
          </Reveal>
        </Container>
      </Section>

      <FinalCta />
    </>
  )
}
