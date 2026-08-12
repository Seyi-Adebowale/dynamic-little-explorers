interface EyebrowProps {
  children: string
  tone?: 'berry' | 'forest' | 'amber' | 'amberLight' | 'navy'
  size?: 'default' | 'responsive'
  className?: string
}

const toneClasses = {
  berry: 'text-berry-600',
  forest: 'text-forest-600',
  amber: 'text-amber-600',
  amberLight: 'text-amber-300',
  navy: 'text-navy-600',
}

const sizeClasses = {
  default: 'text-xs',
  // Smaller on mobile, full size from md up — for use over hero-scale imagery.
  responsive: 'text-[10px] md:text-xs',
}

export function Eyebrow({ children, tone = 'berry', size = 'default', className = '' }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-bold uppercase tracking-[0.18em] ${sizeClasses[size]} ${toneClasses[tone]} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  )
}
