const express = require("express");
const blagueController = require("../controllers/blagueController");

const router = express.Router();

// Routes des blagues
router.get("/", blagueController.getAllBlagues);
router.get("/random", blagueController.getRandomBlague);
router.get("/:id", blagueController.getBlagueById);
router.post("/", blagueController.createBlague);

module.exports = router;
