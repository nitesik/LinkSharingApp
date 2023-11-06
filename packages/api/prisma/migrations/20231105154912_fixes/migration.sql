/*
  Warnings:

  - You are about to drop the column `links` on the `Details` table. All the data in the column will be lost.
  - Added the required column `linksPlatform` to the `Details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Details" DROP COLUMN "links",
ADD COLUMN     "linksPlatform" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Links" (
    "platform" TEXT NOT NULL,
    "links" TEXT NOT NULL,
    "detailsUserID" TEXT NOT NULL,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("platform")
);

-- AddForeignKey
ALTER TABLE "Links" ADD CONSTRAINT "Links_detailsUserID_fkey" FOREIGN KEY ("detailsUserID") REFERENCES "Details"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;
