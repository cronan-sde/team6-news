const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


//returns json for valid user if name and pass are matches in db
//returns error if no match on name or pass
//populates the bookmarks array with the articles stored in db for use on front-end
exports.user_login = async (req, res) => {
  const {username, password} = req.body;

  //getting user matching username and getting their password from db
  const user = await User.findOne({username}).select('password');
  //if no match, return error
  if (!user) {
    return res.status(400).json("Error: Invalid username/password");
  }
  //check entered password against hashed db password
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  //if the passwords don't match, return error
  if (!isPasswordMatch) {
    return res.status(400).json("Error: Invalid username/password");
  }

  //If passwords matched return the user and assign token
  User.findOne({username}).populate("bookmarks", "-bookmarkedBy")
    .then(user => {
      const token = jwt.sign({
        username: user.username,
        email: user.email,
        bookmarks: user.bookmarks,
        favorites: user.favorites
      }, process.env.SECRET_JWT_KEY);
      res.header('auth-token', token).send(token);
    });
}

//ensures all proper fields are filled out, no duplicates in db and hashes password for safer storage in db
exports.user_signup = async (req, res) => {
  //getting user info
  const {username, email, password, createdAt} = req.body;

  //Hashing passwords using bcryptjs
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //creating a new User based of mongoose schema
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    createdAt
  });


  //save new user to database, upon success json message User Registered, otherwise 400 bad request
  newUser.save()
    .then(() => res.status(201).json('User Registered'))
    .catch(err => res.status(400).json(err));
}