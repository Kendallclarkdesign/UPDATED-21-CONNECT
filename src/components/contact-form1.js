import React from 'react'

import PropTypes from 'prop-types'

import './contact-form1.css'

const ContactForm1 = (props) => {
  return (
    <div
      className={`contact-form1-contact1 thq-section-padding ${props.rootClassName} `}
    ></div>
  )
}

ContactForm1.defaultProps = {
  rootClassName: '',
}

ContactForm1.propTypes = {
  rootClassName: PropTypes.string,
}

export default ContactForm1
