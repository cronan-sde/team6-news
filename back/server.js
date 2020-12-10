require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());


//connecting mongoose to mongodb 
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log("DB CONNECTION OPEN"); //if no errors
})
.catch(err => { //catching errors
  console.log("CONNECTION ERROR");
  console.log(err);
});

//getting routers
const userRouter = require('./routes/user');

//setting route, when going to /user userRouter will load
// '/user/userRouter'
app.use('/user', userRouter);

// Open port 3000 on server and log port number to console
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});