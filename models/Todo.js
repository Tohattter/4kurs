const {Schema, Types, model} = require('mongoose')

const date = new Date()
const dateString = `${date.toDateString()}, (${date.toLocaleTimeString()})`

const schema = new Schema({
  text: {type: String, required: true, default: ''},
  checked: {type: Boolean, required: true, default: false},
  date: {type: String, required: true, default: dateString},
  owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Todo', schema)