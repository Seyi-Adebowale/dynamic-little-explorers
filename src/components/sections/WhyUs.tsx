import {
  Blocks,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Sprout,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { valueProps } from '@/data/site'

const icons: Record<string, LucideIcon> = {
  HeartHandshake,
  Sprout,
  ShieldCheck,
  Blocks,
  GraduationCap,
  Users,
}

export function WhyUs() {
  return (
    <Section id="why-us" tone="cream">
      <Container className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-14 lg:gap-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] shadow-lifted">
            <img
              src="https://images.unsplash.com/photo-1571210862729-78a52d3779a2?w=1000&q=80&auto=format&fit=crop"
              alt="A teacher engaging warmly with a toddler at Dynamic Little Explorers"
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/9] md:aspect-[4/5]"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Why Families Choose Us"
            title="Everything we do is built around trust"
            description="Six commitments that shape every classroom, every routine, and every conversation with your family."
            align="left"
            tone="forest"
          />

          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {valueProps.map((value, i) => {
              const Icon = icons[value.icon]
              return (
                <Reveal key={value.title} delay={i * 0.06}>
                  <div className="flex gap-4 border-t border-ink-200 pt-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-600">
                      <Icon size={19} strokeWidth={2} />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-ink-900">
                        {value.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
