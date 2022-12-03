/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Pokemon` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Pokemon` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Pokemon_id_key` ON `Pokemon`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Pokemon_name_key` ON `Pokemon`(`name`);
