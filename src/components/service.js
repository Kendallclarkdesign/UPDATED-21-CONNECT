import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './service.css'

const Service = (props) => {
  return (
    <div
      id={props.serviceId}
      className={`service-service ${props.rootClassName} `}
    >
      <h3 className="service-title">
        {props.title1 ?? (
          <Fragment>
            <span className="service-text1">Web Development</span>
          </Fragment>
        )}
      </h3>
      <span className="service-description">
        {props.description1 ?? (
          <Fragment>
            <span className="service-text2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

Service.defaultProps = {
  serviceId: '',
  title1: undefined,
  description1: undefined,
  rootClassName: '',
}

Service.propTypes = {
  serviceId: PropTypes.string,
  title1: PropTypes.element,
  description1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Service
