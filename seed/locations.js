const db = require('../db')
const Location = require('../models/location') 
const Employee = require('../models/employee') 
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const locations = [
        {location_id: "N1", address: "12 John St, New York, NY 10038", city: "New York", country: "USA"},
        {location_id: "N2", address: "38 Lexington Ave, New York, NY 10010", city: "New York", country: "USA"},
    ]
    await Location.insertMany(locations)
    console.log("created locations")
}

const run = async() => {
    await main()
    db.close()
}
run()