-- Create the database burgers_db schema
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name varchar(25) NOT NULL,
	devoured boolean DEFAULT false,
	date timestamp(8) NOT NULL,
	PRIMARY KEY (id)
);
