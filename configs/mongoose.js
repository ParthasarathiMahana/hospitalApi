require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;

db.once('open',(err)=>{
    if(!err){
        console.log('Connected to mongoDB');
    }
})

module.exports = db;