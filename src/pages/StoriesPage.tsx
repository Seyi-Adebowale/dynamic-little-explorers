import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/layout/Seo'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Pagination } from '@/components/ui/Pagination'
import { urlFor } from '@/lib/sanity'
import { fetchPostsPage } from '@/lib/queries'
import type { SanityPostSummary } from '@/lib/queries'
import bannerImage from '@/assets/blog/more-than-fun.jpg'

const PAGE_SIZE = 18

export function StoriesPage() {
  const [posts, setPosts] = useState<SanityPostSummary[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const topRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    setLoading(true)
    const start = (page - 1) * PAGE_SIZE
    fetchPostsPage(start, start + PAGE_SIZE)
      .then(({ items, total: count }) => {
        setPosts(items)
        setTotal(count)
      })
      .catch(() => {
        setPosts([])
        setTotal(0)
      })
      .finally(() => setLoading(false))

    if (isFirstRender.current) {
      isFirstRender.current = false
    } else {
      topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [page])

  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE))

  return (
    <>
      <Seo
        title="Stories & Insights"
        description="Updates, early-years guidance and moments from life at Dynamic Little Explorers Montessori School."
        path="/stories"
      />
      <PageHero
        eyebrow="Stories & Insights"
        title="News from the Explorers community"
        description="Updates, early-years guidance and moments from life at our school."
        image={bannerImage}
        imageAlt="A story from life at Dynamic Little Explorers Montessori School"
        imagePosition="top"
      />

      <Section tone="white" tightTop>
        <Container>
          <div ref={topRef} className="scroll-mt-28" />

          {!loading && posts.length === 0 && (
            <p className="text-center text-ink-600">
              No stories published yet — check back soon.
            </p>
          )}

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post._id} delay={(i % 18) * 0.05}>
                <Link to={`/stories/${post.slug}`} className="group block">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={urlFor(post.mainImage).width(700).height(500).url()}
                      alt={post.title}
                      loading="lazy"
                      className="aspect-[7/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  {post.category && (
                    <span className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.16em] text-navy-600">
                      {post.category}
                    </span>
                  )}
                  <h2 className="mt-2 font-display text-xl font-semibold text-ink-900 group-hover:text-navy-600">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{post.excerpt}</p>
                  )}
                </Link>
              </Reveal>
            ))}
          </div>

          <Pagination page={page} pageCount={pageCount} onChange={setPage} />
        </Container>
      </Section>
    </>
  )
}
