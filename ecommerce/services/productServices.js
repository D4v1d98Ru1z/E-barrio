const productMocks = require('../utils/products/products')
const MongoLib = require('../lib/mongo')

class productService {
    constructor(){
        // Define the collection and create a new instance of mongo lib
        this.collection = 'products'
        this.mongoDB = new MongoLib()
    }

    async getProducts({ tags }){
        // Create a mongo query. To search into an array in mongo: object + $in: tags
        const query = tags && { tags: {
            $in: tags
        }}
        // Get the products asynchronously 
        const products = await this.mongoDB.getAll(this.collection, query)
        
        // In case that the products never exist return empty array
        return products || []
    }
    getProduct({ productId }){
        return Promise.resolve(productMocks[0])
    }
    createProduct({ product }){
        return Promise.resolve(productMocks[0])
    }
    updateProduct({ productId }){
        return Promise.resolve(productMocks[0])
    }
    deleteProduct({ productId, product }){
        return Promise.resolve(productMocks[0])
    }
}

module.exports = productService