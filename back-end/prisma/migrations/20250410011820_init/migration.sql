/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `BankCard` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Donation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "backgroundImage" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BankCard_userId_key" ON "BankCard"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Donation_userId_key" ON "Donation"("userId");
