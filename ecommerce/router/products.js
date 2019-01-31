const express = require('express')
const router = express.Router()

const products = [
    {
        name: 'Mechanical keyboard Razer',
        price: 150
    },
    {
        name: 'Headset Logitech G433',
        price: 100
    }
]

router.get('/', function(req, res) {
    // products.pug
    res.render('products', { products })
})

module.exports = router