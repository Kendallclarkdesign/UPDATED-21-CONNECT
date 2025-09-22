import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Service from '../components/service'
import CustomLink from '../components/custom-link'
import Tag from '../components/tag'
import Pricing4 from '../components/pricing4'
import ContactForm4 from '../components/contact-form4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Agency (Template 4)</title>
        <meta property="og:title" content="Agency (Template 4)" />
      </Helmet>
      <header className="home-header1">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding1">
            <img alt="image" src="/logo.svg" className="home-logo1" />
            <span className="home-company1">
              <span className="home-text100">
                21 Connect
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text101">Digital</span>
            </span>
          </div>
          <div className="home-items1">
            <div className="home-links1">
              <a href="#Pricing4" className="home-link1 nav-link">
                Pricing
              </a>
              <a href="#Service" className="home-link2 nav-link">
                Work
              </a>
              <span className="home-text102 nav-link">About</span>
              <a href="#Service" className="home-link3 nav-link">
                Services
              </a>
              <a href="#ContactForm4" className="home-link4 nav-link">
                Contact
              </a>
            </div>
            <button className="home-button1 start-button button">
              <span className="home-text103">Start a project</span>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-button2 button">
              <img alt="image" src="/hamburger.svg" className="home-image1" />
              <span className="home-text104">Start a project</span>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-top">
                <div className="home-branding2">
                  <img alt="image" src="/logo.svg" className="home-logo2" />
                  <span className="home-company2">SPYRL</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon1">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-items2">
                <div className="home-links2">
                  <span className="nav-link">Work</span>
                  <span className="nav-link">Services</span>
                  <span className="nav-link">About</span>
                  <span className="nav-link">Contact</span>
                </div>
                <button className="start-button button home-button3">
                  <span className="home-text109">Start a project</span>
                </button>
              </div>
            </div>
          </div>
        </header>
      </header>
      <header className="home-hero">
        <div className="home-header2">
          <img
            alt="image"
            src="/logo%3Djust%20logo-500w.png"
            loading="lazy"
            className="home-image2"
          />
          <div className="home-container2">
            <div className="home-container3">
              <h1 className="home-title1">
                <span>
                  Design. Build.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text111">Elevate</span>
                <span className="home-text112">.</span>
                <br></br>
              </h1>
              <p className="home-description">
                <span>
                  Digital solutions that
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text115">connect,</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text117">convert</span>
                <span>
                  , and
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text119">captivate</span>
                <span>.</span>
                <br></br>
              </p>
            </div>
            <div className="home-container4">
              <Link
                to="/project-onboarding-form"
                className="home-navlink start-button button"
              >
                <span className="home-text122">Start a project</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="home-why-us">
        <div className="home-content">
          <div className="home-text123">
            <p className="home-paragraph1">
              <span className="home-text124">Why Us</span>
              <br></br>
            </p>
            <p className="home-paragraph2">
              <span className="home-text126">
                Why Choose 21 Connect Digital?
              </span>
              <br className="home-text127"></br>
              <br></br>
            </p>
            <span>
              We’re more than a digital agency  we’re your growth partner. Based
              in New York City, we understand the fast pace of business and the
              need for innovative, cost-efficient solutions.
            </span>
            <span>
              <span>
                End-to-End Services: From hosting and maintenance to design,
                SEO, and AI integration, everything is managed under one roof.
              </span>
              <br></br>
              <br></br>
              <span>
                Local Expertise: We specialize in helping NYC startups, small
                businesses, and entrepreneurs build digital experiences that
                stand out.
              </span>
              <br></br>
              <br></br>
              <span>
                Scalable Solutions: Whether you’re just starting or ready to
                expand, our websites and apps are built to grow with your
                business.
              </span>
              <br></br>
              <br></br>
              <span>
                Transparent Partnership: We keep you in the loop with fast,
                clear communication at every stage.
              </span>
            </span>
          </div>
          <a href="#ContactForm4" className="home-link5 start-button button">
            <span className="home-text141">Get in Touch</span>
          </a>
        </div>
      </section>
      <section className="home-services">
        <div className="home-header3">
          <h2 className="heading">SERVICES</h2>
        </div>
        <div className="home-grid">
          <Service
            title="Web Development"
            title1={
              <Fragment>
                <span className="home-text142">Custom Website Development</span>
              </Fragment>
            }
            serviceId="Service"
            description1={
              <Fragment>
                <span className="home-text143">
                  User-friendly, responsive websites built with CMS platforms,
                  no-code, or custom code depending on your needs.
                </span>
              </Fragment>
            }
            rootClassName="serviceroot-class-name"
          ></Service>
          <Service
            title="Strategy"
            title1={
              <Fragment>
                <span className="home-text144">Mobile App Development</span>
              </Fragment>
            }
            description1={
              <Fragment>
                <span className="home-text145">
                  Build customer-focused apps with seamless features like
                  payments, bookings, and real-time updates.
                </span>
              </Fragment>
            }
            rootClassName="serviceroot-class-name1"
          ></Service>
          <Service
            title="Marketing"
            title1={
              <Fragment>
                <span className="home-text146">
                  <span className="home-text147">AI Business Solutions</span>
                  <br></br>
                </span>
              </Fragment>
            }
            description1={
              <Fragment>
                <span className="home-text149">
                  <span>
                    Integrating AI chatbots, automation, and smart tools to
                    improve efficiency and customer experience.
                  </span>
                  <br></br>
                </span>
              </Fragment>
            }
            rootClassName="serviceroot-class-name5"
          ></Service>
          <Service
            title="Copywriting"
            title1={
              <Fragment>
                <span className="home-text152">E-Commerce Solutions</span>
              </Fragment>
            }
            description1={
              <Fragment>
                <span className="home-text153">
                  From product catalogs to secure payment gateways, we create
                  smooth online shopping experiences.
                </span>
              </Fragment>
            }
            rootClassName="serviceroot-class-name2"
          ></Service>
          <Service
            title="UI / UX"
            title1={
              <Fragment>
                <span className="home-text154">
                  <span className="home-text155">UX/UI Design</span>
                  <br></br>
                </span>
              </Fragment>
            }
            description1={
              <Fragment>
                <span className="home-text157">
                  <span>
                    Engaging, intuitive, and conversion-driven design for web
                    and mobile platforms.
                  </span>
                  <br></br>
                </span>
              </Fragment>
            }
            rootClassName="serviceroot-class-name3"
          ></Service>
          <Service
            title="Web Development"
            title1={
              <Fragment>
                <span className="home-text160">
                  <span>SEO &amp; Content Creation</span>
                  <br></br>
                </span>
              </Fragment>
            }
            description1={
              <Fragment>
                <span className="home-text163">
                  Get found on Google with SEO-optimized websites and branded
                  content that builds authority.
                </span>
              </Fragment>
            }
            rootClassName="serviceroot-class-name4"
          ></Service>
        </div>
      </section>
      <div className="home-client">
        <p className="home-text164">Ready to Build Your Next Website or App?</p>
        <p className="home-text165">
          At 21 Connect Digital, we help startups, small businesses, and growing
          brands in New York City create high-performing websites, mobile apps,
          and AI-powered solutions that drive real results. Our all-in-one
          service covers everything from custom design and development to
          hosting, maintenance, and SEO optimization so you can focus on running
          your business while we handle the tech.Whether you need an e-commerce
          platform, a book
        </p>
      </div>
      <section className="home-featured">
        <div className="home-header4">
          <h2 className="heading">Featured Work</h2>
          <div className="home-link6"></div>
        </div>
        <div className="home-list">
          <div className="home-work1">
            <a
              href="https://www.dirtbustersexcavation.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link7"
            >
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1675600360059-f5585f20e459?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxFeGNhdmF0aW9uJTIwU2VydmljZXxlbnwwfHx8fDE3NTI5NTU2MzV8MA&amp;ixlib=rb-4.1.0&amp;w=1300"
                className="home-image3"
              />
            </a>
            <div className="home-details1">
              <div className="home-header5">
                <div className="home-heading1">
                  <a
                    href="https://www.dirtbustersexcavation.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-text166"
                  >
                    dirtbusters
                  </a>
                  <a
                    href="http://dirtbustersexcavation.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link8"
                  >
                    <CustomLink
                      caption="View Website"
                      className="home-component16"
                    ></CustomLink>
                  </a>
                </div>
                <span className="home-text167">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="home-tags1">
                <Tag></Tag>
                <Tag tag="Framer"></Tag>
                <Tag tag="Business Consulting" tag1="Branding"></Tag>
              </div>
            </div>
          </div>
          <div className="home-work2">
            <a
              href="https://hausofalt.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link9"
            >
              <img
                alt="image"
                src="/screen%20shot%202025-08-05%20at%204.17.40%20pm-1300w.png"
                className="home-image4"
              />
            </a>
            <div className="home-details2">
              <div className="home-header6">
                <div className="home-heading2">
                  <a
                    href="https://hausofalt.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-text168"
                  >
                    haus of alT - Fashion Brand
                  </a>
                  <CustomLink
                    caption="View Website"
                    className="home-component20"
                  ></CustomLink>
                </div>
                <span className="home-text169">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="home-tags2">
                <Tag tag="Framer" tag1="Figma"></Tag>
                <Tag tag="Strategy"></Tag>
                <Tag tag="Web Development" tag1="UX/UI Design"></Tag>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="home-footer"></footer>
      <Pricing4
        plan1={
          <Fragment>
            <span className="home-text170">Starter Plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text171">Growth Plan</span>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="home-text172">Start Your Project Today</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text173">Premium Plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text174">Our Plans</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text175">
              At 21 Connect Digital, we keep things easy: one monthly fee that
              covers website or app development, hosting, ongoing maintenance,
              and updates. A one-time Launch Fee applies to cover the initial
              design, build, and setup of your digital product.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text176">Pricing Section</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text177">$249/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text178">$499/month</span>
          </Fragment>
        }
        pricing4Id="Pricing4"
        plan1Yearly={
          <Fragment>
            <span className="home-text179">
              Best for entrepreneurs and small businesses launching their first
              digital presence.
            </span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text180">$899/month</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text181">
              Perfect for growing businesses that need more functionality and
              visibility.
            </span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text182">
              For businesses that need a powerful, scalable platform with
              advanced features.
            </span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text183">
              Custom 1–3 page website (responsive design)
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text184">Hosting + monthly maintenance</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text185">
              Contact form &amp; basic integrations
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text186">
              5–7 page website or small e-commerce setup
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text187">Hosting + advanced maintenance</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text188">
              SEO optimization + monthly performance check
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text189">
              Blog setup or content integration
            </span>
          </Fragment>
        }
        plan2Feature5={
          <Fragment>
            <span className="home-text190">Priority support</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text191">Email support</span>
          </Fragment>
        }
        plan1Feature32={
          <Fragment>
            <span className="home-text192">
              SEO setup (keywords, titles, meta tags)
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text193">
              Custom website or app (unlimited pages/features)
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text194">
              Hosting + premium maintenance + security updates
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text195">
              E-commerce with payment gateways &amp; product management
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text196">
              AI tools integration (chatbots, automation, personalization)
            </span>
          </Fragment>
        }
        plan2Feature51={
          <Fragment>
            <span className="home-text197">
              Ongoing SEO optimization &amp; reporting
            </span>
          </Fragment>
        }
        plan2Feature52={
          <Fragment>
            <span className="home-text198">Launch Fee: $799 (one-time)</span>
          </Fragment>
        }
        plan1Feature311={
          <Fragment>
            <span className="home-text199">Launch Fee: $499 (one-time)</span>
          </Fragment>
        }
        plan2Feature511={
          <Fragment>
            <span className="home-text200">Dedicated account manager</span>
          </Fragment>
        }
        plan2Feature5111={
          <Fragment>
            <span className="home-text201">Launch Fee: $1,299 (one-time)</span>
          </Fragment>
        }
      ></Pricing4>
      <ContactForm4
        button={
          <Fragment>
            <span className="home-text202">Send</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text203">
              <span>Let’s Work Together</span>
              <br></br>
              <span>
                Whether you’re ready to launch a new website, build a mobile
                app, or need help with AI integration, we’re here to make it
                happen.
              </span>
              <br></br>
              <br></br>
              <span>
                📍 Based in LA &amp; NYC, serving clients locally and worldwide.
              </span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text212">
              <span>Let’s Work Together</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text215">Contact us</span>
          </Fragment>
        }
        contactForm4Id="ContactForm4"
      ></ContactForm4>
      <div className="home-container5">
        <section className="home-information">
          <div className="home-details3">
            <div className="home-header7">
              <div className="home-branding3">
                <span className="home-company3">
                  <span className="home-text216">
                    21 connect
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text217">Digital </span>
                </span>
              </div>
              <div className="home-location1"></div>
            </div>
            <div className="home-location2">
              <span className="home-caption">Let&apos;s talk</span>
              <span className="home-value">21connectdigital@gmail.com</span>
            </div>
          </div>
          <div className="home-links3">
            <span className="home-social social">Linkedin</span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
