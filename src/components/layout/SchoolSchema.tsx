import { Helmet } from 'react-helmet-async'
import { siteInfo } from '@/data/site'

const SITE_URL = 'https://dynamiclittleexplorersmontessorischool.com'

export function SchoolSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'School',
    name: siteInfo.name,
    alternateName: siteInfo.shortName,
    description:
      'A Montessori crèche, toddler and preschool serving children from 3 months to 5 years in Omole Phase 2, Lagos.',
    url: SITE_URL,
    telephone: `+234${siteInfo.phone.slice(1)}`,
    email: siteInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteInfo.address.replace(/, Lagos$/, ''),
      addressLocality: 'Lagos',
      addressCountry: 'NG',
    },
    areaServed: ['Omole Phase 2', 'Ojodu', 'CMD Road', 'Lagos'],
    sameAs: [siteInfo.instagramLink],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '06:30',
        closes: '19:00',
        description: 'Crèche',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '14:30',
        description: 'Toddlers & Preschool',
      },
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
