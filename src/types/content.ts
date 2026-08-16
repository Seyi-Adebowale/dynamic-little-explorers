export interface NavItem {
  label: string
  href: string
}

export interface Program {
  id: string
  name: string
  communityName: string
  ageRange: string
  description: string
  longDescription: string
  highlights: string[]
  image: string
  icon: string
  tone: 'berry' | 'forest' | 'amber'
}

export interface ValueProp {
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export interface MontessoriArea {
  id: string
  title: string
  description: string
  image: string
}

export interface Facility {
  id: string
  title: string
  description: string
  image: string
}
