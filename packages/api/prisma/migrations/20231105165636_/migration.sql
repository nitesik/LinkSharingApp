/*
  Warnings:

  - The primary key for the `Links` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Links" DROP CONSTRAINT "Links_pkey",
ADD COLUMN     "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "Links_pkey" PRIMARY KEY ("created");
