
const handleEventReg = (req, res, db, xss) =>{
	const xssOptions = {
		whiteList: [],
		stripIgnoreTag: [],
		stripIgnoreTagBody: ['script']
	};

	const init = req.body.init;
	const eid = req.body.eid;
	const ifid = xss(req.body.ifid);
	let teamid;
	if(init){
		// const email = req.email;
		teamid = ifid+'-'+eid;
	}
	else {
		teamid = req.body.teamid;
	}

	if(!ifid || !eid || !teamid){
		return res.status(400).json('Incorrect form submission');
	}
	
	db.select('*').from('event_reg').where({ifid, eid})
	.then(reges =>{
		if(reges.length)
			return res.status(400).json('Already registered!');
		else {
			db.select('*').from('users').where({ifid})
			.then((data) =>{
				if(!data.length)
					return res.status(400).json('User does not exist!');
				else{
					db.transaction(trx=>{
						return trx.insert({
							ifid: ifid,
							eid: eid,
							teamid: teamid
						})
						.into('event_reg')
						.then(() => {
							return trx('payment')
							.insert({
								teamid: teamid,
								status: 0
							})
							.then(() =>{
								db('event_reg')
								.join('payment', 'event_reg.teamid', '=', 'payment.teamid')
								.join('events', 'events.eid', '=', 'event_reg.eid')
								.select('event_reg.eid', 'events.ename', 'events.category', 'payment.teamid', 'payment.status')
								.where('event_reg.ifid', '=', ifid)
								.then(registrations =>{
									res.status(200).json(registrations);
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
	});
}

module.exports = {
	handleEventReg: handleEventReg
};