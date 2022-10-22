import React from 'react'

import PropTypes from 'prop-types'

import './pasted-image1.css'

const PastedImage1 = (props) => {
  return (
    <div className={`pasted-image1-container ${props.rootClassName} `}>
      <img
        alt={props.pastedImage_alt}
        src={props.pastedImage_src}
        className="pasted-image1-pasted-image"
      />
    </div>
  )
}

PastedImage1.defaultProps = {
  rootClassName: '',
  pastedImage_src: '/playground_assets/pastedimage-ji0f-200h.png',
  pastedImage_alt: 'pastedImage',
}

PastedImage1.propTypes = {
  rootClassName: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
}

export default PastedImage1
