var mysql = require('mysql');
var dbcredentials;


const con = mysql.createPool({
    host: "mysql-db",
    user: "root",
    password: "root",
    database: "waondo",
    insecureAuth: true
});
setInterval(() => {
    con.query("SELECT 1", (err, rows) => {
        if (err) throw err;
    });
}, 1000);




module.exports=con;
