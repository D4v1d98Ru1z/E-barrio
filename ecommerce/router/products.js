const express = require('express')
const router = express.Router()

const products = [
    {
        name: 'Razer keyboard ',
        price: 150,
        img: 'https://d4kkpd69xt9l7.cloudfront.net/sys-master/images/h3d/hb7/9016072011806/razer-huntsman-hero-desktop-gaming-keyboard.jpg'
    },
    {
        name: 'Headset Logitech G433',
        price: 100,
        img: 'https://www.logitechg.com/content/dam/gaming/en/products/g433/g433-feature2-desktop.jpg.imgw.1888.1888.jpeg'
    }
]

router.get('/', function(req, res) {
    // products.pug
    res.render('products', { products })
})

module.exports = router