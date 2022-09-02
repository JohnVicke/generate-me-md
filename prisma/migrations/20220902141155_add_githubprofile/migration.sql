-- CreateTable
CREATE TABLE `GithubProfile` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `login` VARCHAR(191) NOT NULL,
    `githubId` INTEGER NOT NULL,
    `node_id` VARCHAR(191) NOT NULL,
    `avatar_url` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `html_url` VARCHAR(191) NOT NULL,
    `repos_url` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `GithubProfile_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
