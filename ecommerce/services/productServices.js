const productMocks = require('../utils/products/products')

class productService {
    constructor(){}

    getProducts({ tags }){
        return Promise.resolve(productMocks)
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