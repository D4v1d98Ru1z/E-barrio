const { MongoClient, ObjectId } = require('mongodb')
const { config } = require('../config')

// Encode characters
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName

// Calling the Mongo URI
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/test?retryWrites=true`
// `mongodb://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/?authSource=${DB_NAME}`

class MongoLib {
    constructor(){
        // Setting the client and db from Mongo
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true })
        this.dbName = DB_NAME
    }
    
    // Connecting to Mongo
    connect(){
        return new Promise((resolve, reject) => {
            // If the mongo client stablish a connection
            this.client.connect(err => {
                // Error first callback 
                if(err){
                    reject(err)
                }
                console.log('Connected succesfully to MongoDB')
                // Resolve the promise with the client already connected to the DB
                resolve(this.client.db(this.dbName))
            })
        })
    }

    // List all the items of any collection
    getAll(collection, query){
        // Return the promise of connect
        return this.connect().then(db => {
            // Return the db with a mongo methods 
            return db.collection(collection).find(query).toArray() // toArray allows me to manipulate this call
        })
    }

    // Return the id not the product
    get(collection, id){
        return this.connect().then(db => {
            // mongo method findOne -> used when need to find one product only
            return db.collection(collection).findOne({
                _id: ObjectId(id)
            })
        })
    }

    create(collection, data) {
        return this.connect().then(db => {
            return db.collection(collection).insertOne(data)
        }).then(result => result.insertedId)
    }

    update(collection, id, data) {
        return this.connect().then(db => {
            return db.collection(collection)
            .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true })
        })
        .then(result => result.upsertedId || id)
    }

    delete(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection)
            .deleteOne({
                _id: ObjectId(id)
            })
            .then(() => id)
        })
    }
}

module.exports = MongoLib