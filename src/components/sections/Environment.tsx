import { useLayoutEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { facilities, montessoriAreas } from '@/data/site'

const images = [...facilities, ...montessoriAreas]
const CLONE_COUNT = 3
const AUTOPLAY_DURATION = 4500
const SCROLL_IDLE_DELAY = 120

// Loop illusion: pad the real track with clones of the trailing/leading
// cards, so scrolling past either end lands on a visual duplicate — then,
// once the scroll has genuinely come to rest, silently (no transition)
// snap back to the equivalent real card.
const extended = [
  ...images.slice(-CLONE_COUNT).map((img, i) => ({ ...img, _key: `head-${i}` })),
  ...images.map((img) => ({ ...img, _key: img.id })),
  ...images.slice(0, CLONE_COUNT).map((img, i) => ({ ...img, _key: `tail-${i}` })),
]

export function Environment() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [virtualIndex, setVirtualIndex] = useState(CLONE_COUNT)
  const [isHovering, setIsHovering] = useState(false)
  const virtualIndexRef = useRef(CLONE_COUNT)

  const scrollToVirtual = (index: number, smooth: boolean) => {
    const track = trackRef.current
    const card = track?.children[index] as HTMLElement | undefined
    if (!track || !card) return
    // Scroll only the track itself — never card.scrollIntoView(), which also
    // walks up to the document and nudges the page's own scroll position.
    track.scrollTo({ left: card.offsetLeft, behavior: smooth ? 'smooth' : 'instant' })
  }

  const realIndexOf = (virtual: number) =>
    ((virtual - CLONE_COUNT) % images.length + images.length) % images.length

  const setVirtual = (index: number) => {
    virtualIndexRef.current = index
    setVirtualIndex(index)
  }

  const goTo = (index: number) => {
    setVirtual(index)
    scrollToVirtual(index, true)
  }

  // Jump (no animation) to the first real card, past the cloned lead-in
  // cards used for backward looping — runs before paint so there's no flash.
  useLayoutEffect(() => {
    scrollToVirtual(CLONE_COUNT, false)
  }, [])

  // Detect when the track has genuinely stopped scrolling (regardless of
  // whether that was a drag, a click, or autoplay), then — if it settled on
  // a cloned card — silently snap to the equivalent real card.
  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track) return
    let idleTimer: ReturnType<typeof setTimeout>

    const onScroll = () => {
      clearTimeout(idleTimer)
      idleTimer = setTimeout(() => {
        const children = Array.from(track.children) as HTMLElement[]
        let closest = 0
        let minDist = Infinity
        children.forEach((child, i) => {
          const dist = Math.abs(child.offsetLeft - track.scrollLeft)
          if (dist < minDist) {
            minDist = dist
            closest = i
          }
        })

        if (closest < CLONE_COUNT || closest >= CLONE_COUNT + images.length) {
          const settled = CLONE_COUNT + realIndexOf(closest)
          setVirtual(settled)
          scrollToVirtual(settled, false)
        } else {
          setVirtual(closest)
        }
      }, SCROLL_IDLE_DELAY)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      clearTimeout(idleTimer)
    }
  }, [])

  useLayoutEffect(() => {
    if (isHovering) return
    const timer = setInterval(() => {
      goTo(virtualIndexRef.current + 1)
    }, AUTOPLAY_DURATION)
    return () => clearInterval(timer)
  }, [isHovering])

  return (
    <Section tone="white">
      <Container>
        <SectionHeading
          eyebrow="Our Environment"
          title="Built for Little Explorers"
          description="From purposeful classrooms to hands-on Montessori materials — a closer look at the spaces and tools that shape everyday discovery."
          tone="forest"
        />

        <Reveal className="mt-16">
          <div
            className="relative px-0 sm:px-14"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div
              ref={trackRef}
              className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            >
              {extended.map((item) => (
                <div
                  key={item._key}
                  className="w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[46%] lg:w-[31%]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => {
                goTo(virtualIndex - 1)
                e.currentTarget.blur()
              }}
              className="absolute left-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50 text-ink-800 shadow-lifted transition-colors hover:bg-cream-100 sm:flex"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={(e) => {
                goTo(virtualIndex + 1)
                e.currentTarget.blur()
              }}
              className="absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50 text-ink-800 shadow-lifted transition-colors hover:bg-cream-100 sm:flex"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2.5">
            {images.map((item, i) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Show image ${i + 1}`}
                onClick={(e) => {
                  goTo(CLONE_COUNT + i)
                  e.currentTarget.blur()
                }}
                className="group flex items-center py-2"
              >
                <span
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === realIndexOf(virtualIndex)
                      ? 'w-8 bg-forest-500'
                      : 'w-4 bg-ink-200 group-hover:bg-ink-300'
                  }`}
                />
              </button>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
