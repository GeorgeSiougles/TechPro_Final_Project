-- CREATE DATABASE `final_project`;
-- USE final_project;

-- DROP TABLE IF EXISTS `person`;
-- CREATE TABLE person (
--   `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY ,
--   `firstName` VARCHAR(255) NOT NULL DEFAULT '',
--   `lastName` VARCHAR(255) NOT NULL DEFAULT '' ,
--   `email` VARCHAR(255) NOT NULL DEFAULT '' 
-- );

-- DROP TABLE IF EXISTS `item`;
-- CREATE TABLE item (
--   `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   `Name` VARCHAR(255) NOT NULL DEFAULT ''
-- );

-- DROP TABLE IF EXISTS `orderTable`;
-- CREATE TABLE orderTable (
--   `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   `personId` INT UNSIGNED NOT NULL,
--   `orderDate` DATETIME DEFAULT CURRENT_TIMESTAMP,
--   FOREIGN KEY (personId) REFERENCES person (id) on delete cascade
-- );

-- DROP TABLE IF EXISTS `orderDetails`;
-- CREATE TABLE orderDetails (
--   `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   `orderId` INT UNSIGNED NOT NULL ,
--   `itemId` INT UNSIGNED NOT NULL ,
--   `quantity` INT NOT NULL DEFAULT 0,
--   FOREIGN KEY (orderId) REFERENCES `order` (id) on delete cascade,
--   FOREIGN KEY (itemId) REFERENCES item (id) on delete cascade
-- );

