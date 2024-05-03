const mongoose = require("mongoose");
const username = encodeURIComponent(process.env.USER_NAME);
const password = encodeURIComponent(process.env.PASSWORD);
const cluster = process.env.CLUSTER_NAME;
const db_name = process.env.DATABASE_NAME;

let url = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${db_name}?retryWrites=true&w=majority`;

//const client = new mongoose(uri);

const connectDB = async()=>{
    try {
        await mongoose.connect(url, {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }    
};

module.exports = connectDB;