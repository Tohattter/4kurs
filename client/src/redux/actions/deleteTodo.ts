import { DELETE_TODO } from "../types"
import Axios from "axios"
import { autoCloseAlert } from "./showAlert"
import { getAxiosConfig } from "../axiosConfig"

export interface IDeleteTodo {
  type: 'DELETE_TODO'
  payload: {
    id: string
  }
}

const deleteTodo = (id: string): IDeleteTodo => ({
  type: DELETE_TODO,
  payload: {
    id
  }
})

export const fetchDeleteTodo = (id: string) => {
  return dispatch => {
    const config = getAxiosConfig()
    const data = { id }

    Axios.post('/api/todo/delete', data, config)
      .then(res => {
        const todoId = res.data.id
        dispatch(deleteTodo(todoId))
      },
      e => {
        dispatch(autoCloseAlert( 'WARNING', e.response.data.message, 2500 ))
      })
  }
}

export default deleteTodo