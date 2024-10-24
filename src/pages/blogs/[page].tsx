import BlogArea from '@/components/BlogArea/BlogArea'
import Heading from '@/components/Heading/Heading'
import CaretLeft from '@/components/icon/CaretLeft'
import CaretRight from '@/components/icon/CaretRight'
import { PER_PAGE } from '@/constants'
import { fetchPosts } from '@/services/post'
import { getCurrentIndex } from '@/utils/getCurrentIndex'
import type { WebContext } from 'brisa'
import { css, cx } from 'styled-system/css'
import { grid } from 'styled-system/patterns'

export function Head() {
  return (
    <>
      <title>Blog | Relu</title>
      <meta name='description' content={`Relu's blog list.`} />
    </>
  )
}

export async function prerender() {
  const { totalCount } = await fetchPosts()
  const maxPageIndex = Math.ceil(totalCount / PER_PAGE)
  const paths = [...Array(maxPageIndex).keys()].map((i) => (i + 1).toString())

  return paths.map((path) => ({
    page: path,
  }))
}

// biome-ignore lint/correctness/noEmptyPattern:
export default async function Page({}, { route }: WebContext) {
  const { posts, totalCount } = await fetchPosts()
  const currentIndex = Number(getCurrentIndex(route.pathname))

  const baseIconStyle = {
    style: css({ _hover: { opacity: '0.7' } }),
    height: '16',
    fill: '#fff',
  }

  return (
    <div class={grid({ placeItems: 'center' })}>
      <Heading title='Blog' />
      <BlogArea posts={posts} style={css({ mt: '5rem' })} />
      <wc-pagination currentIndex={currentIndex} totalCount={totalCount} skipSSR>
        <CaretLeft
          slot='left-icon'
          style={cx(baseIconStyle.style, css({ pt: '5px' }))}
          height={baseIconStyle.height}
          fill={baseIconStyle.fill}
        />
        <CaretRight
          slot='right-icon'
          style={cx(baseIconStyle.style, css({ pt: '3px' }))}
          height={baseIconStyle.height}
          fill={baseIconStyle.fill}
        />
      </wc-pagination>
    </div>
  )
}
