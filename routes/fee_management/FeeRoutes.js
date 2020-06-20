/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the fee table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the 
"FeeController" class
*/



const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const FeeController = require('../../controllers/fee_management/FeeController.js');



   //Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  
  next();
});



   router.post('/add_fee', urlencodedParser,function(request,response){
	   
	    
	   
        var	jsonObject_ = {
        
			
			AdmissionNo:request.body.AdmissionNo,
			LunchScheme:request.body.LunchScheme,
			PE:request.body.PE,
			EW:request.body.EW,
			LT:request.body.LT,
			RMI:request.body.RMI,
			Administration:request.body.Administration,
			Activity:request.body.Activity,
			Total:request.body.Total,
			RecentPaidDate:request.body.RecentPaidDate,
			TermBalance:request.body.TermBalance,
			AnnualBalance:request.body.AnnualBalance
			
			
        };
	
	     
          var myPromise = FeeController.insert(jsonObject_);
	          
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

    });






   router.post('/get_all_fee',urlencodedParser,function(request,response){
    
    var myPromise = FeeController.get_all_records();
	      
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
			   console.log(err);
           response.send("An error occurred");
           })

   });









   router.post('/get_specific_fee',urlencodedParser,function(request,response){
        var mKey=request.body.column_name;
        //var mValue=parseInt(request.query.search_value, 10);
        var mValue=request.body.search_value;
       
        


        var myPromise = FeeController.get_specific_records(mKey,mValue);
	        
		   
		   myPromise.then(function(result) {
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })
	        

     });













   router.post('/update_fee',urlencodedParser,function(request,response){
	   
	  
	   var	jsonObject_ = {
        
			
			AdmissionNo:request.body.AdmissionNo,
			LunchScheme:request.body.LunchScheme,
			PE:request.body.PE,
			EW:request.body.EW,
			LT:request.body.LT,
			RMI:request.body.RMI,
			Administration:request.body.Administration,
			Activity:request.body.Activity,
			Total:request.body.Total,
			RecentPaidDate:request.body.RecentPaidDate,
			TermBalance:request.body.TermBalance,
			AnnualBalance:request.body.AnnualBalance
			
			
        };
	
	
    
    var myPromise = FeeController.batch_update(jsonObject_);
	   
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });








   router.post('/update_individual_fee',urlencodedParser,function(request,response){
	
          var column_name=request.body.ColumnName;
          var value_=request.body.ColumnValue;
	   
	   
	var	jsonObject_ = {
        
			
			AdmissionNo:request.body.AdmissionNo,
			LunchScheme:request.body.LunchScheme,
			PE:request.body.PE,
			EW:request.body.EW,
			LT:request.body.LT,
			RMI:request.body.RMI,
			Administration:request.body.Administration,
			Activity:request.body.Activity,
			Total:request.body.Total,
			RecentPaidDate:request.body.RecentPaidDate,
			TermBalance:request.body.TermBalance,
			AnnualBalance:request.body.AnnualBalance
			
			
        };
	
         
         var myPromise = FeeController.individual_record_update(column_name,value_,jsonObject_);
	         	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

  });






   router.post('/delete_individual_fee',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	   
	var UserIdColumnName=request.body.UserIdColumnName;
	   
	var UserId=request.body.UserId;
	
    
    var myPromise = FeeController.delete_user_specic_record(column_name,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });






   router.post('/get_number_of_fee_records',urlencodedParser,function(request,response){
	
    var column_name=request.body.column_name;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.search_value;
	
	
    
    var myPromise = FeeController.get_number_of_records(column_name,value_);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });







router.post('/fee_user_specific_query',urlencodedParser,function(request,response){
	
    var ColumnName=request.body.ColumnName;
    //var mValue=parseInt(request.body.search_value, 10);
    var value_=request.body.value_;
	
	var UserIdColumnName=request.body.UserIdColumnName;
	
	var UserId=request.body.UserId;
	
	
    
    var myPromise = FeeController.user_specific_select_query(ColumnName,value_,UserIdColumnName,UserId);
	      	        
		   
		   myPromise.then(function(result) {
        
           var response_object={results:result}
           response.send(response_object);
           }, function(err) {
           response.send("An error occurred");
			   console.log(err);
           })

   });



router.post('/get_all_students_with_minimum_term_balance',urlencodedParser,function(request,response){

    var minimunTermBalance=request.body.minimunTermBalance;
    
    var myPromise = FeeController.getAllStudentsWithAMinimumTermBalance(minimunTermBalance);


    myPromise.then(function(result) {

        var response_object={results:result}
        response.send(response_object);
    }, function(err) {
        response.send("An error occurred");
        console.log(err);
    })

});




router.post('/get_all_students_in_a_class_with_minimum_term_balance',urlencodedParser,function(request,response){

    var classId=request.body.classId;
    var minimunTermBalance=request.body.minimunTermBalance;

    var myPromise = FeeController.getAllStudentsInAClassWithAMinimumTermBalance(classId,minimunTermBalance);


    myPromise.then(function(result) {

        var response_object={results:result}
        response.send(response_object);
    }, function(err) {
        response.send("An error occurred");
        console.log(err);
    })

});

 
 
module.exports = router;
