const productMocks = require('../utils/products/products')
const MongoLib = require('../lib/mongo')

class productService {
    constructor(){
        // Define the collection and create a new instance of mongo lib
        this.collection = 'products'
        this.mongoDB = new MongoLib()
    }

    async getProducts({ tags }){
        // Create a mongo query. To search into array in mongo: object + $in: tags
        // mongo do not get the tags in a simpler way, need to convert it into a object
        const query = tags && { tags: {
            $in: tags
        }}
        // Get the products asynchronously 
        const products = await this.mongoDB.getAll(this.collection, query)
        
        // In case that the products never exist return empty array
        return products || []
    }
    async getProduct({ productId }){
        // Getting a product according to the mongo lib
        const product = await this.mongoDB.get(this.collection, productId)
        // Return the product or just an empty object if there is no pruduct
        return product || {}
    }
    async createProduct({ product }){
        // Creating a product according to the mongo lib
        const createProductId = await this.mongoDB.create(this.collection, product)
        return createProductId
    }
    async updateProduct({ productId, product }){
        // Updating a product according to the mongo lib
        const updateProductId = await this.mongoDB.update(ths.collection, productId, product)
        return updateProductId
    }
    async deleteProduct({ productId }){
        // Deleting a product according to the mongo lib
        const deleteProductId = await this.mongoDB.delete(this.collection, productId)
        return deleteProductId 
    }
}

module.exports = productService