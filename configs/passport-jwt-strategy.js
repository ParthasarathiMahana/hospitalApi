const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT =require('passport-jwt').ExtractJwt;

const Doctor = require('../models/doctors');

let opts ={
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "HospitalAPI"
}

passport.use(new JWTStrategy(opts, async function(jwtPayload, done){
    const docs = await Doctor.findById(jwtPayload._id);
    if(!docs){
        return console.log("Error finding the Doctor's Info");
    }

    if(docs){
        return done(null, docs);
    }else{
        return dine(null, false);
    }
}))