module.exports = (model, Schema) => {

  const Article = new Schema({
    heading: String,
    summary: String,
    url: String
  })



  return model('Article', Article)
}