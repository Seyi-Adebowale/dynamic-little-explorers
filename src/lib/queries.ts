import type { TypedObject } from '@portabletext/types'
import { sanityClient } from '@/lib/sanity'

export interface SanityImage {
  asset: { _ref: string; _type: 'reference' }
  hotspot?: { x: number; y: number; height: number; width: number }
}

export interface SanityGalleryImage {
  _id: string
  alt: string
  image: SanityImage
}

export interface SanityPostSummary {
  _id: string
  title: string
  slug: string
  category?: string
  excerpt?: string
  mainImage: SanityImage
  publishedAt: string
}

export interface SanityPost extends SanityPostSummary {
  body: TypedObject[]
}

export interface Paginated<T> {
  items: T[]
  total: number
}

const galleryImageFields = `
  _id,
  alt,
  image
`

const postSummaryFields = `
  _id,
  title,
  "slug": slug.current,
  "category": category->title,
  excerpt,
  mainImage,
  publishedAt
`

const galleryImagesPageQuery = `{
  "items": *[_type == "galleryImage"] | order(coalesce(order, 999999) asc, _createdAt desc) [$start...$end]{${galleryImageFields}},
  "total": count(*[_type == "galleryImage"])
}`

const postsPageQuery = `{
  "items": *[_type == "post"] | order(publishedAt desc) [$start...$end]{${postSummaryFields}},
  "total": count(*[_type == "post"])
}`

const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{${postSummaryFields}, body}`

const otherPostsQuery = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0...$limit]{${postSummaryFields}}`

export function fetchGalleryImagesPage(start: number, end: number) {
  return sanityClient.fetch<Paginated<SanityGalleryImage>>(galleryImagesPageQuery, { start, end })
}

export function fetchPostsPage(start: number, end: number) {
  return sanityClient.fetch<Paginated<SanityPostSummary>>(postsPageQuery, { start, end })
}

export function fetchPostBySlug(slug: string) {
  return sanityClient.fetch<SanityPost | null>(postBySlugQuery, { slug })
}

export function fetchOtherPosts(slug: string, limit: number) {
  return sanityClient.fetch<SanityPostSummary[]>(otherPostsQuery, { slug, limit })
}
