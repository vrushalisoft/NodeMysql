
const mysql = require("mysql");


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodemysql"
  });


app.post('/addCustomer', (req, res) => {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, email) VALUES ?";
    var values = [
        {
            email : "anurag11@yopmail.com" ,
            name : "anurag"
            },
            {
            email : "sameer11@yopmail.com" ,
            name : "sameer"
            },
            {
            email : "ravi11@yopmail.com" ,
            name : "ravi"
            },
            {
            email : "akash11@yopmail.com" ,
            name : "akash"
            },
            {
            email : "anjali11@yopmail.com" ,
            name : "anjali"
            },
            {
            email : "santosh11@yopmail.com" ,
            name : "santosh"
            },   
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
});

app.post('/addSubject', (req, res) => {

    var sql = "INSERT INTO subjects (subjectName) VALUES ?";
    var values = [
            {
                subjectName : "English"
            },
            {
                subjectName : "Hindi"
            },
            {
                subjectName : "Maths"
            },
    ];
    con.query(sql, [values], (err, rows, fields) => {
        if (!err)
        rows.forEach(element => {
            if(element.constructor == Array)
            res.send('Number of subjects inserted');
        });
        else
        console.log(err);
        })
    });