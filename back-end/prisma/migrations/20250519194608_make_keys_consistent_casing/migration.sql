/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `boardId` on the `Kudos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[category_name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category_id` to the `Board` table without a default value. This is not possible if the table is not empty.
  - Added the required column `board_id` to the `Kudos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Board" DROP CONSTRAINT "Board_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Kudos" DROP CONSTRAINT "Kudos_boardId_fkey";

-- AlterTable
ALTER TABLE "Board" DROP COLUMN "categoryId",
ADD COLUMN     "category_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Kudos" DROP COLUMN "boardId",
ADD COLUMN     "board_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category_category_name_key" ON "Category"("category_name");

-- AddForeignKey
ALTER TABLE "Board" ADD CONSTRAINT "Board_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kudos" ADD CONSTRAINT "Kudos_board_id_fkey" FOREIGN KEY ("board_id") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
