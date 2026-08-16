import type {
  Facility,
  MontessoriArea,
  NavItem,
  Program,
  Testimonial,
  ValueProp,
} from '@/types/content'
import heroCreche from '@/assets/hero/hero-creche.jpg'
import heroToddlers from '@/assets/hero/hero-toddlers.jpg'
import heroPreschool from '@/assets/hero/hero-preschool.jpg'
import outdoorPlay from '@/assets/facilities/outdoor-play.jpg'
import compound from '@/assets/facilities/compound.jpg'
import reception from '@/assets/facilities/reception.jpg'
import classroom from '@/assets/facilities/classroom.jpg'
import indoorPlay from '@/assets/facilities/indoor-play.jpg'
import napRoom from '@/assets/facilities/nap-room.jpg'
import practicalLifeMaterials from '@/assets/montessori/practical-life.jpg'
import knobbedCylinders from '@/assets/montessori/knobbed-cylinders.jpg'
import geometricSolids from '@/assets/montessori/geometric-solids.jpg'
import binomialCube from '@/assets/montessori/binomial-cube.jpg'
import pinkTower from '@/assets/montessori/pink-tower.jpg'

export const siteInfo = {
  name: 'Dynamic Little Explorers Montessori School',
  shortName: 'Dynamic Little Explorers',
  tagline: 'Where curiosity takes its first steps',
  footerTagline: 'Little Hands, Great Discoveries',
  founded: 2025,
  phone: '08109937702',
  whatsapp: '07010844322',
  whatsappLink: 'https://wa.me/2347010844322',
  instagramLink: 'https://www.instagram.com/dynamiclittleexplorers/',
  email: 'dynamiclittleexplorersschool@gmail.com',
  address: 'Block 1, Flat 1, Otedola Jubilee Housing Estate, CMD Road, Beside Omole Phase 2, Lagos',
  hours: {
    general: '8:00am – 2:30pm',
    creche: '6:30am – 7:00pm',
  },
  mission:
    'At Dynamic Little Explorers Montessori School, we are committed to providing a nurturing and stimulating environment where children learn through hands-on experiences, curiosity-driven exploration, and respectful guidance. We strive to develop each child’s intellectual, social, emotional and physical potential while instilling values of kindness, independence and responsibility.',
  vision:
    'To nurture confident, independent and compassionate young learners by fostering a love for exploration, creativity and lifelong learning through the Montessori philosophy.',
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Stories', href: '/stories' },
  { label: 'Contact', href: '/contact' },
]

export const heroSlides = [
  {
    src: heroCreche,
    alt: 'A toddler joyfully playing on the slide at Dynamic Little Explorers',
    eyebrow: 'Crèche · 3–18 months',
    title: 'Where curious minds take their',
    highlight: 'first steps',
    description:
      'A nurturing, sensory-rich start for our youngest explorers — secure attachment, gentle routines and endless little discoveries.',
    flip: true,
    // The child sits left-of-centre in the source photo; bias the crop that
    // way so the horizontal flip doesn't push her off the right edge on
    // narrow (mobile) viewports.
    objectPosition: '30% center',
  },
  {
    src: heroToddlers,
    alt: 'A child engaged in a hands-on bead maze activity in the classroom',
    eyebrow: 'Toddlers · 14 months–3 years',
    title: 'A community built on',
    highlight: 'warmth and wonder',
    description:
      'Confident little voices, hands-on learning and a classroom that feels like a second home — every single day.',
    flip: true,
  },
  {
    src: heroPreschool,
    alt: 'A preschooler focused on counting beads with a wooden abacus',
    eyebrow: 'Preschool · 3–5 years',
    title: 'Building a strong foundation for',
    highlight: 'lifelong learning',
    description:
      'A Montessori-inspired approach to literacy, numeracy and independence that prepares every child for school life.',
    flip: false,
  },
]

export const programs: Program[] = [
  {
    id: 'creche',
    name: 'Crèche',
    communityName: 'NIDO Community',
    ageRange: '3 – 18 months',
    description:
      'A nurturing, sensory-rich environment focused on secure attachment, gentle routines and the earliest stages of exploration.',
    longDescription:
      'Our NIDO Community (from the Italian for "nest") is a calm, secure space where our youngest explorers form trusting bonds with consistent caregivers. Everything is scaled to the infant — low shelves, soft textures, natural light — so that even before a child can walk, they can move freely and choose their own activity. Gentle routines around feeding, rest and sensory play give each child the security to explore at their own pace.',
    highlights: [
      'Consistent, nurturing caregivers who know each child individually',
      'Freedom of movement in a safe, prepared space',
      'Sensory materials that respond to an infant’s natural curiosity',
      'Individual routines that respect each child’s own rhythm',
    ],
    image: heroCreche,
    icon: 'Sprout',
    tone: 'berry',
  },
  {
    id: 'toddlers',
    name: 'Toddlers',
    communityName: 'Toddler Community',
    ageRange: '14 months – 3 years',
    description:
      'Accompanying curious toddlers through language, movement and independence — building confidence one discovery at a time.',
    longDescription:
      'Toddlerhood is a race toward independence, and our Toddler Community is built to support it. Children practise real, purposeful tasks — pouring, spooning, dressing themselves — that build coordination and self-belief. A language-rich environment, predictable routines and materials sized just for them turn everyday moments into rich learning, while still leaving plenty of room for the joyful, messy play toddlers need.',
    highlights: [
      'Practical life activities that build independence and coordination',
      'A language-rich environment that grows vocabulary daily',
      'Predictable routines that help toddlers feel secure and confident',
      'Hands-on materials sized for small hands and big curiosity',
    ],
    image: heroToddlers,
    icon: 'Users',
    tone: 'forest',
  },
  {
    id: 'preschool',
    name: 'Preschool',
    communityName: "Children's House",
    ageRange: '3 – 5 years',
    description:
      'A Montessori-inspired foundation in literacy, numeracy and social-emotional growth that prepares every child for school life.',
    longDescription:
      'Our Children’s House brings together the full Montessori curriculum — Practical Life, Sensorial, Language and Mathematics — in one prepared environment where children choose their own work and follow their own concentration. Mixed-age classrooms let younger children learn by watching older ones, while older children deepen their understanding by teaching what they know. By the time they graduate, children leave with real reading, writing and number skills, and the confidence to walk into a new classroom knowing how to learn.',
    highlights: [
      'The full Montessori curriculum: Practical Life, Sensorial, Language and Mathematics',
      'Mixed-age classrooms that let children learn from and teach one another',
      'Child-led work cycles that build focus, independence and initiative',
      'A strong foundation in literacy and numeracy ahead of primary school',
    ],
    image: heroPreschool,
    icon: 'GraduationCap',
    tone: 'amber',
  },
]

