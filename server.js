
// Build a command-line application that at a minimum allows the user to:
// Add departments, roles, employees
// View departments, roles, employees
// Update employee roles
const mysql = require("mysql");
const inquirer = require("inquirer");
const util = require("util");


// creating connectipn with sql database
const connection = mysql.createConnection ({
    host: "localhost",
    
    port: 3306, 
    user: "root",
    password: " password ",
    database: "employeeTrackerDB"
});

// connect to the mysql server and sql database 
connection.connect(function(err) {
    if (err) throw err;
    start ()
});

connection.query = util.promisify(connection.query);

function start () {
    inquirer 
        .prompt ({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
        "View All Employees By Department",
        "View All Employees By Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Roles",
        "Update Employee Manager", 
        "View All Roles"
                ]
            })

  .then (function(employeeQuestions) {
      switch (employeeQuestions.action) {
            case "View All Employees By Department":
              employeeDepartment ();
              break;
        
            case "View All Employees By Manager":
                employeeManager();
                break;

            case "Add Employee":
                addEmployee();
                break; 

            case "Remove Employee":
                employeeRemove();
                break;
            
            case "Update Employee Roles":
                employeeRoles();
                break;  
                
            case "View All Roles":
                allEmployeeRoles();
                break;  
  }
    });
}

function employeeDepartment () {
    inquirer
    .prompt({
        name:"employeeDepartment",
        type: "choice",
        message:" "
    });
    start ()
}


function employeeManager () {
    inquirer
    .prompt({
        name:"employeeManager",
        type: "choice",
        message:"Which employee's manager do you want to set as manager for the selected employee?"
    })

.then(function(answer) {
    var query = "Which employee do you want to set as manager for the selected employee"
});
start ()
}

function employeeRemove () {
    inquirer
    .prompt({
        name:"employeeRemove",
        type: "choice",
        message:"Which employee do you want to remove?"
    });
    start ()
}

function addEmployee () {
    inquirer
    .prompt({
        name:"employeeAdd",
        type: "choice",
        message:"What is the employee's first name?"
    })

    .then(function(answer) {
        var query = "What is the employee's role?"
    });
    start ()
}

function employeeRoles () {
    inquirer
    .prompt({
        name:"employeeRoles",
    });
    start ()
}

function allEmployeeRoles () {
    inquirer
    .prompt({
        name:"allEmployeeRoles",
        type: "choice",
        message:" "
    });
    start ()
}

// function (err) {
//           if (err) throw err;
//             console.log("Sucessful completed");
// };