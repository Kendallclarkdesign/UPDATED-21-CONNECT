import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form5.css'

const ContactForm5 = (props) => {
  return (
    <div className="contact-form5-contact1 thq-section-padding">
      <div className="thq-flex-column thq-section-max-width">
        <div className="contact-form5-section-title thq-flex-column">
          <div className="contact-form5-content">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact-form5-text24">
                    Start Your Project Today
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="thq-body-small contact-form5-text11">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact-form5-text25">
                    Tell us a bit about your vision, and we’ll take it from
                    here.
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
        <form
          name="Client Contact"
          enctype="multipart/form-data"
          autoComplete="on"
          className="contact-form5-form thq-flex-column"
        >
          <div className="contact-form5-container1">
            <div className="contact-form5-input1">
              <label
                htmlFor="contact-form-5-first-name"
                className="thq-body-small"
              >
                Business Name
              </label>
              <input
                type="text"
                id="contact-form-5-first-name"
                required
                placeholder="First Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form5-input2">
              <label
                htmlFor="contact-form-5-first-name"
                className="thq-body-small"
              >
                First name
              </label>
              <input
                type="text"
                id="contact-form-5-first-name"
                required
                placeholder="First Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form5-input3">
              <label
                htmlFor="contact-form-5-last-name"
                className="thq-body-small"
              >
                Last name
              </label>
              <input
                type="text"
                id="contact-form-5-last-name"
                required
                placeholder="Last Name"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form5-container2">
            <div className="contact-form5-input4">
              <label htmlFor="contact-form-5-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-5-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="contact-form5-input5">
              <label htmlFor="contact-form-5-phone" className="thq-body-small">
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-form-5-phone"
                placeholder="Phone Number"
                className="thq-input"
              />
            </div>
            <div className="contact-form5-input6">
              <label htmlFor="contact-form-5-phone" className="thq-body-small">
                Budget Range
              </label>
              <input
                type="number"
                id="contact-form-buget"
                name="Budget"
                enctype="Budget Range"
                placeholder="Phone Number"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form5-container3">
            <div className="contact-form5-input7">
              <label
                htmlFor="contact-form-5-options"
                className="thq-body-small"
              >
                Project Type
              </label>
              <div className="contact-form5-container4">
                <select
                  id="contact-form-5-options"
                  placeholder="Select one"
                  className="thq-select"
                >
                  <option value="Option 1">Website</option>
                  <option value="Option 2">App</option>
                  <option value="Option 3">E-commerce</option>
                  <option value="Option 3">AI/Custom Integration</option>
                  <option value="Option 3">Hosting Package</option>
                </select>
              </div>
            </div>
            <div className="contact-form5-input8">
              <label
                htmlFor="contact-form-5-options"
                className="thq-body-small"
              >
                Project Timeline
              </label>
              <div className="contact-form5-container5">
                <select
                  id="contact-form-5-options"
                  placeholder="Select one"
                  className="thq-select"
                >
                  <option value="Option 1">ASAP</option>
                  <option value="1–3 months">1–3 months</option>
                  <option value="Option 3">3–6 months</option>
                  <option value="Option 3">AI/Custom Integration</option>
                  <option value="Option 3">Hosting Package</option>
                </select>
              </div>
            </div>
            <div className="contact-form5-input9">
              <label
                htmlFor="contact-form-5-options"
                className="thq-body-small"
              >
                Project Type
              </label>
              <div className="contact-form5-container6">
                <select
                  id="contact-form-5-options"
                  placeholder="Select one"
                  className="thq-select"
                >
                  <option value="Starter Plan ">
                    Starter Plan (from $149/month + Launch Fee)
                  </option>
                  <option value="Growth Plan ">
                    Growth Plan (from $299/month + Launch Fee)
                  </option>
                  <option value="Scale Plan ">
                    Scale Plan (from $499/month + Launch Fee)
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="contact-form5-container7">
            <label htmlFor="contact-form-5-message" className="thq-body-small">
              Message
            </label>
            <textarea
              id="contact-form-5-message"
              rows="3"
              placeholder="Enter your message"
              className="thq-input contact-form5-textarea"
            ></textarea>
          </div>
          <div className="contact-form5-checkbox1">
            <input
              type="checkbox"
              id="contact-form-5-check"
              checked="true"
              required="true"
              className="thq-checkbox"
            />
            <label htmlFor="contact-form-5-check" className="thq-body-small">
              I accept the Terms
            </label>
          </div>
          <label htmlFor="contact-form-5-check" className="thq-body-small">
            We’ll get back to you within 24 hours with next steps.
          </label>
          <button
            type="submit"
            className="contact-form5-button thq-button-filled"
          >
            <span className="thq-body-small">
              {props.action ?? (
                <Fragment>
                  <span className="contact-form5-text26">Submit</span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm5.defaultProps = {
  heading1: undefined,
  content1: undefined,
  action: undefined,
}

ContactForm5.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action: PropTypes.element,
}

export default ContactForm5
