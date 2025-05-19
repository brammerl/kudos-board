/*
  Warnings:

  - Added the required column `display_name` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "display_name" TEXT NOT NULL;
