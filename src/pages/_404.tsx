import { css } from 'styled-system/css'
import { divider } from 'styled-system/patterns'

export function Head() {
  return (
    <>
      <title>404 | Relu</title>
      <meta name='description' content='404 This page could not be found.' />
    </>
  )
}

export default function Custom404() {
  return (
    <div
      class={css({
        display: 'grid',
        placeItems: 'center',
        h: '30vh',
        px: '3rem',
      })}
    >
      <div
        class={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <h1
          class={css({
            color: 'white',
            fontSize: '2.25rem',
            lineHeight: '2.5rem',
          })}
        >
          404
        </h1>
        <div
          class={divider({
            orientation: 'vertical',
            thickness: '0.125rem',
            color: 'divider',
            h: '3.5rem',
            mx: '1.5rem',
          })}
        />
        <h2
          class={css({
            color: 'white',
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
          })}
        >
          This page could not be found.
        </h2>
      </div>
    </div>
  )
}
