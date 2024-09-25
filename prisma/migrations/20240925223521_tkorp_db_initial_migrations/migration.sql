-- CreateTable
CREATE TABLE `Person` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lastName` VARCHAR(64) NOT NULL,
    `firstName` VARCHAR(64) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phoneNumber` CHAR(10) NOT NULL,

    UNIQUE INDEX `Person_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Animal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(64) NOT NULL,
    `dateOfBirth` DATETIME(3) NOT NULL,
    `species` VARCHAR(64) NOT NULL,
    `breed` VARCHAR(64) NOT NULL,
    `color` VARCHAR(64) NOT NULL,
    `weight` DOUBLE NOT NULL,
    `ownerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Animal` ADD CONSTRAINT `Animal_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `Person`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
