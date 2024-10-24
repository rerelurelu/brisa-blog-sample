import type { Tag } from '@/types/post'
import { css, cx } from 'styled-system/css'
import { text } from 'styled-system/recipes'

type Props = {
  title: string
  href: string
  createdAt: string
  tags: Tag[]
  key: string
}

export default function PostCard({ title, href, createdAt, tags }: Props) {
  const dateText = new Date(createdAt).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div
      class={css({
        pos: 'relative',
        display: 'flex',
        flexDir: 'column',
        borderRadius: '1rem',
        h: '12rem',
        overflow: 'hidden',
        bg: 'postCard.bg',
      })}
    >
      <div
        class={css({
          color: 'postCard.title.base',
          p: '1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          flex: '1 1 auto',
          flexDir: 'column',
          gap: '0.5rem',
        })}
      >
        <header
          class={css({
            pb: 'auto',
          })}
        >
          <h2
            class={css({
              fontSize: '1.125rem',
              fontWeight: '600',
              lineHeight: '1.75rem',
              textWrap: 'pretty',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            })}
          >
            <a
              class={css({
                _hover: {
                  color: 'postCard.title.hover',
                  cursor: 'pointer',
                },
              })}
              href={href}
            >
              {title}
            </a>
          </h2>
        </header>
        <div
          class={css({
            display: 'flex',
            flexDir: 'column',
            justifyContent: 'end',
          })}
        >
          <time class={text({ size: 'sm' })} dateTime={createdAt}>
            {dateText}
          </time>
          <div
            class={css({
              mt: '0.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              columnGap: '0.5rem',
              rowGap: '0',
            })}
          >
            {tags.map((tag) => (
              <div class={css({ color: 'postCard.tag' })} key={tag.id}>
                <span class={cx(css({ mr: '1px' }), text({ size: 'sm' }))}>#</span>
                <span>{tag.tagName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
