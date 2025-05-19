const prisma = require("../db/db.js");

const getAllBoards = async (req, res, next) => {
  try {
    const boards = await prisma.board.findMany({
      include: {
        category: true,
      },
    });
    res.json(boards);
  } catch (e) {
    next(e);
  }
};

module.exports = { getAllBoards };
