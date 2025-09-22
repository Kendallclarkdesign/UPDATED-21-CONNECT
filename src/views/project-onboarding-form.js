import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import ContactForm5 from '../components/contact-form5'
import './project-onboarding-form.css'

const ProjectOnboardingForm = (props) => {
  return (
    <div className="project-onboarding-form-container">
      <Helmet>
        <title>Project-Onboarding-Form - Agency (Template 4)</title>
        <meta
          property="og:title"
          content="Project-Onboarding-Form - Agency (Template 4)"
        />
      </Helmet>
      <header
        data-thq="thq-navbar"
        className="project-onboarding-form-navbar-interactive"
      >
        <div className="project-onboarding-form-branding1">
          <img
            alt="image"
            src="/logo.svg"
            className="project-onboarding-form-logo1"
          />
          <span className="project-onboarding-form-company1">
            <span className="project-onboarding-form-text10">
              21 Connect
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="project-onboarding-form-text11">Digital</span>
          </span>
        </div>
        <div className="project-onboarding-form-items1">
          <div className="project-onboarding-form-links1">
            <a
              href="#Pricing4"
              className="project-onboarding-form-link1 nav-link"
            >
              Pricing
            </a>
            <a
              href="#Service"
              className="project-onboarding-form-link2 nav-link"
            >
              Work
            </a>
            <span className="project-onboarding-form-text12 nav-link">
              About
            </span>
            <a
              href="#Service"
              className="project-onboarding-form-link3 nav-link"
            >
              Services
            </a>
            <a
              href="#ContactForm4"
              className="project-onboarding-form-link4 nav-link"
            >
              Contact
            </a>
          </div>
          <button className="project-onboarding-form-button1 start-button button">
            <span className="project-onboarding-form-text13">
              Start a project
            </span>
          </button>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="project-onboarding-form-burger-menu"
        >
          <button className="project-onboarding-form-button2 button">
            <img
              alt="image"
              src="/hamburger.svg"
              className="project-onboarding-form-image"
            />
            <span className="project-onboarding-form-text14">
              Start a project
            </span>
          </button>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="project-onboarding-form-mobile-menu"
        >
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="project-onboarding-form-nav"
          >
            <div className="project-onboarding-form-top">
              <div className="project-onboarding-form-branding2">
                <img
                  alt="image"
                  src="/logo.svg"
                  className="project-onboarding-form-logo2"
                />
                <span className="project-onboarding-form-company2">SPYRL</span>
              </div>
              <div
                data-thq="thq-close-menu"
                className="project-onboarding-form-menu-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="project-onboarding-form-icon1"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="project-onboarding-form-items2">
              <div className="project-onboarding-form-links2">
                <span className="nav-link">Work</span>
                <span className="nav-link">Services</span>
                <span className="nav-link">About</span>
                <span className="nav-link">Contact</span>
              </div>
              <button className="start-button button project-onboarding-form-button3">
                <span className="project-onboarding-form-text19">
                  Start a project
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <ContactForm5
        action={
          <Fragment>
            <span className="project-onboarding-form-text20">Submit</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="project-onboarding-form-text21">
              Tell us a bit about your vision, and we’ll take it from here.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="project-onboarding-form-text22">
              Start Your Project Today
            </span>
          </Fragment>
        }
      ></ContactForm5>
    </div>
  )
}

export default ProjectOnboardingForm
