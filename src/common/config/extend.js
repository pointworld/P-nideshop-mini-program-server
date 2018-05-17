/**
 *
 *
 *
 **/

const model = require('think-model') // ThinkJS 3.x model, support mysql.
const cache = require('think-cache') // Cache for ThinkJS 3.x

module.exports = [
  model(think.app),
  cache
]