import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'

interface PageHeroProps {
  eyebrow: string
  title: string
  description?: string
  image: string
  imageAlt: string
  imagePosition?: 'center' | 'top'
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition = 'center',
}: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[46vh] items-end overflow-hidden bg-ink-900 md:min-h-[52vh]">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          className={`h-full w-full object-cover ${
            imagePosition === 'top' ? 'object-top' : 'object-center'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/55 to-berry-900/30" />
      </div>

      <Container className="relative z-10 pb-8 pt-32 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <Eyebrow tone="amberLight">{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-balance text-3xl leading-[1.1] text-cream-50 md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-xl text-balance text-sm leading-relaxed text-cream-200 md:text-lg">
              {description}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
