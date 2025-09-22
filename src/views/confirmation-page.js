import React from 'react'

import { Helmet } from 'react-helmet'

import Steps2 from '../components/steps2'
import './confirmation-page.css'

const ConfirmationPage = (props) => {
  return (
    <div className="confirmation-page-container">
      <Helmet>
        <title>confirmation-page - Agency (Template 4)</title>
        <meta
          property="og:title"
          content="confirmation-page - Agency (Template 4)"
        />
      </Helmet>
      <header
        data-thq="thq-navbar"
        className="confirmation-page-navbar-interactive"
      >
        <div className="confirmation-page-branding1">
          <img
            alt="image"
            src="/logo.svg"
            className="confirmation-page-logo1"
          />
          <span className="confirmation-page-company1">
            <span className="confirmation-page-text10">
              21 Connect
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="confirmation-page-text11">Digital</span>
          </span>
        </div>
        <div className="confirmation-page-items1">
          <div className="confirmation-page-links1">
            <a href="#Pricing4" className="confirmation-page-link1 nav-link">
              Pricing
            </a>
            <a href="#Service" className="confirmation-page-link2 nav-link">
              Work
            </a>
            <span className="confirmation-page-text12 nav-link">About</span>
            <a href="#Service" className="confirmation-page-link3 nav-link">
              Services
            </a>
            <a
              href="#ContactForm4"
              className="confirmation-page-link4 nav-link"
            >
              Contact
            </a>
          </div>
          <button className="confirmation-page-button1 start-button button">
            <span className="confirmation-page-text13">Start a project</span>
          </button>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="confirmation-page-burger-menu"
        >
          <button className="confirmation-page-button2 button">
            <img
              alt="image"
              src="/hamburger.svg"
              className="confirmation-page-image"
            />
            <span className="confirmation-page-text14">Start a project</span>
          </button>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="confirmation-page-mobile-menu"
        >
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="confirmation-page-nav"
          >
            <div className="confirmation-page-top">
              <div className="confirmation-page-branding2">
                <img
                  alt="image"
                  src="/logo.svg"
                  className="confirmation-page-logo2"
                />
                <span className="confirmation-page-company2">SPYRL</span>
              </div>
              <div
                data-thq="thq-close-menu"
                className="confirmation-page-menu-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="confirmation-page-icon1"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="confirmation-page-items2">
              <div className="confirmation-page-links2">
                <span className="nav-link">Work</span>
                <span className="nav-link">Services</span>
                <span className="nav-link">About</span>
                <span className="nav-link">Contact</span>
              </div>
              <button className="start-button button confirmation-page-button3">
                <span className="confirmation-page-text19">
                  Start a project
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <Steps2></Steps2>
    </div>
  )
}

export default ConfirmationPage
