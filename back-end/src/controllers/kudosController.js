const prisma = require("../db/db");

const getKudosByBoardId = async (req, res, next) => {
  try {
    const { boardId } = req.params;

    const fetchedKudos = await prisma.kudos.findMany({
      where: {
        board_id: parseInt(boardId),
      },
      include: {
        board: {
          select: {
            title: true,
            description: true,
          },
        },
      },
    });

    res.json(fetchedKudos);
  } catch (e) {
    next(e);
  }
};

const createKudos = async (req, res, next) => {
  try {
    const { data } = req.body;

    if (!data.length) {
      throw Error("No kudos provided");
    }

    const createdKudos = await prisma.kudos.createManyAndReturn({
      data,
    });

    res.json(createdKudos);
  } catch (e) {
    next(e);
  }
};

module.exports = { createKudos, getKudosByBoardId };
