import React from 'react'

import PropTypes from 'prop-types'

import './pasted-image.css'

const PastedImage = (props) => {
  return (
    <div className={`pasted-image-container ${props.rootClassName} `}>
      <img
        alt={props.pastedImage_alt}
        src={props.pastedImage_src}
        className="pasted-image-pasted-image"
      />
    </div>
  )
}

PastedImage.defaultProps = {
  pastedImage_alt: 'pastedImage',
  rootClassName: '',
  pastedImage_src: '/playground_assets/pastedimage-ji0f-200h.png',
}

PastedImage.propTypes = {
  pastedImage_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  pastedImage_src: PropTypes.string,
}

export default PastedImage
