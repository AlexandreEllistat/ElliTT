var express = require("express");
var router = express.Router();

//API version 1

console.log("Setting up routes for Gryphons");
router.use("/gryphons/", require("./gryphons/gryphons.routes"));

module.exports = router;
