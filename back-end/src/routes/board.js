const express = require("express");
const boardController = require("../controllers/boardController.js");
const router = express.Router();

router.get("/", boardController.getAllBoards);

router.delete("/:id", boardController.deleteBoardById);

router.post("/", boardController.createBoards);

module.exports = router;
