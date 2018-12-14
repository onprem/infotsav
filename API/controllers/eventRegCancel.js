
const handleEventRegCancel = (req, res, db, xss) =>{
	const xssOptions = {
		whiteList: [],
		stripIgnoreTag: [],
		stripIgnoreTagBody: ['script']
	};

	const {ifid, eid} = req.body;
	let ifidUser = ifid;
	// let ifidUser = req.email;

	// db.select('*').from('users').where({email})
	// .then(authUser => {
	// 	if(!authUser.length)
	// 		throw(authUser);
	// 	ifidUser = authUser[0].ifid;
	// })
	// .catch(() => res.status(400).json('What the fuck?'));

	if(!ifid || !eid){
		return res.status(400).json('Incomplete request!');
	}
	
	db.select('*').from('event_reg').where({ifid, eid})
	.then(reges =>{
		console.log('1', reges);
		if(!reges.length)
			return res.status(400).json('Never registered!');
		else {
			db.transaction(trx=>{
				const tid = reges[0].teamid;
				return trx('event_reg')
				.where({ifid, eid})
				.del()
				.then((delRes1) => {
					console.log('2', delRes1);
					db.select('*').from('event_reg').where({teamid: tid})
					.then(reges2 => {
						console.log('3', reges2, reges2.length);
						if(reges2.length){
							console.log('4', reges2);
							return Promise.resolve('1');
						}
						else
						trx('payment')
						.where({teamid: tid})
						.del()
					})
					.then((som) => {
						console.log('5', som);

						db('event_reg')
						.join('payment', 'event_reg.teamid', '=', 'payment.teamid')
						.join('events', 'events.eid', '=', 'event_reg.eid')
						.select('event_reg.eid', 'events.ename', 'events.category', 'payment.teamid', 'events.fee', 'payment.status')
						.where('event_reg.ifid', '=', ifidUser)
						.then(registrations =>{
							console.log('6', registrations);
							res.status(200).json(registrations);
						})
						.then(trx.commit)
					})
					.catch(trx.rollback)
				})
				.catch(trx.rollback)
			})
			.catch(err => {console.log(err); res.status(400).json('Something went wrong!')});
		}
	});
}

module.exports = {
	handleEventRegCancel: handleEventRegCancel
};