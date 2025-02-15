import type { Post } from '@/types/post'
import { getPathname } from '@/utils/getPathname'
import type { WebContext } from 'brisa'
import { css, cx } from 'styled-system/css'
import TextLink from '../Link/TextLink'
import PostCard from '../PostCard/PostCard'

type Pros = {
  posts: Post[]
  style?: string
}

export default async function BlogArea({ posts, style }: Pros, { route }: WebContext) {
  const isHome = getPathname(route.pathname) === 'home'

  return (
    <section
      class={cx(
        css({
          display: 'grid',
          justifyItems: 'center',
          w: '100%',
          mx: 'auto',
        }),
        style,
      )}
    >
      {isHome && (
        <h2
          class={css({
            mb: { base: '1.5rem', md: '3rem' },
            fontSize: { base: '1.25rem', md: '1.875rem' },
            lineHeight: { base: '1.75rem', md: '2.25rem' },
            textAlign: 'left',
            color: 'head',
          })}
        >
          Recent Posts
        </h2>
      )}
      <div
        class={css({
          display: 'grid',
          w: '100%',
          maxW: '1024px',
          gap: '2rem',
          gridTemplateColumns: {
            sm: 'repeat(1, minmax(0, 1fr))',
            md: 'repeat(2, minmax(0, 1fr))',
            lg: 'repeat(3, minmax(0, 1fr))',
          },
          mt: { base: isHome ? '2rem' : '6rem', md: isHome ? '3rem' : '8rem' },
        })}
      >
        {posts.map((post) => (
          <PostCard
            createdAt={post.publishedAt.slice(0, 10)}
            href={`/blog/${post.id}`}
            key={post.id}
            tags={post.tags.map((tag) => tag)}
            title={post.title}
          />
        ))}
      </div>
      {isHome && (
        <TextLink
          text='See all posts →'
          href={'/blogs/1'}
          style={css({
            mt: { base: '2rem', md: '3rem' },
            display: 'inline-block',
            textDecoration: 'underline',
          })}
        />
      )}
    </section>
  )
}
