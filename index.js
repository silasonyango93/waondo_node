/*SON/2018-11-06 00:29 - DEVELOPMENT

This is the system's entry point.It creates
the database connection and port binding 
then initializes all the route files.

*/

const mysql = require("mysql");
const express = require("express");
const app = express();
const path = require("path");
var dbcredentials;
var cors = require("cors");
var port = process.env.PORT || 5000;

app.use(cors());
dbcredentials = {
  host: 'mysql-db',
  user: "silas",
  password: "8032",
  database: "waondo",
  insecureAuth: true
};

app.use(express.static("public"));

var con;
app.use((req, res, next) => {
  con = mysql.createConnection(dbcredentials);
  con.on("error", err => {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.log(err);
    } else {
      //throw err;
    }
  });
  console.log("Connection established");

  next();
});

/*SON/2019-1-04 11:50 - DEVELOPMENT : Start User Management*/

app.use(require("./routes/users_management/UsersRoutes.js"));
app.use(require("./routes/users_management/UserRolesRoutes.js"));
app.use(require("./routes/users_management/RolesRoutes.js"));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End User Management*/

/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Classroom Configurations*/

app.use(require("./routes/classroom_configurations/LotDescriptionsRoutes.js"));
app.use(
  require("./routes/classroom_configurations/AcademicClassLevelsRoutes.js")
);
app.use(require("./routes/classroom_configurations/LotsRoutes.js"));
app.use(require("./routes/classroom_configurations/ClassStreamsRoutes.js"));
app.use(require("./routes/classroom_configurations/ClassRoutes.js"));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End Classroom Configurations*/

/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Student Management*/

app.use(require("./routes/students_management/StudentsRoutes.js"));
app.use(require("./routes/students_management/StudentTypesRoutes.js"));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End Student Management*/

/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Term Configurations*/

app.use(require("./routes/term_management/TermRoutes.js"));
app.use(require("./routes/term_management/TermIterationsRoutes.js"));
app.use(require("./routes/term_management/WeekIterationsRoutes.js"));
app.use(require("./routes/term_management/ActualWeeksRoutes.js"));

/*SON/2019-1-04 11:50 - DEVELOPMENT : End Term Configurations*/

/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Term Configurations*/

app.use(require("./routes/fee_management/FeeRoutes.js"));
app.use(require("./routes/fee_management/InstallmentsRoutes.js"));
app.use(require("./routes/fee_management/CarryForwardRoutes.js"));

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});


const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Backend system listening at http://${host}:${port}`);
});
