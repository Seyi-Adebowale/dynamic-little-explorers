import { useEffect, useRef, useState } from 'react'
import { Seo } from '@/components/layout/Seo'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import { Pagination } from '@/components/ui/Pagination'
import { urlFor } from '@/lib/sanity'
import { fetchGalleryImagesPage } from '@/lib/queries'
import type { SanityGalleryImage } from '@/lib/queries'
import bannerImage from '@/assets/moments/indoor-play.jpg'

const cornerClasses = [
  'rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-lg rounded-bl-lg',
  'rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-lg rounded-br-lg',
]

const PAGE_SIZE = 28

export function GalleryPage() {
  const [images, setImages] = useState<SanityGalleryImage[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const topRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    setLoading(true)
    const start = (page - 1) * PAGE_SIZE
    fetchGalleryImagesPage(start, start + PAGE_SIZE)
      .then(({ items, total: count }) => {
        setImages(items)
        setTotal(count)
      })
      .catch(() => {
        setImages([])
        setTotal(0)
      })
      .finally(() => setLoading(false))

    if (isFirstRender.current) {
      isFirstRender.current = false
    } else {
      topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [page])

  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const lightboxImages = images.map((image) => ({
    src: urlFor(image.image).width(1600).url(),
    alt: image.alt,
  }))

  return (
    <>
      <Seo
        title="Gallery"
        description="A glimpse into the everyday joy, wonder and connection our little explorers share at Dynamic Little Explorers Montessori School."
        path="/gallery"
      />
      <PageHero
        eyebrow="Moments Captured"
        title="Little moments, big joy"
        description="A glimpse into the everyday joy, wonder and connection our little explorers share."
        image={bannerImage}
        imageAlt="Children playing together at Dynamic Little Explorers Montessori School"
      />

      <Section tone="white">
        <Container>
          <div ref={topRef} className="scroll-mt-28" />
          {!loading && images.length === 0 && (
            <p className="text-center text-ink-600">
              New photos are on the way — check back soon.
            </p>
          )}

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {images.map((image, i) => (
              <Reveal
                key={image._id}
                delay={(i % 28) * 0.04}
                className={`overflow-hidden ${cornerClasses[i % cornerClasses.length]}`}
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`View larger image: ${image.alt}`}
                  className="block h-full w-full cursor-zoom-in"
                >
                  <img
                    src={urlFor(image.image).width(600).height(600).url()}
                    alt={image.alt}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </button>
              </Reveal>
            ))}
          </div>

          <Pagination page={page} pageCount={pageCount} onChange={setPage} />
        </Container>

        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      </Section>
    </>
  )
}
