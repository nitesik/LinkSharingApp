/*
  Warnings:

  - You are about to drop the `Links` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Links" DROP CONSTRAINT "Links_detailsUserID_fkey";

-- AlterTable
ALTER TABLE "Details" ADD COLUMN     "Links" JSONB[];

-- DropTable
DROP TABLE "Links";
