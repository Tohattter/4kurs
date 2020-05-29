import Axios from "axios"
import {REGISTER} from '../types'
import showAlert, { autoCloseAlert } from "./showAlert"
import hideAlert from "./hideAlert"
import showLoader from "./showLoader"
import hideLoader from "./hideLoader"

export interface IRegister {
  type: typeof REGISTER
}

const register = (): IRegister => ({
  type: REGISTER,
})

const fetchRegister = (email: string, password: string) => {
  return dispatch => {
    dispatch(showLoader())

    Axios.post('/api/auth/register', {email,password})
      .then(
        res => {
          dispatch(showAlert('SUCCESS', `${res.data.message}. Идёт переадесация...` ))
          setTimeout(() => {
            dispatch(hideAlert())
            dispatch(register())
            dispatch(hideLoader())
          }, 2500)
        },
        e => {
          dispatch(hideLoader())
          dispatch(autoCloseAlert('ERROR', e.response.data.message, 2500))
        }
      )
  }
}

export default fetchRegister