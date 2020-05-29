import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Main from './pages/Main'
import AuthPage from './pages/AuthPage'
import RegisterPage from './pages/RegisterPage'
//Загружает указанные страницы
export const useRoutes = (isAuth: boolean) => {
  if (isAuth) {
    return (
      //компонент свич отвечает за совподение 
      <Switch>
        <Route exact path = '/' component = {Main}/>
        <Redirect to = '/'/>
      </Switch>
    )
  }

  return(
    <Switch>
      <Route exact path = '/login' component = {AuthPage}/>
      <Route exact path = '/register' component = {RegisterPage}/>
      <Redirect to = '/login'/>
    </Switch>
  )
}