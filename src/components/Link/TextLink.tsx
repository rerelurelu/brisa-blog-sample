import { type Styles, css, cx } from 'styled-system/css'
import { text as textRecipe } from 'styled-system/recipes'

type Props = {
  text: string
  href: string
  style?: string
}

export default function TextLink({ text, href, style }: Props) {
  return (
    <a
      class={cx(
        css({
          display: 'inline-block',
          textDecoration: 'underline',
        }),
        textRecipe({ size: 'sm' }),
        style,
      )}
      href={href}
    >
      {text}
    </a>
  )
}
