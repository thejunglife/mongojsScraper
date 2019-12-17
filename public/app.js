


  document.addEventListener('click', e => {
    if (e.target.id === "scrapeData") {
      axios.get('https://www.npr.org/sections/news/')
          .then(({data}) => {
            console.log('sucess')
          })
          .catch(e => console.error(e))
    }
  // axios.get('https://www.npr.org/sections/news/')
  //     .then(({ data: html }) => {
  //         const $ = cheerio.load(html)
  //         $('h2.title').each((i, elem) => {
  //           console.log($(elem).text())
  //         })
  //     })
  //     .catch(e => console.error(e))
  })