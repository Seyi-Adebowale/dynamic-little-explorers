import fs from 'node:fs'
import { getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2024-01-01' })

const DOWNLOADS_ROOT = 'C:/Users/seyib/Downloads/dynamic-photos'

async function uploadImage(fullPath: string, filename: string) {
  const buffer = fs.readFileSync(fullPath)
  const asset = await client.assets.upload('image', buffer, { filename })
  return {
    _type: 'image' as const,
    asset: { _type: 'reference' as const, _ref: asset._id },
  }
}

const categories = ['Community', 'Education']

const newGalleryImages = [
  {
    file: `${DOWNLOADS_ROOT}/moments/WhatsApp Image 2026-08-07 at 18.51.37 (2).jpeg`,
    alt: 'A boy helping push his friend along in a toy car at Dynamic Little Explorers',
    order: 7,
  },
  {
    file: `${DOWNLOADS_ROOT}/moments/WhatsApp Image 2026-08-07 at 18.51.58 (1).jpeg`,
    alt: 'A child colouring in during a creative activity',
    order: 8,
  },
  {
    file: `${DOWNLOADS_ROOT}/moments/WhatsApp Image 2026-08-07 at 18.51.59 (1).jpeg`,
    alt: 'A curious baby crawling across the floor',
    order: 9,
  },
  {
    file: `${DOWNLOADS_ROOT}/moments/WhatsApp Image 2026-08-07 at 18.51.59 (3).jpeg`,
    alt: 'A little girl clapping and smiling at her birthday celebration',
    order: 10,
  },
  {
    file: `${DOWNLOADS_ROOT}/moments/WhatsApp Image 2026-08-07 at 18.52.03 (1).jpeg`,
    alt: 'A calm baby sitting comfortably at Dynamic Little Explorers',
    order: 11,
  },
  {
    file: `${DOWNLOADS_ROOT}/moments/WhatsApp Image 2026-08-07 at 18.52.13 (3).jpeg`,
    alt: 'A baby sleeping peacefully during nap time',
    order: 12,
  },
  {
    file: `${DOWNLOADS_ROOT}/WhatsApp Image 2026-08-07 at 18.51.30.jpeg`,
    alt: 'The outdoor play area and welcome mural at Dynamic Little Explorers',
    order: 13,
  },
  {
    file: `${DOWNLOADS_ROOT}/WhatsApp Image 2026-08-07 at 18.52.01 (2).jpeg`,
    alt: 'A toddler riding a play horse in the outdoor play area',
    order: 14,
  },
  {
    file: `${DOWNLOADS_ROOT}/WhatsApp Image 2026-08-07 at 18.51.51 (2).jpeg`,
    alt: 'A child enjoying the roundabout in the outdoor play area',
    order: 15,
  },
  {
    file: `${DOWNLOADS_ROOT}/WhatsApp Image 2026-08-07 at 18.52.08 (1).jpeg`,
    alt: 'A child working with counting rods in the classroom',
    order: 16,
  },
]

async function run() {
  console.log('Seeding categories...')
  const categoryRefs: Record<string, string> = {}
  for (const title of categories) {
    const existing = await client.fetch(`*[_type == "category" && title == $title][0]._id`, {
      title,
    })
    if (existing) {
      categoryRefs[title] = existing
      console.log(`  skip (exists): ${title}`)
      continue
    }
    const doc = await client.create({
      _type: 'category',
      title,
      slug: { _type: 'slug', current: title.toLowerCase() },
    })
    categoryRefs[title] = doc._id
    console.log(`  created: ${title}`)
  }

  console.log('Migrating existing posts to reference categories...')
  const posts = await client.fetch<{ _id: string; category: unknown }[]>(
    `*[_type == "post"]{_id, category}`,
  )
  for (const post of posts) {
    if (typeof post.category !== 'string') continue
    const refId = categoryRefs[post.category]
    if (!refId) continue
    await client
      .patch(post._id)
      .set({ category: { _type: 'reference', _ref: refId } })
      .commit()
    console.log(`  migrated: ${post._id} -> ${post.category}`)
  }

  console.log('Seeding additional gallery images...')
  for (const item of newGalleryImages) {
    const exists = await client.fetch(`count(*[_type == "galleryImage" && alt == $alt])`, {
      alt: item.alt,
    })
    if (exists > 0) {
      console.log(`  skip (exists): ${item.alt}`)
      continue
    }
    const filename = item.file.split('/').pop() as string
    const image = await uploadImage(item.file, filename)
    await client.create({
      _type: 'galleryImage',
      image,
      alt: item.alt,
      order: item.order,
    })
    console.log(`  created: ${item.alt}`)
  }

  console.log('Done.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
