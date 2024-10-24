import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import '@/styles/global.css'
import { flex, grid } from 'styled-system/patterns'

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <html lang='ja'>
      <head>
        <meta charSet='utf-8' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap'
          rel='stylesheet'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta type='description' content='Hello' />
      </head>
      <body>
        <div
          class={grid({
            fontFamily: 'Noto Sans JP',
            minH: '100vh',
            gridTemplateRows: 'auto 1fr auto',
            rowGap: { base: '6rem', md: '8rem' },
          })}
        >
          <Header />
          <main
            class={flex({
              alignItems: 'start',
              justifyContent: 'center',
              px: { base: '2rem', md: 0 },
            })}
          >
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
