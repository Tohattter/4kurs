import React, { useState } from 'react'
import { AuthProps } from '../containers/SetAuth'

const AuthForm: React.FC<AuthProps> = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    
    props.loginUser(email, password)

    setEmail('')
    setPassword('')
  }

  return (
    <div id="formContent">
      <h2>Авторизация</h2>
      <form>
        <input 
          type="email"
          placeholder="Email" 
          onChange={e => setEmail(e.target.value)} 
          value={email}
        />
        <input 
          type="password" 
          placeholder="Пароль" 
          onChange={e => setPassword(e.target.value)} 
          value={password}
        />
        <input
          disabled={props.isLoading} 
          type="submit" 
          className="btn btn-primary"
          value="Войти" 
          onClick = {(e) => handleClick(e)}
        />
      </form>
      <div id="formFooter">
        <a className="underlineHover" href="/register">Создать аккаунт</a>
      </div>
    </div>
  )
}

export default AuthForm