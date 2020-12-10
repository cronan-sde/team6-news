//express router and article schema
const router = require('express').Router();
let Article = require('../models/article.model');

//TODO: Add articles to user bookmarks
//use uuid to store reference of article in userSchema []
router.route('/article').post((req, res) => {
  //get article info
  const title = req.body.title;
  const description = req.body.description;
  const url = req.body.url;
  const imageUrl = req.body.imageUrl;
  const published = req.body.published;
  const source = req.body.source;
  const uuid = req.body.uuid;

  const newArticle = new Article({
    title,
    description,
    url,
    imageUrl,
    published,
    source,
    uuid
  });

  newArticle.save()
    .then(() => res.json('Article Added'))
    .catch(err => res.status(400).json('Error: ' + err));
});


//export router
module.exports = router;