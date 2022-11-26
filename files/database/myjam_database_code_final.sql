-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema myjam_database
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema myjam_database
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `myjam_database` DEFAULT CHARACTER SET utf8mb3 ;
USE `myjam_database` ;

-- -----------------------------------------------------
-- Table `myjam_database`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam_database`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(100) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `totalPoints` INT NULL DEFAULT 0,
  `qtdSongs` INT NULL DEFAULT 0,
  `qtdChords` INT NULL DEFAULT 0,
  `questionsCompleted` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam_database`.`chords`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam_database`.`chords` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `chordName` VARCHAR(60) NOT NULL,
  `chordImageLink` VARCHAR(300) NOT NULL,
  `chordSoundLink` VARCHAR(300) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam_database`.`users_chords`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam_database`.`users_chords` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  `chords_id` INT NOT NULL,
  `learnedAt` DATETIME NULL,
  INDEX `fk_users_has_chords_chords1_idx` (`chords_id` ASC) VISIBLE,
  INDEX `fk_users_has_chords_users_idx` (`users_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_users_has_chords_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `myjam_database`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_chords_chords1`
    FOREIGN KEY (`chords_id`)
    REFERENCES `myjam_database`.`chords` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam_database`.`genres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam_database`.`genres` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `genreName` VARCHAR(60) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam_database`.`songs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam_database`.`songs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `songName` VARCHAR(100) NOT NULL,
  `songLink` VARCHAR(300) NULL,
  `songContent` TEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam_database`.`genres_songs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam_database`.`genres_songs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `genres_id` INT NOT NULL,
  `songs_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_songs_has_genres_genres1_idx` (`genres_id` ASC) VISIBLE,
  INDEX `fk_songs_has_genres_songs1_idx` (`songs_id` ASC) VISIBLE,
  CONSTRAINT `fk_songs_has_genres_songs1`
    FOREIGN KEY (`songs_id`)
    REFERENCES `myjam_database`.`songs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_songs_has_genres_genres1`
    FOREIGN KEY (`genres_id`)
    REFERENCES `myjam_database`.`genres` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam_database`.`songs_chords`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam_database`.`songs_chords` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `songs_id` INT NOT NULL,
  `chords_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_songs_has_chords_songs1_idx` (`songs_id` ASC) VISIBLE,
  INDEX `fk_songs_chords_chords1_idx` (`chords_id` ASC) VISIBLE,
  CONSTRAINT `fk_songs_has_chords_songs1`
    FOREIGN KEY (`songs_id`)
    REFERENCES `myjam_database`.`songs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_songs_chords_chords1`
    FOREIGN KEY (`chords_id`)
    REFERENCES `myjam_database`.`chords` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam_database`.`lessons`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam_database`.`lessons` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lessonName` VARCHAR(100) NOT NULL,
  `lessonImageLink` VARCHAR(300) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam_database`.`users_lessons`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam_database`.`users_lessons` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  `lessons_id` INT NOT NULL,
  `completedAt` DATETIME NULL,
  `points` INT NULL DEFAULT 100,
  PRIMARY KEY (`id`),
  INDEX `fk_users_has_classes_users1_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_users_classes_lessons1_idx` (`lessons_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_classes_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `myjam_database`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_classes_lessons1`
    FOREIGN KEY (`lessons_id`)
    REFERENCES `myjam_database`.`lessons` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam_database`.`instrument`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam_database`.`instrument` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `instrumentOption` VARCHAR(100) NOT NULL,
  `instrumentImageLink` VARCHAR(300) NOT NULL,
  `instrumentHoverImageLink` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam_database`.`practice`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam_database`.`practice` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `practiceOption` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam_database`.`experience`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam_database`.`experience` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `experienceOption` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam_database`.`style`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam_database`.`style` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `styleOption` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam_database`.`learn`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam_database`.`learn` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `learnOption` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam_database`.`users_questions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam_database`.`users_questions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `instrument_id` INT NOT NULL,
  `experience_id` INT NOT NULL,
  `practice_id` INT NOT NULL,
  `style_id` INT NOT NULL,
  `learn_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_questions_practice1_idx` (`practice_id` ASC) VISIBLE,
  INDEX `fk_users_questions_instrument1_idx` (`instrument_id` ASC) VISIBLE,
  INDEX `fk_users_questions_experience1_idx` (`experience_id` ASC) VISIBLE,
  INDEX `fk_users_questions_users1_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_users_questions_style1_idx` (`style_id` ASC) VISIBLE,
  INDEX `fk_users_questions_learn1_idx` (`learn_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_questions_practice1`
    FOREIGN KEY (`practice_id`)
    REFERENCES `myjam_database`.`practice` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_questions_instrument1`
    FOREIGN KEY (`instrument_id`)
    REFERENCES `myjam_database`.`instrument` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_questions_experience1`
    FOREIGN KEY (`experience_id`)
    REFERENCES `myjam_database`.`experience` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_questions_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `myjam_database`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_questions_style1`
    FOREIGN KEY (`style_id`)
    REFERENCES `myjam_database`.`style` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_questions_learn1`
    FOREIGN KEY (`learn_id`)
    REFERENCES `myjam_database`.`learn` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam_database`.`questions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam_database`.`questions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `questionTitle` VARCHAR(100) NOT NULL,
  `questionImageLink` VARCHAR(300) NULL,
  `questionContent` TEXT NULL,
  `questionOptions` VARCHAR(300) NULL,
  `questionOptionCorrect` VARCHAR(100) NULL,
  `questionTemplate` VARCHAR(100) NOT NULL,
  `isExplanation` TINYINT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `lessons_id` INT NOT NULL,
  `songs_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_questions_lessons1_idx` (`lessons_id` ASC) VISIBLE,
  INDEX `fk_questions_songs1_idx` (`songs_id` ASC) VISIBLE,
  CONSTRAINT `fk_questions_lessons1`
    FOREIGN KEY (`lessons_id`)
    REFERENCES `myjam_database`.`lessons` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_questions_songs1`
    FOREIGN KEY (`songs_id`)
    REFERENCES `myjam_database`.`songs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myjam_database`.`users_songs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myjam_database`.`users_songs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  `songs_id` INT NOT NULL,
  `learnedAt` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_songs_users1_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_users_songs_songs1_idx` (`songs_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_songs_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `myjam_database`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_songs_songs1`
    FOREIGN KEY (`songs_id`)
    REFERENCES `myjam_database`.`songs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
