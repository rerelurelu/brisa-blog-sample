import BlogArea from '@/components/BlogArea/BlogArea'
import Hero from '@/components/Hero/Hero'
import { fetchPosts } from '@/services/post'
import { css } from 'styled-system/css'
import { grid } from 'styled-system/patterns'

export const prerender = true

export function Head() {
  return (
    <>
      <title>Home | Relu</title>
      <meta name='description' content={`Relu's personal website`} />
    </>
  )
}

export default async function Homepage() {
  const { posts } = await fetchPosts({ limit: 3 })

  return (
    <div
      class={grid({
        h: 'full',
        gridTemplateRows: '1fr auto',
        gap: { base: '6rem', md: '8rem' },
      })}
    >
      <div class={css({ w: 'full', h: 'fit-content', display: 'flex', justifyContent: 'center' })}>
        <Hero />
      </div>
      <BlogArea posts={posts} />
    </div>
  )
}
