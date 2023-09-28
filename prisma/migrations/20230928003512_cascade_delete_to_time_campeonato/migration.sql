-- DropForeignKey
ALTER TABLE "campeonatosTimes" DROP CONSTRAINT "campeonatosTimes_idTime_fkey";

-- AddForeignKey
ALTER TABLE "campeonatosTimes" ADD CONSTRAINT "campeonatosTimes_idTime_fkey" FOREIGN KEY ("idTime") REFERENCES "times"("id") ON DELETE CASCADE ON UPDATE CASCADE;
