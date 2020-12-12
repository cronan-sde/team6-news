//express router and article schema
const router = require('express').Router();
const Article = require('../models/article.model');
const User = require('../models/user.model');

//Done: Add articles to user bookmarks
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

//Done: add route to remove article from user bookmarks
//Done: remove user from article followers
//DONE: need to check if article has followers left
//Done: if no followers left remove article from db
router.route('/article/:username/:articleId').delete((req, res) => {
  const {username, articleId} = req.params;

  //finding user and removing the ID referencing the Article from bookmarks
  User.findOneAndUpdate({username: username}, {$pull: {bookmarks: articleId}}, {safe: true}, function(err, user) {
    if (err) {
      return res.status(400).json("Error: Article not found"); //if an error occurs article id is wrong
    }
    if (!user) {
      return res.status(400).json("Error: User not found"); //if user is null, username was wrong
    }
    //Now searching the article to remove the user from its bookmarkedBy array
    Article.findByIdAndUpdate(articleId, {$pull: {bookmarkedBy: user._id}}, {safe: true, new: true}, function(err, article){
      if (!article) {
        return res.status(400).json("Error: Article no longer exists in DB"); //error here means article was already removed
      }
      let result = article.bookmarkedBy.length; //checking how many users are bookmarking this article
      if (result === 0) {
        //delete article from db, no users are bookmarking it
        Article.findByIdAndDelete(articleId, function(err, delArticle) {
          console.log("DELETED ARTICLE: " + delArticle);
        })
      }
      return res.json("Successful bookmark removal"); //successful removal of associations between User and Article
    })
  })
})



//export router
module.exports = router;