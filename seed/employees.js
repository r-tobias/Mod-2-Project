const db = require('../db')
// const Cafe = require('../models/cafe')
// const Location = require('../models/location')  
const Employee = require('../models/employee') 
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
//books
const main = async () => {
    // const newYorkEmployees = await Location.find({city: "New York"})


    const employees = [
        {
            name: "John Smith", 
            date_of_birth: "January 2, 1990", 
            position: "Cashier", 
            availability: "Monday - Friday Anytime",
            works_at: "N1", // ref location
            
        },
        {
            name: "Jenna Sith", 
            date_of_birth: "January 2, 1990", 
            position: "Cashier", 
            availability: "Monday - Friday Anytime",
            works_at: "N1", // ref location
            
        },
        {
            name: "Jessica Smithson", 
            date_of_birth: "Febuary 12, 1995", 
            position: "Cashier", 
            availability: "Monday - Wednesday Anytime",
            works_at: "N2", // ref location
            
        },

    ]
    await Employee.insertMany(employees)
    console.log("added employees")
    console.log(employees)
}

const run = async() => {
    await main()
    db.close()
}
run()
