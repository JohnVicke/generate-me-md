/*
  Warnings:

  - You are about to drop the column `avatar_url` on the `GithubProfile` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `GithubProfile` table. All the data in the column will be lost.
  - You are about to drop the column `html_url` on the `GithubProfile` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `GithubProfile` table. All the data in the column will be lost.
  - You are about to drop the column `node_id` on the `GithubProfile` table. All the data in the column will be lost.
  - You are about to drop the column `repos_url` on the `GithubProfile` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `GithubProfile` table. All the data in the column will be lost.
  - Added the required column `htmlUrl` to the `GithubProfile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reposUrl` to the `GithubProfile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `GithubProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `GithubProfile` DROP COLUMN `avatar_url`,
    DROP COLUMN `created_at`,
    DROP COLUMN `html_url`,
    DROP COLUMN `name`,
    DROP COLUMN `node_id`,
    DROP COLUMN `repos_url`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `htmlUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `reposUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
