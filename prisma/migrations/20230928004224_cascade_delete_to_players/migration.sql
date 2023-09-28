-- DropForeignKey
ALTER TABLE "jogadores" DROP CONSTRAINT "jogadores_timeId_fkey";

-- AddForeignKey
ALTER TABLE "jogadores" ADD CONSTRAINT "jogadores_timeId_fkey" FOREIGN KEY ("timeId") REFERENCES "times"("id") ON DELETE CASCADE ON UPDATE CASCADE;
