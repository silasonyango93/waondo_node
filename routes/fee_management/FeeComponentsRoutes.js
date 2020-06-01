/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the fee_components table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"FeeComponentsController" class
*/

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const FeeComponentsController = require("../../controllers/fee_management/FeeComponentsController.js");

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
    next();
});

router.post("/add_fee_components", urlencodedParser, function(request, response) {
    var jsonObject_ = {
        FeeComponentDescription: request.body.FeeComponentDescription
    };

    var myPromise = FeeComponentsController.insert(jsonObject_);

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

router.post("/get_all_fee_components", urlencodedParser, function(
    request,
    response
) {
    var myPromise = FeeComponentsController.get_all_records();

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

router.post("/get_specific_fee_components", urlencodedParser, function(
    request,
    response
) {
    var mKey = request.body.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var mValue = request.body.search_value;

    var myPromise = FeeComponentsController.get_specific_records(mKey, mValue);

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

router.post("/update_fee_components", urlencodedParser, function(
    request,
    response
) {
    var jsonObject_ = {
        FeeComponentDescription: request.body.FeeComponentDescription
    };

    var myPromise = FeeComponentsController.batch_update(jsonObject_);

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

router.post("/update_individual_fee_components", urlencodedParser, function(
    request,
    response
) {
    var column_name = request.body.ColumnName;
    var value_ = request.body.ColumnValue;

    var jsonObject_ = {
        FeeComponentDescription: request.body.FeeComponentDescription
    };

    var myPromise = FeeComponentsController.individual_record_update(
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

router.post("/delete_individual_fee_components", urlencodedParser, function(
    request,
    response
) {
    var column_name = request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_ = request.body.search_value;

    var UserIdColumnName = request.body.UserIdColumnName;

    var UserId = request.body.UserId;

    var myPromise = FeeComponentsController.delete_user_specic_record(
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

router.post("/get_number_of_fee_components_records", urlencodedParser, function(
    request,
    response
) {
    var column_name = request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_ = request.body.search_value;

    var myPromise = FeeComponentsController.get_number_of_records(
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

router.post("/fee_components_user_specific_query", urlencodedParser, function(
    request,
    response
) {
    var ColumnName = request.body.ColumnName;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_ = request.body.value_;

    var UserIdColumnName = request.body.UserIdColumnName;

    var UserId = request.body.UserId;

    var myPromise = FeeComponentsController.user_specific_select_query(
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


router.post("/get_a_student_fee_components", urlencodedParser, function(
    request,
    response
) {

    var studentId = request.body.studentId;

    var myPromise = FeeComponentsController.getAStudentFeeComponents(studentId);

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


module.exports = router;
