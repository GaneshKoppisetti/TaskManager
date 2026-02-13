const user = require('../models/user');

// Controller to create a new user
exports.createUser = async (req, res) => {
    try {
        console.log(`re body: ${JSON.stringify(req.body)}`)
        const { name, email, password, role, isActive } = req.body;
        const newUser = new user({ name, email, password, role, isActive });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    };
};

// Controller to get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await user.find({});
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    };
};

// Controller to update user
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password, role, isActive } = req.body;
        const updatedUser = await user.findByIdAndUpdate(id, { name, email, password, role, isActive }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message });
    };
};
// Controller to delete user
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;              
        const deletedUser = await user.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    };
};