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

// Exact duplicates confirmed by matching Sanity asset id (same uploaded bytes).
const idsToDelete = [
  'MpDJ0LsjGdiLsCfTj8iQWK', // duplicate birthday
  'Mo7h4B8YkKOU5mBcbQu0VZ', // duplicate nap-time
  'JJKH8pUZl9Hcm1m9Qcf20b', // duplicate crawling
  'Mo7h4B8YkKOU5mBcbQtn2H', // duplicate colouring
  'Mo7h4B8YkKOU5mBcbQtzq9', // duplicate calm baby
]

const newImages = [
  {
    file: `${DOWNLOADS_ROOT}/WhatsApp Image 2026-08-07 at 18.51.56 (1).jpeg`,
    alt: 'A baby being held by a caregiver at Dynamic Little Explorers',
    order: 17,
  },
  {
    file: `${DOWNLOADS_ROOT}/WhatsApp Image 2026-08-07 at 18.52.02 (2).jpeg`,
    alt: 'A toddler standing and exploring indoors',
    order: 18,
  },
  {
    file: `${DOWNLOADS_ROOT}/WhatsApp Image 2026-08-07 at 18.51.50.jpeg`,
    alt: 'A child pointing playfully during a festive celebration',
    order: 19,
  },
  {
    file: `${DOWNLOADS_ROOT}/families/WhatsApp Image 2026-08-07 at 18.52.13 (2).jpeg`,
    alt: 'A toddler enjoying a ride on the play horse in the outdoor play area',
    order: 20,
  },
]

async function run() {
  console.log('Deleting duplicate gallery images...')
  for (const id of idsToDelete) {
    await client.delete(id)
    console.log(`  deleted: ${id}`)
  }

  console.log('Adding new distinct gallery images...')
  for (const item of newImages) {
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