export const montessoriAreas: MontessoriArea[] = [
  {
    id: 'practical-life',
    title: 'Practical Life',
    description:
      'Everyday tasks like pouring, sorting and tidying build independence, coordination and quiet concentration.',
    image: practicalLifeMaterials,
  },
  {
    id: 'sensorial',
    title: 'Sensorial Development',
    description:
      'Hands-on materials like our knobbed cylinders refine each sense, sharpening how children observe and compare.',
    image: knobbedCylinders,
  },
  {
    id: 'geometry',
    title: 'Shape & Geometry',
    description:
      'Geometric solids turn abstract shapes into something children can hold, name and truly understand.',
    image: geometricSolids,
  },
  {
    id: 'binomial-cube',
    title: 'Early Algebra & Pattern',
    description:
      'The binomial cube introduces pattern and spatial reasoning years before children see an equation.',
    image: binomialCube,
  },
  {
    id: 'pink-tower',
    title: 'The Pink Tower',
    description:
      'A Montessori classic — building the tower by size alone sharpens visual discrimination and fine motor control.',
    image: pinkTower,
  },
]

export const facilities: Facility[] = [
  {
    id: 'classroom',
    title: 'Bright, Purposeful Classrooms',
    description:
      'Every room is designed at a child’s scale — calm, orderly, and filled with inviting Montessori materials.',
    image: classroom,
  },
  {
    id: 'outdoor-play',
    title: 'Safe Outdoor Play',
    description:
      'Swings, a sandpit and open-air space where children run, climb and play safely every day.',
    image: outdoorPlay,
  },
  {
    id: 'compound',
    title: 'Our Welcoming Compound',
    description:
      'A secure, cheerful compound — the first thing families see when they walk through our gates.',
    image: compound,
  },
  {
    id: 'reception',
    title: 'Warm Reception',
    description: 'A calm, welcoming space where every family and visitor is greeted with warmth.',
    image: reception,
  },
  {
    id: 'indoor-play',
    title: 'Indoor Play Room',
    description:
      'A soft, colourful play space for active fun on rainy days or free-play time indoors.',
    image: indoorPlay,
  },
  {
    id: 'nap-room',
    title: 'Peaceful Nap Room',
    description:
      'A calm, comfortable space where our youngest explorers rest and recharge during the day.',
    image: napRoom,
  },
]

export const valueProps: ValueProp[] = [
  {
    title: 'Qualified & caring staff',
    description:
      'Every educator is trained in early-years development and chosen as much for warmth as for qualification.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Age-appropriate learning',
    description:
      'Programmes and materials are calibrated precisely to each stage of a child’s development.',
    icon: 'Sprout',
  },
  {
    title: 'Safe & nurturing spaces',
    description:
      'Secure facilities, warm classrooms and thoughtful safety protocols, always.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Play-based discovery',
    description:
      'Children learn best at play — our days are built around creativity, curiosity and hands-on exploration.',
    icon: 'Blocks',
  },
  {
    title: 'School readiness',
    description:
      'A strong social, emotional and academic foundation for a confident transition to formal schooling.',
    icon: 'GraduationCap',
  },
  {
    title: 'True parent partnership',
    description:
      'Regular updates, open conversations and shared milestones — you’re never out of the loop.',
    icon: 'Users',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'From the moment I toured the school, I knew we’d found the right place. The learning materials are top-notch and every visit leaves my child excited and emotionally full.',
    name: 'Mrs. Bimpe Alade',
    role: 'Parent',
  },
  {
    quote:
      'As a working parent, I trust that this school is consistently building a well-rounded child. Knowing Ebun’s in a safe, caring environment gives me peace of mind before I even begin my day.',
    name: 'Mr. Segun Olanipekun',
    role: 'Parent',
  },
  {
    quote:
      'What stood out to us was how much the teachers actually know our daughter — her moods, her interests, her little quirks. It never feels like just another daycare.',
    name: 'Mrs. Folake Adeyemi',
    role: 'Parent',
  },
  {
    quote:
      'My son used to struggle with separation anxiety. Within weeks here, he was running in every morning excited to see his friends. That transformation says everything.',
    name: 'Mr. Chidi Okafor',
    role: 'Parent',
  },
]

