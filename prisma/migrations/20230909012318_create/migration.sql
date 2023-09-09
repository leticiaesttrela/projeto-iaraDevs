/*
  Warnings:

  - You are about to alter the column `idade` on the `jogadores` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - Added the required column `timeId` to the `jogadores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "jogadores" ADD COLUMN     "timeId" TEXT NOT NULL,
ALTER COLUMN "idade" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "times" ALTER COLUMN "fundacao" SET DATA TYPE DATE;

-- CreateTable
CREATE TABLE "campeonatosTimes" (
    "id" TEXT NOT NULL,
    "idCampeonato" TEXT NOT NULL,
    "idTime" TEXT NOT NULL,

    CONSTRAINT "campeonatosTimes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "jogadores" ADD CONSTRAINT "jogadores_timeId_fkey" FOREIGN KEY ("timeId") REFERENCES "times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatosTimes" ADD CONSTRAINT "campeonatosTimes_idCampeonato_fkey" FOREIGN KEY ("idCampeonato") REFERENCES "campeonatos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatosTimes" ADD CONSTRAINT "campeonatosTimes_idTime_fkey" FOREIGN KEY ("idTime") REFERENCES "times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
