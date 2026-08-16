import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Lightbox } from '@/components/ui/Lightbox'
import { urlFor } from '@/lib/sanity'
import { fetchGalleryImagesPage } from '@/lib/queries'
import type { SanityGalleryImage } from '@/lib/queries'

const cornerClasses = [
  'rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-lg rounded-bl-lg',
  'rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-lg rounded-br-lg',
]

const PREVIEW_COUNT = 6

export function Gallery() {
  const [images, setImages] = useState<SanityGalleryImage[]>([])
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    fetchGalleryImagesPage(0, PREVIEW_COUNT)
      .then(({ items }) => setImages(items))
      .catch(() => setImages([]))
  }, [])

  if (images.length === 0) return null

  const lightboxImages = images.map((image) => ({
    src: urlFor(image.image).width(1600).url(),
    alt: image.alt,
  }))

  return (
    <Section id="gallery" tone="cream">
      <Container>
        <SectionHeading
          eyebrow="Moments Captured"
          title="Little moments, big joy"
          description="A glimpse into the everyday joy, wonder and connection our little explorers share."
          tone="amber"
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((image, i) => (
            <Reveal
              key={image._id}
              delay={i * 0.05}
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

        <div className="mt-10 flex justify-center">
          <Button as={Link} to="/gallery" variant="ghost" icon={<ArrowRight size={16} />}>
            View Full Gallery
          </Button>
        </div>
      </Container>

      <Lightbox
        images={lightboxImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </Section>
  )
}
