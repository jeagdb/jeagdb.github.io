import styled, { keyframes } from 'styled-components'

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 100%;
  }

  50% {
    background-position: 100% 0%;
  }

  100% {
    background-position: 0% 100%;
  }
`
const AnimateBackground = styled.div`
  background: linear-gradient(20deg, #FBEEC1, #659DBD, #DAAD86, #8D8741);
  background-size: 150% 150%;
  animation-name: ${gradientAnimation};
  animation-duration: 40s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
`

export default AnimateBackground
