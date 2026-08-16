import fs from 'node:fs'
import { getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2024-01-01' })

async function run() {
  const filePath =
    'C:/Users/seyib/Downloads/dynamic-photos/news/WhatsApp Image 2026-08-07 at 18.52.10 (3).jpeg'
  const alt = 'A preschooler practising counting with a wooden abacus'

  const exists = await client.fetch(`count(*[_type == "galleryImage" && alt == $alt])`, { alt })
  if (exists > 0) {
    console.log('skip (exists)')
    return
  }

  const buffer = fs.readFileSync(filePath)
  const asset = await client.assets.upload('image', buffer, { filename: 'abacus.jpg' })
  await client.create({
    _type: 'galleryImage',
    image: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
    alt,
    order: 21,
  })
  console.log('created')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
