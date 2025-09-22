import React from 'react'
import { Link } from 'react-router-dom'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <h2 className="thq-heading-2">
        Thanks for starting your project with 21 Connect Digital. We’ll review
        your details and contact you within 24 hours.
      </h2>
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <div className="steps2-actions">
              <Link
                to="/"
                className="steps2-button thq-button-filled thq-button-animated"
              >
                <span className="thq-body-small"> Submit </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps2
