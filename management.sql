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
VALUES ("Production Manager", 80000, 1), ("Marketing Manager", 50000, 3), ("Research Assisstant", 45000, 2),
("Engineer 1", 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Brown", 1, 3), ("Peter", "Bishop", 2, 5),("TJ", "Courey", 4, 8),("Jack", "Neuner", 3, 5);

-- SELECT * FROM department;
-- SELECT * FROM role;
-- SELECT * FROM employee;

-- SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id
SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department on role.department_id = department.id