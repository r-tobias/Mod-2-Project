const { response } = require('express');
const res = require('express/lib/response');
const Drink = require('../models/drink');
const Cafe  = require('../models/cafe')
const Location = require('../models/location') 
const Employee = require('../models/employee') 

//CRUD for Drink Schema
async function createDrink (req, res) {
    try {
        const drink = await new Drink(req.body)
        await drink.save()
        return res.status(201).json({
            drink,
        })

    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}

async function getAllDrinks(req, res) {
    try {
        const drinks = await Drink.find()
        return res.status(200).json({drinks})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
async function getDrinksById(req, res) {
    try {
        const {id} = req.params;
        const drink = await Drink.findById(id);
        if (drink) {
            return res.status(200).json({drink})
        }
        return res.status(404).send('Drink with the specified ID does not exist');

    } catch (error) {
        return response.status(500).send(error.message);
    }
}

//updating
const updateDrink =  (req, res) => {
    try {
      const { id } = req.params
     Drink.findByIdAndUpdate(id, req.body, { new: true }, (err, drink) => {
       
        if (err !== null) {
          console.log(err, 'error')
          res.status(404).send(err.message)
        } else {
          console.log(drink)
          res.json(drink)
        }
      })
    } catch (error) {
     return  res.status(500).send(error.message)
    }
  }

//deleting

async function deleteDrink(req, res) {
    try {
        const {id} = req.params;
        const deleted = await Drink.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Drink deleted')
        }
        throw new Error("Drink not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//CRUD for Employee Schema
async function createEmployee (req, res) {
    try {
        const employee = await new Employee(req.body)
        await employee.save()
        return res.status(201).json({
            employee,
        })

    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}

async function getAllEmployees(req, res) {
    try {
        const employees = await Employee.find()
        return res.status(200).json({employees})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
async function getEmployeesById(req, res) {
    try {
        const {id} = req.params;
        const employee = await Employee.findById(id);
        if (employee) {
            return res.status(200).json({employee})
        }
        return res.status(404).send('employee with the specified ID does not exist');

    } catch (error) {
        return response.status(500).send(error.message);
    }
}

//updating
const updateEmployee =  (req, res) => {
    try {
      const { id } = req.params
      Employee.findByIdAndUpdate(id, req.body, { new: true }, (err, employee) => {
       
        if (err !== null) {
          console.log(err, 'error')
          res.status(404).send(err.message)
        } else {
          console.log(employee)
          res.json(employee)
        }
      })
    } catch (error) {
     return  res.status(500).send(error.message)
    }
  }

//deleting

async function deleteEmployee(req, res) {
    try {
        const {id} = req.params;
        const deleted = await Employee.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('employee deleted')
        }
        throw new Error("employee not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//CRUD for Cafe Schema
async function createCafe (req, res) {
    try {
        const cafe = await new Cafe(req.body)
        await cafe.save()
        return res.status(201).json({
            cafe,
        })

    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}

async function getAllCafes(req, res) {
    try {
        const cafes = await Cafe.find()
        return res.status(200).json({cafes})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
async function getCafesById(req, res) {
    try {
        const {id} = req.params;
        const cafe = await Cafe.findById(id);
        if (cafe) {
            return res.status(200).json({cafe})
        }
        return res.status(404).send('cafe with the specified ID does not exist');

    } catch (error) {
        return response.status(500).send(error.message);
    }
}

//updating
const updateCafe =  (req, res) => {
    try {
      const { id } = req.params
      Cafe.findByIdAndUpdate(id, req.body, { new: true }, (err, cafe) => {
       
        if (err !== null) {
          console.log(err, 'error')
          res.status(404).send(err.message)
        } else {
          console.log(cafe)
          res.json(cafe)
        }
      })
    } catch (error) {
     return  res.status(500).send(error.message)
    }
  }

//deleting

async function deleteCafe(req, res) {
    try {
        const {id} = req.params;
        const deleted = await Cafe.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('cafe deleted')
        }
        throw new Error("cafe not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



//CRUD for Location Schema
async function createLocation (req, res) {
    try {
        const location = await new Location(req.body)
        await location.save()
        return res.status(201).json({
            location,
        })

    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}

async function getAllLocations(req, res) {
    try {
        const locations = await Location.find()
        return res.status(200).json({locations})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
async function getLocationsById(req, res) {
    try {
        const {id} = req.params;
        const location = await Location.findById(id);
        if (location) {
            return res.status(200).json({location})
        }
        return res.status(404).send('location with the specified ID does not exist');

    } catch (error) {
        return response.status(500).send(error.message);
    }
}

//updating
const updateLocation =  (req, res) => {
    try {
      const { id } = req.params
      Location.findByIdAndUpdate(id, req.body, { new: true }, (err, location) => {
       
        if (err !== null) {
          console.log(err, 'error')
          res.status(404).send(err.message)
        } else {
          console.log(location)
          res.json(location)
        }
      })
    } catch (error) {
     return  res.status(500).send(error.message)
    }
  }

//deleting

async function deleteLocation(req, res) {
    try {
        const {id} = req.params;
        const deleted = await location.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('location deleted')
        }
        throw new Error("location not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    createDrink,
    getAllDrinks,
    getDrinksById,
    updateDrink,
    deleteDrink,
    createEmployee,
    getAllEmployees,
    getEmployeesById,
    updateEmployee,
    deleteEmployee,
    createCafe,
    getAllCafes,
    getCafesById,
    updateCafe,
    deleteCafe,
    createLocation,
    getAllLocations,
    getLocationsById,
    updateLocation,
    deleteLocation

    
}