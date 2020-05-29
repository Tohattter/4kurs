import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import addTodo from '../redux/actions/addTodo'
import { autoCloseAlert } from '../redux/actions/showAlert'
import Axios from 'axios'
import { getAxiosConfig } from '../redux/axiosConfig'

const AddTodo: React.FC<any> = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const config = getAxiosConfig()
    const data = { text: value }

    Axios.post('/api/todo/create', data, config) 
      .then(
        res => {
          const { _id: id, text, date } = res.data.todo

          dispatch(addTodo(text, date, id))
          dispatch(autoCloseAlert('SUCCESS', 'Заметка создана', 2500))
        },
        e => {
          dispatch(autoCloseAlert('WARNING', e.response.data.message, 2500))
        }
      )

    setValue('')
  }

  return(
    <form className="form add-todo">
      <div className="input-wrapper">
        <input 
          className="form-control form-control-lg" 
          type="text" 
          placeholder="Введите название заметки"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="btn-wrapper">
        <button 
          type="submit" 
          className="btn btn-primary"
          onClick={(e) => handleClick(e)}
        >Создать</button>
      </div>
    </form>
  )
}

export default AddTodo