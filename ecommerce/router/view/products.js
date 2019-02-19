const express = require('express')
const router = express.Router()
const ProductService = require('../../services/productServices')

const productService = new ProductService()

router.get('/', async function(req, res, next) {
    const { tags } = req.query
    try {
        const products = await productService.getProducts({ tags })
        // products.pug
        res.render('products', { products })
    }
    catch(err){
        next(err)
    }
})

module.exports = router