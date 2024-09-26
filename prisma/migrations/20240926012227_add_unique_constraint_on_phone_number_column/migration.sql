/*
  Warnings:

  - A unique constraint covering the columns `[phone_number]` on the table `Person` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Person_phone_number_key` ON `Person`(`phone_number`);
