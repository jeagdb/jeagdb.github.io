import PropTypes from 'prop-types'
import { isEqual } from 'lodash'

import { ReactComponent as ArrowLeft } from './svgs/arrow-left.svg'
import { ReactComponent as ArrowDown } from './svgs/arrow-down.svg'
import { ReactComponent as ArrowRight } from './svgs/arrow-right.svg'

const Icon = ({ variant, onClick, ...props }) => {
  if (isEqual(variant, 'arrowDown')) {
    return (
      <ArrowDown
        {...props}
        onClick={onClick} />
    )
  }

  if (isEqual(variant, 'arrowRight')) {
    return (
      <ArrowRight
        {...props}
        onClick={onClick} />
    )
  }

  if (isEqual(variant, 'arrowLeft')) {
    return (
      <ArrowLeft
        {...props}
        onClick={onClick} />
    )
  }
}

Icon.propTypes = {
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Icon
