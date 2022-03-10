const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Location = new Schema(
    {
        location_id: {type: String, required: true },
        address: {type: String, required: true },
        city: {type: String, required: true },
        country: {type: String, required: true},
    },
    {timestamps: true}
)

module.exports = mongoose.model('locations', Location)