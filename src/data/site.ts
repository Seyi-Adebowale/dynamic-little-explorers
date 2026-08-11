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
    src: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1920&q=80&auto=format&fit=crop',
    alt: 'A child joyfully exploring sensory play at Dynamic Little Explorers',
    eyebrow: 'Crèche · 3–18 months',
    title: 'Where curious minds take their',
    highlight: 'first steps',
    description:
      'A nurturing, sensory-rich start for our youngest explorers — secure attachment, gentle routines and endless little discoveries.',
  },
  {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80&auto=format&fit=crop',
    alt: 'Children learning together in a warm, bright classroom',
    eyebrow: 'Toddlers · 14 months–3 years',
    title: 'A community built on',
    highlight: 'warmth and wonder',
    description:
      'Confident little voices, hands-on learning and a classroom that feels like a second home — every single day.',
  },
  {
    src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1920&q=80&auto=format&fit=crop',
    alt: 'A preschooler engrossed in a picture book',
    eyebrow: 'Preschool · 3–5 years',
    title: 'Building a strong foundation for',
    highlight: 'lifelong learning',
    description:
      'A Montessori-inspired approach to literacy, numeracy and independence that prepares every child for school life.',
  },
  {
    src: 'https://images.unsplash.com/photo-1571210862729-78a52d3779a2?w=1920&q=80&auto=format&fit=crop',
    alt: 'A happy toddler enjoying outdoor playtime',
    eyebrow: 'Play-Based Discovery',
    title: 'Because childhood should be',
    highlight: 'full of joy',
    description:
      'Fresh air, open play and boundless curiosity — we believe the best lessons happen outside the classroom too.',
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
      'Everyday tasks like pouring, buttoning and tidying build independence, coordination and quiet concentration.',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1000&q=80&auto=format&fit=crop',
  },
  {
    id: 'sensorial',
    title: 'Sensorial',
    description:
      'Hands-on materials refine each sense, sharpening how children observe, compare and classify the world.',
    image:
      'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1000&q=80&auto=format&fit=crop',
  },
  {
    id: 'language',
    title: 'Language',
    description:
      'From sandpaper letters to storytime, a rich language environment builds vocabulary and early literacy.',
    image:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1000&q=80&auto=format&fit=crop',
  },
  {
    id: 'mathematics',
    title: 'Mathematics',
    description:
      'Concrete, hands-on materials turn abstract number concepts into something children can see, touch and understand.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1000&q=80&auto=format&fit=crop',
  },
]

export const facilities: Facility[] = [
  {
    id: 'learning-spaces',
    title: 'Bright, Purposeful Classrooms',
    description:
      'Every room is designed at a child’s scale — calm, orderly, and filled with natural light and inviting materials.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 'outdoor-play',
    title: 'Safe Outdoor Play',
    description:
      'A secure, supervised playground where children run, climb and burn off energy in the fresh air every day.',
    image:
      'https://images.unsplash.com/photo-1571210862729-78a52d3779a2?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 'reading-corner',
    title: 'Cosy Reading Corners',
    description:
      'Quiet, book-filled nooks where children curl up to explore stories at their own pace.',
    image:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 'creative-studio',
    title: 'Creative Studio Space',
    description:
      'A dedicated art and sensory area where mess is welcome and imagination leads the way.',
    image:
      'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1200&q=80&auto=format&fit=crop',
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
    id: 'summer-classes-2025',
    title: 'Join Our Exciting Kids Summer Classes — August 2025',
    excerpt:
      'We’re thrilled to announce our upcoming Summer Classes at Dynamic Little Explorers School, happening this August.',
    category: 'Community',
    date: 'Jul 15, 2025',
    image:
      'https://images.unsplash.com/photo-1543342384-1f1350e27861?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 'more-than-just-fun',
    title: 'Why It’s More Than Just Fun at Dynamic Little Explorers',
    excerpt:
      'When our children play, they are learning purposefully — every activity is powered by our thoughtful approach.',
    category: 'Community',
    date: 'May 6, 2025',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 'beyond-abcs',
    title: 'Beyond ABCs: Nurturing Your Child’s Social-Emotional Intelligence at Home',
    excerpt:
      'At Dynamic Little Explorers, we believe education goes beyond the books — helping children understand their feelings and interact kindly.',
    category: 'Education',
    date: 'Jun 28, 2025',
    image:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 'montessori-lifelong-success',
    title:
      'Why Early Childhood Education in a Montessori Environment Sets Children Up for Lifelong Success',
    excerpt:
      'In the early years of a child’s life, the brain develops rapidly — making quality early childhood education crucial for building a strong foundation.',
    category: 'Education',
    date: 'Jun 8, 2025',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80&auto=format&fit=crop',
  },
]

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=900&q=80&auto=format&fit=crop',
    alt: 'Child exploring sensory play at Dynamic Little Explorers',
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=80&auto=format&fit=crop',
    alt: 'Toddlers playing together in the classroom',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900&q=80&auto=format&fit=crop',
    alt: 'Preschooler reading a picture book',
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1543342384-1f1350e27861?w=900&q=80&auto=format&fit=crop',
    alt: 'Child engaged in a creative art activity',
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80&auto=format&fit=crop',
    alt: 'Classroom moment at Dynamic Little Explorers',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1571210862729-78a52d3779a2?w=900&q=80&auto=format&fit=crop',
    alt: 'Portrait of a happy toddler outdoors',
  },
]
