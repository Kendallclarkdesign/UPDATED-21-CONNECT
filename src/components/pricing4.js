import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './pricing4.css'

const Pricing4 = (props) => {
  return (
    <div
      id={props.pricing4Id}
      className="pricing4-pricing10 thq-section-padding"
    >
      <div className="pricing4-max-width thq-section-max-width">
        <div className="pricing4-section-title">
          <p className="pricing4-text10 thq-body-large">
            {props.content2 ?? (
              <Fragment>
                <span className="pricing4-text63">
                  Our Plans — Simple, Transparent, All-Inclusive
                </span>
              </Fragment>
            )}
          </p>
          <div className="pricing4-content1">
            <h2 className="pricing4-text11 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="pricing4-text64">Pricing Plan</span>
                </Fragment>
              )}
            </h2>
          </div>
          <span className="pricing4-text12 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="pricing4-text72">
                  At 21 Connect Digital, we keep things easy: one monthly fee
                  that covers website or app development, hosting, ongoing
                  maintenance, and updates. A one-time Launch Fee applies to
                  cover the initial design, build, and setup of your digital
                  product.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="pricing4-content2">
          <div className="pricing4-column1 thq-card">
            <div className="pricing4-content3">
              <div className="pricing4-price1">
                <p className="pricing4-text13 thq-body-large">
                  {props.plan1 ?? (
                    <Fragment>
                      <span className="pricing4-text48">Starter Plan</span>
                    </Fragment>
                  )}
                </p>
                <h3 className="pricing4-text14 thq-heading-3">
                  {props.plan1Price ?? (
                    <Fragment>
                      <span className="pricing4-text65">$249/month</span>
                    </Fragment>
                  )}
                </h3>
                <p className="pricing4-text15 thq-body-large">
                  {props.plan1Yearly ?? (
                    <Fragment>
                      <span className="pricing4-text59">
                        Best for entrepreneurs and small businesses launching
                        their first digital presence.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="pricing4-list1">
                <div className="pricing4-list-item10">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan1Feature1 ?? (
                      <Fragment>
                        <span className="pricing4-text42">
                          Custom 1–3 page website (responsive design)
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item11">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan1Feature2 ?? (
                      <Fragment>
                        <span className="pricing4-text54">
                          Hosting + monthly maintenance
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item12">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan1Feature3 ?? (
                      <Fragment>
                        <span className="pricing4-text50">
                          Contact form &amp; basic integrations
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item13">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan1Feature32 ?? (
                      <Fragment>
                        <span className="pricing4-text61">
                          SEO setup (keywords, titles, meta tags)
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item14">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan1Feature31 ?? (
                      <Fragment>
                        <span className="pricing4-text60">Email support</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item15">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan1Feature311 ?? (
                      <Fragment>
                        <span className="pricing4-text62">
                          Launch Fee: $499 (one-time)
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing4-column2 thq-card">
            <div className="pricing4-price2">
              <div className="pricing4-price3">
                <p className="pricing4-text22 thq-body-large">
                  {props.plan2 ?? (
                    <Fragment>
                      <span className="pricing4-text46">Growth Plan</span>
                    </Fragment>
                  )}
                </p>
                <h3 className="pricing4-text23 thq-heading-3">
                  {props.plan2Price ?? (
                    <Fragment>
                      <span className="pricing4-text69">$499/month</span>
                    </Fragment>
                  )}
                </h3>
                <p className="pricing4-text24 thq-body-large">
                  {props.plan2Yearly ?? (
                    <Fragment>
                      <span className="pricing4-text71">
                        Perfect for growing businesses that need more
                        functionality and visibility.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="pricing4-list2">
                <div className="pricing4-list-item16">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature1 ?? (
                      <Fragment>
                        <span className="pricing4-text49">
                          5–7 page website or small e-commerce setup
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item17">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature2 ?? (
                      <Fragment>
                        <span className="pricing4-text43">
                          Hosting + advanced maintenance
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item18">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature3 ?? (
                      <Fragment>
                        <span className="pricing4-text70">
                          SEO optimization + monthly performance check
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item19">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature4 ?? (
                      <Fragment>
                        <span className="pricing4-text57">
                          Blog setup or content integration
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item20">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature5 ?? (
                      <Fragment>
                        <span className="pricing4-text53">
                          Priority support
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item21">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature52 ?? (
                      <Fragment>
                        <span className="pricing4-text73">
                          Launch Fee: $799 (one-time)
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing4-column3 thq-card">
            <div className="pricing4-price4">
              <div className="pricing4-price5">
                <p className="pricing4-text31 thq-body-large">
                  {props.plan21 ?? (
                    <Fragment>
                      <span className="pricing4-text56">Premium Plan</span>
                    </Fragment>
                  )}
                </p>
                <h3 className="pricing4-text32 thq-heading-3">
                  {props.plan2Price1 ?? (
                    <Fragment>
                      <span className="pricing4-text58">$899/month</span>
                    </Fragment>
                  )}
                </h3>
                <p className="pricing4-text33 thq-body-large">
                  {props.plan2Yearly1 ?? (
                    <Fragment>
                      <span className="pricing4-text47">
                        For businesses that need a powerful, scalable platform
                        with advanced features.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="pricing4-list3">
                <div className="pricing4-list-item22">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature11 ?? (
                      <Fragment>
                        <span className="pricing4-text55">
                          Custom website or app (unlimited pages/features)
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item23">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature21 ?? (
                      <Fragment>
                        <span className="pricing4-text44">
                          Hosting + premium maintenance + security updates
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item24">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature31 ?? (
                      <Fragment>
                        <span className="pricing4-text68">
                          E-commerce with payment gateways &amp; product
                          management
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item25">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature41 ?? (
                      <Fragment>
                        <span className="pricing4-text66">
                          AI tools integration (chatbots, automation,
                          personalization)
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item26">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature51 ?? (
                      <Fragment>
                        <span className="pricing4-text67">
                          Ongoing SEO optimization &amp; reporting
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item27">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature511 ?? (
                      <Fragment>
                        <span className="pricing4-text45">
                          Dedicated account manager
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="pricing4-list-item28">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="thq-body-small">
                    {props.plan2Feature5111 ?? (
                      <Fragment>
                        <span className="pricing4-text51">
                          Launch Fee: $1,299 (one-time)
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="pricing4-button button">
        <span>
          {props.button ?? (
            <Fragment>
              <span className="pricing4-text52">Start Your Project Today</span>
            </Fragment>
          )}
        </span>
      </button>
    </div>
  )
}

Pricing4.defaultProps = {
  plan1Feature1: undefined,
  plan2Feature2: undefined,
  plan2Feature21: undefined,
  plan2Feature511: undefined,
  plan2: undefined,
  plan2Yearly1: undefined,
  plan1: undefined,
  plan2Feature1: undefined,
  plan1Feature3: undefined,
  plan2Feature5111: undefined,
  button: undefined,
  pricing4Id: '',
  plan2Feature5: undefined,
  plan1Feature2: undefined,
  plan2Feature11: undefined,
  plan21: undefined,
  plan2Feature4: undefined,
  plan2Price1: undefined,
  plan1Yearly: undefined,
  plan1Feature31: undefined,
  plan1Feature32: undefined,
  plan1Feature311: undefined,
  content2: undefined,
  heading1: undefined,
  plan1Price: undefined,
  plan2Feature41: undefined,
  plan2Feature51: undefined,
  plan2Feature31: undefined,
  plan2Price: undefined,
  plan2Feature3: undefined,
  plan2Yearly: undefined,
  content1: undefined,
  plan2Feature52: undefined,
}

Pricing4.propTypes = {
  plan1Feature1: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan2Feature511: PropTypes.element,
  plan2: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan1: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan2Feature5111: PropTypes.element,
  button: PropTypes.element,
  pricing4Id: PropTypes.string,
  plan2Feature5: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan21: PropTypes.element,
  plan2Feature4: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan1Yearly: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan1Feature32: PropTypes.element,
  plan1Feature311: PropTypes.element,
  content2: PropTypes.element,
  heading1: PropTypes.element,
  plan1Price: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan2Feature51: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan2Price: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan2Yearly: PropTypes.element,
  content1: PropTypes.element,
  plan2Feature52: PropTypes.element,
}

export default Pricing4
