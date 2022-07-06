DROP DATABASE IF EXISTS ag_cleaning_services_db;

CREATE DATABASE ag_cleaning_services_db;

-- Makes it so all of the following code will affect inventory_db --
USE ag_cleaning_services_db;

CREATE TABLE reviews (
  review_id INT NOT NULL,
  name VARCHAR(20) NOT NULL,
  review_text VARCHAR(255) NOT NULL,
  review_date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY (review_id)
);