import { css, cx } from 'styled-system/css'

type Props = {
  title: string
  style?: string
}

export default function Heading({ title, style }: Props) {
  return (
    <h1
      class={cx(
        css({
          color: 'head',
          textAlign: 'center',
          fontSize: '2.25rem',
          lineHeight: '2.5rem',
          fontWeight: '400',
          letterSpacing: '0.1em',
        }),
        style,
      )}
    >
      {title}
    </h1>
  )
}
