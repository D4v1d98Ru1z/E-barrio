const express = require('express')
const router = express.Router()
const products = require('../utils/products/products')

router.get('/', function(req, res) {
    // products.pug
    res.render('products', { products })
})

module.exports = router