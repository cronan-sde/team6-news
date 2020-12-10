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
    type: String
  },
  uuid: {
    type: String,
    unique: true,
    required: true
  }
})

const Article = mongoose.model('Article', ArticleSchema);

//exporting schema
module.exports = Article;