import type {
  BlogPost,
  Facility,
  GalleryImage,
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
import summerClasses from '@/assets/blog/summer-classes.jpg'
import moreThanFun from '@/assets/blog/more-than-fun.jpg'
import beyondAbcs from '@/assets/blog/beyond-abcs.jpg'
import montessoriSuccess from '@/assets/blog/montessori-success.jpg'
import momentsIndoorPlay from '@/assets/moments/indoor-play.jpg'
import momentsColoring from '@/assets/moments/coloring.jpg'
import momentsCrawling from '@/assets/moments/crawling.jpg'
import momentsBirthday from '@/assets/moments/birthday.jpg'
import momentsBabyPortrait from '@/assets/moments/baby-portrait.jpg'
import momentsNapTime from '@/assets/moments/nap-time.jpg'

export const siteInfo = {
  name: 'Dynamic Little Explorers Montessori School',
  shortName: 'Dynamic Little Explorers',
  tagline: 'Where curiosity takes its first steps',
  footerTagline: 'Little Hands, Great Discoveries',
  phone: '07030842022',
  phoneAlt: '08099847760',
  email: 'dynamiclittleexplorersschool@gmail.com',
  address: 'Block 1 Plot 1, Obasanjo Housing Estate, Beside CMD Road, Lagos',
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Stories', href: '#blog' },
  { label: 'Contact', href: '#contact' },
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

export const blogPosts: BlogPost[] = [
  {
    id: 'more-than-just-fun',
    title: 'Why It’s More Than Just Fun at Dynamic Little Explorers',
    excerpt:
      'When our children play, they are learning purposefully — every activity is powered by our thoughtful approach.',
    category: 'Community',
    date: 'May 6, 2025',
    image: moreThanFun,
  },
  {
    id: 'summer-classes-2025',
    title: 'Join Our Exciting Kids Summer Classes — August 2025',
    excerpt:
      'We’re thrilled to announce our upcoming Summer Classes at Dynamic Little Explorers School, happening this August.',
    category: 'Community',
    date: 'Jul 15, 2025',
    image: summerClasses,
  },
  {
    id: 'beyond-abcs',
    title: 'Beyond ABCs: Nurturing Your Child’s Social-Emotional Intelligence at Home',
    excerpt:
      'At Dynamic Little Explorers, we believe education goes beyond the books — helping children understand their feelings and interact kindly.',
    category: 'Education',
    date: 'Jun 28, 2025',
    image: beyondAbcs,
  },
  {
    id: 'montessori-lifelong-success',
    title:
      'Why Early Childhood Education in a Montessori Environment Sets Children Up for Lifelong Success',
    excerpt:
      'In the early years of a child’s life, the brain develops rapidly — making quality early childhood education crucial for building a strong foundation.',
    category: 'Education',
    date: 'Jun 8, 2025',
    image: montessoriSuccess,
  },
]

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: momentsBirthday,
    alt: 'A joyful child celebrating her birthday at Dynamic Little Explorers',
  },
  {
    id: 'g2',
    src: momentsCrawling,
    alt: 'A curious baby crawling and exploring',
  },
  {
    id: 'g3',
    src: momentsColoring,
    alt: 'A child engaged in a creative colouring activity',
  },
  {
    id: 'g4',
    src: momentsIndoorPlay,
    alt: 'Children playing together in the indoor play area',
  },
  {
    id: 'g5',
    src: momentsNapTime,
    alt: 'A toddler peacefully resting during nap time',
  },
  {
    id: 'g6',
    src: momentsBabyPortrait,
    alt: 'A calm, curious baby at Dynamic Little Explorers',
  },
]
