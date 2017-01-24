-- Create the database burgers_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name varchar(25) NOT NULL,
	devoured boolean,
	date timestamp(8) NOT NULL,
	PRIMARY KEY (id)
);