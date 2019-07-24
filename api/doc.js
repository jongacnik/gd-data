const { linkType, get } = require('get-content')
const { parse } = require('node-html-parser')
const { load } = require('archieml')

module.exports = (req, res) => {
  const { url = '' } = req.query
  const type = linkType(url)

  if (type === 'url') {
    get(url).then((pageContent) => {
      const root = parse(pageContent)
      const content = root.querySelector('#contents')
      const parsed = load(content.structuredText)
      res.json(parsed)
    }).catch((err) => {
      res.send(err)
    })
  } else {
    res.send({})
  }
}