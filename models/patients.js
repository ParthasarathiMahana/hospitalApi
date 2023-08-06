const mongoose = require('mongoose');

const patient = new mongoose.Schema({
    phone:{
        type: String,
        required: true,
        unique: true
    },
    patientName:{
        type:String,
        unique: true,
        required: true
    }
})

const Patients = mongoose.model("Patients", patient);

module.exports = Patients;