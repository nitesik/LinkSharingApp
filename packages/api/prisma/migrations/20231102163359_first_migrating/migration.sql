-- CreateTable
CREATE TABLE "User" (
    "ID" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_ID_key" ON "User"("ID");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
