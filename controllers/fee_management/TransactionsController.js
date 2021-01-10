/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the Transactions's controller class.
It receives calls from the "TransactionsRoutes" class and
passes the calls down to the "TransactionsModel" class
*/



const TransactionsModel = require('../../models/fee_management/TransactionsModel.js');




module.exports = class TransactionsController{
    constructor(){

    }



    static insert(jsonObject_){
        return new Promise(function(resolve, reject) {

            var myPromise = TransactionsModel.insert(jsonObject_);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }





    static get_all_records(){
        return new Promise(function(resolve, reject) {

            var myPromise = TransactionsModel.get_all_records();


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }





    static get_specific_records(ColumnName,value_){
        return new Promise(function(resolve, reject) {

            var myPromise = TransactionsModel.get_specific_records(ColumnName,value_);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })
        })
    }




    static batch_update(jsonObject_){
        return new Promise(function(resolve, reject) {


            var myPromise = TransactionsModel.batch_update(jsonObject_);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }





    static individual_record_update(ColumnName,value_,jsonObject_){
        return new Promise(function(resolve, reject) {


            var myPromise = TransactionsModel.individual_record_update(ColumnName,value_,jsonObject_);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }





    static delete_user_specic_record(ColumnName,value_,UserIdColumnName,UserId){
        return new Promise(function(resolve, reject) {


            var myPromise = TransactionsModel.delete_user_specic_record(ColumnName,value_,UserIdColumnName,UserId);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }



    static get_number_of_records(ColumnName,value_){
        return new Promise(function(resolve, reject) {


            var myPromise = TransactionsModel.get_number_of_records(ColumnName,value_);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }






    static user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId){
        return new Promise(function(resolve, reject) {


            var myPromise = TransactionsModel.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }


    static fetchTransactionsByDate(transactionDate){
        return new Promise(function(resolve, reject) {
            var myPromise = TransactionsModel.fetchTransactionsByDate(transactionDate);
            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }

    static fetchTransactionsByDateRange(transactionStartDate,transactionEndDate){
        return new Promise(function(resolve, reject) {
            var myPromise = TransactionsModel.fetchTransactionsByDateRange(transactionStartDate,transactionEndDate);
            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }


}
