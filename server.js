
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
    password: " ",
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
        message: "What would you like to do?",
        type: "choice",
        name: [
        "View All Employees By Department",
        "View All Employees By Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Roles",
        "Update Employee Manager", 
        "View All Roles"
                ]
            })
  .then (function(answer){
       connection.query(
       {

//add database stuff ..... 
fucntion(err) {
if (err) throw err;
console.log("Hello")
     } 
    },
         function (err) {
          if (err) throw err;
            console.log("Sucessful completed");
            start ();
             }
         );
        }
       else {
           console.log("you werre unsucessful");
            start ();
         }

  )};

 console.log ("move up and down to reveal more choices"); 
