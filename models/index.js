const { model, Schema } = require('mongoose')

const Article = require('./Article.js')(model, Schema)

module.exports = { Article }