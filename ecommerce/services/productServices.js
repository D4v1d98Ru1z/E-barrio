const productMocks = require('../utils/products')

class productService {
    constructor(){}

    getProducts({ tags }){
        return Promise.resolve(productMocks)
    }
    getProduct({ productId }){
        return Promise.resolve(productMocks[0])
    }
    createProducts({ product }){
        return Promise.resolve(productMocks[0])
    }
    updateProducts({ productId }){
        return Promise.resolve(productMocks[0])
    }
    deleteProducts({ productId }){
        return Promise.resolve(productMocks[0])
    }
}

module.exports = productMocks