import Avatar from '@/components/Avatar/Avatar'
import IconLink from '@/components/Link/IconLink'
import { css } from 'styled-system/css'
import { grid } from 'styled-system/patterns'

export const prerender = true

const sns = {
  github: { href: 'https://github.com/rerelurelu' },
  zenn: { href: 'https://zenn.dev/astrologian' },
} as const

const intro = {
  para1: 'ふろんとえんどえんじにあ',
} as const

export function Head() {
  return (
    <>
      <title>About | Relu</title>
      <meta name='description' content='About Relu' />
    </>
  )
}

export default function AboutPage() {
  return (
    <div class={grid({ placeItems: 'center', px: '1.5rem' })}>
      <Avatar src={'/images/avatar.webp'} alt={`Relu's avatar`} />
      <span
        class={css({
          fontSize: '2.25rem',
          lineHeight: '2.5rem',
          mt: '2.5rem',
        })}
      >
        Relu
      </span>
      <ul
        class={css({
          mt: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          listStyle: 'none',
        })}
      >
        <li>
          <IconLink
            href={sns.github.href}
            areaLabel={'Link to GitHub'}
            src={'/images/github-icon.webp'}
            alt={'GitHub icon'}
          />
        </li>
        <li>
          <IconLink
            href={sns.zenn.href}
            areaLabel={'Link to Zenn'}
            src={'/images/zenn-icon.webp'}
            alt={'Zenn icon'}
          />
        </li>
      </ul>
      <div
        class={css({
          mt: '3rem',
          display: 'grid',
          w: '100%',
          maxW: '56rem',
          placeItems: 'center',
          lineHeight: '1.5rem',
        })}
      >
        <p>{intro.para1}</p>
      </div>
    </div>
  )
}
