const  { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

//drinks
router.post('/drinks', controllers.createDrink)
router.get('/drinks', controllers.getAllDrinks)
router.get('/drinks/:id', controllers.getDrinksById)
router.put('/drinks/:id', controllers.updateDrink)
router.delete('/drinks/:id', controllers.deleteDrink)

//employees
router.post('/employees', controllers.createEmployee)
router.get('/employees', controllers.getAllEmployees)
router.get('/employees/:id', controllers.getEmployeesById)
router.put('/employees/:id', controllers.updateEmployee)
router.delete('/employees/:id', controllers.deleteEmployee)

//cafes
router.post('/cafes', controllers.createCafe)
router.get('/cafes', controllers.getAllCafes)
router.get('/cafes/:id', controllers.getCafesById)
router.put('/cafes/:id', controllers.updateCafe)
router.delete('/cafes/:id', controllers.deleteCafe)

//locations
router.post('/locations', controllers.createLocation)
router.get('/locations', controllers.getAllLocations)
router.get('/locations/:id', controllers.getLocationsById)
router.put('/locations/:id', controllers.updateLocation)
router.delete('/locations/:id', controllers.deleteLocation)

module.exports = router;