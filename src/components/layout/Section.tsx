import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
  tone?: 'cream' | 'white' | 'ink'
}

const toneClasses: Record<NonNullable<SectionProps['tone']>, string> = {
  cream: 'bg-cream-100',
  white: 'bg-cream-50',
  ink: 'bg-ink-900 text-cream-100',
}

export function Section({ children, id, className = '', tone = 'white' }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${toneClasses[tone]} ${className}`}>
      {children}
    </section>
  )
}
