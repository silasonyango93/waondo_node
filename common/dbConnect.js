var mysql = require('mysql');
var dbcredentials;


const con = mysql.createPool({
    host: "localhost",
    user: "silas",
    password: "8032",
    database: "waondo",
    insecureAuth: true
});

// const con = mysql.createPool({
//     host: "mysql-db",
//     user: "root",
//     password: "root",
//     database: "waondo",
//     insecureAuth: true
// });

setInterval(() => {
    con.query("SELECT 1", (err, rows) => {
        if (err) throw err;
    });
}, 1000);




module.exports=con;
