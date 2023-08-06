const mongoose = require('mongoose');

const reports = new mongoose.Schema({
    patientId:{
        type: mongoose.ObjectId,
        required: true
    },
    createdByDoctor:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
})

const Report = mongoose.model("Report", reports);
module.exports = Report;