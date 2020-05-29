import Axios from "axios"
import { logout } from "./fetchAuth"
import { LOAD_TODO_LIST } from "../types"
import { ITodo } from "../reducers/todos"
import showLoader from "./showLoader"
import hideLoader from "./hideLoader"
import { getAxiosConfig } from "../axiosConfig"

export interface ILoadTodoList {
  type: typeof LOAD_TODO_LIST
  payload: {
    todoList: ITodo[]
  }
}

export const loadTodoList = (todoList: ITodo[]): ILoadTodoList => ({
  type: LOAD_TODO_LIST,
  payload: {
    todoList
  }
})

const fetchTodoList = () => {
  return dispatch => {
    const config = getAxiosConfig()
    
    dispatch(showLoader())

    Axios.get('/api/todo', config)
      .then(res => {
        dispatch(loadTodoList(res.data.todoList))
        dispatch(hideLoader())
      },
      e => {
        dispatch(logout())
        dispatch(hideLoader())
        console.log(e.response.data.message)
      })
  }
}

export default fetchTodoList