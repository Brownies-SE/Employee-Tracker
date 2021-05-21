const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require("console.table");

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
const menuPrompts = [
  {
    type: "list",
    name: "Menu",
    message: "What would you like to do?",
    choices: [
      "Add Department",
      "Add a Role",
      "Add an Employee",
      "View Departments",
      "View Roles",
      "View Employees",
      "Update the Roles",
      "Exit",
    ],
  },
];

const menu = () => {
  inquirer.prompt(menuPrompts).then((answers) => {
    switch (answers.Menu) {
      case "Add Department":
        addDepartment();
        break;

      case "Add a role":
        addRole();
        break;

      case "Add an Employee":
        addEmployees();
        break;

      case "View Departments":
        viewDepartments();
        break;

      case "View Roles":
        viewRoles();
        break;

      case "View Employees":
        viewEmployees();
        break;

      case "Update the Roles":
        upDateRoles();
        break;

      case "Exit":
        connection.end();
        break;
    }
  });
};

const addDepartment = () => {};

const addRole = () => {};

const addEmployees = () => {};

const viewDepartments = () => {
  connection.query("SELECT * FROM department", (err, data) => {
    if (err) throw err;

    console.table(data);
    menu();
  });
};

const viewRoles = () => {};

const viewEmployees = () => {};

const upDateRoles = () => {};
