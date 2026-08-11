import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { galleryImages } from '@/data/site'

const aspectClasses = [
  'aspect-[3/4]',
  'aspect-square',
  'aspect-[4/5]',
  'aspect-square',
  'aspect-[3/4]',
  'aspect-[4/5]',
]

export function Gallery() {
  return (
    <Section id="gallery" tone="cream">
      <Container>
        <SectionHeading
          eyebrow="Moments Captured"
          title="Life inside our classrooms"
          description="A glimpse into the everyday joy, wonder and connection that fills our halls."
          tone="amber"
        />

        <div className="mt-16 columns-2 gap-4 sm:columns-3">
          {galleryImages.map((image, i) => (
            <Reveal
              key={image.id}
              delay={i * 0.05}
              className="mb-4 overflow-hidden rounded-xl [break-inside:avoid]"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 ease-out hover:scale-105 ${aspectClasses[i % aspectClasses.length]}`}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button as={Link} to="/gallery" variant="ghost" icon={<ArrowRight size={16} />}>
            View Full Gallery
          </Button>
        </div>
      </Container>
    </Section>
  )
}
