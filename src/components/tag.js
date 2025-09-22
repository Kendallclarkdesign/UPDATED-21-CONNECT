import React from 'react'

import PropTypes from 'prop-types'

import './tag.css'

const Tag = (props) => {
  return (
    <div className="tag-container">
      <span className="tag-tag1 tag">{props.tag}</span>
      <span className="tag-tag2 tag">{props.tag1}</span>
    </div>
  )
}

Tag.defaultProps = {
  tag1: 'Branding',
  tag: 'Branding',
}

Tag.propTypes = {
  tag1: PropTypes.string,
  tag: PropTypes.string,
}

export default Tag
