const express=require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');


const db = knex({
  client: 'mysql',
  connection: {
  	connectionString: process.env.DATABASE_URL,
  	ssl: true
    // host : 'postgresql-vertical-98606',
    // user : 'ojaswa',
    // password : 'ojaswa',
    // database : 'infotsav'
  }
});

const app=express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req,res)=>{ res.send('it is working')})

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
	console.log(`We are on on port ${PORT}!`);
})
