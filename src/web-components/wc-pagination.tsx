import { PER_PAGE } from '@/constants'
import { useWindowSize } from '@/hooks/useWindowSize'
import { getPagination } from '@/utils/getPagination'
import { type WebContext, navigate } from 'brisa'
import { css, cva } from 'styled-system/css'
import { flex } from 'styled-system/patterns'

type Props = {
  totalCount: number
  currentIndex: number
}

export default function Pagination({ totalCount, currentIndex }: Props, wenContext: WebContext) {
  const { state } = wenContext
  const { width } = useWindowSize(wenContext)
  const windowSize = state({ width: width })
  const maxIndex = Math.ceil(totalCount / PER_PAGE)
  const isLaptop = windowSize.value.width >= 1024
  const pagination = getPagination(maxIndex, currentIndex, isLaptop)

  const handlePagination = (index: number) => {
    navigate(`/blogs/${index}`)
  }

  return (
    <div
      class={flex({
        mt: { base: '4rem', md: '6rem' },
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem',
      })}
    >
      {currentIndex !== 1 && (
        <li
          class={css({
            w: '24px',
            h: '40px',
            lineHeight: '36px',
            display: 'grid',
            placeItems: 'center',
            textAlign: 'center',
          })}
        >
          <button
            type='button'
            class={button({ visual: 'icon' })}
            onClick={handlePagination(currentIndex - 1)}
          >
            <slot name='left-icon' />
          </button>
        </li>
      )}
      {pagination.map((number) => (
        <li
          class={css({
            w: '40px',
            h: '40px',
            lineHeight: '36px',
            display: 'grid',
            placeItems: 'center',
            textAlign: 'center',
          })}
          key={number}
        >
          <button
            type='button'
            class={button({ visual: currentIndex === number ? 'currentPage' : 'default' })}
            onClick={handlePagination(number)}
          >
            {number}
          </button>
        </li>
      ))}
      {currentIndex !== maxIndex && (
        <li
          class={css({
            w: '24px',
            h: '40px',
            lineHeight: '36px',
            display: 'grid',
            placeItems: 'center',
            textAlign: 'center',
          })}
        >
          <button
            type='button'
            class={button({ visual: 'icon' })}
            onClick={handlePagination(currentIndex + 1)}
          >
            <slot name='right-icon' />
          </button>
        </li>
      )}
    </div>
  )
}

const button = cva({
  base: {
    pt: '3px',
    w: '40px',
    cursor: 'pointer',
    color: 'white',
    borderRadius: '10px',
    textAlign: 'center',
  },
  variants: {
    visual: {
      default: { bg: 'transparent', _hover: { bg: '#ffffff1a' } },
      currentPage: { bg: '#ad5bba', _hover: { opacity: '0.7' } },
      icon: { w: '20px', h: '40px', pt: 0, bg: 'transparent', _hover: { opacity: '0.7' } },
    },
  },
})
