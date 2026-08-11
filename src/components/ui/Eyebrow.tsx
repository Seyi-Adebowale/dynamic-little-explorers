interface EyebrowProps {
  children: string
  tone?: 'berry' | 'forest' | 'amber' | 'amberLight' | 'navy'
  className?: string
}

const toneClasses = {
  berry: 'text-berry-600',
  forest: 'text-forest-600',
  amber: 'text-amber-600',
  amberLight: 'text-amber-300',
  navy: 'text-navy-600',
}

export function Eyebrow({ children, tone = 'berry', className = '' }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] ${toneClasses[tone]} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  )
}
