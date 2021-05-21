const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require("console.table");

const connection = mysql.createConnection({
  host: "localhost", //Your host name
  port: 3306, //your port
  user: "root", //your username
  password: "", //your password
  database: "employee_db", //your database
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
    message: "New employee's title: ",
  },
  {
    type: "input",
    name: "newSalary",
    message: "Enter Employee's salary: ",
  },
  {
    type: "input",
    name: "newDepartmentId",
    message: "Employee's new department Id: ",
  },
];

const addEmployeePrompts = [
  {
    type: "input",
    name: "firstName",
    message: "Enter employee's first name: ",
  },
  {
    type: "input",
    name: "lastName",
    message: "Enter Employee's last name: ",
  },
  {
    type: "input",
    name: "roleID",
    message: "Enter employee's role Id: ",
  },
  {
    type: "input",
    name: "managerID",
    message: "Enter employee's manager Id: ",
  },
];

const updateEmpRolePrompts = [
  {
    type: "input",
    name: "getEmployeeNumber",
    message: "Enter employee's role Id: ",
  },
  {
    type: "input",
    name: "newEmployeeNumber",
    message: "Enter employee's new Id: ",
  },
];

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
        updateRoleId();
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
  inquirer.prompt(addEmployeePrompts).then((answers) => {
    connection.query(
      "INSERT INTO employee SET ?",
      [
        {
          first_name: answers.firstName,
          last_name: answers.lastName,
          role_id: answers.roleID,
          manager_id: answers.managerID,
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

// const updateRoleId = () => {
//   inquirer.prompt(updateEmpRolePrompts).then((answers) => {
//     connection.query(
//       "UPDATE employee SET role_id ? WHERE ?",
//       [
//         {
//           role_id: answers.newEmployeeNumber,
//         },
//         {
//           id: answers.getEmployeeNumber,
//         },
//       ],
//       (err, data) => {
//         if (err) throw err;
//         //console.table(data);
//         menu();
//       }
//     );
//   });
// };

const updateRoleId = () => {
  inquirer.prompt(updateEmpRolePrompts).then((answers) => {
    const updateEmployee = answers.getEmployeeNumber;
    const updateNewRole = answers.newEmployeeNumber;
    connection.query(
      `UPDATE employee SET role_id = "${updateNewRole}"  WHERE id = "${updateEmployee}"`,

      (err, data) => {
        if (err) throw err;
        //console.table(data);
        menu();
      }
    );
  });
};
