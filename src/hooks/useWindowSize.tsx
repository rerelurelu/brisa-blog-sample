import type { WebContext } from 'brisa'

export const useWindowSize = (webContext: WebContext) => {
  const { state, onMount, cleanup } = webContext
  const getWindowSize = () => {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }

  const windowSize = state(getWindowSize())
  const onResize = () => (windowSize.value = getWindowSize())

  onMount(() => {
    window.addEventListener('resize', onResize)
  })

  cleanup(() => {
    window.removeEventListener('resize', onResize)
  })

  return windowSize.value
}
