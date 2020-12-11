//express router and article schema
const router = require('express').Router();
let Article = require('../models/article.model');
let User = require('../models/user.model');

//Done: Add articles to user bookmarks
//use uuid to store reference of article in userSchema []
router.route('/article/:username').post((req, res) => {
  //get article info
  const { title, description, url, imageUrl, published, source, uuid } = req.body;

  //user requesting bookmark
  const username = req.params.username;

  //check if existing article in db
  Article.findOne({uuid: uuid}, function(err, article) {
    //if article doesn't exist in DB
    if (!article) {
      //create new article
      const newArticle = new Article({
        title,
        description,
        url,
        imageUrl,
        published,
        source,
        uuid
    });

      article = newArticle; //set article parameter to newArticle
    }
    //find user and if not already bookmarked, add article to bookmarks
    User.findOne({username: username}, function(err, user) {
      if (!user) {
        return res.status(400).json("Error: user doesn't exist");
      }
      if (user.bookmarks.includes(article._id)) {
        return res.status(400).json("Error: already bookmarked");
      }
      else {
        user.bookmarks.push(article); //adding article to user bookmarks
        user.save(); //saving changes
        //adding user to article bookmarkedBy
        article.bookmarkedBy.push(user);
        //saving article to db
        article.save();
        return res.status(200).json("Success"); //successful operation
      }
    })
  }); 
});


//export router
module.exports = router;