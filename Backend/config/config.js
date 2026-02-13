const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb://superAdmin:super%40123%40@127.0.0.1:27017/GaneshDB?authSource=admin');
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }   
};

module.exports = connectToDB;