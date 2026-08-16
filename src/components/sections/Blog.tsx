import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { urlFor } from '@/lib/sanity'
import { fetchPostsPage } from '@/lib/queries'
import type { SanityPostSummary } from '@/lib/queries'

const PREVIEW_COUNT = 3

export function Blog() {
  const [posts, setPosts] = useState<SanityPostSummary[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPostsPage(0, PREVIEW_COUNT)
      .then(({ items }) => setPosts(items))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return null

  const [featured, ...rest] = posts

  return (
    <Section id="blog" tone="cream">
      <Container>
        <SectionHeading
          eyebrow="Stories & Insights"
          title="News from the Explorers community"
          description="Updates, early-years guidance and moments from life at our school."
          tone="navy"
        />

        {posts.length === 0 ? (
          <p className="mt-12 text-center text-ink-600">
            No stories yet — check back soon.
          </p>
        ) : (
          <>
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              <Reveal>
                <Link to={`/stories/${featured.slug}`} className="group block">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={urlFor(featured.mainImage).width(1200).height(750).url()}
                      alt={featured.title}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:aspect-[2/1] md:aspect-[16/10]"
                    />
                  </div>
                  {featured.category && (
                    <span className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.16em] text-navy-600">
                      {featured.category}
                    </span>
                  )}
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink-900 group-hover:text-navy-600">
                    {featured.title}
                  </h3>
                  {featured.excerpt && (
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-600">
                      {featured.excerpt}
                    </p>
                  )}
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600">
                    Read the story <ArrowRight size={15} />
                  </span>
                </Link>
              </Reveal>

              <div className="flex flex-col gap-6">
                {rest.map((post, i) => (
                  <Reveal key={post._id} delay={i * 0.08}>
                    <Link
                      to={`/stories/${post.slug}`}
                      className="group flex gap-5 border-t border-ink-200 pt-6 first:border-t-0 first:pt-0"
                    >
                      <div className="w-32 shrink-0 overflow-hidden rounded-xl sm:w-40">
                        <img
                          src={urlFor(post.mainImage).width(300).height(300).url()}
                          alt={post.title}
                          loading="lazy"
                          className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                      <div>
                        {post.category && (
                          <span className="text-xs font-bold uppercase tracking-[0.16em] text-navy-600">
                            {post.category}
                          </span>
                        )}
                        <h3 className="mt-1.5 font-display text-base font-semibold leading-snug text-ink-900 group-hover:text-navy-600 sm:text-lg">
                          {post.title}
                        </h3>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button as={Link} to="/stories" variant="ghost" icon={<ArrowRight size={16} />}>
                View All Stories
              </Button>
            </div>
          </>
        )}
      </Container>
    </Section>
  )
}
