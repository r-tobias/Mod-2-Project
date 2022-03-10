const db = require('../db')
const Drink = require('../models/drink') 

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const drinks = [
        {name: "Matcha Latte", recipe: "Matcha powder, milk, sugar", price: 4.75, topping: "red beans"},
        {name: "Jasmine Milk Tea", recipe: "Green tea, milk, sugar", price: 4.75, topping: "tapioca pearls"},
    ]
    await Drink.insertMany(drinks)
    console.log("created drinks")
}

const run = async() => {
    await main()
    db.close()
}
run()
