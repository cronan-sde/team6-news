require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;

//requiring User model
const User = require('./models/user');


//connecting mongoose to mongodb 
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("DB CONNECTION OPEN"); //if no errors
})
.catch(err => { //catching errors
  console.log("CONNECTION ERROR");
  console.log(err);
});



// Open port 3000 on server and log port number to console
app.listen(3000, () => {
  console.log("Listening on port 3000");
});