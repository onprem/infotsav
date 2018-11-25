const express=require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
 

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

app.get('/', (req,res)=>{ res.send('it is working')});
app.post('/register', (req,res)=> {register.handleRegister(req, res, db, bcrypt)});


const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
	console.log(`We are on on port ${PORT}!`);
})
