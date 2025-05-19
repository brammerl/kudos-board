-- DropForeignKey
ALTER TABLE "Kudos" DROP CONSTRAINT "Kudos_board_id_fkey";

-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "description" TEXT;

-- AddForeignKey
ALTER TABLE "Kudos" ADD CONSTRAINT "Kudos_board_id_fkey" FOREIGN KEY ("board_id") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;
