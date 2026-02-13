const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Task title is required"]},  
    description: {type: String, required: [true, "Task description is required"]},
    status: {type: String, enum: ['todo', 'in-progress', 'done'], default: 'todo'},
    priority: {type: String, enum: ['low', 'medium', 'high'], default: 'medium'},
    assignedTo: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    dueDate: {type: Date},
},
{
    timestamps: true,
});

module.exports = mongoose.model('task', taskSchema);