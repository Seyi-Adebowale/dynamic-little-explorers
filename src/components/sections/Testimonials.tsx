import { Quote } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { testimonials } from '@/data/site'

const tones = ['berry', 'forest', 'amber', 'navy'] as const

const toneClasses: Record<(typeof tones)[number], string> = {
  berry: 'border-berry-400 text-berry-300',
  forest: 'border-forest-400 text-forest-300',
  amber: 'border-amber-400 text-amber-300',
  navy: 'border-navy-400 text-navy-300',
}

export function Testimonials() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeading eyebrow="People's Views" title="What our families say" tone="forest" />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12">
          {testimonials.map((t, i) => {
            const tone = toneClasses[tones[i % tones.length]]
            return (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className={`h-full border-t-2 pt-6 ${tone}`}>
                  <Quote size={28} fill="currentColor" strokeWidth={0} />
                  <p className="mt-4 text-balance font-display text-lg leading-snug text-ink-900 sm:text-xl">
                    “{t.quote}”
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold text-ink-900">{t.name}</p>
                    <p className="text-sm text-ink-500">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
