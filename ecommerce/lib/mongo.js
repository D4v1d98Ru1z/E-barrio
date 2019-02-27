const { MongoClient } = require('mongodb')
const config = require('../config/index')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName

const MONGO_URI = `mongodb://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/?authSource=${DB_NAME}`

class MongoDB {
    constructor(){
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true })
        this.dbName = DB_NAME
    }

    connect(){
        return new Promise((resolve, reject) => {
            this.client.connect(err => {
                if(err){
                    reject(err)
                }
                console.log('Connected succesfully to MongoDB')
                // Resolve the promise with the client already connected to the DB
                resolve(this.client.db(this.dbName))
            })
        })
    }
}