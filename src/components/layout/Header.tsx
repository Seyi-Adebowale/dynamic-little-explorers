import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { navItems } from '@/data/site'
import logo from '@/assets/logo-mark.png'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/90 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Dynamic Little Explorers Montessori School"
            className="h-11 w-11 object-contain md:h-16 md:w-16"
          />
          <span className="flex flex-col leading-tight">
            <span
              className={`font-display text-sm font-semibold transition-colors duration-300 md:text-lg ${
                scrolled ? 'text-ink-900' : 'text-cream-50'
              }`}
            >
              Dynamic Little{' '}
              <span className={scrolled ? 'text-berry-600' : 'text-berry-300'}>Explorers</span>
            </span>
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 md:text-xs md:tracking-[0.14em] ${
                scrolled ? 'text-ink-500' : 'text-cream-100'
              }`}
            >
              Montessori School
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-2 text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? scrolled
                      ? 'text-berry-600'
                      : 'text-amber-300'
                    : scrolled
                      ? 'text-ink-700 hover:text-berry-600'
                      : 'text-cream-50 hover:text-amber-300'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="active-nav-dot"
                    className="absolute inset-x-1 -bottom-0.5 h-[3px] rounded-full bg-current"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Button as="a" href="#contact" variant="primary">
            Enroll Now
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 lg:hidden ${
            scrolled || open ? 'bg-ink-100 text-ink-800' : 'bg-cream-50/15 text-cream-50'
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>
      </header>

      {createPortal(
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[100] bg-ink-900/50 lg:hidden"
                onClick={() => setOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-y-0 right-0 z-[110] flex h-dvh w-4/5 max-w-xs flex-col bg-cream-50 shadow-lifted lg:hidden"
              >
                <div className="flex h-20 shrink-0 items-center justify-end px-5">
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-ink-800"
                  >
                    <X size={22} />
                  </button>
                </div>

                <nav className="flex flex-col gap-1 px-5">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href.slice(1)
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-2 rounded-lg px-2 py-3 text-base font-semibold hover:bg-cream-200 ${
                          isActive ? 'text-berry-600' : 'text-ink-800'
                        }`}
                      >
                        {isActive && <span className="h-1.5 w-1.5 rounded-full bg-berry-500" />}
                        {item.label}
                      </a>
                    )
                  })}
                  <Button
                    as="a"
                    href="#contact"
                    variant="primary"
                    className="mt-4 w-full"
                    onClick={() => setOpen(false)}
                  >
                    Enroll Now
                  </Button>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  )
}
