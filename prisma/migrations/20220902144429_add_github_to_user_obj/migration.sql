/*
  Warnings:

  - Added the required column `avatar_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `events_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followers` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followers_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `following` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `following_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gists_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `html_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `login` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `node_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizations_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `public_gists` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `public_repos` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `received_events_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repos_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `site_admin` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `starred_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriptions_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `two_factor_authentication` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `avatar_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `bio` VARCHAR(191) NULL,
    ADD COLUMN `blog` VARCHAR(191) NULL,
    ADD COLUMN `collaborators` INTEGER NULL,
    ADD COLUMN `company` VARCHAR(191) NULL,
    ADD COLUMN `created_at` VARCHAR(191) NOT NULL,
    ADD COLUMN `disk_usage` INTEGER NULL,
    ADD COLUMN `events_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `followers` INTEGER NOT NULL,
    ADD COLUMN `followers_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `following` INTEGER NOT NULL,
    ADD COLUMN `following_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `gists_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `gravatar_id` VARCHAR(191) NULL,
    ADD COLUMN `hireable` BOOLEAN NULL,
    ADD COLUMN `html_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `location` VARCHAR(191) NULL,
    ADD COLUMN `login` VARCHAR(191) NOT NULL,
    ADD COLUMN `node_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `organizations_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `owned_private_repos` INTEGER NULL,
    ADD COLUMN `private_gists` INTEGER NULL,
    ADD COLUMN `public_gists` INTEGER NOT NULL,
    ADD COLUMN `public_repos` INTEGER NOT NULL,
    ADD COLUMN `received_events_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `repos_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `site_admin` BOOLEAN NOT NULL,
    ADD COLUMN `starred_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `subscriptions_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `suspended_at` VARCHAR(191) NULL,
    ADD COLUMN `total_private_repos` INTEGER NULL,
    ADD COLUMN `twitter_username` VARCHAR(191) NULL,
    ADD COLUMN `two_factor_authentication` BOOLEAN NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` VARCHAR(191) NOT NULL,
    ADD COLUMN `url` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Plan` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `collaborators` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `space` VARCHAR(191) NOT NULL,
    `private_repos` INTEGER NOT NULL,

    UNIQUE INDEX `Plan_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
