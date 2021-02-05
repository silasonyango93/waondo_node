/*SON/2018-11-06 00:29 - DEVELOPMENT

This is the system's entry point.It creates
the database connection and port binding 
then initializes all the route files.

*/

const mysql = require("mysql");
const express = require("express");
const app = express();
const path = require("path");
var fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: __dirname + "/uploads/" });
var dbcredentials;
var cors = require("cors");
var port = process.env.PORT || 5000;

app.use(cors());
dbcredentials = {
  host: "localhost",
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

  var date = new Date();
  date.setHours(date.getHours() + 0);
  console.log("Client connected at :-  "+date);

  next();
});

app.get("/display_image", (req, res) => {
  //res.sendFile(path.join(__dirname, "./uploads/df37ba09d301ed7e28a5ac7bdbd36a92"));
  var imageID = req.query.imageID;
  res.send('<img src="/' + imageID + '">');
});

app.get("/web_display_image", (req, res) => {
  var imageID = req.query.imageID;
  res.sendFile(path.join(__dirname, "/uploads/" + imageID));
});

app.post("/upload_images", upload.single("file"), function(req, res) {
  var file = __dirname + "/uploads/" + req.file.filename;
  fs.rename(req.file.path, file, function(err) {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(req.file.filename);
      console.log(req.file.filename);
    }
  });
});

/*SON/2019-1-04 11:50 - DEVELOPMENT : Start User Management*/

app.use(require("./routes/users_management/UsersRoutes.js"));
app.use(require("./routes/users_management/UserRolesRoutes.js"));
app.use(require("./routes/users_management/RolesRoutes.js"));
app.use(require("./routes/users_management/AccessPrivilegesRoutes.js"));
app.use(require("./routes/users_management/UserAccessPrivilegesRoutes.js"));

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
app.use(require("./routes/students_management/StudentRegistrationRoutes.js"));

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
app.use(require("./routes/fee_management/CorrectionDescriptionsRoutes.js"));
app.use(require("./routes/fee_management/FeeCorrectionsRoutes.js"));
app.use(require("./routes/fee_management/TransactionsRoutes.js"));
app.use(require("./routes/fee_management/TransactionDescriptionsRoutes.js"));
app.use(require("./routes/fee_management/FeeComponentsRoutes.js"));
app.use(require("./routes/fee_management/FeeStructuresRoutes.js"));
app.use(require("./routes/fee_management/ClassFeeStructuresRoutes.js"));
app.use(require("./routes/fee_management/ClassFeeStructureBreakdownRoutes.js"));
app.use(
  require("./routes/fee_management/ClassFeeStructureComponentsRoutes.js")
);

/*SON/2019-1-04 11:50 - DEVELOPMENT : End Term Configurations*/

/*SON/2019-1-04 11:50 - DEVELOPMENT : Start Session Managements*/

app.use(require("./routes/session_management/SessionLogsRoutes.js"));
app.use(require("./routes/session_management/SessionActivitiesRoutes.js"));
app.use(
  require("./routes/session_management/ActualSessionActivitiesRoutes.js")
);

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Backend system listening at http://${host}:${port}`);
});
