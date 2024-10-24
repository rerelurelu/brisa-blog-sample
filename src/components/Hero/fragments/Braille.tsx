import { cva } from 'styled-system/css'
import { flex } from 'styled-system/patterns'

export type Props = {
  tl: boolean
  tr: boolean
  ml: boolean
  mr: boolean
  bl: boolean
  br: boolean
}

export default function Braille({ tl, tr, ml, mr, bl, br }: Props) {
  return (
    <div
      class={flex({
        flexWrap: 'wrap',
        w: '3.5rem',
        h: 'fit-content',
        rowGap: 2,
        columnGap: 2,
      })}
    >
      <div class={braille({ visual: tl ? 'on' : 'off' })} />
      <div class={braille({ visual: tr ? 'on' : 'off' })} />
      <div class={braille({ visual: ml ? 'on' : 'off' })} />
      <div class={braille({ visual: mr ? 'on' : 'off' })} />
      <div class={braille({ visual: bl ? 'on' : 'off' })} />
      <div class={braille({ visual: br ? 'on' : 'off' })} />
    </div>
  )
}

const braille = cva({
  base: {
    h: '1rem',
    w: '1rem',
    borderRadius: 'full',
  },
  variants: {
    visual: {
      on: {
        bg: '#fde047',
      },
      off: {
        border: '2px solid #fde047',
      },
    },
  },
})
