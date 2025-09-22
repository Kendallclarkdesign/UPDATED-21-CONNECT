import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact4.css'

const Contact4 = (props) => {
  return (
    <div className="contact4-contact20 thq-section-padding">
      <div className="contact4-max-width thq-section-max-width">
        <div className="contact4-section-title">
          <span className="thq-body-small">
            {props.content2 ?? (
              <Fragment>
                <span className="contact4-text18">
                  Feel free to reach out for any inquiries or project
                  collaborations.
                </span>
              </Fragment>
            )}
          </span>
          <div className="contact4-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact4-text15">Get in Touch</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact4-text20">
                    We&apos;d love to hear from you. Drop us a message and
                    we&apos;ll get back to you as soon as possible.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact4-row">
          <div className="contact4-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact4-contact-info">
              <div className="contact4-content3">
                <h3 className="contact4-text13 thq-heading-3">Email</h3>
                <p className="contact4-text14 thq-body-large">
                  {props.content3 ?? (
                    <Fragment>
                      <span className="contact4-text17">
                        Follow us on social media for the latest updates and
                        projects.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <a
                href="mailto:?subject=Detail About Service"
                className="contact4-email thq-body-small"
              >
                {props.email1 ?? (
                  <Fragment>
                    <span className="contact4-text16">
                      21connectdigital@gmail.com
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://www.linkedin.com/in/kendallclarkdev/"
                target="_blank"
                rel="noreferrer noopener"
                className="contact4-link thq-body-small"
              >
                {props.email11 ?? (
                  <Fragment>
                    <span className="contact4-text19">Linkedin</span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact4.defaultProps = {
  heading1: undefined,
  email1: undefined,
  content3: undefined,
  content2: undefined,
  email11: undefined,
  content1: undefined,
}

Contact4.propTypes = {
  heading1: PropTypes.element,
  email1: PropTypes.element,
  content3: PropTypes.element,
  content2: PropTypes.element,
  email11: PropTypes.element,
  content1: PropTypes.element,
}

export default Contact4
