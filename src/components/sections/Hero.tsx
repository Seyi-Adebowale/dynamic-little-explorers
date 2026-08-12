import { useEffect, useState } from 'react'
import { ArrowRight, PlayCircle } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { heroSlides } from '@/data/site'

const SLIDE_DURATION = 6000

export function Hero() {
  const [active, setActive] = useState(0)
  const slide = heroSlides[active]

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % heroSlides.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative isolate min-h-[85vh] overflow-hidden bg-ink-900 lg:min-h-[92vh]">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            initial={{ opacity: 0, scaleX: slide.flip ? -1.06 : 1.06, scaleY: 1.06 }}
            animate={{ opacity: 1, scaleX: slide.flip ? -1 : 1, scaleY: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/55 to-berry-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/70 via-ink-900/10 to-transparent" />
      </div>

      <Container className="relative z-10 flex min-h-[85vh] flex-col justify-end pb-10 pt-20 md:pb-20 md:pt-32 lg:min-h-[92vh] lg:pb-24">
        <div className="max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Eyebrow tone="amberLight" size="responsive">{slide.eyebrow}</Eyebrow>
              <h1 className="mt-3 text-balance text-2xl leading-[1.15] text-cream-50 md:mt-5 md:text-5xl md:leading-[1.08] lg:text-[3.4rem]">
                {slide.title} <span className="text-amber-300">{slide.highlight}</span>
              </h1>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-cream-200 md:mt-6 md:text-lg">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-9">
            <Button as="a" href="#contact" size="lg" variant="primary" icon={<ArrowRight size={18} />}>
              Book a Visit
            </Button>
            <Button
              as="a"
              href="#programs"
              size="lg"
              variant="ghostLight"
              icon={<PlayCircle size={18} />}
            >
              Explore Programs
            </Button>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2.5 md:mt-16">
          {heroSlides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setActive(i)}
              className="group flex items-center py-2"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === active ? 'w-8 bg-amber-300' : 'w-4 bg-cream-50/40 group-hover:bg-cream-50/70'
                }`}
              />
            </button>
          ))}
        </div>
      </Container>
    </section>
  )
}
