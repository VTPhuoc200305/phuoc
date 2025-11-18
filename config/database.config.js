const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://phuocvt:na200305@cluster0.ra3gpcs.mongodb.net/?appName=Cluster0');
        console.log('MongoDB connected successfully!');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;