const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/HospitalAPI');
const db = mongoose.connection;

db.once('open',(err)=>{
    if(!err){
        console.log('Connected to mongoDB');
    }
})

module.exports = db;