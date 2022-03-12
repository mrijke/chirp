/*
  Warnings:

  - The primary key for the `Chirp` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Chirp" DROP CONSTRAINT "Chirp_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Chirp_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Chirp_id_seq";
