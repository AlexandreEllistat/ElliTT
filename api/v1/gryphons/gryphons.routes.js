const { Router } = require("express");
const router = Router();
const GryphonsHandlers = require("./gryphons.handlers");

router.get("/", GryphonsHandlers.getGryphons);

router.get("/:id", GryphonsHandlers.getGryphon);

module.exports = router;
