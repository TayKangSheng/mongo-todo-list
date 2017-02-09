// Mongoose Schema and Models goes here

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mongo-todo-list')
mongoose.Promise = global.Promise

const todoSchema = new mongoose.Schema({
  name: String,
  description: String,
  completed: String
}, {
  versionKey: false // You should be aware of the outcome after set to false
})

const TODO = mongoose.model('Todo', todoSchema)

module.exports = TODO
