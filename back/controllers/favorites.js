//get schemas required for favorites
const User = require('../models/user.model');

/*
 * creating an add_to_favorites function to export with file
*/
exports.add_to_favorites = (req, res) => {
  const {username, source} = req.params;

  //specifying to add to the set favorites
  User.findOneAndUpdate({username: username}, 
    {$addToSet: {favorites: source}}, {safe: true, new: true},
    function(err, result) {
      if (!result) {
        return res.status(400).json({message: "Error: Invalid username"});
      }
      return res.status(200).json({message: "Successfully added to favorites"});
    })
}

/*
 * creating remove_favorites function that exports with file
*/
exports.remove_favorite = (req, res) => {
  const {username, source} = req.params;

  //specifies to pull source from favorites in db
  User.findOneAndUpdate({username: username},
    {$pull: {favorites: source}}, {safe: true, new: true},
    function(err, result) {
      if (result === null) {
        return res.status(400).json({message: "Error: Invalid username"});
      }
      return res.status(200).json({message: "Successfully removed favorite"}); 
    })
}