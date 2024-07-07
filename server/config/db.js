const mongoose = require("mongoose");
const mongodbConnectionString = process.env.MONGODB_DATABASE_CONNECTION_STRING;

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(mongodbConnectionString);
        console.log(`Database-Connected ${connect.connection.host}`.cyan.underline);
    } catch (err) {
        console.log("Error Connecting With Mongodb ", err);
    }
}

module.exports = connectDB;