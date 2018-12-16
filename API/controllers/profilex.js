 const handleProfile=(req,res,db)=>{
	const email = req.email;
	let user={}, events;
 	db.select('*').from('users').where({email})
	.then(user => {
		if(user.length){
			const {ifid} = user[0];
			db('event_reg')
			.join('payment', 'event_reg.teamid', '=', 'payment.teamid')
			.join('events', 'events.eid', '=', 'event_reg.eid')
			.select('event_reg.eid', 'events.ename', 'events.category', 'payment.teamid', 'events.fee', 'payment.status')
			.where('event_reg.ifid', '=', ifid)
			.then(registrations => {
				var subquery = db('event_reg').where({ifid}).select('teamid');
				db('event_reg')
				.join('users','users.ifid', '=', 'event_reg.ifid')
				.groupBy('event_reg.teamid', 'event_reg.eid', 'event_reg.ifid')
				.where('event_reg.teamid', 'in', subquery)
				.then((teamData =>{
					let userData = {
						userEventReg: registrations,
						userTeams: teamData,
						user: user[0]
					}
					// console.log(teamData);
					res.status(200).json(userData);
				}))
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