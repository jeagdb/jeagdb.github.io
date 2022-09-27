import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

const layer1 = keyframes`
  0% { 
    box-shadow: 0px 0px 0 0px  
  }
  90% , 100% { 
    box-shadow: 20px 20px 0 -4px  
  }
`

const layer2 = keyframes`
  0% { 
    transform:  translate(0, 0) scale(1) 
  }
  100% {  
    transform: translate(-25px, -25px) scale(1)
  }
`

const Loader = styled.div`
  width:  64px;
  height: 64px;
  background: #FBEEC1;
  transform: rotateX(65deg) rotate(45deg);
  color: #8D8741;
  animation-name: ${layer1};
  animation-duration: 1s;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: #DAAD86;
    opacity: 0.9;
    animation-name: ${layer2};
    animation-duration: 1s;
    animation-direction: alternate;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`

const Loading = ({ loading }) => {
  if (loading) {
    return (
      <Loader />
    )
  }
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default Loading
