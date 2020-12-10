//getting express router and user schema
const router = require('express').Router();
let User = require('../models/user.model');

//'/login' needs to find a user based on username, password
//TODO: FIX AFTER LUNCH
router.route('/login').post((req, res) => {
  const userToFind = req.body.username;
  const pass = req.body.password;

  if (!validateSecret(userToFind, pass)) {
    return res.status(400).json("Error: Incorrect username/password");
  }
  User.findOne({username: userToFind})
    .then(user => {
      res.json(user);
    })
});

//users can be added to DB through '/user/signup'
router.route('/signup').post((req, res) => {
  //getting user info
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const createdAt = req.body.createdAt;

  //creating a new User based of mongoose schema
  const newUser = new User({
    username,
    email,
    password,
    createdAt
  });

  //save new user to database, upon success json message User Registered, otherwise 400 bad request
  newUser.save()
    .then(() => res.json('User Registered'))
    .catch(err => res.status(400).json('Error: ' + err));
});

function validateSecret(name, pass) {
  User.findOne({username: name}).select('password')
  .then(function(user) {
    if (user && user.password === pass) {
      return true;
    }
    else {
      return false;
    }
  })
}

//exporting the router for use by the server
module.exports = router;