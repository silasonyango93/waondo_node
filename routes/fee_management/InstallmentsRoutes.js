/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the installments table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"InstallmentsController" class
*/

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const InstallmentsController = require("../../controllers/fee_management/InstallmentsController.js");

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  next();
});

router.post("/add_installments", urlencodedParser, function(request, response) {
  var jsonObject_ = {
    SessionLogId: request.body.SessionLogId,
    ActualSessionActivityId: request.body.ActualSessionActivityId,
    AdmissionNo: request.body.AdmissionNo,
    InstallmentAmount: request.body.InstallmentAmount,
    InstallmentDate: request.body.InstallmentDate,
    IsCarryForward: request.body.IsCarryForward
  };

  var myPromise = InstallmentsController.insert(jsonObject_);

  myPromise.then(
    function(result) {
      var response_object = { results: result };
      response.send(response_object);
    },
    function(err) {
      console.log(err);
      response.send("An error occurred");
    }
  );
});

router.post("/get_all_installments", urlencodedParser, function(
  request,
  response
) {
  var myPromise = InstallmentsController.get_all_records();

  myPromise.then(
    function(result) {
      var response_object = { results: result };
      response.send(response_object);
    },
    function(err) {
      console.log(err);
      response.send("An error occurred");
    }
  );
});

router.post("/get_specific_installments", urlencodedParser, function(
  request,
  response
) {
  var mKey = request.body.column_name;
  //var mValue=parseInt(request.query.search_value, 10);
  var mValue = request.body.search_value;

  var myPromise = InstallmentsController.get_specific_records(mKey, mValue);

  myPromise.then(
    function(result) {
      var response_object = { results: result };
      response.send(response_object);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/update_installments", urlencodedParser, function(
  request,
  response
) {
  var jsonObject_ = {
    AdmissionNo: request.body.AdmissionNo,
    InstallmentAmount: request.body.InstallmentAmount,
    InstallmentDate: request.body.InstallmentDate
  };

  var myPromise = InstallmentsController.batch_update(jsonObject_);

  myPromise.then(
    function(result) {
      var response_object = { results: result };
      response.send(response_object);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/update_individual_installments", urlencodedParser, function(
  request,
  response
) {
  var column_name = request.body.ColumnName;
  var value_ = request.body.ColumnValue;

  var jsonObject_ = {
    AdmissionNo: request.body.AdmissionNo,
    InstallmentAmount: request.body.InstallmentAmount,
    InstallmentDate: request.body.InstallmentDate
  };

  var myPromise = InstallmentsController.individual_record_update(
    column_name,
    value_,
    jsonObject_
  );

  myPromise.then(
    function(result) {
      var response_object = { results: result };
      response.send(response_object);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/delete_individual_installments", urlencodedParser, function(
  request,
  response
) {
  var column_name = request.body.column_name;
  //var mValue=parseInt(request.body.search_value, 10);
  var value_ = request.body.search_value;

  var UserIdColumnName = request.body.UserIdColumnName;

  var UserId = request.body.UserId;

  var myPromise = InstallmentsController.delete_user_specic_record(
    column_name,
    value_,
    UserIdColumnName,
    UserId
  );

  myPromise.then(
    function(result) {
      var response_object = { results: result };
      response.send(response_object);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/get_number_of_installments_records", urlencodedParser, function(
  request,
  response
) {
  var column_name = request.body.column_name;
  //var mValue=parseInt(request.body.search_value, 10);
  var value_ = request.body.search_value;

  var myPromise = InstallmentsController.get_number_of_records(
    column_name,
    value_
  );

  myPromise.then(
    function(result) {
      var response_object = { results: result };
      response.send(response_object);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/installments_user_specific_query", urlencodedParser, function(
  request,
  response
) {
  var ColumnName = request.body.ColumnName;
  //var mValue=parseInt(request.body.search_value, 10);
  var value_ = request.body.value_;

  var UserIdColumnName = request.body.UserIdColumnName;

  var UserId = request.body.UserId;

  var myPromise = InstallmentsController.user_specific_select_query(
    ColumnName,
    value_,
    UserIdColumnName,
    UserId
  );

  myPromise.then(
    function(result) {
      var response_object = { results: result };
      response.send(response_object);
    },
    function(err) {
      response.send("An error occurred");
      console.log(err);
    }
  );
});

router.post("/get_installment_paid_on_certain_date", urlencodedParser, function(
    request,
    response
) {
  var studentId = request.body.studentId;

  var searchDate = request.body.searchDate;

  var myPromise = InstallmentsController.getInstallmentPaidOnCertainDate(studentId, searchDate);

  myPromise.then(
      function(result) {
        var response_object = { results: result };
        response.send(response_object);
      },
      function(err) {
        response.send("An error occurred");
        console.log(err);
      }
  );
});


router.post("/get_installment_between_certain_period", urlencodedParser, function(
    request,
    response
) {
  var startDate = request.body.startDate;

  var endDate = request.body.endDate;

  var myPromise = InstallmentsController.getInstallmentsBetweenCertainPeriod(startDate, endDate);

  myPromise.then(
      function(result) {
        var response_object = { results: result };
        response.send(response_object);
      },
      function(err) {
        response.send("An error occurred");
        console.log(err);
      }
  );
});

router.post("/get_installment_for_particular_student_between_certain_period", urlencodedParser, function(
    request,
    response
) {

  var studentId = request.body.studentId;
  var startDate = request.body.startDate;
  var endDate = request.body.endDate;

  var myPromise = InstallmentsController.getInstallmentsForParticularStudentBetweenCertainPeriod(studentId,startDate, endDate);

  myPromise.then(
      function(result) {
        var response_object = { results: result };
        response.send(response_object);
      },
      function(err) {
        response.send("An error occurred");
        console.log(err);
      }
  );
});


module.exports = router;
