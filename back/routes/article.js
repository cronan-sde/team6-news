//express router and article controller
const router = require('express').Router();
const articleController = require('../controllers/article');
//getting auth middleware that validates auth-token to allow access
const auth = require('../middleware/tokenVerify');

//Done: Add articles to user bookmarks
router.post('/article/:username', auth, articleController.bookmark_article);

//Done: remove articles from user bookmarks
router.delete('/article/:username/:articleId', auth, articleController.remove_bookmarks);



//export router
module.exports = router;