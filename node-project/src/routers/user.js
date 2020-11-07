const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const auth = require("../middleware/auth")
// use auth for protected routes

router.get("/userDemo1", userController.userDemoOne);
router.post("/userDemo2", auth, userController.userDemoTwo);


module.exports = router;
