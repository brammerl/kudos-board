const prisma = require("./src/db/db.js");
const fs = require("fs");
const path = require("path");

async function seed() {
  try {
    console.log("🌱 Seeding database...\n");

    // Clear existing data (in order due to relations)
    await prisma.kudos.deleteMany();
    // await prisma.board.deleteMany();
    // await prisma.category.deleteMany();

    // Load JSON data
    const kudosData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./seed-data/kudos.json"), "utf8")
    );

    const categoryData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./seed-data/category.json"), "utf8")
    );

    const boardData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./seed-data/board.json"), "utf8")
    );

    // Seed categories
    // for (const category of categoryData.categories) {
    //   const { category_name, display_name } = category;
    //   await prisma.category.create({
    //     data: {
    //       category_name,
    //       display_name,
    //     },
    //   });
    // }

    // console.log("seeded categories");

    // Seed boards
    // for (const board of boardData.boards) {
    //   const { title, img_url, category_id, description } = board;
    //   const createdBoard = await prisma.board.create({
    //     data: {
    //       title,
    //       img_url,
    //       category_id,
    //       description,
    //     },
    //   });

    //   console.log(`✅ Created board #${createdBoard.id}`);
    // }

    //  Seed kudos for boards
    for (const kudos of kudosData.kudos) {
      const { description, title, img_url, board_id, upvote_count } = kudos;
      const createdKudos = await prisma.kudos.create({
        data: {
          title,
          img_url,
          board_id,
          description,
          upvote_count,
        },
      });

      console.log(`✅ Created kudos #${createdKudos.id}`);
    }

    console.log("\n🎉 Seeding complete!");
  } catch (err) {
    console.error("❌ Error seeding:", err);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
