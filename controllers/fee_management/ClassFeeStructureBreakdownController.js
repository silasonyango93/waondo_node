/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the ClassFeeStructureBreakdown's controller class.
It receives calls from the "ClassFeeStructureBreakdownRoutes" class and
passes the calls down to the "ClassFeeStructureBreakdownModel" class
*/

const ClassFeeStructureBreakdownModel = require("../../models/fee_management/ClassFeeStructureBreakdownModel.js");

module.exports = class ClassFeeStructureBreakdownController {
  constructor() {}

  static insert(jsonObject_) {
    return new Promise(function(resolve, reject) {
      var myPromise = ClassFeeStructureBreakdownModel.insert(jsonObject_);

      myPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  static get_all_records() {
    return new Promise(function(resolve, reject) {
      var myPromise = ClassFeeStructureBreakdownModel.get_all_records();

      myPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  static get_specific_records(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      var myPromise = ClassFeeStructureBreakdownModel.get_specific_records(
        ColumnName,
        value_
      );

      myPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  static batch_update(jsonObject_) {
    return new Promise(function(resolve, reject) {
      var myPromise = ClassFeeStructureBreakdownModel.batch_update(jsonObject_);

      myPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  static individual_record_update(ColumnName, value_, jsonObject_) {
    return new Promise(function(resolve, reject) {
      var myPromise = ClassFeeStructureBreakdownModel.individual_record_update(
        ColumnName,
        value_,
        jsonObject_
      );

      myPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  static delete_user_specic_record(
    ColumnName,
    value_,
    UserIdColumnName,
    UserId
  ) {
    return new Promise(function(resolve, reject) {
      var myPromise = ClassFeeStructureBreakdownModel.delete_user_specic_record(
        ColumnName,
        value_,
        UserIdColumnName,
        UserId
      );

      myPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  static get_number_of_records(ColumnName, value_) {
    return new Promise(function(resolve, reject) {
      var myPromise = ClassFeeStructureBreakdownModel.get_number_of_records(
        ColumnName,
        value_
      );

      myPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  static user_specific_select_query(
    ColumnName,
    value_,
    UserIdColumnName,
    UserId
  ) {
    return new Promise(function(resolve, reject) {
      var myPromise = ClassFeeStructureBreakdownModel.user_specific_select_query(
        ColumnName,
        value_,
        UserIdColumnName,
        UserId
      );

      myPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  static getFeeStructureForParticularStudentForParticularTerm(
    academicClassLevelId,
    termIterationId,
    studentResidenceId
  ) {
    return new Promise(function(resolve, reject) {
      var myPromise = ClassFeeStructureBreakdownModel.getFeeStructureForParticularStudentForParticularTerm(
        academicClassLevelId,
        termIterationId,
        studentResidenceId
      );

      myPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }

  static getFeeStructureForParticularAcademicClassLevel(
    academicClassLevelId,
    studentResidenceId
  ) {
    return new Promise(function(resolve, reject) {
      var myPromise = ClassFeeStructureBreakdownModel.getFeeStructureForParticularAcademicClassLevel(
        academicClassLevelId,
          studentResidenceId
      );

      myPromise.then(
        function(result) {
          resolve(result);
        },
        function(err) {
          reject(err);
        }
      );
    });
  }


  static retrieveFeeBreakDownOfAClassFeeStructure(classFeeStructureId) {
    return new Promise(function(resolve, reject) {
      var myPromise = ClassFeeStructureBreakdownModel.retrieveFeeBreakDownOfAClassFeeStructure(classFeeStructureId);

      myPromise.then(
          function(result) {
            resolve(result);
          },
          function(err) {
            reject(err);
          }
      );
    });
  }
};
