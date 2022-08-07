//requires
const route = require('express').Router();
const controllerCavaleiros = require('../controllers/cavaleiro.controller');

//Routes

//GetAll
route.get('/all-cavaleiros', controllerCavaleiros.findAllCavaleirosController);

//GetById
route.get(
  '/one-cavaleiro/:id',
  controllerCavaleiros.findByIdCavaleiroController,
);

// Create
route.post('/create-cavaleiro', controllerCavaleiros.createCavaleiroController);
//Put

route.put(
  '/update-cavaleiro/:id',
  controllerCavaleiros.updateCavaleiroController,
);

//Delete
route.delete(
  '/delete-cavaleiro/:id',
  controllerCavaleiros.deleteCavaleiroController,
);

//exports routes
module.exports = route;
