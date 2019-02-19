const express = require('express')
const path = require('path')
const bodyParse = require('body-parser')
const productsRouter = require('./router/view/products')
const productsAPIRouter = require('./router/api/products')

// app
const app = express()

// middlewares
app.use(bodyParse.json()) // send req post json body allows to be read

// static files
app.use('/static', express.static(path.join(__dirname, "public")))

// view engine setup
app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'pug')

// routes
app.use('/products', productsRouter)
app.use('/api/products', productsAPIRouter)


// redirect
app.get('/', (req, res, next) => {
    res.redirect('/products')
})

// server
const server = app.listen(8000, function(){
    console.log(`Server running on port http://localhost:${server.address().port}`)
})