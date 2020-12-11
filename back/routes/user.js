//getting express router and user schema
const router = require('express').Router();
let User = require('../models/user.model');

//'/login' needs to find a user based on username, password
//DONE: FIX AFTER LUNCH
//returns json for valid user if name and pass are matches in db
//returns error if no match on name or pass
router.route('/login/:username&:pass').get((req, res) => {
  const userToFind = req.params.username;
  const pass = req.params.pass;

  User.findOne({
    username: userToFind,
    password: pass
  }, function(err, user) {
    if (user !== null) {
      return res.json(user);
    }
    return res.status(400).json("Error: Invalid username/password");
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

//exporting the router for use by the server
module.exports = router;