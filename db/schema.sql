DROP DATABASE IF EXISTS pzv2j4tvj6yjpg9y;
CREATE DATABASE pzv2j4tvj6yjpg9y;

USE pzv2j4tvj6yjpg9y;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id) 
);