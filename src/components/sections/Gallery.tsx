import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Lightbox } from '@/components/ui/Lightbox'
import { galleryImages } from '@/data/site'

const cornerClasses = [
  'rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-lg rounded-bl-lg',
  'rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-lg rounded-br-lg',
]

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

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
          {galleryImages.map((image, i) => (
            <Reveal
              key={image.id}
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
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button as="a" href="#" variant="ghost" icon={<ArrowRight size={16} />}>
            View Full Gallery
          </Button>
        </div>
      </Container>

      <Lightbox
        images={galleryImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </Section>
  )
}
