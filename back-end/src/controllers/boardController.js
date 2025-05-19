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

const deleteBoardById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedBoard = await prisma.board.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.json(deletedBoard.id);
  } catch (e) {
    next(e);
  }
};

const createBoards = async (req, res, next) => {
  try {
    const { data } = req.body;

    if (!data.length) {
      throw Error("No boards provided");
    }

    const createdBoards = await prisma.board.createManyAndReturn({
      data,
    });

    res.json(createdBoards);
  } catch (e) {
    next(e);
  }
};

module.exports = { getAllBoards, deleteBoardById, createBoards };
