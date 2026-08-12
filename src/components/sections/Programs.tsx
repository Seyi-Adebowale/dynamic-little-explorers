import { ArrowRight, GraduationCap, Sprout, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { programs } from '@/data/site'

const icons: Record<string, LucideIcon> = { Sprout, Users, GraduationCap }

const toneClasses = {
  berry: {
    card: 'bg-berry-50 border-berry-100',
    badge: 'bg-berry-100 text-berry-700',
    accent: 'text-berry-600',
    border: 'hover:border-berry-300',
  },
  forest: {
    card: 'bg-forest-50 border-forest-100',
    badge: 'bg-forest-100 text-forest-700',
    accent: 'text-forest-600',
    border: 'hover:border-forest-300',
  },
  amber: {
    card: 'bg-amber-50 border-amber-100',
    badge: 'bg-amber-100 text-amber-700',
    accent: 'text-amber-600',
    border: 'hover:border-amber-300',
  },
}

export function Programs() {
  return (
    <Section id="programs" tone="white">
      <Container>
        <SectionHeading
          eyebrow="Our Programs"
          title="A stage-by-stage path, built for every age"
          description="Each programme is thoughtfully calibrated to where your child is right now — and where they're headed next."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {programs.map((program, i) => {
            const Icon = icons[program.icon]
            const tone = toneClasses[program.tone]

            return (
              <Reveal key={program.id} delay={i * 0.1}>
                <a
                  href="#"
                  className={`group flex h-full flex-col rounded-2xl border p-8 shadow-soft transition-colors duration-300 ${tone.card} ${tone.border}`}
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-full ${tone.badge}`}
                  >
                    <Icon size={24} strokeWidth={2} />
                  </span>

                  <span className={`mt-6 text-xs font-bold uppercase tracking-[0.16em] ${tone.accent}`}>
                    {program.ageRange}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink-900">
                    {program.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium italic text-ink-500">
                    {program.communityName}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
                    {program.description}
                  </p>
                  <span
                    className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${tone.accent}`}
                  >
                    Learn more
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button as="a" href="#" variant="ghost" icon={<ArrowRight size={16} />}>
            View All Programs
          </Button>
        </div>
      </Container>
    </Section>
  )
}
