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
