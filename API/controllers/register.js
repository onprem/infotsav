const randomstring = require("randomstring");
const nodemailer = require('nodemailer');

const sendEmail = () => {
	var transporter = nodemailer.createTransport({
        host: 'infotsav.in',
        port: 25,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'ubuntu', // generated ethereal user
            pass: 'cybrwr3' // generated ethereal password
        }
    });
    transporter.verify(function(error, success) {
	   if (error) {
	        console.log('miserable', error);
	   } else {
	        console.log('Server is ready to take our messages');

	        let mailOptions = {
		        from: '"Infotsav" <ubuntu@infotsav.in>', // sender address
		        to: 'prmsrswt@pm.me', // list of receivers
		        subject: 'This is a test mail', // Subject line
		        text: 'This is a test for you eden.', // plain text body
		        html: '<b>This is a test for you eden.</b>' // html body
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
	if(unique){
		return IFID;
	}
	else generateIFID(db, name);
}

const handleRegister = (req,res, db, bcrypt) =>{
	const {email, name, college, city, phone, gender, password} =req.body.userData;
	console.log(req.body.userData);
	if(!email || !name || !password || !college || !city || !phone || !gender)
	{
		return res.status(400).json('Incorrect form submission');
	}

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
					hash: randomstring.generate(15)
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
						ifid: generateIFID(db, name)
					})
					.then(() => {
						res.status(200).json('Sucessfully Registered');
						sendEmail();
					})
					.then(trx.commit)
				}).catch(trx.rollback)
			})
			.catch(err => {console.log(err); res.status(400).json('Unable to register')});
		})
		.catch(err => {console.log(err); res.status(400).json('Unable to register')});
	})
}

module.exports = {
	handleRegister: handleRegister
};