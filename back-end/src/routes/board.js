const express = require("express");
const boardController = require("../controllers/boardController.js");
const router = express.Router();

router.get("/", boardController.getAllBoards);

module.exports = router;
