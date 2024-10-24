import { fetchPost, fetchPosts } from '@/services/post'
import { type RequestContext, dangerHTML, notFound } from 'brisa'
import rehypeHighlight from 'rehype-highlight'
import rehypeParse from 'rehype-parse'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import { css, cx } from 'styled-system/css'
import { divider } from 'styled-system/patterns'
import { text } from 'styled-system/recipes'
import { unified } from 'unified'

const highlight = async (content: string) => {
  const regex = /(<pre><code class="language-.*?">[\s\S]*?<\/code><\/pre>)/g
  let match: RegExpExecArray | null
  const matches = []

  while ((match = regex.exec(content)) !== null) {
    matches.push(match[1])
  }

  for (const match of matches) {
    const matchLanguage = match.match(/language-(.*?)"/)
    const language = matchLanguage ? matchLanguage[1] : 'plaintext'

    const file = await unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeSanitize)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(`<pre><code class="language-${language}">${match}</code></pre>`)

    const highlighted = String(file)
    content = content.replace(match, highlighted)
  }
  return content
}

export async function prerender() {
  const { posts } = await fetchPosts()

  return posts.map((post) => ({
    postId: post.id,
  }))
}

// biome-ignore lint/correctness/noEmptyPattern:
export default async function Page({}, { route }: RequestContext) {
  const postId = route.query?.postId as string

  if (!postId) {
    notFound()
  }

  const post = await fetchPost(postId)
  const content = await highlight(post.content)

  const dateText = new Date(post.publishedAt).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <div
      class={css({
        w: '100%',
        maxW: '48rem',
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <header
        class={css({
          display: 'grid',
          justifyItems: 'center',
          gap: '3rem',
        })}
      >
        <h1
          class={css({
            fontSize: '2.25rem',
            lineHeight: '2.5rem',
            fontWeight: '600',
            textWrap: 'pretty',
          })}
        >
          {post.title}
        </h1>
        <div
          class={cx(
            css({
              display: 'grid',
              justifyItems: 'center',
              gap: '0.25rem',
              fontSmoothing: 'antialiased',
            }),
            text({ size: 'sm' }),
          )}
        >
          <p
            class={css({
              fontWeight: '600',
            })}
          >
            Published
          </p>
          <time dateTime={post.publishedAt}>{dateText}</time>
        </div>
      </header>
      <div
        class={divider({
          mb: '0',
          mt: '5rem',
          orientation: 'horizontal',
          thickness: '0.125rem',
          color: 'divider',
        })}
      />
      <div
        class={css({
          mt: '5rem',
          w: '100%',
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
          letterSpacing: '0.025rem',
        })}
      >
        <div class={postContainer}>{dangerHTML(content)}</div>
      </div>
    </div>
  )
}

const postContainer = css({
  w: '100%',
  fontWeight: '400',

  '& h1, h2, h3, h4, h5, h6': {
    mt: '4rem',
  },

  '& h1, h2': {
    mb: '0.5rem',
    py: '0.5rem',
    fontWeight: '600',
    borderBottom: '0.0625rem solid token(colors.divider)',
  },

  '& h1': {
    fontSize: '1.875rem',
    lineHeight: '2.25rem',
  },

  '& h2': {
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },

  '& h3': {
    _before: {
      mr: '0.5rem',
      content: '"#"',
    },
  },

  '& h4': {
    _before: {
      mr: '0.5rem',
      content: '"##"',
    },
  },

  '& h5': {
    _before: {
      mr: '0.5rem',
      content: '"###"',
    },
  },

  '& h3, h4, h5, h6': {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    mb: '0.75rem',
    fontWeight: '400',
  },

  '& a': {
    color: 'link',
    mx: '1px',
    textDecoration: 'underline',
  },

  '& figure': {
    '& img': {
      w: '100%',
      mx: 'auto',
      my: '2rem',
      borderRadius: '0.5rem',
    },
  },

  '& ul': {
    ml: '1.75rem',
    mb: '2rem',
    listStyleType: 'disc',

    '& li': {
      mx: '0',
      fontSize: '1rem',
      color: 'post.base',
    },
  },

  '& hr': {
    my: '2rem',
    h: '1px',
    border: 'none',
    bg: 'divider',
  },

  '& p': {
    mb: '2rem',
    fontSize: '1rem',
    color: 'post.base',
  },

  '& code': {
    p: '0.25rem 0.5rem',
    mx: '0.25rem',
    borderRadius: '0.25rem',
    fontSmoothing: 'antialiased',
    bg: 'bg.codeBlock',
    color: 'post.code',
  },

  '& pre': {
    pb: '2rem',

    '& code': {
      mx: 0,
      borderRadius: '0.5rem',
      fontSize: '1rem',
      overflowX: 'scroll',
    },
  },
})
