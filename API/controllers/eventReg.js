
const handleEventReg = (req,res, db, bcrypt, xss) =>{
	const xssOptions = {
		whiteList: [],
		stripIgnoreTag: [],
		stripIgnoreTagBody: ['script']
	};

	const init = req.body.init;
	const eid = req.body.eid;
	const ifid = xss(req.body.ifid)
	if(init){
		const email = req.email;
		const teamid = ifid+'-'+eid;
	}
	else {
		const teamid = req.body.teamid;
	}

	if(!ifid || !eid || !teamid)
		return res.status(400).json('Incorrect form submission');

	db.select('*').from('users').where({ifid}).
	then((data) =>{
		if(!data.length)
			return res.status(400).json('User does not exist!');
		else{
			db.transaction(trx=>{
				return trx.insert({
					email: email,
					password: hash
				})
				.into('credentials')
				.then(() => {
					return trx('verify')
					.insert({
						email: email,
						hash: verifyHash
					})
					.then(() =>{
						return trx('users')
						.insert({
							email: email, 
							name: name,
							college: college,
							gender: gender,
							city: city,
							mobile: phone,
							ifid: eyeFID
						})
						.then(() => {
							res.status(200).json('Sucessfully Registered');
							sendEmail(name, email, verifyHash, eyeFID);
						})
						.then(trx.commit)
					}).catch(trx.rollback)
				})
				.catch(trx.rollback)
			})
			.catch(err => {console.log(err); res.status(400).json('Something went wrong!')});
		}
	});
}

module.exports = {
	handleEventReg: handleEventReg
};