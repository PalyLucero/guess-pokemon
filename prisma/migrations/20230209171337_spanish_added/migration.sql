/*
  Warnings:

  - You are about to drop the column `clues` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `types` on the `Pokemon` table. All the data in the column will be lost.
  - Added the required column `descriptionEnglish` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionSpanish` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typesEnglish` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typesSpanish` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Pokemon_name_key` ON `Pokemon`;

-- AlterTable
ALTER TABLE `Pokemon` DROP COLUMN `clues`,
    DROP COLUMN `description`,
    DROP COLUMN `types`,
    ADD COLUMN `descriptionEnglish` LONGTEXT NOT NULL,
    ADD COLUMN `descriptionSpanish` LONGTEXT NOT NULL,
    ADD COLUMN `typesEnglish` VARCHAR(191) NOT NULL,
    ADD COLUMN `typesSpanish` VARCHAR(191) NOT NULL;
