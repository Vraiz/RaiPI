const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
    connectToDB: (cb) => {
        MongoClient.connect(process.env.DATABASE_URL)
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}