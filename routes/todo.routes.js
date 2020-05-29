const Router = require('express')
const User = require('../models/User')
const Todo = require('../models/Todo')
const auth = require('../middleware/auth.middleware')

const router = Router()

router.post('/create', auth, async (req, res) => {
  try {
    const {text} = req.body

    if (text === '') {
      return res.status(401).json({message: 'Введите название заметки'})
    }
 
    const userId = req.user.userId
    const user = await User.findById(userId).exec()

    const date = new Date()
    const dateString = `${date.toDateString()}, (${date.toLocaleTimeString()})`

    const todo = new Todo({
      text,
      date: dateString,
      owner: user._id
    })
  
    await todo.save()
    user.todoList.push(todo)
    await user.save()

    res.status(201).json({todo})
  } catch (e) {
    res.status(500).json({message: "Что-то пошло не так"})
  }
})

router.get('/', auth, async (req, res) => {
  try {
    const userId = req.user.userId
    const user = await User.findById(userId).populate('todoList').exec()

    const todoList = user.todoList.map(todo => {
      return {
        _id: todo.id,
        checked: todo.checked,
        date: todo.date,
        text: todo.text
      }
    })

    res.json({ todoList })
  } catch (e) {
    res.status(500).json({message: "Что-то пошло не так"})
  }
})

router.post('/delete', auth, async (req, res) => {
  try {
    const {id} = req.body
    
    await Todo.findByIdAndRemove(id)

    const userId = req.user.userId
    const user = await User.findById(userId).exec()

    user.todoList = user.todoList.filter(todo => todo._id != id)
    await user.save()

    res.status(201).json({ id })
  } catch (e) {
    res.status(500).json({message: "Что-то пошло не так"})
  }
})


router.post('/toggle/checked', auth , async (req, res) => {
  try {
    const {id} = req.body
    const todo = await Todo.findById(id)

    todo.checked = !todo.checked
    await todo.save()

    res.status(201).json({id})
  } catch (e) {
    res.status(500).json({message: "Что-то пошло не так"})
  }
})
module.exports = router