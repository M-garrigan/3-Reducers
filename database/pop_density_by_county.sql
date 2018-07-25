
CREATE TABLE `VSON`.`usa_states` (
  `idusa_states` INT NOT NULL AUTO_INCREMENT,
  `state_id` INT NULL,
  `state_name` VARCHAR(30) NULL,
  PRIMARY KEY (`idusa_states`));


CREATE TABLE `VSON`.`usa_counties_states` (
  `idusa_counties_states` INT NOT NULL AUTO_INCREMENT,
  `state_id` INT NULL,
  `state_name` VARCHAR(30) NULL,
  `county_id` INT NULL,
  `county_name` VARCHAR(50) NULL,
  PRIMARY KEY (`idusa_counties_states`));

  CREATE TABLE `VSON`.`pop_density_county_level` (
  `idpop_density_county_level` INT NOT NULL AUTO_INCREMENT,
  `pop` INT NULL,
  `density` DECIMAL(8,2),
  `geoname` VARCHAR(60) NULL,
  `date` INT NULL,
  `date_desc` VARCHAR(60) NULL,
  `state` INT NULL,
  `county` INT NULL,
  `state_name` VARCHAR(30) NULL,
  PRIMARY KEY (`idpop_density_county_level`));

