import { Quote } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { testimonials } from '@/data/site'

export function Testimonials() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeading eyebrow="People's Views" title="What our families say" tone="forest" />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 sm:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className={`h-full ${
                  i === 0 ? 'sm:border-r sm:border-ink-200 sm:pr-8' : 'sm:pl-0'
                }`}
              >
                <Quote className="text-berry-300" size={30} fill="currentColor" strokeWidth={0} />
                <p className="mt-4 text-balance font-display text-xl leading-snug text-ink-900 sm:text-2xl">
                  “{t.quote}”
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-ink-900">{t.name}</p>
                  <p className="text-sm text-ink-500">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
