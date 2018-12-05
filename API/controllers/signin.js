const handleSignin = (req,res,db,bcrypt)=>{
	//(db, bcrypt) => (req, res) =>
	const {password} = req.body;
	const email = req.body.username;
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
							res.status(200).json(user[0])
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