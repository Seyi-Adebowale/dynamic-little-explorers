import { Helmet } from 'react-helmet-async'
import { siteInfo } from '@/data/site'

const SITE_URL = 'https://dynamiclittleexplorersmontessorischool.com'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

interface SeoProps {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

export function Seo({ title, description, path, image, type = 'website', noindex }: SeoProps) {
  const fullTitle = `${title} | ${siteInfo.shortName}`
  const url = `${SITE_URL}${path}`
  const ogImage = image ?? DEFAULT_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteInfo.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
