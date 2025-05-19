const express = require("express");
const router = express.Router();
const kudosController = require("../controllers/kudosController");

router.get("/:boardId", kudosController.getKudosByBoardId);

router.post("/", kudosController.createKudos);

module.exports = router;
