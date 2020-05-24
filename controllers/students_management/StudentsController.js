/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the Students's controller class.
It receives calls from the "StudentsRoutes" class and
passes the calls down to the "StudentsModel" class
*/

const StudentsModel = require("../../models/students_management/StudentsModel.js");

module.exports = class StudentsController {
    constructor() {}

    static insert(jsonObject_) {
        return new Promise(function(resolve, reject) {
            var myPromise = StudentsModel.insert(jsonObject_);

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
            var myPromise = StudentsModel.get_all_records();

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
            var myPromise = StudentsModel.get_specific_records(
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
            var myPromise = StudentsModel.batch_update(jsonObject_);

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
            var myPromise = StudentsModel.individual_record_update(
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
            var myPromise = StudentsModel.delete_user_specic_record(
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
            var myPromise = StudentsModel.get_number_of_records(
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
            var myPromise = StudentsModel.user_specific_select_query(
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

    static getAStudentResidenceDetails(studentId) {
        return new Promise(function(resolve, reject) {
            var myPromise = StudentsModel.getAStudentResidenceDetails(studentId);

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
