import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { Seo } from '@/components/layout/Seo'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { urlFor } from '@/lib/sanity'
import { fetchOtherPosts, fetchPostBySlug } from '@/lib/queries'
import type { SanityPost, SanityPostSummary } from '@/lib/queries'

const OTHER_STORIES_COUNT = 4

export function StoryPage() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<SanityPost | null>(null)
  const [otherPosts, setOtherPosts] = useState<SanityPostSummary[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    fetchPostBySlug(slug)
      .then(setPost)
      .catch(() => setPost(null))
      .finally(() => setLoading(false))

    fetchOtherPosts(slug, OTHER_STORIES_COUNT)
      .then(setOtherPosts)
      .catch(() => setOtherPosts([]))
  }, [slug])

  if (!loading && !post) {
    return (
      <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center py-24">
        <h1 className="text-2xl">We couldn’t find that story</h1>
        <p className="mt-3 max-w-md text-ink-600">
          It may have been moved or unpublished.
        </p>
        <Button as={Link} to="/stories" className="mt-8" variant="primary">
          Back to Stories
        </Button>
      </Container>
    )
  }

  return (
    <Section tone="white" className="pt-32 sm:pt-40">
      {post && (
        <Seo
          title={post.title}
          description={post.excerpt ?? post.title}
          path={`/stories/${post.slug}`}
          image={urlFor(post.mainImage).width(1200).height(630).url()}
          type="article"
        />
      )}
      <Container>
        <Reveal>
          <Button as={Link} to="/stories" variant="ghost" icon={<ArrowLeft size={16} />}>
            Back to Stories
          </Button>
        </Reveal>

        <div className="mt-8 grid gap-14 lg:grid-cols-[2fr_1fr] lg:gap-16">
          {post && (
            <Reveal>
              {post.category && (
                <span className="inline-block text-xs font-bold uppercase tracking-[0.16em] text-navy-600">
                  {post.category}
                </span>
              )}
              <h1 className="mt-3 text-balance text-3xl leading-[1.15] text-ink-900 md:text-4xl">
                {post.title}
              </h1>

              <div className="mt-8 overflow-hidden rounded-2xl">
                <img
                  src={urlFor(post.mainImage).width(1200).height(750).url()}
                  alt={post.title}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>

              <div className="mt-8 space-y-5 text-base text-ink-700 [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink-900 [&_p]:leading-relaxed">
                <PortableText value={post.body} />
              </div>
            </Reveal>
          )}

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-ink-200 bg-cream-50 p-6">
              <h2 className="font-display text-lg font-semibold text-ink-900">More Stories</h2>

              {otherPosts.length === 0 ? (
                <p className="mt-4 text-sm text-ink-600">No other stories yet.</p>
              ) : (
                <div className="mt-6 flex flex-col gap-5">
                  {otherPosts.map((other) => (
                    <Link
                      key={other._id}
                      to={`/stories/${other.slug}`}
                      className="group flex gap-4 border-t border-ink-200 pt-5 first:border-t-0 first:pt-0"
                    >
                      <div className="w-20 shrink-0 overflow-hidden rounded-xl">
                        <img
                          src={urlFor(other.mainImage).width(200).height(200).url()}
                          alt={other.title}
                          loading="lazy"
                          className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                      <div>
                        {other.category && (
                          <span className="text-xs font-bold uppercase tracking-[0.16em] text-navy-600">
                            {other.category}
                          </span>
                        )}
                        <h3 className="mt-1 font-display text-sm font-semibold leading-snug text-ink-900 group-hover:text-navy-600">
                          {other.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
