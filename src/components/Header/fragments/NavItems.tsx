import type { Entry } from '@/types/entry'
import { getPathname } from '@/utils/getPathname'
import type { WebContext } from 'brisa'
import { css, cva } from 'styled-system/css'

type Props = {
  entries: Entry[]
}

export default function NavItems({ entries }: Props, { route }: WebContext) {
  const pathname = getPathname(route.pathname)

  return (
    <>
      <ul
        class={css({
          w: 'max-content',
          display: 'inline-flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          listStyle: 'none',
          m: '0',
          p: '0',
        })}
      >
        {entries.map(({ href, content }) => {
          return (
            <li key={content}>
              <a
                class={css({
                  bg: { _hover: 'transparent', _focus: 'transparent' },
                  gap: '0.75rem',
                  color: { base: 'white' },
                  alignItems: 'center',
                  userSelect: 'none',
                })}
                href={href}
                id={content}
              >
                <span
                  class={gradationRecipe(content === pathname ? { visual: 'active' } : undefined)}
                >
                  {content}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

const gradationRecipe = cva({
  base: {
    fontSize: 'large',
    p: '0.5rem 0.7rem',
    textTransform: 'capitalize',
    fontSmoothing: 'antialiased',
    bg: { _hover: 'header.active' },
    backgroundClip: { _hover: 'text' },
    WebkitTextFillColor: { _hover: 'transparent' },
  },
  variants: {
    visual: {
      active: {
        bg: 'header.active',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
})
