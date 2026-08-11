import type { ReactNode } from 'react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: string
  tone?: 'berry' | 'forest' | 'amber' | 'navy'
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'berry',
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`mx-auto max-w-2xl ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 text-balance text-3xl sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-cream-50' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-balance text-base leading-relaxed sm:text-lg ${
            light ? 'text-cream-200' : 'text-ink-600'
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
