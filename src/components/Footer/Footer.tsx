import { css } from 'styled-system/css'

export default function Footer() {
  return (
    <footer
      class={css({
        borderTop: '1px solid token(colors.border.section)',
        py: '3rem',
        letterSpacing: 'widest',
        textAlign: 'center',
      })}
    >
      <p>© 2024 Relu</p>
    </footer>
  )
}
