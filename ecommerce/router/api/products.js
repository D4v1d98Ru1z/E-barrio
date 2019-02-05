const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const { query } = req.query

    res.status(200).json({
        data: productMock,
        message: 'products already listed'
    })
})

router.get('/:productId', (req, res) => {
    const { productId } = req.params

    res.status(200).json({
        data: productMock[0],
        message: 'product retrieved'
    })
})

router.post('/', (req, res) => {
    res.status(201).json({
        data: productMock[0],
        message: 'products already listed'
    })
})

router.put('/:productId', (req, res) => {
    res.status(200).json({
        data: productMock,
        message: 'products updated'
    })
})

router.delete('/', (req, res) => {
    res.status(200).json({
        data: productMock[0],
        message: 'products deleted'
    })
})

module.exports = router