const express = require('express')
const router = express.Router()
const ProductService = require('../../services/productServices')

const productService = new ProductService()

router.get('/', async (req, res, next) => {
    const { query } = req.query
    try {
        const products = await productService.getProducts({ tags })
    
        res.status(200).json({
            data: products,
            message: 'products already listed'
        })
    }
    catch(err){
        next(err)
    }
})

router.get('/:productId', async (req, res, next) => {
    const { productId } = req.params
    try {
        const product = await productService.getProduct({ productId })
    
        res.status(200).json({
            data: product,
            message: 'product retrieved'
        })
    }
    catch(err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    const { body: product } = req
    try {
        const createproduct = await productService.createProduct({ product })
    
        res.status(201).json({
            data: createproduct,
            message: 'products already listed'
        })
    }
    catch(err){
        next(err)
    }
})

router.put('/:productId', async (req, res, next) => {
    const { productId } = req.params
    const { body: product }
    try {
        const updateProduct = await productService.updateProduct({ productId, product })
        res.status(200).json({
            data: updateProduct,
            message: 'products updated'
        })
    }
    catch(err){
        next(err)
    }
})

router.delete('/productId', async (req, res, next) => {
    const { productId } = req.params
    try {
        const product = await productService.deleteProduct({ productId })
        res.status(200).json({
            data: product,
            message: 'products deleted'
        })
    }
    catch(err){
        next(err)
    }
})

module.exports = router