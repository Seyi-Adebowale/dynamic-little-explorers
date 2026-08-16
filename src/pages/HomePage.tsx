import { Seo } from '@/components/layout/Seo'
import { Hero } from '@/components/sections/Hero'
import { Programs } from '@/components/sections/Programs'
import { WhyUs } from '@/components/sections/WhyUs'
import { Environment } from '@/components/sections/Environment'
import { Blog } from '@/components/sections/Blog'
import { Testimonials } from '@/components/sections/Testimonials'
import { Gallery } from '@/components/sections/Gallery'
import { FinalCta } from '@/components/sections/FinalCta'

export function HomePage() {
  return (
    <>
      <Seo
        title="Montessori Crèche, Nursery & Preschool in Omole Phase 2, Lagos"
        description="Dynamic Little Explorers Montessori School nurtures children from 3 months to 5 years through play, creativity and discovery — a warm, Montessori-inspired crèche, daycare and preschool near Omole Phase 2 and CMD Road, Lagos."
        path="/"
      />
      <Hero />
      <Programs />
      <WhyUs />
      <Environment />
      <Blog />
      <Testimonials />
      <Gallery />
      <FinalCta />
    </>
  )
}
