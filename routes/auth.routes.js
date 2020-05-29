const Router = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const validator = require('validator').default
const jwt = require('jsonwebtoken')
const config = require('config')

const router = Router()

// /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body

    const emailValid = validator.isEmail(email)
    const passwordValid = validator.isLength(password, {min: 6, max: undefined})

    if (!emailValid || !passwordValid) {
      return res.status(400).json({
        message: 'Некорректный @email или пароль !'
      })
    }

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: "Такого пользователя не существует" })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Неверный пароль' })
    }

    const token = jwt.sign(
      {userId: user.id},
      config.get('jwtSecret'),
      {expiresIn: '1h'}
    )
    res.status(200).json({token, userId: user.id})
  } catch (e) {
    res.status(500).json({message: "Ошибка при авторизации"})
  }
})

// /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const {email, password} = req.body

    const emailValid = validator.isEmail(email)
    const passwordValid = validator.isLength(password, {min: 6, max: undefined})

    if (!emailValid || !passwordValid) {
      return res.status(400).json({
        message: 'Некорректные @mail или короткий пароль при регистрации'
      })
    }

    const candidat = await User.findOne({ email })

    if (candidat) {
      return res.status(400).json({message: "Такой пользователь уже существует"})
    }

    const bcryptPassword = await bcrypt.hash(password, 10)
    const user = new User({
      email: email,
      password: bcryptPassword
    })

    await user.save()
    res.status(201).json({ message: 'Пользователь создан' })  
  } catch (e) {
    res.status(500).json({ message: "Ошибка при регистрации" })
  }
})

module.exports = router