//get express router and favorites controller
const router = require('express').Router();
const favController = require('../controllers/favorites');
//getting auth middleware to validate auth-token
const auth = require('../middleware/tokenVerify');

//post delete routes for /:username/:source
router.route('/:username/:source')
.post(auth, favController.add_to_favorites)
.delete(auth, favController.remove_favorite);

//exporting the router
module.exports = router;