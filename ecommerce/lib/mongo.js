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
    // CRUD here
    // List all the items of any collection
    getAll(collection, query){
        // Return the promise of connect
        return this.connect()
        .then(db => {
            // Return the db with a mongo methods 
            return db.collection(collection).find(query).toArray() // toArray allows me to manipulate this call
        })
    }

    // Getting the id not the product
    get(collection, id){
        // Connecting into de DB
        return this.connect()
        .then(db => {
            // mongo method findOne -> used when need to find one product only
            return db.collection(collection).findOne({ _id: ObjectId(id) })
        })
    }
    // Create new data
    create(collection, data) {
        // Connecting into de DB
        return this.connect()
        .then(db => {
            // mongo insert only one element
            return db.collection(collection).insertOne(data)
        })
        // Insert the id
        .then(result => result.insertedId)
    }
    // Update
    update(collection, id, data) {
        // Connecting into de DB
        return this.connect()
        .then(db => {
            return db.collection(collection)
            // Update one element. $set -> replace the value. upsert true -> creates new document
            .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true })
        })
        // Update the id
        .then(result => result.upsertedId || id)
    }
    // Delete
    delete(collection, id) {
        // Connecting into de DB
        return this.connect()
        .then(db => {
            // Mongo query that delete the id
            return db.collection(collection)
            .deleteOne({ _id: ObjectId(id) })
            .then(() => id)
        })
    }
}

module.exports = MongoLib