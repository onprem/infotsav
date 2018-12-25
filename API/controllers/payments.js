const returnPayments=(req,res,db)=>{
	var status='SUCCESS';
 	db.select('*').from('paytm').where({status})
	.then(payments => {
		var status='PENDING'
		db.select('*').from('paytm').where({status})
		.then(pendPayments => {
			let payData = {
				pendingPayments: pendPayments,
				successPayments: payments
			}
			res.status(200).json(payData);
		})
	})
	.catch(err => {console.log('Payments: ', err); res.status(400).json('Something is wrong');});
}

module.exports={
	returnPayments: returnPayments
}