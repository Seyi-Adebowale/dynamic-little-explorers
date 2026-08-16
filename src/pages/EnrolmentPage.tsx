import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  Baby,
  CheckCircle2,
  ClipboardList,
  Loader2,
  Mail,
  Phone,
  User,
} from 'lucide-react'
import { Seo } from '@/components/layout/Seo'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { SocialIcon } from '@/components/ui/SocialIcon'
import { siteInfo } from '@/data/site'
import bannerImage from '@/assets/facilities/classroom.jpg'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const initialForm = {
  parentName: '',
  email: '',
  phone: '',
  childName: '',
  childDob: '',
  program: '',
  startDate: '',
  notes: '',
  botcheck: '',
}

const WEB3FORMS_ACCESS_KEY = '363ea94f-4dcb-4839-bb70-894047d2cd8c'

const steps = [
  {
    title: 'Submit this form',
    description: 'Tell us about your family and your child — it only takes a couple of minutes.',
  },
  {
    title: 'We reach out',
    description: 'Our admissions team reviews your enrolment and gets in touch to talk it through.',
  },
  {
    title: 'Schedule a visit',
    description: 'Tour our classrooms, meet the teachers, and see if we’re the right fit together.',
  },
]

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: string }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-semibold text-ink-800">
      {children}
    </label>
  )
}

const inputClasses =
  'mt-1.5 w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-berry-400'

function SectionHeader({
  icon: Icon,
  title,
  tone,
}: {
  icon: typeof User
  title: string
  tone: 'berry' | 'forest'
}) {
  const toneClasses =
    tone === 'berry' ? 'bg-berry-100 text-berry-700' : 'bg-forest-100 text-forest-700'
  return (
    <div className="flex items-center gap-3">
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${toneClasses}`}>
        <Icon size={18} strokeWidth={2} />
      </span>
      <h2 className="font-display text-lg font-semibold text-ink-900">{title}</h2>
    </div>
  )
}

export function EnrolmentPage() {
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
          subject: 'New enrolment submission — Dynamic Little Explorers',
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
        title="Enrol Now"
        description="Begin your child's enrolment at Dynamic Little Explorers Montessori School — tell us about your family and we'll guide you through the next steps."
        path="/enrol"
      />
      <PageHero
        eyebrow="Admissions"
        title="Begin your child’s enrolment"
        description="Tell us a little about your family and your child, and our admissions team will reach out to guide you through the next steps."
        image={bannerImage}
        imageAlt="A bright, purposeful classroom at Dynamic Little Explorers Montessori School"
      />

      <Section tone="white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <Reveal>
              {status === 'success' ? (
                <div className="flex flex-col items-start rounded-2xl border border-forest-200 bg-forest-50 p-8">
                  <CheckCircle2 size={32} className="text-forest-600" />
                  <h2 className="mt-4 font-display text-2xl font-semibold text-ink-900">
                    Enrolment request received!
                  </h2>
                  <p className="mt-2 text-ink-600">
                    Thank you for taking this first step. Our admissions team will reach out
                    shortly to guide you through the rest of the process. If it's urgent, you can
                    also call us directly at{' '}
                    <a href={`tel:${siteInfo.phone}`} className="font-semibold text-berry-600">
                      {siteInfo.phone}
                    </a>
                    .
                  </p>
                  <Button variant="ghost" className="mt-6" onClick={() => setStatus('idle')}>
                    Submit another enrolment
                  </Button>
                </div>
              ) : (
                <form name="enrolment" onSubmit={handleSubmit} className="space-y-8">
                  <div className="rounded-2xl border border-ink-200 bg-cream-50 p-6 sm:p-8">
                    <SectionHeader icon={User} title="Parent / Guardian details" tone="berry" />
                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <FieldLabel htmlFor="parentName">Full name</FieldLabel>
                        <input
                          id="parentName"
                          name="parentName"
                          type="text"
                          required
                          value={form.parentName}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder="Amaka Johnson"
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="phone">Phone number</FieldLabel>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder="080..."
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <FieldLabel htmlFor="email">Email address</FieldLabel>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-ink-200 bg-cream-50 p-6 sm:p-8">
                    <SectionHeader icon={Baby} title="Child’s details" tone="forest" />
                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <FieldLabel htmlFor="childName">Child’s full name</FieldLabel>
                        <input
                          id="childName"
                          name="childName"
                          type="text"
                          required
                          value={form.childName}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder="Their name"
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="childDob">Child’s date of birth</FieldLabel>
                        <input
                          id="childDob"
                          name="childDob"
                          type="date"
                          required
                          value={form.childDob}
                          onChange={handleChange}
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <FieldLabel htmlFor="program">Programme of interest</FieldLabel>
                        <select
                          id="program"
                          name="program"
                          required
                          value={form.program}
                          onChange={handleChange}
                          className={inputClasses}
                        >
                          <option value="">Select a programme</option>
                          <option value="Crèche (3–18 months)">Crèche (3–18 months)</option>
                          <option value="Toddlers (14 months–3 years)">
                            Toddlers (14 months–3 years)
                          </option>
                          <option value="Preschool (3–5 years)">Preschool (3–5 years)</option>
                        </select>
                      </div>
                      <div>
                        <FieldLabel htmlFor="startDate">Preferred start date</FieldLabel>
                        <input
                          id="startDate"
                          name="startDate"
                          type="date"
                          value={form.startDate}
                          onChange={handleChange}
                          className={inputClasses}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-ink-200 bg-cream-50 p-6 sm:p-8">
                    <SectionHeader icon={ClipboardList} title="Anything else?" tone="berry" />
                    <div className="mt-6">
                      <FieldLabel htmlFor="notes">Additional notes (optional)</FieldLabel>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        value={form.notes}
                        onChange={handleChange}
                        className={`${inputClasses} resize-none`}
                        placeholder="Allergies, prior schooling, questions for our admissions team..."
                      />
                    </div>
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
                    icon={
                      status === 'submitting' ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : undefined
                    }
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Enrolment'}
                  </Button>
                </form>
              )}
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-ink-900 p-8 text-cream-100">
                <h2 className="font-display text-lg font-semibold text-cream-50">
                  How enrolment works
                </h2>
                <ol className="mt-6 space-y-6">
                  {steps.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400/90 font-display text-sm font-semibold text-ink-900">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-cream-50">{step.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-ink-300">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 space-y-3 border-t border-ink-700 pt-6 text-sm">
                  <p className="text-ink-300">Prefer to talk it through first?</p>
                  <a
                    href={siteInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-cream-50 hover:text-amber-300"
                  >
                    <SocialIcon platform="whatsapp" size={16} className="text-amber-400" />
                    {siteInfo.whatsapp} (WhatsApp)
                  </a>
                  <a
                    href={`tel:${siteInfo.phone}`}
                    className="flex items-center gap-2.5 text-cream-50 hover:text-amber-300"
                  >
                    <Phone size={16} className="text-amber-400" />
                    {siteInfo.phone} (Call)
                  </a>
                  <a
                    href={`mailto:${siteInfo.email}`}
                    className="flex items-center gap-2.5 break-all text-cream-50 hover:text-amber-300"
                  >
                    <Mail size={16} className="shrink-0 text-amber-400" />
                    {siteInfo.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  )
}
