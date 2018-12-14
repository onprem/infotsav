const jwt = require('jsonwebtoken');
const secret = 'iAmVeryBadAtThis';

const handleSignin = (req,res,db,bcrypt,xss)=>{
	const xssOptions = {
		whiteList: [],
		stripIgnoreTag: [],
		stripIgnoreTagBody: ['script']
	};
	const {password} = req.body;
	const email = xss(req.body.username, xssOptions);
	// const email = req.body.username;
		if(!email || !password)
	{
		return res.status(400).json('Incorrect form submission');
	}

	db.select('email', 'password').from('credentials')
	.where({email})
	.then(data => {
		if(data.length){
			bcrypt.compare(password, data[0].password, function(err, result) {
				if(result)
					{
						return db.select('*').from('users')
						.where({email})
						.then(user =>{
							const {ifid} = user[0];
							db('event_reg')
							.join('payment', 'event_reg.teamid', '=', 'payment.teamid')
							.join('events', 'events.eid', '=', 'event_reg.eid')
							.select('event_reg.eid', 'events.ename', 'events.category', 'payment.teamid', 'payment.status')
							.where('event_reg.ifid', '=', ifid)
							.then(registrations => {
								let userData = {
									userEventReg: registrations,
									user: user[0]
								}

								// Issue token
						        const payload = {email};
						        const token = jwt.sign(payload, secret, {
						        	expiresIn: '24d'
						        });
						        res.status(200).cookie('token', token, { httpOnly: true }).json(userData)
							})
						})
						.catch(err => res.status(400).json('Invalid User'))
					}
				else
					return res.status(400).json("Invalid Credentials");
			 })
		}
		else res.status(400).json("Invalid Credentials");
	})
	.catch(err=> {console.log(err); res.status(400).json('Some error occurred')})	
}

module.exports={
	handleSignin: handleSignin
};