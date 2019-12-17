const { Article } = require('../models')
const axios = require('axios')
const cheerio = require('cheerio')    
const db = require('mongojs')('articledb')

module.exports = app => {

  // scraping the articles!
  // axios.get('https://www.npr.org/sections/news/')
  //     .then(({ data: html }) => {
  //         const $ = cheerio.load(html)
  //         $('h2.title').each((i, elem) => {
  //           db.articles.insert({heading: $(elem).text() })
  //         })
  //     })
  //     .catch(e => console.error(e))

  // GET all articles
  app.get('/articles', (req, res) => {
    Article.find()
        .then(articles => {
          res.json(articles)
        })
        .catch(e => console.error(e))
  })
      // POST one articles
  app.post('/articles', (req, res) => {
   axios.get('https://www.npr.org/sections/news/')
      .then(({ data: html }) => {
          const $ = cheerio.load(html)

          $('div.item-info').each((i, elem) => {
            console.log(elem)
            // db.articles.insert({heading: $(elem).text() })
          })
      })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.delete('/articles', (req, res) => {
    Article.deleteMany()
        .then(() =>res.sendStatus(200))
        .catch(e => console.error(e))
  })

}