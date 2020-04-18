const TRANSACTION_SERVICE_BASE_URL = "http://transaction.waondo.agweria.com";
const axios = require("axios");

module.exports = class TransactionServiceConnector {
    constructor() {}

    static transactionsServicePost(payload, apiRoute) {
        return new Promise(function(resolve, reject) {
            axios
                .post(
                    transactionsIp + apiRoute,
                    querystring.stringify({
                        ...payload
                    })
                )
                .then(response => {
                    resolve(response);
                })
                .catch(response => {
                    reject(response);
                });
        });
    }

    
    
    static transactionsServiceGetAll(apiRoute) {
        return new Promise(function(resolve, reject) {
            axios
                .post(transactionsIp + apiRoute)
                .then(response => {
                    resolve(response);
                })
                .catch(response => {
                    reject(response);
                });
        });
    }

    
    
    static  promiselessTransactionsServiceGetAll(apiRoute) {
        return axios.post(TRANSACTION_SERVICE_BASE_URL + apiRoute);
    } 

    
    
    // static promiselessTransactionsServicePost = (payload, apiRoute) =>
    //     axios.post(
    //         transactionsIp + apiRoute,
    //         querystring.stringify({
    //             ...payload
    //         })
    //     );


};
