import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { Seo } from '@/components/layout/Seo'

export function NotFoundPage() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center py-24">
      <Seo title="Page Not Found" description="This page could not be found." path="/404" noindex />
      <span className="font-display text-6xl font-semibold text-berry-500">404</span>
      <h1 className="mt-4 text-2xl">This page wandered off to explore</h1>
      <p className="mt-3 max-w-md text-ink-600">
        We couldn’t find the page you were looking for. Let’s get you back home.
      </p>
      <Button as={Link} to="/" className="mt-8" variant="primary">
        Back to Home
      </Button>
    </Container>
  )
}
