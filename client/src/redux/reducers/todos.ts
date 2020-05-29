import { IAddTodo } from "../actions/addTodo"
import { IDeleteTodo } from "../actions/deleteTodo"
import { IToggleTodo } from "../actions/toggleTodo"
import { ILoadTodoList } from "../actions/fetchTodoList"

export interface ITodo {
  text: string
  _id: string
  checked: boolean
  date: string
}

export type TodosState = ITodo[]
type ActionType = IAddTodo | IDeleteTodo | IToggleTodo | ILoadTodoList

const todos = (state: TodosState = [], action: ActionType): TodosState => {
  switch (action.type) {
    case 'LOAD_TODO_LIST':
      return [
        ...action.payload.todoList
      ]
    case 'ADD_TODO':
      return [
        ...state,
        {
          _id: action.id,
          checked: false,
          text: action.payload.text,
          date: action.payload.timeCreate
        }
      ]
    case 'DELETE_TODO': 
      return state.filter(todo => todo._id !== action.payload.id)
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo._id === action.payload.id) {
          return {...todo, checked: !todo.checked}
        }
        return todo
      })
    default: return state
  }
}

export default todos