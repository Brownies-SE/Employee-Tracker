const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Brownie125298",
  database: "employee_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  //afterConnection();
  menu();
});

/*
const afterConnection = () => {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
};
*/

const menu = () => {
  inquirer.prompt({
    type: "list",
    name: "Menu",
    message: "Choose something!",
    choices: ["yes", "no"],
  });
};

const addDepartment = () => {};

const addRole = () => {};

const addEmployees = () => {};

const viewDepartments = () => {};

const viewRoles = () => {};

const viewEmployees = () => {};

const upDateRoles = () => {};
