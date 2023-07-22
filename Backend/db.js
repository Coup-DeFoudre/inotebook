const mongoose = require('mongoose');
const URI = "mongodb://0.0.0.0:27017/iNotebook";


const connectDB = async () => {
    await mongoose.connect(URI);
    console.log('Database connected!');
};

module.exports = connectDB;