//create mongoose schema for articles
const mongoose = require('mongoose');

//articles from api have title, desc, url, image url, publish date, source of news
const ArticleSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  url: {
    type: String
  },
  imageUrl: {
    type: String
  },
  published: {
    type: Date
  },
  source: {
    type: String,
    lowercase: true
  },
  uuid: {
    type: String,
    unique: true,
    required: true
  },
  //storing user Ids who bookmarked the article
  bookmarkedBy: [
   { 
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'User'
    }
  ]
})

const Article = mongoose.model('Article', ArticleSchema);

//exporting schema
module.exports = Article;