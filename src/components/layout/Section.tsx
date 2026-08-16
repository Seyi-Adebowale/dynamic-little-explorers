import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
  tone?: 'cream' | 'white' | 'ink'
  /** Reduced top padding — for a section that follows straight after PageHero. */
  tightTop?: boolean
}

const toneClasses: Record<NonNullable<SectionProps['tone']>, string> = {
  cream: 'bg-cream-100',
  white: 'bg-cream-50',
  ink: 'bg-ink-900 text-cream-100',
}

export function Section({ children, id, className = '', tone = 'white', tightTop = false }: SectionProps) {
  const topPadding = tightTop ? 'pt-10 sm:pt-14' : 'pt-20 sm:pt-28'

  return (
    <section id={id} className={`${topPadding} pb-20 sm:pb-28 ${toneClasses[tone]} ${className}`}>
      {children}
    </section>
  )
}
