-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema myjam-database
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `myjam-database` DEFAULT CHARACTER SET utf8mb3 ;
USE `myjam-database` ;

-- -----------------------------------------------------
-- Table `myjam-database`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam-database`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(70) NOT NULL,
  `nickname` VARCHAR(20) NOT NULL,
  `email` VARCHAR(70) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `age` INT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL,
  `totalPoints` INT NOT NULL,
  `qtdSongs` INT NULL,
  `qtdChords` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nickname_UNIQUE` (`nickname` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam-database`.`chords`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam-database`.`chords` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `chordName` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam-database`.`users_chords`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam-database`.`users_chords` (
  `users_id` INT NOT NULL,
  `chords_id` INT NOT NULL,
  `learnedAt` DATETIME NULL,
  PRIMARY KEY (`users_id`, `chords_id`),
  INDEX `fk_users_has_chords_chords1_idx` (`chords_id` ASC),
  INDEX `fk_users_has_chords_users_idx` (`users_id` ASC),
  CONSTRAINT `fk_users_has_chords_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `myjam-database`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_chords_chords1`
    FOREIGN KEY (`chords_id`)
    REFERENCES `myjam-database`.`chords` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam-database`.`genres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam-database`.`genres` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `genreName` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam-database`.`users_genres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam-database`.`users_genres` (
  `users_id` INT NOT NULL,
  `genres_id` INT NOT NULL,
  PRIMARY KEY (`users_id`, `genres_id`),
  INDEX `fk_users_has_genres_genres1_idx` (`genres_id` ASC),
  INDEX `fk_users_has_genres_users1_idx` (`users_id` ASC),
  CONSTRAINT `fk_users_has_genres_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `myjam-database`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_genres_genres1`
    FOREIGN KEY (`genres_id`)
    REFERENCES `myjam-database`.`genres` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam-database`.`classes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam-database`.`classes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL,
  `completedAt` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam-database`.`songs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam-database`.`songs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `songName` VARCHAR(255) NOT NULL,
  `songVideoLink` VARCHAR(255) NULL,
  `songContentLink` VARCHAR(255) NULL,
  `classes_id` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`, `classes_id`),
  INDEX `fk_songs_classes1_idx` (`classes_id` ASC),
  CONSTRAINT `fk_songs_classes1`
    FOREIGN KEY (`classes_id`)
    REFERENCES `myjam-database`.`classes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam-database`.`genres_songs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam-database`.`genres_songs` (
  `genres_id` INT NOT NULL,
  `songs_id` INT NOT NULL,
  PRIMARY KEY (`genres_id`, `songs_id`),
  INDEX `fk_songs_has_genres_genres1_idx` (`genres_id` ASC),
  INDEX `fk_songs_has_genres_songs1_idx` (`songs_id` ASC),
  CONSTRAINT `fk_songs_has_genres_songs1`
    FOREIGN KEY (`songs_id`)
    REFERENCES `myjam-database`.`songs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_songs_has_genres_genres1`
    FOREIGN KEY (`genres_id`)
    REFERENCES `myjam-database`.`genres` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam-database`.`songs_chords`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam-database`.`songs_chords` (
  `songs_id` INT NOT NULL,
  `chords_id` INT NOT NULL,
  PRIMARY KEY (`songs_id`, `chords_id`),
  INDEX `fk_songs_has_chords_chords1_idx` (`chords_id` ASC),
  INDEX `fk_songs_has_chords_songs1_idx` (`songs_id` ASC),
  CONSTRAINT `fk_songs_has_chords_songs1`
    FOREIGN KEY (`songs_id`)
    REFERENCES `myjam-database`.`songs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_songs_has_chords_chords1`
    FOREIGN KEY (`chords_id`)
    REFERENCES `myjam-database`.`chords` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam-database`.`lessons`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam-database`.`lessons` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `createdAt` DATETIME NOT NULL,
  `points` INT NULL,
  `completedAt` DATETIME NULL,
  `classes_id` INT NOT NULL,
  PRIMARY KEY (`id`, `classes_id`),
  INDEX `fk_lessons_classes1_idx` (`classes_id` ASC),
  CONSTRAINT `fk_lessons_classes1`
    FOREIGN KEY (`classes_id`)
    REFERENCES `myjam-database`.`classes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam-database`.`users_classes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam-database`.`users_classes` (
  `users_id` INT NOT NULL,
  `classes_id` INT NOT NULL,
  PRIMARY KEY (`users_id`, `classes_id`),
  INDEX `fk_users_has_classes_classes1_idx` (`classes_id` ASC),
  INDEX `fk_users_has_classes_users1_idx` (`users_id` ASC),
  CONSTRAINT `fk_users_has_classes_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `myjam-database`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_classes_classes1`
    FOREIGN KEY (`classes_id`)
    REFERENCES `myjam-database`.`classes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam-database`.`questions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam-database`.`questions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL,
  `questionContent` TEXT NULL,
  `completedAt` DATETIME NULL,
  `lessons_id` INT NOT NULL,
  `lessons_classes_id` INT NOT NULL,
  PRIMARY KEY (`id`, `lessons_id`, `lessons_classes_id`),
  INDEX `fk_questions_lessons1_idx` (`lessons_id` ASC, `lessons_classes_id` ASC),
  CONSTRAINT `fk_questions_lessons1`
    FOREIGN KEY (`lessons_id` , `lessons_classes_id`)
    REFERENCES `myjam-database`.`lessons` (`id` , `classes_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
