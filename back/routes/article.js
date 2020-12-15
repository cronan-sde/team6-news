//express router and article controller
const router = require('express').Router();
const articleController = require('../controllers/article');

//Done: Add articles to user bookmarks
router.post('/article/:username', articleController.bookmark_article);

//Done: remove articles from user bookmarks
router.delete('/article/:username/:articleId', articleController.remove_bookmarks);



//export router
module.exports = router;