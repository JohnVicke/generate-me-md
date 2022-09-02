-- AlterTable
ALTER TABLE `Account` MODIFY `refresh_token` VARCHAR(500) NULL,
    MODIFY `access_token` VARCHAR(500) NULL,
    MODIFY `id_token` TEXT NULL;
