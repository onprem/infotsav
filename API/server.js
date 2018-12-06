const express=require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const cookieParser = require('cookie-parser');
const signin = require('./controllers/signin');
const register = require('./controllers/register');
const verify = require('./controllers/verify');
const withAuth = require('./middleware');
 

const db = knex({
  client: 'mysql',
  connection: {
  	// connectionString: process.env.DATABASE_URL,
  	// ssl: true
    host : 'infotsav.in',
    user : 'infotsav',
    password : 'tukki@123',
    database : 'infotsav'
  }
});

const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/api', (req,res)=>{ res.send('it is working')});
app.post('/api/register', (req,res)=> {register.handleRegister(req, res, db, bcrypt)});
app.post('/api/verify', (req,res)=>{verify.handleVerifyRequest(req, res, db)});
app.post('/api/signin', (req,res)=> {signin.handleSignin(req, res, db, bcrypt)});
app.get('/api/profilex', withAuth, function(req, res) {
  res.status(200).json('Potato');
});
app.get('/api/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});

// app.get('/api/*', (req,res) => {res.status(404).redirect('https://react.infotsav.in/404')});

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
	console.log(`We are on on port ${PORT}!`);
})
