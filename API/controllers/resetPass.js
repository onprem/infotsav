const randomstring = require("randomstring");
const nodemailer = require('nodemailer');

const sendEmail = (semail, sverifyHash, seyeFID) => {
	console.log("Oh Yeah");
	const verifyLink = 'https://www.infotsav.in/resetPass/id='+seyeFID+'/hash='+sverifyHash;
	console.log(verifyLink);
	var transporter = nodemailer.createTransport({
        host: 'infotsav.in',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'admin', // generated ethereal user
            pass: 'test123' // generated ethereal password
        }
    });
    transporter.verify(function(error, success) {
	   if (error) {
	        console.log('miserable', error);
	   } else {
	        console.log('Server is ready to take our messages');

	        let mailOptions = {
		        from: '"Infotsav" <admin@infotsav.in>', // sender address
		        to: semail, // list of receivers
		        subject: 'Change your password for Infotsav', // Subject line
		        text: 'Your request for password change for Infotsav 19 has been recieved. Please verify your email account to proceed to change your password by clicking the following link'+verifyLink+'Team Infotsav', // plain text body
		        html: '<p>Your request for password change for Infotsav 19 has been recieved. Please verify your email account to proceed to change your password by clicking the following link </p> <a href="'+verifyLink+'">'+verifyLink+'</a><br /><br />Team Infotsav' // html body
		    };
		    transporter.sendMail(mailOptions, (error, info) => {
		        if (error) {
		            return console.log(error);
		        }
		        console.log('Message sent: %s', info.messageId);
		        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
		    });
	   }
	});
	
}

const handleResetPassReq = (req,res, db, xss) =>{
	const xssOptions = {
		whiteList: [],
		stripIgnoreTag: [],
		stripIgnoreTagBody: ['script']
	};
	const email = xss(req.body.email, xssOptions);
	// const {email} =req.body;
	const verifyHash = randomstring.generate(15);

	if(!email)
	{
		return res.status(400).json('Incorrect form submission');
	}
	db.select('*').from('users').where({email})
	.then((data) =>{
		if(data.length){
			db.select('*').from('pass_reset').where({email})
			.then(passData =>{
				if(!passData.length){
					return db('pass_reset').insert({
						email: email,
						hash: verifyHash
					})
					.then((didItHappen)=> {
						res.status(200).json('Visit the link sent via email to continue');
						sendEmail(email, verifyHash, data.ifid);				
					})
					.catch(()=> res.status(400).json('Some error occurred!'))
				}
				else{
					return db('pass_reset').update({hash: verifyHash}).where({email})
					.then(()=>{
						res.status(200).json('Visit the link sent via email to continue');
						sendEmail(email, verifyHash, data.ifid);				
					})
					.catch(()=> res.status(400).json('Some error occurred!'))
				}
			})
		}
		else
			res.status(400).json('User does not exist!');
	})
	.catch(err => {console.log(err); res.status(400).json('Something went wrong!')});
}


const handleResetPassRes = (req,res,db, bcrypt)=>{
	const {id, hash} = req.body;
	db.transaction(trx =>{
	 	trx.select('*').from('pass_reset').where({hash: hash})
		.then(verification_entry => {
			bcrypt.hash(password, null, null, function(err, hashedPass) {
				if(err) {
					console.log(err);
					throw(err);
				}
				if(verification_entry.length){
					return trx('credentials').update({password: hashedPass}).where({email: verification_entry[0].email})
						.then(() =>{
							return trx('pass_reset')
							.where({
								email: verification_entry[0].email,
								hash: hash
							})
							.del()
							.then(()=> res.status(200).json('Email verification successfull!'))
							.then(trx.commit)
						})
						.catch(trx.rollback)
				}
				else
					res.status(302).redirect('https://www.infotsav.in/404');
			})
		})
		.catch(trx.rollback)
	})
	.catch(err => res.status(400).json('Something is wrong'));
}

module.exports = {
	handleResetPassReq: handleResetPassReq
};