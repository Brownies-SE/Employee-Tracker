DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

use employee_db;

CREATE TABLE department (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE role(
id INTEGER NOT NULL AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL (10, 2),
department_id INTEGER,
PRIMARY KEY(id)
);

CREATE TABLE employee (
id INTEGER NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER,
manager_id INTEGER,
PRIMARY KEY(id)
);

INSERT INTO department (name)
VALUES ("Production"), ("Research"), ("Marketing"), ("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("Production Manager", 80000, 8), ("Marketing Manager", 50000, 1), ("Research Assisstant", 45000, 5),
("Engineer 1", 70000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Josh", "Brown", 1, 8), ("Peter", "Bishop", 2, 5),("TJ", "Courey", 6, 8),("Jack", "Neuner", 7, 5);

-- SELECT * FROM department;
-- SELECT * FROM role;
-- SELECT * FROM employee;
