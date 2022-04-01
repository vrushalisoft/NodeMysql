const mysql = require("mysql");


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodemysql"
  });


exports.createCustomer = async (req, res, next) => {
    if (err) throw err;
    var sql = "CREATE TABLE customers (customerId INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table customers created");
    });
};

exports.createSubject =  (req, res, next) => {
    if (err) throw err;
    var sql = "CREATE TABLE subjects (subjectId INT NOT NULL AUTO_INCREMENT PRIMARY KEY, subjectName VARCHAR(255) NOT NULL";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table subjects created");
    });
};

exports.createSubject =  (req, res, next) => {
    if (err) throw err;
    var sql = "CREATE TABLE subjects (subjectId INT NOT NULL AUTO_INCREMENT PRIMARY KEY, subjectName VARCHAR(255) NOT NULL";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table subjects created");
    });
}