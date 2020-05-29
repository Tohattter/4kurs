import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import './style/style.scss'
import { useRoutes } from './routes'
import useAuth from './hooks/auth.hook'
 
const App: React.FC = () => {
  const isAuth = useAuth()
  const routes = useRoutes(isAuth)

  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  )
}

export default App