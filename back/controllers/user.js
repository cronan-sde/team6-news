const User = require('../models/user.model');
const bcrypt = require('bcryptjs');


//returns json for valid user if name and pass are matches in db
//returns error if no match on name or pass
//populates the bookmarks array with the articles stored in db for use on front-end
exports.user_login = (req, res) => {
  const {username, password} = req.body;

  User.findOne({
    username,
    password
  })
  //populates bookmarks with article, hids bookmarkedBy array
  .populate("bookmarks", "-bookmarkedBy") 
    .then(user => {
      if (user) {
        return res.json(user);
      }
      return res.status(400).json("Error: Invalid username/password");
    })
}

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
    .then(() => res.json('User Registered'))
    .catch(err => res.status(400).json(err));
}