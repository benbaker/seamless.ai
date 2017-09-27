const { url, credentials } = require('./config')
const request = require('request')
const async = require('async')

const search = function(q,cb){
  const qs = Object.assign(credentials,{q:q})
  request.get({qs:qs,url:url}, (e,r,results) => {
    if(e) console.error(e,r)
    const items = JSON.parse(results).items
    const result = Array.isArray(items) && items.length 
      ? items[0] 
      : {title:"No results found"}
    const data = Object.assign(result,{name:q})
    cb(e, data)
  })
}

module.exports = function(companies, cb) {
  async.mapLimit(companies, 13, search, cb)
}