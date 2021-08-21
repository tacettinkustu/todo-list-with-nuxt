const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://username:password@todoapi.eohdf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  }
)

const TodoModel = mongoose.model('todo', { text: String })

app.get('/get-all', (req, res) => {
  TodoModel.find({}, (err, docs) => {
    res.status(200).json({
      docs,
    })
  })
})

app.post('/save', (req, res) => {
  const newTodo = new TodoModel({
    text: req.body.todoText,
  })
  newTodo.save().then((response) => {
    res.status(200).json({
      data: response,
    })
  })
})

app.delete('/delete', (req, res) => {
  let todo = req.body.todo
  TodoModel.findOneAndRemove({ _id: todo._id }, () => {
    res.status(204).json({
      message: 'todo deleted',
    })
  })
})

app.put('/update', (req, res) => {
  let updatedTodo = req.body.todo
  TodoModel.findOneAndUpdate(
    { _id: updatedTodo._id },
    { text: updatedTodo.text },
    () => {
      res.status(200).json({
        message: 'todo updated',
      })
    }
  )
})

module.exports = {
  path: '/api',
  handler: app,
}
