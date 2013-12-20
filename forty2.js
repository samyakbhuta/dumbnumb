var fortune = require('fortune')
  , app = fortune({
    db: 'numbers'
  })
  .resource('number', {
    name: String,
    descriptions: ['description'] // "has many" relationship to descriptions
  })
  .resource('description', {
    body: String,
    number: 'number' // "belongs to" relationship to a number
  })
  .listen(1337);