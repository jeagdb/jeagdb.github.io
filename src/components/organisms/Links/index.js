import Sketch from 'react-p5'
import styled from 'styled-components'

import { animateLink } from '../../../utils/Links'
import { isMouseInsideText } from '../../../utils'
import { applyForce, generateParticules, showParticules, updateParticules } from '../../../utils/Mouse'

const Container = styled.div`
  display: flex;
`
const Stickers = styled.a`
  z-index: 2;
  top: 32px;
  left: 32px;
  position: absolute;
`
const Image = styled.img`
  max-width: 80px;
`
const Animation = styled(Sketch)`
`

const Links = ({ ...props }) => {
  let particules = []
  const text = 'Notes'

  const setup = (p, canvasParentRef) => {
    p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentRef)
    particules = generateParticules(p, particules, 1)

    p.noStroke()
  }

  const windowResized = (p) => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  const draw = (p) => {
    p.clear()
    animateLink(p, text)

    particules = applyForce(p, particules)
    particules = generateParticules(p, particules, 1)

    showParticules(p, particules)

    particules = updateParticules(particules)
  }

  const mouseClicked = (p) => {
    if (isMouseInsideText(p, text, (p.windowWidth - p.textWidth(text)) / 2, p.windowHeight / 2)) {
      alert('hello')
    }
  }

  return (
    <Container>
      <Stickers
        rel='noreferrer'
        href='https://github.com/jeagdb'
        target='_blank'>
        <Image src={require('../../../images/github.png')}></Image>
      </Stickers>
      <Animation
        {...props}
        draw={draw}
        setup={setup}
        mouseClicked={mouseClicked}
        windowResized={windowResized} />
    </Container>
  )
}

export default Links
