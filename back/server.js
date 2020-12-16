require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 3000;

//path to traverse to front-end folder
let reqPath = path.join(__dirname, '../');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(reqPath, 'front/dist'))); 


//connecting mongoose to mongodb 
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log("DB CONNECTION OPEN"); //if no errors
})
.catch(err => { //catching errors
  console.log("CONNECTION ERROR");
  console.log(err);
});

/*
 * Root route, renders front-end
*/
app.get('/', (req, res) => {
  res.sendFile(path.join(reqPath, 'front/dist/index.html'));
})

//getting routers
const userRouter = require('./routes/user');
const articleRouter = require('./routes/article');
const favSourcesRouter = require('./routes/favorites');


/*
 * Setting routes using imported routers
*/
app.use('/user', userRouter);
app.use('/bookmarks', articleRouter);
app.use('/favorites', favSourcesRouter)

// Open port 3000 on server and log port number to console
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});