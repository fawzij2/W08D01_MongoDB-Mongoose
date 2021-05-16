const express = require("express");
const todoModel = require("./schema");
const db = require("./db");

const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {});
app.post("/create/todo", (req, res) => {
    const task = req.body.task;
    const description = req.body.description;
    const deadline = req.body.deadline;
    console.log(deadline); 
    const isCompleted = req.body.isCompleted;
    const priority = req.body.priority;
    const todo = new todoModel({
        task: task , 
        description: description,
        deadline: deadline,
        isCompleted: isCompleted,
        priority: priority
    });


    todo.save()
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json(err)
    })
});
app.put("/update/todo", (req, res) => {});
app.delete("/delete/todo", (req, res) => {});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});