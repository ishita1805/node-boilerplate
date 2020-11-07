const express = require("express");
const router = express.Router();
const demoController = require("../controllers/demoController");
const auth = require("../middleware/auth")
const paginateGet = require ("../middleware/paginateGet")
const paginatePost = require ("../middleware/paginatePost")
// use auth for protected routes
//  use paginateGet for get requests and paginatePost for post requests

router.get("/v1/demo1", demoController.controllerDemoOne);
router.post("/v1/demo2", auth, paginatePost, demoController.controllerDemoTwo);


module.exports = router;
