//get express router and favorites controller
const router = require('express').Router();
const favController = require('../controllers/favorites');


//post delete routes for /:username/:source
router.route('/:username/:source')
.post(favController.add_to_favorites)
.delete(favController.remove_favorite);

//exporting the router
module.exports = router;