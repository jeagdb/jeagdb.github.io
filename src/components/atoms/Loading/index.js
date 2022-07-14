import PropTypes from 'prop-types'

const Loading = ({ loading }) => {
  if (loading) {
    return (
      <></>
    )
  }
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default Loading
