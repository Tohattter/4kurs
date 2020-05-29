import React from 'react'
import SetAuth from '../containers/SetAuth'
import VisibleAlert from '../containers/VisibleAlert'

const AuthPage: React.FC = () => {
  return (
    <div className="container">
      <div className="auth-page wrapper">
        <VisibleAlert/>
        <SetAuth/>
      </div>
    </div>
  )
}

export default AuthPage