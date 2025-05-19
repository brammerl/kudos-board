const express = require("express");
const router = express.Router();

const boardController = require("../controllers/boardController");

router.get("/", boardController.getAllBoards);

router.delete("/:id", boardController.deleteBoardById);

router.post("/", boardController.createBoards);

module.exports = router;
