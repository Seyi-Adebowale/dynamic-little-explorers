import { getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2024-01-01' })

function block(text: string, style: 'normal' | 'h2' = 'normal') {
  return {
    _type: 'block',
    _key: `k${Math.random().toString(36).slice(2, 10)}`,
    style,
    children: [{ _type: 'span', _key: `s${Math.random().toString(36).slice(2, 10)}`, text }],
  }
}

const articles: Record<string, ReturnType<typeof block>[]> = {
  'more-than-just-fun': [
    block(
      'Walk into any classroom at Dynamic Little Explorers and you will see children stacking blocks, pouring water between jugs, matching colours, or carefully carrying a tray across the room. To a visitor, it might look like simple play. To us, every one of those moments is a carefully prepared learning experience.',
    ),
    block('Play With a Purpose', 'h2'),
    block(
      'The Montessori philosophy that guides our classrooms is built on a simple but powerful idea: children learn best when they are free to explore materials that are matched to their stage of development, at their own pace. A toddler pouring rice from one cup to another is quietly building concentration, hand-eye coordination and independence — skills that will support reading, writing and mathematics later on.',
    ),
    block(
      'Our teachers are trained to observe closely and introduce the right activity at the right moment, rather than direct every step. This means a child who is fascinated by sorting colours can stay with that activity for as long as their interest lasts, building deep focus instead of being rushed on to the next task.',
    ),
    block('Learning You Can See', 'h2'),
    block(
      'Because the work is hands-on, progress is visible. Parents often tell us they are amazed at how confidently their child sets the table, buttons their own shirt, or explains the parts of a plant — skills built through the everyday "play" that happens in our prepared environment.',
    ),
    block(
      'So the next time you see your child happily absorbed in an activity at pick-up time, know that it is never "just fun." It is exactly the kind of purposeful, joyful learning we believe every child deserves.',
    ),
  ],
  'summer-classes-2025': [
    block(
      'We are thrilled to open registration for our Kids Summer Classes, running from Monday, 4th August to Friday, 29th August 2025. It is a wonderful opportunity for children to stay engaged, active and curious throughout the holidays, in the same warm, Montessori-inspired environment they know and love.',
    ),
    block('What to Expect', 'h2'),
    block(
      'Our summer programme is built around a rich mix of activities designed to keep young minds and bodies busy in healthy, constructive ways. Children will enjoy arts and crafts sessions, hands-on Montessori activities, outdoor play, music and movement, and plenty of guided free play with their friends.',
    ),
    block(
      'Each week introduces a new theme, giving children fresh materials and ideas to explore while still enjoying the consistency and structure that helps them feel secure.',
    ),
    block('Who Can Join', 'h2'),
    block(
      'The programme welcomes children across our Crèche, Toddler and Preschool age groups, with activities adapted to suit each stage of development. Whether your child is already enrolled with us or joining just for the summer, our team will ensure they settle in comfortably from day one.',
    ),
    block(
      'Spaces are limited, so we encourage families to register early. Reach out to our admissions team by phone or email, or visit us in person, for full details on timing, fees and how to secure a spot for your little explorer this August.',
    ),
  ],
  'beyond-abcs': [
    block(
      'When we think about early childhood education, it is easy to focus only on letters, numbers and school-readiness milestones. But some of the most important learning a young child does has nothing to do with an alphabet chart — it is learning to recognise, name and manage their own feelings, and to relate kindly to the people around them.',
    ),
    block('Why Social-Emotional Skills Matter', 'h2'),
    block(
      'Children who can identify what they are feeling, and who have been shown healthy ways to express it, are better able to concentrate, make friends, and bounce back from setbacks. These are foundations that support every other kind of learning, from reading to problem-solving.',
    ),
    block(
      'At Dynamic Little Explorers, our teachers model this every day — narrating feelings, encouraging children to use words instead of tantrums, and guiding conflicts toward calm resolutions rather than simply intervening and moving on.',
    ),
    block('Bringing It Home', 'h2'),
    block(
      'The good news is that parents do not need any special training to keep this work going at home. A few simple habits go a long way: naming your child\'s emotions out loud ("I can see you\'re frustrated that the tower fell down"), reading stories that explore feelings, and giving your child the words to describe what they are experiencing rather than solving every problem for them.',
    ),
    block(
      'Modelling calm responses to your own frustrations also teaches far more than any lecture could. Children are always watching how the adults around them handle big emotions, and they learn to do the same.',
    ),
    block(
      'By nurturing these skills consistently — both at school and at home — we give our children a foundation that will serve them well beyond the classroom, in every relationship they build for the rest of their lives.',
    ),
  ],
  'montessori-lifelong-success': [
    block(
      'The first few years of a child\'s life are a period of extraordinary brain growth. By age five, a child\'s brain has already reached around ninety percent of its adult size, and the experiences a child has during this window shape the neural pathways they will rely on for the rest of their life. This is exactly why the quality of early childhood education matters so much.',
    ),
    block('A Prepared Environment for Natural Learning', 'h2'),
    block(
      'The Montessori approach is built around this understanding of early development. Rather than sitting children down for rote instruction, a Montessori classroom is a carefully prepared environment where children choose purposeful activities suited to their developmental stage — building concentration, independence and a genuine love of learning, rather than a fear of getting things wrong.',
    ),
    block(
      'Mixed-age classrooms add another layer of benefit: younger children are inspired by watching older peers at work, while older children deepen their own understanding by helping and teaching. This kind of collaborative, respectful community mirrors real life far more closely than a traditional, age-segregated classroom.',
    ),
    block('Building Skills That Last', 'h2'),
    block(
      'Because children in a Montessori environment learn to direct their own work, they develop strong self-discipline, problem-solving skills and confidence in their own ability to figure things out — qualities that matter just as much in secondary school, university and the workplace as they do in a Crèche or Preschool classroom.',
    ),
    block(
      'At Dynamic Little Explorers, we see this every day: children who arrive as shy toddlers grow into confident, capable young learners ready to walk into a new classroom knowing exactly how to learn. That, more than any single test score, is what sets a child up for lifelong success.',
    ),
  ],
}

async function run() {
  for (const [slug, body] of Object.entries(articles)) {
    const id = await client.fetch<string | null>(
      `*[_type == "post" && slug.current == $slug][0]._id`,
      { slug },
    )
    if (!id) {
      console.log(`  skip (not found): ${slug}`)
      continue
    }
    await client.patch(id).set({ body }).commit()
    console.log(`  updated: ${slug}`)
  }
  console.log('Done.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
