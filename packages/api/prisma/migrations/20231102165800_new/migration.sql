/*
  Warnings:

  - Added the required column `hashed` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "hashed" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("ID");
