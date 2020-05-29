import React, { useState } from 'react'
import { RegisterFormProps } from '../containers/SetRegister'
import {Redirect } from 'react-router-dom'

const RegisterForm: React.FC<RegisterFormProps> = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [secPassword, setSecPassword] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (secPassword === password) {
      props.registerUser(email, password)
    } else {
      props.showAlert('WARNING', 'Пароли не совпадают')
    }
    
    setEmail('')
    setPassword('')
    setSecPassword('')
  }

  return(
    <div id="formContent">
      <h2>Регистрация</h2>
      <form>
        <input 
          type="email"
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Пароль" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Повторите пароль" 
          value={secPassword}
          onChange={(e) => setSecPassword(e.target.value)}
        />
        <input 
          disabled={props.btnActive}
          type="submit" 
          className="btn btn-primary"
          value="Регистрация" 
          onClick={(e) => handleClick(e)}
        />
      </form>
      <div id="formFooter">
        <a className="underlineHover" href="/login">Уже есть аккаунт?</a>
      </div>
      {props.isRegister && (
        <Redirect to="/login"/>
      )}
    </div>
  )
}

export default RegisterForm