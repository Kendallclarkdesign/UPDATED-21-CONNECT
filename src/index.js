import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ConfirmationPage from './views/confirmation-page'
import ProjectOnboardingForm from './views/project-onboarding-form'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={ConfirmationPage} exact path="/confirmation-page" />
        <Route
          component={ProjectOnboardingForm}
          exact
          path="/project-onboarding-form"
        />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
