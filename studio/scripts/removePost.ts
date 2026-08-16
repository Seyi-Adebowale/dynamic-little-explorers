import { getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2024-01-01' })

async function run() {
  const id = await client.fetch<string | null>(
    `*[_type == "post" && slug.current == "summer-classes-2025"][0]._id`,
  )
  if (!id) {
    console.log('not found (already removed?)')
    return
  }
  await client.delete(id)
  console.log('deleted', id)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
