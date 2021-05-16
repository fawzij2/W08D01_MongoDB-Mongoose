const mongoose = require("mongoose");

const todo_list = new mongoose.Schema({
    task: String,
    description: String,
    deadline: Date,
    isCompleted: Boolean,
    priority: Number
});

module.exports = mongoose.model("Todo", todo_list);