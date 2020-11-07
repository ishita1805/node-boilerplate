//  uncomment after successfully setting up your mongo data base

// const mongoose = require("mongoose");
// const User = require("../models/user");

exports.userDemoOne = (req,res,next) => {
    res.status(201).json({
        message:"this is user controller 1"
    })
}

exports.userDemoTwo = (req,res,next) => {
    res.status(201).json({
        message:"this is user controller 2"
    })
}