const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const auth = require("../middleware/auth");
const paginateGet = require ("../middleware/paginateGet");
const paginatePost = require ("../middleware/paginatePost");
// use auth for protected routes
//  use paginateGet for get requests and paginatePost for post requests

router.get("/v1/userDemo1", userController.userDemoOne);
router.post("/v1/userDemo2", auth, paginatePost, userController.userDemoTwo);


module.exports = router;
