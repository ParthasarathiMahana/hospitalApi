const Patient = require('../../../models/patients');
const Report = require('../../../models/reports');

module.exports.reg=async (req, res)=>{
    try{
        let patients = await Patient.findOne({phone: req.body.phone});
        if(patients == null){
            Patient.create({phone: req.body.phone, patientName: req.body.patientName});
            return res.json(200, {message: "New patient added."})
        }

        return res.json(422, {message: "patient already exists.", data:{
            name: patients.patientName,
            phone: patients.phone
        }});
    }catch(error){
        return res.json(500, {message: "Internal server error."});
    }
}

module.exports.createReport = async (req, res)=>{
    try{
        let patient = await Patient.findById(req.query.id);
        Report.create({patientId: req.query.id, createdByDoctor: req.body.createdByDoctor, status:req.body.status});
        return res.json(200, {message: "report created", name: patient.patientName});
    }catch(err){
        return res.json(422,{message: "Patient not found."});
    }
}

module.exports.listAllReports = async (req, res)=>{
    try{
        let patient = await Patient.findById(req.query.id);
        try{
            let reports = await Report.find({patientId: req.query.id});
            return res.json(200, {data: reports});
        }catch(err){
            return res.json(422, {message: "No reports were added as of now."})
        }
    }catch(err){
        return res.json(422, {message: "Error in finding patient."})
    }
}