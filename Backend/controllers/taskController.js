const taskModel = require('../models/task');

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const { title, description, status, priority, assignedTo, dueDate } = req.body;
        const newTask = new taskModel({ title, description, status, priority, assignedTo, dueDate });
        await newTask.save();
        res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch (error) {
        if(error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation Error', error: error.message });
        }
        res.status(500).json({ message: 'Error creating task', error: error.message });
    };
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error: error.message });
    };
};

// Update a task
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status, priority, assignedTo, dueDate } = req.body;
        const updatedTask = await taskModel.findByIdAndUpdate(id, { title, description, status, priority, assignedTo, dueDate }, { new: true, runValidators: true });
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
    } catch (error) {
        if(error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation Error', error: error.message });
        }
        res.status(500).json({ message: 'Error updating task', error: error.message });
    };
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await taskModel.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully', task: deletedTask });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error: error.message });
    };
};