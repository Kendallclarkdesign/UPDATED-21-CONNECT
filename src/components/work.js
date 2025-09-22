import React from 'react'

import PropTypes from 'prop-types'

import CustomLink from './custom-link'
import Tag from './tag'
import './work.css'

const Work = (props) => {
  return (
    <div className="work-work">
      <img alt="image" src={props.image} className="work-image" />
      <div className="work-details">
        <div className="work-header">
          <div className="work-heading">
            <span className="work-text1">{props.title}</span>
            <a
              href="http://dirtbustersexcavation.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="work-link"
            >
              <CustomLink
                caption="View Website"
                className="work-component1"
              ></CustomLink>
            </a>
          </div>
          <span className="work-text2">{props.description}</span>
        </div>
        <div className="work-tags">
          <Tag></Tag>
          <Tag tag="Strategy"></Tag>
          <Tag tag="Web Development"></Tag>
        </div>
      </div>
    </div>
  )
}

Work.defaultProps = {
  image: '/work%20%231-1500w.png',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  title: 'dirtbusters',
}

Work.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default Work
