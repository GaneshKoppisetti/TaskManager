const express = require("express");
const router = express.Router();
const {createUser,getAllUsers,updateUser,deleteUser} = require('../controllers/userController');
router.post('/createUser', createUser);
router.get('/getAllUsers', getAllUsers);
router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);

module.exports = router;