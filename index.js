const express = require('express');
const PORT =8000;
const app = express();
const passportJWT = require('./configs/passport-jwt-strategy');
const mongoose = require('mongoose')
const mongoDB = require('./configs/mongoose');
const Doctor = require('./models/doctors');

app.use(express.urlencoded());

app.use('/', require('./routes'))

app.listen(PORT,(err)=>{
    if(err){
        return console.log(err);
    }

    console.log("server is up and runnig on port:", PORT);
})