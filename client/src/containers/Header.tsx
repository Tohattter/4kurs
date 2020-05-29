import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/actions/fetchAuth'
import logo from '../img/list-ul-solid.svg'

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(logout())
  }

  return (
    <div className="header">
      <a className="logo" href="#">
        <img className="logo-img" src={logo}/>
        <h2 className="logo-text">Список дел</h2>
      </a>
      <button onClick={handleClick} type="button" className="btn btn-outline-dark">Выйти</button>
    </div>
  )
}

export default Header