/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the term table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"TermController" class
*/

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const TermController = require("../../controllers/term_management/TermController.js");

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  next();
});

router.post("/add_term", urlencodedParser, function(request, response) {
  var jsonObject_ = {
    TermIterationId: request.body.TermIterationId,
    TermStartDate: request.body.TermStartDate,
    TermEndDate: request.body.TermEndDate,
    Year: new Date().getFullYear()
  };

  var myPromise = TermController.insert(jsonObject_);

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

router.post("/get_all_term", urlencodedParser, function(request, response) {
  var myPromise = TermController.get_all_records();

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

router.post("/get_specific_term", urlencodedParser, function(
  request,
  response
) {
  var mKey = request.body.column_name;
  //var mValue=parseInt(request.query.search_value, 10);
  var mValue = request.body.search_value;

  var myPromise = TermController.get_specific_records(mKey, mValue);

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

router.post("/update_term", urlencodedParser, function(request, response) {
  var jsonObject_ = {
    TermIterationId: request.body.TermIterationId,
    TermStartDate: request.body.TermStartDate,
    TermEndDate: request.body.TermEndDate,
    Year: request.body.Year
  };

  var myPromise = TermController.batch_update(jsonObject_);

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

router.post("/update_individual_term", urlencodedParser, function(
  request,
  response
) {
  var column_name = request.body.ColumnName;
  var value_ = request.body.ColumnValue;

  var jsonObject_ = {
    TermIterationId: request.body.TermIterationId,
    TermStartDate: request.body.TermStartDate,
    TermEndDate: request.body.TermEndDate,
    Year: request.body.Year
  };

  var myPromise = TermController.individual_record_update(
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

router.post("/delete_individual_term", urlencodedParser, function(
  request,
  response
) {
  var column_name = request.body.column_name;
  //var mValue=parseInt(request.body.search_value, 10);
  var value_ = request.body.search_value;

  var UserIdColumnName = request.body.UserIdColumnName;

  var UserId = request.body.UserId;

  var myPromise = TermController.delete_user_specic_record(
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

router.post("/get_number_of_term_records", urlencodedParser, function(
  request,
  response
) {
  var column_name = request.body.column_name;
  //var mValue=parseInt(request.body.search_value, 10);
  var value_ = request.body.search_value;

  var myPromise = TermController.get_number_of_records(column_name, value_);

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

router.post("/term_user_specific_query", urlencodedParser, function(
  request,
  response
) {
  var ColumnName = request.body.ColumnName;
  //var mValue=parseInt(request.body.search_value, 10);
  var value_ = request.body.value_;

  var UserIdColumnName = request.body.UserIdColumnName;

  var UserId = request.body.UserId;

  var myPromise = TermController.user_specific_select_query(
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

router.post("/get_all_current_year_terms", urlencodedParser, function(
  request,
  response
) {
  var TableOne = request.body.TableOne;

  var JoiningKey = request.body.JoiningKey;

  var SearchColumn = request.body.SearchColumn;

  var SearchValue = request.body.SearchValue;

  var myPromise = TermController.get_all_current_year_terms(
    TableOne,
    JoiningKey,
    SearchColumn,
    SearchValue
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


router.post("/get_term_by_date", urlencodedParser, function(
    request,
    response
) {

  var searchDate = request.body.searchDate;

  var myPromise = TermController.getTerm(searchDate);

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




router.post("/get_term_by_term_id", urlencodedParser, function(
    request,
    response
) {

  var termId = request.body.termId;

  var myPromise = TermController.getTermDetailsByTermId(termId);

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
