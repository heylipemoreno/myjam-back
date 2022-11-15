-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema api-desafiochefao-grupo2
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `api-desafiochefao-grupo2` DEFAULT CHARACTER SET utf8 ;
USE `api-desafiochefao-grupo2` ;

-- -----------------------------------------------------
-- Table `api-desafiochefao-grupo2`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api-desafiochefao-grupo2`.`users` (
  `userId` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(70) NOT NULL,
  `nickname` VARCHAR(20) NOT NULL,
  `email` VARCHAR(70) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `age` INT NULL,
  `experience` INT NULL,
  `musicTypeId` INT NULL,
  `levelId` INT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE INDEX `userId_UNIQUE` (`userId` ASC) VISIBLE,
  UNIQUE INDEX `nickname_UNIQUE` (`nickname` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `api-desafiochefao-grupo2`.`levels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api-desafiochefao-grupo2`.`levels` (
  `levelId` INT NOT NULL,
  `totalPoints` INT NOT NULL,
  `levelPoints` INT NOT NULL,
  PRIMARY KEY (`levelId`),
  UNIQUE INDEX `levelId_UNIQUE` (`levelId` ASC) VISIBLE,
  UNIQUE INDEX `levelPoints_UNIQUE` (`levelPoints` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `api-desafiochefao-grupo2`.`songs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api-desafiochefao-grupo2`.`songs` (
  `songId` INT NOT NULL AUTO_INCREMENT,
  `videoLink` VARCHAR(255) NULL,
  `musicTypeId` INT NOT NULL,
  `songContentLink` VARCHAR(255) NOT NULL,
  `levelId` INT NOT NULL,
  PRIMARY KEY (`songId`),
  UNIQUE INDEX `videoLink_UNIQUE` (`videoLink` ASC) VISIBLE,
  UNIQUE INDEX `musicTypeId_UNIQUE` (`musicTypeId` ASC) VISIBLE,
  UNIQUE INDEX `songContentLink_UNIQUE` (`songContentLink` ASC) VISIBLE,
  INDEX `fk_songs_level_idx` (`levelId` ASC) VISIBLE,
  UNIQUE INDEX `levelId_UNIQUE` (`levelId` ASC) VISIBLE,
  CONSTRAINT `fk_songs_level`
    FOREIGN KEY (`levelId`)
    REFERENCES `api-desafiochefao-grupo2`.`levels` (`levelId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `api-desafiochefao-grupo2`.`genres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api-desafiochefao-grupo2`.`genres` (
  `musicTypeId` INT NOT NULL AUTO_INCREMENT,
  `userMusicType` VARCHAR(45) NULL,
  `songId` INT NOT NULL,
  PRIMARY KEY (`musicTypeId`),
  UNIQUE INDEX `musicTypeId_UNIQUE` (`musicTypeId` ASC) VISIBLE,
  INDEX `fk_genres_songs1_idx` (`songId` ASC) VISIBLE,
  UNIQUE INDEX `songId_UNIQUE` (`songId` ASC) VISIBLE,
  CONSTRAINT `fk_genres_songs1`
    FOREIGN KEY (`songId`)
    REFERENCES `api-desafiochefao-grupo2`.`songs` (`songId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `api-desafiochefao-grupo2`.`profiles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api-desafiochefao-grupo2`.`profiles` (
  `userId` INT NOT NULL,
  `musicTypeId` INT NOT NULL,
  INDEX `fk_users_has_genres_genres1_idx` (`musicTypeId` ASC) VISIBLE,
  INDEX `fk_users_has_genres_users1_idx` (`userId` ASC) VISIBLE,
  UNIQUE INDEX `musicTypeId_UNIQUE` (`musicTypeId` ASC) VISIBLE,
  UNIQUE INDEX `userId_UNIQUE` (`userId` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_genres_users1`
    FOREIGN KEY (`userId`)
    REFERENCES `api-desafiochefao-grupo2`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_genres_genres1`
    FOREIGN KEY (`musicTypeId`)
    REFERENCES `api-desafiochefao-grupo2`.`genres` (`musicTypeId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
