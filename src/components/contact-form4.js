import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form4.css'

const ContactForm4 = (props) => {
  return (
    <div
      id={props.contactForm4Id}
      className="contact-form4-contact9 thq-section-padding"
    >
      <div className="thq-flex-row thq-section-max-width contact-form4-max-width">
        <div className="contact-form4-content1 thq-flex-column">
          <div className="contact-form4-section-title thq-card">
            <span className="thq-body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="contact-form4-text21">
                    Get in touch with us
                  </span>
                </Fragment>
              )}
            </span>
            <div className="contact-form4-content2">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact-form4-text20">Contact us</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact-form4-text19">
                      We&apos;d love to hear from you. Drop us a message and
                      we&apos;ll get back to you as soon as possible.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <form className="thq-card">
            <form
              action="https://formspree.io/f/mnnzryjl"
              method="POST"
              className="contact-form4-form2"
            >
              <label className="contact-form4-text13">
                <span>
                  {' '}
                  Your email:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <input type="email" name="email" className="input" />
              </label>
              <label className="contact-form4-text15">
                <span>
                  {' '}
                  Your message:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <textarea name="message" className="textarea"></textarea>
              </label>
              <button type="submit" className="contact-form4-button button">
                <span>
                  {props.button ?? (
                    <Fragment>
                      <span className="contact-form4-text18">Send</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </form>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm4.defaultProps = {
  button: undefined,
  contactForm4Id: '',
  content1: undefined,
  heading1: undefined,
  content2: undefined,
}

ContactForm4.propTypes = {
  button: PropTypes.element,
  contactForm4Id: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  content2: PropTypes.element,
}

export default ContactForm4
