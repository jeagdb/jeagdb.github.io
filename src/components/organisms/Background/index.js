import Sketch from 'react-p5'
import styled from 'styled-components'

import { animate, generate } from '../../../utils/points'
import { WIDTH, HEIGHT, ITERATIONS } from '../../../config/background'

const Animation = styled(Sketch)`
  z-index: -1;
  position: absolute;
`

const Background = ({ ...props }) => {
  let points = []
  let ctx = null

  const setup = (p, canvasParentRef) => {
    p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
    const canvas = document.getElementById('defaultCanvas0')
    ctx = canvas.getContext('2d')

    p.background('#000')
    p.noStroke()

    points = generate(ITERATIONS, WIDTH, HEIGHT)
  }

  const windowResized = (p) => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  const draw = (p) => {
    points = animate(p, ctx, points, WIDTH, HEIGHT)
  }

  return (
    <Animation
      {...props}
      draw={draw}
      setup={setup}
      windowResized={windowResized} />
  )
}

export default Background
