const handleAdmin=(req,res)=>{
	const email = req.email;
	if (email === 'prem@infotsav.in')
		res.sendStatus(200);
	else
		res.sendStatus(401);
}

module.exports={
	handleAdmin: handleAdmin
}