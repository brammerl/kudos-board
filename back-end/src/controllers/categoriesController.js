const prisma = require("../db/db");

const getKudosByBoardId = async (req, res, next) => {
  try {
    const fetchedKudos = await prisma.category.findMany();

    res.json(fetchedKudos);
  } catch (e) {
    next(e);
  }
};

module.exports = { getKudosByBoardId };
