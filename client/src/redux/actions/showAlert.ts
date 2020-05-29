import { SHOW_ALERT } from "../types";
import hideAlert from "./hideAlert";

export type AlertType = 'ERROR' | 'WARNING' | 'SUCCESS' 

export interface IShowAlert {
  type: typeof SHOW_ALERT
  payload: {
    type: AlertType
    text: string
  }
}

const showAlert = (type: AlertType, text: string): IShowAlert => ({
  type: SHOW_ALERT,
  payload: {
    type,
    text
  }
})

export const autoCloseAlert = (type: AlertType, text: string, closeTime: number) => {
  return dispatch => {
    dispatch(showAlert(type, text))

    setTimeout(() => {
      dispatch(hideAlert())
    }, closeTime)
  }
}

export default showAlert