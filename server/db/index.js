const MongoClient = require('mongodb').MongoClient
const github = require('../services/api/github')

const url = 'mongodb://localhost:27017/myproject'

const mongo = (callback) => {
  MongoClient.connect(url, (err, db) => {
    callback(err, db)
    db.close()
  })
}

const find = (query, callback) => {
  mongo((err, db) => {
    const col = db.collection('timelines')
    const repo = col.find(query).limit(1).toArray()
    repo.then((data) => callback(data[0]))
  })
}

const insert = (data, callback) => {
  mongo((err, db) => {
    const collection = db.collection('timelines');
    collection.insertOne(data).then(() => callback(data))
  })
}

const cleanDB = () => {
  mongo((err, db) => {
    const collection = db.collection('timelines');
    collection.remove()
  })
}

module.exports = { find, insert, cleanDB }
