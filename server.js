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

const departmentPrompts = [
  {
    type: "input",
    name: "newDepartment",
    message: "New department name: ",
  },
];

const addRolePrompts = [
  {
    type: "input",
    name: "newTitle",
    message: "New employee's title",
  },
  {
    type: "input",
    name: "newSalary",
    message: "Enter Employee's salary",
  },
  {
    type: "input",
    name: "newDepartmentId",
    message: "Employee's new department Id",
  },
];

const addEmployeePrompts = [{}];

const menu = () => {
  inquirer.prompt(menuPrompts).then((answers) => {
    switch (answers.Menu) {
      case "Add Department":
        addDepartment();
        break;

      case "Add a Role":
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

const addDepartment = () => {
  inquirer.prompt(departmentPrompts).then((answers) => {
    connection.query(
      "INSERT INTO department SET ?",
      [
        {
          name: answers.newDepartment,
        },
      ],
      (err, data) => {
        if (err) throw err;
        //console.table(data);
        menu();
      }
    );
  });
};

const addRole = () => {
  inquirer.prompt(addRolePrompts).then((answers) => {
    connection.query(
      "INSERT INTO role SET ?",
      [
        {
          title: answers.newTitle,
          salary: answers.newSalary,
          department_id: answers.newDepartmentId,
        },
      ],
      (err, data) => {
        if (err) throw err;
        //console.table(data);
        menu();
      }
    );
  });
};

const addEmployees = () => {
  nquirer.prompt(addRolePrompts).then((answers) => {
    connection.query(
      "INSERT INTO role SET ?",
      [
        {
          title: answers.newTitle,
          salary: answers.newSalary,
          department_id: answers.newDepartmentId,
        },
      ],
      (err, data) => {
        if (err) throw err;
        //console.table(data);
        menu();
      }
    );
  });
};

const viewDepartments = () => {
  connection.query("SELECT * FROM department", (err, data) => {
    if (err) throw err;

    console.table(data);
    menu();
  });
};

const viewRoles = () => {
  connection.query("SELECT * FROM role", (err, data) => {
    if (err) throw err;

    console.table(data);
    menu();
  });
};

//I think they want more than this.
const viewEmployees = () => {
  connection.query("SELECT * FROM employee", (err, data) => {
    if (err) throw err;

    console.table(data);
    menu();
  });
};

const upDateRoles = () => {};
