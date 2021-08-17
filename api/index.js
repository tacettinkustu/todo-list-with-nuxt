const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://tacettinkustu:123456Abc@todoapi.eohdf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const TodoModel = mongoose.model("todo", { text: String })

app.get("/get-all", (req, res) => {

})

app.post("/save", (req, res) => {
    console.log("************")
    const newTodo = new TodoModel({
        text: req.body.todoText
    })
    newTodo.save().then(response => {
        res.status(200).json({
            data: response
        })
    })

})

app.delete("/delete", (req, res) => {

})

app.put("/update", (req, res) => {

})

module.exports = {
    path: "./api",
    handler: app
}