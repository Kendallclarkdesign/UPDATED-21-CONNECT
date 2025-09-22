import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import './style.css'
import ConfirmationPage from './views/confirmation-page'
import ProjectOnboardingForm from './views/project-onboarding-form'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/confirmation-page" element={<ConfirmationPage />} />
        <Route path="/project-onboarding-form" element={<ProjectOnboardingForm />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<Navigate to="*" />} />
      </Routes>
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)
