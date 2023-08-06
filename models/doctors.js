const mongoose = require('mongoose');

const docs = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
})

const Doctors = mongoose.model("Doctors", docs);

module.exports = Doctors;