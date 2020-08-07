DROP DATABASE IF EXISTS mykea_main_title_pictures;

CREATE DATABASE mykea_main_title_pictures;

USE mykea_main_title_pictures;


CREATE TABLE descriptions (
  id INT NOT NULL AUTO_INCREMENT,
  description VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE pictures (
  id INT NOT NULL AUTO_INCREMENT,
  url TEXT,
  description_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (description_id) REFERENCES descriptions (id)
);

-- Run this command to drop old and create new database: mysql < db/schema.sql