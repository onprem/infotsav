
const handleEasterRedeem = (req,res,db,xss)=>{
	const xssOptions = {
		whiteList: [],
		stripIgnoreTag: [],
		stripIgnoreTagBody: ['script']
	};
	const egg = xss(req.body.egg, xssOptions);	
	const email = req.email;
	//1. Check if egg is valid - Invalid code! Try again?
	//2. Fetch ifid from email
	//Check if not already redeemed same egg - Code already redeemed
	//3. Insert data into easter_redeem
	//4. Reduce score by a fixed amount, if not less than some amount
	//5. Send fresh score as response
	// if(!email || !egg)
	fetchScore(req, res, db);
	console.log('Hi');

		// throw('Nani?');
	// db.transaction(trx =>{
	//  	trx.select('*').from('verify').where({hash: hash})
	// 	.then(verification_entry => {
	// 		if(verification_entry.length){
	// 			return trx('users').update({confirm: 1}).where({email: verification_entry[0].email})
	// 				.then(() =>{
	// 					return trx('verify')
	// 					.where({
	// 						email: verification_entry[0].email,
	// 						hash: hash
	// 					})
	// 					.del()
	// 					.then(()=> res.status(200).json('Email verification successfull!'))
	// 					.then(trx.commit)
	// 				})
	// 				.catch(trx.rollback)
	// 		}
	// 		else
	// 			res.status(302).redirect('https://www.infotsav.in/404');
	// 	})
	// 	.catch(trx.rollback)
	// })
	// .catch(err => res.status(400).json('Something is wrong'));
}

const fetchScore = (req,res,db,emaill)=>{
	const email = emaill || req.email;
	db.select('*').from('users').where({email})
	.then(userInf => {
		const ifid = userInf[0].ifid;
		db('easter_redeem')
		.join('users', 'users.ifid', '=', 'easter_redeem.ifid')
		.select('easter_redeem.ifid', 'name')
		.sum({total: 'score'})
		.groupBy('easter_redeem.ifid')
		.orderBy('total', 'desc')
		.limit(15)
		.then((leaderboard) => {
			db('easter_redeem')
			.sum({total: 'score'})
			.where({ifid})
			.then(userScore => {
				const score = {userScore, leaderboard};
				return res.status(200).json(score);			
			})
		})
	})
	.catch(err => {console.log(err); return res.status(400).json('Something is wrong');});
}

module.exports={
	handleEasterRedeem: handleEasterRedeem,
	fetchScore: fetchScore
};