-- CreateTable
CREATE TABLE "Details" (
    "userID" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "links" JSONB[],

    CONSTRAINT "Details_pkey" PRIMARY KEY ("userID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Details_userID_key" ON "Details"("userID");
