const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Drink = require("./drink")
const Location = require('./location')
const Employee = require('./employee')

const Cafe = new Schema(
    {
        name: {type: String, required: true },
        cafe_id:  {type: String, required: true },
        hours: {type: String, required: true }, 
        address: {type: Schema.Types.String, ref: Location }, //ref location
        employees: {type: Schema.Types.String, ref: Employee }, //ref employee
        drink: {type: Schema.Types.String, ref: Drink } // ref drink
    },
    {timestamps: true}
)

module.exports = mongoose.model('cafes', Cafe)