// including all necessary packages
require('dotenv').config()
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
// require('./src/db/mongoose.js')    ----  uncomment after setting your db -> details src/db/mongoose.js
const express = require('express')
const app = express()
const morgan = require('morgan');
const port =  process.env.PORT || 8080;
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')

// app.use middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(compression({
    level:6,
    threshold: 50*1000,
    filter: (req, res)=>{
        if (req.headers['x-no-compressio']) return false
        return compression.filter(req,res)
    }
}))


//  Main Route
app.get("/", async (req,res)=>{
    res.status(201).json({
        welcome:'welcome to your node boilerplate',
        port:`This docker container is running on port ${port}`,
        loadBalancing: 'refresh to checkout load balancing',
        learnMore:'Refer to the README.md file to know how to get the most out of your boilerplate',
        userRoutes:'Demo user route is available at : /user/userDemo1',
        demoRoute: 'Another demo route is available at : /demo/demo1'

    })
})


//  Routes
const userRoutes = require("./routers/user");
const demoRoutes = require("./routers/demoRoute");

// App.use middleware for routes
app.use("/user", userRoutes);
app.use("/demo",demoRoutes);


app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
})