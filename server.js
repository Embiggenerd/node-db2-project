const express = require('express')

const db = require('./db')

const server = express()

server.use(express.json())

server.get('/cars', async (req, res, next) => {
    try {
        const cars = await db('cars')
            .select('*')
        res.json(cars)
    } catch (e) {
        next(e)
    }
})

server.post('/cars', async (req, res, next) => {
    try {
        const { make, model, vin, mileage } = req.body
        const [newCarID] = await db('cars')
            .insert({ make, model, vin, mileage })

        const newCar = await db('cars')
            .select('*')
            .where({ id: newCarID })

        res.json(newCar)
    } catch (e) {
        next(e)
    }
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(err.httpStatusCode || 500).json({
        message: err.message
    })
})

module.exports = server