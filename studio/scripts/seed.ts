import fs from 'node:fs'
import path from 'node:path'
import { getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2024-01-01' })

const SITE_ROOT = path.resolve(__dirname, '../../src/assets')

async function uploadImage(relativePath: string, filename: string) {
  const fullPath = path.join(SITE_ROOT, relativePath)
  const buffer = fs.readFileSync(fullPath)
  const asset = await client.assets.upload('image', buffer, { filename })
  return {
    _type: 'image' as const,
    asset: { _type: 'reference' as const, _ref: asset._id },
  }
}

const galleryImages = [
  {
    file: 'moments/birthday.jpg',
    alt: 'A joyful child celebrating her birthday at Dynamic Little Explorers',
    order: 1,
  },
  {
    file: 'moments/crawling.jpg',
    alt: 'A curious baby crawling and exploring',
    order: 2,
  },
  {
    file: 'moments/coloring.jpg',
    alt: 'A child engaged in a creative colouring activity',
    order: 3,
  },
  {
    file: 'moments/indoor-play.jpg',
    alt: 'Children playing together in the indoor play area',
    order: 4,
  },
  {
    file: 'moments/nap-time.jpg',
    alt: 'A toddler peacefully resting during nap time',
    order: 5,
  },
  {
    file: 'moments/baby-portrait.jpg',
    alt: 'A calm, curious baby at Dynamic Little Explorers',
    order: 6,
  },
]

const posts = [
  {
    title: 'Why It’s More Than Just Fun at Dynamic Little Explorers',
    slug: 'more-than-just-fun',
    excerpt:
      'When our children play, they are learning purposefully — every activity is powered by our thoughtful approach.',
    category: 'Community',
    date: '2025-05-06',
    file: 'blog/more-than-fun.jpg',
  },
  {
    title: 'Join Our Exciting Kids Summer Classes — August 2025',
    slug: 'summer-classes-2025',
    excerpt:
      'We’re thrilled to announce our upcoming Summer Classes at Dynamic Little Explorers School, happening this August.',
    category: 'Community',
    date: '2025-07-15',
    file: 'blog/summer-classes.jpg',
  },
  {
    title: 'Beyond ABCs: Nurturing Your Child’s Social-Emotional Intelligence at Home',
    slug: 'beyond-abcs',
    excerpt:
      'At Dynamic Little Explorers, we believe education goes beyond the books — helping children understand their feelings and interact kindly.',
    category: 'Education',
    date: '2025-06-28',
    file: 'blog/beyond-abcs.jpg',
  },
  {
    title:
      'Why Early Childhood Education in a Montessori Environment Sets Children Up for Lifelong Success',
    slug: 'montessori-lifelong-success',
    excerpt:
      'In the early years of a child’s life, the brain develops rapidly — making quality early childhood education crucial for building a strong foundation.',
    category: 'Education',
    date: '2025-06-08',
    file: 'blog/montessori-success.jpg',
  },
]

async function run() {
  console.log('Seeding gallery images...')
  for (const item of galleryImages) {
    const exists = await client.fetch(
      `count(*[_type == "galleryImage" && alt == $alt])`,
      { alt: item.alt },
    )
    if (exists > 0) {
      console.log(`  skip (exists): ${item.file}`)
      continue
    }
    const image = await uploadImage(item.file, path.basename(item.file))
    await client.create({
      _type: 'galleryImage',
      image,
      alt: item.alt,
      order: item.order,
    })
    console.log(`  created: ${item.file}`)
  }

  console.log('Seeding stories...')
  for (const post of posts) {
    const exists = await client.fetch(
      `count(*[_type == "post" && slug.current == $slug])`,
      { slug: post.slug },
    )
    if (exists > 0) {
      console.log(`  skip (exists): ${post.slug}`)
      continue
    }
    const mainImage = await uploadImage(post.file, path.basename(post.file))
    await client.create({
      _type: 'post',
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      category: post.category,
      excerpt: post.excerpt,
      mainImage,
      publishedAt: new Date(post.date).toISOString(),
      body: [
        {
          _type: 'block',
          _key: 'seed-body-1',
          style: 'normal',
          children: [{ _type: 'span', _key: 'seed-span-1', text: post.excerpt }],
        },
      ],
    })
    console.log(`  created: ${post.slug}`)
  }

  console.log('Done.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
