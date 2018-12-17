const randomstring = require("randomstring");
const paytmIndex = require("./paytm/services/index");

const handleEventPayment = (req,res, db) =>{
	const eid = req.body.eid;
	const ifid = req.body.ifid;
	const teamid = req.body.teamid;
	const fee = req.body.fee;
	if(!ifid || !eid || !teamid || !fee){
		return res.status(400).json('Incorrect form submission');
	}
	const orderid = teamid+'-'+randomstring.generate({length:3, charset:'numeric'});

	paytmIndex.initPayment(fee, orderid, ifid).then(
        success => {
            console.log("Chala");
            console.log(success);
            db.transaction(trx=>{
				return trx.insert({
					orderid: orderid, 
					teamid: teamid,
					txnid: '0',
					custid: ifid,
					status: 'WAITING',
					fee: fee,
					txndate: '0'
				})
				.into('paytm')
				.then(() => {
					res.send(success);
				})
				.then(trx.commit)
			}).catch(err => {console.log(err); res.status(400).json('Something went wrong!')});
        },
        error => {
            console.log("nhi Chala");
            res.send(error);
        }
    );
}
module.exports = {
	handleEventPayment: handleEventPayment
};