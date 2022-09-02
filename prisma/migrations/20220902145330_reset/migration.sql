/*
  Warnings:

  - You are about to drop the column `avatar_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `blog` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `collaborators` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `company` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `disk_usage` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `events_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `followers` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `followers_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `following` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `following_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `gists_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `gravatar_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `html_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `login` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `node_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `organizations_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `owned_private_repos` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `private_gists` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `public_gists` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `public_repos` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `received_events_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `repos_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `site_admin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `starred_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptions_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `suspended_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `total_private_repos` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `two_factor_authentication` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Plan` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `User_id_key` ON `User`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `avatar_url`,
    DROP COLUMN `bio`,
    DROP COLUMN `blog`,
    DROP COLUMN `collaborators`,
    DROP COLUMN `company`,
    DROP COLUMN `created_at`,
    DROP COLUMN `disk_usage`,
    DROP COLUMN `events_url`,
    DROP COLUMN `followers`,
    DROP COLUMN `followers_url`,
    DROP COLUMN `following`,
    DROP COLUMN `following_url`,
    DROP COLUMN `gists_url`,
    DROP COLUMN `gravatar_id`,
    DROP COLUMN `html_url`,
    DROP COLUMN `login`,
    DROP COLUMN `node_id`,
    DROP COLUMN `organizations_url`,
    DROP COLUMN `owned_private_repos`,
    DROP COLUMN `private_gists`,
    DROP COLUMN `public_gists`,
    DROP COLUMN `public_repos`,
    DROP COLUMN `received_events_url`,
    DROP COLUMN `repos_url`,
    DROP COLUMN `site_admin`,
    DROP COLUMN `starred_url`,
    DROP COLUMN `subscriptions_url`,
    DROP COLUMN `suspended_at`,
    DROP COLUMN `total_private_repos`,
    DROP COLUMN `two_factor_authentication`,
    DROP COLUMN `type`,
    DROP COLUMN `updated_at`,
    DROP COLUMN `url`,
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `emailVerified` DATETIME(3) NULL,
    ADD COLUMN `image` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `Plan`;

-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` VARCHAR(500) NULL,
    `refresh_token_expires_in` INTEGER NULL,
    `access_token` VARCHAR(500) NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,

    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);
