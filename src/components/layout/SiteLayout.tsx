import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SchoolSchema } from '@/components/layout/SchoolSchema'

export function SiteLayout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a tick for the new page's content to render before scrolling.
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0 })
    // Re-assert after the new page has committed and painted, in case
    // anything above the fold shifts height right after navigation.
    const raf = requestAnimationFrame(() => window.scrollTo({ top: 0 }))
    return () => cancelAnimationFrame(raf)
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col">
      <SchoolSchema />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
