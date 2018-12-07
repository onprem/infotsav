 const handleProfile=(req,res,db)=>{
	const email = req.email;
	let user={}, events;
 	db.select('*').from('users').where({email})
	.then(user => {
		if(user.length){
			const {ifid} = user[0];
			db.select('*').from('event_reg').where({ifid})
			.then(registrations => {
				let userData = {
					userEventReg: registrations,
					user: user[0]
				}
				res.status(200).json(userData);
			})
		}
		else
			res.status(404).json('No such user');
	})
	.catch(err => res.status(404).json('Something is wrong'));
}

module.exports={
	handleProfile: handleProfile
}