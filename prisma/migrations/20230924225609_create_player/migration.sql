/*
  Warnings:

  - Added the required column `position` to the `jogadores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "jogadores" ADD COLUMN     "position" TEXT NOT NULL;
