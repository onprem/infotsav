
const handleLostUpdate = (req,res,db)=>{
	const {user} = req.body;
	db('lost')
		.where({user})
		.increment('count',1)
		.then(value => {
			if(value){
				db.select('*').from('lost').where({user})
				.then(entry => res.status(200).json(entry[0].count))
				.catch(err => res.status(400).json('Could not fetch'))
			}
			else 
				throw('Could not update');
		})
		.catch(err => res.status(400).json(err));
}

module.exports={
	handleLostUpdate: handleLostUpdate
};