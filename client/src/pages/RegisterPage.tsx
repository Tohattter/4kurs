import React from 'react'
import VisibleAlert from '../containers/VisibleAlert'
import SetRegister from '../containers/SetRegister'

const RegisterPage: React.FC = () => {
  return (
    <div className="container">
      <div className="wrapper register-page">
        <VisibleAlert/>
        <SetRegister/>
      </div>
    </div>
  )
}

export default RegisterPage