//getting express router and user controller
const router = require('express').Router();
const userController = require('../controllers/user');

//post route /login to validate user
router.post('/login', userController.user_login);

//post route to add users to db
router.post('/signup', userController.user_signup);

//exporting the router for use by the server
module.exports = router;