const paytmIndex = require("./paytm/services/index");
const fetch = require('node-fetch');

const handleCallback = (req,res, db) =>{
	console.log('-------req------------');
	console.log(req.body);
	paytmIndex.responsePayment(req.body).then(
        success => {
            var responseData = success;
            console.log('-----------------responseData----------');
            console.log(responseData);
            var JsonData = {
            	MID: responseData.MID,
            	ORDERID: responseData.ORDERID,
            	CHECKSUMHASH: responseData.CHECKSUMHASH
            };
            console.log('-----------------JsonData----------');
            console.log(JsonData);
            fetch('https://securegw-stage.paytm.in/merchant-status/getTxnStatus', {
				method: 'post',
				headers: {'Content-type': 'application/json'},
				body: JSON.stringify(JsonData)
			})
			.then(response => {
				return response.json()
			})
			.then((user) => {
				console.log('-----------------doubleverify----------');
				console.log(user);
				res.send(user.STATUS);
			})
			.catch(err => {console.log('error:')});
        },
        error => {
        	console.log('-----------------shit----------');
            res.send(error);
        }
    );
}
module.exports = {
	handleCallback: handleCallback
};