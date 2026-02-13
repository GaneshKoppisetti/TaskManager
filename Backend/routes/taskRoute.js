const express = require("express");
const router = express.Router();
const {createTask,getAllTasks,updateTask,deleteTask} = require('../controllers/taskController');
router.post('/createTask', createTask);
router.get('/getAllTasks', getAllTasks);
router.put('/updateTask/:id', updateTask);
router.delete('/deleteTask/:id', deleteTask);
module.exports = router;