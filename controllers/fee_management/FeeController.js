/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the fee's controller class.
It receives calls from the "FeeRoutes" class and
passes the calls down to the "FeeModel" class
*/



const FeeModel = require('../../models/fee_management/FeeModel.js');




module.exports = class FeeController{
    constructor(){

    }
	
	
	
   static insert(jsonObject_){
	 return new Promise(function(resolve, reject) {  
     
     var myPromise = FeeModel.insert(jsonObject_);
		  
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		 
	 })
	}		

	
	
	
	
   // static get_all_records(){
	//    return new Promise(function(resolve, reject) {
   //
   //      var myPromise = FeeModel.get_all_records();
	//
	//
	// 	   myPromise.then(function(result) {
   //
   //         resolve(result);
   //         }, function(err) {
   //         reject(err);
   //         })
	//
	//  })
   //  }

    static async get_all_records() {
        var result = await FeeModel.get_all_records();
        return result;
    }





    static get_specific_records(ColumnName,value_){
	   return new Promise(function(resolve, reject) {  
        
        var myPromise = FeeModel.get_specific_records(ColumnName,value_);
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
	 })
    }	
			
	
	
	
   static batch_update(jsonObject_){
	   return new Promise(function(resolve, reject) {  
       
        
		var myPromise = FeeModel.batch_update(jsonObject_);
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static individual_record_update(ColumnName,value_,jsonObject_){
	   return new Promise(function(resolve, reject) { 
       
        
		var myPromise = FeeModel.individual_record_update(ColumnName,value_,jsonObject_);
		   
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	
	
	
	
   static delete_user_specic_record(ColumnName,value_,UserIdColumnName,UserId){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = FeeModel.delete_user_specic_record(ColumnName,value_,UserIdColumnName,UserId);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }		
	
	

   static get_number_of_records(ColumnName,value_){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = FeeModel.get_number_of_records(ColumnName,value_);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }	
	
	
	
	
	
	
	static user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId){
	   return new Promise(function(resolve, reject) { 
        
        
		var myPromise = FeeModel.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
		    
		   
		   myPromise.then(function(result) {
        
           resolve(result);
           }, function(err) {
           reject(err);
           })
		   
	 })
    }


    static getAllStudentsWithAMinimumTermBalance(minimunTermBalance){
        return new Promise(function(resolve, reject) {


            var myPromise = FeeModel.getAllStudentsWithAMinimumTermBalance(minimunTermBalance);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }


    static getAllStudentsInAClassWithAMinimumTermBalance(classId,minimunTermBalance){
        return new Promise(function(resolve, reject) {


            var myPromise = FeeModel.getAllStudentsInAClassWithAMinimumTermBalance(classId,minimunTermBalance);


            myPromise.then(function(result) {

                resolve(result);
            }, function(err) {
                reject(err);
            })

        })
    }

}
