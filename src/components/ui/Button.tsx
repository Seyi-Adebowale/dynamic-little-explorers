import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { motion } from 'framer-motion'

type Variant = 'primary' | 'secondary' | 'ghost' | 'ghostLight' | 'inverse'
type Size = 'md' | 'lg'

interface ButtonOwnProps<T extends ElementType> {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  as?: T
  className?: string
}

type ButtonProps<T extends ElementType> = ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary: 'bg-berry-500 text-cream-50 hover:bg-berry-600 shadow-soft',
  secondary: 'bg-forest-600 text-cream-50 hover:bg-forest-700 shadow-soft',
  ghost: 'bg-transparent text-ink-800 border border-ink-200 hover:border-berry-400 hover:text-berry-600',
  ghostLight:
    'bg-transparent text-cream-50 border border-cream-50/40 hover:border-cream-50 hover:bg-cream-50/10',
  inverse: 'bg-cream-50 text-berry-700 hover:bg-cream-100 shadow-soft',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  // Mobile-first: matches the `md` size below 768px, then scales up to its
  // full size — keeps large CTAs from overpowering small screens.
  lg: 'px-5 py-2.5 text-sm md:px-7 md:py-3.5 md:text-base',
}

export function Button<T extends ElementType = 'button'>({
  variant = 'primary',
  size = 'md',
  icon,
  as,
  className = '',
  children,
  ...props
}: ButtonProps<T>) {
  const Comp = motion.create((as ?? 'button') as ElementType)

  return (
    <Comp
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon}
    </Comp>
  )
}
