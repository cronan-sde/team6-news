//get schemas required for favorites
const User = require('../models/user.model');

exports.add_to_favorites = (req, res) => {
  const {username, source} = req.params;

  User.findOneAndUpdate({username: username}, 
    {$addToSet: {favorites: source}}, {safe: true, new: true},
    function(err, result) {
      if (!result) {
        return res.status(400).json("Error: Invalid username");
      }
      return res.status(200).json("Success");
    })
}

exports.remove_favorite = (req, res) => {
  const {username, source} = req.params;

  User.findOneAndUpdate({username: username},
    {$pull: {favorites: source}}, {safe: true, new: true},
    function(err, result) {
      if (result === null) {
        return res.status(400).json("Error: Invalid username");
      }
      return res.status(200).json("Success"); 
    })
}