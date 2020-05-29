import { TOGGLE_TODO } from "../types";
import Axios from "axios";
import { autoCloseAlert } from "./showAlert";
import { getAxiosConfig } from "../axiosConfig";

export interface IToggleTodo {
  type: 'TOGGLE_TODO'
  payload: {
    id: string
  }
}

const toggleTodo = (id: string): IToggleTodo => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
})

export const fetchToggleTodo = (id: string) => {
  return dispatch => {
    const config = getAxiosConfig()
    const data = { id }

    Axios.post('/api/todo/toggle/checked', data, config)
      .then(res => {
        const todoId = res.data.id
        dispatch(toggleTodo(todoId))
      },
      e => {
        dispatch(autoCloseAlert( 'WARNING', e.response.data.message, 2500 ))
      })
  }
}

export default toggleTodo