/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the class's controller class.
It receives calls from the "ClassRoutes" class and
passes the calls down to the "ClassModel" class
*/

const ClassModel = require("../../models/classroom_configurations/ClassModel.js");

module.exports = class ClassController {
  constructor() {}

  static insert(jsonObject_) {
    return new Promise(function(resolve, reject) {
      var myPromise = ClassModel.insert(jsonObject_);

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
      var myPromise = ClassModel.get_all_records();

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
      var myPromise = ClassModel.get_specific_records(ColumnName, value_);

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
      var myPromise = ClassModel.batch_update(jsonObject_);

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
      var myPromise = ClassModel.individual_record_update(
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
      var myPromise = ClassModel.delete_user_specic_record(
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
      var myPromise = ClassModel.get_number_of_records(ColumnName, value_);

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
      var myPromise = ClassModel.user_specific_select_query(
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

  static getAllActualClassesByFullDescription() {
    return new Promise(function(resolve, reject) {
      var myPromise = ClassModel.getAllActualClassesByFullDescription();

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

  static getAStudentClassDetails(studentId) {
    return new Promise(function(resolve, reject) {
      var myPromise = ClassModel.getAStudentClassDetails(studentId);

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

  static getAnActualClassByClassLevelAndStreamName(academicClassLevelId,streamName) {
    return new Promise(function(resolve, reject) {
      var myPromise = ClassModel.getAnActualClassByClassLevelAndStreamName(academicClassLevelId,streamName);

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
