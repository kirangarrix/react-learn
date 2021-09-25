import React from 'react'
import PropTypes from 'prop-types'

const Testing = props => {
    return (
        <div>
            testing purpose
        </div>
    )
}

Testing.propTypes = {
  name:PropTypes.array.isRequired, //ptar short code
}

export default Testing
