import { ADD_TODO } from "../types";

export interface IAddTodo {
  type: 'ADD_TODO'
  id: string
  payload: {
    text: string
    timeCreate: string
  }
}

const addTodo = (text: string, timeCreate: string, id: string): IAddTodo => ({
  type: ADD_TODO,
  id: id,
  payload: {
    text,
    timeCreate,
  }
})

export default addTodo