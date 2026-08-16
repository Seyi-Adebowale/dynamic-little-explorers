import { useState } from 'react'
import type { FormEvent } from 'react'
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone } from 'lucide-react'
import { Seo } from '@/components/layout/Seo'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { SocialIcon } from '@/components/ui/SocialIcon'
import { siteInfo } from '@/data/site'
import bannerImage from '@/assets/facilities/reception.jpg'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const initialForm = { name: '', email: '', phone: '', program: '', message: '', botcheck: '' }

const WEB3FORMS_ACCESS_KEY = '7889d036-be83-4609-8e4b-58f7fdc710aa'

export function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (form.botcheck) return
    setStatus('submitting')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New contact form submission — Dynamic Little Explorers',
          from_name: 'Dynamic Little Explorers Website',
          ...form,
        }),
      })
      const result = await response.json()
      if (!result.success) throw new Error('Submission failed')
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Dynamic Little Explorers Montessori School, near Omole Phase 2 and CMD Road, Lagos — visit, call, WhatsApp or send us a message to book a tour."
        path="/contact"
      />
      <PageHero
        eyebrow="Get In Touch"
        title="We’d love to meet you"
        description="Have a question, or ready to schedule a tour? Reach out and a member of our team will get back to you shortly."
        image={bannerImage}
        imageAlt="The warm reception area at Dynamic Little Explorers Montessori School"
      />

      <Section tone="white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <Reveal>
              {status === 'success' ? (
                <div className="flex flex-col items-start rounded-2xl border border-forest-200 bg-forest-50 p-8">
                  <CheckCircle2 size={32} className="text-forest-600" />
                  <h2 className="mt-4 font-display text-2xl font-semibold text-ink-900">
                    Message sent!
                  </h2>
                  <p className="mt-2 text-ink-600">
                    Thank you for reaching out — we’ll get back to you as soon as possible.
                  </p>
                  <Button
                    variant="ghost"
                    className="mt-6"
                    onClick={() => setStatus('idle')}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form
                  name="contact"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm font-semibold text-ink-800">
                        Your name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="mt-1.5 w-full rounded-lg border border-ink-200 bg-cream-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-berry-400"
                        placeholder="Amaka Johnson"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-semibold text-ink-800">
                        Phone number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="mt-1.5 w-full rounded-lg border border-ink-200 bg-cream-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-berry-400"
                        placeholder="080..."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-semibold text-ink-800">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-lg border border-ink-200 bg-cream-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-berry-400"
                      placeholder="you@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="program" className="text-sm font-semibold text-ink-800">
                      Programme of interest
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={form.program}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-lg border border-ink-200 bg-cream-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-berry-400"
                    >
                      <option value="">Not sure yet</option>
                      <option value="Crèche (3–18 months)">Crèche (3–18 months)</option>
                      <option value="Toddlers (14 months–3 years)">
                        Toddlers (14 months–3 years)
                      </option>
                      <option value="Preschool (3–5 years)">Preschool (3–5 years)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-semibold text-ink-800">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="mt-1.5 w-full resize-none rounded-lg border border-ink-200 bg-cream-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-berry-400"
                      placeholder="Tell us a little about your child and what you'd like to know..."
                    />
                  </div>

                  <input
                    type="text"
                    name="botcheck"
                    value={form.botcheck}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  />

                  {status === 'error' && (
                    <p className="text-sm font-medium text-berry-600">
                      Something went wrong — please try again, or reach us directly by phone or
                      email.
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === 'submitting'}
                    icon={status === 'submitting' ? <Loader2 size={18} className="animate-spin" /> : undefined}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-ink-200 bg-cream-50 p-8">
                <h2 className="font-display text-xl font-semibold text-ink-900">
                  Visit or reach us
                </h2>
                <ul className="mt-6 space-y-5 text-sm text-ink-700">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-berry-500" />
                    <span>{siteInfo.address}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <SocialIcon platform="whatsapp" size={18} className="mt-0.5 shrink-0 text-berry-500" />
                    <a
                      href={siteInfo.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-berry-600"
                    >
                      {siteInfo.whatsapp} <span className="text-ink-400">(WhatsApp)</span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={18} className="mt-0.5 shrink-0 text-berry-500" />
                    <a href={`tel:${siteInfo.phone}`} className="hover:text-berry-600">
                      {siteInfo.phone} <span className="text-ink-400">(Call)</span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="mt-0.5 shrink-0 text-berry-500" />
                    <a
                      href={`mailto:${siteInfo.email}`}
                      className="break-all hover:text-berry-600"
                    >
                      {siteInfo.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={18} className="mt-0.5 shrink-0 text-berry-500" />
                    <span className="flex flex-col gap-1">
                      <span>Mon–Fri · {siteInfo.hours.creche} (Crèche)</span>
                      <span>Mon–Fri · {siteInfo.hours.general}</span>
                    </span>
                  </li>
                </ul>

                <div className="mt-6 flex gap-3">
                  <a
                    href={siteInfo.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit us on Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-berry-400 hover:text-berry-600"
                  >
                    <SocialIcon platform="instagram" />
                  </a>
                </div>

                <div className="mt-8 overflow-hidden rounded-xl border border-ink-200">
                  <iframe
                    title="Map to Dynamic Little Explorers Montessori School"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(siteInfo.address)}&output=embed`}
                    className="h-48 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  )
}
