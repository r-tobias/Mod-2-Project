const db = require('../db')
const Cafe  = require('../models/cafe')
const Drink = require('../models/drink')
const Location = require('../models/location') 
const Employee = require('../models/employee') 

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const drinks = await Drink.find();
    const N1 = await Location.find({location_id: "N1"})
    const N1Employees = await Employee.find({works_at: "N1"})
    const N2 = await Location.find({location_id: "N2"})
    const N2Employees = await Employee.find({works_at: "N2"})
    // console.log(drinks[1].name)
    // console.log(N1[0].address)
    // console.log(N1Employees[0].name)
 

    const cafes = [
        {name: "CoCo Fresh Tea & Juice", cafe_id: "N1", hours: "11 am - 7 pm", address: N1[0].address, employees: N1Employees[0].name, drink: drinks[0].name},
        {name: "CoCo Fresh Tea & Juice", cafe_id: "N2", hours: "12 pm - 5 pm", address: N2[0].address, employees: N2Employees[0].name, drink: drinks[0].name},
    ]
    await Cafe.insertMany(cafes)
    console.log("created cafes")
    console.log(cafes)
}

const run = async() => {
    await main()
    db.close()
}
run()