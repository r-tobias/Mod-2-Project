const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Employee = new Schema(
    {
        name: {type: String, required: true }, 
        date_of_birth: {type: String, required: true }, 
        position: {type: String, required: true }, 
        availability: {type: String, required: true },
        works_at: {type: String, required: true }, 
        
    },
    {timestamps: true}
)

module.exports = mongoose.model('employees', Employee)