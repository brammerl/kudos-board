const Prisma = require("../../generated/prisma");
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

    const normalizedData = data.map((data) => {
      return {
        ...data,
        img_url: data.img_url ?? Prisma.skip,
        upvote_count: 0,
        board_id: parseInt(data.board_id),
      };
    });

    const createdKudos = await prisma.kudos.createManyAndReturn({
      data: normalizedData,
    });

    res.json(createdKudos);
  } catch (e) {
    next(e);
  }
};

const deleteKudosById = async (req, res, next) => {
  try {
    const { kudosId } = req.params;

    const fetchedKudos = await prisma.kudos.delete({
      where: {
        id: parseInt(kudosId),
      },
    });

    res.json(fetchedKudos);
  } catch (e) {
    next(e);
  }
};

module.exports = { createKudos, getKudosByBoardId, deleteKudosById };
