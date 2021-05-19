const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    column:{
        type: Number,
        min: 0,
        max: 3,
        default: 0,
    },
    text:{
        type: String,
        required: true
    }
})

const Card = mongoose.model('Card', cardSchema)

module.exports = Card