const express = require("express");
const router = express.Router();
const demoController = require("../controllers/demoController");
const auth = require("../middleware/auth")
// use auth for protected routes

router.get("/demo1", demoController.controllerDemoOne);
router.post("/demo2", auth, demoController.controllerDemoTwo);


module.exports = router;
