import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    id: String,
    title: String,
    description: String,
    due_date: String,
    priority: String,
});

const Task = model('Task', taskSchema)

export default Task
