const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {type: String, required: [true, "User name is required"]},
    email: {type: String, required: [true, "User email is required"], unique: true},
    password: {type: String, required: [true, "User password is required"]},
    role: {type: String, enum: ['admin', 'user'], default: 'user'},
    isActive: {type: Boolean, default: true},
},
{
    timestamps: true,
});

module.exports = mongoose.model('user', userSchema);