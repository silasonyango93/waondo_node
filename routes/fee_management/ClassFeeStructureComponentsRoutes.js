/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the class_fee_structure_components table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"ClassFeeStructureComponentsController" class
*/

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const ClassFeeStructureComponentsController = require("../../controllers/fee_management/ClassFeeStructureComponentsController.js");

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  next();
});

router.post("/add_class_fee_structure_components", urlencodedParser, function(
  request,
  response
) {
  var jsonObject_ = {
    ClassFeeStructureId: request.body.ClassFeeStructureId,
      FeeComponentId: request.body.FeeComponentId,
    FeeComponentRatio: request.body.FeeComponentRatio
  };

  var myPromise = ClassFeeStructureComponentsController.insert(jsonObject_);

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

router.post(
  "/get_all_class_fee_structure_components",
  urlencodedParser,
  function(request, response) {
    var myPromise = ClassFeeStructureComponentsController.get_all_records();

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
  }
);

router.post(
  "/get_specific_class_fee_structure_components",
  urlencodedParser,
  function(request, response) {
    var mKey = request.body.column_name;
    //var mValue=parseInt(request.query.search_value, 10);
    var mValue = request.body.search_value;

    var myPromise = ClassFeeStructureComponentsController.get_specific_records(
      mKey,
      mValue
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
  }
);

router.post(
  "/update_class_fee_structure_components",
  urlencodedParser,
  function(request, response) {
    var jsonObject_ = {
      ClassFeeStructureId: request.body.ClassFeeStructureId,
      FeeComponentName: request.body.FeeComponentName,
      FeeComponentRatio: request.body.FeeComponentRatio
    };

    var myPromise = ClassFeeStructureComponentsController.batch_update(
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
  }
);

router.post(
  "/update_individual_class_fee_structure_components",
  urlencodedParser,
  function(request, response) {
    var column_name = request.body.ColumnName;
    var value_ = request.body.ColumnValue;

    var jsonObject_ = {
      ClassFeeStructureId: request.body.ClassFeeStructureId,
      FeeComponentName: request.body.FeeComponentName,
      FeeComponentRatio: request.body.FeeComponentRatio
    };

    var myPromise = ClassFeeStructureComponentsController.individual_record_update(
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
  }
);

router.post(
  "/delete_individual_class_fee_structure_components",
  urlencodedParser,
  function(request, response) {
    var column_name = request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_ = request.body.search_value;

    var UserIdColumnName = request.body.UserIdColumnName;

    var UserId = request.body.UserId;

    var myPromise = ClassFeeStructureComponentsController.delete_user_specic_record(
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
  }
);

router.post(
  "/get_number_of_class_fee_structure_components_records",
  urlencodedParser,
  function(request, response) {
    var column_name = request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_ = request.body.search_value;

    var myPromise = ClassFeeStructureComponentsController.get_number_of_records(
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
  }
);

router.post(
  "/class_fee_structure_components_user_specific_query",
  urlencodedParser,
  function(request, response) {
    var ColumnName = request.body.ColumnName;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_ = request.body.value_;

    var UserIdColumnName = request.body.UserIdColumnName;

    var UserId = request.body.UserId;

    var myPromise = ClassFeeStructureComponentsController.user_specific_select_query(
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
  }
);



router.post(
    "/retrieve_fee_components_of_a_class_fee_structure",
    urlencodedParser,
    function(request, response) {
        var classFeeStructureId = request.body.classFeeStructureId;

        var myPromise = ClassFeeStructureComponentsController.retrieveFeeComponentOfAClassFeeStructure(classFeeStructureId);

        myPromise.then(
            function(result) {
                response.send(result);
            },
            function(err) {
                response.send("An error occurred");
                console.log(err);
            }
        );
    }
);

module.exports = router;
