const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Drink = new Schema(
    {
        name: {type: String, required: true }, 
        recipe: {type: String, required: true }, 
        price: {type: Number, required: true }, 
        topping: {type: String, required: false },
    },
    {timestamps: true}
)

module.exports = mongoose.model('drinks', Drink)