const Doctor = require('../../../models/doctors');
const jwt = require('jsonwebtoken');

module.exports.index = function(req, res){
    return res.json(200, {
        message: "List of Doctors",
        Doctors: []
    })
}

module.exports.reg = async(req, res)=>{
    const docs = await Doctor.find({email:req.body.email});
    if(docs == false){
        Doctor.create({email: req.body.email, password:req.body.password});
        return res.json(200,{message:"New Doctor added to the db."});
    }
    return console.log("Doctor is already present.");
}

module.exports.createSession = async function(req, res){
    try{
        let docs = await Doctor.findOne({email: req.body.email});

        if(!docs || docs.password !== req.body.password){
            return res.json(422, {message: "Invalid email or password"});
        }

        return res.json(200,{
            message:"sign in successful",
            data:{
                token: jwt.sign(docs.toJSON(), 'HospitalAPI', {expiresIn: '2000000'})
            }
        })
    }catch(err){
        return res.json(500,{message: "Internal server error"});
    }
}