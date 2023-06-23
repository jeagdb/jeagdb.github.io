import { ReactComponent as ArrowLeft } from './svgs/arrow-left.svg'
import { ReactComponent as ArrowDown } from './svgs/arrow-down.svg'
import { ReactComponent as ArrowRight } from './svgs/arrow-right.svg'

const Icon = ({ variant, onClick, ...props }) => {
  if (variant === 'arrowDown') {
    return (
      <ArrowDown
        {...props}
        onClick={onClick} />
    )
  }

  if (variant === 'arrowRight') {
    return (
      <ArrowRight
        {...props}
        onClick={onClick} />
    )
  }

  if (variant === 'arrowLeft') {
    return (
      <ArrowLeft
        {...props}
        onClick={onClick} />
    )
  }
}

export default Icon
