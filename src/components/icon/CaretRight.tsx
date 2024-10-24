type Props = {
  slot?: string
  style?: string
  width?: string
  height?: string
  fill?: string
}

export default function CaretRight({
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
        <title>Right arrow icon</title>
        <path d='M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z' />
      </svg>
    </div>
  )
}
