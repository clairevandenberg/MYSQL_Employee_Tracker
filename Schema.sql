DROP DATABASE IF EXISTS employeeTrackerDB;
CREATE database employeeTrackerDB;

USE employeeTrackerDB;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) DEFAULT NULL,
  salary DECIMAL(10,0) DEFAULT NULL,
  department_id int DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT department_id FOREIGN KEY (department_id) REFERENCES departments (id)
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR (255) DEFAULT NULL,
  last_name VARCHAR(255) DEFAULT NULL,
  role_id INT DEFAULT NULL,
  manager_id int DEFAULT NULL,
  PRIMARY KEY (id)
); 



SELECT * FROM employeeTrackerDB.employees;
SELECT * FROM employeeTrackerDB.departments;
SELECT * FROM employeeTrackerDB.roles;