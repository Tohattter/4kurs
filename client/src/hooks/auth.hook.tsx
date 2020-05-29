import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {login, storageKey} from "../redux/actions/fetchAuth"
import { RootState } from "../redux/reducers"

const useAuth = () => {
  const dispath = useDispatch()
  const isAuth = useSelector((state: RootState) => state.auth.isAuth)

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem(storageKey))
    
    if (token) {
      dispath(login())
    }
  }, [])

  return isAuth
}

export default useAuth