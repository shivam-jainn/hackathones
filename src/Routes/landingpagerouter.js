const express = require('express');


const landingpagerouter = express.Router();



landingpagerouter
.route('/')
.get(getLandingPage);


function getLandingPage(req,res){
     let path = require('path');
     path = path.join(__dirname, '..','/Public/landing.html');
    res.sendFile(path);
}