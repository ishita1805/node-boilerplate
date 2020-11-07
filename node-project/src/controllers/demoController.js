//  uncomment after successfully setting up your mongo data base

// const mongoose = require("mongoose");
// const DemoSchema = require("../models/demoSchema");

exports.controllerDemoOne = (req,res,next) => {
    res.status(201).json({
        message:"this is a demo controller 1"
    })
}

exports.controllerDemoTwo = (req,res,next) => {
    res.status(201).json({
        message:"this is a demo controller 2"
    })
}