import { Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SocialIcon } from '@/components/ui/SocialIcon'
import { programs, siteInfo } from '@/data/site'
import logo from '@/assets/logo-mark.png'

export function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-200">
      <Container className="grid gap-12 py-16 sm:py-20 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Dynamic Little Explorers Montessori School"
              className="h-16 w-16 object-contain"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold text-cream-50">
                Dynamic Little <span className="text-berry-400">Explorers</span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                Montessori School
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300">
            {siteInfo.footerTagline}
          </p>
          <div className="mt-6 flex gap-3">
            {(['facebook', 'instagram', 'twitter'] as const).map((platform) => (
              <a
                key={platform}
                href="#"
                aria-label={`Visit us on ${platform}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 text-ink-300 transition-colors hover:border-berry-400 hover:text-berry-300"
              >
                <SocialIcon platform={platform} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-cream-50">
            Our Programs
          </h3>
          <ul className="mt-5 space-y-3">
            {programs.map((program) => (
              <li key={program.id}>
                <a
                  href="#programs"
                  className="text-sm text-ink-300 transition-colors hover:text-berry-300"
                >
                  {program.name}
                  <span className="text-ink-500"> · {program.ageRange}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-cream-50">
            Get in Touch
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-300">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-berry-400" />
              <span>{siteInfo.address}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0 text-berry-400" />
              <span className="flex flex-col gap-1">
                <a href={`tel:${siteInfo.phone}`} className="hover:text-berry-300">
                  {siteInfo.phone}
                </a>
                <a href={`tel:${siteInfo.phoneAlt}`} className="hover:text-berry-300">
                  {siteInfo.phoneAlt}
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-berry-400" />
              <a href={`mailto:${siteInfo.email}`} className="break-all hover:text-berry-300">
                {siteInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-ink-800">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Dynamic Little Explorers School. All rights reserved.</p>
          <p>
            A{' '}
            <a
              href="https://technovada.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink-300 hover:text-berry-300"
            >
              Technovada
            </a>{' '}
            Creation
          </p>
        </Container>
      </div>
    </footer>
  )
}
