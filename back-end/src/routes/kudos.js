const express = require("express");
const router = express.Router();
const kudosController = require("../controllers/kudosController");

router.get("/:boardId", kudosController.getKudosByBoardId);

router.delete("/:kudosId", kudosController.deleteKudosById);

router.post("/", kudosController.createKudos);

module.exports = router;
