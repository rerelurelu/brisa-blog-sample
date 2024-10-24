import { css } from 'styled-system/css'

type Props = {
  src: string
  alt: string
}

export default function Avatar({ src, alt }: Props) {
  return (
    <div
      class={css({
        pos: 'relative',
        display: 'inline-flex',
      })}
    >
      <div
        class={css({
          w: '12rem',
          h: '12rem',
          borderRadius: 'full',
          overflow: 'hidden',
          boxShadow: '0 0 0 3px token(colors.avatar.ring)',
        })}
      >
        <img
          src={src}
          class={css({
            w: 'auto',
            h: 'auto',
          })}
          alt={alt}
          loading='lazy'
          decoding='async'
        />
      </div>
    </div>
  )
}
