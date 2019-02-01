const express = require('express')
const app = express()
const path = require('path')
const productsRouter = require('./router/products')

app.get('/', (req, res, next) => {
    res.send({
        hello: 'Hello World'
    })
})

app.use('/static', express.static(path.join(__dirname, "public")))

app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'pug')

app.use('/products', productsRouter)

const server = app.listen(8000, function(){
    console.log(`Server running on port http://localhost:${server.address().port}`)
})