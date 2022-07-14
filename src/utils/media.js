import { get } from 'lodash'
import { generateMedia } from 'styled-media-query'

export const breakpoints = {
  s: '577px',
  m: '769px',
  l: '993px',
  xl: '1401px'
}

const media = generateMedia(breakpoints)

export const isMobile = () => !window.matchMedia(`(min-width: ${get(breakpoints, 's')})`).matches

export default media
