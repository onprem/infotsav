
const handleEventRegCancel = (req, res, db, xss) =>{
	const xssOptions = {
		whiteList: [],
		stripIgnoreTag: [],
		stripIgnoreTagBody: ['script']
	};

	const {ifid, eid} = req.body;
	if(!ifid || !eid){
		return res.status(400).json('Incomplete request!');
	}
	
	db.select('*').from('event_reg').where({ifid, eid})
	.then(reges =>{
		if(!reges.length)
			return res.status(400).json('Never registered!');
		else {
			db.transaction(trx=>{
				const tid = reges[0].teamid;
				return trx('event_reg')
				.where({ifid, eid})
				.del()
				.then(() => {
					db.select('*').from('event_reg').where({ifid, eid})
					.then(reges2 => {
						if(!reges2.length){
							trx('payment')
							.where({teamid: tid})
							.del()
						}
						db('event_reg')
						.join('payment', 'event_reg.teamid', '=', 'payment.teamid')
						.join('events', 'events.eid', '=', 'event_reg.eid')
						.select('event_reg.eid', 'events.ename', 'events.category', 'payment.teamid', 'events.fee', 'payment.status')
						.where('event_reg.ifid', '=', ifid)
						.then(registrations =>{
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