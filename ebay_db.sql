DROP DATABASE IF EXISTS ebay_db;

CREATE DATABASE ebay_db;

USE ebay_db;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NULL,
  category VARCHAR(50) NULL,
  price INT NULL,
  PRIMARY KEY (id)
);
​
INSERT INTO items (name, category, price)
VALUES ("baseball card", "sports collectibles", 1000);
​
INSERT INTO items (name, category, price)
VALUES ("signed glove", "sports collectibles", 5000);
​
INSERT INTO items (name, category, price)
VALUES ("classic coin", "vintage collectibles", 300);
​
INSERT INTO items (name, category, price)
VALUES ("signed comic book", "vintage collectibles", 120);
​
INSERT INTO items (name, category, price)
VALUES ("signed movie poster", "cinema collectibles", 50);
​
INSERT INTO items (name, category, price)
VALUES ("stage costume", "cinema collectibles", 1500);

