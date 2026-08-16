import { Link } from 'react-router-dom'
import { ArrowRight, Check, GraduationCap, Sprout, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Seo } from '@/components/layout/Seo'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { FinalCta } from '@/components/sections/FinalCta'
import { programs } from '@/data/site'
import bannerImage from '@/assets/facilities/compound.jpg'

const icons: Record<string, LucideIcon> = { Sprout, Users, GraduationCap }

const toneClasses = {
  berry: { badge: 'bg-berry-100 text-berry-700', accent: 'text-berry-600', check: 'text-berry-500' },
  forest: {
    badge: 'bg-forest-100 text-forest-700',
    accent: 'text-forest-600',
    check: 'text-forest-500',
  },
  amber: { badge: 'bg-amber-100 text-amber-700', accent: 'text-amber-600', check: 'text-amber-500' },
}

export function ProgramsPage() {
  return (
    <>
      <Seo
        title="Our Montessori Programs"
        description="Explore our Crèche (3–18 months), Toddler (14 months–3 years) and Preschool (3–5 years) Montessori programmes at Dynamic Little Explorers in Lagos."
        path="/programs"
      />
      <PageHero
        eyebrow="Our Programs"
        title="A stage-by-stage path, built for every age"
        description="From 3 months to 5 years, every Montessori programme meets your child exactly where they are — right here in Lagos."
        image={bannerImage}
        imageAlt="The welcoming compound at Dynamic Little Explorers Montessori School"
      />

      {programs.map((program, i) => {
        const Icon = icons[program.icon]
        const tone = toneClasses[program.tone]
        const reversed = i % 2 === 1

        return (
          <Section key={program.id} tone={i % 2 === 0 ? 'white' : 'cream'} tightTop={i === 0}>
            <Container
              className={`grid gap-10 md:grid-cols-2 md:items-center md:gap-14 lg:gap-20 ${
                reversed ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Reveal>
                <div className="overflow-hidden rounded-[2rem] shadow-lifted">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="aspect-[4/3] w-full object-cover md:aspect-[4/5]"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${tone.badge}`}
                >
                  <Icon size={24} strokeWidth={2} />
                </span>

                <span className={`mt-6 block text-xs font-bold uppercase tracking-[0.16em] ${tone.accent}`}>
                  {program.ageRange}
                </span>
                <h2 className="mt-2 font-display text-3xl font-semibold text-ink-900">
                  {program.name}
                </h2>
                <p className="mt-1 text-sm font-medium italic text-ink-500">
                  {program.communityName}
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-600">
                  {program.longDescription}
                </p>

                <ul className="mt-6 space-y-3">
                  {program.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-sm text-ink-700">
                      <Check size={18} className={`mt-0.5 shrink-0 ${tone.check}`} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  as={Link}
                  to="/contact"
                  variant="primary"
                  className="mt-8"
                  icon={<ArrowRight size={16} />}
                >
                  Book a Visit
                </Button>
              </Reveal>
            </Container>
          </Section>
        )
      })}

      <FinalCta />
    </>
  )
}
