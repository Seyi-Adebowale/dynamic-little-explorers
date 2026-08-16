import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { siteInfo } from '@/data/site'

export function FinalCta() {
  return (
    <section className="bg-berry-600 py-20 sm:py-24">
      <Container>
        <Reveal className="flex flex-col flex-wrap items-center justify-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left lg:gap-x-12 lg:gap-y-6">
          <div className="max-w-xl">
            <h2 className="text-balance text-3xl text-cream-50 sm:text-4xl">
              Ready to join the Dynamic Little Explorers family?
            </h2>
            <p className="mt-4 text-balance text-berry-100">
              Give your child the best start — schedule a tour and see our classrooms,
              meet our teachers, and feel the warmth for yourself.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-4 sm:flex-row">
            <Button as={Link} to="/enrol" size="lg" variant="inverse" icon={<ArrowRight size={18} />}>
              Enrol Now
            </Button>
            <Button
              as="a"
              href={`tel:${siteInfo.phone}`}
              size="lg"
              variant="ghostLight"
              icon={<Phone size={16} />}
            >
              {siteInfo.phone}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
