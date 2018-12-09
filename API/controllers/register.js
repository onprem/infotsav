const randomstring = require("randomstring");
const nodemailer = require('nodemailer');

const sendEmail = (semail, sverifyHash, seyeFID) => {
	console.log("Oh Yeah");
	const verifyLink = 'https://www.infotsav.in/verify/id='+seyeFID+'/hash='+sverifyHash;
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
		        subject: 'Verify your account for Infotsav', // Subject line
		        headers: {
			        'List-Unsubscribe': '<mailto:unsubscribe@infotsav.in>',
			        'Precedence': 'bulk'
			    },
		        text: 'Your request for registration in Infotsav 19 has been recieved. Please verify your email account to complete the registration by clicking the following link'+verifyLink+'Team Infotsav', // plain text body
		        html: '<p>Your request for registration in Infotsav 19 has been recieved. Please verify your email account to complete the registration by clicking the following link </p> <a href="'+verifyLink+'">'+verifyLink+'</a><br /><br />Team Infotsav' // html body
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

const isUniqueIFID = (db, IFID) =>{
	var booll = false;
	db.select('*').from('users').where({ifid: IFID})
	.then(users => {
		if(users.length === 0){
			booll = true;
		}
		else { 
			booll = false;
		};
	})
	return booll;	
}

const generateIFID = (db, name) => {
	let IFID = 'IF-';
	let nameChars = name.substr(0,2).toUpperCase();
	IFID = IFID+nameChars+'-'+randomstring.generate({length:3, charset:'numeric'});
	let unique = isUniqueIFID(db, IFID);
	if(true){
		return IFID;
	}
	else generateIFID(db, name);
}

const handleRegister = (req,res, db, bcrypt) =>{
	const {email, name, college, city, phone, gender, password} =req.body.userData;
	console.log(req.body.userData);

	const verifyHash = randomstring.generate(15);
	const eyeFID = generateIFID(db, name);

	if(!email || !name || !password || !college || !city || !phone || !gender)
	{
		return res.status(400).json('Incorrect form submission');
	}
	db.select('*').from('users').where({email}).
	then((data) =>{
		if(data.length)
			res.status(400).json('User already registered!');
		else{
			bcrypt.hash(password, null, null, function(err, hash) {
				if(err) console.log(err);
				db.transaction(trx=>{
					return trx.insert({
						email: email,
						password: hash
					})
					.into('credentials')
					.then(() => {
						return trx('verify')
						.insert({
							email: email,
							hash: verifyHash
						})
						.then(() =>{
							return trx('users')
							.insert({
								email: email, 
								name: name,
								college: college,
								gender: gender,
								city: city,
								mobile: phone,
								ifid: eyeFID
							})
							.then(() => {
								res.status(200).json('Sucessfully Registered');
								sendEmail(email, verifyHash, eyeFID);
							})
							.then(trx.commit)
						}).catch(trx.rollback)
					})
					.catch(trx.rollback)
				})
				.catch(err => {console.log(err); res.status(400).json('Something went wrong!')});
			})
		}
	});
}

module.exports = {
	handleRegister: handleRegister
};