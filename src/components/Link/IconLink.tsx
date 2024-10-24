import { css, cx } from 'styled-system/css'
type Props = {
  href: string
  areaLabel: string
  src: string
  alt: string
  target?: string
  linkStyle?: string
  iconStyle?: string
}

export default function IconLink({
  href,
  areaLabel,
  src,
  alt,
  target = '_blank',
  linkStyle,
  iconStyle,
}: Props) {
  return (
    <a
      class={cx(
        css({
          textDecoration: 'underline',
          _hover: {
            opacity: '0.7',
          },
        }),
        linkStyle,
      )}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noreferrer' : undefined}
      aria-label={areaLabel}
    >
      <img
        src={src}
        class={cx(
          css({
            objectFit: 'fill',
            w: '24px',
            h: '24px',
          }),
          iconStyle,
        )}
        alt={alt}
        loading='lazy'
        decoding='async'
      />
    </a>
  )
}
