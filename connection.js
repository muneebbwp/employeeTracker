//Need those dependancies
const mysql = require('mysql2');
//const inquirer = require("inquirer");

//create connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "M@nu9079",
  database: "Employee_Tracker"

});
//instantiate the connection
connection.connect(function (err) {
  if (err)
    throw err;
  //console log error
  console.log(err);
  //else show thread 
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;