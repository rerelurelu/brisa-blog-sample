type Props = {
  slot?: string
  style?: string
  width?: string
  height?: string
  fill?: string
}

export default function CaretLeft({
  slot,
  style,
  width = '24',
  height = '24',
  fill = 'inherit',
}: Props) {
  return (
    <div slot={slot} class={style}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        fill={fill}
        viewBox='0 0 256 256'
      >
        <title>Left arrow icon</title>
        <path d='M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z' />
      </svg>
    </div>
  )
}
