/*
  Warnings:

  - You are about to drop the column `Links` on the `Details` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Details" DROP COLUMN "Links";

-- CreateTable
CREATE TABLE "Links" (
    "platform" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "detailsUserID" TEXT NOT NULL,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("platform")
);

-- AddForeignKey
ALTER TABLE "Links" ADD CONSTRAINT "Links_detailsUserID_fkey" FOREIGN KEY ("detailsUserID") REFERENCES "Details"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;
