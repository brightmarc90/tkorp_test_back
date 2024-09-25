/*
  Warnings:

  - You are about to drop the column `dateOfBirth` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `Person` table. All the data in the column will be lost.
  - Added the required column `date_of_birth` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Animal` DROP FOREIGN KEY `Animal_ownerId_fkey`;

-- AlterTable
ALTER TABLE `Animal` DROP COLUMN `dateOfBirth`,
    DROP COLUMN `ownerId`,
    ADD COLUMN `date_of_birth` DATETIME(3) NOT NULL,
    ADD COLUMN `owner_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Person` DROP COLUMN `firstName`,
    DROP COLUMN `lastName`,
    DROP COLUMN `phoneNumber`,
    ADD COLUMN `firstname` VARCHAR(64) NOT NULL,
    ADD COLUMN `lastname` VARCHAR(64) NOT NULL,
    ADD COLUMN `phone_number` CHAR(10) NOT NULL;

-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_owner_id_fkey` FOREIGN KEY (`owner_id`) REFERENCES `Person`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
