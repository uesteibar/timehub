const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/myproject'

const mongo = (callback) => {
  MongoClient.connect(url, (err, db) => {
    callback(err, db)
    db.close()
  })
}

const find = (callback) => {
  MongoClient.connect(url, (err, db) => {
    callback(err, db)
    db.close()
  })
}

const seed = () => {
  mongo(insertSeed)
}

const insertSeed = function(err, db) {
  const collection = db.collection('timelines');
  collection.remove()
  collection.insertOne({
    repo: 'https://github.com/uesteibar/hyperdocs',
    user: 'uesteibar',
    events: [
      {
        type: 'pull_request',
        user: 'uesteibar',
        title: 'Build awesome feature',
      },
      {
        type: 'pull_request',
        user: 'uesteibar',
        title: 'Fix everything I broke before',
      },
    ]
  }, (err, result) => {});
}

module.exports = { mongo, seed, find }
