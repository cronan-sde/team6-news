//get express router
const router = require('express').Router();
//get User model
const User = require('../models/user.model');

//Add to User favorites
//Only adds unique sources, no duplicates will be put into favorites
router.route('/add/:username/:source').post((req, res) => {
  const {username, source} = req.params;

  User.findOneAndUpdate({username: username}, 
    {$addToSet: {favorites: source}}, {safe: true, new: true},
    function(err, result) {
      if (!result) {
        return res.status(400).json("Error: Invalid username");
      }
      return res.status(200).json("Success");
    })
})

router.route('/remove/:username/:source').delete((req, res) => {
  const {username, source} = req.params;

  User.findOneAndUpdate({username: username},
    {$pull: {favorites: source}}, {safe: true, new: true},
    function(err, result) {
      if (result === null) {
        return res.status(400).json("Error: Invalid username");
      }
      return res.status(200).json("Success"); 
    })
})

//exporting the router
module.exports = router;